import { post, get } from "../../util/http";

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


/**
 *  index component
 *  get user count
 */

export const getUserCount = () => get("/admin/admin/getCount")