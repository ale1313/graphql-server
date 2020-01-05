// REACT
import React, { Component, Fragment } from 'react';

//GRAPHQL
import { Query } from 'react-apollo';
import { query as getClient } from '../../apollo/queries/getClient';

// COMPONENTS
import ClientForm from '../ClientForm';

// ────────────────────────────────────────────────────────────────────────────────────────────────

class EditClient extends Component {
    render() {
        const { id } = this.props.match.params;
        return (
            <Fragment>
                <h2 className="text-center">Edit Client</h2>
                <Query query={getClient} variables={{ id }}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `An error has ocurred\n${error.message}`;
                    return (
                        <div className="row justify-content-center">
                            <ClientForm data={data} comingFromEdit />
                        </div>
                    );
                }}
                </Query>
            </Fragment>
        );
    };
};

export default EditClient;