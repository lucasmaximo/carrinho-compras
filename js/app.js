limpar();

function adicionar(){
    //capturar o produto e a quantidade
    let produto = document.getElementById('produto').value.split('-')[0].trim();
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let preco = document.getElementById('produto').value.split('R$')[1].trim();

    //adicionar produto no carrinho
    if(quantidade != 0 && quantidade != null && !isNaN(quantidade)){
        let produtoNoCarrinho = document.createElement('section');
        produtoNoCarrinho.classList.add('carrinho__produtos__produto');
        produtoNoCarrinho.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${preco * quantidade}</span>`
        let carrinhoDeProdutos = document.getElementById('lista-produtos');
        carrinhoDeProdutos.appendChild(produtoNoCarrinho);
    }
    else{
        alert('A quantidade não pode ser 0 e não pode estar vazia. Verifique!');
    }

    //limpar campo de quantidade depois que o produto é adicionado ao carrinho
    document.getElementById('quantidade').value = '';

    //atualizar o valor total dos produtos no carrinho de compras
    atualizarValorTotal();
}

//função para atualizar valor total dos produtos no carrinho de compras
function atualizarValorTotal(){
    let produtos = document.querySelectorAll('.carrinho__produtos__produto');
    let total = 0;

    produtos.forEach(function(produto) {
        let preco = parseInt(produto.querySelectorAll('.texto-azul')[1].textContent.replace('R$', ''));
        total += preco;
    });
    document.getElementById('valor-total').textContent = 'R$ ' + total;
}

//limpar valor total dos produtos no carrinho de compras
function limpar(){
    carrinhoDeProdutos = document.getElementById('lista-produtos');

    while(carrinhoDeProdutos.firstChild){
        carrinhoDeProdutos.removeChild(carrinhoDeProdutos.firstChild);
    }

    atualizarValorTotal();

}