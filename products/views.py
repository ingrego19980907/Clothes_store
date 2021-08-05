import current as current
from django.http import HttpResponseRedirect
from django.shortcuts import render

from products.models import ProductCategory, Product, Basket

def index(request):
    context = {
        "title": "Store",
    }
    return render(request, 'products/index.html', context)


def products(request):
    context = {
        "title": "Store-Catalog",
        "categories": ProductCategory.objects.all(),
        "products": Product.objects.all(),

    }
    return render(request, 'products/products.html',context)


def basket_add(request, product_id):
    current_page = request.META.get('HTTP_REFERER')
    product = Product.objects.get(id=product_id)
    baskets = Basket.objects.filter(current_page)
    
    if not baskets.exists():
        Basket.objects.create(user=request.user, product=product, quantity=1)
        return HttpResponseRedirect(current_page)
    else:
        basket = baskets.first()
        basket.quantity += 1
        basket.save()
        return HttpResponseRedirect(current_page)
