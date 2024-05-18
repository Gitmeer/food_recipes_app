import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    recipes:[
        {   "id":1,
            "title": "Spaghetti Carbonara",
            "description": "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
            "steps": [
                "Bring a large pot of salted water to a boil. Cook spaghetti according to package instructions.",
                "In a large skillet, cook pancetta over medium heat until crispy. Remove from heat and set aside.",
                "In a bowl, whisk together eggs and grated Parmesan cheese.",
                "Drain the pasta, reserving some of the cooking water. Quickly add the hot pasta to the skillet with pancetta, then pour in the egg and cheese mixture, tossing rapidly to create a creamy sauce.",
                "If the sauce is too thick, add a bit of reserved pasta water until the desired consistency is reached.",
                "Season with black pepper and serve immediately."
            ],
            "image":"https://www.allrecipes.com/thmb/a_0W8yk_LLCtH-VPqg2uLD9I5Pk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg"
        },
        {
            "id":2,
            "title": "Chicken Curry",
            "description": "A flavorful and spicy Indian chicken curry made with a blend of spices, tomatoes, and coconut milk.",
            "steps": [
                "Heat oil in a large pot over medium heat. Add chopped onions and cook until golden brown.",
                "Add garlic, ginger, and green chilies, and sauté for a couple of minutes.",
                "Add chicken pieces and cook until browned on all sides.",
                "Stir in ground spices (cumin, coriander, turmeric, and garam masala) and cook for a minute.",
                "Add chopped tomatoes and cook until they soften and blend with the spices.",
                "Pour in coconut milk and bring to a simmer. Cook until the chicken is fully cooked and the sauce has thickened.",
                "Garnish with fresh cilantro and serve with rice or naan."
            ],
            "image":"https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg"
        },
        {   "id":3,
            "title": "Vegetable Stir-Fry",
            "description": "A quick and healthy vegetable stir-fry with a mix of colorful veggies and a savory sauce.",
            "steps": [
                "Prepare the vegetables: slice bell peppers, carrots, broccoli, and snap peas into bite-sized pieces.",
                "In a small bowl, mix soy sauce, hoisin sauce, minced garlic, and grated ginger.",
                "Heat oil in a large skillet or wok over high heat. Add the vegetables and stir-fry for 5-7 minutes until tender-crisp.",
                "Pour in the sauce mixture and toss to coat the vegetables evenly. Cook for another 2-3 minutes until the sauce has thickened slightly.",
                "Serve the stir-fry over cooked rice or noodles, and garnish with sesame seeds and chopped green onions."
            ],
            "image":"https://playswellwithbutter.com/wp-content/uploads/2022/02/Beef-and-Vegetable-Stir-Fry-16.jpg"
        },
        {   "id":4,
            "title": "Chocolate Chip Cookies",
            "description": "Classic homemade chocolate chip cookies with a crispy edge and a chewy center.",
            "steps": [
                "Preheat the oven to 350°F (175°C). Line a baking sheet with parchment paper.",
                "In a bowl, whisk together flour, baking soda, and salt.",
                "In a separate bowl, cream together softened butter, brown sugar, and granulated sugar until light and fluffy.",
                "Beat in eggs and vanilla extract until well combined.",
                "Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Fold in chocolate chips.",
                "Drop tablespoon-sized balls of dough onto the prepared baking sheet, spacing them about 2 inches apart.",
                "Bake for 10-12 minutes, or until the edges are golden brown. Let the cookies cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely."
            ],
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mDmbO9dPZgIV15gmgoUtuYEFMt0DFiMBOR7-p6bwWg&s"
        }
]
}

export const recipeSlice=createSlice({
    name:'recipes',
    initialState,
    reducers:{}
})

export default recipeSlice.reducer;