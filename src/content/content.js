import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CommentList from '../commentcontainer/commentlist';
import TodoList from '../form/todo';
import Allfriends from '../functional/customhook/allfriends';
import DisplayFriend from '../functional/customhook/displayfriend';
import GrandParent from '../functional/usecontext/grandparent';
import EffectContainer from '../functional/useeffect/effectcontainer';
import ConsumeAPI from '../functional/useeffect/useeffectaxios';
import Container from '../functional/usestate/container';
import ParentFunction from '../functional/usestate/hookparentchild';
import Home from '../home/home';
import Lifecycle from '../lifecycle/lifecycle';
import Rainbow from '../rainbow/rainbow';
import RemoteUsers from '../remote/remote';
import FriendsCommunity from '../social/community';
import NewFriend from '../social/newfriend';
import UpdateFriend from '../social/update';


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
                <Route path="/community" element={<FriendsCommunity></FriendsCommunity>}></Route>
                <Route path="/newfriend" element={<NewFriend></NewFriend>}></Route>
                <Route path="/updatefriend/:id" element={<UpdateFriend></UpdateFriend>}></Route>
                <Route path="/hooks" element={<Container></Container>}></Route>
                <Route path="/hook-parent-child" element={<ParentFunction></ParentFunction>}></Route>
                <Route path="/useeffect" element={<EffectContainer></EffectContainer>}></Route>
                <Route path="/useeffect-axios" element={<ConsumeAPI></ConsumeAPI>}></Route>
                <Route path="/usecontext" element={<GrandParent></GrandParent>}></Route>
                <Route path="/customhook" element={<Allfriends></Allfriends>}></Route>
                <Route path="/displayfriend" element={<DisplayFriend></DisplayFriend>}></Route>
            </Routes>
        );
    }
}
 
export default Content;