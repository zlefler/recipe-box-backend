import { useState } from 'react';
import { Form, Checkbox, Input, Button } from 'antd';
function NewRecipeForm({ onNewRecipe }) {
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [timeToMake, setTimeToMake] = useState('');
  const [vegetarian, setVegetarian] = useState(false);

  function onSubmit() {
    const new_recipe = {
      name: name,
      instructions: instructions,
      time_to_make: timeToMake,
      vegetarian: vegetarian,
    };
    fetch('/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(new_recipe),
    })
      .then((res) => res.json())
      .then(onNewRecipe(new_recipe));
  }

  return (
    <Form className="navbar-div" onFinish={onSubmit}>
      <Form.Item name="name" label="Name">
        <Input
          className="recipe-name"
          size="small"
          type="text"
          onChange={(e) => setName(e.target.value)}
          id="recipe_name"
        />
      </Form.Item>
      <Form.Item name="instructions" label="Instructions">
        <textarea
          name="instructions"
          onChange={(e) => setInstructions(e.target.value)}
          id="instructions"
          cols="30"
          rows="10"
        ></textarea>
      </Form.Item>
      <Form.Item name="time_to_make" label="Time To Make (in minutes)">
        <Input
          className="recipe-time"
          size="small"
          type="text"
          id="time_to_make"
          onChange={(e) => setTimeToMake(e.target.value)}
        />
      </Form.Item>
      <Form.Item name="vegetarian" label="Vegetarian?">
        <Checkbox
          checked={vegetarian}
          onChange={(e) => setVegetarian(e.target.checked)}
        />
      </Form.Item>
      <Form.Item name="submit">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
export default NewRecipeForm;
