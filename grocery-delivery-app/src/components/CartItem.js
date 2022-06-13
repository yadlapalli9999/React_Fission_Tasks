import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { incrQty,decrQty, deleteCartItem, calcTotal, getTax, getGrandTotal } from "../redux/feature/grocery.feature";

let CartItem = () =>{
    let {cartItems,subTotal,tax,groundTotal} = useSelector((state)=>{return state['grocery']})
    let dispatch = useDispatch();

     useEffect(()=>{
         dispatch(calcTotal())
         dispatch(getTax())
         dispatch(getGrandTotal())
     },[])
    return(
        <React.Fragment>
             <div className="container">
                 <div className="row">
                     <div className="col">
                         <h2>Cart Items</h2>
                     </div>
                 </div>
                 <div className="mt-3">
                     {
                         cartItems.length > 0 ?
                         <React.Fragment>
                            <div className="row">
                                <div className="col-md-8">
                                    <table className="table table-hover text-center  table-striped">
                                        <thead className="bg-brown text-white bg-secondary">
                                            <tr>
                                                <th>Sno</th>
                                                <th>Name</th>
                                                <th>Image</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map((item,index)=>{
                                                    return(
                                                        <tr key={item.id}>
                                                            <td>{index+1}</td>
                                                            <td>{item.name}</td>
                                                            <td><img src={item.image} alt={item.name} style={{width:'100px',height:'100px'}}/></td>
                                                            <td>&#8377; {item.price}</td>
                                                            <td><i className="fa fa-minus-circle mx-1" onClick={()=>{dispatch(decrQty(item.id))}}/>{item.qty}  <i className="fa fa-plus-circle mx-1" onClick={()=>{dispatch(incrQty(item.id))}}/></td>
                                                            <td><button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteCartItem(item))}>Delete</button></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-header bg-secondary text-white">
                                            <p className="h4">Your Total</p>
                                            </div>
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
                                                <div className="mt-2">
                                                    <Link to="/checkout" className="btn btn-success btn-sm">Checkout</Link>
                                                    <Link to="/" className="btn btn-secondary btn-sm">Shop More</Link>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                         </React.Fragment>:
                         <React.Fragment>
                             <div className="mt-4 text-center">
                               <p className="h4 text-brown">--------- Cart is Empty -------</p>
                                    <Link to="/" className="btn btn-brown btn-sm text-dark">Shop Now</Link>
                             </div>
                         </React.Fragment>
                     }
                 </div>
             </div>
             
        </React.Fragment>
    )
}

export default CartItem;