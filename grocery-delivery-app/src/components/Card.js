import React from "react";
import {useDispatch} from 'react-redux';
import { addToCart } from "../redux/feature/grocery.feature";

let Card = ({item}) =>{
    let {image,name,price} = item;
    let dispatch = useDispatch();
    let handleAddToCart=(item)=>{
        dispatch(addToCart(item))
    }
    return(
        <React.Fragment>
          <div className="card">
            <div className="card-header">
               <img src={image} alt={name} style={{maxWidth:'100%',maxHeight:'50%'}}/>
            </div>
            <div className="card-body">
              <div className="card-title">{name}</div>
              <span className="card-subtitle">Price: &#8377; {price}</span><br/>
              <button onClick={()=>handleAddToCart(item)} className="btn btn-secondary gtn-sm">AddCart</button>
            </div>
          </div>   
        </React.Fragment>
    )
}
export default Card;