import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TripTypeEntity } from './entity/trip-type.entity';
import { TripTypeService } from './service/trip-type.service';
import { TripTypeController } from './controller/trip-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TripTypeEntity])],
  providers: [TripTypeService],
  controllers: [TripTypeController],
})
export class TripTypeModule {}
