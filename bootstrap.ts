import { inject, injectable } from "inversify";
import { container } from "./src/config/inversify.config";
import { IDatabaseService } from "./src/types/Service";
import { InversifyExpressServer } from "inversify-express-utils";
import express from "express";
import { log } from "console";
import { DatabaseServiceImpl } from "./src/services/DatabaServiceImpl";
import { config } from "./src/config/ormconfig";
import { TYPES } from "./src/constants/TYPES";
import { IErrorHandler } from "./src/types";

@injectable()
export class Bootstrap {
  private readonly PORT = process.env.PORT || 5000;
  private readonly _dbService: IDatabaseService;
  @inject(TYPES.ErrorHandler) private readonly _errorHandler!: IErrorHandler;
  constructor() {
    this._dbService = new DatabaseServiceImpl(config);
  }
  public async run() {
    await this._dbService.connect();
    if (!this._dbService.isConnected)
      throw new Error("Cannot Connect to Database");
    const server = new InversifyExpressServer(container);
    server.setConfig((app) => {
      app.use(express.json());
    });
    server.setErrorConfig((app) => {
      app.use(this._errorHandler.handle);
    });
    const app = server.build();
    app.listen(this.PORT, () => {
      log(`Server is Running on PORT ${this.PORT}`);
    });
  }
}
