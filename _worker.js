<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOJA DO LUCIANO</title>
    <!-- Adicionando Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Adicionando Font Awesome para ícones -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- Adicionando SweetAlert2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #0B0C10; /* Azul marinho */
            color: #fff;
        }

        header {
            background-color: #1F2833; /* Azul marinho mais escuro */
            padding: 20px;
            text-align: center;
        }

        main {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
        }

        .product {
            border: 1px solid #45A29E; /* Turquesa escuro */
            border-radius: 5px;
            margin: 10px;
            padding: 20px;
            text-align: center;
            width: 300px;
            background-color: #1F2833; /* Azul marinho mais escuro */
        }

        footer {
            background-color: #1F2833; /* Azul marinho mais escuro */
            padding: 10px;
            text-align: center;
        }

        .news {
            background-color: #0B0C10; /* Azul marinho mais escuro */
            padding: 20px;
            text-align: center;
        }

        .cart {
            border: 1px solid #45A29E; /* Turquesa escuro */
            border-radius: 5px;
            padding: 20px;
            margin-top: 20px;
            text-align: center;
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #1F2833; /* Azul marinho mais escuro */
            z-index: 999;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            max-width: 400px; /* Largura máxima do carrinho */
            width: 100%;
        }

        .cart-icon {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #45A29E; /* Turquesa escuro */
            color: #fff;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
            z-index: 1000;
        }

        .cart-icon:hover {
            background-color: #66FCF1; /* Turquesa mais clara */
        }

        .cart-items {
            list-style: none;
            padding: 0;
            text-align: left;
            margin-bottom: 20px;
        }

        .cart-items li {
            margin-bottom: 10px;
            border-bottom: 1px solid #45A29E; /* Turquesa escuro */
            padding-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .cart-item-name {
            flex-grow: 1;
        }

        .send-button {
            background-color: #45A29E; /* Turquesa escuro */
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin-top: 20px;
            cursor: pointer;
            border-radius: 5px;
            border: none;
            width: 100%;
            max-width: 200px;
            margin: 0 auto;
            display: block;
        }

        .send-button:hover {
            background-color: #66FCF1; /* Turquesa mais clara */
        }

        .close-button {
            background-color: #F25F5C; /* Vermelho coral */
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin-top: 20px;
            cursor: pointer;
            border-radius: 5px;
            border: none;
            width: 100%;
            max-width: 200px;
            margin: 0 auto;
            display: block;
        }

        .close-button:hover {
            background-color: #FF7A70; /* Vermelho coral mais claro */
        }
    </style>
</head>
<body>
    <header>
        <h1>Produtos de Limpeza</h1>
    </header>
    
    <main>
        <div class="product">
            <img src="" alt="">
            <h2>SABÃO LÍQUIDO</h2>
            <p>Galão de 5 Litros</p>
            <p>Preço: R$ 30,00</p>
            <button onclick="addToCart('SABÃO LÍQUIDO', 18)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="product2.jpg" alt="Product 2">
            <h2>AMACIANTE</h2>
            <p>Galão de 5 Litros</p>
            <p>Preço: R$ 25,00</p>
            <button onclick="addToCart('AMACIANTE', 18)">Adicionar ao Carrinho</button>
        </div>
        <!-- Adicione mais produtos conforme necessário -->
        <div class="product">
            <img src="product3.jpg" alt="Product 3">
            <h2>DETERGENTE NEUTRO</h2>
            <p>Galão de 5 Litros</p>
            <p>Preço: R$ 25,00</p>
            <button onclick="addToCart('DETERGENTE NEUTRO', 15)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="product4.jpg" alt="Product 4">
            <h2>DESINFETANTE</h2>
            <p>Galão de 5 Litros</p>
            <p>Preço: R$ 18,00</p>
            <button onclick="addToCart('DESINFETANTE', 15)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="product5.jpg" alt="Product 5">
            <h2>CLORO BRANCO</h2>
            <p>Galão de 5 Litros</p>
            <p>Preço: R$ 15</p>
            <button onclick="addToCart('CLORO BRANCO', 12)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="product2.jpg" alt="Product 2">
            <h2>SABÃO EM BARRA</h2>
            <p>10 UNIDADE 3KG VALOR: R$25,00</p>
            <p>5 UNIDADES 1.5KG VALOR: R$ 15,00</p>
            <button onclick="addToCart('SABÃO EM BARRA 10 UNIDADES', 25)">Adicionar ao Carrinho 10 Unidades</button>                                                                         <button onclick="addToCart('SABÃO EM BARRA 5 UNIDADES', 15)">Adicionar ao Carrinho 5 Unidades</button>
        </div>
        <!-- Adicione mais produtos conforme necessário -->
        <div class="product">
            <img src="product3.jpg" alt="Product 3">
            <h2>MULT USO TIPO VEJA</h2>
            <p>2 Litros</p>
            <p>Preço: R$ 18,00</p>
            <button onclick="addToCart('MULT USO TIPO VEJA', 12)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="product4.jpg" alt="Product 4">
            <h2>PINHO GEL</h2>
            <p>2 Litros</p>
            <p>Preço: R$ 18,00</p>
            <button onclick="addToCart('PINHO GEL', 12)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="product5.jpg" alt="Product 5">
            <h2>SABONETE LÍQUIDO</h2>
            <p>1 Litro</p>
            <p>Preço: R$ 18,00</p>
            <button onclick="addToCart('SABONETE LÍQUIDO', 12)">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="product4.jpg" alt="Product 4">
            <h2>LIMPA ALUMÍNIO</h2>
            <p>2 LITROS R$20,00</p>
            <p>5 LOTROSR$ 40,00</p>
            <button onclick="addToCart('LIMPA ALUMÍNIO 2 Litros', 20)">Adicionar ao Carrinho 2 Litros</button>
            <button onclick="addToCart('LIMPA ALUMÍNIO 5 Litros', 40)">Adicionar ao Carrinho 5 Litros</button>
        </div>
        <div class="product">
            <img src="product5.jpg" alt="Product 5">
            <h2>SODA CÁUSTICA 98%</h2>
            <p>1 Kg Valor: R$30,00</p>
            <p>500g Valor: R$ 20,00</p>
            <button onclick="addToCart('SODA CÁUSTICA 98% 1KG', 30)">Adicionar ao Carrinho 1Kg</button>                                                     <button onclick="addToCart('SODA CÁUSTICA 98% 500G', 20)">Adicionar ao Carrinho 500g</button>
        </div>
        <!-- Adicione mais produtos conforme necessário -->
    </main>

    <section class="news">
        <h2>🚨ATENÇÃO🚨</h2>
        <p>Valores para Pagamento na Nota Para 30 dias, Cartão de Crédito, Débito e pix</p>
    </section>

    <div class="cart-icon" onclick="toggleCart()"><i class="fas fa-shopping-cart"></i></div>

    <div class="cart" id="cart">
        <h2>Carrinho de Compras</h2>
        <ul class="cart-items" id="cartItems"></ul>
        <p id="totalPrice"></p>
        <button class="send-button" onclick="sendWhatsAppMessage()">Orçamento via WhatsApp</button> 
        <button class="close-button" onclick="toggleCart()">Fechar Carrinho</button>
    </div>

    <footer>
        <p>&copy; 2024 Site Vendas de Produtos de Limpeza</p>
    </footer>

    <script>
        function addToCart(productName, price) {
            Swal.fire({
                title: 'Produto adicionado ao carrinho!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
            var cartItems = document.getElementById("cartItems");
            var listItem = document.createElement("li");
            listItem.textContent = productName + " - Preço: R$ " + price;
            cartItems.appendChild(listItem);

            // Atualizar o preço total
            updateTotalPrice();
        }

        function toggleCart() {
            var cart = document.getElementById("cart");
            cart.style.display = cart.style.display === "block" ? "none" : "block";
        }

        function sendWhatsAppMessage() {
            var cartItems = document.getElementById("cartItems").getElementsByTagName("li");
            var totalPrice = document.getElementById("totalPrice").textContent;
            var message = "Orçamento via WhatsApp:\n";
            for (var i = 0; i < cartItems.length; i++) {
                message += cartItems[i].textContent + "\n";
            }
            message += "\nTotal: " + totalPrice;
            var whatsappURL = "https://wa.me/5528999501464?text=" + encodeURIComponent(message);
            window.open(whatsappURL, "_blank");
        }

        function sendTelegramMessage() {
            var cartItems = document.getElementById("cartItems").getElementsByTagName("li");
            var totalPrice = document.getElementById("totalPrice").textContent;
            var message = "Orçamento via Telegram:\n";
            for (var i = 0; i < cartItems.length; i++) {
                message += cartItems[i].textContent + "\n";
            }
            message += "\nTotal: " + totalPrice;
            var telegramURL = "https://telegram.me/share/url?url=&text=" + encodeURIComponent(message);
            window.open(telegramURL, "_blank");
        }

        function updateTotalPrice() {
            var cartItems = document.getElementById("cartItems").getElementsByTagName("li");
            var totalPrice = 0;
            for (var i = 0; i < cartItems.length; i++) {
                var itemPrice = parseFloat(cartItems[i].textContent.split("R$ ")[1]);
                totalPrice += itemPrice;
            }
            if (cartItems.length > 10) {
                totalPrice *= 0.9; // Aplica um desconto de 10% se houver mais de 10 produtos
            }
            document.getElementById("totalPrice").textContent = " R$ " + totalPrice.toFixed(2);
        }
    </script>
</body>
</html>
