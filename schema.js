import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Client {
        id: ID
        name: String
        last_name: String
        email: String
        business: String

    }
    type Query {
        client: Client
    }
`);

export default schema;