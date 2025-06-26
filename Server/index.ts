import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import cors from 'cors';
import { connectDB } from './configs/db';
import * as shoppingListController from './controllers/shoppingList.controller'
import {getAllCategories} from './controllers/category.controller'
import { createUser, loginUser } from './controllers/user.controller';
const router = express.Router()

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/', router);

// Routes
router.get('/categories',getAllCategories)
router.post('/user', createUser)
router.post('/login', loginUser)
router.get('/shopping-lists', shoppingListController.getAll)
router.get('/:id', shoppingListController.getById)
router.post('/shopping-lists', shoppingListController.createList)
router.put('/:id', shoppingListController.update)
router.delete('/:id', shoppingListController.remove)
// router.get('shopping-list/:id/with-user', shoppingListController.getByIdWithUser)
router.get('/shopping-lists/user/:userId', shoppingListController.getByUserId)

connectDB().then(()=> {
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
})
});
