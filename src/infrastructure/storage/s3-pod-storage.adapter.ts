export class S3PodStorageAdapter {
  async obtenerUrlFirmada(guia: string): Promise<string> {
    return `https://s3.amazonaws.com/mu-pod-storage/${guia}-pod.pdf`;
  }
}
