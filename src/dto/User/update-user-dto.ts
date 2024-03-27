import { User } from "../../enteties/base/User";

export class UpdateUserDTO extends User {
  constructor(body: any) {
    super(body);
    Object.assign(this, body);
  }
}
