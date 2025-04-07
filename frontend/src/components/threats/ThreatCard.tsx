import React from 'react';

interface ThreatCardProps {
    title: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
    onClick: () => void;
}

const ThreatCard: React.FC<ThreatCardProps> = ({ title, description, severity, onClick }) => {
    const getSeverityClass = () => {
        switch (severity) {
            case 'low':
                return 'threat-card low';
            case 'medium':
                return 'threat-card medium';
            case 'high':
                return 'threat-card high';
            default:
                return 'threat-card';
        }
    };

    return (
        <div className={getSeverityClass()} onClick={onClick}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ThreatCard;