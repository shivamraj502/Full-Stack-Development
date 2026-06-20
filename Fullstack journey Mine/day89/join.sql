/**
Day 89 – Joins

Topic: INNER, LEFT, RIGHT JOIN
Task:
Create students + courses
👉 Build:
Join both tables
*/

create table join1(
    name varchar(15),
    id int,
    marks int
);

create table join2(
    name varchar(15),
    id int,
    sem int,
    marks int
);

insert into join1() values("shivam",221,98),("shi",332,88),("shiva",882,99),("shivalaya",82,78);
insert into join2() values("shivam",221,7,98),("shi",332,7,88),("shiva",882,7,99),("shivalaya",82,7,78);

select * from
join1 j1 JOIN join2 j2
on j1.id = j2.id
;