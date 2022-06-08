import * as PostRepository from '../database/repositories/posts.repository.js';

export const createPostService = async ({ userId, text, url }) => {
    const post = await PostRepository.create({ userId, text, url });
    return post;
}

export const findAllPostService = async (params) => {
    const queries = []
    for (const key in params) {
        queries.push({ attr: key, value: params[key] })
    }
    const posts = await PostRepository.findAll(conditionals, type);
    return posts;
}