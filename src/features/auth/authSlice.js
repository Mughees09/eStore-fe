import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
    auth: []
} 


export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        addToAuth: (state, action) => {
            
          
            state.auth.push({...action.payload})

        },
        removeFromAuth: (state, action) => {
            state.auth = state.auth.filter((user) => 
            user.id != action.payload)
            
        },
    }
})

export const {addToAuth,removeFromAuth} = authSlice.actions;

export default authSlice.reducer;