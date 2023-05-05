//MEAL DISCOUNT
export const isMeal = (arr) => {
  return arr.find((el) => el.name === "Beer") ? true : false;
};

export const getTotalPrice = (arr) => {
  const regular = arr.reduce((a, c) => a + c.price, 0);
  const meal = regular - (regular / 100) * 15;

  return isMeal(arr)
    ? `<div class="total"><span>Total price:</span> <span class="meal-discount">discount 15% </span><span>$${meal}</span></div>`
    : `<div class="total"><span>Total price:</span> <span>$${regular}</span></div>`;
};
