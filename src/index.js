import { menuPage } from "./menuPage";
import { aboutPage } from "./aboutPage";
import { initialPage } from "./initialPage";

const content = document.getElementById("content");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

home.addEventListener("click", () => {
    clearContent();
    initialPage();
});

menu.addEventListener("click", () => {
    clearContent();
    menuPage();
});

about.addEventListener("click", () => {
    clearContent();
    aboutPage();
});

function clearContent() {
    // Remove all child nodes from the content element
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

initialPage();
