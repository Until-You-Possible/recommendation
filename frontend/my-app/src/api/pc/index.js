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
 *  get user/category/shop/seller count
 */

export const getUserCount = () => get("/admin/admin/getCount")
export const getShopCount = () => get("/admin/shop/get_all_shop")
export const getSellerCount = () => get("/admin/seller/getAllSeller")
export const getCategoryCount = () => get("/admin/category/get_all_category")

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


/**
 *  add new category
 *
 */

export const addCategory = (params) => post("/admin/category/creat", params)


/**
 *  get current category
 *
 */

export const getCurrentCategory = (params) => get("/admin/category/get_current", params)


/**
 *  get current category
 *
 */

export const getCategoryList = (params) => get("/admin/category/get_all_category", params)


/**
 *  get all shop
 *
 */

export const getShopList = (params) => get("/admin/shop/get_all_shop", params)

/**
 *  get all shop
 *
 */

export const getCurrentShop = (params) => get("/admin/shop/get_current", params)

/**
 *  create new shop
 *
 */

export const createShop = (params) => post("/admin/shop/creat", params)
