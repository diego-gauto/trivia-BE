import { Injectable, NotFoundException } from '@nestjs/common';
import Trivia from './trivia.entity';
import { CreateTriviaDto, UpdateTriviaDto } from './trivias.dto';

@Injectable()
export class TriviasService {
  private counterId = 1;
  private trivias: Trivia[] = [
    {
      id: 1,
      title: 'Trivia 1',
      image: '../images/trivia1.jpg',
      questions: [
        {
          id: 1,
          question: 'Es una característica del monómero con MMA.',
          answers: [
            {
              text: 'Tiene bajo olor',
              isCorrect: false,
            },
            {
              text: 'Es un monómero dental de alto riesgo para la salud cuando se usa para aplicación de uñas',
              isCorrect: true,
            },
            {
              text: 'Ideal para uñas acrilicas',
              isCorrect: false,
            },
            {
              text: 'Es un monómero seguro',
              isCorrect: false,
            },
          ],
        },
        {
          id: 2,
          question:
            '¿Con qué gramaje de lima es correcto preparar la uña natural?',
          answers: [
            {
              text: '100/100',
              isCorrect: false,
            },
            {
              text: '80/80',
              isCorrect: false,
            },
            {
              text: '150/150',
              isCorrect: false,
            },
            {
              text: '180 0 220',
              isCorrect: true,
            },
          ],
        },
        {
          id: 3,
          question:
            '¿Cuál es la posición correcta del pincel para sellar el acrílico en la zona de cutícula?',
          answers: [
            {
              text: 'a 90 grados',
              isCorrect: true,
            },
            {
              text: 'a 120 grados',
              isCorrect: false,
            },
            {
              text: 'a 150 grados',
              isCorrect: false,
            },
            {
              text: 'a 180 grados',
              isCorrect: false,
            },
          ],
        },
        {
          id: 4,
          question:
            '¿Que parte de la uña artificial es la encargada de  brindar soporte a la estructura?',
          answers: [
            {
              text: 'El tip',
              isCorrect: false,
            },
            {
              text: 'El molde',
              isCorrect: false,
            },
            {
              text: 'El ápice',
              isCorrect: true,
            },
            {
              text: 'La zona de cutícula',
              isCorrect: false,
            },
          ],
        },
        {
          id: 5,
          question: '¿En cuántas fases se divide  una aplicación de uñas?',
          answers: [
            {
              text: 'Pegado del tip, limado, abrillantado',
              isCorrect: false,
            },
            {
              text: 'Colocación del molde, limado , abrillantado',
              isCorrect: false,
            },
            {
              text: 'Aplicación de producto, limado, abrillantado',
              isCorrect: false,
            },
            {
              text: 'preparación de la uña natural, aplicación del producto, limado, finalizado',
              isCorrect: true,
            },
          ],
        },
      ],
      results: [
        {
          title: '¡Toda una profesional!',

          body: `Se nota tu experiencia a kilómetros.
            Siéntete afortunada de poder vivir de hacer lo que más te gusta pero no olvides que el mundo de las uñas está en un cambio constante donde la capacitación y actualizaciones sobre las nuevas tendencias harán que tu crecimiento profesional no se detenga.
            Explota tus capacidades y lleva al máximo tus  habilidades.
            Comienza a prepararte para que  en poco tiempo puedas impartir cursos y ampliar también tu crecimiento económico.
            En Gonvar plus  tienes acceso a más de 35 cursos disponibles, donde los masters más reconocidos de Mexico y latinoamerica te van a preparar para poder  impartir cursos de todas las técnicas.
            Inscríbete hoy por $149 al mes y no pares de aprender`,
        },
        {
          title: '¡A un paso del éxito!',

          body: `Se notan tus ganas de crecer en este mágico mundo de las uñas.

          En esta apasionante profesión jamás dejamos de aprender, hay cientos de técnicas y diseños de tendencia para las cuales debemos estar preparadas.

          Eres una persona que aprovecha cada oportunidad para seguir aprendiendo y aunque a veces te  cuesta, con un poco de práctica logras siempre tus objetivos.

          No necesitas de grandes cantidades de productos para lograr  diseños increíbles y tienes personas muy cercanas que creen en ti y que son tu fuente de inspiración.

          En Gonvar también creemos en ti y en las miles de mujeres que desean sacar adelante a su familia, es por eso que nos hemos convertido en la comunidad de apoyo más grande del mundo.

          Nuestras  capacitaciones son de máximo nivel y con un costo de recuperación de $149 u 8 dlls al mes  para seguir apoyando a  cada  vez más mujeres emprendedoras como tú.`,
        },
        {
          title: '¡A un paso del éxito!',

          body: `Se nota tu experiencia a kilómetros.
          Siéntete afortunada de poder vivir de hacer lo que más te gusta pero no olvides que el mundo de las uñas está en un cambio constante donde la capacitación y actualizaciones sobre las nuevas tendencias harán que tu crecimiento profesional no se detenga.
          Explota tus capacidades y lleva al máximo tus  habilidades.
          Comienza a prepararte para que  en poco tiempo puedas impartir cursos y ampliar también tu crecimiento económico.
          En Gonvar plus  tienes acceso a más de 35 cursos disponibles, donde los masters más reconocidos de Mexico y latinoamerica te van a preparar para poder  impartir cursos de todas las técnicas.
          Inscríbete hoy por $149 al mes y no pares de aprender`,
        },
      ],
    },
  ];

  findAll() {
    return this.trivias;
  }

  findOne(id: number) {
    const trivia = this.trivias.find((item) => item.id === id);
    if (!trivia) {
      throw new NotFoundException(`Trivia #${id} not found`);
    }
    return trivia;
  }

  create(payload: CreateTriviaDto) {
    this.counterId++;
    const newTrivia = {
      id: this.counterId,
      ...payload,
    };
    this.trivias.push(newTrivia);
    return newTrivia;
  }

  update(id: number, payload: UpdateTriviaDto) {
    const trivia = this.findOne(id);
    const index = this.trivias.findIndex((item) => item.id === id);
    this.trivias[index] = {
      ...trivia,
      ...payload,
    };
    return this.trivias[index];
  }

  remove(id: number) {
    const index = this.trivias.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Trivia #${id} not found`);
    }
    this.trivias.splice(index, 1);
    return true;
  }
}
