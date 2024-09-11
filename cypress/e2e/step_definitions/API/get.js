describe('API - Busca de Produto', () => {
    it('Deve buscar um produto e validar status code', () => {
        cy.request({
        method: 'GET',
        url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=HP%20H2310%20In-ear%20Headset&quantityPerEachCategory=-1`,
      }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
    
