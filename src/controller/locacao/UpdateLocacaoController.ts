import { Request, Response } from "express";
import { LocacaoService } from "../../service/locacao/locacaoService";

class UpdateLocacaoController {

  async handle(request: Request, response: Response) {
    const { id, description } = request.body;

    const updateLocacaoService = new LocacaoService();

    const Locacao = await updateLocacaoService.updateLocacao(id, description);
    return response.json(Locacao);
  }
}

export { UpdateLocacaoController };