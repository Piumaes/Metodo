addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  const url = new URL(request.url);
  
  if (url.pathname === '/produtos') {
    return handleProdutos();
  } else {
    return new Response('Produto não encontrado', {status: 404});
  }
}

async function handleProdutos() {
  const produtos = [
    { id: 1, nome: 'Detergente Líquido', preco: 5.99, descricao: 'Ideal para lavar louças.' },
    { id: 2, nome: 'Desinfetante', preco: 7.49, descricao: 'Perfume fresco e limpeza profunda.' },
    { id: 3, nome: 'Multiuso Spray', preco: 6.50, descricao: 'Limpeza de superfícies variáveis.' },
  ];

  const produtosHTML = produtos.map(produto => `
    <div>
      <h2>${produto.nome}</h2>
      <p>Preço: R$${produto.preco.toFixed(2)}</p>
      <p>Descrição: ${produto.descricao}</p>
    </div>
  `).join('');

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Produtos de Limpeza</title>
      </head>
      <body>
        <h1>Lista de Produtos de Limpeza</h1>
        ${produtosHTML}
      </body>
    </html>
  `;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
