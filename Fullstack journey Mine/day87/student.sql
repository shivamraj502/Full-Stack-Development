/**
⚡ Week 13 (Days 87–93): SQL (Relational Database)
Day 87 – SQL Basics

Topic: Tables, INSERT, SELECT
Task:
Install MySQL/PostgreSQL
👉 Build:
Create students table
Insert 5 records
 */

CREATE database db;
use db;
create table student(
    name varchar(15),
    id int,
    sem int
);


insert into student() values("shivam",221,7),("shi",332,7),("shiva",882,7);
select * from student;