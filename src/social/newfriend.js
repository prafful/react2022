import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const wrapUseNavigateHookAroundClassNewFriend = (NewFriendInstance) => {
    return props => <NewFriendInstance {...props} navigateNow={useNavigate()} />;
}




class NewFriend extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            location: "",
            since: 0,
            stillintouch: false,
            addDisabled: true
        }
    }

    getValue = (event) => {
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
            this.setState({ stillintouch: event.target.value })
        }
        console.log(this.state.name.length)
        console.log(this.state.location.length)

        if (this.state.name.length > 0 && this.state.location.length > 0 ) {
            console.log("In if condition");
            this.setState({addDisabled: false})
        }

        console.log(this.state)
    }

    addNewFriend = () => {
        //create request body
        let newFriendRequestBody = {
            "name": this.state.name,
            "location": this.state.location,
            "since": this.state.since,
            "active": this.state.stillintouch
        }


        axios.post("http://localhost:3000/allfriends", newFriendRequestBody)
            .then((response) => {
                console.log(response.data)
                this.props.navigateNow("/community")
            }, (error) => {
                console.log(error);
            })

    }

    render() {
        return (
            <div>
                <br></br>
                <fieldset>
                    <legend>Add New Friend</legend>
                    <h1> New Friend</h1>
                    <label>Name: </label>
                    <input type="text" onChange={this.getValue} id='name'></input>
                    <br></br>
                    <label>Location: </label>
                    <input type="text" onChange={this.getValue} id='location'></input>
                    <br></br>
                    <label>Friend Since: </label>
                    <input type="text" onChange={this.getValue} id='since'></input>
                    <br></br>
                    <label>Still in touch: </label>
                    <select onChange={this.getValue} id='active'>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    <br></br>
                    <br></br>
                    <button onClick={this.addNewFriend} disabled={this.state.addDisabled}>Add</button>
                </fieldset>
            </div>
        );
    }
}

export default wrapUseNavigateHookAroundClassNewFriend(NewFriend)