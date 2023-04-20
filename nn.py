import requests
# Define the API endpoint URL and authentication credentials
url = 'https://192.168.29.10:5000'
username = 'admin'
password = 'f34sJtgS007EEB2Wx7NTs4xBcyvYnbUI'
# Authenticate and retrieve a token
response = requests.post(f"{url}/auth/tokens", headers={'Content-Type': 'application/json'}, json={
    "auth": {
        "identity": {
            "methods": ["password"],
            "password": {
                "user": {
                    "name": "admin",
                    "domain": {"name": "Default"},
                    "password": "f34sJtgS007EEB2Wx7NTs4xBcyvYnbUI"
                }
            }
        }
    }
})
# Extract the token from the response headers
token = response.headers['X-Subject-Token']
# Retrieve a list of all instances
response = requests.get(f"{url}/compute/v2.1/servers", headers={
    'X-Auth-Token': token,
    'Content-Type': 'application/json'
})
# Loop through the instances and print their names and creation times
instances = response.json()['servers']
for instance in instances:
    print(f"Instance name: {instance['name']}")
    print(f"Instance age: {instance['created']}")