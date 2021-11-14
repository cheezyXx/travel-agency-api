import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

import { TripTypeService } from '../service/trip-type.service';

@Controller()
export class TripTypeController {
  constructor(private tripTypeService: TripTypeService) {}

  @Get('/trip-types')
  async get(@Res() res: Response) {
    try {
      const tripTypes = await this.tripTypeService.list();
      res.status(HttpStatus.OK).json(tripTypes);
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }
}
