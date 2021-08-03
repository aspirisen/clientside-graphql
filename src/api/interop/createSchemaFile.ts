import "reflect-metadata";
import * as fs from "fs";
import { createSchema, schemaToString } from "./schemaCreator";

async function createSchemaFile() {
  const schema = await createSchema();
  const str = schemaToString(schema);
  fs.writeFileSync("./schema.graphql", str);
}

createSchemaFile();
