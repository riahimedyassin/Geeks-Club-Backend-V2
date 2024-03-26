import { Container } from "inversify";
import { IDatabaseService } from "../types/Service";
import { TYPES } from "../constants/TYPES";
import { DatabaseServiceImpl } from "../services/DatabaServiceImpl";
import { Bootstrap } from "../../bootstrap";
import { ErrorHandler } from "../errors/ErrorHandler";
import { IErrorHandler } from "../types";
import { IAdminRepository } from "../types/Repository";
import { AdminRepository } from "../repositories/AdminRepositroy";




const container = new Container(); 
container.bind<IDatabaseService>(TYPES.DatabaseService).to(DatabaseServiceImpl).inSingletonScope()
container.bind(TYPES.Bootstrap).to(Bootstrap).inSingletonScope()
container.bind<IAdminRepository>(TYPES.AdminRepository).to(AdminRepository).inSingletonScope()
container.bind<IErrorHandler>(TYPES.ErrorHandler).to(ErrorHandler)

export {container}
