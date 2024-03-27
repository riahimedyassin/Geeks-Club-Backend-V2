import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Forum } from "../Forum.entity";
import { Reply } from "./Reply.entity";
import { Member } from "../../member/Member.entity";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
  })
  message!: string;
  @Column({
    type: "varchar",
    nullable: true,
  })
  picture!: string;
  @OneToMany(() => Reply , (reply) => reply.post) 
  replies! : Reply[]
  @ManyToOne(() => Forum, (forum) => forum.posts)
  forum!: Forum;
  @ManyToOne(() => Member , (member) => member.posts)
  member! : Member ; 
}
