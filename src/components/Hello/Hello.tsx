import { useGetUsersQuery } from "./graphql/Hello.requests.gql";

export function Hello() {
  const { data, error } = useGetUsersQuery();
  console.log(error);

  return <pre>Hello component - {JSON.stringify(data, undefined, 4)}</pre>;
}
