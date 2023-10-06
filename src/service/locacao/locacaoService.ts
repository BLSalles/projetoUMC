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

  async createLocacao(description: string): Promise<Locacao> {
    const Locacao = this.LocacaoRepository.create({
        description,
    });

    return await this.LocacaoRepository.save(Locacao);
  }

  async getAllLocacaos(): Promise<Locacao[]> {
    return await this.LocacaoRepository.find();
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