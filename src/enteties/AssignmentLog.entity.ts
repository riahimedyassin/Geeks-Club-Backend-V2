import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

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
}
