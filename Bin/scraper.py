import requests
from bs4 import BeautifulSoup

url = 'https://www.etuovi.com/myytavat-asunnot/helsinki?haku=M1933323781'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
element = soup.find("span", {"id": "searchResultCount"})

if element:
    print(element.text.replace("\xa0",'')) # remove the non-breaking space character
else:
    print("Element not found")