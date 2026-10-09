import { EnvioEntity } from '../../domain/envio.entity';

export interface EnviosRepositoryPort {
  guardar(envio: EnvioEntity): Promise<void>;
  buscarPorId(id: string, comercioId: string): Promise<EnvioEntity | null>;
  listarActivos(comercioId: string): Promise<EnvioEntity[]>;
}
