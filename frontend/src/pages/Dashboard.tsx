import React from 'react';
import ThreatMap from '../components/dashboard/ThreatMap';
import ThreatTimeline from '../components/dashboard/ThreatTimeline';
import ThreatStats from '../components/dashboard/ThreatStats';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>WRAVEN Threat Actor Dashboard</h1>
            <ThreatStats />
            <ThreatMap />
            <ThreatTimeline />
        </div>
    );
};

export default Dashboard;