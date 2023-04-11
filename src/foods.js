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
    putMealInDOM() {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const line = document.createElement('div');

        h2.textContent = this.name;
        p.textContent = this.description;
        line.classList.add('line');

        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(line);
        foods.appendChild(div);
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

const curryRice = [
    new Meal('CHICKEN CURRY', `Rich, fragrant Vietnamese curry with 
    veggies & mushrooms, served with broken rice & chicken`, dairyFree, glutenFree),
    new Meal('BRISKET CURRY', `Rich, fragrant Vietnamese curry with 
    veggies & mushrooms, served with broken rice & beef brisket`, dairyFree, glutenFree),
    new Meal('PRAWN CURRY', `Rich, fragrant Vietnamese curry with 
    veggies & mushrooms, served with broken rice & king prawns`, dairyFree, glutenFree),
    new Meal('TOFU & MUSHROOM CURRY', `Rich, fragrant Vietnamese 
    curry with veggies & mushrooms, served with broken rice & tofu`, vegan, vegetarian, dairyFree, glutenFree),
    new Meal("THIS ISN'T CHICKEN CURRY", `Rich, fragrant Vietnamese 
    curry with veg & mushrooms, served with rice & vegan THIS isn't chicken`),
    new Meal('CHICKEN FRIED RICE', `Aromatic, spicy wok-fried broken 
    rice with chicken & dried shrimp with option to add a fried egg`, dairyFree, glutenFree),
    new Meal('MUSHROOM FRIED RICE', `Spicy wok-fried broken rice with 
    shiitake mushroom & Thai basil with option to add a fried egg`, vegan, vegetarian, dairyFree, glutenFree),
    new Meal('VEGAN CHICKEN FRIED RICE', `Spicy wok-fried broken rice 
    with vegan THIS isn't chicken`),
    new Meal('PORK RICE BOWL', `Rice bowls topped with loads of 
    veg & herbs, served with chargrilled pork`, dairyFree, glutenFree),
    new Meal('BEEF RICE BOWL', `Rice bowls topped with loads of 
    veg & herbs, served with beef in betal leaf`, dairyFree, glutenFree)
];

const wokFriedNoodles = [
    new Meal('CHICKEN NOODLES', `Wok-fried noodles with all the 
    trimmings, topped with chicken`, dairyFree, glutenFree, _500cal),
    new Meal('BEEF NOODLES', `Wok-fried noodles with all the 
    trimmings, topped with beef br/isket`, dairyFree, glutenFree, _500cal),
    new Meal('CHICKEN & PRAWN NOODLES', `Wok-fried noodles with 
    all the trimmings, topped with chicken & prawns`, dairyFree, glutenFree, _500cal),
    new Meal('TOFU & MUSHROOM NOODLES', `Wok-fried noodles with 
    all the trimmings, topped with tofu & mushrooms`, ...all),
    new Meal('VEGAN CHICKEN NOODLES', `Wok-fried noodles with 
    all the trimmings, topped with vegan THIS isn't chicken noodles`, vegan, vegetarian, dairyFree, glutenFree)
];

const vermicelli = [
    new Meal('BÚN CHICKEN', `Vermicelli rice noodles with a lemongrass 
    and chilli wok-fried topping, served with chicken`, dairyFree, _500cal),
    new Meal('BÚN BEEF', `Vermicelli rice noodles with a lemongrass and chilli 
    wok-fried topping, served with beef`, dairyFree,),
    new Meal('BÚN KING PRAWN', `Vermicelli rice noodles with a lemongrass and 
    chilli wok-fried topping, served with king prawns`, dairyFree, _500cal),
    new Meal('BÚN NEM NUONG PORK BALLS', `Vermicelli rice noodles with a lemongrass 
    and chilli wok-fried topping, served with pork meatballs`, dairyFree,),
    new Meal('BÚN TOFU & MUSHROOM', `Vermicelli rice noodles with a lemongrass and 
    chilli wok-fried topping, served with tofu & mushroom`, vegan, vegetarian, dairyFree, _500cal),
    new Meal('BÚN VEGGIE SPRING ROLLS', `Vermicelli rice noodles with a lemongrass 
    and chilli wok-fried topping, served with spring rolls`, vegan, vegetarian, dairyFree, _500cal)
];

const sides = [
    new Meal('PRAWN CRACKERS', 'with sweet chilli sauce', dairyFree, glutenFree, _500cal),
    new Meal("'PRAWN-LESS CRACKERS'", 'with sweet chilli sauce', ...all),
    new Meal('"PRAWNLESS" CRACKERS', 'with sweet chilli sauce', ...all),
    new Meal('STIR FRIED SPINACH', 'Stir fried morning glory (water spinach) in garlic', ...all),
    new Meal('CHINESE LEAF', 'Stir fried Chinese leaf in soy sauce', ...all)
];

const desserts = [
    new Meal('CRISPY BANANA FRITTER', `Banana fritter, as is or with ice cream (coconut or honey & ginger)`, vegan, vegetarian, dairyFree, glutenFree),
    new Meal('PANDAN WAFFL', `Freshly cooked pandan waffle served with ice cream or sorbet`, glutenFree),
    new Meal('CHOCOLATE TRUFFLE SLICE', `With ice cream or sorbet`),
    new Meal('VIETNAMESE AFFOGATO', `Hot Vietnamese filter coffee to pour over a scoop of condensed milk ice cream`),
    new Meal('FRESH FRUIT SORBET', `delicious fresh fruit sorbets from La Maison des Sorbets. raspberry or mango`, vegan),
    new Meal('ICE CREAM', `Rich, sumptuous dairy ice creams made with whole milk & double cream.`, glutenFree),
];
//---

starterMeals.forEach((meal) => meal.putMealInDOM());


categoryList.onchange = () => {
    const category = categoryList.value;
    foods.innerHTML = "";

    switch (category) {
        case "starters":
            starterMeals.forEach((meal) => meal.putMealInDOM());
            break;
        case "salads":
            salads.forEach((meal) => meal.putMealInDOM());
            break;
        case "curry&rice":
            curryRice.forEach((meal) => meal.putMealInDOM());
            break;
        case "wok-fried_noodles":
            wokFriedNoodles.forEach((meal) => meal.putMealInDOM());
            break;
        case "vermicelli_noodles":
            vermicelli.forEach((meal) => meal.putMealInDOM());
            break;
        case "sides":
            sides.forEach((meal) => meal.putMealInDOM());
            break;
        case "desserts":
            desserts.forEach((meal) => meal.putMealInDOM());
    }
}