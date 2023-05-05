import { menuArray } from "./data.js";

const container = document.querySelector(".container");

const getMenuHtml = () => {
  let content = ``;

  menuArray.forEach(({ name, ingredients, id, price, emoji }) => {
    content += `
            <div class="options-for-card">            
                <div class="option-data">
                    <div class="option-img">
                        <span>${emoji}</span>
                    </div>                    
                    <div class="option">
                        <h3 class="option-name">${name}</h3>
                        <p class="option-ingredients">${ingredients.join(
                          ", "
                        )}</p>
                        <p class="option-price">$${price}</p>
                    </div>                
                </div>
                <div class="circle" data-plus="${id}">                
                    <span class="icon icon-plus"></span>
                </div>                
            </div>
        `;
  });

  return content;
};

export const render = () => {
  container.innerHTML = getMenuHtml();
};
