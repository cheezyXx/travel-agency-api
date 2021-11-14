import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TripListController } from './controller/trip-list.controller';
import { TripsListService } from './service/trips-list.service';
import { TripUpdateController } from './controller/trip-update.controller';
import { TripEntity } from './entity/trip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripEntity])],
  controllers: [TripListController, TripUpdateController],
  providers: [TripsListService],
})
export class TripsModule {}
