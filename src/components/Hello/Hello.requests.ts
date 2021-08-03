import { gql } from "@apollo/react-hooks";

export const GetUsers = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;
