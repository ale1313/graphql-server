// GRAPHQL
import gql from "graphql-tag";

// ────────────────────────────────────────────────────────────────────────────────────────────────

export const query = gql`
  {
    getAllClients {
      id
      name
      last_name
    }
  }
`;
