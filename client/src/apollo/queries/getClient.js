// GRAPHQL
import gql from 'graphql-tag';

// ────────────────────────────────────────────────────────────────────────────────────────────────

export const query = gql`
query getClient($id: ID) {
    getClient(id: $id) {
      id
      name
      last_name
      age
      business
      emails {
        email
      }
      type
    }
}
`;