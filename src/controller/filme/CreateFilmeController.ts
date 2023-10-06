import { Request, Response } from "express";
import { FilmeService } from "../../service/filme/filmeService";
class CreateFilmeController {
  async handle(request: Request, response: Response) {
   const { name, description } = request.body;
   const filme = {
      name:name,
      description:description
    }; 
    const createFilmeService  = new FilmeService();
    const ret = await  createFilmeService.createFilme(filme.name, filme.description);
    return response.json(ret);

  }
}
export { CreateFilmeController };