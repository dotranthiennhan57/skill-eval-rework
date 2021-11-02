create table if not exists  Evaluation(
	employee_id INT references Employee(employee_id),
	skill_id INT references Skills(skill_id),
	skill_rating int
);