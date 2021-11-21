#!/bin/bash

export PGPASSWORD='node_password'

database="SkillEvaluation"

echo "Configuring database: $database"

dropdb -U node_user SkillEvaluation
createdb -U node_user SkillEvaluation

psql -U node_user SkillEvaluation <./bin/dbscripts/Users.sql
psql -U node_user SkillEvaluation <./bin/dbscripts/Position_List.sql
psql -U node_user SkillEvaluation <./bin/dbscripts/Employee.sql
psql -U node_user SkillEvaluation <./bin/dbscripts/Skills.sql
psql -U node_user SkillEvaluation <./bin/dbscripts/Employee_Relation.sql
psql -U node_user SkillEvaluation <./bin/dbscripts/Evaluation.sql

psql -U node_user SkillEvaluation <./bin/dbscripts/scripts/insert_users.sql
psql -U node_user SkillEvaluation <./bin/dbscripts/scripts/insert_position_list.sql
psql -U node_user SkillEvaluation <./bin/dbscripts/scripts/insert_skills.sql
psql -U node_user SkillEvaluation <./bin/dbscripts/scripts/insert_employee.sql
psql -U node_user SkillEvaluation <./bin/dbscripts/scripts/insert_employee_relation.sql

echo "$database configured"