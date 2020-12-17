import React, { Component } from 'react';


class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            aging: 0
        };

    }

    addAge = () => {
        this.setState({ aging: this.state.aging + 1 })
    };

    render(){
        const { firstName, lastName, age, hairColor } = this.props; 
        return (
            <div className="userInfo">
                <h3>{ lastName } ,{ firstName }</h3>
        <p>Age: { age + this.state.aging }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick ={ this.addAge }>Birthday Button for { lastName }</button>
            </div>
        )
    }
}
export default User;