from django.shortcuts import render
import django_filters
from rest_framework import viewsets, filters

from .models import Product
from .serializer import ProductSerializer

from rest_framework.decorators import api_view

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('created_at')
    serializer_class = ProductSerializer
