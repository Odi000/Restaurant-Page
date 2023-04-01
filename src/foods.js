import {
    foods,
    categoryList
} from "./home_page";

class Meal {
    constructor(name, description, ...filter) {
        this.name = name;
        this.description = description;
        this.filter = filter;
    }
}

//Filters
const all = [
    "vegan",
    "vegetarian",
    "dairy-free",
    "gluten-free",
    "500cal"
]
const vegan = "vegan",
    vegetarian = "vegetarian",
    dairyFree = "dairy-free",
    glutenFree = "gluten-free",
    _500cal = "500cal"
//---

//Categories of food in arrays
const starterMeals = [
    new Meal('SUMMER ROLLS', `Fresh rice paper summer 
    rolls with vermicelli & pickle. Veggie, chicken, 
    prawn, or veganchicken`, ...all),
    new Meal('SPICY SALAD ROLLS', `spicy salad rolls 
    with enoki, chilli & herbs (carb free)`, ...all),
    new Meal('CRISPY BABY SQUID', `Tender fried baby 
    squid with a salt, pepper & lime dip`, dairyFree,
        glutenFree, _500cal),
    new Meal('SPRING ROLLS', `Crispy spring rolls served 
    with lettuce & herbs to wrap & dip. Veggie or pork.`,
        vegan, vegetarian, dairyFree, glutenFree, _500cal),
    new Meal('SEAFOOD SPRING ROLL', `Large crispy spring 
    roll of tiger prawn, crab & pork with nước chấm 
    dipping sauce`, dairyFree, _500cal),
    new Meal('CHICKEN WINGS', `Seasoned, crispy chicken 
    wings served with sriracha`, dairyFree),
    new Meal('BEEF BETEL', `Beef wrapped in betel leaves, 
    served with rice vermicelli sheets & nuoc cham`, dairyFree),
    new Meal('PORK MEATBALLS', `Homemade pork & lemongrass 
    meatballs with lettuce & herbs to wrap & dip`, dairyFree),
    new Meal('VIETNAMESE PANCAKE', `Savoury Vietnamese 
    crispy crepe with rice papers & herbs. Chicken & prawn, 
    tofu or vegan chicken`, ...all),
    new Meal('LOTUS STEMS', `With green beans`, ...all),
    new Meal('MORNING GLORY', `Stir fried morning glory 
    (water spinach) in garlic`, ...all),
    new Meal('STIR FRIED CHINESE LEAF', `In soy sauce`, ...all)
]

const salads = [
    new Meal('CHICKEN SALAD', `Shredded chicken salad with Vietnamese 
    herbs, peppers and a chilli ginger dressing`,
        dairyFree, glutenFree, _500cal),
    new Meal('VEGGIE SALAD', `Same as Goi Ga, minus the chicken, 
    or you can add in vegan THIS isn't chicken`, ...all),
    new Meal('GREEN PAPAYA SALAD', `Crunchy green papaya salad with 
    peanuts & prawn crackers. Veggie, prawn or vegan THIS isn't chicken`,
        dairyFree, glutenFree, _500cal),
    new Meal('MANGO SALAD', `Spicy green mango salad topped with pork, 
    dried shrimp & peanuts`, dairyFree, glutenFree, _500cal)
]
//---

starterMeals.forEach((meal) => putMealInDOM(meal));


categoryList.onchange = () => {
    const category = categoryList.value;
    foods.innerHTML = ""; // I can remove child nodes with an interval one by one

    if (category == "starters") {
        starterMeals.forEach((meal) => putMealInDOM(meal));
    } if (category == "salads") {
        salads.forEach((meal) => putMealInDOM(meal));
    }
}


function putMealInDOM(meal) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const line = document.createElement('div');

    h2.textContent = meal.name;
    p.textContent = meal.description;
    line.classList.add('line');

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(line);
    foods.appendChild(div);
}