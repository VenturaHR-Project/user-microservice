import { Express } from "express"
import { Database } from "../database"
import { AppMiddleware } from '../middleware/AppMiddleware'

export class AppConfig {
    private app: Express
    private database: Database
    private appMiddleware: AppMiddleware

    public constructor(app: Express) {
        this.app = app
        this.database = new Database()
        this.appMiddleware = new AppMiddleware(app)
    }

    execute() {
        this.database.createConnection()
        this.appMiddleware.handle()
    }
}
