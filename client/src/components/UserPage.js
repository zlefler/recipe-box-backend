import { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import RecipeList from './RecipeList';
import NewRecipeForm from './NewRecipeForm';

function UserPage({ user, userpage }) {
  const { Title } = Typography;
  const [userRecipes, setUserRecipes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(`/users/${user.id}/recipes`)
      .then((res) => res.json())
      .then((data) => setUserRecipes(data));
  }, [user.id]);

  function onNewRecipe(new_recipe) {
    setUserRecipes([...userRecipes, new_recipe]);
  }

  function onShowFormClick() {
    setShowForm((showForm) => !showForm);
  }
  return (
    <div>
      <Title>{user.username}'s page</Title>
      <Button onClick={onShowFormClick} className="button">
        {showForm ? 'Hide Form' : 'Add Recipe'}
      </Button>
      {showForm && <NewRecipeForm onNewRecipe={onNewRecipe} user={user} />}
      <RecipeList user={user} userRecipes={userRecipes} userpage={userpage} />
    </div>
  );
}

export default UserPage;
