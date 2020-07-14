import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   Course: [],
    // };
  }

  componentDidMount() {
    fetch('/2')
      .then(response => response.json())
      .then(data => console.log(data))
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
    

    return (
      <ul>
        hello
      </ul>
    );
  }

}

export default App;