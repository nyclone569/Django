from django.db import models

# Create your models here.

class Information(models.Model):
    info_name = models.CharField(max_length=50)
    info_phone = models.CharField(max_length=10)
    info_dob = models.DateField()    
    info_gender = models.CharField(
        max_length=10,
        choices=[('Nam', 'Nam'), ('Nữ', 'Nữ'), ('Khác', 'Khác')]
    )

    class Meta:
        verbose_name = 'information'
        verbose_name_plural = 'Informations'

    def __str__(self):
        return self.info_name