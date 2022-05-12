User.create(name:'Zach', password:'1234')
User.create(name:'Maya', password:'qwerty')

Recipe.create(recipe:'Chop onion and peppers. Melt butter or margarine in a skillet and sauté onion and pepper over medium heat until tender. Stir often.
    Spray a casserole dish with non-stick cooking spray. Preheat oven to 350 degrees.
    Chop spinach leaves, parsley and tomato and place in a mixing bowl. Add onions and peppers and stir. Add egg(s) and beat well.
    Stir salsa into egg mixture along with milk, garlic salt and pepper.
    Grate cheese and blend into eggs and vegetables along with instant rice.
    Pour into casserole dish and bake in hot oven until firm (about 35 minutes).', time_to_make: '50', vegetarian:true)
UserRecipe.create(user_id: 1, recipe_id: 1)
