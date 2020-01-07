// REACT
import React, { Component, Fragment } from "react";

// GRAPHQL
import { Query } from "react-apollo";
import { query as getAllProducts } from "../../apollo/queries/getAllProducts";

// COMPONENTS
import ClientCard from "../ClientCard";
import Spinner from "../Spinner";

// ────────────────────────────────────────────────────────────────────────────────────────────────

class NewOrder extends Component {
  state = {
    loading: false
  };

  render() {
    const { id } = this.props.match.params;

    return (
      <Fragment>
        <h2 className="text-center mb-5">Add Order</h2>
        <div className="row">
          <div className="col-md-3">
            <ClientCard id={id} />
          </div>
          <div className="col-md-9">
            <h2 className="text-center mb-5">Available Products</h2>
            <Query query={getAllProducts} pollInterval={1000}>
              {({ loading, error, data }) => {
                if (loading) return <Spinner />;
                if (error) return `An error has ocurred\n${error.message}`;
                return (
                  <table className="table">
                    <thead>
                      <tr className="table-primary">
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.getAllProducts.map(item => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{`$${item.price.toLocaleString()}`}</td>
                          <td>{item.stock}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
              }}
            </Query>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewOrder;
