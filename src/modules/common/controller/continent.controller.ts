import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

import { ContinentService } from '../service/continent.service';

@Controller()
export class ContinentController {
  constructor(private continentService: ContinentService) {}

  @Get('/continents')
  async getAll(@Res() res: Response) {
    try {
      const countries = await this.continentService.list();
      res.status(HttpStatus.OK).json(countries);
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }
}
