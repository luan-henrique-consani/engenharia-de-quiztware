const opcaoA = document.querySelector(".opcao-a");
const opcaoB = document.querySelector(".opcao-b");
const opcaoC = document.querySelector(".opcao-c");
const opcaoD = document.querySelector(".opcao-d");

const main = document.querySelector(".main");

const params = new URLSearchParams(window.location.search);

const dificuldade = params.get("dificuldade");

let colorDif = "fc";
let colorText = "Fácil";

let indice = 0;

let vetorPer;

const faceis = [
  {
    pergunta:
      "Qual modelo de desenvolvimento de software segue um fluxo linear e sequencial, em que cada fase precisa ser concluída antes do início da próxima etapa?",
    resposta: {
      opa: { res: "Modelo Espiral", peso: 0 },
      opb: { res: "Modelo Incremental", peso: 0 },
      opc: { res: "Modelo Cascata", peso: 1 },
      opd: { res: "Modelo Ágil", peso: 0 },
    },
  },

  {
    pergunta: "Scrum é um framework?",
    resposta: {
      opa: {
        res: "Sim, é um framework ágil usado para gerenciar e organizar projetos de desenvolvimento.",
        peso: 1,
      },
      opb: {
        res: "Não, é uma linguagem de programação usada em sistemas ágeis.",
        peso: 0,
      },
      opc: {
        res: "Não, é um software utilizado para automatizar tarefas de projeto.",
        peso: 0,
      },
      opd: {
        res: "Sim, é uma metodologia rígida baseada no modelo cascata.",
        peso: 0,
      },
    },
  },

  {
    pergunta: "Requisitos de sistema é:",
    resposta: {
      opa: {
        res: "O conjunto de condições que descrevem o que o sistema deve fazer e como ele deve se comportar.",
        peso: 1,
      },
      opb: {
        res: "O código-fonte utilizado para implementar o sistema.",
        peso: 0,
      },
      opc: {
        res: "A documentação final entregue após o desenvolvimento.",
        peso: 0,
      },
      opd: { res: "O hardware necessário para executar o sistema.", peso: 0 },
    },
  },

  {
    pergunta:
      "Quais são os principais tipos de requisitos em um sistema de software?",
    resposta: {
      opa: { res: "Requisitos de hardware, de rede e de segurança.", peso: 0 },
      opb: { res: "Requisitos técnicos, lógicos e físicos.", peso: 0 },
      opc: {
        res: "Requisitos obrigatórios, opcionais e descartáveis.",
        peso: 0,
      },
      opd: {
        res: "Requisitos funcionais, não funcionais e requisitos de domínio.",
        peso: 1,
      },
    },
  },

  {
    pergunta:
      "Em um projeto de software, o analista de requisitos decide observar como os usuários realizam suas tarefas no ambiente de trabalho para entender melhor suas necessidades. Qual técnica de levantamento está sendo utilizada?",
    resposta: {
      opa: { res: "Entrevista.", peso: 0 },
      opb: { res: "Questionário.", peso: 0 },
      opc: { res: "Observação.", peso: 1 },
      opd: { res: "Brainstorming.", peso: 0 },
    },
  },

  {
    pergunta: "A Análise e Projeto Orientado a Objetos tem como base:",
    resposta: {
      opa: {
        res: "Os conceitos da programação estruturada, focando apenas em funções e procedimentos.",
        peso: 0,
      },
      opb: {
        res: "Os princípios da programação orientada a objetos, aplicados ao desenvolvimento de sistemas.",
        peso: 1,
      },
      opc: {
        res: "A modelagem de dados relacionais e diagramas de fluxo de dados.",
        peso: 0,
      },
      opd: {
        res: "Técnicas de prototipação rápida e desenvolvimento em cascata.",
        peso: 0,
      },
    },
  },

  {
    pergunta:
      "O que o Diagrama de Classes representa na modelagem orientada a objetos?",
    resposta: {
      opa: {
        res: "A estrutura e as relações entre as classes que servem de modelo para os objetos.",
        peso: 1,
      },
      opb: { res: "A sequência de ações executadas por um sistema.", peso: 0 },
      opc: {
        res: "O comportamento dinâmico do sistema e suas interações.",
        peso: 0,
      },
      opd: {
        res: "O fluxo de dados entre os componentes do sistema.",
        peso: 0,
      },
    },
  },

  {
    pergunta:
      "O que o termo visibilidade representa em uma operação de classe?",
    resposta: {
      opa: { res: "A forma como o método é nomeado.", peso: 0 },
      opb: {
        res: "O nível de acesso ao método (público, privado, protegido).",
        peso: 1,
      },
      opc: { res: "A quantidade de vezes que o método é chamado.", peso: 0 },
      opd: { res: "O tipo de dado retornado pela operação.", peso: 0 },
    },
  },
];

