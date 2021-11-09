import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { TripsModule } from './modules/trips/trips.module';
import { AdminModule } from './modules/admin/admin.module';
import { CommonModule } from './modules/common/common.module';

@Module({
  imports: [
    TripsModule,
    AdminModule,
    CommonModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
