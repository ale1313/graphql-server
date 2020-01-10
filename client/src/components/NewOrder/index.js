// REACT
import React, { Component, Fragment } from "react";

// GRAPHQL
import { Query } from "react-apollo";
import { query as getAllProducts } from "../../apollo/queries/getAllProducts";

// COMPONENTS
import ClientCard from "../ClientCard";
import Spinner from "../Spinner";
import ProductSelector from "../ProductSelector";
import OrderSummary from "../OrderSummary";

// ────────────────────────────────────────────────────────────────────────────────────────────────

class NewOrder extends Component {
  state = {
    selected: [],
    total: 0
  };

  onSelectProduct = selected => {
    this.setState({ selected });
  };

  onDeselectProduct = i => {
    const { selected, total } = this.state;
    const newTotal = selected[i].quantity * selected[i].price;
    const newSelected = selected.filter((item, index) => i !== index);
    this.setState({
      selected: newSelected,
      total: total - newTotal
    });
  };

  onChangeQuantity = (val, index) => {
    const { selected, total } = this.state;

    const newState = selected;
    const itemPrice = newState[index].price;
    newState[index].quantity = Number(val);
    let newTotal = 0;
    newState.map(product => {
      if (product.quantity)
        newTotal += product.quantity * Number(product.price);
    });
    this.setState({
      selected: newState,
      total: newTotal
    });
  };

  render() {
    const { selected, total } = this.state;
    const { id } = this.props.match.params;

    return (
      <Fragment>
        <h2 className="text-center mb-5">Add Order</h2>
        <div className="row">
          <div className="col-md-3">
            <ClientCard id={id} />
          </div>
          <div className="col-md-9">
            <h2 className="text-center mb-5">Select Products</h2>
            <Query query={getAllProducts} pollInterval={1000}>
              {({ loading, error, data }) => {
                if (loading) return <Spinner />;
                if (error) return `An error has ocurred\n${error.message}`;
                return (
                  <ProductSelector
                    data={data.getAllProducts}
                    onSelectProduct={this.onSelectProduct}
                    selected={selected}
                  />
                );
              }}
            </Query>
            <OrderSummary
              data={selected}
              onDeselectProduct={this.onDeselectProduct}
              onChangeQuantity={this.onChangeQuantity}
            />
            <p className="font-weight-bold float-right">
              Total: <span className="font-weight-normal">$ {total}</span>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewOrder;
