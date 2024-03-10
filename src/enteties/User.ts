import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export abstract class User {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 15,
  })
  firstname!: string;
  @Column({
    type: "varchar",
    length: 20,
  })
  lastname!: string;
  @Column({
    type: "date",
  })
  birthdate!: Date;
  @Column({
    type: "int",
    length: 9,
  })
  phone!: number;
  @Column({
    type: "varchar",
    length: 100,
  })
  facebook!: string;
  @CreateDateColumn()
  created_at!: Date;
  @UpdateDateColumn()
  updated_at!: Date;
}
