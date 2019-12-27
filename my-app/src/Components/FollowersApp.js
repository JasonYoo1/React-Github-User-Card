import React from 'react';
import './FollowersStyle.scss';


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
              return <div>
                <p className="cards">{users.login}<br></br>{users.id}</p>
                </div>
            })}
        </div>
    </div>
  );
}
}

export default FollowersApp;
