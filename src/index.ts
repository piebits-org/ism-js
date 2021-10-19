import WebSocket from 'ws';

export class ISM {
  public ws: WebSocket | undefined;

  public connect(token: string): Promise<void> {
    this.ws = new WebSocket('wss://ism.cloud.piebits.org/010', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}