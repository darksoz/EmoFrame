// 0 = Não; 1 = Sim
export const Questions1 = [
  {
    aspectos: "DÉFICIT COGNITIVO",
    pontucao: "Pontuação (máxima=6): Necessita de invetigação",
    perguntas: [
      {
        title:
          "O(A) senhor(a) considera que sua memória é tão boa quanto antes?",
        point: 1,
        question: 1,
        input: false,
        yes: 1,
        no: 0,
      },
      {
        title:
          " Memória: Eu vou lhe dar um nome e um endereço e eu gostaria que você os repetisse depois de mim. Nós vamos fazer isso três vezes, assim você terá a possibilidade de aprendê-los. Eu vou lhe perguntar mais tarde. Pontuar apenas a terceira tentativa.",
        point: 1,
        yes: 1,
        no: 0,
        input: false,
        question: 2,
        text: `"Renato Moreira"
              "Rua Bela Vista, 73"
              "Santarém" e
              "Pará"
              `,
      },
      {
        title:
          "Linguagem, função executiva e atenção: “O(a) senhor(a) deve falar todos os nomes de animais de que se lembrar, o mais rápido possível. Quantos mais falar, melhor. Pode começar”. Anote os nomes de animais falados pelo(a) idoso(a) a cada 15 segundos.",
        point: 1,
        question: 3,
        input: false,
        yes: 1,
        no: 0,
        images: ["time1.png", "time2.png", "time3.png", "time4.png"],
      },
      {
        title:
          "Habilidade visuoespacial: Peça ao indivíduo para contar os pontos sem apontá-los",
        question: 4,
        input: false,
        yes: 1,
        no: 0,
        images: ["bolas1.png", "bolas2.png", "bolas3.png", "bolas4.png"],
        point: 1,
      },
      {
        title:
          "Praxia: (Esteja com uma folha em mãos) “Pegue este papel com a mão direita. Dobre-o ao meio e coloque-o sobre a mesa” (Falar todos os comandos de uma só vez)",
        point: 1,
        input: false,
        question: 5,
        yes: 1,
        no: 0,
      },
      {
        title:
          "Memória: Agora você vai me dizer o que você se lembra daquele nome e endereço que nós repetimos no começo",
        question: 6,
        yes: 1,
        input: false,
        no: 0,
        point: 1,
        subtitle: ["Renato Moreira", "Rua Bela Vista, 73", "Santarém", "Pará"],
      },
    ],
  },
  {
    aspectos: "ATIVIDADE NEGATIVA EM RELAÇÃO AO ENVELHECIMENTO",
    pontucao: "Pontuação (máxima=2): Necessita de invetigação",
    perguntas: [
      {
        question: 7,
        yes: 0,
        no: 1,
        input: true,
        point: 0,
        title: "Que idade o(a) senhor(a) sente ter _ ? Por quê?",
      },
      {
        question: 8,
        yes: 0,
        no: 1,
        input: true,
        tooltip:
          "[Registrar ao lado se é perceptível uma visão mais negativa da velhice].",
        point: 0,
        title:
          "Existem pontos positivos e negativos presentes na velhice? Quais? _",
      },
    ],
  },
  {
    aspectos: "DEPRESÃO",
    pontucao: "Pontuação (máxima=6): Necessita de invetigação",
    perguntas: [
      {
        question: 9,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title: "De modo geral o(a) senhor(a) está satisfeito com a vida?",
      },
      {
        question: 10,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "O(A) senhor(a) se sente triste com frequência?",
      },
      {
        question: 11,
        yes: 0,
        input: false,
        no: 1,
        point: 0,
        title:
          "O(A) senhor(a) abandonou muitas das coisas que fazia ou gostava de fazer?",
      },
      {
        question: 12,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "O(A) senhor(a) tem medo que algum mal vá lhe acontecer?",
      },
      {
        question: 13,
        point: 0,
        yes: 0,
        input: false,
        no: 1,
        title:
          "O(A) senhor(a) se sente impaciente e agitado(a) com frequência?",
      },
      {
        question: 14,
        yes: 0,
        input: false,
        no: 1,
        point: 0,
        title: "O(A) senhor(a) tem dificuldade em se concentrar?",
      },
    ],
  },
];

