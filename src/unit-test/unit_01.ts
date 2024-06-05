import { Photo } from "../entity"
import { load } from '../mapper'

export async function test_01(app) {
  const photo = new Photo()
  photo.name = "Me and Bears"
  photo.description = "I am near polar bears"
  photo.filename = "photo-with-bears.jpg"
  photo.views = 1
  photo.isPublished = true
  const result = await load(app, photo, Photo)

  console.log(result)
}