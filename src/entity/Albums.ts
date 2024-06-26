import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm'
import { Photo } from './Photo'

@Entity()
export class Albums {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(type => Photo, photo => photo.albums)
  @JoinTable()
  photos: Photo[]
}