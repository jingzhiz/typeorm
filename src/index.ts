import { AppDataSource } from "./data-source"
import {
  test_01,
  test_02,
  test_03,
  test_04,
  test_05,
  test_06,
  test_07,
  test_08,
  test_09,
  test_10,
  test_11,
  // test_12,
  // test_13,
  // test_14,
  // test_15,
} from './unit-test'

AppDataSource.initialize().then(async () => {
  test_11(AppDataSource)
}).catch(error => console.log(error))
