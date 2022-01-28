import React from 'react';
import SingleTodo from './singletodo';

class TodoList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name:"",
            red:200,
            green:200,
            blue:200,
            friends :[]
        }
        
    }

    // boxStyle = {
    //     backgroundColor:"rgb(" + this.state.red+ "," + this.state.green + "," +this.state.blue+")",
    //     width:"300px",
    //     height:"200px"

    // }


    getName=(event)=>{
        //console.log("check")
        //console.log(event)
        //console.log(event.target)
        //console.log(event.target.value)
        this.setState({name: event.target.value})
        // console.log(this.state.name)
        // this.state.friends.push(event.target.value)
        // console.log(this.state.friends);
        // this.setState({friends: this.state.friends})
        

    }

    getRColor=(event)=>{
        console.log(event.target.value)
        this.setState({red: event.target.value})
    }
    getGColor=(event)=>{
        console.log(event.target.value)
        this.setState({green: event.target.value})
    }

    getBColor=(event)=>{
        console.log(event.target.value)
        this.setState({blue: event.target.value})
    }

    addFriend=()=>{
        this.state.friends.push(this.state.name)
        this.setState({friends: this.state.friends})
        console.log(this.state.friends)
        this.setState({name: ""})
    }

    deleteMe=(id)=>{
        console.log("delete friend: " + id)
        this.state.friends.splice(id, 1)
        this.setState({friends: this.state.friends})
        console.log("After deletion")
        console.log(this.state.friends)

    }

    // workWithFriend=(f, index)=>{
    //     return (
    //         <SingleTodo 
    //                 key={index}
    //                 friend={f}
    //                 currentIndex = {index}
    //                 deleteId={this.deleteMe}>
    //         </SingleTodo>
    //      )
    // }


    // getAllTodos=()=>{
    //     return (
    //       this.state.friends.map(this.workWithFriend)
    //     )
    // }

    getAllTodos=()=>{
        return (
          this.state.friends.map((frn, index)=>{
              return (
                  <SingleTodo
                        key={index}
                        friend={frn}
                        currentIndex ={index}
                        deleteId={this.deleteMe}
                  >

                  </SingleTodo>
              )
          })
        )
    }
  
    render() { 
        return (
            <div>
                <br></br>
                <label>Name: </label>
                <input type="text" onChange={this.getName} value={this.state.name}></input>
                &nbsp;
                <button onClick={this.addFriend}>Add</button>
                <br></br>
                Name: {this.state.name} 
                
                <br></br>
                <ol>
                   
                    {this.getAllTodos()}
                </ol>

                <hr></hr>
                R: <input type="range" id="vol" name="vol" min="0" max="255" onChange={this.getRColor}/>
                <br></br>
                G: <input type="range" id="vol" name="vol" min="0" max="255" onChange={this.getGColor}/>
                <br></br>
                B: <input type="range" id="vol" name="vol" min="0" max="255" onChange={this.getBColor}/>
                <br></br>
                <div style={{backgroundColor:"rgb(" + this.state.red+ "," + this.state.green + "," +this.state.blue+")", width:"300px",height:"200px"}}>
                    I am the box! RGB:({this.state.red}, {this.state.green}, {this.state.blue})
                </div>
            </div>
        );
    }
}
 
export default TodoList;