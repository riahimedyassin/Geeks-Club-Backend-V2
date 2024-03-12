import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Role } from "./Role.entity";

@Entity()
export class Admin extends User {
  @ManyToOne(() => Role, (role) => role.admins)
  role!: Role;
}
