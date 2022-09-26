import {Scenes} from "telegraf";
import {MyContext} from "../types/type_session";
const { leave, enter } = Scenes.Stage;

export const secondScene = new Scenes.BaseScene<MyContext>('test2')
secondScene.enter((ctx) => ctx.reply('Hello2!'))
secondScene.command('back2', leave<MyContext>());
secondScene.on('text', (ctx) => ctx.reply(ctx.message.text));
secondScene.leave((ctx) => ctx.reply('Bay!'))