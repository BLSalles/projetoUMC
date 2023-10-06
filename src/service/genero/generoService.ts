import { GeneroRepositories } from "../../repositories/GeneroRepositories";
import { getCustomRepository } from "typeorm";

interface Genero {
    name: string;
  }
  

class GeneroService {
  private GeneroRepository: GeneroRepositories;

  constructor() {
    this.GeneroRepository = getCustomRepository(GeneroRepositories);
  }

  async createGenero(name: string): Promise<Genero> {
    const Genero = this.GeneroRepository.create({
      name
    });

    return await this.GeneroRepository.save(Genero);
  }

  async getAllGeneros(): Promise<Genero[]> {
    return await this.GeneroRepository.find();
  }

  async getGeneroById(id: string): Promise<Genero | undefined> {
    return await this.GeneroRepository.findOne(id);
  }

  async updateGenero(id: string, name: string): Promise<Genero | undefined> {
    const Genero = await this.GeneroRepository.findOne(id);

    if (!Genero) {
      return undefined;
    }

    Genero.name = name;

    return await this.GeneroRepository.save(Genero);
  }

  async deleteGenero(id: string): Promise<void> {
    const Genero = await this.GeneroRepository.findOne(id);

    if (Genero) {
      await this.GeneroRepository.remove(Genero);
    }
  }
}
  
export { GeneroService };