import { Request, Response } from "express";
import { DeleteUserService } from "../../service/user/DeleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const deleteUserService = new DeleteUserService();
    const id = request.params.id;

    try {
      await deleteUserService.execute(id);
      return response.json({ message: "Usuário excluído com sucesso" });
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { DeleteUserController };
