import { gql } from "apollo-boost";

export const directorsQuery = gql`
  query directors {
    directors {
      id
      name
    }
  }
`;
