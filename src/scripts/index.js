import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "../styles/responsive.scss";
import { restaurants } from "../DATA.json";

const navDrawer = document.querySelector(".drawer");
const openDrawerButton = document.querySelector(".hamburger__button");
const closeDrawerButton = document.querySelector(".close__button");

openDrawerButton.addEventListener("click", () => {
  navDrawer.classList.add("open");
});

closeDrawerButton.addEventListener("click", () => {
  navDrawer.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", () => {
  const articlesList = document.querySelector(".articles");
  articlesList.innerHTML = "";
  restaurants.forEach((restaurant) => {
    const articleItem = document.createElement('article');
    articleItem.classList.add('article-item');
    articleItem.innerHTML = `
    <img class="article-item__thumbnail" src="${restaurant.pictureId}" alt="${restaurant.name}">
        <div class="article-item__content">
            <div class="article-item__header">
              <h3 class="article-item__title"><a href="#">${restaurant.name}</a></h3>
              <div class="article-item__location">
                <img src="./images/icons/ic_location.svg" alt="location icon">
                <span>${restaurant.city}</span>
              </div>
            </div>
            <p class="article-item__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...</p>
            <div class="article-item__rating">
                <img src="./images/icons/ic_star.svg" alt="star icon">
                <span>${restaurant.rating}</span>
            </div>
        </div>
    `;
    articlesList.appendChild(articleItem);
  });
});
