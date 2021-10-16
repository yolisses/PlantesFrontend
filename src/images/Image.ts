export class Image {
  localUri: string;
  sent: boolean;
  sendLink?: string;
  remoteUri?: string;

  constructor(localUri: string) {
    this.localUri = localUri;
    this.sent = false;
  }
}
