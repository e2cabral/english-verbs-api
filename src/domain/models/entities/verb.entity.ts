import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'verbs', database: 'pg' })
export default class Verb {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column({ type: 'varchar', name: 'base' })
  base!: string;

  @Column({ type: 'varchar', name: 'base' })
  presentSimple!: string;

  @Column({ type: 'varchar', name: 'base' })
  presentParticiple!: string;

  @Column({ type: 'varchar', name: 'base' })
  pastSimple!: string;

  @Column({ type: 'varchar', name: 'base' })
  pastParticiple!: string;
}
