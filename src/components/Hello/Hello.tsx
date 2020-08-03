import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GetTODO, GetTodoQuery, GetTodoQueryVariables } from "./gql/Hello.gql";

export function Hello() {
  const { data, error } = useQuery<GetTodoQuery, GetTodoQueryVariables>(
    GetTODO
  );

  return <div>Hello component - {JSON.stringify(error || data, undefined, 4)}</div>;
}
