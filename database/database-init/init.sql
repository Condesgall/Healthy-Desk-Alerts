CREATE TABLE "User" (
    userid SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    height INT NOT NULL,
    mot_lvl VARCHAR(10) CHECK (mot_lvl IN ('low', 'medium', 'high')),
    score INT,
    score_date DATE,
    alert_streak INT,
    longest_streak INT,
    cur_profile INT
);

CREATE TABLE Profile (
    profileid SERIAL PRIMARY KEY,
    userid INT NOT NULL,
    title VARCHAR(255),
    "deskHeight" INT NOT NULL,
    timer_standing VARCHAR(255),
    timer_sitting VARCHAR(255),
    FOREIGN KEY (userid) REFERENCES "User"(userid)
);

CREATE TABLE "Manager" (
    managerid SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL
);

CREATE TABLE "Day" (
    dayid SERIAL PRIMARY KEY,
    userid INT NOT NULL,
    "date" DATE NOT NULL,
    standing_hrs INT,
    times_moved INT,
    FOREIGN KEY (userid) REFERENCES "User"(userid)
);

/* MOCK DATA */
INSERT INTO "User" (username, "password", email, height, mot_lvl, score, score_date, alert_streak, longest_streak) VALUES
('user1', 'password1', 'user1@example.com', 170, 'medium', 100, '2023-01-01', 5, 10),
('user2', 'password2', 'user2@example.com', 165, 'high', 200, '2023-02-01', 10, 20),
('user3', 'password3', 'user3@example.com', 180, 'low', 150, '2023-03-01', 7, 15),
('user4', 'password4', 'user4@example.com', 175, 'medium', 120, '2023-04-01', 6, 12),
('user5', 'password5', 'user5@example.com', 160, 'high', 180, '2023-05-01', 8, 18);

INSERT INTO "Day" (userid, "date", standing_hrs, times_moved) VALUES
    (1, '2024-10-01', 2, 5),
    (1, '2024-10-02', 3, 6),
    (1, '2024-10-03', 4, 7),
    (1, '2024-10-04', 2, 5),
    (1, '2024-10-05', 3, 6),
    (1, '2024-10-06', 4, 7),
    (1, '2024-10-07', 2, 5),
    (1, '2024-10-08', 3, 6),
    (1, '2024-10-09', 4, 7),
    (1, '2024-10-10', 2, 5),
    (1, '2024-10-11', 3, 6),
    (1, '2024-10-12', 4, 7),
    (1, '2024-10-13', 2, 5),
    (1, '2024-10-14', 3, 6),
    (1, '2024-10-15', 4, 7),
    (1, '2024-10-16', 2, 5),
    (1, '2024-10-17', 3, 6),
    (1, '2024-10-18', 4, 7),
    (1, '2024-10-19', 2, 5),
    (1, '2024-10-20', 3, 6),
    (1, '2024-10-21', 4, 7),
    (1, '2024-10-22', 2, 5),
    (1, '2024-10-23', 3, 6),
    (1, '2024-10-24', 4, 7),
    (1, '2024-10-25', 2, 5),
    (1, '2024-10-26', 3, 6),
    (1, '2024-10-27', 4, 7),
    (1, '2024-10-28', 2, 5),
    (1, '2024-10-29', 3, 6),
    (1, '2024-10-30', 4, 7),
    (1, '2024-10-31', 2, 5),
    (1, '2024-11-01', 3, 6),
    (1, '2024-11-02', 4, 7),
    (1, '2024-11-03', 2, 5),
    (1, '2024-11-04', 3, 6),
    (1, '2024-11-05', 4, 7),
    (1, '2024-11-06', 2, 5),
    (1, '2024-11-07', 3, 6),
    (1, '2024-11-08', 4, 7),
    (1, '2024-11-09', 2, 5),
    (1, '2024-11-10', 3, 6),
    (1, '2024-11-11', 4, 7),
    (1, '2024-11-12', 2, 5),
    (1, '2024-11-13', 3, 6),
    (1, '2024-11-14', 4, 7),
    (1, '2024-11-15', 2, 5),
    (1, '2024-11-16', 3, 6),
    (1, '2024-11-17', 4, 7),
    (1, '2024-11-18', 2, 5),
    (1, '2024-11-19', 3, 6),
    (1, '2024-11-20', 4, 7),
    (1, '2024-11-21', 2, 5),
    (1, '2024-11-22', 3, 6),
    (1, '2024-11-23', 4, 7),
    (1, '2024-11-24', 2, 5),
    (1, '2024-11-25', 3, 6),
    (1, '2024-11-26', 4, 7),
    (1, '2024-11-27', 2, 5),
    (1, '2024-11-28', 3, 6),
    (1, '2024-11-29', 4, 7),
    (1, '2024-11-30', 2, 5),
    (1, '2024-12-01', 3, 6),
    (1, '2024-12-02', 4, 7),
    (1, '2024-12-03', 2, 5),
    (1, '2024-12-04', 3, 6),
    (1, '2024-12-05', 4, 7),
    (1, '2024-12-06', 2, 5),
    (1, '2024-12-07', 3, 6),
    (1, '2024-12-08', 4, 7),
    (1, '2024-12-09', 2, 5),
    (1, '2024-12-10', 3, 6),
    (1, '2024-12-11', 4, 7),
    (1, '2024-12-12', 2, 5),
    (1, '2024-12-13', 3, 6),
    (1, '2024-12-14', 4, 7),
    (1, '2024-12-15', 2, 5),
    (1, '2024-12-16', 3, 6),
    (1, '2024-12-17', 4, 7),
    (1, '2024-12-18', 2, 5),
    (1, '2024-12-19', 3, 6),
    (1, '2024-12-20', 4, 7),
    (1, '2024-12-21', 2, 5),
    (1, '2024-12-22', 3, 6),
    (1, '2024-12-23', 4, 7),
    (1, '2024-12-24', 2, 5),
    (1, '2024-12-25', 3, 6),
    (1, '2024-12-26', 4, 7),
    (1, '2024-12-27', 2, 5),
    (1, '2024-12-28', 3, 6),
    (1, '2024-12-29', 4, 7),
    (1, '2024-12-30', 2, 5),
    (1, '2024-12-31', 3, 6);
    

INSERT INTO "Manager" (email, username, "password") VALUES 
    ('manager1@gmail.com', 'manager1', 'password1');