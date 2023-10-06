import { EntityRepository, Repository } from "typeorm";
import { Genero } from "../entities/Genero";

@EntityRepository(Genero)
class GeneroRepositories extends Repository<Genero> {}

export { GeneroRepositories };