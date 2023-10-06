import { Request, Response } from "express";
import { FilmeService } from "../../service/filme/filmeService";

class UpdateFilmeController {

  async handle(request: Request, response: Response) {
    const { id, name, description } = request.body;

    const updateFilmeService = new FilmeService();

    const filme = await updateFilmeService.updateFilme(id, name, description);
    return response.json(filme);
  }
}

export { UpdateFilmeController };