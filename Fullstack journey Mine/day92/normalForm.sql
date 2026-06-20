Day 92 – Normalization

Topic: 1NF, 2NF, 3NF
Task:
Improve table design


create table student2(
    name varchar(15),
    id int,
    sem int,
    marks int
);

insert into student2() values("shivam",221,7,98),("shi",332,7,88),("shiva",882,7,99),("shivalaya",82,7,78);
select * from student2
where marks >80

order by marks desc
;
