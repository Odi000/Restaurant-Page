/***--- Main Page DOM ---***/
const content = document.getElementById('content');

//---Background----
const background = document.createElement('div');
const bkgImg = new Image();
background.classList.add("background");
bkgImg.src = "../Images/Second-Background.jpg";
background.appendChild(bkgImg);

//---Section Uno---
const listBtn = document.createElement('div');
const sectionUno = () => {
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

    heroBtnsArr[0].onclick = scrollToMenu;

    heroBtnsArr.forEach(btn => heroBtns.appendChild(btn));
    hero.appendChild(heroTitle);
    hero.appendChild(heroBtns);

    sectionUno.appendChild(header);
    sectionUno.appendChild(hero);

    //Onclick callback fucntion
    function scrollToMenu(){
        document.querySelector('.due').scrollIntoView({
            behavior: "smooth",
        })
    }

    return sectionUno;
}

//---Section Due--- (duke punu me normativen e re)
const foods = document.createElement('div');
const categoryList = document.createElement('select');
const filtersArr = [];
const sectionDue = () => {
    const sectionDue = document.createElement('section');
    const title = document.createElement('h1');
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
    
    filters.classList = "filters";
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
    filtersArr[0].lastElementChild.textContent = 'Vegan';
    filtersArr[1].firstElementChild.name = "vegetarian";
    filtersArr[1].firstElementChild.id = "vegetarian";
    filtersArr[1].lastElementChild.setAttribute("for", filtersArr[1].firstElementChild.id);
    filtersArr[1].lastElementChild.textContent = 'Vegetarian';
    filtersArr[2].firstElementChild.name = "dairy-free";
    filtersArr[2].firstElementChild.id = "dairy-free";
    filtersArr[2].lastElementChild.setAttribute("for", filtersArr[2].firstElementChild.id);
    filtersArr[2].lastElementChild.textContent = 'Dairy Free'
    filtersArr[3].firstElementChild.name = "gluten-free";
    filtersArr[3].firstElementChild.id = "gluten-free";
    filtersArr[3].lastElementChild.setAttribute("for", filtersArr[3].firstElementChild.id);
    filtersArr[3].lastElementChild.textContent = 'Gluten Free';
    filtersArr[4].firstElementChild.name = "500cal";
    filtersArr[4].firstElementChild.id = "500cal";
    filtersArr[4].lastElementChild.setAttribute("for", filtersArr[4].firstElementChild.id);
    filtersArr[4].lastElementChild.textContent = '<500cal';

    for (const el of filtersArr) {
        filters.appendChild(el);
    }

    foods.id = "foods";

    foodList.appendChild(filters);
    foodList.appendChild(foods);

    sectionDue.appendChild(title);
    sectionDue.appendChild(categoryList);
    sectionDue.appendChild(foodList);

    return sectionDue;
}

//---Section Tre---
const sectionTre = () => {
    const sectionTre = document.createElement('section');
    const title = document.createElement('h2');
    const socials = document.createElement('div');

    sectionTre.classList.add('tre');

    //Title Atributes
    title.textContent = "GET SOCIAL";

    //Socials Atributes
    socials.classList.add('socials');
    const circleArr = [];

    for (let i = 0; i < 5; i++) {
        const div = document.createElement('div');
        const icon = document.createElement('i');

        div.classList.add('circle');
        icon.classList.add('fa-brands');
        div.appendChild(icon);
        circleArr[i] = div;
    }

    circleArr[0].firstElementChild.classList.add('fa-facebook-f');
    circleArr[1].firstElementChild.classList.add('fa-instagram');
    circleArr[2].firstElementChild.classList.add('fa-github');
    circleArr[3].firstElementChild.classList.add('fa-youtube');
    circleArr[4].firstElementChild.classList.add('fa-twitter');

    circleArr.forEach(div => socials.appendChild(div));

    sectionTre.appendChild(title);
    sectionTre.appendChild(socials);
    return sectionTre;
}

//---Footer---
const footer = () => {
    const footer = document.createElement('footer');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    //Paragraphs attributes
    p1.textContent = 'Careers';
    p2.textContent = 'FAQs';
    p3.textContent = 'Covid-19 Policy';
    p4.textContent = '© Copyright Dzo 2023';

    footer.appendChild(p1);
    footer.appendChild(p2);
    footer.appendChild(p3);
    footer.appendChild(p4);

    return footer;
}

export {
    content,
    background,
    sectionUno,
    sectionDue,
    sectionTre,
    footer,
    foods,
    categoryList,
    listBtn,
    //working on
    filtersArr
}