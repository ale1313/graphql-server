// REACT
import React, { Component, Fragment } from "react";

// ────────────────────────────────────────────────────────────────────────────────────────────────

class OrderSummary extends Component {
  render() {
    const { data, onDeselectProduct, onChangeQuantity } = this.props;

    if (!data) return null;
    return (
      <Fragment>
        <h2 className="text-center my-5">Order Summary</h2>
        <table className="table">
          <thead className="bg-success text-light">
            <tr className="font-weight-bold">
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{`$${item.price.toLocaleString()}`}</td>
                <td>{item.stock}</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    onChange={e =>
                      onChangeQuantity(e.target.value, index, item.stock)
                    }
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onDeselectProduct(index)}
                  >
                    &times; Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default OrderSummary;
