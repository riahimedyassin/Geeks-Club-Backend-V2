import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 10,
  })
  name!: string;
  @Column({
    type: "varchar",
    length: 100,
  })
  descreption!: string;
}
