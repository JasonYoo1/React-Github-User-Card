import React from 'react';

//map over this card for Student INFO
class FollowerCard extends React.Component = (props) =>{
    const { follower } = props
    return (
        <div>
            {/* <div>{student.id}</div> */}
            <div>{this.state.login}</div>
            <div>{this.state.name}</div>
            <p>Hello World</p>
        </div>
    );
}

export default FollowerCard