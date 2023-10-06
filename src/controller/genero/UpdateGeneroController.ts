import { Request, Response } from "express";
import { GeneroService } from "../../service/genero/generoService";

class UpdateGeneroController {

  async handle(request: Request, response: Response) {
    const { id, name } = request.body;

    const updateGeneroService = new GeneroService();

    const Genero = await updateGeneroService.updateGenero(id, name);
    return response.json(Genero);
  }
}

export { UpdateGeneroController };