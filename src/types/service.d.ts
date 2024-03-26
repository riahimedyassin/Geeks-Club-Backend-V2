import { DataSource, Connection, Admin, ObjectLiteral } from "typeorm";

/**
 * @class
 * @abstract
 * @classdesc Basic Service Class
 */
declare interface IBaseService<T extends ObjectLiteral> {
  findAll(): Promise<T[]>;
  findOneAndDelete(id: number): Promise<boolean>;
  findOneAndUpdate(id: number, changes: Partial<T>): Promise<boolean>;
}

/**
 * @class
 * @classdesc Database Service Used to connect to the database
 */
declare interface IDatabaseService {
  /**
   * @public
   * @async
   * @description Called to connect with database and return a connected datasource if the connection is established
   * @returns {Promise<DataSource>}
   * @see Datasource
   */
  connect(): Promise<DataSource>;
  /**
   * @var
   * @description Used to check if the app is connected to the database successfully
   */
  isConnected: boolean;
  /**
   * @public
   * @description Used to return the current Datasource or null if the app did not connect to the database yet
   * @returns {DataSource | null}
   */
  get connection(): DataSource | null;
}
/**
 * @class
 * @classdesc Basic Admin Service
 */
declare interface IAdminService {
  /**
   * @public
   * @async
   * @description Get List of all admins
   * @returns {Promise<Admin[]>}
   */
  findAll(): Promise<Admin[]>;
  /**
   * @public
   * @async
   * @description Find Admin By ID
   * @param {number} id
   * @returns {Promise<Admin | null>}
   */
  findByID(id: number): Promise<Admin | null>;
  findByEmail(email: string): Promise<Admin | null>;
  findOneAndUpdate(id: number, changes: Partial<Admin>): Promise<boolean>;
  findOneAndDelete(id: number): Promise<boolean>;
  updateRole(id: number, permission: number): Promise<boolean>;
}
