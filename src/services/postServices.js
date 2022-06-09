import * as PostRepository from '../database/repositories/posts.repository.js';
import { AppError } from '../errors/appError.js';

export const createPostService = async ({ userId, text, url }) => {
    const post = await PostRepository.create({ userId, text, url });
    return post;
}

export const getAllPostService = async (params) => {
    const queries = []
    for (const key in params) {
        queries.push({ attr: key, value: params[key] })
    }
    const posts = await PostRepository.findAll(queries, 'OR');
    return posts;
}

export const updatePostService = async (id, new_data) => {
    const queries = [{ attr: 'id', value: id }]

    const post = await PostRepository.findOne(queries, 'AND');
    if (!post) throw new AppError('Post não encontrado', 404, 'id');
    post.text = new_data.text || post.text;
    post.url = new_data.url || post.url;

    await PostRepository.update(post);
    return { message: "Post atualizado com sucesso" };
}

export const deletePostService = async (id) => {
    const queries = [{ attr: 'id', value: id }]

    const post = await PostRepository.findOne(queries, 'AND');
    if (!post) throw new AppError('Post não encontrado', 404, 'id');

    await PostRepository.deleteById(id);
    return { message: "Post deletado com sucesso" };
}