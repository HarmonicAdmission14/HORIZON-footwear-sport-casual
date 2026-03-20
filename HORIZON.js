// Данные о товарах (имитация базы данных)
const productsData = [
    {
        id: 1,
        title: "Nike Air Jordan 1 Retro High OG SP Utility Stash",
        price: "25 900 ₽",
        image: "https://wayoff.ru/upload/iblock/9f4/up1z7o0r0ty0kfei62y2bezj6hg592pw.webp"
    },
    {
        id: 2,
        title: "Adidas Yeezy Boost 350 V2 Mono Ice",
        price: "27 900 ₽",
        image: "https://wayoff.ru/upload/iblock/425/2x2n60aevce2plr2jl8ccr7wukymsswy.webp"
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
        price: "37 900",
        image: "https://wayoff.ru/upload/iblock/76e/mj9j1t2bci76ocdz38n281nrdc2jppo4.webp"
    },
];

// Элементы DOM
const productContainer = document.getElementById('product-container');
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = [];

let cartCount = 0;

// Функция отрисовки товаров
function renderProducts() {
    productsData.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${product.price}</div>
                <button class="add-to-cart">В корзину</button>
            </div>
        `;

        productContainer.appendChild(card);
    });

    // Добавляем обработчики событий после создания элементов
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Предотвращаем всплытие, чтобы не сработал клик по карточке (если будет)
            e.stopPropagation();
            addToCart();
            
            // Анимация кнопки
            btn.textContent = "Добавлено!";
            btn.style.background = "#00C985";
            btn.style.color = "#fff";
            setTimeout(() => {
                btn.textContent = "В корзину";
                btn.style.background = "#f0f0f0";
                btn.style.color = "#333";
            }, 1000);
        });
    });
}

// Функция добавления в корзину
function addToCart() {
    cartCount++;
    cartCountElement.textContent = cartCount;
    
    // Анимация иконки корзины
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.style.transform = "scale(1.2)";
    setTimeout(() => {
        cartBtn.style.transform = "scale(1)";
    }, 200);
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
