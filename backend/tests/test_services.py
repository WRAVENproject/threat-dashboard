import pytest
from app.services.threat_analysis import analyze_threats

@pytest.fixture
def sample_threat_data():
    return {
        "name": "Sample Threat",
        "description": "This is a sample threat for testing.",
        "severity": "high",
        "actors": ["Actor1", "Actor2"]
    }

def test_analyze_threats(sample_threat_data):
    result = analyze_threats(sample_threat_data)
    assert result is not None
    assert result['name'] == sample_threat_data['name']
    assert result['severity'] == sample_threat_data['severity']
    assert 'analysis' in result