// Mostrar datos de lo que me llega

import React from 'react';
import '../Exercise4.css';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || '',
      lastname: this.props.lastname || '',
      email: this.props.email || '',
      age: this.props.age || '',
      password: this.props.password || '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event)  {
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
        <h1 className="Title">{this.state.name}</h1>
        <h1 className="Title">{this.state.lastname}</h1>
        <h1 className="Title">{this.state.email}</h1>
        <h1 className="Title">{this.state.age}</h1>
        <h1 className="Title">{this.state.password}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} required/>
          </label>
          <br/>
          <label>
            Lastname:
            <input type="text" name="lastname" value={this.state.lastname} onChange={(e) => this.handleChange(e)} required />
          </label>
          <br/>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
          </label>
          <br/>
          <label>
            Age:
            <input type="text" name="age" value={this.state.age} onChange={(e) => this.handleChange(e)} required />
          </label>
          <br/>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} required />
          </label>
          <br/><br/>
          <input type="submit" value="Submit"/>
        </form>
     
       

       {/* Llevar los datos de aca a Home */}

      </>
    );
  }
}

export default Show;