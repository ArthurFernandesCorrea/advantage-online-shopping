Feature: Checkout

  Scenario: CT-06 - Realizar Checkout dos produtos adicionados ao carrinho
    Given que o usuário esteja logado
    And na tela do carrinho com um item adicionado
    When clicar em “Chekout” e confirmar as informações do comprador e produtos
    And clicar no botão  Next
    And preencher os campos necessários para o pagamento
    Then o sistema exibe uma tela de compra realizada com sucesso

  