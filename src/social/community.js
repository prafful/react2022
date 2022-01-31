import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Friend from './friend';


export const wrapHookInClassFoUseNavigate = (FriendCommunityComponentInstance) => {
    return props => <FriendCommunityComponentInstance {...props} navigateNow={useNavigate()} />;
}


class FriendsCommunity extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allfriends: [],
            updateId: null,
            displayCSS: { display: "none" }
        }
    }

    componentWillMount() {
        this.getAllFriends()
    }

    getAllFriends = () => {
        axios.get("http://localhost:3000/allfriends")
            .then((response) => {
                console.log(response.data)
                this.setState({ allfriends: response.data })
            }, (error) => {
                console.log(error)
            })
    }

    deleteWithId = (id) => {
        console.log("In FriendsCommunity: " + id);
        axios.delete("http://localhost:3000/allfriends" + "/" + id)
            .then(response => {
                console.log(response);
                this.getAllFriends()
            }, error => {
                console.log(error);
            })

    }

    updateWithId = (id) => {
        console.log("Update friend with id: " + id);
        this.setState({ displayCSS: { display: "inline" } })
    }

    displayAllFriends = () => {
        return this.state.allfriends.map(friend => {
            return (
                <Friend key={friend.id}
                    id={friend.id}
                    name={friend.name}
                    location={friend.location}
                    friendsince={friend.since}
                    active={friend.active}
                    deleteId={this.deleteWithId}
                    updateId={this.updateWithId}
                >
                </Friend>
            )
        })
    }

    navigateToAddNew = () => {
        console.log(this.props)
        this.props.navigateNow("/newfriend")
    }


    render() {
        return (
            <div>
                <h1>CRUD with friends!</h1>
                <button onClick={this.navigateToAddNew}>Add New</button>
                <br></br> <br></br>

                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Friend Since</th>
                            <th>Still In touch?</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayAllFriends()}
                    </tbody>

                </table>

                <div style={this.state.displayCSS}>
                    <h3>Update friend</h3>
                </div>

            </div>
        );
    }
}

export default wrapHookInClassFoUseNavigate(FriendsCommunity);