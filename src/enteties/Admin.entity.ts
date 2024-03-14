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
import { Question } from "./Question.entity";
import { AssignmentLog } from "./AssignmentLog.entity";
import { EventLog } from "./EventLog.entity";

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
