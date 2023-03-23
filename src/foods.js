class Meal {
    constructor(name, description, category, filter) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.filter = filter;
    }
}

const allMeals = [
    new Meal('SUMMER ROLLS',`Fresh rice paper summer 
    rolls with vermicelli & pickle. Veggie, chicken, 
    prawn, or veganchicken`, 'starters', '')
]