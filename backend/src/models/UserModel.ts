import { Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/sequelize";
import Profile from "./ProfileModel";
import jwt from "jsonwebtoken";

interface IUser {
    username: string;
    email: string;
    password: string;
}

class User extends Model implements IUser {
    public userid!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public height!: number;
    public mot_lvl!: 'low' | 'medium' | 'high';
    public avg_standing_hrs!: number;
    public times_moved!: number;
    public calories_burned!: number;

    public generateToken(): string {
        console.log("Generating token for user:", this.email);
        const payload = { userid: this.userid, email: this.email, username: this.username, isManager: false };
        const secret = "123456";
        console.log("Token data:", JSON.stringify(payload));
        return jwt.sign(payload, secret);
    }
}

User.init(
    {
        userid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        mot_lvl: {
            type: DataTypes.ENUM('low', 'medium', 'high'),
            allowNull: false,
        },
        avg_standing_hrs: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        times_moved: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        calories_burned: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'User',
        timestamps: false,
    }
);

class Manager extends Model implements IUser {
    managerid!: number;
    username!: string;
    email!: string;
    password!: string;

    public generateToken(): string {
        console.log("Generating token for user:", this.email);
        const payload = { userid: this.managerid, email: this.email, username: this.username, isManager: true };
        const secret = "123456";
        return jwt.sign(payload, secret);
    }
}

Manager.init(
    {
        managerid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'Manager',
        timestamps: false,
    }
);

User.hasMany(Profile, { foreignKey: 'userid' });

export { Manager, User };