import {Scenes, Context, Telegraf} from "telegraf";
import "dotenv/config";
import LocalSession from "telegraf-session-local";
import "dotenv/config";
import { MyContext } from "../types/type_session";
import {secondScene} from "./secondScene";
import {testScene} from "./testScene";

export class BotScene{
    stage;
    bot: Telegraf<MyContext>
    token: string

    constructor() {
        this.token = process.env.TOKEN as string
        this.bot = new Telegraf<MyContext>(this.token)
        this.stage = new Scenes.Stage<MyContext>([testScene, secondScene])
    }

    useScene() {
        this.bot.use(new LocalSession({database: 'scenes.json'}).middleware())
        this.bot.use(this.stage.middleware());
        this.bot.use((ctx, next) => {
            ctx.session.myProp;
            ctx.scene.session.myProps;
            next();
        })
        this.bot.command('test', (ctx) => ctx.scene.enter('test'));
        this.bot.command('test2', (ctx) => ctx.scene.enter('test2'))
    }
}