export default class LoadingStatus {
  constructor(loader, error) {
    this.loader = loader;
    this.error = error;
  }
  // Показує завантаження
  loading() {
    this.loader.hidden = false;
    this.error.hidden = true;
  }
  // Показує помилку
  failure() {
    this.loader.hidden = true;
    this.error.hidden = false;
  }
  // Прибирає повідомлення про завантаження і помилку
  download() {
    this.loader.hidden = true;
    this.error.hidden = true;
  }
}
