import { Member } from "../enteties/Member.entity";
import { IMemberRepository } from "../types/Repository";
import { BaseRepository } from "./BaseRepository";

export class MemberRepository extends BaseRepository<Member> implements IMemberRepository {
    
}