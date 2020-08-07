from django.db import models

# Create your models here.
class Articles(models.Model):
    title = models.CharField(max_length=120)
    category=models.CharField(max_length=20, default='')
    content = models.TextField()

    def __str__(self):
        return self.title