import { Router } from 'express'
import { createUserController } from '../controllers/users/createUserController.js'
import { getUserByIdController } from '../controllers/users/getUserByIdController.js'
import { validateUser } from '../middlewares/validateSchemas/validateUser.js'

const userRoutes = Router()

userRoutes.post('/', validateUser, createUserController)
userRoutes.get('/:id', getUserByIdController)

export { userRoutes }