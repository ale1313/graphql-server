// GRAPHQL
import { buildSchema } from 'graphql';

// ────────────────────────────────────────────────────────────────────────────────────────────────

const schema = buildSchema(`
    type Client {
        id: ID
        name: String
        last_name: String
        age: Int
        emails: [Email]
        business: String
        type: ClientType
        orders: [Order]
    }
    type Email {
        email: String
    }
    type Order {
        product: String
        quantity: Int
    }
    type Query {
        """Get clients from server"""
        getClient(id: ID): Client
    }
    enum ClientType {
        BASIC
        PREMIUM
    }
    input EmailInput {
        email: String
    }
    input OrderInput {
        product: String
        quantity: Int
    }
    input ClientForm {
        id: ID
        name: String!
        last_name: String!
        age: Int!
        emails: EmailInput
        business: String
        type: ClientType!
        orders: OrderInput
    }
    type Mutation {
        """Register a new client"""
        newClient(form: ClientForm): Client
    }
`);

export default schema;