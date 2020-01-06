// REACT
import React, { Component, Fragment } from "react";

//GRAPHQL
import { Query, Mutation } from "react-apollo";
import { query as getProduct } from "../../apollo/queries/getProduct";
import { mutation as updateProduct } from "../../apollo/mutations/updateProduct";

// COMPONENTS
import ProductForm from "../ProductForm";

// ────────────────────────────────────────────────────────────────────────────────────────────────

class EditProduct extends Component {
  onSubmit = (e, mutation, form) => {
    e.preventDefault();
    mutation({
      variables: { form }
    });
  };

  render() {
    const { id } = this.props.match.params;

    return (
      <Fragment>
        <h2 className="text-center">Edit Product</h2>
        <Query query={getProduct} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `An error has ocurred\n${error.message}`;
            return (
              <div className="row justify-content-center">
                <Mutation
                  mutation={updateProduct}
                  onCompleted={() => this.props.history.push("/products")}
                >
                  {updateProduct => (
                    <ProductForm
                      mutation={updateProduct}
                      data={data}
                      comingFromEdit
                      onSubmit={this.onSubmit}
                    />
                  )}
                </Mutation>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default EditProduct;
