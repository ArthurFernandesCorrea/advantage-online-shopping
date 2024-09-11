describe('API - Busca de Produto', () => {
    it('Validar o status code', () => {
        cy.request({
        method: 'POST',
        url: `https://www.advantageonlineshopping.com/api/docs/dist/catalog.html#/catalog-controller/addImageToProductUsingPOST`,
     }).then((response) => {
            expect(response.status).to.eq(200);
            });
        });
    });