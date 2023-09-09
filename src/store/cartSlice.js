const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice(
    {
        name:"cart",

        initialState:{
            cartList:[],
            total:0
        },

        reducers:{
            add(state,action){
             const updatedcartlist = state.cartList.concat(action.payload);
             const updatedtotal = state.total+action.payload.price
             return{...state,cartList:updatedcartlist,total:updatedtotal};
            },
            remove(state,action){
                const updatedcartlist = state.cartList.filter(list => list.id!==action.payload.id);
                const updatedtotal = state.total-action.payload.price;
                return{...state,cartList:updatedcartlist,total:updatedtotal};

            }
      }
    }
)

export const { add,remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;