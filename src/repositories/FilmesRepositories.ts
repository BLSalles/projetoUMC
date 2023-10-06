import { EntityRepository, Repository } from "typeorm";
import { Filmes } from "../entities/Filmes";

@EntityRepository(Filmes)
class FilmeRepositories extends Repository<Filmes> {}

export { FilmeRepositories };