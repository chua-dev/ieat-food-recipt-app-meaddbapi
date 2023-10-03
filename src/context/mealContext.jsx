import { useContext, createContext, useReducer, useEffect } from 'react';
import { mealReducer } from '../reducers/mealReducer';
import { startFetchCategories } from '../actions/mealActions';


const initialState = {
    // Categories
    categories: [],
    categoryLoading: false,
    categoryError: false,

    // Meals in Each Categories
    categoryMeals: [],
    categoryMealsLoading: false,
    categoryMealsError: false,

    meals: [],
    mealsLoading: false,
    mealsError: false,

    meal: [],
    mealLoading: false,
    mealError: false
}

// Create Context
const MealContext = createContext({});

// Actual Use Context
export const useMealContext = () => {
    return useContext(MealContext);
}

// PROVIDER includes creation of REDUCER and return Context.Provider with ALL THE STATE AND ACTION in reducer
export const MealProvider = ({children}) => {

    // EXACTLY HOW WE DFINE IN EACH COMPONENT
    const [state, dispatch] = useReducer(mealReducer, initialState);

    useEffect(() => {
        startFetchCategories(dispatch)
    }, [])

    return <MealContext.Provider
        value={{
            ...state, // All the reducer state
            dispatch,
            startFetchCategories
        }}
    >
        {children}
    </MealContext.Provider>


}