create table if not exists Skills(
	skill_id serial primary key,
	skill_name varchar(50) not null,
	subSkillOf int references Skills (skill_id)
);