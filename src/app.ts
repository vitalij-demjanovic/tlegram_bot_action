import { Bot } from "./bot";
import { Database } from "./db";


export class App {
    _bot: Bot
    _db: Database

    constructor() {
        this._bot = new Bot()
        this._db = new Database()
    }

    async bot() {
        await this._db.connectDB()
        await this._bot.intiCommand();
    }
}