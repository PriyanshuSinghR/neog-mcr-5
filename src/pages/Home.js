import React, { useContext, useState } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { RecipeCard } from '../components/RecipeCard';
import { Icon } from '@iconify/react';
import { Popup } from '../components/Popup';
import { NewRecipe } from '../components/NewRecipe';

export const Home = () => {
  const { state, dispatch } = useContext(RecipeContext);
  const [newRecipe, setNewRecipe] = useState(false);
  const getRecipes = state?.allRecipes?.filter((item) => {
    if (state.sort === 'name') {
      return item.name.toLowerCase().includes(state.searchInput.toLowerCase());
    }
    if (state.sort === 'cuisine') {
      return item.cuisine
        .toLowerCase()
        .includes(state.searchInput.toLowerCase());
    }
    if (state.sort === 'ingredients') {
      return item.ingredients
        .toLowerCase()
        .includes(state.searchInput.toLowerCase());
    }
  });

  return (
    <div>
      <div
        style={{
          display: 'flex',
          border: '1px solid gray',
          borderRadius: '5px',
          margin: '20px',
        }}
      >
        <input
          type="text"
          value={state.searchInput}
          style={{
            border: 'none',
            borderRight: '1px solid gray',
            borderRadius: '5px',
            padding: '10px',
            fontSize: '16px',
          }}
          onChange={(event) =>
            dispatch({
              type: 'SEARCH_RECIPE',
              payload: event.target.value,
            })
          }
        />
        <div style={{ display: 'flex', marginLeft: '20px', padding: '10px' }}>
          <p style={{ margin: 0 }}>Filters:</p>
          <div style={{ marginLeft: '20px' }}>
            <input
              type="radio"
              name="sort"
              value="name"
              onChange={(e) =>
                dispatch({ type: 'SORT', payload: e.target.value })
              }
            />
            Name
          </div>
          <div style={{ marginLeft: '20px' }}>
            <input
              type="radio"
              name="sort"
              value="ingredients"
              onChange={(e) =>
                dispatch({ type: 'SORT', payload: e.target.value })
              }
            />
            Ingredient
          </div>
          <div style={{ marginLeft: '20px' }}>
            <input
              type="radio"
              name="sort"
              value="cuisine"
              onChange={(e) =>
                dispatch({ type: 'SORT', payload: e.target.value })
              }
            />
            Cuisine
          </div>
        </div>
      </div>
      <h1>All Recipes:</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {getRecipes.map((recipe) => (
          <div>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
      <Icon
        icon="zondicons:add-solid"
        color="gray"
        width="50"
        height="50"
        style={{ cursor: 'pointer' }}
        onClick={() => setNewRecipe(true)}
      />
      {newRecipe && (
        <div>
          <Popup
            content={
              <div>
                <NewRecipe handleToggle={() => setNewRecipe(false)} />
              </div>
            }
            handleClose={() => setNewRecipe(false)}
          />
        </div>
      )}
    </div>
  );
};
