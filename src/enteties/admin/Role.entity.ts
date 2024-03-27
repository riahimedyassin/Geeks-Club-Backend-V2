import {  Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {Admin} from './Admin.entity'
import { Permission } from "./Permission.entity";

export class Role {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 20,
  })
  title!: string;
  @Column({
    type: "varchar",
    length: 100,
  })
  descreption!: string;
  @OneToMany(()=> Admin , (admin) => admin.role)
  admins! : Admin[]; 
  @ManyToOne(() => Permission, (permission) => permission)
  permission! : Permission ; 
}
