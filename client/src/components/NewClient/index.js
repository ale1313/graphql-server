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
            emails: [],
            business: "",
            type: "",
        },
    };

    onChange = (e, index) => {
        const { form } = this.state;
        const newState = form;
        if (e.target.id === "age") newState[e.target.id] = Number(e.target.value);
        else if (e.target.id.includes('email')) form.emails[index].email = e.target.value;
        else newState[e.target.id] = e.target.value;
        this.setState({
            form: newState,
        });
    };

    onAddEmail = () => {
        const { form } = this.state;
        this.setState({
            form: {
                ...form,
                emails: form.emails.concat({ email: ""}),
            },
        });
    };

    onDeleteEmail = i => {
        const { form } = this.state;
        const filteredEmails = form.emails.filter((item, index) => index !== i);
        this.setState({
            form: {
                ...form,
                emails: filteredEmails,
            },
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
        const { form } = this.state;

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
                                    <input type="text" className="form-control" placeholder="John" id="name" required onChange={e => this.onChange(e)}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" placeholder="Doe" id="last_name" required onChange={e => this.onChange(e)}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label>Business</label>
                                    <input type="text" className="form-control" placeholder="Business" id="business" onChange={e => this.onChange(e)}/>
                                </div>
                                {form.emails.map((item, index) => (
                                    <div className="form-group col-md-12" key={index}>
                                        <label>Email {index + 1}</label>
                                        <div className="input-group">
                                            <input value={item.email} className="form-control" placeholder="example@example.com" id={`email${index}`} onChange={e => this.onChange(e, index)}/>
                                            <div className="input-group-append">
                                                <button type="button" className="btn btn-danger" onClick={() => this.onDeleteEmail(index)}> &times; delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="form-group d-flex justify-content-center col-md-12">
                                    <button type="button" className="btn btn-warning" onClick={this.onAddEmail}>+ Add Email</button>
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