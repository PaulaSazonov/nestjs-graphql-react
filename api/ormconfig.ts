import path from 'path'
import dotenv from 'dotenv'
import { DataSourceOptions } from 'typeorm'

dotenv.config()

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [path.join(__dirname, 'src', '**', '*.entity.ts')],
}

export default dataSourceOptions
