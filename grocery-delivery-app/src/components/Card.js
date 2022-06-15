import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { toast } from "react-toastify";
import { addToCart } from "../redux/feature/grocery.feature";

let Card = ({item}) =>{
    let {image,name,price} = item;
    let [btn,setBtn] = useState('AddCart')
    let dispatch = useDispatch();
    let handleAddToCart=(item)=>{
          dispatch(addToCart(item))
          setBtn('Added')
          toast.success('Added sucessfully')
    }
    return(
        <React.Fragment>
          <div className="card animated jello">
            <div className="card-header">
               <img src={image} alt={name} style={{maxWidth:'100%',maxHeight:'50%'}}/>
            </div>
            <div className="card-body">
              <div className="card-title">{name}</div>
              <span className="card-subtitle">Price: &#8377; {price}</span><br/>
              <button type="button" onClick={()=>handleAddToCart(item)} className="btn purple-gradient btn-sm animated shake">{btn}</button>
            </div>
          </div>   
        </React.Fragment>
    )
}
export default Card;