import joi from "joi";

export const CommentSchema = joi.object({
  text: joi.string().required(),
});
