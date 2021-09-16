export class InvalidIdError extends Error {
  constructor(action, ...args) {
    super(args);
    this.message = 'Invalid id. Action: ' + JSON.stringify(action);
  }
}
