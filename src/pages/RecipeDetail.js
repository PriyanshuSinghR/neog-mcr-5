import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';

export const RecipeDetail = () => {
  const { recipeName } = useParams();
  const { state } = useContext(RecipeContext);
  const recipe = state.allRecipes.find((r) => r.name === recipeName);
  return (
    <div>
      <h1>{recipe?.name}</h1>
      <div
        style={{
          display: 'flex',
          margin: 'auto',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          width: '80%',
          padding: '20px',
        }}
      >
        <img src={recipe?.image} style={{ width: '300px' }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            marginLeft: '10px',
          }}
        >
          <h3>Cuisine: {recipe?.cuisine}</h3>
          <p>
            <span style={{ fontWeight: 'bold' }}>Ingredients:</span>{' '}
            {recipe?.ingredients}
          </p>
          <div>
            <p style={{ fontWeight: 'bold' }}>Instructions:</p>
            <p>{recipe?.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
