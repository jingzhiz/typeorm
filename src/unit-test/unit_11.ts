import type { DataSource } from 'typeorm'
import { User } from '../entity'

export const test_11 = async (app: DataSource) => {
  const user = await app.createQueryBuilder()
    .select()
    .from(User, 'user')
    .having('user.firstName = :firstName', { firstName: 'Tom' })
    .andHaving('user.lastName = :lastName', { lastName: 'Hanks' })
    // .orderBy('user.id', 'DESC')
    .orderBy({
      'user.id': 'DESC'
    })
    .limit(5)
    .offset(0)
    .getRawMany()

  console.log(user)
}