import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function toFarenheit(degC){
  if (!degC) {
    return "";
  }

  return 1.8*degC + 32;
}

function ShowFarenheit(props) {
  return <h2>Temperature is {toFarenheit(props.value)}</h2>
}



class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Greetings() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Celcius to Farhenheit Calculator!</h1>
        </header>
        
        <div className="App-form">
          {/* <Convert />
          <ShowFarenheit value="0" /> */}
          <NameForm />
        </div>
      </div>
    );
  }
}

export default App;
