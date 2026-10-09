# Directrices de Contribución y Gobernanza Git

## 1. Modelo de Ramificación: Trunk-Based Development
* La rama `main` representa el estado de producción / base estable y está protegida.
* Prohibido realizar `push` directo sobre `main`.
* Ciclo de vida de ramas de trabajo: efímeras, menores a 48 horas.

### Nomenclatura de Ramas
* `feat/HU-XX-descripcion-corta` (para funcionalidades y tickets de backlog)
* `fix/INC-XX-descripcion-corta` (para corrección de defectos)
* `chore/descripcion-corta` (tareas de infraestructura o dependencias)
* `docs/descripcion-corta` (ajustes de documentación)
* `hotfix/descripcion-corta` (parches urgentes)

## 2. Formato de Commits: Conventional Commits
Estructura obligatoria:
`<tipo>(<alcance>): <descripcion en presente imperativo> (refs <TICKET>)`

* `feat(tracking): agregar cálculo de ETA dinámico (refs HU-13)`
* `fix(costos): corregir desglose de IVA en pesos COP (refs HU-10)`
* `test(pod): incorporar pruebas unitarias de firma digital (refs HU-16)`

## 3. Políticas de Pull Request (PR) y Definition of Done (DoD)
* Todo PR debe contener menos de 400 líneas útiles de cambio.
* Se debe utilizar la plantilla `.github/PULL_REQUEST_TEMPLATE.md`.
* **Criterios de Aceptación (DoD mínima):**
  1. Formateo y estilos verificados (`npm run format:check`).
  2. Linter sin advertencias ni errores (`npm run lint`).
  3. Pruebas unitarias aprobadas al 100% (`npm test`).
  4. Mínimo una (1) aprobación de par mediante Code Review.
  5. Cero secretos, tokens o credenciales en el diff.
* Estrategia de fusión: **Squash Merge** hacia `main`.
