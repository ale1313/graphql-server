class Client {
    constructor(id, {
        name,
        last_name,
        email,
        business
    }) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.business = business;
    };
};

const clientsDB = {};

const resolvers = {
    getClient: ({id}) => {
        return new Client(id, clientsDB[id]);
    },
    newClient: ({ form }) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        clientsDB[id] = form;
        return new Client(id, form);
    },
};

export default resolvers;