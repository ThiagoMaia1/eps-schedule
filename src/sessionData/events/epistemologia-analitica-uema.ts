import type { EventData, GeneralEvent, TrackGroup } from '../types'

export const generalEvents: GeneralEvent[] = [
  {
    date: 'October 20th',
    dayOfWeek: 'Monday',
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    eventType: 'Registration',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'Main Entrance',
    },
  },
  {
    date: 'October 20th',
    dayOfWeek: 'Monday',
    startTime: '12:00 PM',
    endTime: '2:00 PM',
    eventType: 'Lunch',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'General',
    },
  },
  {
    date: 'October 20th',
    dayOfWeek: 'Monday',
    startTime: '2:00 PM',
    endTime: '2:30 PM',
    eventType: 'Opening Ceremony',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'Main Hall',
    },
  },
  {
    date: 'October 20th',
    dayOfWeek: 'Monday',
    startTime: '5:45 PM',
    endTime: '6:15 PM',
    eventType: 'Coffee Break',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'General',
    },
  },
  {
    date: 'October 21st',
    dayOfWeek: 'Tuesday',
    startTime: '12:00 PM',
    endTime: '2:00 PM',
    eventType: 'Lunch',
    location: {
      hotel: 'Prédio da Música',
      floor: '1st',
      room: 'General',
    },
  },
  {
    date: 'October 21st',
    dayOfWeek: 'Tuesday',
    startTime: '5:30 PM',
    endTime: '6:00 PM',
    eventType: 'Coffee Break',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'General',
    },
  },
  {
    date: 'October 22nd',
    dayOfWeek: 'Wednesday',
    startTime: '12:00 PM',
    endTime: '2:00 PM',
    eventType: 'Lunch',
    location: {
      hotel: 'Prédio da Música',
      floor: '1st',
      room: 'General',
    },
  },
  {
    date: 'October 22nd',
    dayOfWeek: 'Wednesday',
    startTime: '5:00 PM',
    endTime: '5:30 PM',
    eventType: 'Coffee Break',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'General',
    },
  },
  {
    date: 'October 22nd',
    dayOfWeek: 'Wednesday',
    startTime: '7:30 PM',
    endTime: '10:00 PM',
    eventType: 'Social Dinner',
    location: {
      hotel: 'TBD',
      floor: '1st',
      room: 'General',
    },
  },
  {
    date: 'October 23rd',
    dayOfWeek: 'Thursday',
    startTime: '12:00 PM',
    endTime: '2:00 PM',
    eventType: 'Lunch',
    location: {
      hotel: 'Prédio da Música',
      floor: '1st',
      room: 'General',
    },
  },
  {
    date: 'October 23rd',
    dayOfWeek: 'Thursday',
    startTime: '5:30 PM',
    endTime: '6:00 PM',
    eventType: 'Coffee Break',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'General',
    },
  },
  {
    date: 'October 24th',
    dayOfWeek: 'Friday',
    startTime: '12:00 PM',
    endTime: '2:00 PM',
    eventType: 'Lunch',
    location: {
      hotel: 'Prédio da Música',
      floor: '1st',
      room: 'General',
    },
  },
  {
    date: 'October 24th',
    dayOfWeek: 'Friday',
    startTime: '3:30 PM',
    endTime: '4:00 PM',
    eventType: 'Coffee Break',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'General',
    },
  },
  {
    date: 'October 20th',
    dayOfWeek: 'Monday',
    startTime: '2:30 PM',
    endTime: '4:00 PM',
    eventType: 'Keynote',
    isSpecialEvent: true,
    speaker: {
      name: 'Florência Rimoldi',
    },
    theme:
      'La dimensión colectiva de la reparación epistémica como conversación',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'Main Hall',
    },
  },
  {
    date: 'October 20th',
    dayOfWeek: 'Monday',
    startTime: '6:30 PM',
    endTime: '7:30 PM',
    eventType: 'Keynote',
    isSpecialEvent: true,
    speaker: {
      name: 'Carlos Augusto Sartori',
    },
    theme: 'S pode ser salvo se acreditar que a Terra é plana?',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'Main Hall',
    },
  },
  {
    date: 'October 21st',
    dayOfWeek: 'Tuesday',
    startTime: '2:00 PM',
    endTime: '3:15 PM',
    eventType: 'Keynote',
    isSpecialEvent: true,
    speaker: {
      name: 'André Abath',
    },
    theme: 'O que está acontecendo? Desinformação, Entendimento e Ignorância',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'Main Hall',
    },
  },
  {
    date: 'October 22nd',
    dayOfWeek: 'Wednesday',
    startTime: '2:00 PM',
    endTime: '3:15 PM',
    eventType: 'Keynote',
    isSpecialEvent: true,
    speaker: {
      name: 'Henrique Antunes',
    },
    theme: 'Sobre lógicas livres de primeira ordem',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'Main Hall',
    },
  },
  {
    date: 'October 23rd',
    dayOfWeek: 'Thursday',
    startTime: '2:00 PM',
    endTime: '3:15 PM',
    eventType: 'Keynote',
    isSpecialEvent: true,
    speaker: {
      name: 'Tiegue Rodrigues Vieira',
    },
    theme: 'Less is More: On How Reasoning Increases Epistemic Status',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'Main Hall',
    },
  },
  {
    date: 'October 24th',
    dayOfWeek: 'Friday',
    startTime: '4:00 PM',
    endTime: '5:15 PM',
    eventType: 'Keynote',
    isSpecialEvent: true,
    speaker: {
      name: 'Luiz Paulo da Cas Cichoski',
    },
    theme: 'Epistemologia Coletiva e a Tese da Mente de Grupo',
    location: {
      hotel: 'Prédio da Arquitetura',
      floor: '1st',
      room: 'Main Hall',
    },
  },
]

