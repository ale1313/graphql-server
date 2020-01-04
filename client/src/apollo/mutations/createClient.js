// GRAPHQL
import gql from 'graphql-tag';

// ────────────────────────────────────────────────────────────────────────────────────────────────

export const mutation = gql`
mutation createClient($form: ClientForm){
  createClient(form: $form) {
    id
    name
    last_name
  }
}
`;