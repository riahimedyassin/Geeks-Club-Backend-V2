import { inject } from "inversify";
import { Admin } from "../enteties/admin/Admin.entity";
import { TYPES } from "../constants/TYPES";
import { IAdminRepository } from "../types/Repository";
import { GeneralAdminUpdateDTO } from "../dto/Admin/general-update-dto";

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
  public async findAll() {
    return await this._adminRepository.findAll();
  }
  public async findByID(id: number) {
    return await this._adminRepository.findOneByID(id);
  }
  public async update(id: number, changes: GeneralAdminUpdateDTO) {
    return await this._adminRepository.findOneAndUpdate(id, changes);
  }
  public async delete(id: number) {
    return await this._adminRepository.findOneAndDelete(id);
  }
  public async create(admin : Partial<Admin>) {

  }
}
