import { getRepository } from "typeorm"; 
import { User } from "../../entities/User";

interface UpdateUserRequest {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  password: string;
}

class UpdateUserService {
  async execute({ id, name, email, admin, password }: UpdateUserRequest) {
  
    const userRepository = getRepository(User);

    
    const existingUser = await userRepository.findOne(id);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

   
    existingUser.name = name;
    existingUser.email = email;
    existingUser.admin = admin;
    existingUser.password = password;

   
    await userRepository.save(existingUser);

    return existingUser;
  }
}

export { UpdateUserService };
