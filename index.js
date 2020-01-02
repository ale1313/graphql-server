// LIBS
import express from 'express';

// GRAPHQL
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('All ready');
});


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

const rootValue = {
    client: () => {
        return {
            "id": 53453453535,
            "name": "John",
            "last_name": "Johnson",
            "emails": [
                {
                    email: "johnjohnson@gmail.com",
                },
                {
                    email: "liljohnny@gmail.com"
                }
            ],
            "business": "Johnson & Co."
        }
    },
    newClient: ({ input }) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        clientsDB[id] = form;
        return new Client(id, form);
    },
};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
}));

app.listen(8000, () => console.log('The server is running'));