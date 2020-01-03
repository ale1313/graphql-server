// REACT
import React, { Fragment } from 'react';

//GRAPHQL
import { Query } from 'react-apollo';
import { query as getClients } from '../../apollo/queries/getClients';

// NAVIGATION
import { Link } from 'react-router-dom';

// ────────────────────────────────────────────────────────────────────────────────────────────────

const ClientList = () => (
    <Query query={getClients}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `An error has ocurred\n${error.message}`;
            return (
                <Fragment>
                    <h2 className="text-center">Client List</h2>
                    <ul className="list-group mt-4">
                        {data.getAllClients.map(item => (
                            <li key={item.id} className="list-group-item">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-8 d-flex justify-content-between align-items-center">
                                        {item.name} {item.last_name}
                                    </div>
                                    <div className="col-md-4 d-flex justify-content-end">
                                        <Link className="btn btn-success d-block d-md-inline-block" to={`/clients/edit/${item.id}`}>
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            )
        }}
    </Query>
);

export default ClientList;
