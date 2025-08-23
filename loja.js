// Array para armazenar os itens do carrinho
let carrinho = [];

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const carrinhoItens = document.querySelector('.carrinho-itens');
    const totalCarrinho = document.getElementById('total-carrinho');

    // Limpa o conteúdo atual do carrinho
    carrinhoItens.innerHTML = '';

    // Adiciona os itens ao carrinho
    let total = 0;
    carrinho.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carrinho-item');
        itemDiv.innerHTML = `
            <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        carrinhoItens.appendChild(itemDiv);
        total += item.preco;
    });

    // Atualiza o total
    totalCarrinho.textContent = total.toFixed(2);
}

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Adiciona eventos aos botões "Adicionar ao Carrinho"
document.querySelectorAll('.btn-adicionar').forEach(button => {
    button.addEventListener('click', () => {
        const nome = button.getAttribute('data-nome');
        const preco = parseFloat(button.getAttribute('data-preco'));
        adicionarAoCarrinho(nome, preco);
    });
});

// Função para finalizar a compra (simulada)
document.querySelector('.btn-finalizar').addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Compra finalizada! Obrigado por sua compra.');
        carrinho = [];
        atualizarCarrinho();
    }
});