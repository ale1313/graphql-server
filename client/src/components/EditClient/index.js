// REACT
import React, { Component, Fragment } from 'react';

//GRAPHQL
import { Query, Mutation } from 'react-apollo';
import { query as getClient } from '../../apollo/queries/getClient';
import { mutation as updateClient } from '../../apollo/mutations/updateClient';

// COMPONENTS
import ClientForm from '../ClientForm';

// ────────────────────────────────────────────────────────────────────────────────────────────────

class EditClient extends Component {
    onSubmit = (e, mutation, form) => {
        e.preventDefault();
        mutation({
            variables: { form },
        });
    };

    render() {
        const { id } = this.props.match.params;

        return (
            <Fragment>
                <h2 className="text-center">Edit Client</h2>
                <Query query={getClient} variables={{ id }} >
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `An error has ocurred\n${error.message}`;
                    return (
                        <div className="row justify-content-center">
                            <Mutation mutation={updateClient} onCompleted={() => this.props.history.push('/')}>
                                {updateClient => (
                                    <ClientForm mutation={updateClient} data={data} comingFromEdit onSubmit={this.onSubmit} />
                                )}
                            </Mutation>
                        </div>
                    );
                }}
                </Query>
            </Fragment>
        );
    };
};

export default EditClient;