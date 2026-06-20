-- Day 91 – Subqueries

-- Task:
-- Query inside query
-- 👉 Build:
-- Students with highest marks

select max(marks)
from student2
;

select *
from student2
where marks = (
	select max(marks)
    from student2
)
;

select *
from student2
where marks = (
	select max(marks)
    from student2
    where marks < (select max(marks) from student2)
)
;