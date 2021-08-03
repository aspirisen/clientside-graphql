import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  public id!: string;

  @Field()
  public name!: string;
}
