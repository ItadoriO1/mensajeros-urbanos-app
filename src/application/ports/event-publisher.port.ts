export interface EventPublisherPort {
  publicar(topico: string, evento: Record<string, unknown>): Promise<void>;
}
