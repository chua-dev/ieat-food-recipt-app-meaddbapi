import React, {Children, createContext, useContext, useReducer} from 'react';
import sidebarReducer from '../reducers/sidebarReducer';
import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from '../actions/actions'

const initialState = {
    isSidebarOpen: false
};


// Create Context
const SidebarContext = createContext({});

// Actual Use Context
export const useSidebarContext = () => {
    return useContext(SidebarContext)
}


// Provider to cover the <Component> then can useContext
export const SidebarProvider = ({children}) => {
    const [state, dispatch] = useReducer(sidebarReducer, initialState);

    // Each action available in sidebarProvider, dispatch action from useReducer
    // INSTEAD of passing dispatch, it pass each function create from dispatch
    const openSidebar = () => {
        dispatch({type: OPEN_SIDEBAR});
    }

    const closeSidebar = () => {
        dispatch({type: CLOSE_SIDEBAR});
    }

    return (
        <SidebarContext.Provider value= {{
            ... state,
            openSidebar,
            closeSidebar
        }}>
            {children}
        </SidebarContext.Provider>
    )

}

