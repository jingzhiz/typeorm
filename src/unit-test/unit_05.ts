import { Photo, PhotoMetaData } from "../entity"
import { create } from '../mapper'

export async function test_05(app) {
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
  metaData.photo = photo
  await create(app, photo, Photo)
  await create(app, metaData, PhotoMetaData)
}