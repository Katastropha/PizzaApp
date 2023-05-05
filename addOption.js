import { menuArray } from "./data.js";
import { addSubmitHandler } from "./addSubmitHandler.js";
import { findOption } from "./findOption.js";
import { addToCard } from "./addToCard.js";

const options = document.querySelector(".container");

export const addOption = () => {
  options.addEventListener("click", (e) => {
    const btnAdd = e.target.closest(".circle");
    const number = Number.parseInt(btnAdd.dataset.plus);
    !btnAdd || addToCard(number);
  });
};
