import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Companies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cnpj: number;

  @Column()
  demand: number;

  @Column()
  billing: string;

  @Column()
  about: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updted_at: Date;
}
