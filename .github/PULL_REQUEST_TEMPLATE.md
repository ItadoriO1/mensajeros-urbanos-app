## 1. Contexto y Requerimiento
- **Ticket / Historia de Usuario:** [ej. HU-01 | HU-13 | HU-16]
- **Sub-rol de Comercio Asociado:** [Coordinador de Logística | Finanzas | Legal | TI | Soporte]

## 2. Resumen Técnico del Cambio
- Descripción clara de la modificación:
- Capas intervenidas:
  - [ ] `src/domain/` (Entidades y reglas puras)
  - [ ] `src/application/` (Casos de uso y puertos)
  - [ ] `src/infrastructure/` (Adaptadores, base de datos, Kafka, S3)
  - [ ] `src/api/` (BFF, controladores y DTOs)

## 3. Verificación y Pruebas
- Comando de pruebas ejecutado: `npm test`
- Evidencia de ejecución exitosa:

## 4. Definition of Done (DoD) Mínima
- [ ] Código formateado según `.editorconfig` y `.prettierrc`.
- [ ] Linter ejecutado sin errores (`npm run lint`).
- [ ] Pruebas unitarias correspondientes pasando al 100%.
- [ ] PR pequeño (< 400 líneas útiles de cambio).
- [ ] Cero credenciales, claves API o tokens en el diff.

## 5. Auditoría Legal y Cumplimiento Normativo (Obligatorio)
- [ ] Cumple con la Ley 1369 de 2009 y Res. MinTIC 05881 de 2025 (inmutabilidad y validez de POD).
- [ ] Respeta la Regla de Negocio RN-05 / Ley 1480 de 2011 (no altera el modelo tarifario ni contratos de conductores).
- [ ] Aprobado por el Líder de Relación con el Cliente / Asuntos Legales (si aplica).
