import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Forum } from "./Forum.entity";

@Entity()
export class ForumLog {
  @PrimaryGeneratedColumn()
  id!: string;
  @Column({
    type: "varchar",
  })
  @UpdateDateColumn()
  updated_at!: Date;
  @ManyToOne(() => Forum , (forum) => forum.logs)
  forum!: Forum ; 
}
