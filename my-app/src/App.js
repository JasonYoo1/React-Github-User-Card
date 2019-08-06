import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      users:[]
    }
  }

  componentDidMount(){
    this.fetchInfo()
  }

  fetchInfo = () => {
    fetch(`https://api.github.com/users/JasonYoo1`)
    .then(res=>{
      return res.json()
    })
    .then(info=> this.setState({ users:info }))
    .catch(err => console.log(err))
  }

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
      </header>
    </div>
  );

}

}

export default App;
