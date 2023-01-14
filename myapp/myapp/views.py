from django.shortcuts import render
import requests
from bs4 import BeautifulSoup

def scrape_data(request):
    url = 'https://www.etuovi.com/myytavat-asunnot/helsinki?haku=M1933323781'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    element = soup.find("span", {"id": "searchResultCount"})

    if element:
        scraped_data = element.text.replace("\xa0",'')
    else:
        scraped_data = "Element not found"

    return render(request, 'scraped_data.html', {'scraped_data': scraped_data})