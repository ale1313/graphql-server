// GRAPHQL
import gql from "graphql-tag";

// ────────────────────────────────────────────────────────────────────────────────────────────────

export const query = gql`
  query getAllProducts($limit: Int, $offset: Int) {
    getAllProducts(limit: $limit, offset: $offset) {
      id
      name
      price
      stock
    }
    totalProducts
  }
`;
