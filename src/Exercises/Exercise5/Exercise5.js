import React from 'react';
import './Exercise5.css';

class Exercise5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || '',
      lastname: this.props.lastname || '',
      email: this.props.email || '',
      age: this.props.age || '',
      password: this.props.password || '',
      users: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }
// Objeto -> Llaves {} --- Array -> Corchetes []
  handleSubmit(event) {
    const newUsers = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      age: this.state.age,
      password: this.state.password
    }
    const oldUsers = this.state.users
    oldUsers.push(newUsers)
    this.setState({
      ...this.state,
      users: oldUsers
    })
    console.log(this.state.users)
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
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
          </label>
          <br/>
          <label>
            Lastname:
            <input type="text" name="lastname" value={this.state.lastname} onChange={(e) => this.handleChange(e)}  />
          </label>
          <br/>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
          </label>
          <br/>
          <label>
            Age:
            <input type="text" name="age" value={this.state.age} onChange={(e) => this.handleChange(e)} />
          </label>
          <br/>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)}  />
          </label>
          <br/><br/>
          <input type="submit" value="Submit" />
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Age</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
          {this.state.users.map((user, i) =>
          <tr key={i}>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>{user.password}</td>
          </tr>
          )}
          </tbody>
        </table>
      </>
    );
  }
}

export default Exercise5;