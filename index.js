import { menuArray } from "./data.js";
import { render } from "./getMenuHtml.js";
import { addSubmitHandler } from "./addSubmitHandler.js";
import { generatId } from "./generateId.js";
import { findOption } from "./findOption.js";
import { addOption } from "./addOption.js";

addSubmitHandler();
render();

addOption();
