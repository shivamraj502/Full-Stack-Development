/*
Day 90 – Aggregations

Topic: COUNT, AVG, SUM
Task:

Find average marks
👉 Build:
Group by course*/

SELECT
count(id) as count,
avg(marks) as average,
sum(marks) as total
from student2;