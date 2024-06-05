import { User } from "../entity"
import { deleteById, queryAll } from '../mapper'

export async function test_04(app) {
  await deleteById(app, User, 1)

  const result = await queryAll(app, User)

  console.log(result)
}