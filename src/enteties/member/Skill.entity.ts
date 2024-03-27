import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "./Member.entity";

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 20,
  })
  name!: string;
  @ManyToOne(() => Member , (member) => member.skills)
  member! : Member
}
