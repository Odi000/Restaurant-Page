import {
    content,
    listBtn
} from './home_page';

listBtn.onclick = () => {
    const sidebar = document.createElement('div');
    const xButton = document.createElement('button');
    const x = document.createElement('div');
    const linksArr = [];
    const socials = document.createElement('div');
    const socialsArr = [];
    const copyrights = document.createElement('p');

    for (let i = 0; i < 5; i++) {
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
    x.textContent = "×";
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
    copyrights.textContent = "© Copyright Dzo 2023.";

    linksArr[0].onclick = () => {
        closeSidebar();
        setTimeout(() => {
            document.querySelector('.due').scrollIntoView({
                behavior: "smooth",
            })
        }, 525);
    }

    xButton.appendChild(x);
    xButton.onclick = closeSidebar;

    socialsArr.forEach(el => socials.appendChild(el));

    sidebar.appendChild(xButton);
    linksArr.forEach(el => sidebar.appendChild(el));
    sidebar.appendChild(socials);
    sidebar.appendChild(copyrights);

    content.style.height = "100vh";
    content.style.overflow = "hidden";
    content.appendChild(sidebar);

    setTimeout(() => sidebar.classList.add("opening"), 10);
    sidebar.addEventListener('transitionend', openSidebar);

    // Event listeners callback functions
    function openSidebar(e) {
        if (e.propertyName === 'background-color') {
            if (sidebar.classList.contains('opened')) {
                sidebar.classList.add("active");
                sidebar.removeEventListener("transitionend", openSidebar);
                return;
            }
            sidebar.classList.remove('opening');
            sidebar.classList.add('opened');
        }
    }

    function closeSidebar() {
        sidebar.removeEventListener("transitionend", openSidebar);
        sidebar.classList.remove('active');
        setTimeout(() => {
            sidebar.classList.remove('opened');
            setTimeout(() => {
                sidebar.remove();
                content.style.cssText = "";
            }, 250);
        }, 250)
    }
}