const medias = [
  {
    pergunta: "Sobre prototipação é INCORRETO afirmar:",
    resposta: {
      opa: {
        res: "Fornece rapidamente uma versão para ser utilizada e avaliada pelo usuário",
        peso: 0,
      },
      opb: {
        res: "Serve como um mecanismo para identificar os requisitos de software",
        peso: 0,
      },
      opc: {
        res: "Facilita o desenvolvimento de produtos onde não se conhece totalmente o problema.",
        peso: 0,
      },
      opd: { res: "Nenhuma das alternativas", peso: 1 },
    },
  },

  {
    pergunta: "Sobre teste de integração qual NÃO é um tipo de integração",
    resposta: {
      opa: { res: "Bottom-up", peso: 0 },
      opb: { res: "Follow-up", peso: 1 },
      opc: { res: "Sandwich", peso: 0 },
      opd: { res: "Top-down", peso: 0 },
    },
  },

  {
    pergunta:
      "Durante a Engenharia de Requisitos, em que fase ocorre a definição detalhada das necessidades do usuário e das restrições do sistema?",
    resposta: {
      opa: { res: "Validação de Requisitos.", peso: 0 },
      opb: { res: "Elicitação de Requisitos.", peso: 0 },
      opc: { res: "Gerência de Requisitos.", peso: 0 },
      opd: { res: "Especificação de Requisitos.", peso: 1 },
    },
  },

  {
    pergunta:
      "Durante a análise de requisitos, qual é a diferença entre a perspectiva estrutural e a comportamental?",
    resposta: {
      opa: {
        res: "A perspectiva estrutural descreve as informações e entidades do sistema, enquanto a comportamental define as ações e comportamentos do sistema.",
        peso: 1,
      },
      opb: {
        res: "A perspectiva estrutural trata das ações do usuário, e a comportamental das tabelas do banco de dados.",
        peso: 0,
      },
      opc: {
        res: "A perspectiva estrutural é usada apenas em sistemas físicos, e a comportamental apenas em sistemas digitais.",
        peso: 0,
      },
      opd: {
        res: "Ambas têm o mesmo objetivo: representar o código-fonte do sistema.",
        peso: 0,
      },
    },
  },

  {
    pergunta:
      "Qual dos seguintes elementos deve ser definido em uma operação (ou método) de uma classe?",
    resposta: {
      opa: {
        res: "Nome, visibilidade, tipo de retorno e lista de parâmetros (se houver).",
        peso: 1,
      },
      opb: { res: "Nome, tipo de dado e associação.", peso: 0 },
      opc: { res: "Multiplicidade e navegabilidade.", peso: 0 },
      opd: { res: "Pacote e tipo de atributo.", peso: 0 },
    },
  },

  {
    pergunta: "Em uma associação entre classes, o que indica a multiplicidade?",
    resposta: {
      opa: { res: "O número de atributos da classe.", peso: 0 },
      opb: { res: "O tipo de retorno do método.", peso: 0 },
      opc: {
        res: "A quantidade de instâncias que podem estar relacionadas entre as classes.",
        peso: 1,
      },
      opd: { res: "O nível de encapsulamento da operação.", peso: 0 },
    },
  },

  {
    pergunta:
      "Qual métrica é utilizada para verificar o quanto do código de um sistema foi realmente validado por testes automatizados ou manuais?",
    resposta: {
      opa: { res: "Cobertura de testes (% de código testado).", peso: 1 },
      opb: { res: "Tempo médio de correção de bugs.", peso: 0 },
      opc: { res: "Taxa de defeitos por módulo.", peso: 0 },
      opd: { res: "Número de feedbacks positivos dos usuários.", peso: 0 },
    },
  },

  {
    pergunta:
      "Por que é importante medir e testar continuamente a qualidade de um software durante o desenvolvimento?",
    resposta: {
      opa: { res: "Para aumentar a complexidade do sistema.", peso: 0 },
      opb: {
        res: "Para saber se a qualidade está melhorando, identificar gargalos e justificar investimentos.",
        peso: 1,
      },
      opc: { res: "Para substituir totalmente a etapa de validação.", peso: 0 },
      opd: {
        res: "Para evitar o uso de métricas e simplificar o processo de testes.",
        peso: 0,
      },
    },
  },
];

