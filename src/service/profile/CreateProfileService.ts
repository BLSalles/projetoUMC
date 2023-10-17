import { ProfilesRepositories } from "../../repositories/ProfileRepositories";
import { getCustomRepository } from "typeorm";
interface IProfileRequest {
    description: string;
    photo: string;
  }
  
  class CreateProfileService {
    async execute({ description, photo}: IProfileRequest) {
      const profilesRepositories = getCustomRepository(ProfilesRepositories);

      const profile = profilesRepositories.create(
        {
            description,
            photo
      });
      await profilesRepositories.save(profile);
      console.log("Profile Criado")
      return profile;
    }
  }
  
  export { CreateProfileService };