import { Button, Card, Popconfirm } from 'antd';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function RecipeCard({
  recipe,
  user,
  handleUnsaveRecipe,
  handleDeleteRecipe,
  handleEditRecipe,
}) {
  const location = useLocation();
  const [fullRecipe, setFullRecipe] = useState(false);
  const [saveResponse, setSaveResponse] = useState('');

  function handleSaveRecipe(user, recipe) {
    fetch('/bookmarks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user.id, recipe_id: recipe.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data['error']) {
          setSaveResponse('Already saved!');
        } else {
          setSaveResponse('Saved!');
        }
      });
  }

  return (
    <Card className="card">
      <h1>{recipe.name}</h1>
      <h2>{recipe.time_to_make} minutes to make</h2>
      <h3>{recipe.vegetarian ? '' : 'NOT '}vegetarian</h3>
      {fullRecipe ? (
        <p>{recipe.instructions}</p>
      ) : (
        <p>{recipe.instructions.slice(0, 250)}...</p>
      )}
      <Button
        className="button"
        onClick={() => setFullRecipe((fullRecipe) => !fullRecipe)}
      >
        {fullRecipe ? 'Hide Recipe' : 'See Full Recipe'}
      </Button>
      {/* if logged in, on the homepage */}
      {user && location.pathname !== '/userpage' && recipe.user_id !== user.id && (
        <>
          <Button
            className="button"
            onClick={() => handleSaveRecipe(user, recipe)}
          >
            Save Recipe
          </Button>
          <p>{saveResponse}</p>
        </>
      )}
      {/* if on the user page */}
      {location.pathname === '/userpage' && (
        <>
          {recipe.user_id === user.id ? (
            <>
              <Button
                className="button"
                type="primary"
                onClick={() => handleEditRecipe(recipe)}
              >
                Edit Recipe
              </Button>
              <Popconfirm
                title="Permanently delete this recipe?"
                okText="Yes"
                cancelText="No"
                onConfirm={() => handleDeleteRecipe(recipe.id)}
              >
                <Button className="button" type="danger">
                  DELETE
                </Button>
              </Popconfirm>
            </>
          ) : (
            <Button
              className="button"
              type="danger"
              onClick={() => handleUnsaveRecipe(recipe.id)}
            >
              Unsave Recipe
            </Button>
          )}
        </>
      )}
    </Card>
  );
}

export default RecipeCard;
