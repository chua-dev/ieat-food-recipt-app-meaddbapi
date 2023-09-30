import { useContext, createContext, useReducer } from 'react';


// Create Context
const mealContext = createContext({});

// Use Context To be called
export const useMealContext = () => {
    return useContext(mealContext);
}


// PROVIDER includes REDUCERS and Context.Provider
export const MealProvider = () => {

}