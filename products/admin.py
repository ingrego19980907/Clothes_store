from django.contrib import admin

from products.models import ProductCategory, Product, Basket

admin.site.register(ProductCategory)
admin.site.register(Basket)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
	list_display = ("name", "price", "quantity", "category")
	fields = ("name", "image", "description", "short_description", ("price", "high_price"), "quantity", "category",
	          "size", "color", "factory", "width", "height")
	ordering = ("name", )
	search_fields = ("name", "quantity", "category")
	
	
class BasketAdminInLine(admin.TabularInline):
	model = Basket
	fields = ("product", "category", "created_timestamp")
	readonly_fields = ("product", "created_timestamp",)
	extra = 0
	
