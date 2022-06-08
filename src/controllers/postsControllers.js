import { createPostService } from "../services/postServices.js";

export const createPostController = async (req, res) => {
    const { text, url } = req.body;
    const { id } = req.user;
    
    const post = await createPostService({ text, url, userId: id });

    return res.status(200).json(post);
}