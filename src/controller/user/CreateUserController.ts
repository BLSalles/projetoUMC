import { Request, Response } from "express";
import { CreateUserService } from "../../service/user/CreateUserService";
import { profile } from "console";
class CreateUserController {
  async handle(request: Request, response: Response) {
   const { name, email, admin, password,profile } = request.body;
   console.log(name)
   console.log(email)
   console.log(admin)
   console.log(password) 
   console.log(profile)  
   const user = {
      name:name,
      email:email,
      admin:admin,
      password:password,
      profile:profile
     
    }; 
    const createUserService  = new CreateUserService();
    const ret = await  createUserService.execute(user);
    return response.json(ret);

  }
}
export { CreateUserController };