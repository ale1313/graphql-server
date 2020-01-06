// GRAPHQL
import gql from "graphql-tag";

// ────────────────────────────────────────────────────────────────────────────────────────────────

export const query = gql`
  query getAllClients($limit: Int, $offset: Int) {
    getAllClients(limit: $limit, offset: $offset) {
      id
      name
      last_name
    }
    totalClients
  }
`;
