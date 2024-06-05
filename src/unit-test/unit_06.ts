import { Photo } from "../entity"

export async function test_06(app) {
  // const repository = app.getRepository(Photo)
  // const result = await repository.find({
  //   relations: {
  //     metaData: true
  //   }
  // })

  const result = await app.getRepository(Photo)
    .createQueryBuilder("photo")
    .innerJoinAndSelect("photo.metaData", "metaData")
    .getMany()

  console.log(result)
}