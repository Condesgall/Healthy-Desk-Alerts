import { User } from "../models/UserModel";

class UserService {
    static async getUsers() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }

    
    //Recive user username and password form frontend and check if credentials are correct
    static async loginUser(username: string, password: string) {
        try {
            const user = await User.findOne({ where: { username, password } });
    
            if (!user) {
                console.log('User not found or invalid credentials');
                return null;
            }
            console.log('User logged in:', user.username);
            return user;
        } catch (error) {
            console.error("Error in loginUser:", error);
            throw error;
        }
    }

    static async createUser(username: string, email: string, password: string, height: number, mot_lvl: 'low' | 'medium' | 'high') {
        try {
            console.log('Creating user with data:', { username, email, password, height, mot_lvl });
            const newUser = await User.create({
                username,
                email,
                password,
                height,
                mot_lvl,
                avg_standing_hrs: 0, // Default value
                times_moved: 0, // Default value
                calories_burned: 0 // Default value
            });
            console.log('User created:', newUser);
            return newUser;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

}

export default UserService;