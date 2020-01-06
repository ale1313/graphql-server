// GRAPHQL
import gql from "graphql-tag";

// ────────────────────────────────────────────────────────────────────────────────────────────────

export const query = gql`
  query getProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      price
      stock
    }
  }
`;
