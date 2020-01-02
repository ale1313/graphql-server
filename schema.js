// GRAPHQL
import { buildSchema } from 'graphql';

// ────────────────────────────────────────────────────────────────────────────────────────────────

const schema = buildSchema(`
    type Client {
        id: ID
        name: String
        last_name: String
        emails: [Email]
        business: String
    }
    type Email {
        email: String
    }
    type Query {
        getClient(id: ID): Client
    }
    input ClientForm {
        id: ID
        name: String!
        last_name: String!
        email: String
        business: String
    }
    type Mutation {
        newClient(form: ClientForm): Client
    }
`);

export default schema;