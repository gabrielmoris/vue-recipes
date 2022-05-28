import { createStore } from "vuex";

export default createStore({
    state: {
        recipes: [
            {
                slug: "fish-soup",
                title: "Fish soup",
                description: "A delicious creamy soup with fish and ginger.",
                ingredients: [
                    "1 fish",
                    "Ginger",
                    "Rice whine",
                    "3 tablespoons of olive oil",
                    "salt",
                ],
                method: [
                    "Clean the fish (Scales and inside).",
                    "Put salt and cut 3 lines on the fish skin.",
                    "Put 3 tablespoons of oil in a pan and heat it.",
                    "When the pan is warm I put the sliced ginger and wait a little bit before I put the fish, meanwhile I put 800ml water to boil.",
                    "When the fish is fried I put the rice whine and after that the boiling water. I cover and I keep the fire high until it is done.",
                ],
            },
            {
                slug: "fried-soysauce-pork",
                title: "Fried Soy sauce Pork",
                description: "Delicious side dish or snack.",
                ingredients: [
                    "Pork meat",
                    "salt",
                    "soy sauce",
                    "Rice whine",
                    "starch (or Flour)",
                    "onion",
                    "vegetables of choice",
                    "13 chinese spices",
                    "sesam oil",
                ],
                method: [
                    "Cut the pork in stripes",
                    "Put the striped pork in a bowl with the seasoning (salt, soy sauce,rice whine, starch and the 13 chinese spices)",
                    "Cut vegetables (and onion)",
                    "Heat the pan and put the onion. Wait until the onion is soft",
                    "Put the seasoned striped pork and fry it",
                    "Take out everything from the pan and put the vegetables and season them",
                    "Take out the vegetables and put boiling water in the pan, the chinese noodles and salt",
                    "Take out the water and keep the noodles in the pan",
                    "Put back the pork and the vegetables and fry everything together",
                    "Serve it with a little bit of sesam oil on the top",
                ],
            },
        ],
    },
    getters: {},
    mutations: {
        ADD_RECIPE(state, recipe) {
            state.recipes.push(recipe);
        },
    },
    actions: {},
    modules: {},
});
