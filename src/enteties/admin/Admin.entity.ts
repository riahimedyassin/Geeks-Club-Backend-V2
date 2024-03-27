import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../base/User";
import { Role } from "./Role.entity";
import { DepartmentMember } from "../department/DepartmentMember.entity";
import { Question } from "../shared/Question.entity";
import { AssignmentLog } from "../assignment/AssignmentLog.entity";
import { EventLog } from "../event/EventLog.entity";

@Entity()
export class Admin extends User {
  @ManyToOne(() => Role, (role) => role.admins)
  role!: Role;
  @OneToMany(() => DepartmentMember, (dpe_mem) => dpe_mem.admin)
  department_member!: DepartmentMember[];
  @OneToMany(() => Question, (question) => question.admin)
  questions!: Question[];
  @OneToMany(() => AssignmentLog, (log) => log.admin)
  asgnmnt_logs!: AssignmentLog[];
  @OneToMany(() => EventLog, (log) => log.admin)
  event_logs!: EventLog[];
}
