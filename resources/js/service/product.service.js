import {
    addProductUrl,
    editProductUrl,
    readProductUrl,
    removeProductUrl,
} from "../config/constant";
import { authHeader } from "../helper/authHeader";

export const productService = {
    add,
    edit,
    read,
    remove,
};

/**
 * Calls the API to create a new product
 * @param {*} userInput
 * @return {Object} Response from API if success
 * @throws {Error}
 */
function add(userInput) {
    const body = userInput;
    const headers = authHeader();

    return window.axios.post(addProductUrl, body, { headers: headers }).then(
        (product) => {
            // console.log(user);
            if (product !== undefined && product.data !== undefined) {
                return product.data;
            }
        },
        (err) => {
            // console.log('error ' + err);
            throw err;
        }
    );
}

/**
 * Calls the API to edit a new product
 * @param {*} userInput
 * @return {Object} Response from API if success
 * @throws {Error}
 */
function edit(userInput) {
    const body = userInput;
    const headers = authHeader();

    return window.axios.post(editProductUrl, body, { headers: headers }).then(
        (product) => {
            // console.log(user);
            if (product !== undefined && product.data !== undefined) {
                return product.data;
            }
        },
        (err) => {
            // console.log('error ' + err);
            throw err;
        }
    );
}

/**
 * Calls the API to fetch products
 * @return {Object} Response from API if success
 * @throws {Error}
 */
function read() {
    const headers = authHeader();

    return window.axios.get(readProductUrl, { headers: headers }).then(
        (product) => {
            // console.log(user);
            if (product !== undefined && product.data !== undefined) {
                return product.data;
            }
        },
        (err) => {
            // console.log('error ' + err);
            throw err;
        }
    );
}

/**
 * Calls the API to remove a product
 * @param {*} userInput
 * @return {Object} Response from API if success
 * @throws {Error}
 */
function remove(userInput) {
    const body = userInput;
    const headers = authHeader();

    return window.axios.post(removeProductUrl, body, { headers: headers }).then(
        (product) => {
            // console.log(user);
            if (product !== undefined && product.data !== undefined) {
                return product.data;
            }
        },
        (err) => {
            // console.log('error ' + err);
            throw err;
        }
    );
}
