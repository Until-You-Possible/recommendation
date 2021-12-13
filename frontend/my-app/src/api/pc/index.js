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


/**
 * seller component
 * add seller
 */

export const addSeller = (params) => post("/admin/seller/create_seller",  params)

/**
 * seller component
 * get current seller
 */

export const getSeller = (params) => get("/admin/seller/checkCurrent", params)

/**
 * seller component
 * get all seller
 */

export const getAllSeller = (params) => get("/admin/seller/getAllSeller", params)

/**
 * seller component
 * down seller
 */

export const downSeller = (params) => get("/admin/seller/down", params)

/**
 * seller component
 * up seller
 */

export const upSeller = (params) => get("/admin/seller/up", params)
