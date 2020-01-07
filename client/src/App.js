// REACT
import React, { Fragment } from "react";

// GRAPHQL
import { ApolloProvider } from "react-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENTS
import {
  Header,
  ClientList,
  ProductList,
  NewClient,
  NewProduct,
  EditClient,
  EditProduct,
  NewOrder
} from "./components";

// ────────────────────────────────────────────────────────────────────────────────────────────────

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache({
    addTypename: false
  }),
  onError: ({ networkError, graphQLErrors }) => {
    if (networkError) console.log("\n\nnetworkError", networkError, "\n\n");
    else console.log("\n\ngraphQLErrors", graphQLErrors, "\n\n");
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/clients" component={ClientList} />
              <Route exact path="/products" component={ProductList} />
              <Route exact path="/clients/new" component={NewClient} />
              <Route exact path="/products/new" component={NewProduct} />
              <Route exact path="/clients/edit/:id" component={EditClient} />
              <Route exact path="/products/edit/:id" component={EditProduct} />
              <Route exact path="/orders/new/:id" component={NewOrder} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
