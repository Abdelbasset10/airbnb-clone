import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type stateSlice = {
    isRegisterOpen : boolean
    isLoginOpen : boolean
}

const initialState = {
    isRegisterOpen:false,
    isLoginOpen:false
} as stateSlice


const modalSlice = createSlice({
    name:"nodal",
    initialState,
    reducers:{
        openRegisterModal : (state,action : PayloadAction<undefined>) => {
            state.isRegisterOpen = true
        },
        closeRegisterModal : (state,action : PayloadAction<undefined>) => {
            state.isRegisterOpen = false
        },
        openLoginModal : (state,action : PayloadAction<undefined>) => {
            state.isLoginOpen = true
        },
        closeLoginModal : (state,action : PayloadAction<undefined>) => {
            state.isLoginOpen = false
        }
    },
    extraReducers:{

    }
})

export const {openRegisterModal, closeRegisterModal, openLoginModal, closeLoginModal} = modalSlice.actions

export default modalSlice.reducer