import "dotenv/config";
import { Telegraf } from "telegraf";

export class TelegrafBot {
  token: any;
  bot: Telegraf

  constructor() {
    this.token = process.env.TOKEN
    this.bot = new Telegraf(this.token)
  }


  start() {
    this.bot.command('start', (ctx) => {
      ctx.reply("Hello. How can I help you? :)");
    })
  }

  public async init() {
    await this.bot.launch()
    await this.start();
  }
}