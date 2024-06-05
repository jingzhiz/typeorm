import { User } from "../entity"
import { create, queryById } from '../mapper'

export async function test_03(app) {
  let result = await queryById(app, User, 1)
  result.age = 20
  await create(app, result, User)
  result = await queryById(app, User, 1)

  console.log(result)
}