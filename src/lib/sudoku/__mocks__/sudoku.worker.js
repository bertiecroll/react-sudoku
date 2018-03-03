export default class Worker {
  constructor (stringUrl) {
    this.url = stringUrl;
    this.onmessage = event => event;
    this.onerror = error => error;
  }

  postMessage (msg) {
    this.onmessage({ data: { cells: [] } });
  }

  terminate () {}
}
