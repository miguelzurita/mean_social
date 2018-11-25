import requests
import pprint
import json


def get_pruebas(url):
    args = {"a": "ss"}
    response = requests.get(url + "/pruebas", params=args)
    if response.status_code == 200:
        # json
        payload = response.json()
        # texto
        # payload = response.text
        # json_data = json.load(payload)
        # results = payload.get('results', [])

        # print(payload.get('message'))
        # print(payload)
        # pprint.pprint(response.content)
        pprint.pprint(payload)
        # pprint.pprint(json_data)
        # print(json_data)


def post_pruebas(url):
    # print(url)
    args = {"a": "ss", "hola_numero": 1}
    response = requests.post(url + "/pruebas", data=args)
    if response.status_code == 200:
        payload = response.text
        pprint.pprint(payload)


def post_register(url):
    # print(url)
    args = {
        "name": "3",
        "surname": "33",
        "password": "333"
    }

    response = requests.post(url + "/register", data=args)

    print(response.text)


    # if response.status_code == 200:
    #     payload = response.text
    #     pprint.pprint(payload)


if __name__ == '__main__':
    url = 'http://localhost:3800/api'
    # get_pruebas(url)
    # post_pruebas(url)
    post_register(url)
