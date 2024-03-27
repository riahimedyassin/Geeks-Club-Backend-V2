import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DepartmentMember } from "./DepartmentMember.entity";
import { DepartmentAssignment } from "../assignment/DepartmentAssignment.entity";
import { Assignment } from "../assignment/Assignment.entity";

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
  @OneToMany(() => DepartmentMember ,(member) => member.department)
  members! : DepartmentMember[]
  @OneToMany(() => DepartmentAssignment ,(asngmt) => asngmt.department)
  assignments!: Assignment[]
}
