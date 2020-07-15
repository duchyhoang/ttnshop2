import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('/api/name')
      .then(response => response.json())
      .then(data => { console.log(data); this.setState({ data: data }) })
      .catch(e => {
        this.setState({
          Course: [{
            title: "err",
            description: "deploy failed"
          }]
        })
      });
  }

  render() {

    const { data } = this.state;

    return (
      <ul>
        hello {data.name}
      </ul>
    );
  }

}

export default App;