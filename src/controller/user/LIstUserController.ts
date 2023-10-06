import { Request, Response } from "express";
import { ListUserService } from "../../service/user/ListUserService";

class ListUsersController {
    async handle(request: Request, response: Response) {    
     const listUserService  = new ListUserService();
     const ret= await  listUserService.execute()
    return response.json(ret);
    }
  } 
  export { ListUsersController };