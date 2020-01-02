// LIBS
import express from 'express';

// GRAPHQL
import graphqlHTTP from 'express-graphql';
import schema from './data/schema';

// ────────────────────────────────────────────────────────────────────────────────────────────────

const app = express();

app.get('/', (req, res) => {
    res.send('All ready');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(8000, () => console.log('The server is running'));