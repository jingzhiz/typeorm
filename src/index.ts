import { AppDataSource } from "./data-source"
import {
  test_01,
  test_02,
  test_03,
  test_04,
  test_05,
  test_06,
  test_07,
  test_08
} from './unit-test'

AppDataSource.initialize().then(async () => {
  test_08(AppDataSource)
}).catch(error => console.log(error))
