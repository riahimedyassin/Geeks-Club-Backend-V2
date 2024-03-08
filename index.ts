import "dotenv/config";
import { Bootstrap } from "./bootstrap";
import { container } from "./src/config/inversify.config";
import { TYPES } from "./src/constants/TYPES";
import { log } from "console";
import './src/controllers/AdminController'

export class Application {
  private readonly boostrap!: Bootstrap;
  constructor() {
    this.boostrap = container.get(TYPES.Bootstrap);
  }
  public async execute() {
    try {
      await this.boostrap.run();
    } catch (error) {
      log("CANNOT RUN THE SERVER");
      log(error);
    }
  }
}

const app = new Application()
app.execute()