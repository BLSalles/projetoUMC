import { ProfileRepositories } from "../../repositories/ProfileRespositories";
import { getCustomRepository } from "typeorm";


interface IProfileRequest {
    description: string;
    photo: string;
    
  }
  
  class CreateProfileService {
    async execute({ description, photo }: IProfileRequest) {
      const ProfileRepository = getCustomRepository(ProfileRepositories);
  
        const profile = ProfileRepository.create(
        {
       description,
       photo
      });
      await ProfileRepository.save(profile);
      console.log("Perfil Criado")
      return profile;
    }
  }
  
  export { CreateProfileService };