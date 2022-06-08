import { getUserByIdService } from "../../services/users/getUserByIdService.js";

export const getUserByIdController = async (req, res) => {
    const { id } = req.params;
    const user = await getUserByIdService({ id })
    return res.status(200).json(user);
}