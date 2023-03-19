import './styles.css';

const head = document.head;
head.appendChild(linkFontAwesome());

function linkFontAwesome() {
    const link = document.createElement('link');

    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css";
    return link;
}

/*-- Main Page --*/
const content = document.getElementById('content');

//---Background----
const background = document.createElement('div');
const bkgImg = new Image();
background.classList.add("background");
bkgImg.src = "../Images/Second-Background.jpg";
background.appendChild(bkgImg);

//---Section Uno---
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

//filling the arrays
for (let i = 0; i < 4; i++) {
    optionsArr.push(document.createElement('div'));
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

sectionUno.appendChild(header);

content.innerHTML = "";
content.appendChild(background);
content.appendChild(sectionUno);
console.log(sectionUno)