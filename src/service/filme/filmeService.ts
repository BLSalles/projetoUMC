import { FilmeRepositories } from "../../repositories/FilmesRepositories";
import { getCustomRepository } from "typeorm";

interface Filme {
    name: string;
    description: string;
  }
  

class FilmeService {
  private filmeRepository: FilmeRepositories;

  constructor() {
    this.filmeRepository = getCustomRepository(FilmeRepositories);
  }

  async createFilme(name: string, description: string): Promise<Filme> {
    const filme = this.filmeRepository.create({
      name,
      description,
    });

    return await this.filmeRepository.save(filme);
  }

  async getAllFilmes(): Promise<Filme[]> {
    return await this.filmeRepository.find();
  }

  async getFilmeById(name: string): Promise<Filme | undefined> {
    return await this.filmeRepository.findOne(name);
  }

  async updateFilme(id: string, name: string, description: string): Promise<Filme | undefined> {
    const filme = await this.filmeRepository.findOne(id);

    if (!filme) {
      return undefined;
    }

    filme.name = name;
    filme.description = description;

    return await this.filmeRepository.save(filme);
  }

  async deleteFilme(name: string): Promise<void> {
    const filme = await this.filmeRepository.findOne(name);

    if (filme) {
      await this.filmeRepository.remove(filme);
    }
  }
}
  
export { FilmeService };