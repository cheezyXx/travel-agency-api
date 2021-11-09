import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { CountryEntity } from '../entity/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity)
    private countryRepository: Repository<CountryEntity>,
  ) {}

  async get(id: string) {
    return this.countryRepository.findOne({
      where: {
        id,
      },
    });
  }

  async list() {
    return this.countryRepository
      .createQueryBuilder('c')
      .select(['c.id', 'c.iso'])
      .getMany();
  }
}
