import { Request, Response } from "express";
import { FilmeService } from "../../service/filme/filmeService";
class CreateFilmeController {
  async handle(request: Request, response: Response) {
   const { name, description, genero} = request.body;
   const filme = {
      name:name,
      description:description,
      genero:genero
    }; 
    const createFilmeService  = new FilmeService();
    const ret = await  createFilmeService.createFilme(name, description, genero);
    return response.json(ret);

  }
}
export { CreateFilmeController };