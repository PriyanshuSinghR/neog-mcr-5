import { createContext, useReducer } from 'react';
import { recipes } from '../data';

export const RecipeContext = createContext();

const reduceRecipe = (state, action) => {
  switch (action.type) {
    case 'SEARCH_RECIPE':
      return {
        ...state,
        searchInput: action.payload,
      };
    case 'UPDATE_RECIPE':
      return {
        ...state,
        allRecipes: action.payload,
      };
    case 'SORT':
      return {
        ...state,
        sort: action.payload,
      };

    default:
      break;
  }
};

export function RecipeProvider({ children }) {
  const [state, dispatch] = useReducer(reduceRecipe, {
    allRecipes: recipes,
    searchInput: '',
    sort: 'name',
  });

  return (
    <RecipeContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
