create table if not exists Users(
	first_name varchar(30),
	last_name varchar(30),
	email varchar(50),
	passwords varchar(50),
	user_id serial primary key,
	unique (email)

);