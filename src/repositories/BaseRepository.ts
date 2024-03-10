import {  ObjectLiteral, Repository } from "typeorm";
import { IBaseRepository } from "../types/Repository";

export abstract class BaseRepository<T extends ObjectLiteral>
  extends Repository<T>
  implements IBaseRepository<T>
{
  public async findAll() {
    return this.find();
  }
  public async findOneAndDelete(id: number) {
    try {
      await this.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
  public async findOneAndUpdate(id: number, body: Partial<T>) {
    try {
      await this.update(id, body);
      return true;
    } catch (error) {
      return false;
    }
  }
  public async findOneByID(id: any): Promise<T | null> {
    return await this.findOne(id);
  }
}
