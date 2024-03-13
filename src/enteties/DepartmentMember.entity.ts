import { CreateDateColumn, Entity, ManyToOne } from "typeorm";
import { Department } from "./Department.entity";
import { Admin } from "./Admin.entity";

@Entity()
export class DepartmentMember {
  @CreateDateColumn()
  joined_at!: Date;
  @ManyToOne(() => Department, (department) => department.members)
  department!: Department;
  @ManyToOne(() => Admin , (admin) => admin.department_member)
  admin!: Admin ; 
  
}
