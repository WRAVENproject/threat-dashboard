import React from 'react';

const ThreatStats: React.FC = () => {
    // Sample data for threat statistics
    const threatData = {
        totalThreats: 120,
        activeThreats: 45,
        resolvedThreats: 75,
    };

    return (
        <div className="threat-stats">
            <h2>Threat Statistics</h2>
            <ul>
                <li>Total Threats: {threatData.totalThreats}</li>
                <li>Active Threats: {threatData.activeThreats}</li>
                <li>Resolved Threats: {threatData.resolvedThreats}</li>
            </ul>
        </div>
    );
};

export default ThreatStats;