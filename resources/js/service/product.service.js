import { addProductUrl, editProductUrl, readProductUrl, removeProductUrl } from "../config/constant";
import { authHeader } from "../helper/authHeader";

export const productService = {
	add,
	edit,
	read,
	remove
};

function add(userInput) {
	const body = userInput;
	const headers = authHeader();

	return window.axios.post(addProductUrl, body, { headers: headers })
		.then(
			product => {
				// console.log(user);
				if (product !== undefined && product.data !== undefined) {
					return product.data;
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

	return window.axios.post(editProductUrl, body, { headers: headers })
		.then(
			product => {
				// console.log(user);
				if (product !== undefined && product.data !== undefined) {
					return product.data;
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

	return window.axios.get(readProductUrl, { headers: headers} )
		.then(
			product => {
				// console.log(user);
				if (product !== undefined && product.data !== undefined) {
					return product.data;
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

	return window.axios.post(removeProductUrl, body, { headers: headers })
		.then(
			product => {
				// console.log(user);
				if (product !== undefined && product.data !== undefined) {
					return product.data;
				}
			},
			err => {
				// console.log('error ' + err);
				throw err;
			}
		);
}