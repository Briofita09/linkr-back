import { Router } from 'express'
import { createUserController, getUserByIdController } from '../controllers/usersControllers.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { UserSchema } from '../schemas/user.schema.js'

const userRoutes = Router()

userRoutes.post('/', validateSchema(UserSchema), createUserController)
userRoutes.get('/:id', getUserByIdController)

export { userRoutes }