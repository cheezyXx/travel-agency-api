import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContinentController } from './controller/continent.controller';
import { CountryController } from './controller/country.controller';
import { ContinentService } from './service/continent.service';
import { CountryService } from './service/country.service';
import { ContinentEntity } from './entity/continent.entity';
import { CountryEntity } from './entity/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContinentEntity, CountryEntity])],
  controllers: [ContinentController, CountryController],
  providers: [ContinentService, CountryService],
})
export class CommonModule {}
