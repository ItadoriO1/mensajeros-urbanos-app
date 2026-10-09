import { EstadoEnvio } from '../../domain/envio.entity';

export class EnvioFiltroDto {
  comercioId!: string;
  estado?: EstadoEnvio;
}
