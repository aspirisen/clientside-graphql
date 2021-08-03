import { GraphQLSchema, printSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import { UserController } from "../controllers/UserController";

export function createSchema() {
  const schema = buildSchema({
    resolvers: [UserController],
    container: Container,
  });

  return schema;
}

export function schemaToString(schema: GraphQLSchema) {
  const str = printSchema(schema);
  return str;
}
