export type Threat = {
  id: string;
  name: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  status: 'active' | 'resolved' | 'mitigated';
  createdAt: string;
  updatedAt: string;
};

export type ThreatListResponse = {
  threats: Threat[];
  total: number;
};

export type ThreatDetailResponse = Threat;