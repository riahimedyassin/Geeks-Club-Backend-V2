import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Post } from "./Post.entity";
import { Member } from "../../member/Member.entity";

@Entity()
export class Reply {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 100,
  })
  messsage!: string;
  @Column({
    type: "varchar",
    nullable: true,
  })
  picture!: string;
  @CreateDateColumn()
  created_at!: Date;
  @ManyToOne(() => Post, (post) => post.replies)
  post!: Post;
  @ManyToOne(() => Member , (member) => member.replies)
  member! : Member
}
