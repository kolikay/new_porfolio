from django.db import models

class UserProfile(models.Model):
    name        = models.CharField(max_length=122)
    age         = models.IntegerField(default=2)
    email       = models.EmailField(unique=True)
    phone       = models.CharField(max_length=11)
    address     = models.CharField(max_length=200)
    about       = models.TextField()
    date_added  = models.DateTimeField(auto_now_add=True)
    username    = models.CharField(max_length=122, blank=False)
    stack       = models.CharField(max_length=222, null=True, blank=True)
    image       = models.ImageField(upload_to='users-pix/', null=True, blank=True) 
    resume      = models.FileField(upload_to='resume/', null=True, blank=True) 
    

    def __str__(self):
        return self.email





