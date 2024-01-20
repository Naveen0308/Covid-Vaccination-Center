use covid;
-- create table patient(id int auto_increment primary key, user_id int, p_name varchar(255), p_number varchar(255), age int, email varchar(255), address varchar(255), dose int, slot int, c_id int);
-- create table center(id int auto_increment primary key, name varchar(255), location varchar(255), address varchar(255), avt_slot int, slot_1 int, slot_2 int, slot_3 int, slot_4 int);
-- create table users(user_id int auto_increment primary key, name varchar(25), username varchar(25), email varchar(25),password varchar(15), confirm_password varchar(25));
-- insert into users(name, username, email,password,confirm_password) values("abc", "abc0102", "abc@gmail.com", "password01", "password01");
ALTER TABLE center
ADD COLUMN date DATE;

select * from users;
select * from patient;
select * from center;