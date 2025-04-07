import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getThreatDetail } from '../api/threats';

const ThreatDetail = () => {
    const { id } = useParams();
    const [threat, setThreat] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchThreatDetail = async () => {
            try {
                const data = await getThreatDetail(id);
                setThreat(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchThreatDetail();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>{threat.title}</h1>
            <p>{threat.description}</p>
            <p><strong>Severity:</strong> {threat.severity}</p>
            <p><strong>Date:</strong> {threat.date}</p>
            {/* Add more details as necessary */}
        </div>
    );
};

export default ThreatDetail;