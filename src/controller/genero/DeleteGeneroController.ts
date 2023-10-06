import { Request, Response } from "express";
import { GeneroService } from "../../service/genero/generoService";

class DeleteGeneroController {
  async handle(request: Request, response: Response) {
    const deleteGeneroService = new GeneroService();
    const name = request.params.name;
    const Genero = await deleteGeneroService.deleteGenero(name);

    return response.json(Genero);
  }
}

export { DeleteGeneroController };