import { Photo, PhotoMetaData } from "../entity"
import { create } from "../mapper"

export async function test_07(app) {
  const photo = new Photo()
  photo.name = "Me and Bears"
  photo.description = "I am near polar bears"
  photo.filename = "photo-with-bears.jpg"
  photo.views = 1
  photo.isPublished = true
  const metaData = new PhotoMetaData()
  metaData.height = 640
  metaData.width = 480
  metaData.compressed = true
  metaData.comment = "cybershoot"
  metaData.orientation = "portrait"
  photo.metaData = metaData
  await create(app, photo, Photo)
}