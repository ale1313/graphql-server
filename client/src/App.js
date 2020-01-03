// REACT
import React from 'react';

// GRAPHQL
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

// COMPONENTS
import { Header, ClientList } from './components/';

// ────────────────────────────────────────────────────────────────────────────────────────────────

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    if (networkError) console.log('\n\nnetworkError', networkError, '\n\n');
    else console.log('\n\ngraphQLErrors', graphQLErrors, '\n\n');
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <div className="container">
        <ClientList/>
      </div>
    </ApolloProvider>
  );
};

export default App;
