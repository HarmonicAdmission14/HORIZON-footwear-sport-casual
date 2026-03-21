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
            images: [
                "https://wayoff.ru/upload/iblock/da2/bucy6lawasdzwozp7hssg85wbi4g2pb0.webp"
                "https://wayoff.ru/upload/iblock/b28/uthnrs6oa1mlge5bu0qwv7vnrw8h3gjn.webp"
                "https://wayoff.ru/upload/iblock/895/10gf1oqb6ls4i0cm05qq62062hwwwld3.webp"
                ]
        },
        {
            id: 4,
            title: "Nike Dunk Low Remastered Reverse Panda",
            price: "25 900 ₽",
            images: [
                "https://wayoff.ru/upload/iblock/9aa/h3lrmcarkesrb34viqqj11jq9jtas9h5.webp"
                "https://wayoff.ru/upload/iblock/acc/k6blujffgeawf7hdayahplv0odio8p5a.webp"
                "https://wayoff.ru/upload/iblock/eac/u0ks6ot1a1wn2vzckom3k09nl12s6496.webp"
                "https://wayoff.ru/upload/iblock/098/c0ld6bnt3ejs2k1nexoafsytul5q8v2y.webp"
                "https://wayoff.ru/upload/iblock/cb2/7014ld467nclpfajjr2vxnlr1c2gsh5r.webp"
                 ]
            
        },
        {
            id: 5,
            title: "Jordan 4 Retro Military Black",
            price: "51 900 ₽",
            images: [
                "https://wayoff.ru/upload/iblock/2fd/rpmemm2rk3m2fs8cum5zthrsdo7wfx52.webp"
                "https://wayoff.ru/upload/iblock/248/icq201zzz5z9df0hed30it40cdr196j6.webp"
                "https://wayoff.ru/upload/iblock/436/jo42f83jivhlxbt51rpqh3s2776z9lzn.webp"
                ]
            
        },
        {
            id: 6,
            title: "Nike Air Force 1 '07 WMNS Cut Out Wheat",
            price: "27 900 ₽",
            images: [
                "https://wayoff.ru/upload/iblock/861/8r0qbrjcqmg7ulkivvvknm1p5xrgmqxt.webp"
                "https://wayoff.ru/upload/iblock/f7a/gmwrzy71lguhk8fmcx06ml63p42643zq.webp"
                "https://wayoff.ru/upload/iblock/ea1/kkwb4afsd6vfvzkf2nur4y3j86f23juj.webp"
                "https://wayoff.ru/upload/iblock/c08/xzqrl2emfta1otw0xvgfqbi4g434xk1h.webp"
               ]
        },
        {
            id: 7,
            title: "Asics Gel 1130 White Pure Silver Black",
            price: "25 900 ₽",
            images: [
                "https://wayoff.ru/upload/iblock/b3a/j1qhp9rf5gvnj0loqhqmndjvw9hgxrkn.webp"
                "https://wayoff.ru/upload/iblock/7a5/0ndr5xu5qwa57ooi71v8ve4hsdipow78.webp"
                "https://wayoff.ru/upload/iblock/355/ql4k0vcvvao2sbag217ilgk8hs84el63.webp"
               ]
        },
        {
            id: 8,
            title: "Gel Nimbus 9 Vanilla Black",
            price: "37 900 ₽",
            images: [
                "https://wayoff.ru/upload/iblock/76e/mj9j1t2bci76ocdz38n281nrdc2jppo4.webp"
                "https://wayoff.ru/upload/iblock/54a/j1t3lqnkeflbfb4s6y5rvv9cz1x9so7i.webp"
                "https://wayoff.ru/upload/iblock/85e/8q24lwn00s4tvkha6xnvkprb93v5s51y.webp"
            ]
        },
    ];

    // === ХРАНИЛИЩЕ ДЛЯ ТЕКУЩИХ ИНДЕКСОВ КАЖДОГО ТОВАРА ===
        const currentImageIndex = {};

        // === ЭЛЕМЕНТЫ DOM ===
        const productContainer = document.getElementById('product-container');
        const cartCountElement = document.querySelector('.cart-count');

        // === ОБНОВЛЕНИЕ СЧЁТЧИКА КОРЗИНЫ ===
        function updateCartCount() {
            const cart = JSON.parse(localStorage.getItem('horizon_cart')) || [];
            const count = cart.reduce((sum, item) => sum + item.quantity, 0);
            if (cartCountElement) {
                cartCountElement.textContent = count;
            }
        }

        // === ОТРИСОВКА ТОВАРОВ ===
        function renderProducts() {
            if (!productContainer) {
                console.error('Контейнер товаров не найден!');
                return;
            }

            productContainer.innerHTML = '';

            productsData.forEach((product, productIndex) => {
                // Инициализируем индекс для этого товара
                currentImageIndex[product.id] = 0;

                const card = document.createElement('div');
                card.className = 'product-card';
                card.dataset.productId = product.id;

                card.innerHTML = `
                    <div class="product-gallery">
                        <button class="gallery-btn prev" data-product-id="${product.id}" data-direction="-1">
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <img src="${product.images[0]}" alt="${product.title}" class="product-img" data-product-id="${product.id}">
                        <button class="gallery-btn next" data-product-id="${product.id}" data-direction="1">
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                        <div class="gallery-dots" data-product-id="${product.id}">
                            ${product.images.map((_, imgIndex) => 
                                `<span class="dot ${imgIndex === 0 ? 'active' : ''}" data-img-index="${imgIndex}"></span>`
                            ).join('')}
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <div class="product-price">${product.price}</div>
                        <button class="add-to-cart" data-product-id="${product.id}">
                            <i class="fa-solid fa-cart-plus"></i> В корзину
                        </button>
                    </div>
                `;

                productContainer.appendChild(card);
            });

            // Добавляем обработчики событий
            setupGalleryListeners();
            setupCartListeners();
            updateCartCount();
        }

        // === НАСТРОЙКА ОБРАБОТЧИКОВ ГАЛЕРЕИ ===
        function setupGalleryListeners() {
            // Кнопки влево/вправо
            document.querySelectorAll('.gallery-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.productId);
                    const direction = parseInt(this.dataset.direction);
                    changeImage(productId, direction);
                });
            });

            // Точки-индикаторы
            document.querySelectorAll('.dot').forEach(dot => {
                dot.addEventListener('click', function() {
                    const productId = parseInt(this.parentElement.dataset.productId);
                    const imgIndex = parseInt(this.dataset.imgIndex);
                    goToImage(productId, imgIndex);
                });
            });
        }

        // === НАСТРОЙКА ОБРАБОТЧИКОВ КОРЗИНЫ ===
        function setupCartListeners() {
            document.querySelectorAll('.add-to-cart').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.productId);
                    addToCart(productId, this);
                });
            });
        }

        // === ПЕРЕКЛЮЧЕНИЕ ИЗОБРАЖЕНИЙ ===
        function changeImage(productId, direction) {
            const product = productsData.find(p => p.id === productId);
            if (!product) return;

            let currentIndex = currentImageIndex[productId] || 0;
            let newIndex = currentIndex + direction;

            // Зацикливание
            if (newIndex < 0) newIndex = product.images.length - 1;
            if (newIndex >= product.images.length) newIndex = 0;

            // Обновляем индекс
            currentImageIndex[productId] = newIndex;

            // Находим изображение и обновляем
            const imgElement = document.querySelector(`img.product-img[data-product-id="${productId}"]`);
            if (imgElement) {
                imgElement.style.opacity = '0.5';
                setTimeout(() => {
                    imgElement.src = product.images[newIndex];
                    imgElement.style.opacity = '1';
                }, 150);
            }

            // Обновляем точки
            updateDots(productId, newIndex);
        }

        // === ПЕРЕХОД К КОНКРЕТНОМУ ИЗОБРАЖЕНИЮ ===
        function goToImage(productId, imgIndex) {
            const product = productsData.find(p => p.id === productId);
            if (!product) return;

            const currentIndex = currentImageIndex[productId] || 0;
            if (currentIndex !== imgIndex) {
                const direction = imgIndex > currentIndex ? 1 : -1;
                changeImage(productId, direction);
            }
        }

        // === ОБНОВЛЕНИЕ ТОЧЕК-ИНДИКАТОРОВ ===
        function updateDots(productId, activeIndex) {
            const dotsContainer = document.querySelector(`.gallery-dots[data-product-id="${productId}"]`);
            if (!dotsContainer) return;

            dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === activeIndex);
            });
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
                    images: product.images,
                    quantity: 1
                });
            }

            localStorage.setItem('horizon_cart', JSON.stringify(cart));
            updateCartCount();

            // Анимация кнопки
            const originalText = btnElement.innerHTML;
            btnElement.innerHTML = '<i class="fa-solid fa-check"></i> Добавлено!';
            btnElement.style.background = '#00C985';
            btnElement.style.color = '#fff';

            setTimeout(() => {
                btnElement.innerHTML = originalText;
                btnElement.style.background = '';
                btnElement.style.color = '';
            }, 1000);
        }

        // === ЗАПУСК ===
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts();
        });
