import { DataSource,Connection } from "typeorm";


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
  get connection() : DataSource | null
}
