// GRAPHQL
import gql from 'graphql-tag';

// ────────────────────────────────────────────────────────────────────────────────────────────────

export const mutation = gql`
mutation updateClient($form: ClientForm) {
    updateClient(form: $form) {
        id
        name
        last_name
        age
        business
        type
        emails {
            email
        }
    }
}
`;