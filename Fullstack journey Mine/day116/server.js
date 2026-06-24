/**
Day 116 – Branching

Topic: branch, merge
Task:
Create feature branch
👉 Do:
Merge into main
 */

// git branch -M feature
/**
git branch -M feature is not correct for creating a new feature branch.
    It renames current branch to feature.
 */

// git branch
// git branch feature
// 


/**
Step 1: Check current branch
git branch

Step 2: Create Feature Branch
Correct command:
git branch feature
OR create + switch together:
git checkout -b feature

Step 5: Switch to Main
git checkout main

Step 6: Merge Feature into Main
git merge feature

Step 7: Check Branch commits and commit history
git log → detailed history
git log --oneline → short history

Step 8: Delete Feature Branch
After merge:
git branch -d feature
 */