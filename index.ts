import start from "./src/start";
import { startData } from "./prisma/seed";

class App {
  async init() {
    await startData();
    await start;
  }
}

const app = new App();
app.init();
