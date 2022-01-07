import express from "express";
import { SERVER_PORT } from "../global/enviroments";

export class Server {
  public app: express.Application;
  private port: number;

  constructor() {
    this.app = express();

    this.port = SERVER_PORT;
  }

  start(callback: () => void) {
    this.app.listen(this.port, callback);
  }
}
