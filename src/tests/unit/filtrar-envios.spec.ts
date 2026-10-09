import { FiltrarEnviosUseCase } from '../../application/use-cases/filtrar-envios.use-case';
import { EnvioEntity, EstadoEnvio } from '../../domain/envio.entity';
import { PostgresEnviosRepository } from '../../infrastructure/persistence/postgres-envios.repository';

describe('FiltrarEnviosUseCase (HU-01)', () => {
  it('debe retornar únicamente los envíos que coincidan con el estado filtrado', async () => {
    const repo = new PostgresEnviosRepository();
    const envio1 = new EnvioEntity(
      '1',
      'COM-01',
      'GUIA-101',
      EstadoEnvio.EN_RUTA,
      4.5,
      -74.1,
      20,
      new Date(),
    );
    const envio2 = new EnvioEntity(
      '2',
      'COM-01',
      'GUIA-102',
      EstadoEnvio.CREADO,
      4.5,
      -74.1,
      45,
      new Date(),
    );

    await repo.guardar(envio1);
    await repo.guardar(envio2);

    const useCase = new FiltrarEnviosUseCase(repo);
    const resultado = await useCase.ejecutar('COM-01', EstadoEnvio.EN_RUTA);

    expect(resultado).toHaveLength(1);
    expect(resultado[0].guia).toBe('GUIA-101');
  });
});
