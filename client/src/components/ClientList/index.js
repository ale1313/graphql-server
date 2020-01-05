// REACT
import React, { Component, Fragment } from "react";

//GRAPHQL
import { Query, Mutation } from "react-apollo";
import { query as getClients } from "../../apollo/queries/getClients";
import { mutation as deleteClient } from "../../apollo/mutations/deleteClient";

// NAVIGATION
import { Link } from "react-router-dom";

// ────────────────────────────────────────────────────────────────────────────────────────────────

class ClientList extends Component {
  onDeleteClient = (mutation, id) => {
    mutation({
      variables: { id }
    });
  };

  render() {
    return (
      <Query query={getClients} pollInterval={1000}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `An error has ocurred\n${error.message}`;
          return (
            <Fragment>
              <h2 className="text-center">Client List</h2>
              <ul className="list-group mt-4">
                {data.getAllClients.map(item => (
                  <li key={item.id} className="list-group-item">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-8 d-flex justify-content-between align-items-center">
                        {item.name} {item.last_name}
                      </div>
                      <div className="col-md-4 d-flex justify-content-end">
                        <Mutation mutation={deleteClient}>
                          {deleteClient => (
                            <button
                              type="button"
                              className="btn btn-danger d-block d-md-inline-block mr-2"
                              onClick={() =>
                                this.onDeleteClient(deleteClient, item.id)
                              }
                            >
                              &times; Delete
                            </button>
                          )}
                        </Mutation>
                        <Link
                          className="btn btn-success d-block d-md-inline-block"
                          to={`/clients/edit/${item.id}`}
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default ClientList;
