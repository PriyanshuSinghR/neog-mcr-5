import React, { useContext, useRef, useState } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { Icon } from '@iconify/react';

export const EditRecipe = ({ recipe, editClose }) => {
  const { state, dispatch } = useContext(RecipeContext);
  const [upload, setUpload] = useState(recipe);

  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];

    setUpload({ ...upload, image: URL.createObjectURL(fileUploaded) });
  };

  console.log(upload);

  const postData = () => {
    dispatch({
      type: 'UPDATE_RECIPE',
      payload: state.allRecipes.map((r) =>
        r.name === recipe.name ? upload : r,
      ),
    });
    editClose();
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'right',

        flexDirection: 'column',
        width: '90%',
      }}
    >
      <input
        placeholder="Name"
        value={upload?.name}
        onChange={(event) =>
          setUpload({
            ...upload,
            name: event.currentTarget.value,
          })
        }
        style={{
          width: '90%',
          textAlign: 'left',
          padding: '10px',
          height: '100%',
          border: 'none',
          marginBottom: '5px',
          fontSize: '18px',
          color: 'white',
          backgroundColor: 'transparent',

          boxSizing: 'border-box',

          resize: 'none',
        }}
      />
      <input
        placeholder="Cuisine"
        value={upload?.cuisine}
        onChange={(event) =>
          setUpload({
            ...upload,
            cuisine: event.currentTarget.value,
          })
        }
        style={{
          width: '90%',
          textAlign: 'left',
          padding: '10px',
          height: '100%',
          border: 'none',
          marginBottom: '5px',
          fontSize: '18px',
          color: 'white',
          backgroundColor: 'transparent',

          boxSizing: 'border-box',

          resize: 'none',
        }}
      />
      <input
        placeholder="Ingredients"
        value={upload?.ingredients}
        onChange={(event) =>
          setUpload({
            ...upload,
            ingredients: event.currentTarget.value,
          })
        }
        style={{
          width: '90%',
          textAlign: 'left',
          padding: '10px',
          height: '100%',
          border: 'none',
          marginBottom: '5px',
          fontSize: '18px',
          color: 'white',
          backgroundColor: 'transparent',

          boxSizing: 'border-box',

          resize: 'none',
        }}
      />
      <textarea
        placeholder="Instructions"
        value={upload?.instructions}
        onChange={(event) =>
          setUpload({
            ...upload,
            instructions: event.currentTarget.value,
          })
        }
        style={{
          width: '90%',
          textAlign: 'left',
          padding: '10px',
          height: '100%',
          border: 'none',
          marginBottom: '5px',
          fontSize: '18px',
          color: 'white',
          backgroundColor: 'transparent',

          boxSizing: 'border-box',
          display: 'flex',
          overflow: 'auto',
          height: '100px',
          resize: 'none',
        }}
      />
      {upload?.image?.length > 0 && (
        <div style={{ position: 'relative' }}>
          <img src={upload?.image} style={{ height: '100%', width: '100%' }} />
          <Icon
            icon="typcn:delete"
            color="red"
            width="50"
            height="50"
            onClick={() => setUpload({ ...upload, image: '' })}
            style={{
              position: 'absolute',
              top: 0,
              right: '0',
              cursor: 'pointer',
            }}
          />
        </div>
      )}
      <div
        style={{
          display: 'flex',
          borderTop: '1px solid #535353',
          width: '90%',
          justifyContent: 'space-between',
          padding: '10px',
          marginTop: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '60px',
            justifyContent: 'space-between',
          }}
        >
          <Icon
            icon="ic:baseline-photo"
            color="white"
            width="25"
            height="25"
            style={{ cursor: 'pointer' }}
            onClick={handleClick}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '-190px',
            border: '1px solid gray',
            borderRadius: '5px',
            padding: '3px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
            backgroundColor: 'rgb(41, 49, 76)',
            zIndex: 5,
          }}
        ></div>
        <input
          type="file"
          accept="image/*"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        <button
          style={{
            border: 'none',
            cursor: 'pointer',
            padding: ' 0px',
            borderRadius: '15px',
            backgroundColor: 'red',
            fontSize: '14px',
            width: '60px',
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
          className="button-shadow"
          onClick={postData}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
