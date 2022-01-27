import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CommentList from '../commentcontainer/commentlist';
import TodoList from '../form/todo';
import Home from '../home/home';
import Rainbow from '../rainbow/rainbow';


class Content extends React.Component {
    state = {  } 
    render() { 
        return (
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/rainbow" element={<Rainbow></Rainbow>}></Route>
                <Route path="/comment" element={<CommentList></CommentList>}></Route>
                <Route path="/todo" element={<TodoList></TodoList>}></Route>
            </Routes>
        );
    }
}
 
export default Content;