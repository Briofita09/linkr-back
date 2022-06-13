import {
  createCommentService,
  getCommentsService,
} from "../services/commentService.js";

async function createCommentController(req, res) {
  const { id } = req.user;
  const { text } = req.body;
  const { postId } = req.params;

  const comment = await createCommentService({ id, text, postId });

  return res.status(201).json(comment);
}

async function getCommentsController(req, res) {
  const { postId } = req.params;

  const comment = await getCommentsService({ postId });

  return res.status(200).json(comment);
}

export { createCommentController, getCommentsController };
