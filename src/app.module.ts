import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { TripsModule } from './modules/trips/trips.module';
import { CommonModule } from './modules/common/common.module';
import { OrdersModule } from './modules/orders/orders.module';
import { TripTypeModule } from './modules/trip-type/trip-type.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TripsModule,
    TripTypeModule,
    OrdersModule,
    UserModule,
    CommonModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
