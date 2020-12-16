import React, { Component } from 'react';


class User extends Component{
    render(){
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div className="userInfo">
                <h3>{ lastName } ,{ firstName }</h3>
                <p>Age: { age }</p>
                <p>Hair Color: { hairColor }</p>
            </div>
        )
    }
}
export default User;