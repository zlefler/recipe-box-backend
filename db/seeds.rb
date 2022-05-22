User.create(username: 'admin', password: '1234')
User.create(username: 'Zach', password: 'asdf')
User.create(username: 'Maya', password: 'qwerty')

Recipe.create(name: 'Cubano', instructions: 'Mix the mayonnaise and mustard in a small bowl and spread evenly on the inside of the bread slices. Layer on half of the cheese, the ham, pork, Quick Garlic Pickles and the remaining cheese. Cover with another slice of bread and butter the outside (top and bottom) of the sandwich.
Heat a cast-iron skillet to medium-high heat and place the sandwiches in the pan. Top with a second cast-iron skillet to weigh the sandwiches down. After 2 minutes, turn down the heat to medium low, flip the sandwiches and weigh down again with the second skillet. Check the sandwiches after 1 more minute, and remove when golden brown and the cheese has melted.', time_to_make: '30', vegetarian: false)
Recipe.create(name: 'Spanish Rice Fritatta', instructions: 'Chop onion and peppers. Melt butter or margarine in a skillet and sauté onion and pepper over medium heat until tender. Stir often.
    Spray a casserole dish with non-stick cooking spray. Preheat oven to 350 degrees.
    Chop spinach leaves, parsley and tomato and place in a mixing bowl. Add onions and peppers and stir. Add egg(s) and beat well.
    Stir salsa into egg mixture along with milk, garlic salt and pepper.
    Grate cheese and blend into eggs and vegetables along with instant rice.
    Pour into casserole dish and bake in hot oven until firm (about 35 minutes).', time_to_make: 35, vegetarian: true)
Recipe.create(name: 'Buttermilk-fried Chicken', instructions: 'Combine the paprika, black pepper, garlic powder, oregano, and cayenne in a small bowl and mix thoroughly with a fork.

    Whisk the buttermilk, egg, 1 tablespoon salt, and 2 tablespoons of the spice mixture in a large bowl. Add the chicken pieces and toss and turn to coat. Transfer the contents of the bowl to a gallon-sized zipper-lock freezer bag and refrigerate for at least 4 hours, and up to overnight, flipping the bag occasionally to redistribute the contents and coat the chicken evenly.
    
    Whisk together the flour, cornstarch, baking powder, 2 teaspoons salt, and the remaining spice mixture in a large bowl. Add 3 tablespoons of the marinade from the zipper-lock bag and work it into the flour with your fingertips. Remove one piece of chicken from the bag, allowing excess buttermilk to drip off, drop the chicken into the flour mixture, and toss to coat. Continue adding chicken pieces to the flour mixture one at a time until they are all in the bowl. Toss the chicken until every piece is thoroughly coated, pressing with your hands to get the flour to adhere in a thick layer.
    
    Adjust an oven rack to the middle position and preheat the oven to 350°F. Heat the shortening or oil to 425°F in a 12-inch straight-sided cast-iron chicken fryer or a large wok over medium-high heat. Adjust the heat as necessary to maintain the temperature, being careful not to let the fat get any hotter.
    
    One piece at a time, transfer the coated chicken to a fine-mesh strainer and shake to remove excess flour. Transfer to a wire rack set on a rimmed baking sheet. Once all the chicken pieces are coated, place skin side down in the pan. The temperature should drop to 300°F; adjust the heat to maintain the temperature at 300°F for the duration of the cooking. Fry the chicken until it’s a deep golden brown on the first side, about 6 minutes; do not move the chicken or start checking for doneness until it has fried for at least 3 minutes, or you may knock off the coating. Carefully flip the chicken pieces with tongs and cook until the second side is golden brown, about 4 minutes longer.
    
    Transfer chicken to a clean wire rack set in a rimmed baking sheet, season lightly with salt, and place in the oven. Bake until thickest part of breast pieces registers 150°F (65.5°C) on an instant-read thermometer, and thigh/drumstick pieces register 165°F (74°C), 5 to 10 minutes; remove chicken pieces as they reach their target temperature, and transfer to a second wire rack set in a rimmed baking sheet, or a paper towel-lined plate. Season with salt to taste. Serve immediately—or, for extra-crunchy fried chicken, proceed to step 7.

    Place the plate of cooked chicken in the refrigerator for at least 1 hour, and up to overnight. When ready to serve, reheat the oil to 400°F. Add the chicken pieces and cook, flipping them once halfway through cooking, until completely crisp, about 5 minutes. Transfer to a wire rack set on a rimmed baking sheet to drain, then serve immediately.', time_to_make: '360', vegetarian: false)

Recipe.create(name: 'Macaroni Salad', instructions: "Cook the macaroni in lightly salted water according to the package directions. Drain and rinse under cold water to cool. Set aside.
    Mix together the mayo, vinegar, sugar, salt, and pepper. Splash in enough milk to make it pourable. Splash in pickle juice for extra flavor. Taste and adjust seasonings as needed. Set aside.
    Place the cooled macaroni in a large bowl and pour in 3/4 of the dressing. Toss and add more dressing if you'd like. (The dressing will seem a little thin, but it will thicken up as the salad chills.)
    Stir in the roasted red peppers (or pimentos), olives, pickles, and green onions. Add more of any ingredient if you'd like more stuff going on! At the end, splash in a little more pickle juice and stir.
    Chill for at least 2 hours before serving. Sprinkle with sliced green onions to serve!", time_to_make: 25, vegetarian: true)
UserRecipe.create(user_id: 2, recipe_id: 1)
UserRecipe.create(user_id: 2, recipe_id: 2)
UserRecipe.create(user_id: 3, recipe_id: 3)
UserRecipe.create(user_id: 3, recipe_id: 4)