(() => {
    const refs = {
        openMenuBtn: document.querySelector('[data-menu-open]'),
        closeMenuBtn: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-menu]'),
        cover: document.querySelector('[data-cover]'),
        links: document.querySelectorAll('.navigation__link'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.links.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    function toggleMenu() {
        if (window.innerWidth < 1280) {
            const isOpened = refs.openMenuBtn.getAttribute('data-menu-open');
            if (isOpened === 'false') {
                refs.openMenuBtn.setAttribute('data-menu-open', 'true');
                refs.closeMenuBtn.setAttribute('data-menu-close', 'false');
            } else {
                refs.openMenuBtn.setAttribute('data-menu-open', 'false');
                refs.closeMenuBtn.setAttribute('data-menu-close', 'true');
            }

            refs.cover.classList.toggle('cover');
            refs.menu.classList.toggle('is-hide');
            document.querySelector('body').classList.toggle('is-hidden');
        }
        return;
    }
})();
