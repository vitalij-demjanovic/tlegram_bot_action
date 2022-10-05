import { Bot } from "./bot";
import { Database } from "./db";

export class App {
    _bot: Bot
    _db: Database

    constructor() {
        this._db = new Database()
        this._bot = new Bot()
    }

    async bot() {
        await this._db.connectDB();
        await this._bot.botStart();
    }
}