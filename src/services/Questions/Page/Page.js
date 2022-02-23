export const Questions = [
    {
        title:"O(A) senhor(a) considera que sua memória é tão boa quanto antes?",

    },
    {
        title: " Memória: Eu vou lhe dar um nome e um endereço e eu gostaria que você os repetisse depois de mim. Nós vamos fazer isso três vezes, assim você terá a possibilidade de aprendê-los. Eu vou lhe perguntar mais tarde. Pontuar apenas a terceira tentativa.",
        question: [
            "Renato Moreira","Rua Bela Vista, 73", "Santarém","Pará"
        ]
    },
    {
        title: "Linguagem, função executiva e atenção: “O(a) senhor(a) deve falar todos os nomes de animais de que se lembrar, o mais rápido possível. Quantos mais falar, melhor. Pode começar”. Anote os nomes de animais falados pelo(a) idoso(a) a cada 15 segundos."
    },
    {
        title:"Habilidade visuoespacial: Peça ao indivíduo para contar os pontos sem apontá-los"
    },
    {
        title: "Praxia: (Esteja com uma folha em mãos) “Pegue este papel com a mão direita. Dobre-o ao meio e coloque-o sobre a mesa” (Falar todos os comandos de uma só vez)"
    },
    {
        title: "Memória: Agora você vai me dizer o que você se lembra daquele nome e endereço que nós repetimos no começo",
        question: [
            "Renato Moreira","Rua Bela Vista, 73", "Santarém","Pará"
        ] 
    },
    {
        title:"Que idade o(a) senhor(a) sente ter_______? Por quê?"
    },
    {
        title:"Existem pontos positivos e negativos presentes na velhice? Quais?"
    },
    {
        title:"De modo geral o(a) senhor(a) está satisfeito com a vida?"
    },
    {
        title:"O(A) senhor(a) se sente triste com frequência?"
    },
    {
        title:"O(A) senhor(a) abandonou muitas das coisas que fazia ou gostava de fazer?"
    },
    {
        title: "O(A) senhor(a) tem medo que algum mal vá lhe acontecer?"
    },
    {
        title:"O(A) senhor(a) se sente impaciente e agitado(a) com frequência?"
    },
    {
        title:"O(A) senhor(a) tem dificuldade em se concentrar?"
    }
]

