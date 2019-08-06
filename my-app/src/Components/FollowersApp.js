import React from 'react';

class FollowersApp extends React.Component{
  constructor(){
    super();
    this.state = {
      users:[]
    }
  }

  componentDidMount(){
    this.fetchFollowers()
  }

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/JasonYoo1/followers`)
    .then(res=>{
      return res.json()
    })
    .then(res=> this.setState({ users:res },   console.log(res)))
    .catch(err => console.log(err))
  }

render(){
  return (
    <div className="App">
          <div>
            {this.state.users.map(users=>{
              return <p>{users.login}</p>
            })}
            Hello Worldsssss
        </div>
    </div>
  );
}
}

export default FollowersApp;
