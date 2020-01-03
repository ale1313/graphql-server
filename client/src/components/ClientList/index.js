// REACT
import React from 'react';

//GRAPHQL
import { Query } from 'react-apollo';
import { query as getClients } from '../../apollo/queries/getClients';

// ────────────────────────────────────────────────────────────────────────────────────────────────

const ClientList = () => (
    <Query query={getClients}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `An error has ocurred\n${error.message}`;
            console.log(data);
            return (
                <h2 className="text-center">Client List</h2>
            )
        }}
    </Query>
);

export default ClientList;
