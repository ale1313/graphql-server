import React, { Component } from "react";

class Pager extends Component {
  state = {
    pages: Math.ceil(this.props.total / this.props.limit)
  };

  render() {
    const { pages } = this.state;
    const { page, previousPage, nextPage } = this.props;

    return (
      <div className="mt-5 d-flex justify-content-center">
        {page > 1 ? (
          <button
            type="button"
            className="btn btn-success mr-2"
            onClick={previousPage}
          >
            &laquo; previous
          </button>
        ) : null}
        {page !== pages ? (
          <button type="button" className="btn btn-success" onClick={nextPage}>
            &raquo; next
          </button>
        ) : null}
      </div>
    );
  }
}

export default Pager;
