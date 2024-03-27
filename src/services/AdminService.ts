import { inject } from "inversify";
import { Admin } from "../enteties/Admin.entity";
import { TYPES } from "../constants/TYPES";
import { IAdminRepository } from "../types/Repository";

/**
 * @todo Fix the DI in the Base Service
 *
 * @todo Provide a valid Base Repos Injection
 */
export class AdminService {
  constructor(
    @inject(TYPES.AdminRepository)
    private readonly _adminRepository: IAdminRepository
  ) {}
}
