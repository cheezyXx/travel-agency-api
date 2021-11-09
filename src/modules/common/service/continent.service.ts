import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ContinentEntity } from '../entity/continent.entity';

@Injectable()
export class ContinentService {
  constructor(
    @InjectRepository(ContinentEntity)
    private continentRepository: Repository<ContinentEntity>,
  ) {}
}
