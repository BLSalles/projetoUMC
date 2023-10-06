import { Request, Response } from "express";
import { LocacaoService } from "../../service/locacao/locacaoService";

class ListLocacaoController {
    async handle(request: Request, response: Response) {    
     const listLocacaoService  = new LocacaoService();
     const ret = await  listLocacaoService.getAllLocacaos()
    return response.json(ret);
    }
  } 
  export { ListLocacaoController };