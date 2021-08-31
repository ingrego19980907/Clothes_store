import current as current
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from products.models import ProductCategory, Product, Basket
from django.core.paginator import Paginator
from random import choice


def index(request):
    if not request.user.is_anonymous:
        baskets = Basket.objects.filter(user=request.user)
        if len(baskets) > 1:
            total_quantity = sum(basket.quantity for basket in baskets)
            total_sum = sum(basket.sum() for basket in baskets)
            context = {
                "title": "Store",
                'total_quantity': total_quantity,
                'total_sum': total_sum,
            }
        else:
            context = {
                "title": "Store",
            }
    else:
        context = {
            "title": "Store",
        }
    return render(request, 'products/index.html', context)


def products(request, category_id=None, page=1):
    if not request.user.is_anonymous:
        baskets = Basket.objects.filter(user=request.user)
        if len(baskets) > 1:
            total_quantity = sum(basket.quantity for basket in baskets)
            total_sum = sum(basket.sum() for basket in baskets)
            context = {
                "title": "Store-Catalog",
                "categories": ProductCategory.objects.all(),
                'total_quantity': total_quantity,
                'total_sum': total_sum,
            }
        else:
            context = {
                "title": "Store-Catalog",
                "categories": ProductCategory.objects.all(),
            }
    else:
        context = {
            "title": "Store-Catalog",
            "categories": ProductCategory.objects.all(),
        }
    
    if category_id:
        products = Product.objects.filter(category_id=category_id)
    else:
        products = Product.objects.all()
    paginator = Paginator(products, 3)
    products_paginator = paginator.page(page)
    context.update({'products': products_paginator})
    
    return render(request, 'products/products.html', context)


@login_required
def basket_add(request, product_id):
    current_page = request.META.get('HTTP_REFERER')
    product = Product.objects.get(id=product_id)
    baskets = Basket.objects.filter(user=request.user, product=product)
    
    if not baskets.exists():
        Basket.objects.create(user=request.user, product=product, quantity=1)
        return HttpResponseRedirect(current_page)
    else:
        basket = baskets.first()
        basket.quantity += 1
        basket.save()
        return HttpResponseRedirect(current_page)


@login_required
def basket_delete(request, id):
    basket = Basket.objects.get(id=id)
    basket.delete()
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


def single_product(request, product_id):
    product = Product.objects.get(id=product_id)
    related_products = Product.objects.all()
    list_related_products = []
    for _ in range(4):
        list_related_products.append(choice(related_products))
    if not request.user.is_anonymous:
        baskets = Basket.objects.filter(user=request.user)
        if len(baskets) > 1:
            total_quantity = sum(basket.quantity for basket in baskets)
            total_sum = sum(basket.sum() for basket in baskets)
            context = {'product': product,
                       'list_related_products': list_related_products,
                       'total_quantity': total_quantity,
                       'total_sum': total_sum,
                       }
        else:
            context = {'product': product,
                       'list_related_products': list_related_products,
            }
    else:
        context = {'product': product,
                   'list_related_products': list_related_products,
        }
    
    return render(request, 'products/single_product.html', context)


def related_products(request, product_id):
    product = Product.objects.get(id=product_id)
    context = {'rel_product': product}
    return render(request, 'products/shop-item.html', context)
    
