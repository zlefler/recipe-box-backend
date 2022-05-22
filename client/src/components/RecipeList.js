import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import EditRecipe from './EditRecipe';

function RecipeList({ user }) {
  const [recipes, setRecipes] = useState([]);
  const [editRecipe, setEditRecipe] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/userpage') {
      fetch(`/users/${user.id}/recipes`)
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    } else {
      fetch('/recipes')
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    }
  }, [user, location.pathname]);

  function handleSaveRecipe(user, recipe) {
    fetch('/save_recipe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user.id, recipe_id: recipe.id }),
    });
  }

  function handleDeleteRecipe(recipe_id) {
    fetch(`/recipes/${recipe_id}`, {
      method: 'DELETE',
    });
    setRecipes(recipes.filter((recipe) => recipe.id !== recipe_id));
  }

  function handleUnsaveRecipe(recipe_id) {
    fetch(`/users/${user.id}/recipes/${recipe_id}`, {
      method: 'DELETE',
    });
    setRecipes(recipes.filter((recipe) => recipe.id !== recipe_id));
  }

  function handleEditRecipe(recipe) {
    setEditRecipe(true);
    setRecipeToEdit(recipe);
  }

  function handleEditSubmit(id, new_recipe) {
    fetch(`/recipes/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(new_recipe),
    }).then((res) => res.json());
    setRecipes(
      recipes.map((recipe) => (recipe.id === id ? new_recipe : recipe))
    );
    setEditRecipe(false);
  }

  return (
    <div className="recipe-div">
      {editRecipe && (
        <EditRecipe
          recipeToEdit={recipeToEdit}
          handleEditSubmit={handleEditSubmit}
        />
      )}
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          user={user}
          recipe={recipe}
          handleSaveRecipe={handleSaveRecipe}
          handleUnsaveRecipe={handleUnsaveRecipe}
          handleDeleteRecipe={handleDeleteRecipe}
          handleEditRecipe={handleEditRecipe}
        />
      ))}
    </div>
  );
}

export default RecipeList;
