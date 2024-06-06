import type { DataSource } from 'typeorm'
import { Brackets } from 'typeorm'
import { User } from '../entity'

export const test_10 = async (app: DataSource) => {
  // const user = await app.createQueryBuilder()
  //   .select('user')
  //   .from(User, 'user')
  //   .where('user.id = :id OR user.firstName = :firstName', { id: 2, firstName: 'Tom' })
  //   .getMany()

  // const user = await app.createQueryBuilder()
  //   .select('user')
  //   .from(User, 'user')
  //   .where('user.firstName IN (:firstNames)', { firstNames: ['Tom'] })
  //   .getMany()

  const user = await app.createQueryBuilder()
    .select('user')
    .from(User, 'user')
    // .where('user.firstName = :firstName', { firstName: 'Tom' })
    // .andWhere('user.lastName = :lastName', { lastName: 'Hanks' })
    // .orWhere('user.lastName = :lastName', { lastName: 'Saw' })
    .where(new Brackets(qb => {
      qb.where('user.firstName = :firstName', { firstName: 'Tom' })
        .orWhere('user.lastName = :lastName', { lastName: 'Saw' })
    }))
    .getMany()

  console.log(user)
}