import "dotenv/config";
import {Markup, Scenes, Telegraf} from "telegraf";
import LocalSession from "telegraf-session-local";
import {MyContext} from "./types/type_session";
import {testScene} from "./scenes/testScene";
import {secondScene} from "./scenes/secondScene";

export class Bot {
  public token: string;
  public bot: Telegraf<MyContext>;
  public stage

    constructor() {
    this.token = process.env.TOKEN as string;
    this.bot = new Telegraf(this.token);
    this.stage = new Scenes.Stage<MyContext>([testScene, secondScene])
  }

    botStart() {
        this.bot.use(new LocalSession({database: 'scenes.json'}).middleware())
        this.bot.use(this.stage.middleware());
        this.bot.use((ctx, next) => {
            ctx.session.myProp;
            ctx.scene.session.myProps;
            next();
        })
        this.bot.command('start', (ctx) => ctx.reply('Hello. Can I help you?'))
        this.bot.command('test', (ctx) => ctx.scene.enter('test'));
        this.bot.command('test2', (ctx) => ctx.scene.enter('test2'))

        this.bot.launch()
    }
}
