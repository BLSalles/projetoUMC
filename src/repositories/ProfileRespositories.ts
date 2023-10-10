import { EntityRepository, Repository } from "typeorm";
import { Profile } from "../entities/Profile";

@EntityRepository(Profile)
 
class ProfileRepositories extends Repository<Profile>{}

export { ProfileRepositories };
