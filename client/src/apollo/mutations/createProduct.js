// GRAPHQL
import gql from "graphql-tag";

// ────────────────────────────────────────────────────────────────────────────────────────────────

export const mutation = gql`
  mutation createProduct($form: ProductForm) {
    createProduct(form: $form) {
      id
      name
      price
      stock
    }
  }
`;
