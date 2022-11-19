(() => {
	const refs = {
		openMenuBtn: document.querySelector("[data-menu-open]"),
		closeMenuBtn: document.querySelector("[data-menu-close]"),
		menu: document.querySelector("[data-menu]"),
		cover: document.querySelector("[data-cover]"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

	function toggleMenu() {
		refs.openMenuBtn.classList.toggle("open");
		refs.closeMenuBtn.classList.toggle("close");
		refs.cover.classList.toggle("cover");
		refs.menu.classList.toggle("is-hide");
		document.querySelector('body').classList.toggle('is-hidden');
    }
})();