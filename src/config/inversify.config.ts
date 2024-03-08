import { Container } from "inversify";
import { IDatabaseService } from "../types/service";
import { TYPES } from "../constants/TYPES";
import { DatabaseServiceImpl } from "../services/DatabaServiceImpl";
import { Bootstrap } from "../../bootstrap";




const container = new Container(); 
container.bind<IDatabaseService>(TYPES.DatabaseService).to(DatabaseServiceImpl)
container.bind(TYPES.Bootstrap).to(Bootstrap)

export {container}
