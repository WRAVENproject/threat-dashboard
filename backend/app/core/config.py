import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'a_default_secret_key'
    DEBUG = os.environ.get('DEBUG', 'False').lower() in ['true', '1']
    DATABASE_URL = os.environ.get('DATABASE_URL') or 'sqlite:///site.db'
    ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '').split(',')
    API_VERSION = 'v1'