// GRAPHQL
import gql from "graphql-tag";

// ────────────────────────────────────────────────────────────────────────────────────────────────

export const mutation = gql`
  mutation updateProduct($form: ProductForm) {
    updateProduct(form: $form) {
      id
      name
      price
      stock
    }
  }
`;
