Feature: Busca de produtos

  Scenario: CT-01 - Busca de produto válido
    Given que o usuário esteja na página inicial
    When digitar o nome de um produto válido no campo de pesquisa
    Then o sistema exibe os resultados da busca com intens correspondentes ao da pesquisa

  Scenario: CT-02 - Busca com nome parcial
    Given que o usuário esteja na página inicial
    When digitar o nome parcial de um produto válido no campo de pesquisa
    Then o sistema exibe os resultados da busca com intens correspondentes ao nome parcial da pesquisa

  Scenario: CT-03 - Busca de produto com campo em branco
    Given que o usuário esteja na página inicial
    When não digitar nada no campo de pesquisa
    Then o sistema exibe todos os produtos do catálogo

  Scenario: CT-04 - Aplicar filtros nos resultados da pesquisa
    Given que o usuário esteja na página inicial
    When digitar o nome do produto no campo de pesquisa
    And selecionar um dos filtros disponíveis
    Then o sistema exibe os resultados da busca com intens correspondentes ao da pesquisa + os filtros    

  