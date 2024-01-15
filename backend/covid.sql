use covid;
-- create table patient(id int auto_increment primary key, user_id int, p_name varchar(255), p_number varchar(255), age int, email varchar(255), address varchar(255), dose int, slot int, c_id int);
-- create table center(id int auto_increment primary key, name varchar(255), location varchar(255), address varchar(255), avt_slot int, slot_1 int, slot_2 int, slot_3 int, slot_4 int);
-- create table users( user_id int auto_increment primary key, username varchar(255), pass varchar(255), email varchar(255) );
-- insert into users(username, pass, email) values("hari_prasad", "password", "hari11122003@gmail.com");
ALTER TABLE center
ADD COLUMN date DATE;

select * from users;
select * from patient;
select * from center;