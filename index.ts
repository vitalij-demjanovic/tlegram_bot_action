import { TelegrafBot } from "./src/start";

class App {
  bot: TelegrafBot;

  constructor() {
    this.bot = new TelegrafBot()
  }
  async init() {
    await this.bot.init();
  }
}

const app = new App();
app.init();
