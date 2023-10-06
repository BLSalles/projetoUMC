import { Request, Response } from "express";
import { FilmeService } from "../../service/filme/filmeService";

class ListFilmeController {
    async handle(request: Request, response: Response) {    
     const listFilmeService  = new FilmeService();
     const ret= await  listFilmeService.getAllFilmes()
    return response.json(ret);
    }
  } 
  export { ListFilmeController };