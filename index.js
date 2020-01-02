// LIBS
import express from 'express';

// GRAPHQL
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('All ready');
});

const rootValue = { test: () => "Hello World!" };

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
}));

app.listen(8000, () => console.log('The server is running'));