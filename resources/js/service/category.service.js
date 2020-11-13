import { addCategoryUrl, readCategoryUrl, editCategoryUrl, removeCategoryUrl } from "../config/constant";
import { authHeader } from "../helper/authHeader";

export const categoryService = {
	add,
	edit,
	read,
	remove
};

function add(userInput) {
	const body = userInput;
	const headers = authHeader();

	return window.axios.post(addCategoryUrl, body, { headers: headers })
		.then(
			category => {
				// console.log(user);
				if (category !== undefined && category.data !== undefined) {
					return category.data;
				}
			},
			err => {
				// console.log('error ' + err);
				throw err;
			}
		);
}

function edit(userInput) {
	const body = userInput;
	const headers = authHeader();

	return window.axios.post(editCategoryUrl, body, { headers: headers })
		.then(
			category => {
				// console.log(user);
				if (category !== undefined && category.data !== undefined) {
					return category.data;
				}
			},
			err => {
				// console.log('error ' + err);
				throw err;
			}
		);
}

function read() {
	const headers = authHeader();

	return window.axios.get(readCategoryUrl, { headers: headers} )
		.then(
			category => {
				// console.log(user);
				if (category !== undefined && category.data !== undefined) {
					return category.data;
				}
			},
			err => {
				// console.log('error ' + err);
				throw err;
			}
		);
}

function remove(userInput) {
	const body = userInput;
	const headers = authHeader();

	return window.axios.post(removeCategoryUrl, body, { headers: headers })
		.then(
			category => {
				// console.log(user);
				if (category !== undefined && category.data !== undefined) {
					return category.data;
				}
			},
			err => {
				// console.log('error ' + err);
				throw err;
			}
		);
}