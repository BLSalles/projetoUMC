import { Request, Response } from "express";
import { GeneroService } from "../../service/genero/generoService";
class CreateGeneroController {
  async handle(request: Request, response: Response) {
   const { name } = request.body;
   const Genero = {
      name:name
    }; 
    const createGeneroService  = new GeneroService();
    const ret = await  createGeneroService.createGenero(Genero.name);
    return response.json(ret);

  }
}
export { CreateGeneroController };