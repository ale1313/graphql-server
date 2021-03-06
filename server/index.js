// LIBS
import express from "express";

// GRAPHQL
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./data/schema";
import resolvers from "./data/resolvers";

// ────────────────────────────────────────────────────────────────────────────────────────────────

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 8000 }, () =>
  console.log(
    `The server is running: http://localhost:8000${server.graphqlPath}`
  )
);
