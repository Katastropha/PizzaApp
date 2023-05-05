import { findOption } from "./findOption.js";
import { getTotalPrice } from "./getMealDiscount.js";

const orderData = document.querySelector(".order-data");
const modal = document.querySelector(".modal");
let orders = [];

export const addToCard = (num) => {
  const obj = findOption(num);
  orders.push(obj);
  orderHtml();
};

// FEED HTML
const orderHtml = () => {
  let orderDetailsHtml = ``;
  let totalPrice = getTotalPrice(orders);

  const orderBtnHtml = `<button class="btn complete-order">Complete Order</button>`;

  orders.forEach(({ name, price, id }) => {
    orderDetailsHtml += `
            <div class="option-order">
                <span><span class="order-name"> ${name} </span>  <span class="remove"  data-remove="${id}">remove</span></span><span class="order-price">$${price} </span>
            </div>`;
  });
  orders.length > 0
    ? (orderData.innerHTML = `<h3>Your Order</h3> ${orderDetailsHtml} ${totalPrice} ${orderBtnHtml}`)
    : (orderData.innerHTML = ``);
};

// EVENT LISTENERS
document.addEventListener("click", (e) => {
  const btnCompleteOrder = e.target.closest(".complete-order");
  !btnCompleteOrder || (modal.style.display = "flex");
});
//
document.addEventListener("click", (e) => {
  const del = e.target.closest(".remove");
  if (del) {
    const id = Number.parseInt(del.dataset.remove);
    !del || removeOption(id);
  }
});

// CLEAR
export const clearOrders = () => {
  orders = [];
  orderHtml();
};

// REMOVE OPTION
const removeOption = (id) => {
  orders = orders.filter((el) => el.id !== id);
  orderHtml();
};