export const Questions2 = [
    {aspectos:'DÉFICIT SENSORIAL',
    pontucao:'Pontuação (máxima=5): Necessita de invetigação',
    perguntas:[
    {
        title:"O(A) senhor(a) tem problemas de visão?"
    },
    {
        title:"O(A) senhor(a) tem dificuldade de ouvir o que as pessoas falam?"
    },
    {
        titlte:"O(A) senhor(a) tem dificuldade para sentir o sabor dos alimentos?"
    },
    {
        title:"O(A) senhor(a) considera ruim o funcionamento dos seus sentidos?"
    },
    {
        title:" O(A) senhor(a) considera que o funcionamento dos seus sentidos afeta sua capacidade de interagir com outras pessoas?"
    }]},
    {aspectos:'INCAPACIDADE FUNCIONAL',
    pontucao:'Pontuação (máxima=6): Necessita de invetigação',
    perguntas:[
    {
        title:"O(A) senhor(a) necessita de ajuda para Fazer compras?"
    },
    {
        title:"O(A) senhor(a) necessita de ajuda para usar meios de transporte?"
    },
    {
        title:"O(A) senhor(a) necessita de ajuda para preparar a própria comida?"
    },
    {
        title: "O(A) senhor(a) necessita de ajuda para usar telefone?"
    },
    {
        title:"O(A) senhor(a) necessita de ajuda para vestir-se?"
    },
    {
        title:"O(A) senhor(a) necessita de ajuda para tomar banho?"
    }]},
    {aspectos:'DESNUTRIÇÃO',
    pontucao:'Pontuação (máxima=7): Necessita de invetigação',
    perguntas:[
    {
        title:"O(A) senhor(a) acha ou considera que está desnutrido?"
    },
    {
        title:"O(A) senhor(a) tem lesões na região bucal ou algum outro problema que provoque dificuldades de mastigação?"
    },
    {
        title:"O(A) senhor(a) faz menos de três refeições por dia?"
    },
    {
        title:"Nos ultimos 3 meses,O(A) senhor(a), Diminuiu sua ingesta alimentar sem motivo?"
    },
    {
        title:"Nos ultimos 3 meses,O(A) senhor(a), perdeu peso sem motivo aparente? se sim, quantos quilos?"
    },
    {
        title:"Nos ultimos 3 meses,O(A) senhor(a), Passou por algum estresse psicologico, doenca aguda ou internações"
    },
    {
        title:"Índice de Massa Corporal (peso____[kg]/ estatura____[m2]) =_____kg/m2) igual ou menor que 22 kg/m2"
    }]},
    {aspectos:'DOENÇAS CARDIOVASCULARES (DCV)',
    pontucao:'Pontuação (máxima=9): Necessita de invetigação',
    perguntas:[
    {
        title:"O(A) senhor(a) tem histórico familiar (1º grau) de DCV (infarto, derrama e/ou angina)?"
    },
    {
        title:"O(a) senhor(a) tem hipertensão arterial descontrolada?"
    },
    {
        title:"O(A) senhor(a) tem diabetes? Se sim, está descontrolada?"
    },
    {
        title:"O(A) senhor(a) colesterol alterado?"
    },
    {
        title:"O(A) senhor(a) fuma ou é ex-fumante?"
    },
    {
        title:"O(A) senhor(a) pratica mais de 150 minutos de exercícios físicos por semana?"
    },
    {
        title:"O(A) senhor(a) considera que sua alimentação é saudável?"
    },
    {
        title:"Na última semana, o(a) senhor(a) ingeriu bebidas alcoólicas? Se sim, tipo:__________ quantidade:__________"
    },
    {
        title:"IMC para obesidade: 27 Kg/m2"
    }]},
    {aspectos:'USO INADEQUADO DE MEDICAMENTOS',
    pontucao:'Pontuação (máxima=9): Necessita de invetigação',
    perguntas:[
    {
        title:"Nos últimos 5 anos, algum médico ou outro profissional de saúde já disse que o(a) senhor(a) tem:",
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
            "Outra?"
        ]
    },
    {
        title:" O(A) senhor(a) tem algum dos seguintes problemas de saúde:",
        questions:[
            "Dor de cabeça?",
            "Dor nas costas ou em outra parte do corpo?",
            "Alergia?",
            "Problema emocional?",
            "Tontura?",
            "Dificuldades para dormir?",
            "Incontinência urinária/perda de urina (por esforço)",
            "Outro?"
        ]
    },
    {
        title:"Quantidade de diagnósticos (doenças):"
    },
    {
        title:"[Solicitar as bulas dos medicamentos utilizados pelo(a) senhor(a) e fazer registro legível dos respectivos nomes e classes terapêuticas]"
    },
    {
        title:"Nos últimos 6 meses, a quantidade de medicamentos que o(a) senhor(a) toma aumentou muito?"
    },
    {
        title:"O(A) senhor(a) sabe para que serve todos os seus medicamentos?"
    },
    {
        title:"Os medicamentos que o(a) senhor(a) faz uso foram prescritos por médicos diferentes?"
    },
    {
        title:"O(A) senhor(a) toma os medicamentos de acordo com as orientações médicas?"
    },
    {
        title:"O(A) senhor(a) alguma vez já deixou de tomar os medicamentos?"
    },
    {
        title:"O(A) senhor(a) tem o costume de tomar remédios por conta própria? (Quais?)"
    },
    {
        title:"Verificar na lista de medicamentos potencialmente inapropriados para idosos brasileiros (anexada ao PAGe) se o(a) idoso(a) toma algum dos medicamentos citados na mesma."
    },
    {
        title:"Cálculo do risco para reações adversas."
    }]}
]

