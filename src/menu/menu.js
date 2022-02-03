import React from 'react';
import { Link } from 'react-router-dom';


class Menu extends React.Component {
    //state = {  } 
    render() { 
        return (
            <div>
                <Link to="/">Home</Link> &nbsp;
                <Link to="/rainbow">Rainbow</Link> &nbsp;
                <Link to="/comment">Comment</Link> &nbsp;
                <Link to="/todo">Friends</Link> &nbsp;
                <Link to="/lifecycle">Lifecycle</Link> &nbsp;
                <Link to="/remote">Remote</Link> &nbsp;
                <Link to="/community">Community</Link> &nbsp;
                <Link to="/hooks">Class/Hook</Link> &nbsp;
                <Link to="/hook-parent-child">Hook(Parent->Child)</Link> &nbsp;
                <Link to="/useeffect">useEffect</Link> &nbsp;
                <Link to="/useeffect-axios">useEffect (axios)</Link> &nbsp;
                <Link to="/usecontext">useContext</Link> &nbsp;
            </div>
        );
    }
}
 
export default Menu;