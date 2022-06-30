import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import Species from '../entity/Species'

export default class SpeciesController {
  findByHabitat(id: number) {
    throw new Error('Method not implemented.')
  }
  private _repo: Repository<Species>

  constructor() {
    this._repo = AppDataSource.getRepository(Species)
  }

  async save(species: Species) {
    const savedSpecies = await this._repo.save(species)
    return savedSpecies
  }

  async findAll() {
    const species = await this._repo.find()
    return species
  }

  async findById(id: number) {
    const species = await this._repo.findOneBy({ id })
    return species
  }
  
  async getSpeciesByHabitat(habitat: string){
    const species = await this._repo.findOneBy({ habitat })
    return species
  }



}
