import * as commentRepository from "../database/repositories/comments.repository.js";

async function getCommentsService({ postId }) {
  const comments = await commentRepository.getAll(postId);

  if (!comments) return null;

  return comments;
}

async function createCommentService({ id, text, postId }) {
  const comments = await commentRepository.create(id, text, postId);

  return comments;
}

export { getCommentsService, createCommentService };
