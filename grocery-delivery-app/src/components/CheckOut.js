import React, { useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { calcTotal, checkOutAddress, getGrandTotal, getTax } from "../redux/feature/grocery.feature";
let CheckOut = () =>{
    let {subTotal,tax,groundTotal,cartItems} = useSelector((state)=>{return state['grocery']})
    let dispatch = useDispatch();
let navigate = useNavigate();
    useEffect(()=>{
        dispatch(calcTotal())
        dispatch(getTax())
        dispatch(getGrandTotal())
    },[])

   let [user,setUser] = useState({
       name:'',
       address:''
   })
    let UpdateInputUser = (event)=>{
       setUser({
           ...user,
           [event.target.name]:event.target.value
       })
    }
   

    let handleCheckout = (event)=>{
        event.preventDefault();
        dispatch(checkOutAddress(user))
        cartItems = []
        navigate('/success')
    }
    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>Check Out</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={handleCheckout}>
                                        <div className="form-group">
                                            <input className="form-control"
                                            name="name"
                                            value={user.name}
                                            onChange={UpdateInputUser}
                                            type="text"
                                             placeholder="Name"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control"
                                            type="text"
                                            name="address"
                                            value={user.address}
                                            onChange={UpdateInputUser}
                                             rows="4" placeholder="address"/>
                                        </div>
                                       <div>
                                           <button className="btn btn-secondary btn-sm">Submit</button>
                                       </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <ul className="list-group">
                                         <li className="list-group-item bg-brown">
                                            Total : <span className="font-weight-bold">&#8377;{subTotal} </span>
                                         </li>
                                        <li className="list-group-item bg-brown">
                                            Tax : <span className="font-weight-bold">&#8377; {tax}</span>
                                        </li>
                                        <li className="list-group-item bg-brown">
                                            Grand Total : <span className="font-weight-bold">&#8377; {groundTotal}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default CheckOut;