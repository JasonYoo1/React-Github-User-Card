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
    .then(res=> this.setState({ users:res },   console.log(res)))
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
        {this.state.users.name}
      </header>
    </div>
  );
}
}

export default App;
