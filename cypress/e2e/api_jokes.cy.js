describe('API de Piadas', () => {
  const repetitions = 10;
  const endpoint = '/random_joke';

  it('Verifica o formato e os campos da resposta', () => {
    cy.request(endpoint).then((response) => {
      try {
        expect(response.status).to.eq(200);
        cy.log('Status code é 200');

        expect(response.body).to.have.all.keys('type', 'setup', 'punchline', 'id');
        cy.log('Todos os campos necessários estão presentes');

        // Verifica os tipos de dados
        expect(response.body.type).to.be.a('string');
        expect(response.body.setup).to.be.a('string');
        expect(response.body.punchline).to.be.a('string');
        expect(response.body.id).to.be.a('number');
        cy.log('Os tipos de dados estão corretos');
      } catch (error) {
        cy.log('Erro nos detalhes da resposta da API');
        throw error;
      }
    });
  });

  Cypress._.times(repetitions, () => {
    it('Verifica o tempo de resposta', () => {
      cy.request(endpoint).then((response) => {
        try {
          expect(response.status).to.eq(200);
          cy.log('Status code é 200');

          expect(response.duration).to.be.lessThan(500); // Tempo de resposta < 500 ms
          cy.log(`Tempo de resposta: ${response.duration} ms`);
        } catch (error) {
          cy.log(`Tempo de resposta superior ao esperado: ${response.duration} ms`);
          throw error;
        }
      });
    });
  });

  it('Testes de carga com 10 requisições simultâneas', () => {
    // Cria um array de promessas para 10 requisições
    const requests = Array.from({ length: 10 }, () => cy.request(endpoint));
  
    // Executa todas as requisições simultaneamente e espera pela resolução
    Cypress.Promise.all(requests).then((responses) => {
      responses.forEach((response, index) => {
        cy.log(`Requisição ${index + 1}: Tempo de resposta - ${response.duration} ms`);
        expect(response.status).to.eq(200);
  
        // Verifica a presença de todos os campos e formato JSON
        expect(response.body).to.have.all.keys('type', 'setup', 'punchline', 'id');
        
        // Verifica se os campos não estão vazios
        expect(response.body.type).to.not.be.empty;
        expect(response.body.setup).to.not.be.empty;
        expect(response.body.punchline).to.not.be.empty;
  
        // Verifica os tipos de dados
        expect(response.body.type).to.be.a('string');
        expect(response.body.setup).to.be.a('string');
        expect(response.body.punchline).to.be.a('string');
        expect(response.body.id).to.be.a('number');
      });
    });
  });  

  it('Verifica unicidade de IDs e integridade dos dados em 100 requisições', () => {
    const ids = new Set();
    
    for (let i = 0; i < 100; i++) {
      cy.request(endpoint).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(`Requisição ${i + 1}: ID recebido - ${response.body.id}`);

        // Verifica unicidade do ID
        expect(ids.has(response.body.id)).to.be.false;
        ids.add(response.body.id);

        // Verifica a presença de todos os campos
        expect(response.body).to.have.all.keys('type', 'setup', 'punchline', 'id');

        // Verifica se os campos não estão vazios
        expect(response.body.type).to.not.be.empty;
        expect(response.body.setup).to.not.be.empty;
        expect(response.body.punchline).to.not.be.empty;

        // Verifica tipos de dados
        expect(response.body.type).to.be.a('string');
        expect(response.body.setup).to.be.a('string');
        expect(response.body.punchline).to.be.a('string');
        expect(response.body.id).to.be.a('number');
      });
    }
  });
});
