// REACT
import React, { Component } from "react";

// UTILS
import { onlyNumbers } from "../../utils/validations";
// ────────────────────────────────────────────────────────────────────────────────────────────────

class ProductForm extends Component {
  state = {
    form: {
      name: "",
      price: "",
      stock: ""
    },
    valid: false
  };

  componentDidMount() {
    const { comingFromEdit, data } = this.props;
    if (comingFromEdit) {
      this.setState({ form: data.getProduct });
    }
  }

  onChange = (e, index) => {
    const { form } = this.state;
    const newState = form;
    if (e.target.id === "price" || e.target.id === "stock")
      newState[e.target.id] = Number(e.target.value);
    else newState[e.target.id] = e.target.value;
    this.setState({
      form: newState,
      valid:
        !!newState.name &&
        !!newState.price &&
        !!newState.stock &&
        onlyNumbers(newState.price) &&
        onlyNumbers(newState.stock)
    });
  };

  render() {
    const { form, valid } = this.state;
    const { onSubmit, mutation, comingFromEdit } = this.props;

    return (
      <form className="col-md-8" onSubmit={e => onSubmit(e, mutation, form)}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Name"
            value={form.name}
            onChange={e => this.onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <input
              type="number"
              id="price"
              className="form-control"
              placeholder="Price"
              value={form.price}
              onChange={e => this.onChange(e)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input
            type="number"
            id="stock"
            className="form-control"
            placeholder="Stock"
            value={form.stock}
            onChange={e => this.onChange(e)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-success float-right"
          disabled={!valid}
        >
          {comingFromEdit ? "Save changes" : "Create product"}
        </button>
      </form>
    );
  }
}

export default ProductForm;
