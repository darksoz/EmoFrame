// 0 = Não; 1 = Sim
export const Questions1 = [
    {
      aspectos: "DÉFICIT COGNITIVO",
  
      pontucao: "Pontuação (máxima=6): Necessita de investigação",
      perguntas: [
        {
          title:
            "O(A) senhor(a) considera que sua memória é tão boa quanto a de outras pessoas da sua idade?",
          point: 1,
          question: 1,
          input: false,
          yes: 1,
          no: 0,
        },
        {
          title:
            "Memória: Vou lhe dizer 3 palavras e o(a) senhor(a) irá repeti-las em seguida. Peço que memorie essas 3 palavras, pois vou lhe perguntar sobre elas mais tarde novamente. ",
          point: 1,
          tooltip: "[Instruções: Falar as 3 palavras em sequência pausadamente. Caso o(a) idoso(a) não consiga, repita no máximo 3 vezes para aprendizado. Pontuar ao lado se o(a) idoso(a) repetiu corretamente as três palavras na primeira tentativa]",
          yes: 1,
          no: 0,
          input: false,
          question: 2,
          text: ["Carro", "Vaso", "Tijolo"],
        },
        {
          title:
            "Linguagem, função executiva e atenção: Agora, eu vou marcar um minuto no relógio e durante esse tempo o(a) senhor(a) deve falar o maior número de animais de que se lembrar. Quanto mais animais o senhor fala nesse tempo melhor. ",
          point: 1,
          tooltip:"[Instruções: Anote os nomes de animais falados pelo(a) idoso(a) a cada 15 segundos, e registrar, mas não contar animais repetidos]. Pode começar. Pontuação de acordo com escolaridade: 1) analfabetos = 9 animais; 2) 1-7 anos = 12 animais e 3) 8 anos ou mais = 13 animais.",
          question: 3,
          input: false,
          yes: 1,
          no: 0,
          images: ["time1.png", "time2.png", "time3.png", "time4.png"],
        },
        {
          title:
            "Memória tardia: O(a) senhor(a) consegue se lembrar das 3 palavras que lhe pedi            que repetisse agora há pouco? [Atenção: o entrevistador não deve dizer as palavras. Pontue se o(a) idoso(a) lembrou e repetiu corretamente as 3 palavras].",
          question: 4,
          input: false,
          yes: 1,
          no: 0,
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
          "Teste do relógio: Aplique apenas se o (a) idoso tiver escolaridade igual ou superior a 5 anos. Caso não, pontue ao lado de forma negativa. Esteja com uma folha com um desenho de um círculo de 11 cm de diâmetro e dê as instruções para a tarefa] Senhor(a), nesta folha temos um mostrador de um relógio. Gostaria que o senhor(a) colocasse os números dentro dele. [Aguardar]. Por favor, agora indique o horário 11h10 (onze horas e 10 minutos) ",
          question: 6,
          tooltip:"[Pontue ao lado se o(a) idoso(a) atingiu a nota de corte esperada. Nota de corte: Atribua um ponto para cada posicionamento correto dos  números 1,2,4,5,7,8,10 e 11, mais um ponto para cada ponteiro correto (pontuação máxima = 10). Ponto de corte = 7]",
          yes: 1,
          input: false,
          no: 0,
          point: 1,
        },
      ],
    },
    {
      aspectos: "ATITUDE NEGATIVA EM RELAÇÃO AO ENVELHECIMENTO",
      pontucao: "Pontuação (máxima=8): Necessita de investigação",
      perguntas: [
        {
          question: 7,
          yes: 1,
          no: 0,
          input: false,
          point: 0,
          title: "De maneira geral, o(a) senhor(a) diria que a sua saúde é boa?",
        },
        {
          question: 8,
          yes: 0,
          no: 1,
          input: true,
          point: 0,
          title:
            "Que idade o (a) senhor(a) sente ter _? Por quê? ",
          tooltip:"[Instruções: Com base na resposta dada, analisar e registrar ao lado se o(a) idoso(a) sente-se mais velho do que realmente é:]"
        },
        {
          question: 9,
          yes: 0,
          no: 1,
          input: false,
          point: 1,
          title: "Ao pensar no seu envelhecimento o(a) senhor(a) se sente preocupado(a)?",
        },
        {
          question: 10,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title: "O(a) senhor(a) acha que a velhice, de forma geral, tem mais pontos negativos do que positivos?",
        },
        {
          question: 11,
          yes: 0,
          input: false,
          no: 1,
          point: 0,
          title:
            "O(a) senhor(a) acha que é possível ter uma vida sexual saudável na velhice?",
        },
        {
          question: 12,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title: "O(a) senhor(a) acha que há poucas coisas que uma pessoa possa realizar na velhice?",
        },
        {
          question: 13,
          point: 0,
          yes: 0,
          input: false,
          no: 1,
          title:
            "O(a) senhor(a) acha que a velhice é sinônimo de debilidade física?",
        },
        {
          question: 14,
          yes: 0,
          input: false,
          no: 1,
          point: 0,
          title: "O(a) senhor(a) acha que é melhor morrer cedo do que ficar velho(a)?",
        },


      ],
    },
    {
      aspectos: "DEPRESSÃO",
      pontucao: "Pontuação (máxima=5): Necessita de investigação",
      instrucao: "Antes de iniciar diga ao idoso: 'Vou lhe fazer algumas perguntas para saber como o(a) senhor(a) vem se sentindo na última semana.'",
      perguntas: [
        {
          question: 15,
          yes: 1,
          no: 0,
          input: false,
          point: 0,
          title: "De modo geral o(a) senhor(a) está satisfeito com a vida?",
        },
        {
          question: 16,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "O(a) senhor (a) se sente triste com frequência?",
        },
        {
          question: 17,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "O(a) senhor(a) abandonou muitas das coisas que fazia ou gostava de fazer?",
        },
        {
          question: 18,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "O(a) senhor(a) tem medo de que algo ruim lhe aconteça?",
        },
        {
          question: 19,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "O(a) Sr.(a) se sente impaciente e agitado(a) com frequência?",
        },
      ],
    },
  ];
  
  export const Questions2 = [
    {
      aspectos: "DÉFICIT SENSORIAL",
      pontucao: "Pontuação Máxima = 4. Necessita de investigação?",
      perguntas: [
        {
          question: 20,
          yes: 0,
          input: false,
          no: 1,
          point: 0,
          title: "O(a) senhor(a) tem dificuldades para enxergar? [Observação: Mesmo se já utilizar óculos ou outros métodos corretivos].",
        },
        {
          question: 21,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "O(a) senhor tem dificuldades para ouvir o que as pessoas falam? [Observação: Mesmo se já utilizar aparelho auditivo.]",
        },
        {
          question: 22,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "O(a) senhor(a) tem dificuldade para sentir o sabor dos alimentos?",
        },
        {
          question: 23,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title: "Por causa dos seus sentidos (visão, audição, paladar), o senhor(a) tem dificuldade de realizar suas atividades cotidianas?",
        },
      ],
    },
    {
      aspectos: "INCAPACIDADE FUNCIONAL",
      pontucao: "Pontuação (máxima=6): Necessita de investigação",
      perguntas: [
        
        {
          question: 24,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title: "O(A) senhor(a) necessita de ajuda para fazer compras fora de casa?",
        },
        {
          question: 25,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title: "O(A) senhor(a) necessita de ajuda para usar meios de transporte coletivo (ônibus, metrô e trem)?",
        },
        {
          question: 26,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title: "O(A) senhor(a) necessita de ajuda para cozinhar a própria comida?",
        },
        {
          question: 27,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "O(A) senhor(a) necessita de ajuda para usar a telefone?",
        },
        {
          question: 28,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title: "O(A) senhor(a) necessita de ajuda para vestir-se (exceto para colocar as meias e calçados)?",
        },
        {
          question: 29,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "O(A) senhor(a) necessita de ajuda para tomar banho?",
        },
      ],
    },
    {
      aspectos: "DESNUTRIÇÃO",
      pontucao: "Pontuação (máxima=6): Necessita de investigação",
      perguntas: [
        
        {
          question: 30,
          yes: 0,
          no: 1,
          point: 0,
          title:
            "O(a) senhor tem dificuldades para mastigar?",
          input: false,
        },
        {
          question: 31,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "O(a) senhor(a) faz menos do que três refeições por dia?",
        },
        {
          question: 32,
          point: true,
          title:
            "Nos últimos 3 meses, o(a) senhor(a) percebeu que passou a comer menos sem motivo?",
          yes: 0,
          no: 1,
        },
        {
          question: 33,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "Nos últimos 3 meses, o(a) senhor(a) perdeu peso sem motivo aparente? Se sim, quantos quilos?",
        },
        {
          question: 34,
          yes: 0,
          no: 1,
          input: false,
          point: 1,
          title: "Nos últimos 3 meses, o(a) senhor(a) passou por algum estresse psicológico?",
        },
        {
          question: 35,
          yes: 0,
          no: 1,
          imc: true,
          input: true,
          point: true,
          title: "Índice de Massa Corporal (peso _ [kg]/ estatura _ [Cm]) igual ou menor que 22 kg/m2",
        },
      ],
    },
    {
      aspectos: "DOENÇAS CARDIOVASCULA-RES (DCV)",
      pontucao: "Pontuação (máxima=8): Necessita de investigação",
      perguntas: [
        
        {
          question: 36,
          yes: 0,
          no: 1,
          input: false,
          tooltip:
            "Pontuar como sim quando CT e HDL forem verificados em último exame como superior a 200 mg/dL e 60mg/dL, respectivamente, ou caso o(a) idoso(a) não saiba informar]",
          point: 1,
          title: "O(a) senhor(a) tem histórico familiar (pais, irmãos ou filhos) de DCV (infarto, derrame, angina)?",
        },
        {
          question: 37,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title: "O(a) senhor(a) tem pressão alta (superior a 140 x 90 mmHg)? ",
          tooltip:"[Instruções: Pontuar como sim quando PA autorreferida for superior ao valor indicado, mesmo com o uso de anti-hipertensivos, ou caso o(a) idoso(a) não saiba informar.]",
        },
        {
          question: 38,
          yes: 0,
          no: 1,
          input: false,
          point: 1,
          title:
            "O(a) senhor(a) tem glicemia de jejum superior a 100 mg/dL? ",
          tooltip:"[Instruções: Pontuar como sim quando a resposta for positiva mesmo com o uso de antidiabéticos ou caso o(a) idoso(a) não saiba informar.]",
          },
        {
          question: 39,
          yes: 0,
          no: 1,
          input: false,
          point: 1,
          title: "O(a) senhor(a) tem colesterol alterado? [Instruções: Pontuar como sim quando 1) verificar no exame valores de CT e HDL superior a 200mg/dL e inferior 60mg/dL, respectivamente, mesmo com uso de hipolipemiantes; 2) autorrelato de colesterol alterado; ou 3) caso o(a) idoso(a) não saiba informar.]",
        },
        {
          question: 40,
          yes: 0,
          no: 1,
          point: 0,
          title:
            "O(a) senhor(a) fuma ou deixou de fumar nos últimos seis meses?",
        },
        {
          question: 41,
          yes: 0,
          no: 1,
          input: true,
          point: 0,
          title: "O(a) senhor(a) tem o hábito de ingerir bebidas alcoólicas? Se sim, qual o tipo da bebida? _ E quantas doses, taças ou latas em uma semana? _ .",
          tooltip:"[Instruções: Depois assinale ao lado a resposta equivalente, considerando as seguintes referências:",
        },
        {
          question: 42,
          yes: 0,
          no: 1,
          input: true,
          title:
            "O(a) senhor(a) pratica exercícios físicos regulares (caminhada, natação, dança, ginástica, musculação, entre outros)? Se sim, qual a frequência? _ E por quanto tempo? _ . ",
          tooltip:"[Instruções: Depois assinale ao lado a resposta equivalente (sim ou não) considerando prática regular de exercícios como: frequência igual ou superior a 2 dias/semana com tempo total igual ou superior a 150 minutos/semana]."
        },
        {
          title: "IMC para obesidade: ≥27 Kg/m2",
          tooltip:"[verificar na questão 35]",
          input: false,
          question: 43,
          yes: 0,
          no: 1,
        },
      ],
    },
    {
      aspectos: "USO INADEQUADO DE MEDICAMENTOS",
      pontucao: "Pontuação (máxima=9): Necessita de investigação",
      perguntas: [ 
        {
          question: 44,
          yes: 0,
          no: 0,
          title: "Nos últimos 5 anos, algum médico ou outro profissional de saúde já disse que o(a) senhor(a) tem:",
          tooltip:"[Instruções: registre a quantidade total de diagnósticos:]",
          input: false,
          questions:[
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
            "Outra? ",
          ]
        },
        {
          question: 45,
          yes: 0,
          no: 0,
          input: true,
          title:
            "O(a) senhor(a) tem algum dos seguintes problemas de saúde:",
          questions:[
            "Dor de cabeça?",
            "Dor nas costas ou em outra parte do corpo?",
            "Alergia?",
            "Problema emocional?",
            "Tontura?",
            "Dificuldades para dormir?",
            "Incontinência urinária/perda de urina (por esforço)",
            "Outro? ",
          ]
        },
        {
          question: 46,
          yes: 0,
          no: 1,
          input: true,
          point: 0,
          title:
            "Quais os medicamentos utilizados pelo(a) senhor(a)? _",
          tooltip:"Instruções: Solicitar as bulas dos medicamentos e fazer registro legível dos respectivos nomes e classes terapêuticas.] [Instrução: Para classificar se há presença de polifarmácia,registrar ao lado se o idoso utiliza cinco medicamentos ou mais.]"
        },
        {
          question: 47,
          yes: 1,
          no: 0,
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
            "Nos últimos 6 meses, houve aumento progressivo na quantidade de medicamentos prescritos para o(a) senhor(a)?",
        },
        {
          question: 49,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title:
            "Os medicamentos que o(a) senhor(a) faz uso foram prescritos por médicos diferentes?",
        },
        {
          question: 50,
          yes: 1,
          no: 0,
          input: false,
          point: 0,
          title: "O(a) senhor(a) toma os medicamentos de acordo com as orientações médicas?",
        },
        {
          question: 51,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "O (a) senhor(a) deixa de tomar seus medicamentos com frequência?",
        },
        {
          question: 52,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:"O(a) senhor(a) tem o costume de tomar remédios por conta própria?"
        },
        {
          question: 53,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title: "Verificar na lista de medicamentos potencialmente inapropriados para idosos brasileiros (anexada ao PAGe) se o(a) idoso(a) toma algum dos medicamentos citados na mesma. [Caso sim, pontue ao lado e os deixe destacados na lista.]",
        },
        {
          question: 54,
          yes: 0,
          no: 1,
          input: false,
          title:
            "Cálculo do risco para reações adversas.",
          tooltip:"[Instruções: Para utilizar esta tabela e saber se o idoso se enquadra em um grupo de risco para reações adversas, verifique na questão 44 o número de diagnósticos e na questão 53 se o idoso faz uso de medicamento inapropriado. Circule estas informações nas respectivas coluna e linha em destaque na tabela e, em seguida, as cruze para saber o número máximo de medicamentos que o idoso poderia tomar. Por último, verifique na questão 46 se (o) idoso(a) utiliza uma quantidade de medicamentos superior ao valor indicado na tabela. Assinale ao lado a respectiva resposta.]"
        },
      ],
    },
  ];
  
  export const Questions3 = [
    {
      aspectos: "BAIXO SUPORTE SOCIAL",
      pontucao: "Pontuação (máxima=8): Necessita de investigação",
      perguntas: [
        
        {
          question: 55,
          yes: 1,
          no: 0,
          input:true,
          point: 1,
          title: "O(a) senhor(a) tem [fazer registro dos familiares vivos]: cônjuge _, pais _, irmãos (nª) _, filhos(nª) _ , netos(nª) _  e bisnetos (n°) _.",
        },
        {
          question: 56,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title:
            "O(a) senhor(a) encontra pessoas que gosta com frequência?",
        },
        {
          question: 57,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title:
            "O(a) senhor(a) participa de decisões tomadas pela sua família?",
        },
        {
          question: 58,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title: "O(a) senhor(a) se sente satisfeito(a) com os seus relacionamentos afetivos?",
        },
        {
          question: 59,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title:
            "O(a) senhor(a) pode contar com alguém se precisar de dinheiro?",
        },
        {
          question: 60,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title:
            "O(a) senhor(a) pode contar com alguém para ajudá-lo(a) a resolver problemas?",
        },
        {
          question: 61,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title:
          "O(a) senhor(a) tem pessoas com quem possa se divertir e relaxar?"
        },
        {
          question: 62,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title:
            "O (a) senhor(a) participa de eventos socioculturais, tais como: peças de teatro, cinema, universidade aberta a terceira idade, centro de convivência, festas, ligado à religião etc.).",
        },
        {
          question: 63,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title: "O(a) senhor(a) é atendido regularmente por serviços de saúde?",
        },
      ],
    },
    {
      aspectos: "Violência",
      pontucao: "Pontuação (máxima=8): Necessita de investigação",
      perguntas: [
        
        {
          question: 64,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "O(a) senhor(a) tem medo de alguém do seu convívio?",
        },
        {
          question: 65,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "O(a) senhor se sente abandonado?",
        },
        {
          question: 66,
          yes: 0,
          no: 1,
          input: false,
          point: 1,
          title:
            "Alguém tem falado com o(a) senhor(a) de forma que se sinta mal consigo mesmo(a)?",
        },
        {
          question: 67,
          yes: 0,
          no: 1,
          input: false,
          point: 1,
          title:
            "Alguém tem agredido o(a) senhor(a) fisicamente?",
        },
        {
          question: 68,
          yes: 0,
          no: 1,
          input: false,
          point: 1,
          title:
            "O(a) senhor tem passado necessidades (de roupas, alimentação, medicamentos ou outras)?",
        },
        {
          question: 69,
          yes: 0,
          no: 1,
          input: false,
          point: 1,
          title:
            "Alguém tem usado o dinheiro do(a) senhor(a) sem a sua autorização?",
        },
        {
          question: 70,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "Alguém do seu convívio já tocou o corpo do(a) senhor(a) sem o seu consentimento?",
        },
        {
          question: 71,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title:
            "O(a) senhor está deixando de cuidar de si próprio?",
        },
      ],
    },
    {
      aspectos: "Problemas Ambientais",
      pontucao: "Pontuação (máxima=16): Necessita de investigação",
      instrucao:"Ambiente interno – Na casa do(a) senhor(a):",
      perguntas: [
        {
          question: 72,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title:
            "Os móveis próximos as áreas de circulação são estáveis (firmes)?",
        },
        {
          question: 73,
          yes: 0,
          no: 1,
          input: false,
          point: 1,
          title:
            "Há objetos (chinelos, brinquedos, tapetes, etc) soltos nas áreas de circulação?",
        },
        {
          question: 74,
          yes: 0,
          no: 1,
          input: false,
          point: 1,
          title:
            "O piso é escorregadio (ex. encerado, molhado)?",
        },
        {
          question: 75,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title:
            "Há tapetes antiderrapantes (fora e dentro do box)?",
        },
        {
          question: 76,
          yes: 0,
          no: 1,
          input: false,
          point: 1,
          title:
            "Há escadas? [Instruções: item sem pontuação. Se não houver escadas, pular as próximas duas questões e pontuá-las positivamente]",
        },
        {
          question: 77,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title:
            "As escadas são iluminadas?",
        },
        {
          question: 78,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title:
            "As escadas possuem corrimãos em ambos os lados?",
        },
        {
          question: 79,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          title: "Subir em banquetas ou cadeiras para alcançar objetos altos?",
        },
        {
          question: 80,
          yes: 1,
          no: 0,
          input: false,
          point: 0,
          title: "Acender as luzes ao levantar-se à noite?",
        },
        {
          question: 81,
          yes: 1,
          no: 0,
          input: false,
          point: 0,
          title:
            "Utilizar calçados seguros e adequados (solado antiderrapante, bem ajustados e firmes no pé, sem saltos etc)?",
        },
        {
          question: 82,
          yes: 1,
          no: 0,
          input: false,
          point: 0,
          title: "As calçadas próximas à sua residência são bem cuidadas (pavimentadas, lisas e sem buracos)?",
        },
        {
          question: 83,
          yes: 1,
          no: 0,
          input: false,
          point: 0,
          title:
            "No seu bairro, o transporte público é acessível?",
        },
        {
          question: 84,
          yes: 1,
          no: 0,
          input: false,
          point: 0,
          title:
            "No seu bairro, o comércio é acessível?",
        },
        {
          question: 85,
          yes: 1,
          no: 0,
          input: false,
          point: 0,
          title:
            "No seu bairro, há facilidade e prazer em andar (a pé/com cadeiras de rodas/bengala/ andador)?",
        },
        {
          question: 86,
          yes: 1,
          no: 0,
          input: false,
          point: 0,
          title:
            "No seu bairro, a diversão (restaurantes, cinema, clubes, etc) é acessível?",
        },
        {
          question: 87,
          yes: 1,
          no: 0,
          input: false,
          point: 0,
          title:
            "O seu bairro é seguro?",
        },
      ],
    },
  ];
  
  export const Questions4 = [
    {
      aspectos: "QUEDAS",
      pontucao: "Pontuação (máxima=17): Necessita de invetigação",
      perguntas: [
        {
          question: 88,
          yes: 0,
          no: 1,
          input: true,
          point: 0,
          title:
            "O(a) senhor(a) sofreu alguma queda nos últimos 12 meses? Se sim, quantas? _",
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
            "O(a) senhor(a) sofreu alguma fratura decorrente destas quedas ? Se sim, quais _ ?",
        },
        {
          question: 90,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title:"O que o (a) senhor(a) estava fazendo quando sofreu essa(s) queda(s)?"
        },
        {
          question: 91,
          yes: 1,
          no: 0,
          input: false,
          point: 1,
          title:"Instruções: Utilizando uma cadeira de assento e encosto firmes, sem braços, peça ao(a) idoso(a) para levantar-se de uma cadeira sem ajuda. Assinale ao lado se o(a) idoso(a) conseguiu realizar a tarefa.]"
        },
        {
          question: 92,
          yes: 1,
          no: 0,
          input: false,
          tooltip: "[ver em dados de indetificação]",
          point: 0,
          title: "[Instruções: Peça ao(a) idoso(a) para permanecer em pé em uma única perna, sem apoio dos membros superiores, durante 5 segundos. Oriente retornar o pé no chão em caso de perda de equilíbrio. Assinale ao lado se o(a) idoso(a) conseguiu realizar a tarefa.]",
        },
        {
          question: 93,
          yes: 0,
          no: 1,
          input: false,
          tooltip: "[ver em dados de indetificação]",
          point: 0,
          title: "O(a) senhor(a) faz uso de dispositivo de auxílio à marcha (bengala, andador) sem orientação profissional?",
        },
        {
          question: 94,
          yes: 0,
          no: 1,
          input: false,
          tooltip:
            " [Pontuação negativa em Fluência Verbal em Funções Cognitivas]",
          point: 0,
          title: "Idade > 75 anos",
        },
        {
          question: 95,
          yes: 0,
          no: 1,
          input: false,
          tooltip: "[Pontuação > 4 em Capacidade Funcional]",
          point: 0,
          title: "Gênero feminino",
        },
        {
          question: 96,
          yes: 0,
          no: 1,
          input: false,
          tooltip: "[ver questão 15]",
          point: 0,
          title: "Alterações cognitivas",
        },
        {
          question: 97,
          yes: 1,
          no: 0,
          input: false,
          tooltip: "[ver questões 63 a 69]",
          point: 0,
          title: "Comprometimento AVDs",
        },
        {
          question: 98,
          yes: 0,
          no: 1,
          input: false,
          tooltip: "[ver questões 70 a 72]",
          point: 0,
          title: "Déficit visual",
        },
        {
          question: 99,
          yes: 0,
          no: 1,
          input: false,
          tooltip: "[ver questão 38]",
          point: 0,
          title: "Riscos domésticos",
        },
        {
          question: 100,
          yes: 0,
          no: 1,
          input: false,
          tooltip: "[ver questão 42]",
          point: 0,
          title: "Riscos comportamentais",
        },
        {
          question: 101,
          yes: 0,
          no: 1,
          input: false,
          tooltip: "[ver questão 45]",
          point: 0,
          title:
            "Inatividade",
        },
        {
          question: 102,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          tooltip: "[ver questões 42 e 43]",
          title:"Acidente Vascular Encefálico prévio"
        },
        {
          question: 103,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          tooltip: "[ver questões 42 e 43]",
          title:"Faz uso de medicações psicotrópicas, em especial benzodiazepínicos, ou uso continuo de 5 ou mais medicações (polifarmacia)"
        },
        {
          question: 104,
          yes: 0,
          no: 1,
          input: false,
          point: 0,
          tooltip: "[ver questões 42 e 43]",
          title:"Apresenta alguma das doenças a seguir: hipertensão, tontura/ vertigem, Parkinson, amputação de membros inferiores, convulsões, artrite, osteoporose,      incontinência, diabetes, neuropatia, hipotensão postural"
        },
      ],
    },
  ];