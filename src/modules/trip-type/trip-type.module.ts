import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TripTypeEntity } from './entity/trip-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripTypeEntity])],
  controllers: [],
})
export class TripTypeModule {}
