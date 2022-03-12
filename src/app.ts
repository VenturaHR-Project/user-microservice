import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();

    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  private routes() {
    this.app.route('/').get((req, res) => res.status(200).json({ message: 'Hello World' }));
  }
}

export default new App().app;