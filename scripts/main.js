const opcaoA = document.querySelector(".opcao-a");
const opcaoB = document.querySelector(".opcao-b");
const opcaoC = document.querySelector(".opcao-c");
const opcaoD = document.querySelector(".opcao-d");

const main = document.querySelector(".main");

let indice = 0;

const perguntas = [
    {pergunta: "Scrum é um framework?", resposta: {
        opa: {res: "Sim", peso: 1},
        opb: {res: "Não", peso: 0},
        opc: {res: "Talvez", peso: 0},
        opd: {res: "O que é framework", peso: 0},
    } ,dificuldade: 0}
]

main.innerHTML = `     
        <div class="exit">
            <a href="../index.html"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="#1f1f1f">
                    <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
                </svg> Sair</a>
        </div>   
    <div class="medio">
            <div class="enunciado">
                <h2>${indice+1}</h2>
                <p>${perguntas[indice].pergunta}</p>
            </div>

            <div class="perguntas">
                <div class="grupo-1">
                    <button class="opcao opcao-a">
                        <h3>A -</h3>
                        <p>${perguntas[indice].resposta.opa.res}</p>
                    </button>
                    <button class="opcao opcao-b">
                        <h3>B -</h3>
                        <p>${perguntas[indice].resposta.opb.res}</p>
                    </button>
                </div>
                <div class="grupo-2"><button class="opcao opcao-c">
                        <h3>C -</h3>
                        <p>${perguntas[indice].resposta.opc.res}</p>
                    </button>
                    <button class="opcao opcao-d">
                        <h3>D -</h3>
                        <p>${perguntas[indice].resposta.opd.res}</p>
                    </button>
                </div>
            </div>
        </div>

        <h3 class="nivel" >Nivel: <span class="color fc">Fácil</span></h3>
    </div>`;