import React from 'react';


class Lifecycle extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: "OBB"
        }
    }
    
    componentWillMount(){
        console.log("component will mount - lifecycle method 1")
        //alert("component Will Mount")
    }

    componentDidMount(){
        console.log("component has mounted - lifecycle method 2");
    }

    componentWillUpdate(){
        console.log("component will update - lifecycle method 3");
        alert("component Will Update")
    }

    componentDidUpdate(){
        console.log("component has updated - lifecycle method 4");
    }

    updateName=(event)=>{
        this.setState({name: event.target.value})
    }

   


    render() { 
        return (
            <div>
                <h1>Component Lifecycle!</h1>
                <input type="text" onChange={this.updateName} value={this.state.name}></input>
              
            </div>
        );
    }
}
 
export default Lifecycle;