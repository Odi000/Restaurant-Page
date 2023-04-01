import './styles.css';
import {
    content,
    background,
    sectionUno,
    sectionDue,
    sectionTre,
    footer,
} from './home_page';
import {
    starterMeals,
    salads
} from './foods';

//Main Page Build
content.appendChild(background);
content.appendChild(sectionUno());

// content.appendChild((()=>{
//     const div = document.createElement('div');
//     const insideDiv = document.createElement('div');

//     // div.style.height = "350px";
//     div.style.padding = "1.5rem 1.5rem";
//     div.style.background = "rgba(0,255,0,0.4)";

//     insideDiv.style.background = "grey";
//     insideDiv.style.height = "300px";
//     insideDiv.style.opacity = "0.7";

//     div.appendChild(insideDiv);

//     return div;
// })())

content.appendChild(sectionDue());
content.appendChild(sectionTre());
content.appendChild(footer());    

//Food List
