import React from 'react';
import logo from './logo.svg';
import './App.css';
import FollowersApp from './Components/FollowersApp'

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
        <p>
          User:
        </p>
        {this.state.users.name}
        <h1>Followers:</h1>
        <FollowersApp key={this.state.users.id}/>
      </header>
    </div>
  );
}
}

export default App;
