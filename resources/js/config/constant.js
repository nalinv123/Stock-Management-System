const baseUrl = 'http://stock.management.to/api/';
export const loginUrl = baseUrl + 'users/authenticate';
export const logoutUrl = baseUrl + 'users/logout';
export const forgotPasswordUrl = baseUrl + 'users/forgot_password';
export const resetPasswordUrl = baseUrl + 'users/reset_password';
export const refreshTokenUrl = baseUrl + 'users/authenticate/refresh';

export const addCategoryUrl = baseUrl + 'category/add';
export const readCategoryUrl = baseUrl + 'category/read';
export const editCategoryUrl = baseUrl + 'category/edit';
export const removeCategoryUrl = baseUrl + 'category/remove';