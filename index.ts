import { App } from "./src/app";

class Main {
  app: App

  constructor() {
    this.app = new App()
  }
  async init() {
    await this.app.bot();
  }
}

const app = new Main();
app.init();
