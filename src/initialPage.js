
const initialPage = () => {
    const content = document.getElementById("content");

    const titleContainer = document.createElement("div");
    const aboutContainer = document.createElement("div");
    const imageContainer = document.createElement("div");

    titleContainer.setAttribute("id", "title");
    aboutContainer.setAttribute("id", "about");
    imageContainer.setAttribute("id", "image");

    content.appendChild(titleContainer);
    content.appendChild(aboutContainer);
    content.appendChild(imageContainer);

    const title = document.createElement("h1");
    const about = document.createElement("p");
    const image = document.createElement("img");

    image.setAttribute("src", "/");

    about.textContent = "This restaurant is on the 12th floor of a business building. It has everything you need from meat to sea food. We also offer vararity of different alcoholic drinks from wines to cocktails."
    title.textContent = "The restaurant";

    titleContainer.appendChild(title);
    aboutContainer.appendChild(about);
    imageContainer.appendChild(image);
}

export {initialPage};