export const Questions3 = [
    {aspectos:'BAIXO SUPORTE SOCIAL',
    pontucao:'Pontuação (máxima=8): Necessita de invetigação',
    perguntas:[
    {
        title:"O(A) senhor(a) tem: cônjuge___________, pais_____________, irmãos (nº)_________, filhos (nº)__________ e netos (nº)___________ [Fazer registro dos familiares vivos]"
    },
    {
        title:"O(A) senhor(a) encontra familiares e/ou amigos com frequência?"
    },
    {
        title:" O(A) senhor(a) participa de decisões importantes da sua família?"
    },
    {
        title:"O(A) senhor(a) se sente satisfeito(a) com o relacionamento afetivo que tem com os seus familiares?"
    },
    {
        title:"O(A) senhor(a) tem ajuda de alguém se precisar de dinheiro?"
    },
    {
        title:"O(A) senhor(a) pode contar com alguém para ajuda-lo(a) a resolver problemas?"
    },
    {
        title:"O(A) senhor(a) tem pessoas com quem possa se divertir e relaxar?"
    },
    {
        title:"O(A) senhor(a) participa de eventos sócio-culturais, tais como: peças de teatro, cinema, universidade aberta a terceira idade, centro de convivência, festas, ligados à religião, etc)."
    },
    {
        title:"O(A) senhor(a) é acompanhado regularmente por serviços de saúde?"
    }]},
    {aspectos:'PROBLEMAS AMBIENTAIS',
    pontucao:'Pontuação (máxima=16): Necessita de invetigação',
    perguntas:[
    {
        title:"Na casa do(a) senhor(a), Os móveis são estáveis"
    },
    {
        title:"Na casa do(a) senhor(a), Há objetos e/ou tapetes soltos nas áreas de circulação?"
    },
    {
        title:"Na casa do(a) senhor(a), O piso é escorregadio (ex. encerado, molhado)?"
    },
    {
        title:"Na casa do(a) senhor(a), Há escadas? As escadas possuem corrimão em ambos os lados?"
    },
    {
        title:"Na casa do(a) senhor(a), As escadas/ degraus são iluminados adequadamente"
    },
    {
        title: "Na casa do(a) senhor(a), Os degraus são adequados (tamanho, rebordos, largura e padronagem, etc)? "
    },
    {
        title:"Na casa do(a) senhor(a),Há tapetes antiderrapantes (fora e dentro box)?"
    },
    {
        title:"O(A) senhor(a) costuma, Subir em banquetas ou cadeiras para alcançar objetos altos?"
    },
    {
        title:"O(A) senhor(a) costuma, Deixa as luzes apagadas quando se levanta à noite?"
    },
    {
        title:"O(A) senhor(a) costuma, Utiliza calçados seguros e adequados (solado antiderrapante, bem ajustados e firmes no pé, sem saltos, etc)?"
    },
    {
        title:"O(A) senhor(a) está satisfeito com as calçadas do seu bairro são bem cuidadas (pavimentadas, lisas e sem buracos)?"
    },
    {
        title:"O(A) senhor(a) está satisfeito com o acesso ao transporte publico no seu bairro?"
    },
    {
        title:"O(A) senhor(a) está satisfeito com o acesso ao comercio no seu bairro?"
    },
    {
        title:"O(A) senhor(a) está satisfeito com a facilidade e prazer em andar (a pé com cadeira de rodas/bengala/andador) no seu bairro?"
    },
    {
        title:"O(A) senhor(a) está satisfeito com o acesso à diversão no seu bairro (restaurantes, cinema, clubes,etc.)?"
    },
    {
        title:"O(A) senhor(a) está satisfeito com a segurança quanto à ameaça da criminalidade no seu bairro?"
    }]},
    {aspectos:'VIOLÊNCIA',
    pontucao:'Pontuação (máxima=8): Necessita de invetigação',
    perguntas:[
    {
        title:"O(A) senhor(a) tem medo de alguém próximo/do seu convívio?"
    },
    {
        title:"O(A) senhor(a) se sente só ou abandonado?"
    },
    {
        title:"Alguém tem falado com o(a) senhor(a) de forma que se sinta constrangido(a) ou desrespeitado(a)?"
    },
    {
        title:"Alguém tem agredido o(a) senhor(a) fisicamente?"
    },
    {
        title:"O(A) senhor(a) tem passado necessidade de roupas, alimentação, medicamentos ou outras?"
    },
    {
        title:"Alguém tem usado o dinheiro do(a) senhor(a) sem a sua autorização?"
    },
    {
        title:"Alguém do seu convívio já tocou o corpo do(a) senhor(a) sem o seu consentimento?"
    },
    {
        title:"O(A) senhor(a) está deixando de cuidar da sua própria saúde e/ou segurança?"
    }]},
]

