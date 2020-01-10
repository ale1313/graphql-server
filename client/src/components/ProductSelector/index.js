// REACT
import React, { Component } from "react";

// LIBS
import Select from "react-select";
import Animated from "react-select/animated";

// ────────────────────────────────────────────────────────────────────────────────────────────────

class ProductSelector extends Component {
  render() {
    const { data, onSelectProduct, selected } = this.props;
    return (
      <Select
        options={data}
        getOptionValue={options => options.id}
        getOptionLabel={options => options.name}
        isMulti
        components={Animated()}
        placeholder="Select products..."
        onChange={onSelectProduct}
        value={selected}
      />
    );
  }
}

export default ProductSelector;
