create table if not exists Employee_relation(
	employee INT references Employees(employee_id),
	coworker INT references Employees(employee_id),
	coworker_relation int references position_list(position_id)
);