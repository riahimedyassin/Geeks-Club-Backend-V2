import { UpdateUserDTO } from "../User/update-user-dto";

export class GeneralAdminUpdateDTO extends UpdateUserDTO {
  constructor(body: any) {
    super(body);
  }
}
