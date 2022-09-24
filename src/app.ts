import { Bot } from "./bot";


export class App {
    _bot: Bot

    constructor() {
        this._bot = new Bot()
    }

    async bot() {
        await this._bot
    }
}