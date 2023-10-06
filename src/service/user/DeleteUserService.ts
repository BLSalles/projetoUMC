import { getRepository } from "typeorm";
import { User } from "../../entities/User"; 

class DeleteUserService {
  async execute(id: string) {
    const userRepository = getRepository(User); 
    const user = await userRepository.findOne(id);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

   
    await userRepository.remove(user);

    return { message: "Usuário excluído com sucesso" };
  }
}

export { DeleteUserService };
