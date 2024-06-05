import { User } from "../entity"
import { queryAll, queryById } from '../mapper'

export async function test_02(app) {
  // const result = await queryAll(app, User)

  const result = await queryById(app, User, 1)

  console.log(result)
}