export const Questions2 = [
  {
    aspectos: "DÉFICIT SENSORIAL",
    pontucao: "Pontuação (máxima=5): Necessita de invetigação",
    perguntas: [
      {
        question: 15,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "O(A) senhor(a) tem problemas de visão?",
      },
      {
        question: 16,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "O(A) senhor(a) tem dificuldade de ouvir o que as pessoas falam?",
      },
      {
        question: 17,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "O(A) senhor(a) tem dificuldade para sentir o sabor dos alimentos?",
      },
      {
        question: 18,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "O(A) senhor(a) considera ruim o funcionamento dos seus sentidos?",
      },
      {
        question: 19,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          " O(A) senhor(a) considera que o funcionamento dos seus sentidos afeta sua capacidade de interagir com outras pessoas?",
      },
    ],
  },
  {
    aspectos: "INCAPACIDADE FUNCIONAL",
    pontucao: "Pontuação (máxima=6): Necessita de invetigação",
    perguntas: [
      {
        question: 20,
        yes: 0,
        input: false,
        no: 1,
        point: 0,
        title: "O(A) senhor(a) necessita de ajuda para Fazer compras?",
      },
      {
        question: 21,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "O(A) senhor(a) necessita de ajuda para usar meios de transporte?",
      },
      {
        question: 22,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "O(A) senhor(a) necessita de ajuda para preparar a própria comida?",
      },
      {
        question: 23,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "O(A) senhor(a) necessita de ajuda para usar telefone?",
      },
      {
        question: 24,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "O(A) senhor(a) necessita de ajuda para vestir-se?",
      },
      {
        question: 25,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "O(A) senhor(a) necessita de ajuda para tomar banho?",
      },
    ],
  },
  {
    aspectos: "DESNUTRIÇÃO",
    pontucao: "Pontuação (máxima=7): Necessita de invetigação",
    perguntas: [
      {
        question: 26,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "O(A) senhor(a) acha ou considera que está desnutrido?",
      },
      {
        question: 27,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "O(A) senhor(a) tem lesões na região bucal ou algum outro problema que provoque dificuldades de mastigação?",
      },
      {
        question: 28,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "O(A) senhor(a) faz menos de três refeições por dia?",
      },
      {
        question: 29,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "Nos ultimos 3 meses,O(A) senhor(a), Diminuiu sua ingesta alimentar sem motivo?",
      },
      {
        question: 30,
        yes: 0,
        no: 1,
        point: 0,
        title:
          "Nos ultimos 3 meses,O(A) senhor(a), perdeu peso sem motivo aparente? se sim, quantos quilos?",
        input: true,
      },
      {
        question: 31,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "Nos ultimos 3 meses,O(A) senhor(a), Passou por algum estresse psicologico, doenca aguda ou internações",
      },
      {
        question: 32,
        point: 0,
        input: true,
        title:
          "Índice de Massa Corporal (peso _ [kg]/ estatura _ [m2]) = _ kg/m2) igual ou menor que 22 kg/m2",
        yes: 0,
        no: 1,
      },
    ],
  },
  {
    aspectos: "DOENÇAS CARDIOVASCULARES (DCV)",
    pontucao: "Pontuação (máxima=9): Necessita de invetigação",
    perguntas: [
      {
        question: 33,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "O(A) senhor(a) tem histórico familiar (1º grau) de DCV (infarto, derrama e/ou angina)?",
      },
      {
        question: 34,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title: "O(a) senhor(a) tem hipertensão arterial descontrolada?",
      },
      {
        question: 35,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title: "O(A) senhor(a) tem diabetes? Se sim, está descontrolada?",
      },
      {
        question: 36,
        yes: 1,
        no: 0,
        input: false,
        tooltip:
          "[Pontuar como sim quando CT e HDL forem verificados em último exame como superior a 200 mg/dL e 60mg/dL, respectivamente, ou caso o(a) idoso(a) não saiba informar]",
        point: 1,
        title: "O(A) senhor(a) colesterol alterado?",
      },
      {
        question: 37,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "O(A) senhor(a) fuma ou é ex-fumante?",
      },
      {
        question: 38,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) pratica mais de 150 minutos de exercícios físicos por semana?",
      },
      {
        question: 39,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title: "O(A) senhor(a) considera que sua alimentação é saudável?",
      },
      {
        question: 40,
        yes: 0,
        no: 1,
        input: true,
        point: 0,
        title:
          "Na última semana, o(a) senhor(a) ingeriu bebidas alcoólicas? Se sim, tipo: _ quantidade: _",
      },
      {
        question: 41,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "IMC para obesidade: 27 Kg/m2",
      },
    ],
  },
  {
    aspectos: "USO INADEQUADO DE MEDICAMENTOS",
    pontucao: "Pontuação (máxima=9): Necessita de invetigação",
    perguntas: [
      {
        question: 42,
        yes: 0,
        no: 0,
        input: false,
        title:
          "Nos últimos 5 anos, algum médico ou outro profissional de saúde já disse que o(a) senhor(a) tem:",
        questions: [
          "Doença do coração (angina, infarto ou ataque cardíaco)?",
          "Pressão alta/ hipertensão?",
          "Derrame/AVC/Isquemia?",
          "Diabetes Mellitus?",
          "Tumor maligno/ Câncer?",
          "Asma/Bronquite/Enfisema?",
          "Osteoporose? (Osteopenia?)",
          "Reumatismo?",
          "Tendinite?",
          "Problemas de circulação?",
          "Depressão?",
          "Outra?",
        ],
      },
      {
        title: " O(A) senhor(a) tem algum dos seguintes problemas de saúde:",
        input: false,
        question: 43,
        yes: 0,
        no: 0,
        questions: [
          "Dor de cabeça?",
          "Dor nas costas ou em outra parte do corpo?",
          "Alergia?",
          "Problema emocional?",
          "Tontura?",
          "Dificuldades para dormir?",
          "Incontinência urinária/perda de urina (por esforço)",
          "Outro?",
        ],
      },
      {
        question: 44,
        yes: 0,
        no: 0,
        title: "Quantidade de diagnósticos (doenças): _",
        input: true,
      },
      {
        question: 45,
        yes: 0,
        no: 0,
        input: true,
        title:
          "[Solicitar as bulas dos medicamentos utilizados pelo(a) senhor(a) e fazer registro legível dos respectivos nomes e classes terapêuticas]",
      },
      {
        question: 46,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "Nos últimos 6 meses, a quantidade de medicamentos que o(a) senhor(a) toma aumentou muito?",
      },
      {
        question: 47,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "O(A) senhor(a) sabe para que serve todos os seus medicamentos?",
      },
      {
        question: 48,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "Os medicamentos que o(a) senhor(a) faz uso foram prescritos por médicos diferentes?",
      },
      {
        question: 49,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) toma os medicamentos de acordo com as orientações médicas?",
      },
      {
        question: 50,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "O(A) senhor(a) alguma vez já deixou de tomar os medicamentos?",
      },
      {
        question: 51,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "O(A) senhor(a) tem o costume de tomar remédios por conta própria? (Quais?)",
      },
      {
        question: 52,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "Verificar na lista de medicamentos potencialmente inapropriados para idosos brasileiros (anexada ao PAGe) se o(a) idoso(a) toma algum dos medicamentos citados na mesma.",
      },
      {
        question: 53,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "Cálculo do risco para reações adversas.",
      },
    ],
  },
];

