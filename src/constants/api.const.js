export class Constants {

  static get BsuMapApi() {
    return process.env.NODE_ENV === 'production'
    ? 'http://map.bsu.by:51107'
    : 'http://localhost:51107';
  }

  static get clientRoot() {
    return `${window.location.origin.toString()}`;
  }
}