export const Tracks: TrackGroup[] = [
  {
    track: 'Parallel Sessions - Room 1',
    shifts: [
      {
        dayOfWeek: 'Monday',
        shift: 'PM',
        startWindow: '4:15 PM',
        endWindow: '5:45 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 1',
        },
        sessions: [
          {
            date: 'October 20th',
            dayOfWeek: 'Monday',
            startTime: '4:15 PM',
            endTime: '4:45 PM',
            speaker: {
              name: 'Mariana Pase',
            },
            theme:
              'O problema filosófico da aplicação da matemática: uma abordagem sem milagres',
          },
          {
            date: 'October 20th',
            dayOfWeek: 'Monday',
            startTime: '4:15 PM',
            endTime: '4:45 PM',
            speaker: {
              name: 'Márcia Marques Damasceno',
            },
            theme:
              'A virada metodológica de David Hilbert: da filosofia da matemática à metamatemática',
            isCancelled: true,
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 2',
    shifts: [
      {
        dayOfWeek: 'Monday',
        shift: 'PM',
        startWindow: '4:15 PM',
        endWindow: '5:45 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 2',
        },
        sessions: [
          {
            date: 'October 20th',
            dayOfWeek: 'Monday',
            startTime: '3:45 PM',
            endTime: '4:15 PM',
            speaker: {
              name: 'Jorge Henrique Lima Moreira',
            },
            theme: 'Interpretar metáforas: embate entre Searle & Lakoff',
            isCancelled: true,
          },
          {
            date: 'October 20th',
            dayOfWeek: 'Monday',
            startTime: '4:15 PM',
            endTime: '4:45 PM',
            speaker: {
              name: 'Lucas Moreira',
            },
            theme:
              'Uma epistemologia da guerra: primeiros passos, Thomas Hobbes',
          },
          {
            date: 'October 20th',
            dayOfWeek: 'Monday',
            startTime: '4:15 PM',
            endTime: '4:45 PM',
            speaker: {
              name: 'Lucas Felipe Araújo de Araújo',
            },
            theme:
              'A Fronteira da Narrativa e a Democracia: Um debate acerca da crise democrática',
            isCancelled: true,
          },
          {
            date: 'October 20th',
            dayOfWeek: 'Monday',
            startTime: '4:45 PM',
            endTime: '5:15 PM',
            speaker: {
              name: 'Gabriel Filipe Brasileiro Costa',
            },
            theme:
              'O debate entre realismo direito e realismo indireto e as implicações para a compreensão de experiências religiosas',
          },
          {
            date: 'October 20th',
            dayOfWeek: 'Monday',
            startTime: '4:45 PM',
            endTime: '5:15 PM',
            speaker: {
              name: 'Matheus Marques Rodrigues da Costa',
            },
            theme:
              'Falácias Conceituais e Metodológicas na Crítica de Chomsky ao Behaviorismo',
            isCancelled: true,
          },
          {
            date: 'October 20th',
            dayOfWeek: 'Monday',
            startTime: '5:15 PM',
            endTime: '5:45 PM',
            speaker: {
              name: 'Bruno Moura',
            },
            theme:
              'A natureza da crença no livre-arbítrio: uma investigação sobre natureza, agência e religião',
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 3',
    shifts: [
      {
        dayOfWeek: 'Monday',
        shift: 'PM',
        startWindow: '4:15 PM',
        endWindow: '5:45 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 3',
        },
        sessions: [
          {
            date: 'October 20th',
            dayOfWeek: 'Monday',
            startTime: '4:15 PM',
            endTime: '4:45 PM',
            speaker: {
              name: 'Natalia Pereira Pinheiro',
            },
            theme: 'Epistemologia Ameríndia: os sonhos yanomamis',
            originalEventIfMoved: {
              date: 'October 20th',
              startTime: '4:15 PM',
              endTime: '4:45 PM',
              location: {
                hotel: 'Prédio da Arquitetura',
                floor: '1st',
                room: 'Sala 4',
              },
            },
          },
          {
            date: 'October 20th',
            dayOfWeek: 'Monday',
            startTime: '4:45 PM',
            endTime: '5:15 PM',
            speaker: {
              name: 'Amanda Veloso Garcia',
            },
            theme:
              'O problema do extrativismo epistêmico: desafios para a descolonização dos conhecimentos',
            originalEventIfMoved: {
              date: 'October 20th',
              startTime: '4:45 PM',
              endTime: '5:15 PM',
              location: {
                hotel: 'Prédio da Arquitetura',
                floor: '1st',
                room: 'Sala 4',
              },
            },
          },
          {
            date: 'October 20th',
            dayOfWeek: 'Monday',
            startTime: '5:15 PM',
            endTime: '5:45 PM',
            speaker: {
              name: 'Francisco Maciel',
            },
            theme:
              'Emancipação do sujeito: intersubjetividade no mundo da vida em Habermas',
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 4',
    shifts: [
      {
        dayOfWeek: 'Monday',
        shift: 'PM',
        startWindow: '3:45 PM',
        endWindow: '5:45 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 4',
        },
        sessions: [
          {
            date: 'October 20th',
            dayOfWeek: 'Monday',
            startTime: '3:45 PM',
            endTime: '4:15 PM',
            speakers: [
              {
                name: 'Ariana Reis',
              },
              {
                name: 'Ederson Safra Melo',
              },
            ],
            theme:
              'Dinâmica da desinformação: disputas epistêmicas e discursivas, comunidades tradicionais e resistência',
            isCancelled: true,
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 1',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '3:30 PM',
        endWindow: '5:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 1',
        },
        sessions: [
          {
            date: 'October 21st',
            dayOfWeek: 'Tuesday',
            startTime: '3:30 PM',
            endTime: '4:00 PM',
            speaker: {
              name: 'Alexandre Alves',
            },
            theme:
              'Realismo e Relativismo na Epistemologia da Ciência de Thomas S. Kuhn: Uma Releitura do Período Tardio',
          },
          {
            date: 'October 21st',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Bruna Campano',
            },
            theme:
              'Epistemologia das revoluções científicas de Galileu e Heisenberg',
          },
          {
            date: 'October 21st',
            dayOfWeek: 'Tuesday',
            startTime: '4:30 PM',
            endTime: '5:00 PM',
            speaker: {
              name: 'Leon Trelles',
            },
            theme:
              'Nombrar sin comprender: la filosofía de la psiquiatría frente al DSM',
          },
          {
            date: 'October 21st',
            dayOfWeek: 'Tuesday',
            startTime: '5:00 PM',
            endTime: '5:30 PM',
            theme: 'Reunião do GT',
            isPanelDiscussion: true,
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 2',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '3:30 PM',
        endWindow: '5:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 2',
        },
        sessions: [
          {
            date: 'October 21st',
            dayOfWeek: 'Tuesday',
            startTime: '4:30 PM',
            endTime: '5:00 PM',
            speaker: {
              name: 'Ariadne Lacerda',
            },
            theme:
              'Uma nova perspectiva para a solução do problema da Injustiça Epistêmica',
            isCancelled: true,
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 3',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '3:30 PM',
        endWindow: '5:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 3',
        },
        sessions: [
          {
            date: 'October 21st',
            dayOfWeek: 'Tuesday',
            startTime: '3:30 PM',
            endTime: '4:00 PM',
            speaker: {
              name: 'Giullyanny Almeida',
            },
            theme:
              'Injustiças epistêmicas a partir da análise foucaultiana sobre o discurso',
          },
          {
            date: 'October 21st',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Paloma Xavier',
            },
            theme:
              'Desacordos profundos e injustiças epistêmicas: preconceitos como geradores de resistências',
          },
          {
            date: 'October 21st',
            dayOfWeek: 'Tuesday',
            startTime: '4:30 PM',
            endTime: '5:00 PM',
            speaker: {
              name: 'Milena Oliveira Pires',
            },
            theme: 'Por que precisamos de uma epistemologia feminista negra?',
            originalEventIfMoved: {
              date: 'October 20th',
              startTime: '5:15 PM',
              endTime: '5:45 PM',
              location: {
                hotel: 'Prédio da Arquitetura',
                floor: '1st',
                room: 'Sala 4',
              },
            },
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 1',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:30 PM',
        endWindow: '5:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 1',
        },
        sessions: [
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '3:30 PM',
            endTime: '4:00 PM',
            speaker: {
              name: 'Marco Ruffino',
            },
            theme: 'How to Frege a Perry-Kaplan or How to do Words With Things',
          },
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '4:00 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Rafael de Araujo Serra',
            },
            theme: 'A Extensionalização da Hierarquia de Funções de Frege',
          },
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '4:30 PM',
            endTime: '5:00 PM',
            speaker: {
              name: 'Quirin Josef Colares Oberrauch',
            },
            theme: "Indeterminacy and Inference in Frege's Begriffsschrift",
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 2',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:30 PM',
        endWindow: '5:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 2',
        },
        sessions: [
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '3:30 PM',
            endTime: '4:00 PM',
            speaker: {
              name: 'Thiago Pereira Maia',
            },
            theme:
              'Os desacordos sobre casos de Gettier são meramente verbais?',
          },
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '4:00 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Sarah Paiva',
            },
            theme: 'Autonomia intelectual: uma revisão sistemática',
          },
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '4:30 PM',
            endTime: '5:00 PM',
            speaker: {
              name: 'Galen Barry',
            },
            theme: 'Uma abordagem kantiana às virtudes e vícios epistêmicos',
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 3',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:30 PM',
        endWindow: '5:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 3',
        },
        sessions: [
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '3:30 PM',
            endTime: '4:00 PM',
            speaker: {
              name: 'Lyvya Lima',
            },
            theme:
              'A importância da identidade pessoal para o conceito de morte da pessoa humana',
          },
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '4:00 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Alisson Brandemarte Moreira',
            },
            theme: 'An introduction to Churchlands Neuroepistemology',
          },
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '4:30 PM',
            endTime: '5:00 PM',
            speaker: {
              name: 'Valéria Carvalho',
            },
            theme:
              'Por uma razão ciborgue: repensar a filosofia da mente a partir de Donna Haraway',
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 4',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:30 PM',
        endWindow: '5:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 4',
        },
        sessions: [
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '3:30 PM',
            endTime: '4:00 PM',
            speaker: {
              name: 'Cesár Santos',
            },
            theme: 'Filosofia da Ciência para não-filósofos: o que ensinar?',
            originalEventIfMoved: {
              date: 'October 21st',
              startTime: '3:30 PM',
              endTime: '4:00 PM',
              location: {
                hotel: 'Prédio da Arquitetura',
                floor: '1st',
                room: 'Sala 2',
              },
            },
          },
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '4:00 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Cicera Araújo',
            },
            theme:
              'Inferência, atos de fala e função epistêmica: fundamentos para uma concepção situada da lógica e de seu ensino',
            originalEventIfMoved: {
              date: 'October 21st',
              startTime: '4:00 PM',
              endTime: '4:30 PM',
              location: {
                hotel: 'Prédio da Arquitetura',
                floor: '1st',
                room: 'Sala 2',
              },
            },
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 1',
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '3:30 PM',
        endWindow: '5:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 1',
        },
        sessions: [
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:00 PM',
            speaker: {
              name: 'Rafael Silva Sousa',
            },
            theme:
              'Uma Lógica para a Tomada de Decisão em Cenários de Incerteza e Dados Contraditórios',
          },
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '4:00 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Vinícius Felipe Posselt',
            },
            theme: 'Against the Promotion of Reasonable Belief',
          },
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '4:30 PM',
            endTime: '5:00 PM',
            speaker: {
              name: 'Taís Regina Chiodelli',
            },
            theme: "Uma solução em termos modais para o 'Relógio Regressivo'",
          },
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '5:00 PM',
            endTime: '5:30 PM',
            speaker: {
              name: 'Alinne Cardoso Cruz',
            },
            theme:
              "Entre o 'necessário' e o 'possível': a superação do sistema lógico de Aristóteles pela lógica imaginária de Vasiliev",
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 2',
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '3:30 PM',
        endWindow: '5:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 2',
        },
        sessions: [
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:00 PM',
            speaker: {
              name: 'Emily de Oliveira Ovalhe',
            },
            theme:
              'Lógica, informação e evidência: sobre a abordagem epistêmica da paraconsistência',
          },
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '4:00 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Felipe G. A. Moreira',
            },
            theme:
              'Princípios lógicos, propriedades paradigmáticas e necessidade per se',
          },
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '4:30 PM',
            endTime: '5:00 PM',
            speaker: {
              name: 'Yasmim Lobato',
            },
            theme: 'O pluralismo lógico de da Costa',
          },
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '5:00 PM',
            endTime: '5:30 PM',
            speaker: {
              name: 'Ederson Safra Melo',
            },
            theme: 'Entre dedução e abdução: o caso do dialeteísmo',
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 3',
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '3:30 PM',
        endWindow: '5:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 3',
        },
        sessions: [
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:00 PM',
            speaker: {
              name: 'Joel Araujo',
            },
            theme:
              'Pré-lógicas e pré-matemáticas como teorias do conhecimento aplicadas à educação',
          },
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '4:00 PM',
            endTime: '4:30 PM',
            speakers: [
              {
                name: 'Fátima de Jesus Soares Corrêa',
              },
              {
                name: 'Cláudia Inês Horn',
              },
              {
                name: 'Sônia Elisa Marchi Gonzatti',
              },
            ],
            theme:
              'Etnomatemática e epistemologias do conhecimento: diálogos entre Morin, Santos e Bachelard',
          },
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '4:30 PM',
            endTime: '5:00 PM',
            speaker: {
              name: 'Danúbia Aires Lobo Frasão',
            },
            theme:
              'O conceito de argumento e suas implicações epistemológicas e sociais',
          },
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '5:00 PM',
            endTime: '5:30 PM',
            speaker: {
              name: 'Delvair Custodio Moreira',
            },
            theme: 'Autonomia e dependência epistêmica em ilhas cognitivas',
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 1',
    shifts: [
      {
        dayOfWeek: 'Friday',
        shift: 'PM',
        startWindow: '2:00 PM',
        endWindow: '3:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 1',
        },
        sessions: [
          {
            date: 'October 24th',
            dayOfWeek: 'Friday',
            startTime: '2:00 PM',
            endTime: '2:30 PM',
            speakers: [
              {
                name: 'Adriano Martins Costa',
              },
              {
                name: 'Catarina Pinho',
              },
              {
                name: 'João Tavares',
              },
              {
                name: 'Louisa Huckemann',
              },
            ],
            theme:
              'A Construção da Identidade nas Mídias Sociais: Info-Influenciadores no Contexto da Semieducação (Halbbildung)',
          },
          {
            date: 'October 24th',
            dayOfWeek: 'Friday',
            startTime: '2:30 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Bruno Dinis',
            },
            theme: 'Comprometimento conjunto e a questão da identidade',
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 2',
    shifts: [
      {
        dayOfWeek: 'Friday',
        shift: 'PM',
        startWindow: '2:00 PM',
        endWindow: '3:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 2',
        },
        sessions: [
          {
            date: 'October 24th',
            dayOfWeek: 'Friday',
            startTime: '2:00 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Marcelo de Souza Lima',
            },
            theme: 'O problema dos continuantes através de paradoxos e dilemas',
          },
          {
            date: 'October 24th',
            dayOfWeek: 'Friday',
            startTime: '2:30 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Paulo Mauricio Goulart Valente',
            },
            theme: 'Realismo Modal e Imaginação - Um Diálogo Epistemológico',
          },
          {
            date: 'October 24th',
            dayOfWeek: 'Friday',
            startTime: '3:00 PM',
            endTime: '3:30 PM',
            speaker: {
              name: 'Carliane Cruz Medeiros',
            },
            theme: 'Sobre a prioridade do espaço em Kant',
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 3',
    shifts: [
      {
        dayOfWeek: 'Friday',
        shift: 'PM',
        startWindow: '2:00 PM',
        endWindow: '3:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 3',
        },
        sessions: [
          {
            date: 'October 24th',
            dayOfWeek: 'Friday',
            startTime: '2:00 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Toma Gheorghe',
            },
            theme:
              'Como solucionar o problema da lógica de fundo com inferencialismo semântico e expressivismo lógico',
          },
          {
            date: 'October 24th',
            dayOfWeek: 'Friday',
            startTime: '2:30 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Milena Santos',
            },
            theme:
              'O tratamento dos paradoxos na perspectiva dialeteísta de da Costa',
          },
          {
            date: 'October 24th',
            dayOfWeek: 'Friday',
            startTime: '3:00 PM',
            endTime: '3:30 PM',
            speaker: {
              name: 'Marcio Kléos Freire Pereira',
            },
            theme: 'O que realmente importa no paradoxo de Fitch',
          },
        ],
      },
    ],
  },
  {
    track: 'Parallel Sessions - Room 4',
    shifts: [
      {
        dayOfWeek: 'Friday',
        shift: 'PM',
        startWindow: '2:00 PM',
        endWindow: '3:30 PM',
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Sala 4',
        },
        sessions: [
          {
            date: 'October 24th',
            dayOfWeek: 'Friday',
            startTime: '2:00 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Renata Augusto',
            },
            theme:
              'Papel Calibrador: um novo papel epistêmico para a experiência?',
          },
          {
            date: 'October 24th',
            dayOfWeek: 'Friday',
            startTime: '2:30 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Guilherme Souza Schneider dos Santos',
            },
            theme: 'Conservadorismo Fenomênico e o Fundacionalismo Teóricos',
          },
          {
            date: 'October 24th',
            dayOfWeek: 'Friday',
            startTime: '3:00 PM',
            endTime: '3:30 PM',
            speaker: {
              name: 'Allysson Rocha',
            },
            theme:
              'Diferenciando razões de arbitrar razões para justificar crenças',
          },
        ],
      },
    ],
  },
  {
    track: 'Minicurso - Sala A',
    specialClassifications: ['Minicurso'],
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '10:00 AM',
        endWindow: '12:00 PM',
        specialClassifications: ['Minicurso'],
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Auditório',
        },
        sessions: [
          {
            date: 'October 21st',
            dayOfWeek: 'Tuesday',
            startTime: '10:00 AM',
            endTime: '12:00 PM',
            speaker: {
              name: 'Verônica Campos',
            },
            theme: 'Minicurso: Ideias para escrita filosófica',
          },
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '10:00 AM',
        endWindow: '12:00 PM',
        specialClassifications: ['Minicurso'],
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Auditório',
        },
        sessions: [
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '10:00 AM',
            endTime: '12:00 PM',
            speaker: {
              name: 'Verônica Campos',
            },
            theme: 'Minicurso: Ideias para escrita filosófica',
          },
        ],
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'AM',
        startWindow: '10:00 AM',
        endWindow: '12:00 PM',
        specialClassifications: ['Minicurso'],
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Auditório',
        },
        sessions: [
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '10:00 AM',
            endTime: '12:00 PM',
            speaker: {
              name: 'Verônica Campos',
            },
            theme: 'Minicurso: Ideias para escrita filosófica',
          },
        ],
      },
      {
        dayOfWeek: 'Friday',
        shift: 'AM',
        startWindow: '10:00 AM',
        endWindow: '12:00 PM',
        specialClassifications: ['Minicurso'],
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Auditório',
        },
        sessions: [
          {
            date: 'October 24th',
            dayOfWeek: 'Friday',
            startTime: '10:00 AM',
            endTime: '12:00 PM',
            speaker: {
              name: 'Verônica Campos',
            },
            theme: 'Minicurso: Ideias para escrita filosófica',
          },
        ],
      },
    ],
  },
  {
    track: 'Minicurso - Sala B',
    specialClassifications: ['Minicurso'],
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '10:00 AM',
        endWindow: '12:00 PM',
        specialClassifications: ['Minicurso'],
        location: {
          hotel: 'Prédio da História',
          floor: '1st',
          room: 'Sala B',
        },
        sessions: [
          {
            date: 'October 21st',
            dayOfWeek: 'Tuesday',
            startTime: '10:00 AM',
            endTime: '12:00 PM',
            speaker: {
              name: 'Pedro Bravo',
            },
            theme:
              'Minicurso: Ciência cidadã: fundamentos e formulação de projetos',
          },
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '10:00 AM',
        endWindow: '12:00 PM',
        specialClassifications: ['Minicurso'],
        location: {
          hotel: 'Prédio da História',
          floor: '1st',
          room: 'Sala B',
        },
        sessions: [
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '10:00 AM',
            endTime: '12:00 PM',
            speaker: {
              name: 'Pedro Bravo',
            },
            theme:
              'Minicurso: Ciência cidadã: fundamentos e formulação de projetos',
          },
        ],
      },
    ],
  },
  {
    track: 'Minicurso - Main Hall',
    specialClassifications: ['Minicurso'],
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '6:00 PM',
        endWindow: '7:30 PM',
        specialClassifications: ['Minicurso'],
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Main Hall',
        },
        sessions: [
          {
            date: 'October 21st',
            dayOfWeek: 'Tuesday',
            startTime: '6:00 PM',
            endTime: '7:30 PM',
            speaker: {
              name: 'Alexandre Meyer Luz',
            },
            theme: 'Minicurso: Filosofia da Violência',
          },
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '5:30 PM',
        endWindow: '7:00 PM',
        specialClassifications: ['Minicurso'],
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Main Hall',
        },
        sessions: [
          {
            date: 'October 22nd',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '7:00 PM',
            speaker: {
              name: 'Alexandre Meyer Luz',
            },
            theme: 'Minicurso: Filosofia da Violência',
          },
        ],
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '6:00 PM',
        endWindow: '7:30 PM',
        specialClassifications: ['Minicurso'],
        location: {
          hotel: 'Prédio da Arquitetura',
          floor: '1st',
          room: 'Main Hall',
        },
        sessions: [
          {
            date: 'October 23rd',
            dayOfWeek: 'Thursday',
            startTime: '6:00 PM',
            endTime: '7:30 PM',
            speaker: {
              name: 'Alexandre Meyer Luz',
            },
            theme: 'Minicurso: Filosofia da Violência',
          },
        ],
      },
    ],
  },
]

const eventData: EventData = {
  generalEvents,
  Tracks,
  venues: ['Prédio da Arquitetura'],
  classificationColors: {
    Minicurso: {
      background: '#E8F5E9',
      border: '#4CAF50',
    },
  },
  hideSpecialEventsByDefault: false,
  name: 'Epistemologia Analítica - São Luís 2025',
  footerConfig: {
    officialSourceUrl: 'https://sites.google.com/ufma.br/epistemologia/',
    officialSourceName: 'the official event page at UFMA',
    lastUpdated: 'October 13, 2025',
  },
}

export default eventData
