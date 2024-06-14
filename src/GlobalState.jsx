import React, { createContext, useReducer } from 'react';

const initialState = { user: null, content: [] };
const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_CONTENT':
            return { ...state, content: action.payload };
        default:
            return state;
    }
};

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };
