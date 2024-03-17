import { Container } from "inversify";
import { IDatabaseService } from "../types/Service";
import { TYPES } from "../constants/TYPES";
import { DatabaseServiceImpl } from "../services/DatabaServiceImpl";
import { Bootstrap } from "../../bootstrap";
import { ErrorHandler } from "../errors/ErrorHandler";
import { IErrorHandler } from "../types";




const container = new Container(); 
container.bind<IDatabaseService>(TYPES.DatabaseService).to(DatabaseServiceImpl)
container.bind(TYPES.Bootstrap).to(Bootstrap)
container.bind<IErrorHandler>(TYPES.ErrorHandler).to(ErrorHandler)

export {container}
