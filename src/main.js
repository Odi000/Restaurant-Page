console.log('Its working \nYes it is');
import './styles.css';

const head = document.head;
head.appendChild(linkFontAwesome());

function linkFontAwesome() {
    const link = document.createElement('link');
    
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css";
    return link;
}

const sideBarBtn = document.querySelector('.list');

sideBarBtn.onclick = () => {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'block';
    setTimeout(()=> sideBar.classList.add('active'), 10);
}
console.log(sideBarBtn)