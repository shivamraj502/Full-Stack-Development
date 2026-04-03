# develop a django app that perforns student registration to a course.
# it should also display a list of students registered for any selected course,
# create student and courses as models with enrollment as many to many field.

# models.py
from django.db import models

class Course(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Student(models.Model):
    name = models.CharField(max_length=100)
    courses = models.ManyToManyField(Course, related_name="students")

    def __str__(self):
        return self.name
    
# forms.py
from django import forms
from .models import Student, Course

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ["name", "courses"]

class CourseSelectForm(forms.Form):
    course = forms.ModelChoiceField(queryset=Course.objects.all())


# views.py
from django.shortcuts import render, redirect
from .forms import StudentForm, CourseSelectForm
from .models import Course

def register_student(request):
    if request.method == "POST":
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("register")
    else:
        form = StudentForm()
    return render(request, "register.html", {"form": form})


def students_by_course(request):
    students = None
    if request.method == "POST":
        form = CourseSelectForm(request.POST)
        if form.is_valid():
            course = form.cleaned_data["course"]
            students = course.students.all()
    else:
        form = CourseSelectForm()
    return render(request, "students.html", {"form": form, "students": students})



# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("register/", views.register_student, name="register"),
    path("students/", views.students_by_course, name="students"),
]


# <!-- templates/register.html -->
# <form method="post">
#     {% csrf_token %}
#     {{ form.as_p }}
#     <button type="submit">Register</button>
# </form>



# <!-- templates/students.html -->
# <form method="post">
#     {% csrf_token %}
#     {{ form.as_p }}
#     <button type="submit">Show Students</button>
# </form>

# {% if students %}
# <ul>
#     {% for student in students %}
#         <li>{{ student.name }}</li>
#     {% endfor %}
# </ul>
# {% endif %}
