// This file defines types specific to threats.

export interface Threat {
    id: string;
    name: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
    dateReported: string;
    status: 'active' | 'resolved' | 'mitigated';
}

export interface ThreatDetail extends Threat {
    details: string;
    affectedSystems: string[];
    mitigationSteps: string[];
}

export interface ThreatListResponse {
    threats: Threat[];
    total: number;
    page: number;
    pageSize: number;
}