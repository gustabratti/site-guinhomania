document.addEventListener('DOMContentLoaded', function () {
  const produtos = [
    {
      nome: 'Carregador USB',
      preco: 19.99,
      imagem: 'carregador-usb.jpg',
      descricao: 'Carregador USB rápido para seus dispositivos eletrônicos.',
      classificacao: 'eletronico',
    },
    {
      nome: 'Fones de Ouvido com Fio',
      preco: 29.99,
      imagem: 'fone-ouvido.png',
      descricao: 'Fones de ouvido com fio.',
      classificacao: 'eletronico',
    },
    {
      nome: 'Robô Inteligente',
      preco: 89.99,
      imagem: 'robo-inteligente.jpg',
      descricao: 'Um robô inteligente programável para explorar o mundo da tecnologia.',
      classificacao: 'eletronico',
    },
    {
      nome: 'Quebra-Cabeça Educativo',
      preco: 29.99,
      imagem: 'quebra-cabeca.jpg',
      descricao: 'Um quebra-cabeça educativo para crianças.',
      classificacao: 'brinquedo',
      faixaEtaria: '4_12', 
    },
    {
      nome: 'Tablet Infantil',
      preco: 129.99,
      imagem: 'tabletinfantil.jpeg',
      descricao: 'Um tablet especialmente para crianças aprenderem e se divertirem.',
      classificacao: 'brinquedo',
      faixaEtaria: '1_3', 
    },
    {
      nome: 'Boneca Interativa',
      preco: 59.99,
      imagem: 'boneca.png',
      descricao: 'Uma boneca interativa para horas de diversão.',
      classificacao: 'brinquedo',
      faixaEtaria: 'acima_12', 
    },
    {
      nome: 'Livro Interativo para Bebês',
      preco: 19.99,
      imagem: 'livro-interativo.jpg',
      descricao: 'Um livro para estimular os sentidos do bebê.',
      classificacao: 'brinquedo',
      faixaEtaria: '1_3', 
    },
  ];

  const nomeClienteSalvo = localStorage.getItem("nomeVisitante");
  function exibirProdutos(produtosExibir) {

  produtosExibir.forEach((produto) => {
    const cardProduto = document.createElement('section');
    cardProduto.classList.add('card-produto');

    cardProduto.innerHTML = `
      <img src="./img/${produto.imagem}" alt="" class="imagem-card">
      <h3 class="titulo-produto">${produto.nome}</h3>
      <p class="descricao-produto">${produto.descricao}</p>
      <span class="preco-produto-card">R$${produto.preco.toFixed(2)}</span>
      <a href="https://wa.me//5548999553099?text=Ol%C3%A1!%20Tenho%20interesse%20no%20produto%20${produto.nome}"><button class="botao-add-carrinho">Enviar mensagem</button></a>
    `;

    containerProdutos.appendChild(cardProduto);
  });
}

exibirProdutos(produtos); 
})