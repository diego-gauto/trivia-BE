import { IsBoolean, IsNumber, IsString } from 'class-validator';

export default class Trivia {
  id: number;
  title: string;
  image: string;
  questions: question[];
  results: result[];
}

export class question {
  @IsNumber()
  id: number;

  @IsString()
  question: string;
  answers: answer[];
}

export class answer {
  @IsString()
  text: string;

  @IsBoolean()
  isCorrect: boolean;
}

export class result {
  @IsString()
  title: string;

  @IsString()
  body: string;
}
