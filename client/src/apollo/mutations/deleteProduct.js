// GRAPHQL
import gql from "graphql-tag";

// ────────────────────────────────────────────────────────────────────────────────────────────────

export const mutation = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;
