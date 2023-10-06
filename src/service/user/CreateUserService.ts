import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
  }
  
  class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {
      const usersRepository = getCustomRepository(UsersRepositories);
  
      if (!email) {
        throw new Error("Email incorrect");
      }
      const passwordHash = await hash(password, 8);
      const user = usersRepository.create(
        {
        name,
        email,
        admin,
        password: passwordHash,
      });
      await usersRepository.save(user);
      console.log("Usuario Criado")
      return user;
    }
  }
  
  export { CreateUserService };