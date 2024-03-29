# from phonenumber_field.formfields import PhoneNumberField
from django import forms
from .models import Order


class OrderCreateForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ['first_name', 'last_name', 'phone', 'email', 'address', 'postal_code', 'city']



# class ClientForm(forms.Form):
#     phone = PhoneNumberField()