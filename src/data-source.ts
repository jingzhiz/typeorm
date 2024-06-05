import "reflect-metadata"
import { DataSource } from "typeorm"
import * as Entities from "./entity"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "test",
  synchronize: true,
  logging: false,
  entities: Entities,
  migrations: [],
  subscribers: [],
})
