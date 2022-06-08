import { getUserService } from "../../services/users/getUserService.js";

export const getUserByIdController = async (req, res) => {
    const { id } = req.params;
    const user = await getUserService({ id })
    return res.status(200).json(user);
}