import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TriviasService } from './trivias.service';
import { CreateTriviaDto, UpdateTriviaDto } from './trivias.dto';

@ApiTags('trivias')
@Controller('trivias')
export class TriviasController {
  constructor(private triviasService: TriviasService) {}

  @Get()
  getTrivias() {
    return this.triviasService.findAll();
  }

  @Get(':id')
  getTriviasByID(@Param('id', ParseIntPipe) id: number) {
    return this.triviasService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateTriviaDto) {
    return this.triviasService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateTriviaDto,
  ) {
    return this.triviasService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.triviasService.remove(id);
  }
}
