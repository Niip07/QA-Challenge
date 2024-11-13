Desafio de Teste de API de Piadas

1. Objetivo do Desafio
   O objetivo deste desafio foi criar uma suíte de testes automatizados para a API de piadas disponível em https://official-joke-api.appspot.com/random_joke. O foco foi garantir que a API funcione conforme esperado, validando a integridade dos dados, a unicidade dos IDs, o tempo de resposta e a consistência dos campos retornados.

2. Funcionalidades Testadas
   Validação da resposta: Verificação da presença e tipo dos campos obrigatórios (type, setup, punchline, id).
   Testes de carga: Simulação de 10 usuários fazendo requisições simultâneas para medir o tempo de resposta e consistência.
   Unicidade de IDs: Verificação de que os IDs retornados em múltiplas requisições são únicos.
   Validação de tempo de resposta: Verifica se o tempo de resposta da API é aceitável (≤ 500 ms).
3. Pré-requisitos
   Antes de executar os testes, você deve ter o seguinte instalado:

Node.js (versão 12 ou superior)
npm (geralmente incluído com o Node.js)
Cypress 4. Instalação das Dependências
Para instalar as dependências do projeto, siga as etapas abaixo:

Clone este repositório:

```bash

git clone https://github.com/Niip07/QA-Challenge.git
cd QA-Challenge
```

Instale as dependências do projeto:

```bash
npm install
```

5. Estrutura dos Arquivos
   A estrutura dos arquivos neste projeto é a seguinte:

```lua

QA-CHALLANGE/
│
├── cypress/
│   ├── e2e/
│   │   ├── api_jokes.cy.js         # Arquivo com os testes automatizados
│   ├── support/                    # Arquivos de suporte do Cypress
│
├── cypress.config.js               # Configuração do Cypress
├── package.json                    # Dependências e scripts do projeto
├── README.md                       # Documentação do projeto
└── package-lock.json               # Arquivo de lock das dependências
```

Descrição dos Arquivos
cypress/e2e/api_jokes.cy.js: Contém a suíte de testes para a API de piadas, incluindo testes de carga e validações de resposta.
cypress.config.js: Configuração do Cypress, incluindo o baseUrl e opções de relatórios.
package.json: Arquivo de configuração do projeto que contém as dependências e scripts utilizados.
README.md: Documento que descreve o objetivo do desafio, como instalar as dependências e o que contém os arquivos do projeto. 6. Como Executar os Testes
Modo interativo:

```bash
npx cypress open
```

Escolha o teste api_jokes.cy.js para executar.

Modo headless:

```bash
npx cypress run
```

7. Relatórios de Execução
   Para gerar relatórios detalhados, você pode usar a opção de relatório do Cypress, como mochawesome, configurado no arquivo cypress.config.js.

8. Considerações Finais
   Este projeto demonstra habilidades em automação de testes de API, simulando cargas e verificando a robustez e performance de um serviço web. Os testes foram projetados para fornecer uma análise abrangente da API e garantir a confiabilidade de suas respostas.
