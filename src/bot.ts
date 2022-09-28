import "dotenv/config";
import { Telegraf } from "telegraf";
import {BotScene} from "./scenes/index.scene";

export class Bot {
  public token: string;
  public bot: Telegraf;
    _scene: BotScene

  constructor() {
    this.token = process.env.TOKEN as string;
    this.bot = new Telegraf(this.token);
    this._scene = new BotScene()
  }


  botStart() {
      this.bot.command('start', (ctx) => {
          ctx.reply("Hello.Can I help you? :)");
      });
  }

 async intiCommand() {
        this.botStart();
        this._scene.useScene();
        this.bot.launch()
    }
}

