import {
  Column, Entity, ObjectID, ObjectIdColumn,
} from 'typeorm';

@Entity({ database: 'default', name: 'verbs' })
export default class Verb {
  @ObjectIdColumn()
  _id!: ObjectID;

  @Column()
  base!: string;

  @Column()
  presentSimple!: string;

  @Column()
  presentParticiple!: string;

  @Column()
  pastSimple!: string;

  @Column()
  pastParticiple!: string;
}
