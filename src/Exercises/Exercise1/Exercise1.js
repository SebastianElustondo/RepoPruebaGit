import React from 'react';
import './Exercise1.css';

class Exercise1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', lastname: '', email: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }
// Lo que use para buscarlo en google: edit various fields with one handle change
// link de la pagina que use: https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  handleChange(event) { // handleChange(type, event) { 
    // if (type === 'name'){
    //   this.setState({name: event.target.value});
    // }
    // if (type === 'lastname'){
    //   this.setState({lastname: event.target.value});
    // }
    // if (type === 'email'){
    //   this.setState({email: event.target.value});
    // }
    this.setState({
      ...this.state, // Also note that, because we are using a single state object that contains multiple properties, we're spreading (...state) the existing state back into the new state value, merging it manually, when calling setState. This is required when using React.useState in the solution.
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <h1 className="Title">{this.state.name}</h1>
        <h1 className="Title">{this.state.lastname}</h1>
        <h1 className="Title">{this.state.email}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
          </label>
          <label>
            lastname:
            <input type="text" name="lastname" value={this.state.lastname} onChange={(e) => this.handleChange(e)} placeholder="" />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
          </label>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </>
    );
  }
}

export default Exercise1;