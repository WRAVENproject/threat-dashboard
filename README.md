# WRAVEN OpenCTI Threat Intel Platform

This is WRAVEN's self-hosted deployment of [OpenCTI](https://www.opencti.io/), used for graph-based threat intelligence, IOC tracking, and adversary enrichment.

## 🔧 Services Deployed

This stack includes:

- **OpenCTI** – main platform
- **Elasticsearch** – search backend
- **MinIO** – object storage
- **Redis** – caching
- **RabbitMQ** – messaging for connectors
- **Workers** – background task processors
- **Connectors**:
  - ✅ Abuse.ch ThreatFox
  - ✅ Abuse.ch URLhaus
  - ✅ CISA KEV (Known Exploited Vulnerabilities)
  - ✅ MITRE Corporation
  - ✅ NIST CVE
  - ✅ NIST CPE

---

## 🚀 Quick Start

### 1. Clone the Repo

```bash
git clone https://github.com/WRAVENproject/opencti-deployment.git
cd opencti-deployment
```

2. Set Up Environment Variables

Copy the sample env file:

cp .env.sample .env

Edit .env with your secrets and keys:

nano .env

⚠️ Never commit .env — it includes secrets and tokens.

Connector configs are in their respective folders as config.yml.

3. Run the Stack

docker-compose up -d


⸻

🌐 Public Access

Only the OpenCTI frontend is exposed publicly:

https://dashboard.wraven.org

All other services (connectors, RabbitMQ, Elasticsearch, etc.) are bound to localhost.

⸻

🔒 Security Notes
	•	Keep .env and connector config.yml files secret
	•	Use HTTPS via reverse proxy (e.g. Caddy or NGINX)
	•	Only expose OpenCTI frontend to the internet
	•	Use firewall or Docker network to isolate internal services

⸻

🧠 WRAVEN Contact

Want to contribute or report an issue?
	•	Website: wraven.org
	•	Email: contact@wraven.org

⸻

🐚 Credits

Built by WRAVEN, powered by OpenCTI, fueled by threats.

Let me know if you want this broken into `docs/` or if you want badges at the top for GitHub, Docker, or OpenCTI version status.