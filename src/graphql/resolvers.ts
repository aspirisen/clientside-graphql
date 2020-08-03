import { QueryResolvers } from "./resolvers-signatures";

export const Query: QueryResolvers = {
  hello: async (_, __, ctx) => {
    return `Hello with token from ctx: ${ctx.token}`;
  },
};
