import type { DataSource as DataSourceType } from 'typeorm'

export const load = async (app: DataSourceType, instance, entity) => {
  await app.manager.save(instance)

  return await app.manager.find(entity)
}

export const queryAll = async (app: DataSourceType, entity) => {
  const repository = app.getRepository(entity)

  return await repository.find();
}

export const queryById = async (app: DataSourceType, entity, id) => {
  const repository = app.getRepository(entity)

  return await repository.findOneBy(id)
}

export const create = async (app: DataSourceType, instance, entity) => {
  const repository = app.getRepository(entity)

  await repository.save(instance)
}

export const deleteById = async (app: DataSourceType, entity, id) => {
  const repository = app.getRepository(entity)

  await repository.delete(id)
}