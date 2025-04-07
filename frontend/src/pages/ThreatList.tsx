import React, { useEffect, useState } from 'react';
import { fetchThreats } from '../api/threats';
import ThreatCard from '../components/threats/ThreatCard';

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
            <h1>Threat List</h1>
            <div>
                {threats.map(threat => (
                    <ThreatCard key={threat.id} threat={threat} />
                ))}
            </div>
        </div>
    );
};

export default ThreatList;