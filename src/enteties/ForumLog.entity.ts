import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class ForumLog {
  @PrimaryGeneratedColumn()
  id!: string;
  @Column({
    type: "varchar",
  })
  @UpdateDateColumn()
  updated_at!: Date;
}
