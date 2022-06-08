import { Router } from 'express'
import { createPostController } from '../controllers/postsControllers.js'
import { UserAuthenticated } from '../middlewares/userAuthenticated.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { PostSchema } from '../schemas/post.schema.js'

const postRoutes = Router()

postRoutes.post('/', validateSchema(PostSchema), UserAuthenticated, createPostController)

export { postRoutes }