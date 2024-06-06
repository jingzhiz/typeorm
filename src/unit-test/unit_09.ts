import type { DataSource } from 'typeorm'
import { User } from '../entity'

export const test_09 = async (app: DataSource) => {
  const user1 = new User()
  user1.firstName = 'Timber'
  user1.lastName = 'Saw'
  user1.age = 25
  const user2 = new User()
  user2.firstName = 'Tom'
  user2.lastName = 'Hanks'
  user2.age = 25

  // InsertQueryBuilder
  await app.createQueryBuilder()
    .insert()
    .into(User)
    .values([user1, user2])
    .execute()

  // SelectQueryBuilder
  const user = await app.createQueryBuilder()
    .select('user')
    .from(User, 'user')
    .where('user.id = :id', { id: 1 })
    .getOne()

  console.log(user)

  // UpdateQueryBuilder
  await app.createQueryBuilder()
    .update(User)
    .set({ ...user, age: 18 })
    .where("id = :id", { id: user.id })
    .execute()

  // DeleteQueryBuilder
  await app.createQueryBuilder()
    .delete()
    .from(User, 'user')
    .where("id = :id", { id: user.id })
    .execute()
}