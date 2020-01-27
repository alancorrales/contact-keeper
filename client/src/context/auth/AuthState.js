import React, { useReducer } from 'react'
import AuthContext from './authContext'
import authReducer from './authReducer'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAtuhenticated: null,
        user: null,
        loading: true,
        error: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    // Load user

    // Register user

    // Log in user

    // Logout

    // Clear errors

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAtuhenticated: state.isAtuhenticated,
                loading: state.loading,
                errors: state.errors,
                user: state.user
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;