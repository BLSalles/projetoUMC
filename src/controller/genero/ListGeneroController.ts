import { Request, Response } from "express";
import { GeneroService } from "../../service/genero/generoService";

class ListGeneroController {
    async handle(request: Request, response: Response) {    
     const listGeneroService  = new GeneroService();
     const ret = await  listGeneroService.getAllGeneros()
    return response.json(ret);
    }
  } 
  export { ListGeneroController };