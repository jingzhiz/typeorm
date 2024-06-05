import { Photo, Albums } from "../entity"
import { create } from "../mapper"

export async function test_08(app) {
  const album1 = new Albums()
  album1.name = "Bears"
  await create(app, album1, Albums)

  const album2 = new Albums()
  album2.name = "Cats"
  await create(app, album2, Albums)

  const photo = new Photo()
  photo.name = "Me and Bears"
  photo.description = "I am near polar bears"
  photo.filename = "photo-with-bears.jpg"
  photo.views = 1
  photo.isPublished = true

  photo.albums = [album1, album2]

  await create(app, photo, Photo)

  const result = await app.getRepository(Photo).findOne({
    relations: ["albums"],
    where: {
      id: 1
    }
  })

  console.log(result)
}