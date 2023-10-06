import { Request, Response } from "express";
import { LocacaoService } from "../../service/locacao/locacaoService";

class CreateLocacaoController {
  async handle(request: Request, response: Response) {
   const { description } = request.body;
   const Locacao = {
      description:description
    }; 
    const createLocacaoService  = new LocacaoService();
    const ret = await  createLocacaoService.createLocacao(Locacao.description);
    return response.json(ret);

  }
}
export { CreateLocacaoController };