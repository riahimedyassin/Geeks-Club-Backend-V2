import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Role } from "./Role.entity";
import { DepartmentMember } from "./DepartmentMember.entity";

@Entity()
export class Admin extends User {
  @ManyToOne(() => Role, (role) => role.admins)
  role!: Role;
  @OneToMany(() => DepartmentMember, (dpe_mem) => dpe_mem.admin)
  department_member!: DepartmentMember[];
}
