import { Router } from "express";
import { UserAuthenticated } from "../middlewares/userAuthenticated";
import { validateSchema } from "../middlewares/validateSchema";
import { CommentSchema } from "../schemas/comment.schema";
import {
  createCommentController,
  getCommentsController,
} from "../controllers/commentControllers.js";

const commentRoutes = Router();

commentRoutes.post(
  "/:postId",
  validateSchema(CommentSchema),
  UserAuthenticated,
  createCommentController
);
commentRoutes.get("/:postId", UserAuthenticated, getCommentsController);

export { commentRoutes };
