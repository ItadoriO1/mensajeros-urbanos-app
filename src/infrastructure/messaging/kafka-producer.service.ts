import { EventPublisherPort } from '../../application/ports/event-publisher.port';

export class KafkaProducerService implements EventPublisherPort {
  async publicar(topico: string, evento: Record<string, unknown>): Promise<void> {
    // Publicación asíncrona hacia bus de eventos Kafka
    process.stdout.write(`[KAFKA PUBLISH] [${topico}]: ${JSON.stringify(evento)}\n`);
  }
}
