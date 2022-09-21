import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Exercise6.css';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      username: this.props.username || '', 
      message: this.props.message || '', 
      date: this.props.date || '', 
      comments: []
    };

    // this.navigate = useNavigate();

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const comment = { username: this.state.username, message: this.state.message, date: this.state.date}
    const oldComments = this.state.comments
    oldComments.push(comment)
    this.setState({
      ...this.state,
      comments: oldComments
    })
    event.preventDefault();
  }

  handleRemove(index){
    this.state.comments.splice(index, 1) 
    this.setState({
      ...this.state,
      comments: this.state.comments
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre de usuario:
            <input type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
          </label>
          <label>
            Mensaje:
            <input type="text" name="message" value={this.state.message} onChange={(e) => this.handleChange(e)} />
          </label>
          <label>
            Fecha:
            <input type="date" name="date" value={this.state.date} onChange={(e) => this.handleChange(e)} />
          </label>
          <br/>
          <input type="submit" value="Submit"/>
        </form>

        <table>
          <thead>
            <tr>
              <th>Nombre de usuario</th>
              <th>Mensaje</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.comments.map((comment, i) => 
              <tr key={i}>
                <td>{comment.username}</td>
                <td>{comment.message}</td>
                <td>{comment.date}</td>
                <td><button onClick={() => this.handleRemove(i)}>Eliminar comentario</button></td>
                {/* <td><button onClick={() => this.handleNavigate()}>Ir a comentario</button></td> */}
              </tr>
            )}
          </tbody>
        </table>
      </>
    );
  }
}

export default Blog;