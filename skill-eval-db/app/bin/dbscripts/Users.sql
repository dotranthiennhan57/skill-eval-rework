create table if not exists Users(
	first_name varchar(30),
	last_name varchar(30),
	email varchar(50),
	password varchar(50),
	user_id serial primary key,
	created_date TIMESTAMP NOT NULL DEFAULT NOW(),
	modified_date TIMESTAMP NOT NULL DEFAULT NOW(),
	unique (email)
);