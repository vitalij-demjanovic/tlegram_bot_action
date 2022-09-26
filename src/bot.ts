import "dotenv/config";
import { Telegraf } from "telegraf";

export class Bot {
  public token: string;
  public bot: Telegraf

  constructor() {
    this.token = process.env.TOKEN as string;
    this.bot = new Telegraf(this.token)
  }


 async intiCommand() {
    this.bot.command('start', (ctx) => {
      ctx.reply("Hello.Can I help you? :)");
    })
    await this.bot.launch()
  }
}

