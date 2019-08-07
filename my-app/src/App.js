import React from 'react';
import logo from './logo.svg';
import './App.css';
import FollowersApp from './Components/FollowersApp'


//re-wrote app.js as a class based component
class App extends React.Component{
  //found out that we can implicitly define state
  constructor(){
    super();
    //set state as an array. found out we can use obj
    this.state = {
      users:[]
    }
  }
//somewhat similar to useEffect. function will run when component mounts
  componentDidMount(){
    this.fetchInfo()
  }

  //fetching API from github
  fetchInfo = () => {
    fetch(`https://api.github.com/users/JasonYoo1`)
    //using json so JavaScript can read the info. usually uses res.data but json removes that need
    .then(res=>{
      return res.json()
    })
    //using .then like axios to log response. also setState
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
