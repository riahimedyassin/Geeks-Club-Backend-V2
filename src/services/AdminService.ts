import { inject } from "inversify";
import { Admin } from "../enteties/Admin.entity";
import { BaseService } from "./BaseService";
import { TYPES } from "../constants/TYPES";
import { IAdminRepository } from "../types/Repository";
import { getRepository } from "typeorm";


/**
 * @todo Fix the DI in the Base Service
 * 
 * @todo Provide a valid Base Repos Injection
 */
export class AdminService extends BaseService<Admin> {
  constructor(
    @inject(TYPES.AdminRepository)
    private readonly _adminRepository: IAdminRepository
  ) {
    super();
  }
}
