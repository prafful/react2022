import React from 'react';



class Friend extends React.Component {
    state = {}
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.location}</td>
                <td>{this.props.friendsince}</td>
                <td>{this.props.active ? "Yes": "No"}</td>
                <td>
                    <button>Update</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Friend;