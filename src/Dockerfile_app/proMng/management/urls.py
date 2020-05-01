from rest_framework import routers
from .views import ProductListViewSet

router = routers.DefaultRouter()
router.register(r'productlist', ProductListViewSet)