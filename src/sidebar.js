import { 
    content,
    listBtn
} from './home_page';

console.log(listBtn);

listBtn.onclick = () => {
    const sidebar = document.createElement('div');
    const xButton = document.createElement('button');
    const linksArr = [];
    const socials = document.createElement('div');
    const socialsArr = [];

    for(let i=0; i<5; i++){
        const aLink = document.createElement('a');
        const aSoc = document.createElement('a');
        const icon = document.createElement('i');

        aLink.href = "#";
        aSoc.href = "#";
        aSoc.classList.add('circle');
        icon.classList.add('fa-brands');
        aSoc.appendChild(icon);

        linksArr[i] = aLink;
        socialsArr[i] = aSoc;

    }
    sidebar.classList.add("sidebar");
    xButton.textContent = "×";
    linksArr[0].textContent = "Menu";
    linksArr[1].textContent = "Locations";
    linksArr[2].textContent = "Bookings";
    linksArr[3].textContent = "Careers";
    linksArr[4].textContent = "Contact";
    socials.classList.add("socials");
    socialsArr[0].firstElementChild.classList.add('fa-facebook-f');
    socialsArr[1].firstElementChild.classList.add('fa-instagram');
    socialsArr[2].firstElementChild.classList.add('fa-github');
    socialsArr[3].firstElementChild.classList.add('fa-youtube');
    socialsArr[4].firstElementChild.classList.add('fa-twitter');

    socialsArr.forEach(el => socials.appendChild(el));

    sidebar.appendChild(xButton);
    linksArr.forEach(el => sidebar.appendChild(el));
    sidebar.appendChild(socials);

    content.innerHTML = "";
    content.appendChild(sidebar);
    // content.insertBefore(sidebar, content.firstElementChild)
    console.log(content.firstElementChild)
}