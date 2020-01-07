// REACT
import React, { Component, Fragment } from "react";

//GRAPHQL
import { Query, Mutation } from "react-apollo";
import { query as getClients } from "../../apollo/queries/getClients";
import { mutation as deleteClient } from "../../apollo/mutations/deleteClient";

// COMPONENTS
import Pager from "../Pager";
import Spinner from "../Spinner";

// NAVIGATION
import { Link } from "react-router-dom";

// ────────────────────────────────────────────────────────────────────────────────────────────────

class ClientList extends Component {
  state = {
    offset: 0,
    page: 1
  };

  limit = 6;

  onDeleteClient = (mutation, id) => {
    mutation({
      variables: { id }
    });
  };

  onClickPrevious = () => {
    const { offset, page } = this.state;
    this.setState({ offset: offset - this.limit, page: page - 1 });
  };

  onClickNext = () => {
    const { offset, page } = this.state;
    this.setState({ offset: offset + this.limit, page: page + 1 });
  };

  render() {
    const { offset, page } = this.state;

    return (
      <Query
        query={getClients}
        variables={{ limit: this.limit, offset }}
        pollInterval={1000}
      >
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
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
                        <Link
                          to={`/orders/new/${item.id}`}
                          className="btn btn-warning d-block d-md-inline-block mr-2"
                        >
                          &#43; New Order
                        </Link>
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
              <Pager
                page={page}
                total={data.totalClients}
                limit={this.limit}
                previousPage={this.onClickPrevious}
                nextPage={this.onClickNext}
              />
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default ClientList;