export const Questions4 = [
    {aspectos:'QUEDAS',
    pontucao:'Pontuação (máxima=16): Necessita de invetigação',
    perguntas:[
    {
        title:"O(A) senhor(a) sofreu alguma queda nos últimos 12 meses? Se sim, quantas?"
    },
    {
        title:"O(A) senhor(a) sofreu alguma fratura decorrente destas quedas? Se sim, quais?"
    },
    {
        title:" O que o(a) senhor(a) estava fazendo quando sofreu essa(s) queda(s)?"
    },
    {
        title:"[Avaliação de força de MMII] – Peça ao(a) idoso(a) para levantar-se de uma cadeira sem ajuda. Assinale ao lado se o(a) idoso(a) conseguiu realizar a tarefa."
    },
    {
        title:"[Avaliação de equilíbrio] Peça ao(a) idoso(a) para permanecer em pé em uma única perna, sem apoio dos membros superiores, durante 5 segundos. Assinale ao lado se o(a) idoso(a) consegue realizar a tarefa"
    },
    {
        title:"Idade >75 anos"
    },
    {
        title:"Gênero feminino"
    },
    {
        title:"Alterações cognitivas"
    },
    {
        title:"Comprometimento AVDs"
    },
    {
        title:"Déficit Visual"
    },
    {
        title:"Riscos domésticos"
    },
    {
        title:"Riscos comportamentais"
    },
    {
        title:"Inatividade"
    },
    {
        title:"Acidente Vascular Encefálico prévio"
    },
    {
        title:"Faz uso de medicações psicotrópicas, em especial benzodiazepínicos, OU uso contínuo de 5 ou mais medicações (polifarmácia)"
    },
    {
        title:"Apresenta alguma das doenças a seguir: hipertensão, tontura/ vertigem, Parkinson, amputação de membros inferiores, convulsões, artrite, osteoporose, incontinência, diabetes, neuropatia, hipotensão postural"
    }]}
]

export const QuestionsFormat = [
    {aspectos:'DÉFICIT COGNITIVO',
    pontucao:'Pontuação (máxima=6): Necessita de invetigação',
    perguntas:[
    {
        title:"O(A) senhor(a) considera que sua memória é tão boa quanto antes?",

    },
    {
        title: " Memória: Eu vou lhe dar um nome e um endereço e eu gostaria que você os repetisse depois de mim. Nós vamos fazer isso três vezes, assim você terá a possibilidade de aprendê-los. Eu vou lhe perguntar mais tarde. Pontuar apenas a terceira tentativa.",
        question: [
            "Renato Moreira","Rua Bela Vista, 73", "Santarém","Pará"
        ]
    },
    {
        title: "Linguagem, função executiva e atenção: “O(a) senhor(a) deve falar todos os nomes de animais de que se lembrar, o mais rápido possível. Quantos mais falar, melhor. Pode começar”. Anote os nomes de animais falados pelo(a) idoso(a) a cada 15 segundos."
    },
    {
        title:"Habilidade visuoespacial: Peça ao indivíduo para contar os pontos sem apontá-los"
    },
    {
        title: "Praxia: (Esteja com uma folha em mãos) “Pegue este papel com a mão direita. Dobre-o ao meio e coloque-o sobre a mesa” (Falar todos os comandos de uma só vez)"
    },
    {
        title: "Memória: Agora você vai me dizer o que você se lembra daquele nome e endereço que nós repetimos no começo",
        question: [
            "Renato Moreira","Rua Bela Vista, 73", "Santarém","Pará"
        ] 
    }]
    },
    {aspectos: 'ATIVIDADE NEGATIVA EM RELAÇÃO AO ENVELHECIMENTO',
    pontucao:'Pontuação (máxima=2): Necessita de invetigação',
        perguntas:[
        {
            title:"Que idade o(a) senhor(a) sente ter_______? Por quê?"
        },
        {
            title:"Existem pontos positivos e negativos presentes na velhice? Quais?"
        }]},
    {aspectos: 'DEPRESÃO',
    pontucao:'Pontuação (máxima=6): Necessita de invetigação',
        perguntas:[
        {
            title:"De modo geral o(a) senhor(a) está satisfeito com a vida?"
        },
        {
            title:"O(A) senhor(a) se sente triste com frequência?"
        },
        {
            title:"O(A) senhor(a) abandonou muitas das coisas que fazia ou gostava de fazer?"
        },
        {
            title: "O(A) senhor(a) tem medo que algum mal vá lhe acontecer?"
        },
        {
            title:"O(A) senhor(a) se sente impaciente e agitado(a) com frequência?"
        },
        {
            title:"O(A) senhor(a) tem dificuldade em se concentrar?"
        }]},
    ]