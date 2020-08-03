import * as React from "react";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphqlContext } from "@clientside-graphql/defs";
import * as resolvers from "../graphql/resolvers";
import typeDefs from "../graphql/schema.graphql";

export function GraphQL(props: React.PropsWithChildren<{}>) {
  const value = React.useMemo(() => {
    const context: GraphqlContext = {
      token: "someToken",
    };

    const schema = makeExecutableSchema({
      typeDefs,
      resolvers,
      resolverValidationOptions: { requireResolversForResolveType: false },
    });

    const client = new ApolloClient({
      cache: new InMemoryCache({}),
      link: new SchemaLink({ schema, context }),
    });

    return client;
  }, []);

  return (
    <ApolloProvider client={value as any}>{props.children}</ApolloProvider>
  );
}
