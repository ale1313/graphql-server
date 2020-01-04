// REACT
import React, { Component, Fragment } from 'react';

// GRAPHQL
import { Mutation } from 'react-apollo';
import { mutation as createClient } from '../../apollo/mutations/createClient';

// ────────────────────────────────────────────────────────────────────────────────────────────────

class NewClient extends Component {

    state = {
        form: {
            name: "",
            last_name: "",
            age: "",
            email: "",
            business: "",
            type: "",
        },
    };

    onChange = e => {
        const { form } = this.state;
        const newState = form;
        if (e.target.id === "age") newState[e.target.id] = Number(e.target.value);
        else newState[e.target.id] = e.target.value;
        this.setState({
            form: newState,
        });
    };

    onSubmit = (e, mutation) => {
        const { form } = this.state;
        e.preventDefault();
        mutation({
            variables: { form },
        });
    };

    render() {
        return (
            <Fragment>
                <h2 className="text-center">Add Client</h2>
                <div className="row justify-content-center">
                    <Mutation mutation={createClient} onCompleted={() => this.props.history.push('/')}>
                        {createClient => (
                        <form className="col-md-8 m-3" onSubmit={e => this.onSubmit(e, createClient)}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Name" id="name" required onChange={e => this.onChange(e)}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" placeholder="Last name" id="last_name" required onChange={e => this.onChange(e)}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Business</label>
                                    <input type="text" className="form-control" placeholder="Business" id="business" onChange={e => this.onChange(e)}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Email" id="email" onChange={e => this.onChange(e)}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Age</label>
                                    <input type="text" className="form-control" placeholder="Age" id="age" onChange={e => this.onChange(e)}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Client type</label>  
                                    <select className="form-control" id="type" required onChange={e => this.onChange(e)}>
                                        <option value="">Choose...</option>
                                        <option value="PREMIUM">PREMIUM</option>
                                        <option value="BASIC">BASIC</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success float-right">Add Client</button>
                        </form>
                        )}
                    </Mutation>
                </div>
            </Fragment>
        );
    };
};

export default NewClient;