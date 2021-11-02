create table if not exists Employee(
	employee_id serial primary key,
	position_id int references position_list(position_id)

);
