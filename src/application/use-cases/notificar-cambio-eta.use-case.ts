import { EnviosRepositoryPort } from '../ports/envios-repository.port';
import { EventPublisherPort } from '../ports/event-publisher.port';

export class NotificarCambioEtaUseCase {
  constructor(
    private readonly enviosRepo: EnviosRepositoryPort,
    private readonly eventPublisher: EventPublisherPort,
  ) {}

  async ejecutar(
    envioId: string,
    comercioId: string,
    nuevoEta: number,
    motivo: string,
  ): Promise<void> {
    const envio = await this.enviosRepo.buscarPorId(envioId, comercioId);
    if (!envio) {
      throw new Error(`Envío con identificador ${envioId} no encontrado.`);
    }

    envio.actualizarUbicacion(envio.latitudActual, envio.longitudActual, nuevoEta);
    await this.enviosRepo.guardar(envio);

    await this.eventPublisher.publicar('mu.envios.cambio-eta', {
      envioId,
      comercioId,
      nuevoEta,
      motivo,
      actualizadoEn: new Date().toISOString(),
    });
  }
}
