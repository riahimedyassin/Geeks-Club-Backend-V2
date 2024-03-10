import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Submission {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length : 500
  })
  content!: string;
  @CreateDateColumn()
  created_at! : Date ; 
  @UpdateDateColumn()
  updated_at! : Date ;  
}
