# POS Farmacia – Starter
Estructura mínima para levantar la stack (frontend Next.js + backend NestJS + PostgreSQL + Redis + MinIO) vía Docker Compose.

## Pasos rápidos
```bash
cd infra
docker compose up -d --build
docker compose exec backend npm run migrate:deploy
```
Accede: Frontend http://localhost:3000 – API http://localhost:4000
