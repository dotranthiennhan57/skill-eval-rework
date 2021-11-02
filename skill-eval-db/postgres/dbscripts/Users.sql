create table if not exists Users(
	first_name varchar(30),
	last_name varchar(30),
	email varchar(50),
	passwords varchar(50),
	employee_id int references Employee(employee_id),
	unique (email)

);