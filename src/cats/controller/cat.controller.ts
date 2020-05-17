import { Cat } from './../../cats/interfaces/cat.interface';
import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from '../cats.service';

@Controller('cats')
export class CatController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async getCats(): Promise<Cat[]> {
    return await this.catsService.findAll();
  }

  @Get(':id')
  async getCat(@Param('id') id): Promise<Cat> {
    return this.catsService.findCatByID(id);
  }
}
