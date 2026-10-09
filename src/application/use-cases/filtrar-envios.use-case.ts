import { EnvioEntity, EstadoEnvio } from '../../domain/envio.entity';
import { EnviosRepositoryPort } from '../ports/envios-repository.port';

export class FiltrarEnviosUseCase {
  constructor(private readonly enviosRepo: EnviosRepositoryPort) {}

  async ejecutar(comercioId: string, estadoFiltro?: EstadoEnvio): Promise<EnvioEntity[]> {
    const envios = await this.enviosRepo.listarActivos(comercioId);
    if (!estadoFiltro) {
      return envios;
    }
    return envios.filter((envio) => envio.estado === estadoFiltro);
  }
}
