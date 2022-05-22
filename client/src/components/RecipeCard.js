import { Button, Card, Popconfirm } from 'antd';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function RecipeCard({
  recipe,
  user,
  userpage,
  handleUnsaveRecipe,
  handleDeleteRecipe,
  handleSaveRecipe,
  handleEditRecipe,
}) {
  const location = useLocation();
  const [fullRecipe, setFullRecipe] = useState(false);

  return (
    <Card className="card">
      {/* <a href={`http://localhost:3000/recipes/${recipe.id}`}> */}
      <h1>{recipe.name}</h1>
      {/* </a> */}
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
      {/* if logged in, on the homepage, but not admin */}
      {user && location.pathname !== '/userpage' && user.id !== 1 && (
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
      {/* if admin */}
      {user && user.id === 1 && (
        <Popconfirm
          title="Permanently delete this recipe?"
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger" onClick={() => handleDeleteRecipe(recipe.id)}>
            DELETE
          </Button>
        </Popconfirm>
      )}
    </Card>
  );
}

export default RecipeCard;
