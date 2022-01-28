import axios from 'axios';
import React from 'react';
import User from './user';


class RemoteUsers extends React.Component {
    //state = {  } 

    constructor(props){
        super(props)
        this.state ={
            allusers :[]
        }
    }

    componentWillMount(){
        this.getAllUsers()        
    }

    getAllUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
                    .then(this.successScenario, this.failureScenario)
    }

    successScenario=(response)=>{
        console.log(response)
        console.log(response.data)
        console.log("Before: ")
        console.log(this.state.allusers)
        this.setState({
            allusers: response.data
        })
        console.log("After: ")
        console.log(this.state.allusers)
    }

    failureScenario=(error)=>{
        console.log("Error: ")
        console.log(error)
    }

    renderAllUsers=()=>{
        return this.state.allusers.map(user=>{
            return (
                <User
                    key={user.id}
                    name={user.name}
                    company={user.company.name}
                    latitude={user.address.geo.lat}
                    longitude={user.address.geo.lng}
                    id={user.id}

                ></User>
            )
        })
    }

    render() { 
        return (
            <div>
                <h1>Users from remote API!</h1>
                <h4>Loading....</h4>
                <div>
                    {this.renderAllUsers()}
                </div>
            </div>
        );
    }
}
 
export default RemoteUsers;