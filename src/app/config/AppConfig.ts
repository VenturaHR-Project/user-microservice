import { Express } from "express"
import { MongoDB } from "../database/MongoDB"
import { AppMiddleware } from '../middleware/AppMiddleware'

export class AppConfig {
    private app: Express
    private mongoDB: MongoDB
    private appMiddleware: AppMiddleware

    public constructor(app: Express) {
        this.app = app
        this.mongoDB = new MongoDB()
        this.appMiddleware = new AppMiddleware(app)
    }

    execute() {
        this.mongoDB.createConnection()
        this.appMiddleware.handle()
    }
}
