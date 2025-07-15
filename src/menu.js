// menu.js
export default function loadMenu() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h1>Menu</h1>
        <p>Explore our authentic Singaporean dishes!</p>
        <div class="menu-grid">
            <div class="menu-item">
                <span>Hainanese Chicken Rice</span>
                <span>$8.50</span>
            </div>
            <div class="menu-item">
                <span>Chilli Crab</span>
                <span>$25.00</span>
            </div>
            <div class="menu-item">
                <span>Laksa</span>
                <span>$10.00</span>
            </div>
            <div class="menu-item">
                <span>Char Kway Teow</span>
                <span>$7.50</span>
            </div>
            <div class="menu-item">
                <span>Satay</span>
                <span>$12.00</span>
            </div>
            <div class="menu-item">
                <span>Roti Prata</span>
                <span>$5.00</span>
            </div>
            <div class="menu-item">
                <span>Bak Kut Teh</span>
                <span>$15.00</span>
            </div>
            <div class="menu-item">
                <span>Kaya Toast</span>
                <span>$4.50</span>
            </div>
        </div>
    `;
}