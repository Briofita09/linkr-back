import { Router } from 'express'
import { loginController } from '../controllers/general/loginController.js'
import { validateLogin } from '../middlewares/validateSchemas/validateLogin.js'
import { userRoutes } from './users.router.js'

const routes = Router()

routes.use('/users', userRoutes)

routes.use('/login', validateLogin, loginController)

export { routes }