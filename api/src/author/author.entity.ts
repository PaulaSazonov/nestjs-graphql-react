import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Book } from '../entities'

@Entity()
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  public id!: string

  @Column()
  @Field()
  public name!: string

  @OneToMany(() => Book, (book) => book.author)
  @Field(() => [Book])
  public books!: Book[]
}
