import "dotenv/config";
import { Telegraf } from "telegraf";

const token = process.env.TOKEN;
if (!token) {
  throw new Error("No used Token");
}

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply("Hello. How can I help you? :)");
});

export default bot.launch();
