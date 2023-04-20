# import argparse
# import os
# import sys

# import openstack
# from openstack.config import loader

# openstack.enable_logging(True, stream=sys.stdout)

# #: Defines the OpenStack Config cloud key in your config file,
# #: typically in $HOME/.config/openstack/clouds.yaml. That configuration
# #: will determine where the examples will be run and what resource defaults
# #: will be used to run the examples.
# TEST_CLOUD = os.getenv('OS_TEST_CLOUD', 'devstack-admin')
# EXAMPLE_CONFIG_KEY = os.getenv('OPENSTACKSDK_EXAMPLE_CONFIG_KEY', 'example')
# config = loader.OpenStackConfig()
# cloud = openstack.connect(cloud=TEST_CLOUD)


# class Opts:
#     def __init__(self, cloud_name='devstack-admin', debug=False):
#         self.cloud = cloud_name
#         self.debug = debug
#         # Use identity v3 API for examples.
#         self.identity_api_version = '3'


# def _get_resource_value(resource_key, default):
#     return config.get_extra_config(
#         EXAMPLE_CONFIG_KEY).get(resource_key, default)


# SERVER_NAME = 'openstacksdk-example'
# IMAGE_NAME = _get_resource_value('image_name', 'cirros-0.4.0-x86_64-disk')
# FLAVOR_NAME = _get_resource_value('flavor_name', 'm1.small')
# NETWORK_NAME = _get_resource_value('network_name', 'private')
# KEYPAIR_NAME = _get_resource_value('keypair_name', 'openstacksdk-example')
# SSH_DIR = _get_resource_value(
#     'ssh_dir', '{home}/.ssh'.format(home=os.path.expanduser("~")))
# PRIVATE_KEYPAIR_FILE = _get_resource_value(
#     'private_keypair_file', '{ssh_dir}/id_rsa.{key}'.format(
#         ssh_dir=SSH_DIR, key=KEYPAIR_NAME))

# EXAMPLE_IMAGE_NAME = 'openstacksdk-example-public-image'


# def create_connection_from_config():
#     return openstack.connect(cloud=TEST_CLOUD)


# def create_connection_from_args():
#     parser = argparse.ArgumentParser()
#     return openstack.connect(options=parser)


# def create_connection(auth_url, region, project_name, username, password,
#                       user_domain, project_domain):
#     return openstack.connect(
#         auth_url=auth_url,
#         project_name=project_name,
#         username=username,
#         password=password,
#         region_name=region,
#         user_domain_name=user_domain,
#         project_domain_name=project_domain,
#         app_name='examples',
#         app_version='1.0',
#     )

# # microstack.launch cirros -n test1 --key-name None


from openstack import connection

# Replace the values in angle brackets with your own authentication information
conn = connection.Connection(
    auth=dict(
        username='admin',
        password='f34sJtgS007EEB2Wx7NTs4xBcyvYnbUI',
        project_name='test',
        auth_url='https://192.168.29.10:5000/v3/',
    ),
    region_name='microstack',  
            verify=False
    # Replace with your own region name if different
)
# Replace 'default' with your own project ID if different
servers = conn.compute.servers(
    # microstack uses UUID format IDs by default
    # so you need to use 'id' instead of 'name' in your query
    # You can replace the id parameter value with your own instance id, if you want to filter by instance.
    id='*',
    project_id='920eb00a07344ff0abb29d33d1bc5f7d',
)
for server in servers:
    print('Instance:', server)
