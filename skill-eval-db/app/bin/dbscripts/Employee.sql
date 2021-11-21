create table if not exists Employees(
	employee_id serial primary key,
	user_id int references users(user_id),
	position_id int references position_list(position_id)
);


