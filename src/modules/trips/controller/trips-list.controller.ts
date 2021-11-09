import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

import { TripsListService } from '../service/trips-list.service';

@Controller()
export class TripsListController {
  constructor(private tripsList: TripsListService) {}

  @Get('/trips')
  async get(@Res() res: Response) {
    try {
      const result = await this.tripsList.list();
      res.status(HttpStatus.OK).json(result);
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }
}
