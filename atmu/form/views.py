from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt
import requests
import json
# Create your views here.


@csrf_exempt
def index(req):
    b = req.body
    d = json.loads(b.decode())
    print(d['user'])
    data = requests.get('https://jsonplaceholder.typicode.com/users')
    data = data.json()
    # print(data)
    
    return JsonResponse({'data': data})
    # return HttpResponse('salam')