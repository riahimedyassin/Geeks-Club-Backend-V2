import { Admin } from "../enteties/Admin.entity";
import { IAdminRepository } from "../types/Repository";
import { BaseRepository } from "./BaseRepository";

export class AdminRepository extends BaseRepository<Admin> implements IAdminRepository {

}