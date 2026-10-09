export class CoreLogisticoClient {
  async sincronizarEstado(guia: string): Promise<{ sincronizado: boolean }> {
    return { sincronizado: Boolean(guia) };
  }
}
