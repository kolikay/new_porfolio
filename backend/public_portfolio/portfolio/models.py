from django.db import models

class UserProfile(models.Model):
    name        = models.CharField(max_length=122)
    age         = models.IntegerField(default=2)
    email       = models.EmailField(unique=True)
    phone       = models.CharField(max_length=11)
    address     = models.CharField(max_length=200)
    about    = models.TextField()
    date_added  = models.DateTimeField(auto_now_add=True)
    username    = models.CharField(max_length=122, blank=False)
    image       = models.ImageField(upload_to='users-pix/', null=True, blank=True) 
    

    def __str__(self):
        return self.email

class Resume(models.Model):
    stack                                       = models.CharField(max_length=222)
    university_attended                         = models.CharField(max_length=122)
    started_uni                                 = models.IntegerField()
    ended_uni                                   = models.IntegerField()
    first_language                              = models.CharField(max_length=122)
    started_first_lang                          = models.IntegerField()
    ended_first_lang                            = models.IntegerField()
    first_lang_source                           = models.CharField(max_length=122)
    second_language                             = models.CharField(max_length=122, blank=True)
    started_second_lang                         = models.IntegerField(blank=True)
    ended_second_lang                           = models.IntegerField(blank=True)
    second_lang_source                          = models.CharField(max_length=122, blank=True)
    third_language                              = models.CharField(max_length=122, blank=True)
    started_third_lang                          = models.IntegerField(blank=True)
    ended_third_lang                            = models.IntegerField(blank=True)
    third_lang_source                           = models.CharField(max_length=122, blank=True)
    fourth_language                             = models.CharField(max_length=122, blank=True, null=True)
    started_fourth_lang                         = models.IntegerField(blank=True, null=True)
    ended_fourth_lang                           = models.IntegerField(blank=True, null=True)
    fourth_lang_source                          = models.CharField(max_length=122, blank=True, null=True)

    def __str__(self):
        return self.stack



