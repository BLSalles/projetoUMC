import { Request, Response } from "express";
import { FilmeService } from "../../service/filme/filmeService";

class DeleteFilmeController {
  async handle(request: Request, response: Response) {
    const deleteFilmeService = new FilmeService();
    const name = request.params.nome;
    const filme = await deleteFilmeService.deleteFilme(name);

    return response.json(filme);
  }
}

export { DeleteFilmeController };