const dificeis = [
  {
    pergunta:
      "Qual das alternativas está correta sobre as características da Orientação a Objetos?",
    resposta: {
      opa: {
        res: "O encapsulamento reduz a confiabilidade, tornando o código mais vulnerável.",
        peso: 0,
      },
      opb: {
        res: "A extensibilidade dificulta a adição de novas funcionalidades a um sistema já existente.",
        peso: 0,
      },
      opc: {
        res: "O encapsulamento contribui para a confiabilidade, oferecendo maior controle e segurança às classes dos objetos.",
        peso: 1,
      },
      opd: {
        res: "A confiabilidade e a extensibilidade não têm relação com o encapsulamento ou a modelagem de objetos.",
        peso: 0,
      },
    },
  },

  {
    pergunta:
      "Em qual etapa do ciclo de vida de um defeito ocorre a ação em que o testador confirma que o problema foi realmente resolvido?",
    resposta: {
      opa: { res: "Introdução", peso: 0 },
      opb: { res: "Injeção", peso: 0 },
      opc: { res: "Correção", peso: 0 },
      opd: { res: "Verificação", peso: 1 },
    },
  },

  {
    pergunta:
      "Qual dos itens abaixo não representa um benefício direto de priorizar a qualidade de software?",
    resposta: {
      opa: { res: "Reduz o custo de manutenção.", peso: 0 },
      opb: { res: "Aumenta a satisfação do usuário.", peso: 0 },
      opc: { res: "Aumenta a complexidade e o retrabalho.", peso: 1 },
      opd: { res: "Melhora a imagem da empresa.", peso: 0 },
    },
  },

  {
    pergunta:
      "Qual das opções abaixo representa uma métrica simples usada para avaliar a qualidade de um software?",
    resposta: {
      opa: { res: "Número de reuniões realizadas pela equipe.", peso: 0 },
      opb: { res: "Taxa de defeitos por módulo.", peso: 1 },
      opc: { res: "Quantidade de usuários cadastrados.", peso: 0 },
      opd: { res: "Horas gastas em design gráfico.", peso: 0 },
    },
  },

  {
    pergunta:
      "Qual das alternativas descreve corretamente o objetivo dos padrões internacionais de qualidade como a ISO/IEC 25010 e o CMMI?",
    resposta: {
      opa: {
        res: "Definir metodologias de codificação obrigatórias.",
        peso: 0,
      },
      opb: {
        res: "Estabelecer modelos de maturidade e atributos de qualidade para produtos e processos de software.",
        peso: 1,
      },
      opc: {
        res: "Padronizar linguagens de programação em nível global.",
        peso: 0,
      },
      opd: {
        res: "Determinar regras de contratação de equipes de TI.",
        peso: 0,
      },
    },
  },

  {
    pergunta:
      "Qual é o principal objetivo do processo de verificação em um projeto de software?",
    resposta: {
      opa: {
        res: "Garantir que o produto atenda às necessidades do cliente.",
        peso: 0,
      },
      opb: {
        res: "Identificar novas funcionalidades para o produto.",
        peso: 0,
      },
      opc: { res: "Avaliar a experiência do usuário com o sistema.", peso: 0 },
      opd: {
        res: "Garantir que o software foi construído de acordo com as especificações e padrões definidos.",
        peso: 1,
      },
    },
  },

  {
    pergunta:
      "Qual das atividades abaixo faz parte do processo de verificação em engenharia de software?",
    resposta: {
      opa: {
        res: "Testes com usuários finais para medir satisfação.",
        peso: 0,
      },
      opb: { res: "Revisões de código e inspeções de documentos.", peso: 1 },
      opc: { res: "Entrevistas para entender requisitos do cliente.", peso: 0 },
      opd: { res: "Validação de desempenho em ambiente real.", peso: 0 },
    },
  },

  {
    pergunta:
      "Durante a verificação de um sistema, um analista executa uma análise automática do código sem rodar o programa. Que tipo de técnica ele está aplicando?",
    resposta: {
      opa: { res: "Teste dinâmico.", peso: 0 },
      opb: { res: "Teste de aceitação.", peso: 0 },
      opc: { res: "Teste estático.", peso: 1 },
      opd: { res: "Teste de integração.", peso: 0 },
    },
  },
];

