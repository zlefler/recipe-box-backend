import { Button, Card, Popconfirm } from 'antd';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function RecipeCard({
  recipe,
  user,
  handleUnsaveRecipe,
  handleDeleteRecipe,
  handleSaveRecipe,
  handleEditRecipe,
}) {
  const location = useLocation();
  const [fullRecipe, setFullRecipe] = useState(false);
  console.log(recipe);
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
        className="card-button"
        onClick={() => setFullRecipe((fullRecipe) => !fullRecipe)}
      >
        {fullRecipe ? 'Hide Recipe' : 'See Full Recipe'}
      </Button>
      {/* if logged in, on the homepage */}
      {user && location.pathname !== '/userpage' && (
        <Button
          className="card-button"
          onClick={() => handleSaveRecipe(user, recipe)}
        >
          Save Recipe
        </Button>
      )}
      {/* if on the user page */}
      {location.pathname === '/userpage' && (
        <>
          <Button
            className="card-button"
            type="primary"
            onClick={() => handleEditRecipe(recipe)}
          >
            Edit Recipe
          </Button>
          <Button
            className="card-button"
            type="danger"
            onClick={() => handleUnsaveRecipe(recipe.id)}
          >
            Unsave Recipe
          </Button>
        </>
      )}
      {location.pathname === '/userpage' && recipe.user_id === user.id && (
        <Popconfirm
          title="Permanently delete this recipe?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => handleDeleteRecipe(recipe.id)}
        >
          <Button type="danger">DELETE</Button>
        </Popconfirm>
      )}
    </Card>
  );
}

export default RecipeCard;
