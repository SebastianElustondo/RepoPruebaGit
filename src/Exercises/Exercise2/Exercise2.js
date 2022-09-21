import React from 'react';
import './Exercise2.css';

class Exercise2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || '',
      lastname: this.props.lastname || '',
      email: this.props.email || ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      ...this.state,
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
        <h1> Soy componente 2 </h1>
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
            <input type="text" name="lastname" value={this.state.lastname} onChange={(e) => this.handleChange(e)} />
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

export default Exercise2;