// REACT
import React, { Component, Fragment } from "react";

// GRAPHQL
import { Mutation } from "react-apollo";
import { mutation as createClient } from "../../apollo/mutations/createClient";

// COMPONENTS
import ClientForm from "../ClientForm";

// ────────────────────────────────────────────────────────────────────────────────────────────────

class NewClient extends Component {
  onSubmit = (e, mutation, form) => {
    e.preventDefault();
    mutation({
      variables: { form }
    });
  };

  render() {
    return (
      <Fragment>
        <h2 className="text-center">Add Client</h2>
        <div className="row justify-content-center">
          <Mutation
            mutation={createClient}
            onCompleted={() => this.props.history.push("/")}
          >
            {createClient => (
              <ClientForm onSubmit={this.onSubmit} mutation={createClient} />
            )}
          </Mutation>
        </div>
      </Fragment>
    );
  }
}

export default NewClient;
