from django.db import models

# 商品クラス
class Product(models.Model):
    name = models.CharField(min_length=1, max_length=50, unique=True)
    amount = models.models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
