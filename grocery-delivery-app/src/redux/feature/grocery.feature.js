import {createSlice} from '@reduxjs/toolkit';
import {GroceryService,GroceryTypeService} from '../../services/GroceryService.js';
const initialState = {
   groceries:GroceryService.getAllGeoceries(),
   grocerieTypes:GroceryTypeService.getAllGroceryType(),
   cartItems:[],
   subTotal: 0,
   tax:0,
   groundTotal: 0,
   users:[]
}

const grocerySlice = createSlice({
    name:'grocery',
    initialState:initialState,
    reducers:{
        addToCart:(state,action)=>{
           state.cartItems =[action.payload,...state.cartItems]
        },
        incrQty:(state,action)=>{
        let cartItem = state.cartItems.findIndex((item)=>item.id === action.payload) 
         state.cartItems[cartItem].qty +=1 
         
        },
        decrQty:(state,action)=>{
            let cartItem = state.cartItems.findIndex((item)=>item.id === action.payload) 
             if(state.cartItems[cartItem].qty > 1){
                 state.cartItems[cartItem].qty -= 1
             }
        },
        deleteCartItem:(state,action)=>{
            state.cartItems.map((cartItem)=>{
                if(cartItem.id === action.payload.id){
                    const newCartItems = state.cartItems.filter((item)=> item.id !== cartItem.id)
                    state.cartItems = newCartItems;

                }
             return state;   
            })
        },
        calcTotal:(state)=>{
          let total = 0;
          state.cartItems.forEach((cartItem)=>{
            total += cartItem.price * cartItem.qty
          })
          state.subTotal = total
        },
        getTax : (state)=>{
            
            let totalTax =state.subTotal*5/100;
            state.tax = Number(totalTax)
        },
        getGrandTotal : (state)=>{
          state.groundTotal = state.subTotal + state.tax
        },
        checkOutAddress : (state,action)=>{
           state.users = [action.payload,...state.users]
        }
    }
    
});
export const {addToCart,incrQty,decrQty,deleteCartItem,calcTotal,getTax,getGrandTotal,checkOutAddress} = grocerySlice.actions;

export default grocerySlice.reducer;