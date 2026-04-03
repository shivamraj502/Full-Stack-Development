from django.db import models

class Project(models.Model):
    topic = models.CharField(max_length=200)
    language = models.CharField(max_length=100)
    duration = models.IntegerField()

    def __str__(self):
        return self.topic