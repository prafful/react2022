import React from 'react';



class Friend extends React.Component {
    
    deleteFriendWithId=()=>{
        console.log("Delete friend with id: "  + this.props.id);
        this.props.deleteId(this.props.id)
    }

    updateFriendWithId=()=>{
        console.log("Update friend with id: "  + this.props.id);
        this.props.updateId(this.props.id)
    }

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.location}</td>
                <td>{this.props.friendsince}</td>
                <td>{this.props.active ? "Yes": "No"}</td>
                <td>
                    <button onClick={this.updateFriendWithId}>Update</button>
                </td>
                <td>
                    <button onClick={this.deleteFriendWithId}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Friend;