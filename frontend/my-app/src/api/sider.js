 import { get } from "../util/http";

 /**
  *  getSiderMenu
  * @type {function(*=): *}
  */

 export const getSiderMenu = (params) => get("/docs/api/api-index.json", params)