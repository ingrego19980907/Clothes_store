from django.shortcuts import render

# Create your views here.


def index(request):
    context = {
        "title": "Store",
    }
    return render(request, 'products/index.html', context)


def products(request):
    context = {
        "title": "Store-Catalog"
    }
    return render(request, 'products/products.html',context)


def test_context(request):
    context = {
        "title": "store",
        "hearer": "Welcome",
        "username": 'Ivan',
        "products": [
            {"name": "Худи черного цвета с монограммами adidas Originals", "price": 6090},
            {"name": "Синяя куртка The North Face", "price": 23725},
            {"name": "Коричневый спортивный oversized-топ ASOS DESIGN", "price": 3390},
        ],
        "products_of_promotion": [
            {"name": "Черный рюкзак Nike Heritage", "price": 2340},
        ]
    }

    return render(request, 'products/test_context.html', context)


