import "dotenv/config";
import { Telegraf } from "telegraf";

export class Bot {
  token: string;
  bot: Telegraf

  constructor() {
    this.token = process.env.TOKEN as string
    this.bot = new Telegraf(this.token)
  }


  intiCommand() {
    this.bot.command('start', (ctx) => {
      ctx.reply("Hello. How can I help you? :)");
    })
  }

  public async init() {
    await this.bot.launch()
    this.intiCommand();
  }
}
