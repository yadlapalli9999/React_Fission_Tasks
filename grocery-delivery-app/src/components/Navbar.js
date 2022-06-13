import React from "react";
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";

let Navbar = () =>{
    let {cartItems} = useSelector((state)=>{return state['grocery']});

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand">React With Grocery Delivery App</Link>
                    <ul className="nav ml-auto text-white">
                       <li className="nav-item d-flex justify-content-between align-items-center">
                           <Link style={{color:'white'}} to="/cart" className="nav-link">Cart  <span className="badge badge-white badge-pill">{cartItems.length}</span></Link> 
                       </li>
                    </ul>   
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;