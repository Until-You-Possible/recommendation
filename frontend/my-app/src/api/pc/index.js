import { post } from "../../util/http";

/**
 *  login
 * @type {function(*=): *}
 */

export const getLogin = (params) => post("/admin/admin/login", params)

/**
 *  logout
 * @type {function(*=): *}
 */

export const getLogOut = () => post("/admin/admin/logout")