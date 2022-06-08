import { Router } from 'express'
import { loginController } from '../controllers/generalControllers.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { LoginSchema } from '../schemas/login.shema.js'
import { postRoutes } from './posts.router.js'
import { userRoutes } from './users.router.js'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/posts', postRoutes)

routes.use('/login', validateSchema(LoginSchema), loginController)

export { routes }