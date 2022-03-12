import bodyparser from 'body-parser'
import cors from "cors"
import express, { Express } from "express"
import routes from "../routes"

export class AppMiddleware {
    private app: Express

    public constructor(app: Express) {
        this.app = app
    }

    handle() {
        this.app.use(express.json())
        this.app.use(bodyparser.json())
        this.app.use(bodyparser.urlencoded({ extended: true }))
        this.app.use(cors())
        this.app.use(routes)
    }
}