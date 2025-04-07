import React, { useEffect, useState } from 'react';
import { fetchThreats } from '../../api/threats';
import ThreatCard from './ThreatCard';

const ThreatList: React.FC = () => {
    const [threats, setThreats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getThreats = async () => {
            try {
                const data = await fetchThreats();
                setThreats(data);
            } catch (err) {
                setError('Failed to fetch threats');
            } finally {
                setLoading(false);
            }
        };

        getThreats();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Threat List</h2>
            <div className="threat-list">
                {threats.map(threat => (
                    <ThreatCard key={threat.id} threat={threat} />
                ))}
            </div>
        </div>
    );
};

export default ThreatList;