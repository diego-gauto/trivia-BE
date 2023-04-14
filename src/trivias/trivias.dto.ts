import { question, result } from './trivia.entity';
import {
  IsNumber,
  IsString,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTriviaDto {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;

  @IsNotEmpty()
  readonly questions: question[];

  @IsNotEmpty()
  readonly results: result[];
}

export class UpdateTriviaDto extends PartialType(CreateTriviaDto) {}