function estaCerta(peso) {
  if (peso == 1) {
    indice++;
    console.log("Acertou");
    renderizarPergunta();
  } else if (peso == 0) {
    if (indice == 0) {
      main.innerHTML = `
                <div class="quepena">
            <h1>Que pena...</h1>

            <p id="pri">Você concluiu esse quiz com ${indice} respostas certas!</p>

            <p id="sec">Você poderia ter ido melhor!</p>

            <div class="botoes">   
                <a href="../pages/dificuldade.html"><button>Você deseja tentar um novo nivel?</button></a>
                <a href="../index.html"><button>Você deseja sair?</button></a>
            </div>

        </div>`;
    } else if (indice < 4) {
      main.innerHTML = `
                <div class="sucesso">
            <h1>Quase conseguiu!</h1>

            <p id="pri">Você concluiu esse quiz com ${indice} respostas certas!</p>

            <p id="sec">Tenho certeza que na próxima você vai acertar tudo!</p>

            <div class="botoes">   
                <a href="../pages/dificuldade.html"><button>Você deseja tentar um novo nivel?</button></a>
                <a href="../index.html"><button>Você deseja sair?</button></a>
            </div>

        </div>`;
    } else if (indice >= 4) {
      main.innerHTML = `
                <div class="sucesso confetti">
            <h1>Parabéns, está muito próximo!</h1>

            <p id="pri">Você concluiu esse quiz com ${indice} respostas certas!</p>

            <p id="sec">Você é o novo Albert Einstein?</p>

            <div class="botoes">   
                <a href="../pages/dificuldade.html"><button>Você deseja tentar um novo nivel?</button></a>
                <a href="../index.html"><button>Você deseja sair?</button></a>
            </div>

        </div>`;
    }
  }
}

function renderizarPergunta() {
  if (indice == faceis.length) {
    main.innerHTML = `
                <div class="sucesso confetti">
            <h1>Sucesso</h1>

            <p id="pri">Você concluiu esse quiz com ${indice} respostas certas!</p>

            <p id="sec">Você é muito inteligente!</p>

            <div class="botoes">   
                <a href="../pages/dificuldade.html"><button>Você deseja tentar um novo nivel?</button></a>
                <a href="../index.html"><button>Você deseja sair?</button></a>
            </div>

        </div>`;
  } else {
    if (dificuldade == 0) {
      vetorPer = faceis[indice];
      colorDif = "fc";
      colorText = "Fácil";
    } else if (dificuldade == 1) {
      vetorPer = medias[indice];
      colorDif = "md";
      colorText = "Médio";
    } else {
      vetorPer = dificeis[indice];
      colorDif = "df";
      colorText = "Difícil";
    }
    main.innerHTML = `     
        <div class="exit">
            <a href="../index.html"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="#1f1f1f">
                    <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
                </svg> Sair</a>
        </div>   
    <div class="medio">
            <div class="enunciado">
                <h2>${indice + 1} )</h2>
                <p>${vetorPer.pergunta}</p>
            </div>

            <div class="perguntas">
                <div class="grupo-1">
                    <button class="opcao opcao-a" onclick="estaCerta(${
                      vetorPer.resposta.opa.peso
                    })">
                        <h3>A </h3>
                        <p>${vetorPer.resposta.opa.res}</p>
                    </button>
                    <button class="opcao opcao-b" onclick="estaCerta(${
                      vetorPer.resposta.opb.peso
                    })">
                        <h3>B </h3>
                        <p>${vetorPer.resposta.opb.res}</p>
                    </button>
                </div>
                <div class="grupo-2">
                    <button class="opcao opcao-c" onclick="estaCerta(${
                      vetorPer.resposta.opc.peso
                    })">
                        <h3>C </h3>
                        <p>${vetorPer.resposta.opc.res}</p>
                    </button>
                    <button class="opcao opcao-d" onclick="estaCerta(${
                      vetorPer.resposta.opd.peso
                    })">
                        <h3>D </h3>
                        <p>${vetorPer.resposta.opd.res}</p>
                    </button>
                </div>
            </div>
        </div>

        <h3 class="nivel" >Nivel: <span class="color ${colorDif}">${colorText}</span></h3>
    </div>`;
  }
}

renderizarPergunta();