export const Questions3 = [
  {
    aspectos: "BAIXO SUPORTE SOCIAL",
    pontucao: "Pontuação (máxima=8): Necessita de invetigação",
    perguntas: [
      {
        question: 54,
        yes: 0,
        no: 0,
        input: true,
        title:
          "O(A) senhor(a) tem: cônjuge _ , pais _ , irmãos (nº) _ , filhos (nº) _ e netos (nº) _ [Fazer registro dos familiares vivos]",
      },
      {
        question: 55,
        yes: 1,
        no: 0,
        point: 1,
        title: "O(A) senhor(a) encontra familiares e/ou amigos com frequência?",
      },
      {
        question: 56,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          " O(A) senhor(a) participa de decisões importantes da sua família?",
      },
      {
        question: 57,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) se sente satisfeito(a) com o relacionamento afetivo que tem com os seus familiares?",
      },
      {
        question: 58,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title: "O(A) senhor(a) tem ajuda de alguém se precisar de dinheiro?",
      },
      {
        question: 59,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) pode contar com alguém para ajuda-lo(a) a resolver problemas?",
      },
      {
        question: 60,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) tem pessoas com quem possa se divertir e relaxar?",
      },
      {
        question: 61,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) participa de eventos sócio-culturais, tais como: peças de teatro, cinema, universidade aberta a terceira idade, centro de convivência, festas, ligados à religião, etc).",
      },
      {
        question: 62,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) é acompanhado regularmente por serviços de saúde?",
      },
    ],
  },
  {
    aspectos: "PROBLEMAS AMBIENTAIS",
    pontucao: "Pontuação (máxima=16): Necessita de invetigação",
    perguntas: [
      {
        question: 63,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title: "Na casa do(a) senhor(a), Os móveis são estáveis",
      },
      {
        question: 64,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "Na casa do(a) senhor(a), Há objetos e/ou tapetes soltos nas áreas de circulação?",
      },
      {
        question: 65,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "Na casa do(a) senhor(a), O piso é escorregadio (ex. encerado, molhado)?",
      },
      {
        question: 66,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "Na casa do(a) senhor(a), Há escadas? As escadas possuem corrimão em ambos os lados?",
      },
      {
        question: 67,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "Na casa do(a) senhor(a), As escadas/ degraus são iluminados adequadamente",
      },
      {
        question: 68,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "Na casa do(a) senhor(a), Os degraus são adequados (tamanho, rebordos, largura e padronagem, etc)? ",
      },
      {
        question: 69,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "Na casa do(a) senhor(a),Há tapetes antiderrapantes (fora e dentro box)?",
      },
      {
        question: 70,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "O(A) senhor(a) costuma, Subir em banquetas ou cadeiras para alcançar objetos altos?",
      },
      {
        question: 71,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "O(A) senhor(a) costuma, Deixa as luzes apagadas quando se levanta à noite?",
      },
      {
        question: 72,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) costuma, Utiliza calçados seguros e adequados (solado antiderrapante, bem ajustados e firmes no pé, sem saltos, etc)?",
      },
      {
        question: 73,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) está satisfeito com as calçadas do seu bairro são bem cuidadas (pavimentadas, lisas e sem buracos)?",
      },
      {
        question: 74,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) está satisfeito com o acesso ao transporte publico no seu bairro?",
      },
      {
        question: 75,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) está satisfeito com o acesso ao comercio no seu bairro?",
      },
      {
        question: 76,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) está satisfeito com a facilidade e prazer em andar (a pé com cadeira de rodas/bengala/andador) no seu bairro?",
      },
      {
        question: 77,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) está satisfeito com o acesso à diversão no seu bairro (restaurantes, cinema, clubes,etc.)?",
      },
      {
        question: 78,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "O(A) senhor(a) está satisfeito com a segurança quanto à ameaça da criminalidade no seu bairro?",
      },
    ],
  },
  {
    aspectos: "VIOLÊNCIA",
    pontucao: "Pontuação (máxima=8): Necessita de invetigação",
    perguntas: [
      {
        question: 79,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "O(A) senhor(a) tem medo de alguém próximo/do seu convívio?",
      },
      {
        question: 80,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "O(A) senhor(a) se sente só ou abandonado?",
      },
      {
        question: 81,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "Alguém tem falado com o(a) senhor(a) de forma que se sinta constrangido(a) ou desrespeitado(a)?",
      },
      {
        question: 82,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title: "Alguém tem agredido o(a) senhor(a) fisicamente?",
      },
      {
        question: 83,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "O(A) senhor(a) tem passado necessidade de roupas, alimentação, medicamentos ou outras?",
      },
      {
        question: 84,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "Alguém tem usado o dinheiro do(a) senhor(a) sem a sua autorização?",
      },
      {
        question: 85,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "Alguém do seu convívio já tocou o corpo do(a) senhor(a) sem o seu consentimento?",
      },
      {
        question: 86,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "O(A) senhor(a) está deixando de cuidar da sua própria saúde e/ou segurança?",
      },
    ],
  },
];

