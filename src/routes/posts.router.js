import { Router } from 'express'
import { createPostController, deletePostController, getAllPostsController, updatePostController } from '../controllers/postsControllers.js'
import { UserAuthenticated } from '../middlewares/userAuthenticated.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { PostSchema } from '../schemas/post.schema.js'

const postRoutes = Router()

postRoutes.post('/', validateSchema(PostSchema), UserAuthenticated, createPostController)
postRoutes.get('/', UserAuthenticated, getAllPostsController)
postRoutes.put('/:id', validateSchema(PostSchema), UserAuthenticated, updatePostController)
postRoutes.delete('/:id', UserAuthenticated, deletePostController)

export { postRoutes }