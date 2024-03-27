import { ObjectLiteral } from "typeorm";
import { Member } from "../enteties/member/Member.entity";
import { Admin } from "../enteties/admin/Admin.entity";

/**
 * @class
 * @abstract
 * @classdesc Abstract Class used to define a mutuale behavior among different repositories
 * This class is used to simplify the creation of a repository
 * @template T extends {@link ObjectLiteral} In other words , the passed in type should be an entity
 */
declare interface IBaseRepository<T extends ObjectLiteral> {
  /**
   * @public
   * @async
   * @description Return all the records
   * @returns {Promise<T[]>}
   */
  findAll(): Promise<T[]>;
  /**
   * @public
   * @async
   * @description Return a record of the given entity if it exists , else null
   * @param {number} id
   * @returns {Promise<T|null>}
   */
  findOneByID(id: number): Promise<T | null>;
  /**
   * @public
   * @async
   * @description Return true if the record has been found and updated , else false.
   * @param {number} id
   * @param {Partial<T>} body
   * @returns {Promise<boolean>}
   */
  findOneAndUpdate(id: number, body: Partial<T>): Promise<boolean>;
  /**
   * @public
   * @async
   * @description Return true if the record has been found and deleted , else false.
   * @param {number} id
   * @returns {Promise<boolean>}
   */
  findOneAndDelete(id: number): Promise<boolean>;
}

/**
 * @class
 * @classdesc Member Repository
 * @extends {IBaseRepository<Member>}
 */
declare interface IMemberRepository extends IBaseRepository<Member> {}
declare interface IAdminRepository extends IBaseRepository<Admin> {}
