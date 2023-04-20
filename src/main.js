import './styles.css';
import {
    content,
    background,
    sectionUno,
    sectionDue,
    sectionTre,
    footer,
} from './home_page';
import './foods';
import './sidebar';

//Main Page Build
content.appendChild(background);
content.appendChild(sectionUno());
content.appendChild(sectionDue());
content.appendChild(sectionTre());
content.appendChild(footer());