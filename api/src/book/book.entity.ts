import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Author } from '../entities'
@Entity()
@ObjectType()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  public id!: string

  @ManyToOne(() => Author, (author) => author.books, {
    onDelete: 'CASCADE',
  })
  @Field(() => Author)
  public author!: Author
}
