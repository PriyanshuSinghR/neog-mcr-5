import { Icon } from '@iconify/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';

export const RecipeCard = ({ recipe }) => {
  const { state, dispatch } = useContext(RecipeContext);
  const handleDelete = () =>
    dispatch({
      type: 'UPDATE_RECIPE',
      payload: state.allRecipes.filter((r) => r.name !== recipe.name),
    });
  return (
    <div style={{ margin: '20px', position: 'relative' }}>
      <Link
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          width: '250px',

          borderRadius: '10px',
          padding: '10px',
          textDecoration: 'none',
          color: 'black',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}
        to={`/recipes/${recipe.name}`}
      >
        <div>
          <img src={recipe.image} style={{ width: '100%', height: '200px' }} />
        </div>
        <h3>{recipe.name}</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <p style={{ fontWeight: 'bold' }}>Cuisine Type:</p>
          <p>{recipe.cuisine}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontWeight: 'bold' }}>Ingredients:</p>
          <p>{'See Recipe >'}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontWeight: 'bold' }}>Instructions:</p>
          <p>{'See Recipe >'}</p>
        </div>
      </Link>
      <div
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          backgroundColor: 'white',
        }}
      >
        <Icon
          icon="fluent:edit-16-regular"
          color="black"
          width="30"
          height="30"
        />
        <Icon
          icon="material-symbols:delete-outline"
          color="black"
          width="30"
          height="30"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};
