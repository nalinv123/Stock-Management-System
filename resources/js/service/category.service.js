import {
    addCategoryUrl,
    readCategoryUrl,
    editCategoryUrl,
    removeCategoryUrl,
} from "../config/constant";
import { authHeader } from "../helper/authHeader";

export const categoryService = {
    add,
    edit,
    read,
    remove,
};

/**
 * Calls the API to create a new category
 * @param {*} userInput
 * @return {Object} Response from API if success
 * @throws {Error}
 */
function add(userInput) {
    const body = userInput;
    const headers = authHeader();

    return window.axios.post(addCategoryUrl, body, { headers: headers }).then(
        (category) => {
            // console.log(user);
            if (category !== undefined && category.data !== undefined) {
                return category.data;
            }
        },
        (err) => {
            // console.log('error ' + err);
            throw err;
        }
    );
}

/**
 * Calls the API to edit a new category
 * @param {*} userInput
 * @return {Object} Response from API if success
 * @throws {Error}
 */
function edit(userInput) {
    const body = userInput;
    const headers = authHeader();

    return window.axios.post(editCategoryUrl, body, { headers: headers }).then(
        (category) => {
            // console.log(user);
            if (category !== undefined && category.data !== undefined) {
                return category.data;
            }
        },
        (err) => {
            // console.log('error ' + err);
            throw err;
        }
    );
}

/**
 * Calls the API to fetch category
 * @return {Object} Response from API if success
 * @throws {Error}
 */
function read() {
    const headers = authHeader();

    return window.axios.get(readCategoryUrl, { headers: headers }).then(
        (category) => {
            // console.log(user);
            if (category !== undefined && category.data !== undefined) {
                return category.data;
            }
        },
        (err) => {
            // console.log('error ' + err);
            throw err;
        }
    );
}

/**
 * Calls the API to remove a category
 * @param {*} userInput
 * @return {Object} Response from API if success
 * @throws {Error}
 */
function remove(userInput) {
    const body = userInput;
    const headers = authHeader();

    return window.axios
        .post(removeCategoryUrl, body, { headers: headers })
        .then(
            (category) => {
                // console.log(user);
                if (category !== undefined && category.data !== undefined) {
                    return category.data;
                }
            },
            (err) => {
                // console.log('error ' + err);
                throw err;
            }
        );
}
