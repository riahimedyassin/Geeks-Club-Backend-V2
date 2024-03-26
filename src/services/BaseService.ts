import { EntityManager, ObjectLiteral, Repository } from "typeorm";
import { IBaseService, IDatabaseService } from "../types/Service";
import { inject } from "inversify";
import { TYPES } from "../constants/TYPES";

export abstract class BaseService<T extends ObjectLiteral>
  implements IBaseService<T>
{
  constructor(protected readonly repository: Repository<T>) {}
  public async findAll(): Promise<T[]> {
    return await this.repository.find();
  }
  public async findOneAndDelete(id: number): Promise<boolean> {
    try {
      await this.repository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
  public async findOneAndUpdate(
    id: number,
    changes: Partial<T>
  ): Promise<boolean> {
    try {
      await this.repository.update(id, changes);
      return true;
    } catch (error) {
      return false;
    }
  }
}
