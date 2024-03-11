import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class Participant {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "boolean",
    default: false,
  })
  confirmed!: boolean;
  @CreateDateColumn()
  participated_at!: Date;
}
