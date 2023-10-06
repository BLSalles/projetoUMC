import { Request, Response } from "express";
import { LocacaoService } from "../../service/locacao/locacaoService";

class DeleteLocacaoController {
  async handle(request: Request, response: Response) {
    const deleteLocacaoService = new LocacaoService();
    const name = request.params.name;
    const Locacao = await deleteLocacaoService.deleteLocacao(name);

    return response.json(Locacao);
  }
}

export { DeleteLocacaoController };