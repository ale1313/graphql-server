// REACT
import React, { Component, Fragment } from "react";

// GRAPHQL
import { Mutation } from "react-apollo";
import { mutation as createProduct } from "../../apollo/mutations/createProduct";

// COMPONENTS
import ProductForm from "../ProductForm";

// ────────────────────────────────────────────────────────────────────────────────────────────────

class NewProduct extends Component {
  onSubmit = (e, mutation, form) => {
    e.preventDefault();
    mutation({
      variables: { form }
    });
  };

  render() {
    return (
      <Fragment>
        <h2 className="text-center">Add Product</h2>
        <div className="row justify-content-center">
          <Mutation
            mutation={createProduct}
            onCompleted={() => this.props.history.push("/products")}
          >
            {createProduct => (
              <ProductForm onSubmit={this.onSubmit} mutation={createProduct} />
            )}
          </Mutation>
        </div>
      </Fragment>
    );
  }
}

export default NewProduct;
