import {
  
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Admin } from "../admin/Admin.entity";

export class AssignmentLog {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 200,
  })
  content!: string;
  @CreateDateColumn()
  updated_at!: Date;
  @ManyToOne(() => Admin, (admin) => admin.asgnmnt_logs)
  admin!: Admin;
}
