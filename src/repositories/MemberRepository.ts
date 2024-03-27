import { Member } from "../enteties/member/Member.entity";
import { IMemberRepository } from "../types/Repository";
import { BaseRepository } from "./BaseRepository";

export class MemberRepository extends BaseRepository<Member> implements IMemberRepository {
    
}