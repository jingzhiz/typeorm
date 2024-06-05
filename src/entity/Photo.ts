import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn, JoinTable, ManyToMany } from 'typeorm'
import { PhotoMetaData } from './PhotoMetaData'
import { Author } from './Author'
import { Albums } from './Albums'

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100
  })
  name: string

  @Column('text')
  description: string

  @Column()
  filename: string

  @Column('double')
  views: number

  @Column()
  isPublished: boolean

  // 开启 cascade: true 后保存 photo 时自动保存 photoMetaData
  @OneToOne(type => PhotoMetaData, photoMetaData => photoMetaData.photo, { cascade: true })
  @JoinColumn()
  metaData: PhotoMetaData

  @ManyToOne(type => Author, author => author.photos)
  author: Author

  @ManyToMany(type => Albums, albums => albums.photos)
  albums: Albums[]
}