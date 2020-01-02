class Client {
    constructor(id, {
        name,
        last_name,
        age,
        emails,
        business,
        type,
        orders
    }) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.age = age;
        this.emails = emails;
        this.business = business;
        this.type = type;
        this.orders = orders;
    };
};

const clientsDB = {};

const resolvers = {
    Query: {
        getClient: ({id}) => {
            return new Client(id, clientsDB[id]);
        },
    },
    Mutation: {
        newClient: ({ form }) => {
            const id = require('crypto').randomBytes(10).toString('hex');
            clientsDB[id] = form;
            return new Client(id, form);
        },
    },
};

export default resolvers;