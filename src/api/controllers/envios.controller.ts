import { FiltrarEnviosUseCase } from '../../application/use-cases/filtrar-envios.use-case';
import { EnvioFiltroDto } from '../dtos/envio-filtro.dto';

export class EnviosController {
  constructor(private readonly filtrarEnviosUseCase: FiltrarEnviosUseCase) {}

  async obtenerEnvios(dto: EnvioFiltroDto) {
    return this.filtrarEnviosUseCase.ejecutar(dto.comercioId, dto.estado);
  }
}
