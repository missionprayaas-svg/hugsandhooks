function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");

}


function enquire(productName) {

    const instagram =
        "https://www.instagram.com/hugs.and.hooks/";

    alert(
        "You selected: " +
        productName +
        "\n\nOpening Hugs & Hooks Instagram..."
    );

    window.open(instagram, "_blank");

}
