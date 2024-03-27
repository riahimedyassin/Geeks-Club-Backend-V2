import {  Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {Admin} from '../admin/Admin.entity'

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
  })
  content!: string;
  @ManyToOne(() => Admin , (admin) => admin.questions)
  admin! : Admin
}