export const Questions4 = [
  {
    aspectos: "QUEDAS",
    pontucao: "Pontuação (máxima=16): Necessita de invetigação",
    perguntas: [
      {
        question: 87,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        tooltip:
          "[Se não, pontue também a resposta “não” na próxima questão e vá para a questão 90] [Se não, pule as próximas duas questões]",
        title:
          "O(A) senhor(a) sofreu alguma queda nos últimos 12 meses? Se sim, quantas?",
      },
      {
        question: 88,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        title:
          "O(A) senhor(a) sofreu alguma fratura decorrente destas quedas? Se sim, quais?",
      },
      {
        question: 89,
        yes: 0,
        no: 0,
        input: true,
        tooltip:
          "[Investigar atividade realizada, local, horário do dia, tipo de calçado, riscos ambientais etc]",
        point: 0,
        title:
          " O que o(a) senhor(a) estava fazendo quando sofreu essa(s) queda(s)?",
      },
      {
        question: 90,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "[Avaliação de força de MMII] – Peça ao(a) idoso(a) para levantar-se de uma cadeira sem ajuda. Assinale ao lado se o(a) idoso(a) conseguiu realizar a tarefa.",
      },
      {
        question: 91,
        yes: 1,
        no: 0,
        input: false,
        point: 1,
        title:
          "[Avaliação de equilíbrio] Peça ao(a) idoso(a) para permanecer em pé em uma única perna, sem apoio dos membros superiores, durante 5 segundos. Assinale ao lado se o(a) idoso(a) consegue realizar a tarefa",
      },
      {
        question: 92,
        yes: 0,
        no: 1,
        input: false,
        tooltip: "[ver em dados de indetificação]",
        point: 0,
        title: "Idade >75 anos",
      },
      {
        question: 93,
        yes: 0,
        no: 1,
        input: false,
        tooltip: "[ver em dados de indetificação]",
        point: 0,
        title: "Gênero feminino",
      },
      {
        question: 94,
        yes: 0,
        no: 1,
        input: false,
        tooltip:
          " [Pontuação negativa em Fluência Verbal em Funções Cognitivas]",
        point: 0,
        title: "Alterações cognitivas",
      },
      {
        question: 95,
        yes: 0,
        no: 1,
        input: false,
        tooltip: "[Pontuação > 4 em Capacidade Funcional]",
        point: 0,
        title: "Comprometimento AVDs",
      },
      {
        question: 96,
        yes: 0,
        no: 1,
        input: false,
        tooltip: "[ver questão 15]",
        point: 0,
        title: "Déficit Visual",
      },
      {
        question: 97,
        yes: 0,
        no: 1,
        input: false,
        tooltip: "[ver questões 63 a 69]",
        point: 0,
        title: "Riscos domésticos",
      },
      {
        question: 98,
        yes: 0,
        no: 1,
        input: false,
        tooltip: "[ver questões 70 a 72]",
        point: 0,
        title: "Riscos comportamentais",
      },
      {
        question: 99,
        yes: 0,
        no: 1,
        input: false,
        tooltip: "[ver questão 38]",
        point: 0,
        title: "Inatividade",
      },
      {
        question: 100,
        yes: 0,
        no: 1,
        input: false,
        tooltip: "[ver questão 42]",
        point: 0,
        title: "Acidente Vascular Encefálico prévio",
      },
      {
        question: 101,
        yes: 0,
        no: 1,
        input: false,
        tooltip: "[ver questão 45]",
        point: 0,
        title:
          "Faz uso de medicações psicotrópicas, em especial benzodiazepínicos, OU uso contínuo de 5 ou mais medicações (polifarmácia)",
      },
      {
        question: 102,
        yes: 0,
        no: 1,
        input: false,
        point: 0,
        tooltip: "[ver questões 42 e 43]",
        title:
          "Apresenta alguma das doenças a seguir: hipertensão, tontura/ vertigem, Parkinson, amputação de membros inferiores, convulsões, artrite, osteoporose, incontinência, diabetes, neuropatia, hipotensão postural",
      },
    ],
  },
];
