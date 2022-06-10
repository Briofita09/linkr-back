import { createLikeService, getLikeService } from "../services/likeServices.js";

async function createLikeController(req, res) {
  const { id } = req.user;
  const { postId } = req.params;

  const like = await createLikeService({ id, postId });

  return res.sendStatus(201);
}

async function getLikeController(req, res) {
  const { id } = req.user;
  const { postId } = req.params;

  const like = await getLikeService(postId);

  like
    ? res.status(200).json(like)
    : res.status(404).json({ msg: "Post não encontrado" });
}

export { createLikeController, getLikeController };
