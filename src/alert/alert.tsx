import {action, makeObservable, observable} from 'mobx';

class Alert {
  alert?: JSX.Element = undefined;

  showAlert(Alert: JSX.Element) {
    this.alert = Alert;
  }

  closeAlert() {
    this.alert = undefined;
  }

  constructor() {
    makeObservable(this, {
      alert: observable,
      showAlert: action,
      closeAlert: action,
    });
  }
}

export const alert = new Alert();
