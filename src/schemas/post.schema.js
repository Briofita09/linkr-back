import joi from 'joi';

export const PostSchema = joi.object({
    text: joi.string().required(),
    url: joi.string().required()
});