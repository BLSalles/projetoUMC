import { Filme1695567990675 } from "../../database/migrations/1695567990675-Filme";
import { LocacaoRepositories } from "../../repositories/LocacaoRepositories";
import { getCustomRepository } from "typeorm";

interface Locacao {
    description: string;
    
  }
  

class LocacaoService {
  private LocacaoRepository: LocacaoRepositories;

  constructor() {
    this.LocacaoRepository = getCustomRepository(LocacaoRepositories);
  }

  async createLocacao(description: string, filmes: string,users): Promise<Locacao> {
    const Locacao = this.LocacaoRepository.create({
        description,
        filmes:{id:filmes},
        users: {id:users}
    });

    return await this.LocacaoRepository.save(Locacao);
  }
  async getAllLocacaos(): Promise<Locacao[]> {
    const LocacaoFilme = await this.LocacaoRepository
  .createQueryBuilder("locacao")
  .leftJoinAndSelect('locacao.filmes', 'filmes')
  .leftJoinAndSelect('locacao.users','users')
  .getMany();

  return LocacaoFilme;
  }
  

  async getLocacaoById(id: string): Promise<Locacao | undefined> {
    return await this.LocacaoRepository.findOne(id);
  }

  async updateLocacao(id: string, description: string): Promise<Locacao | undefined> {
    const Locacao = await this.LocacaoRepository.findOne(id);

    if (!Locacao) {
      return undefined;
    }

    Locacao.description = description;

    return await this.LocacaoRepository.save(Locacao);
  }

  async deleteLocacao(id: string): Promise<void> {
    const Locacao = await this.LocacaoRepository.findOne(id);

    if (Locacao) {
      await this.LocacaoRepository.remove(Locacao);
    }
  }
}
  
export { LocacaoService };