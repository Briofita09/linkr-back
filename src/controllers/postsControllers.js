import { createPostService, deletePostService, getAllPostService, updatePostService } from "../services/postServices.js";

export const createPostController = async (req, res) => {
    const { text, url } = req.body;
    const { id } = req.user;

    await createPostService({ text, url, userId: id });

    return res.status(200).json({ message: 'Post criado com sucesso' });
}

export const getAllPostsController = async (req, res) => {
    const { id } = req.user;

    const posts = await getAllPostService({ userId: id });

    return res.status(200).json(posts);
}

export const updatePostController = async (req, res) => {
    const { id } = req.params;
    const { text, url } = req.body;

    const result = await updatePostService(id, { text, url });

    return res.status(200).json(result);
}

export const deletePostController = async (req, res) => {
    const { id } = req.params;

    const result = await deletePostService(id);

    return res.status(200).json(result);
}