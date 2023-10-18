const menuPage = () => {
    const content = document.getElementById("content");

    const appetizerCont = document.createElement("div");
    const mainCont = document.createElement("div");
    const dessertCont = document.createElement("div");

    content.appendChild(appetizerCont);
    content.appendChild(mainCont);
    content.appendChild(dessertCont);

    const appetizer = document.createElement("p");
    const main = document.createElement("p");
    const dessert = document.createElement("p");

    appetizer.textContent = "Tagliata";
    main.textContent = "Steak";
    dessert.textContent = "Cheesecake";

    appetizerCont.appendChild(appetizer);
    mainCont.appendChild(main);
    dessertCont.appendChild(dessert);
}

export { menuPage };