// REACT
import React, { Component, Fragment } from "react";

//GRAPHQL
import { Query, Mutation } from "react-apollo";
import { query as getAllProducts } from "../../apollo/queries/getAllProducts";
import { mutation as deleteProduct } from "../../apollo/mutations/deleteProduct";

// COMPONENTS
import Pager from "../Pager";
import Spinner from "../Spinner";

// NAVIGATION
import { Link } from "react-router-dom";

// ────────────────────────────────────────────────────────────────────────────────────────────────

class ProductList extends Component {
  state = {
    offset: 0,
    page: 1
  };

  limit = 6;

  onDeleteProduct = (mutation, id) => {
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
        query={getAllProducts}
        variables={{ limit: this.limit, offset }}
        pollInterval={1000}
      >
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return `An error has ocurred\n${error.message}`;
          return (
            <Fragment>
              <h2 className="text-center">Product List</h2>
              <table className="table">
                <thead>
                  <tr className="table-primary">
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {data.getAllProducts.map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{`$${item.price.toLocaleString()}`}</td>
                      <td>{item.stock}</td>
                      <td>
                        <Mutation mutation={deleteProduct}>
                          {deleteProduct => (
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() =>
                                this.onDeleteProduct(deleteProduct, item.id)
                              }
                            >
                              &times; Delete
                            </button>
                          )}
                        </Mutation>
                      </td>
                      <td>
                        <Link
                          className="btn btn-success d-block d-md-inline-block"
                          to={`/products/edit/${item.id}`}
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pager
                page={page}
                total={data.totalProducts}
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

export default ProductList;
