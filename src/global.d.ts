declare module "*.graphql";

declare module "@clientside-graphql/defs" {
  export interface GraphqlContext {
    token: string;
  }
}
