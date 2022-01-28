import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Friend from './friend';


export const  withNavigation = (FriendCommunityComponent) => {
    return props => <FriendCommunityComponent {...props} navigateNow={useNavigate()} />;
} 


class FriendsCommunity extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allfriends: []
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

    displayAllFriends = () => {
        return this.state.allfriends.map(friend => {
            return (
                <Friend key={friend.id}
                    id={friend.id}
                    name={friend.name}
                    location={friend.location}
                    friendsince={friend.since}
                    active={friend.active}
                    >
                </Friend>
            )
        })
    }

    navigateToAddNew=()=>{
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
            </div>
        );
    }
}

export default withNavigation(FriendsCommunity);