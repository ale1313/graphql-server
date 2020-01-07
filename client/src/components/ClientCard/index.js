// REACT
import React, { Fragment } from "react";

// GRAPHQL
import { Query } from "react-apollo";
import { query as getClient } from "../../apollo/queries/getClient";

// ────────────────────────────────────────────────────────────────────────────────────────────────
const ClientCard = props => {
  const { id } = props;

  return (
    <Fragment>
      <h2 className="text-center mb-5">Client Data</h2>
      <Query query={getClient} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `An error has ocurred\n${error.message}`;

          const {
            name,
            last_name,
            age,
            emails,
            business,
            type
          } = data.getClient;

          return (
            <ul className="list-unstyled my-5">
              <li className="border font-weight-bold p-2">
                Name: <span className="font-weight-normal">{name}</span>
              </li>
              <li className="border font-weight-bold p-2">
                Last name:{" "}
                <span className="font-weight-normal">{last_name}</span>
              </li>
              <li className="border font-weight-bold p-2">
                Age: <span className="font-weight-normal">{age}</span>
              </li>
              <li className="border font-weight-bold p-2">
                Emails:
                <br />
                {emails.map(item => (
                  <Fragment>
                    <span className="font-weight-normal">{item.email}</span>
                    <br />
                  </Fragment>
                ))}
              </li>
              <li className="border font-weight-bold p-2">
                Business: <span className="font-weight-normal">{business}</span>
              </li>
              <li className="border font-weight-bold p-2">
                Type: <span className="font-weight-normal">{type}</span>
              </li>
            </ul>
          );
        }}
      </Query>
    </Fragment>
  );
};

export default ClientCard;
