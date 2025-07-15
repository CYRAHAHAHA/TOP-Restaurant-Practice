// index.js
import initialPage from "./initial.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import "./styles.css";

console.log("hello world");

// index.js
function setActiveTab(button) {
    document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

function clearContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ""; 
}

document.querySelector("button:nth-child(1)").addEventListener("click", (e) => {
    clearContent();
    initialPage();
    setActiveTab(e.target);
});

document.querySelector("button:nth-child(2)").addEventListener("click", (e) => {
    clearContent();
    loadMenu();
    setActiveTab(e.target);
});

document.querySelector("button:nth-child(3)").addEventListener("click", (e) => {
    clearContent();
    loadContact();
    setActiveTab(e.target);
});

initialPage(); // Call the function to load the initial content