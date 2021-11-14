import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TripTypeEntity } from '../entity/trip-type.entity';

@Injectable()
export class TripTypeService {
  constructor(
    @InjectRepository(TripTypeEntity)
    private tripTypeRepository: Repository<TripTypeEntity>,
  ) {}

  async list() {
    return this.tripTypeRepository
      .createQueryBuilder('tp')
      .select(['tp.id', 'tp.name'])
      .getMany();
  }
}
