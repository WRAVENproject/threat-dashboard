import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to the WRAVEN Threat Actor Dashboard!"}

def test_auth_endpoint():
    response = client.post("/auth/login", json={"username": "testuser", "password": "testpass"})
    assert response.status_code == 200
    assert "access_token" in response.json()

def test_threats_endpoint():
    response = client.get("/api/threats")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_dashboard_endpoint():
    response = client.get("/api/dashboard/stats")
    assert response.status_code == 200
    assert "total_threats" in response.json()