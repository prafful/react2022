import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export const wrapHookInClassFoUseLocation= (UpdateFriendInstance) => {
    return props => <UpdateFriendInstance {...props} location={useLocation()} navigate={useNavigate()} />;
}


class UpdateFriend extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {
            id: this.props.location.pathname.substring(14),
            name:"",
            location:"",
            since:0,
            active:false,
            updateDisabled: false
        }
    }

    componentWillMount(){
        //console.log(this.props);
        // const search = this.props.location.pathname;
        // const name = new URLSearchParams(search).get("id");
        // console.log(name)
        axios.get("http://localhost:3000/allfriends" + "/" + this.state.id)
                .then(response=>{
                    console.log(response.data);
                    this.setState({
                        name:response.data.name,
                        location:response.data.location,
                        since:response.data.since,
                        active:response.data.active
                    })
                    console.log(this.state);

                }, error=>{
                    console.log(error)
                })

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

        console.log(this.state)
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
               this.props.navigate("/community")
            }, error=>{
                console.log(error);
            })
           

    }

    render() { 
        return (
            <div>
                <h1>Update Friend: {this.props.location.pathname}</h1>
                <h2>Id: {this.state.id}</h2>
                <div>
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
 
export default wrapHookInClassFoUseLocation(UpdateFriend);