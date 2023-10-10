import { Request, Response } from "express";
import { CreateProfileService } from "../../service/profile/CreateProfileService";
class CreateProfileController {
  async handle(request: Request, response: Response) {
   const { description, photo } = request.body;
   console.log(description),
   console.log(photo)
      
   const profile = {
      description:description,
      photo:photo
    }; 
    const createProfileService  = new CreateProfileService();
    const ret = await  createProfileService.execute(profile);
    return response.json(ret);

  }
}
export { CreateProfileController };