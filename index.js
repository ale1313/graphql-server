// LIBS
import express from 'express';

// GRAPHQL
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

// ────────────────────────────────────────────────────────────────────────────────────────────────

const app = express();

app.get('/', (req, res) => {
    res.send('All ready');
});

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
}));

app.listen(8000, () => console.log('The server is running'));