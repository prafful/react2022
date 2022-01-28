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
            </div>
        );
    }
}
 
export default Menu;