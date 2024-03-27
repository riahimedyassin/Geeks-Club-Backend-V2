import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./Role.entity";

export class Permission {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "boolean",
    default: false,
  })
  read!: boolean;
  @Column({
    type: "boolean",
    default: false,
  })
  write!: boolean;
  @Column({
    type: "boolean",
    default: false,
  })
  modify!: boolean;
  @Column({
    type: "boolean",
    default: false,
  })
  delete!: boolean;
  @OneToMany(() => Role, (role) => role.permission)
  roles!: Role[];
}
