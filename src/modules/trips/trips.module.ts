import { Module } from '@nestjs/common';

import { TripsListController } from './controller/trips-list.controller';
import { TripsListService } from './service/trips-list.service';

@Module({
  imports: [],
  controllers: [TripsListController],
  providers: [TripsListService],
})
export class TripsModule {}
