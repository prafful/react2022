import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CommentList from '../commentcontainer/commentlist';
import TodoList from '../form/todo';
import Home from '../home/home';
import Lifecycle from '../lifecycle/lifecycle';
import Rainbow from '../rainbow/rainbow';
import RemoteUsers from '../remote/remote';


class Content extends React.Component {
    state = {  } 
    render() { 
        return (
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/rainbow" element={<Rainbow></Rainbow>}></Route>
                <Route path="/comment" element={<CommentList></CommentList>}></Route>
                <Route path="/todo" element={<TodoList></TodoList>}></Route>
                <Route path="/lifecycle" element={<Lifecycle></Lifecycle>}></Route>
                <Route path="/remote" element={<RemoteUsers></RemoteUsers>}></Route>
            </Routes>
        );
    }
}
 
export default Content;