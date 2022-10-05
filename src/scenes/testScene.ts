import {Scenes, Context, Telegraf} from "telegraf";
import { MyContext } from "../types/type_session";
const { leave, enter } = Scenes.Stage;

export const testScene = new Scenes.BaseScene<MyContext>('test')
testScene.enter((ctx) => ctx.reply('Hello!'))
testScene.command('back', leave<MyContext>());
testScene.on('text', (ctx) => ctx.reply(ctx.message.text));
testScene.leave((ctx) => ctx.reply('Bay!'))