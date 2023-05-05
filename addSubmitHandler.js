import { clearOrders } from "./addToCard.js";

export const addSubmitHandler = () => {
  const formDisplay = document.querySelector(".modal");
  const formPay = document.querySelector(".form-data");
  const orderCompleted = document.querySelector(".order-completed");

  const formName = document.querySelector(".form-name");
  const formCardNumber = document.querySelector(".form-card-number");
  const formCvv = document.querySelector(".form-cvv");

  formPay.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formName.value) {
      let message = `<p class="message">Thanks, ${formName.value}! Your order is on its way!</p>`;
      formDisplay.style.display = "none";
      orderCompleted.style.background = "#ECFDF5";
      clearOrders();
      orderCompleted.innerHTML = message;
    }
  });
};
