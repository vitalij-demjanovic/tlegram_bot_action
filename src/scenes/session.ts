import {Scenes, Context, Telegraf} from "telegraf";
import LocalSession from "telegraf-session-local";
import "dotenv/config";
const { leave, enter } = Scenes.Stage;
import { MyContext } from "../types/type_session";
import {secondScene} from "./secondScene";

const testScene = new Scenes.BaseScene<MyContext>('test')
testScene.enter((ctx) => ctx.reply('Hello!'))
testScene.command('back', leave<MyContext>());
testScene.on('text', (ctx) => ctx.reply(ctx.message.text));
testScene.leave((ctx) => ctx.reply('Bay!'))

const stage = new Scenes.Stage<MyContext>([testScene, secondScene])

const token = process.env.TOKEN as string;
const bot = new Telegraf <MyContext>(token)

bot.use(new LocalSession({database: 'scenes.json'}).middleware())
bot.use(stage.middleware());
bot.use((ctx, next) => {
    ctx.session.myProp;
    ctx.scene.session.myProps;
    next();
})

bot.command('test', (ctx) => ctx.scene.enter('test'));
bot.command('test2', (ctx) => ctx.scene.enter('test2'));

bot.launch()