const express = require('express');

const createPostController = require('../controllers/posts/create');
const homePageController = require('../controllers/homePage');
const storePostController = require('../controllers/posts/store');
const createCategoryController = require('../controllers/categories/create');
const storeCategoryController = require('../controllers/categories/store');
const deletePostController = require('../controllers/posts/delete');
const deleteCategoryController = require('../controllers/categories/delete');
const deleteUserController = require('../controllers/user/delete');
const getPostController = require('../controllers/posts/get');
const getPostsByCategoryController = require('../controllers/posts/category');
const getUserController = require('../controllers/user/get');
const editController = require('../controllers/posts/edit');
const categoryListingController = require('../controllers/categories/list');
const postEditController = require('../controllers/posts/change');
const editCategoryController = require('../controllers/categories/edit');
const storeEditCategoryController = require('../controllers/categories/change');
const userEditController = require('../controllers/user/edit');
const storeUserEditController = require('../controllers/user/change');
const createUserController = require('../controllers/user/create');
const storeUserController = require('../controllers/user/store');
const loginController = require('../controllers/login');
const loginUserController = require('../controllers/user/login');
const logoutController = require('../controllers/logout');
const postListController = require('../controllers/posts/list');

const storePost = require('../middleware/storePost')
const storeCategory = require('../middleware/storeCategory')
const auth = require("../middleware/auth");
const redirectIfAuthenticated = require("../middleware/redirectIfAuthenticated");

module.exports = (app) => {

app.use('/api/posts/store', storePost)
app.use('/api/categories/store', storeCategory)

app.get('/api/homepage', homePageController);
app.get("/api/admin", auth, postListController);
// Posts routes
app.get('/api/post/:title', getPostController);
app.get('/api/posts/new', auth, createPostController);
app.post("/api/posts/store", auth, storePostController);
app.get("/api/edit/:post", auth, editController);
app.post("/api/post/edit/:id", auth, postEditController);
app.get("/api/post/delete/:id", auth, deletePostController);
// Categories routes
app.get('/api/categories/new', auth, createCategoryController);
app.post("/api/categories/store", auth, storeCategoryController);
app.get('/api/categories/:category', getPostsByCategoryController);
app.get('/api/category/list', auth, categoryListingController);
app.get("/api/category/edit/:title", auth, editCategoryController);
app.post("/api/category/change/:id", auth, storeEditCategoryController);
app.get("/api/category/delete/:id", auth, deleteCategoryController);
// User routes
app.get('/api/user', auth, getUserController);
app.get("/api/auth/login", redirectIfAuthenticated, loginController);
app.post("/api/users/login", redirectIfAuthenticated, loginUserController);
app.get("/api/auth/register", redirectIfAuthenticated, createUserController);
app.post("/api/users/register", redirectIfAuthenticated, storeUserController);
app.get("/api/user/edit/:id", auth, storeUserEditController);
app.post("/api/user/edit", auth, userEditController);
app.get("/api/auth/logout", logoutController);
app.get("/api/user/delete/:id", auth, deleteUserController);
}
