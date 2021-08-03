import { Resolver, Query } from "type-graphql";
import { Service } from "typedi";
import { User } from "../models/User";

@Service()
@Resolver()
export class UserController {
  @Query(() => [User])
  async users() {
    const user = new User();
    user.id = "1";
    user.name = "one";

    return [user];
  }
}
