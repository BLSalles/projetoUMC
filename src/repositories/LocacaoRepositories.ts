import { EntityRepository, Repository } from "typeorm";
import { Locacao } from "../entities/Locacao";

@EntityRepository(Locacao)
class LocacaoRepositories extends Repository<Locacao> {}

export { LocacaoRepositories };