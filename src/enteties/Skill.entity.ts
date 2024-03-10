import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 20,
  })
  name!: string;
}
