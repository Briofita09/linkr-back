import { Router } from "express";
import {
  createLikeController,
  getLikeController,
} from "../controllers/likesController.js";
import { UserAuthenticated } from "../middlewares/userAuthenticated.js";

const likeRoutes = Router();

likeRoutes.post("/:postId", UserAuthenticated, createLikeController);
likeRoutes.get("/:postId", UserAuthenticated, getLikeController);

export { likeRoutes };
