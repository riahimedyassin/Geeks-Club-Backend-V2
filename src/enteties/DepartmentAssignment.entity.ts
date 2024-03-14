import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./Department.entity";
import { Assignment } from "./Assignment.entity";

@Entity()
export class DepartmentAssignment {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "boolean",
    default: true,
  })
  required!: boolean;
  @ManyToOne(() => Department, (dep) => dep.assignments)
  department!: Department;
  @ManyToOne(() => Assignment , (ass) => ass.depart_asgnmnt) 
  assignment! : Assignment ; 
}
