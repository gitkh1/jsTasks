const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = window.getComputedStyle(itemsList);
const items = document.querySelectorAll(".item");

const step = parseInt(window.getComputedStyle(items[0]).width);
const preShowItems = 300 / step;
const minRight = 0;
const maxRight = (items.length - preShowItems) * step;
let currentRight = 0;

itemsList.style.right = currentRight;

rightBtn.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        itemsList.style.right = `${currentRight}px`;
    }
});

leftBtn.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight > minRight) {
        currentRight -= step;
        itemsList.style.right = `${currentRight}px`;
    }
});



/*
rightBtn.addEventListener("click", e => {
    e.preventDefault();

    let currentRight = parseInt(computedStyles.right);

    if (currentRight < 500) {
        currentRight += 100;
    }

    items.style.right = `${currentRight}px`;
});

leftBtn.addEventListener("click", e => {
    e.preventDefault();

    let currentRight = parseInt(computedStyles.right);

    if (currentRight > 0) {
        currentRight -= 100;
    }

    items.style.right = `${currentRight}px`;
});
*/