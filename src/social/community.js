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
            displayCSS: { display: "none" },
            name: "",
            location: "",
            since: 0,
            active: true,
            id: 0,
            updateDisabled : true
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
        //find friend with given id in state: allfriends
        let updateFriend = this.state.allfriends.find(f=>{
            return f.id === id
        })
        console.log(updateFriend)
        //update states name, location, since, active with values from updateFriend
        this.setState({
            name: updateFriend.name,
            location: updateFriend.location,
            since: updateFriend.since,
            active: updateFriend.active,
            id: updateFriend.id

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
                    deleteId={this.deleteWithId}
                    updateId={this.updateWithId}
                    updateIdNew={this.navigateToUpdateNew}
                >
                </Friend>
            )
        })
    }

    navigateToAddNew = () => {
        console.log(this.props)
        this.props.navigateNow("/newfriend")
    }

    updateValue = (event) => {
        console.log(event.target.id)
        let sourceid = event.target.id
        if (sourceid === "name") {
            this.setState({ name: event.target.value })
        }
        if (sourceid === "location") {
            this.setState({ location: event.target.value })
        }
        if (sourceid === "since") {
            this.setState({ since: event.target.value })
        }
        if (sourceid === "active") {
            this.setState({ active: event.target.value })
        }
        
        if (this.state.name.length > 0 && this.state.location.length > 0 ) {
            console.log("In if scenario");
            this.setState({updateDisabled: false})
        }else{
            console.log("In else scenario");
            this.setState({updateDisabled: true})
        }

        //console.log(this.state)
    }

    updateFriend=()=>{
        console.log("Update friend with given state");
        let updateBody = {
            name:this.state.name,
            location: this.state.location,
            since: this.state.since,
            active: this.state.active
        }

        let id = this.state.id

        axios.put("http://localhost:3000/allfriends" + "/" + id, updateBody)
            .then(response=>{
                console.log(response);
                //correct place
                this.getAllFriends()    
            }, error=>{
                console.log(error);
            })
        //do not use this here    
        //this.getAllFriends()    

    }

    navigateToUpdateNew=(id)=>{
        this.props.navigateNow({
            pathname:"/updatefriend" + "/" + id,
            state:{
                user:"dummy"
            }
        })
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
                            <th colSpan={3}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayAllFriends()}
                    </tbody>

                </table>

                <div style={this.state.displayCSS}>
                    <h3>Update friend</h3>
                    <fieldset>
                    <legend>Update Friend</legend>
                    <label>Id: </label>
                    <input type="text" id='id' value={this.state.id} readOnly={true}></input>
                    <br></br>
                    <label>Name: </label>
                    <input type="text" onChange={this.updateValue} id='name' value={this.state.name}></input>
                    <br></br>
                    <label>Location: </label>
                    <input type="text" onChange={this.updateValue} id='location' value={this.state.location}></input>
                    <br></br>
                    <label>Friend Since: </label>
                    <input type="text" onChange={this.updateValue} id='since' value={this.state.since}></input>
                    <br></br>
                    <label>Still in touch: </label>
                    <select onChange={this.updateValue} id='active' value={this.state.active}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    <br></br>
                    <br></br>
                    <button onClick={this.updateFriend} disabled={this.state.updateDisabled}>Update</button>
                </fieldset>
                </div>

            </div>
        );
    }
}

export default wrapHookInClassFoUseNavigate(FriendsCommunity);