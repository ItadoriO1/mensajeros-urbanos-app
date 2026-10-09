# Mensajeros Urbanos - App Móvil B2B (MVP)
**Código del Proyecto:** MU-APP-2026-C06  
**Cliente / Contexto:** Mensajeros Urbanos (LogTech regional B2B)  
**Entorno Académico:** Desarrollo en Equipo - Semestre VIII, Institución Universitaria EAM  

## 1. Descripción del Proyecto
Aplicación móvil complementaria y BFF modular para comercios aliados, diseñada para resolver la incertidumbre post-despacho de última milla, asegurar transparencia tarifaria en COP y gestionar excepciones operativas en tiempo real.

## 2. Stack Tecnológico Oficial
* **Frontend:** React Native + Expo (especificación de arquitectura y UI)
* **Backend & BFF:** NestJS / Fastify
* **Persistencia:** PostgreSQL con Row-Level Security (RLS) multi-tenant
* **Mensajería & Almacenamiento:** Apache Kafka, AWS S3 para POD digital, Redis Caché

## 3. Protocolo de Onboarding en 30 Minutos (Sin Código Inicial)
Para que un nuevo desarrollador se integre en menos de 30 minutos:
1. **Min 0–5:** Leer `README.md` y `CONTRIBUTING.md`.
2. **Min 5–12:** Clonar el repositorio e instalar dependencias:
   ```bash
   git clone https://github.com/ItadoriO1/mensajeros-urbanos-app.git
   cd mensajeros-urbanos-app
   npm install
   ```
3. **Min 12–18:** Validar el entorno local en verde:
   ```bash
   npm run format:check && npm run lint && npm test
   ```
4. **Min 18–25:** Crear rama efímera y commit de onboarding:
   ```bash
   git checkout -b chore/onboarding-tu-nombre
   git commit --allow-empty -m "chore(setup): completar onboarding inicial de desarrollo"
   ```
5. **Min 25–30:** Abrir un Pull Request de prueba hacia main y verificar que el CI pase en verde.
