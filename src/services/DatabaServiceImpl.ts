import { injectable } from "inversify";
import { IDatabaseService } from "../types/Service";
import { DataSource, DataSourceOptions } from "typeorm";

@injectable()
export class DatabaseServiceImpl implements IDatabaseService {
  public con!: DataSource;
  public isConnected: boolean = false;
  constructor(private readonly config: DataSourceOptions) {}
  public async connect(): Promise<DataSource> {
    const dataSource = new DataSource(this.config);
    const connection = await dataSource.initialize();
    this.isConnected = true;
    this.con = connection;
    return connection;
  }
  get connection(): DataSource {
    return this.con;
  }
}
