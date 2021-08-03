import "reflect-metadata";
import * as React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/react-hooks";
import { SchemaLink } from "apollo-link-schema";
import { createSchema } from "api/interop/schemaCreator";
import introspectionResult from "api/possibleTypes";

export function GraphQLProvider(props: React.PropsWithChildren<{}>) {
  const [client, setClient] = React.useState<ApolloClient<unknown> | undefined>(
    undefined
  );

  React.useEffect(() => {
    createSchema().then((schema) => {
      const newClient = new ApolloClient({
        cache: new InMemoryCache({
          possibleTypes: introspectionResult.possibleTypes,
        }),
        link: new SchemaLink({ schema }) as any,
      });

      setClient(newClient);
    });
  }, []);

  return client ? (
    <ApolloProvider client={client}>{props.children}</ApolloProvider>
  ) : null;
}
