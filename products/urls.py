from django.urls import path

from products.views import products, basket_add, basket_delete, single_product, related_products

app_name = 'products'

urlpatterns = [
	path('', products, name='index'),
	path('<int:category_id>/', products, name='category'),
	path('page/<int:page>', products, name='page'),
	path('basket-add/<int:product_id>/', basket_add, name='basket_add'),
	path('single-product/<int:product_id>', single_product, name='single'),
	path('related-product/<int:product_id>', related_products, name='related'),
	path('basket-delete/<int:id>/', basket_delete, name='basket_delete')
]