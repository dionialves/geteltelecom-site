
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu-mobile");
    const menuIcon = document.getElementById("menu-icon");
    const menuItems = document.querySelectorAll("#menu-mobile a");
    const menuToggleContainer = document.querySelector(".menu-toggle");


    const iconHamburger = "M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z";
    const iconClose = "M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"

    // Quando o botão do menu (ícone hambúrguer) for clicado...
    menuToggle.addEventListener("click", function () {
        // Alterna a classe 'active' no menu (mostra ou esconde o menu mobile)
        menu.classList.toggle("active");

        // Chama a função que alterna o ícone e atualiza o estado (aria-expanded)
        toggleMenu();
    });

    // Função responsável por alternar o ícone e o atributo de acessibilidade
    function toggleMenu() {
        // Verifica se o menu está atualmente aberto com base no atributo aria-expanded
        const isOpen = menuToggleContainer.getAttribute("aria-expanded") === "true";

        // Atualiza o ícone SVG: se está aberto, mostra o ícone de "hambúrguer"; senão, mostra o "X"
        menuIcon.querySelector("path").setAttribute("d", isOpen ? iconHamburger : iconClose);

        // Atualiza o atributo 'aria-expanded' para refletir o novo estado (aberto ou fechado)
        menuToggleContainer.setAttribute("aria-expanded", isOpen ? "false" : "true");
    }

    // Para cada link do menu mobile...
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            // Fecha o menu removendo a classe 'active'
            menu.classList.remove("active");

            // Atualiza o ícone e o atributo aria-expanded
            toggleMenu();
        });
    });
});
