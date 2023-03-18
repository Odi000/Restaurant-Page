const sideBarBtn = document.querySelector('.list');

sideBarBtn.onclick = () => {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'block';
    setTimeout(()=> sideBar.classList.add('opening'), 10);
    sideBar.addEventListener('transitionend', (e)=> {
        if (e.propertyName === 'background-color') {
            sideBar.classList.remove('opening');
            sideBar.classList.add('opened');
        };
    })
}