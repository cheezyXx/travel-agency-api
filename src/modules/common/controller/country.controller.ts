import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';

import { CountryService } from '../service/country.service';

@Controller()
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get('/countries/:id')
  async get(@Param('id') id: string, @Res() res: Response) {
    try {
      const country = await this.countryService.get(id);
      res.status(HttpStatus.OK).json(country);
    } catch (e) {
      // @TODO Catch missing or not found

      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }

  @Get('/countries')
  async getAll(@Res() res: Response) {
    try {
      const countries = await this.countryService.list();
      res.status(HttpStatus.OK).json(countries);
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }
}
