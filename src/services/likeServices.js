import * as likeRepository from "../database/repositories/likes.repository.js";

async function createLikeService({ id, postId }) {
  const like = await likeRepository.create({ id, postId });
  return like;
}

async function getLikeService(postId) {
  const like = await likeRepository.getAll(postId);

  return like;
}

export { createLikeService, getLikeService };
