import React from 'react';


class NewFriend extends React.Component {

    constructor(props){
        super(props)
        this.state={
            name:"",
            location:"",
            since:0,
            stillintouch:false
        }
    }

    getValue=(event)=>{
        console.log(event.target.id)
        let sourceid = event.target.id
        if (sourceid == "name") {
            this.setState({name:event.target.value})
        }
        if (sourceid == "location") {
            this.setState({location:event.target.value})
        }
        if (sourceid == "since") {
            this.setState({since:event.target.value})
        }
        if (sourceid == "active") {
            this.setState({stillintouch:event.target.value})
        }
        console.log(this.state)
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
                    <button>Add</button>
                </fieldset>
            </div>
        );
    }
}

export default NewFriend;