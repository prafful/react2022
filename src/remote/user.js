import React from 'react';


class User extends React.Component {
    //state = {  } 
    render() { 
        return (
            <div>
                {this.props.id}, {this.props.name}, {this.props.company}, {this.props.latitude}, {this.props.longitude}
            </div>
        );
    }
}
 
export default User;