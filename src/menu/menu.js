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
                <Link to="/todo">Todo</Link> &nbsp;
            </div>
        );
    }
}
 
export default Menu;