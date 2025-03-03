document.addEventListener("DOMContentLoaded", function () {
    const productTable = document.getElementById("productTable");
    const addProductBtn = document.getElementById("addProductBtn");

    // Lista de produtos (simulada)
    let products = [
        { id: 1, name: "Teclado", quantity: 10, price: 120.50 },
        { id: 2, name: "Mouse", quantity: 5, price: 75.00 }
    ];

    // Função para atualizar a tabela
    function renderTable() {
        productTable.innerHTML = ""; // Limpa a tabela antes de recriar as linhas
        products.forEach((product) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>R$ ${product.price.toFixed(2)}</td>
                <td><button onclick="removeProduct(${product.id})">Remover</button></td>
            `;
            productTable.appendChild(row);
        });
    }

    // Função para remover um produto
    window.removeProduct = function (id) {
        products = products.filter(product => product.id !== id);
        renderTable();
    };

    // Evento para adicionar um novo produto
    addProductBtn.addEventListener("click", function () {
        let newName = prompt("Nome do produto:");
        let newQuantity = prompt("Quantidade:");
        let newPrice = prompt("Preço:");

        // Validação dos dados
        if (!newName || isNaN(newQuantity) || isNaN(newPrice) || newQuantity <= 0 || newPrice <= 0) {
            alert("Por favor, insira valores válidos!");
            return;
        }

        let newId = products.length ? products[products.length - 1].id + 1 : 1;
        products.push({ 
            id: newId, 
            name: newName, 
            quantity: parseInt(newQuantity), 
            price: parseFloat(newPrice) 
        });

        renderTable();
    });

    // Inicializa a tabela ao carregar
    renderTable();
});
