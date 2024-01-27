-- CREATE TABLE users (
--  id INT AUTO_INCREMENT PRIMARY KEY,
--  name VARCHAR(255) NOT NULL,
--  username VARCHAR(255) NOT NULL,
--  email VARCHAR(255) NOT NULL,
--  password VARCHAR(255) NOT NULL
-- );




-- CREATE TABLE centers (
--  id INT AUTO_INCREMENT PRIMARY KEY,
--  name VARCHAR(255) NOT NULL,
--  location VARCHAR(255) NOT NULL,
--  address TEXT NOT NULL
-- );


-- CREATE TABLE booked_slots (
--    id INT AUTO_INCREMENT PRIMARY KEY,
--    user_id INT NOT NULL,
--    center_id INT NOT NULL,
--    user_name VARCHAR(255) NOT NULL,
--    phone_number VARCHAR(15) NOT NULL,
--    age INT NOT NULL,
--    date VARCHAR(255) NOT NULL,
--    email VARCHAR(255) NOT NULL,
--    address TEXT NOT NULL,
--    dose VARCHAR(10) NOT NULL,
--    FOREIGN KEY (user_id) REFERENCES users(id),
--    FOREIGN KEY (center_id) REFERENCES centers(id)
-- );