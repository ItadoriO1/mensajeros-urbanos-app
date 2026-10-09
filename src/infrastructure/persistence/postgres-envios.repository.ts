import { EnvioEntity, EstadoEnvio } from '../../domain/envio.entity';
import { EnviosRepositoryPort } from '../../application/ports/envios-repository.port';

export class PostgresEnviosRepository implements EnviosRepositoryPort {
  private readonly memoriaDB: Map<string, EnvioEntity> = new Map();

  async guardar(envio: EnvioEntity): Promise<void> {
    this.memoriaDB.set(`${envio.comercioId}:${envio.id}`, envio);
  }

  async buscarPorId(id: string, comercioId: string): Promise<EnvioEntity | null> {
    const registro = this.memoriaDB.get(`${comercioId}:${id}`);
    return registro || null;
  }

  async listarActivos(comercioId: string): Promise<EnvioEntity[]> {
    return Array.from(this.memoriaDB.values()).filter(
      (e) => e.comercioId === comercioId && e.estado !== EstadoEnvio.ENTREGADO,
    );
  }
}
