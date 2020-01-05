// GRAPHQL
import gql from "graphql-tag";

// ────────────────────────────────────────────────────────────────────────────────────────────────

export const mutation = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id)
  }
`;
