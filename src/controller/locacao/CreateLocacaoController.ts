import { Request, Response } from "express";
import { LocacaoService } from "../../service/locacao/locacaoService";

class CreateLocacaoController {
  async handle(request: Request, response: Response) {
   const { description,filmes,users} = request.body;
   const Locacao = {
      description:description,
      filmes:filmes,
      users:users
    }; 
    const createLocacaoService  = new LocacaoService();
    const ret = await  createLocacaoService.createLocacao(description,filmes,users);
    return response.json(ret);

  }
}
export { CreateLocacaoController };