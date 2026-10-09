export class RolesGuard {
  puedeAcceder(rolUsuario: string, rolesPermitidos: string[]): boolean {
    return rolesPermitidos.includes(rolUsuario);
  }
}
