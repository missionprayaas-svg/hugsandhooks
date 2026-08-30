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
        "\n\nYou can contact Hugs & Hooks through Instagram."
    );

    window.open(instagram, "_blank");

}


function openWhatsApp() {

    /*
       WE WILL ADD YOUR HUGS & HOOKS
       WHATSAPP BUSINESS NUMBER HERE LATER.
    */

    alert(
        "Hugs & Hooks WhatsApp will be connected here."
    );

}
