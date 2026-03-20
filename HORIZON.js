    // === ДАННЫЕ ТОВАРОВ ===
    const productsData = [
        {
            id: 1,
            title: "Nike Air Jordan 1 Retro High OG SP Utility Stash",
            price: "25 900 ₽",
            images: [
                "https://wayoff.ru/upload/iblock/9f4/up1z7o0r0ty0kfei62y2bezj6hg592pw.webp"
                "https://wayoff.ru/upload/iblock/610/ytc90agckhi2vea5c5ivntszcmclnnlo.webp"
                "https://wayoff.ru/upload/iblock/bf6/t9r8v8a299asate9krnmrqivgjrepwl1.webp"
                "https://wayoff.ru/upload/iblock/5f3/1y87nojwbcfql4ny1jqy9nsmrnokr19j.webp"
                "https://wayoff.ru/upload/iblock/010/5f7ci77fvbr0wdp3z5otc7mhl5okcpab.webp"
                ]
        },
        {
            id: 2,
            title: "Adidas Yeezy Boost 350 V2 Mono Ice",
            price: "27 900 ₽",
            images: [
                "https://wayoff.ru/upload/iblock/9ff/magd26hyaoti14vz4l6s3t5la3iz3w5y.webp"
                "https://wayoff.ru/upload/iblock/180/z3xk0rwjwa8n6wvregdhfee2j2hn8e4f.webp"
                "https://wayoff.ru/upload/iblock/054/kbg9hgq100qxtm6c6kucf6wtr0y3s7hl.webp"
                "https://wayoff.ru/upload/iblock/f3c/mqfzfy536y3yfnnn096761hwqah3u2ka.webp"
                "https://wayoff.ru/upload/iblock/55a/x8audmp3zen2jgkjo1r53tob35xyiqwq.webp"
                ]
        },
        {
            id: 3,
            title: "New Balance 530 White Carolina Blue",
            price: "23 900 ₽",
            image: "https://wayoff.ru/upload/iblock/da2/bucy6lawasdzwozp7hssg85wbi4g2pb0.webp"
        },
        {
            id: 4,
            title: "Nike Dunk Low Remastered Reverse Panda",
            price: "25 900 ₽",
            image: "https://wayoff.ru/upload/iblock/9aa/h3lrmcarkesrb34viqqj11jq9jtas9h5.webp"
        },
        {
            id: 5,
            title: "Jordan 4 Retro Military Black",
            price: "51 000 ₽",
            image: "https://wayoff.ru/upload/iblock/2fd/rpmemm2rk3m2fs8cum5zthrsdo7wfx52.webp"
        },
        {
            id: 6,
            title: "Nike Air Force 1 '07 WMNS Cut Out Wheat",
            price: "27 900 ₽",
            image: "https://wayoff.ru/upload/iblock/861/8r0qbrjcqmg7ulkivvvknm1p5xrgmqxt.webp"
        },
        {
            id: 7,
            title: "Asics Gel 1130 White Pure Silver Black",
            price: "25 900 ₽",
            image: "https://wayoff.ru/upload/iblock/b3a/j1qhp9rf5gvnj0loqhqmndjvw9hgxrkn.webp"
        },
        {
            id: 8,
            title: "Gel Nimbus 9 Vanilla Black",
            price: "37 900 ₽",
            image: "https://wayoff.ru/upload/iblock/76e/mj9j1t2bci76ocdz38n281nrdc2jppo4.webp"
        },
    ];

    // === ЭЛЕМЕНТЫ DOM ===
    const productContainer = document.getElementById('product-container');

    // === ФУНКЦИЯ ОБНОВЛЕНИЯ СЧЁТЧИКА ===
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('horizon_cart')) || [];
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElement = document.querySelector('.cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = count;
        }
    }

    // === ОТРИСОВКА ТОВАРОВ ===
    function renderProducts() {
        if (!productContainer) return; // Защита от ошибки, если элемента нет
        
        productContainer.innerHTML = productsData.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}" class="product-img">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">${product.price}</div>
                    <!-- Передаём ID товара в функцию -->
                    <button class="add-to-cart" onclick="addToCart(${product.id}, this)">В корзину</button>
                </div>
            </div>
        `).join('');
        
        // Обновляем счётчик после отрисовки
        updateCartCount();
    }

    // === ДОБАВЛЕНИЕ В КОРЗИНУ ===
    function addToCart(productId, btnElement) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        let cart = JSON.parse(localStorage.getItem('horizon_cart')) || [];
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        localStorage.setItem('horizon_cart', JSON.stringify(cart));
        updateCartCount();
        
        // Анимация кнопки
        const originalText = btnElement.textContent;
        btnElement.textContent = "Добавлено!";
        btnElement.style.background = "#00C985";
        btnElement.style.color = "#fff";
        
        setTimeout(() => {
            btnElement.textContent = originalText;
            btnElement.style.background = "";
            btnElement.style.color = "";
        }, 1000);
    }

    // === ЗАПУСК ===
    document.addEventListener('DOMContentLoaded', () => {
        renderProducts();
    });
