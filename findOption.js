import { menuArray } from "./data.js";
import { generatId } from "./generateId.js";

export const findOption = (num) => {
  const obj = menuArray.find((option) => option.id === num);
  return { name: obj.name, price: obj.price, id: generatId() };
};
