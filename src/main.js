import './styles.css';

/***--- Main Page DOM ---***/
const content = document.getElementById('content');

//---Background----
const background = document.createElement('div');
const bkgImg = new Image();
background.classList.add("background");
bkgImg.src = "../Images/Second-Background.jpg";
background.appendChild(bkgImg);

//---Section Uno---
const sectionUno = (() => {
    const sectionUno = document.createElement('section');
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const logoImg = new Image();
    const options = document.createElement('div');
    const optionsArr = [];
    const hBtn1 = document.createElement('div');
    const hBtn2 = document.createElement('div');
    const hBtn1_Img = new Image();
    const hBtn2_Img = new Image();
    const listBtn = document.createElement('div');
    const listBtn_lines = [];
    const hero = document.createElement('div');
    const heroTitle = document.createElement('h1')
    const heroBtns = document.createElement('div');
    const heroBtnsArr = [];

    //filling the arrays
    for (let i = 0; i < 5; i++) {
        heroBtnsArr.push(document.createElement('div'));
        if (i < 4) optionsArr.push(document.createElement('div'));
        if (i < 3) listBtn_lines.push(document.createElement('div'));
    }

    //filling element atributes
    sectionUno.classList.add("uno");

    logo.classList.add("logo");
    logoImg.src = "../Images/Dzo.png";
    logo.appendChild(logoImg);

    options.classList.add("options");
    optionsArr.forEach(option => option.classList.add("hidden"));
    optionsArr[0].textContent = "MENU";
    optionsArr[1].textContent = "LOCATIONS";
    optionsArr[2].textContent = "OUR STORY";
    optionsArr[3].textContent = "GIFT VOUCHERS";

    hBtn1.classList.add("header-btn");
    hBtn1_Img.src = "../Images/bag-icon.svg";
    hBtn1.appendChild(hBtn1_Img);
    hBtn1.innerHTML += "Book a Table";
    hBtn2.classList.add("header-btn");
    hBtn2_Img.src = "../Images/pin-icon.svg";

    hBtn2.appendChild(hBtn2_Img);
    hBtn2.innerHTML += "Find a Dzo";

    listBtn.classList.add("list");
    listBtn_lines[0].classList.add("line-top");
    listBtn_lines[2].classList.add("line-bottom");
    listBtn_lines.forEach(line => listBtn.appendChild(line));

    optionsArr.forEach(option => options.appendChild(option));
    options.appendChild(hBtn1);
    options.appendChild(hBtn2);
    options.appendChild(listBtn);
    header.appendChild(logo);
    header.appendChild(options);

    hero.classList.add("hero");
    heroTitle.textContent = "Vietnamese street food";
    heroBtns.classList.add("hero-btn");
    heroBtnsArr[0].textContent = "Menu";
    heroBtnsArr[1].textContent = "Book A Table";
    heroBtnsArr[2].textContent = "Dzo to go";
    heroBtnsArr[3].textContent = "Careers";
    heroBtnsArr[4].textContent = "Nutrition";

    heroBtnsArr.forEach(btn => heroBtns.appendChild(btn));
    hero.appendChild(heroTitle);
    hero.appendChild(heroBtns);

    sectionUno.appendChild(header);
    sectionUno.appendChild(hero);
    return sectionUno;
})()

//---Section Due--- (duke punu me normativen e re)
const sectionDue = document.createElement('secton');
const title = document.createElement('h1');
const categoryList = document.createElement('select');
const foodList = document.createElement('div');

sectionDue.classList.add("due");

//Title attributes
title.textContent = "Our Menu";

//categoryList attributes
categoryList.name = "category-list";
categoryList.id = "category-list";

const optionsArr = [];

for (let i = 0; i < 7; i++) {
    optionsArr[i] = document.createElement('option');
}

optionsArr[0].value = "starters";
optionsArr[0].textContent = "Starters";
optionsArr[1].value = "salads";
optionsArr[1].textContent = "Salads";
optionsArr[2].value = "curry&rice";
optionsArr[2].textContent = "Curry & Rice";
optionsArr[3].value = "wok-fried_noodles";
optionsArr[3].textContent = "Wok-fried Noodles";
optionsArr[4].value = "vermicelli_noodles";
optionsArr[4].textContent = "Vermicelli Noodles";
optionsArr[5].value = "sides";
optionsArr[5].textContent = "Sides";
optionsArr[6].value = "desserts";
optionsArr[6].textContent = "Desserts";

for (const el of optionsArr) {
    categoryList.appendChild(el);
}

//foodList Attributes
foodList.classList.add('food-list');

const filters = document.createElement('div');
const foods = document.createElement('div');

filters.classList = "filters";
const filtersArr = [];

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.type = "checkbox";
    div.appendChild(input);
    div.appendChild(label);
    filtersArr[i] = div;
}

filtersArr[0].firstElementChild.name = "vegan";
filtersArr[0].firstElementChild.id = "vegan";
filtersArr[0].lastElementChild.setAttribute("for", filtersArr[0].firstElementChild.id);
filtersArr[1].firstElementChild.name = "vegetarian";
filtersArr[1].firstElementChild.id = "vegetarian";
filtersArr[1].lastElementChild.setAttribute("for", filtersArr[1].firstElementChild.id);
filtersArr[2].firstElementChild.name = "dairy-free";
filtersArr[2].firstElementChild.id = "dairy-free";
filtersArr[2].lastElementChild.setAttribute("for", filtersArr[2].firstElementChild.id);
filtersArr[3].firstElementChild.name = "gluten-free";
filtersArr[3].firstElementChild.id = "gluten-free";
filtersArr[3].lastElementChild.setAttribute("for", filtersArr[3].firstElementChild.id);
filtersArr[4].firstElementChild.name = "500cal";
filtersArr[4].firstElementChild.id = "500cal";
filtersArr[4].lastElementChild.setAttribute("for", filtersArr[4].firstElementChild.id);

for (const el of filtersArr) {
    filters.appendChild(el);
}

foods.classList.add("foods");

sectionDue.appendChild(title);
sectionDue.appendChild(categoryList);
sectionDue.appendChild(foodList);

//still in prov
content.innerHTML = "";
content.appendChild(background);
content.appendChild(sectionUno);
content.appendChild(sectionDue);