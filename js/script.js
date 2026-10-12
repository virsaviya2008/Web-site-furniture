/* ==========================================================================
   ARKETIP — скрипты
   ========================================================================== */

/* ---------- Корзина: каталог товаров ---------- */
const PRODUCTS = {
  vinkel: { category: 'Кресло', title: 'Кресло Vinkel', price: 76000, image: 'images/collection/item-1.jpg', desc: 'Массив дуба, фактурное букле', details: 'Отделка: Натуральное масло • Цвет: Экрю' },
  mobler: { category: 'Стол', title: 'Обеденный стол Møbler', price: 142000, image: 'images/collection/item-2.jpg', desc: 'Массив ореха, 220 см' },
  klint: { category: 'Стул', title: 'Обеденный стул Klint', price: 34000, image: 'images/collection/item-3.jpg', desc: 'Белёный дуб, натуральная кожа', details: 'Цвет кожи: Коньячный • Порода: Скандинавский дуб' },
  fjord: { category: 'Журнальный столик', title: 'Журнальный столик Fjord', price: 48000, image: 'images/collection/item-4.jpg', desc: 'Орех, фацетированный край' },
  lignum: { category: 'Комод', title: 'Комод Lowboard Lignum', price: 118000, image: 'images/collection/item-5.jpg', desc: 'Дуб, латунные ручки' },
  sove: { category: 'Кровать', title: 'Кровать Sove', price: 165000, image: 'images/collection/item-6.jpg', desc: 'Массив ясеня, изголовье из льна' },
  kub: { category: 'Прикроватная тумба', title: 'Прикроватная тумба Kub', price: 28000, image: 'images/collection/item-7.jpg', desc: 'Дуб, скрытый ящик' },
  stilk: { category: 'Торшер', title: 'Торшер Stilk', price: 38000, image: 'images/collection/item-8.png', desc: 'Латунь, абажур из японской бумаги' },
  reol: { category: 'Стеллаж', title: 'Стеллаж Reol', price: 92000, image: 'images/collection/item-9.png', desc: 'Модульный открытый дуб' },
  haven: { category: 'Диван', title: 'Модульный диван Haven', price: 210000, image: 'images/living/haven.jpg', desc: 'Фактурный лён, белёный дуб' },
  freja: { category: 'Кресло', title: 'Лаунж-кресло Freja', price: 84000, image: 'images/living/freja.jpg', desc: 'Белёный ясень, тёплая шерсть' },
  plateau: { category: 'Приставной столик', title: 'Приставной столик Plateau', price: 32000, image: 'images/living/plateau.jpg', desc: 'Состаренный дуб' },
  pause: { category: 'Кушетка', title: 'Кушетка Pause', price: 135000, image: 'images/living/pause.jpg', desc: 'Кожа растительного дубления, дуб' },
  ro: { category: 'Кровать', title: 'Кровать Ro', price: 185000, image: 'images/bedroom/ro.jpg', desc: 'Низкий подиум в стиле japandi, цельный массив дуба' },
  dybe: { category: 'Комод', title: 'Комод Dybe', price: 124000, image: 'images/bedroom/dybe.jpg', desc: 'Белёный дуб, 4 ящика, ручки с латунной фрезеровкой' },
  hvile: { category: 'Банкетка', title: 'Банкетка Hvile', price: 54000, image: 'images/bedroom/hvile.jpg', desc: 'Массив ясеня, настил из кожи растительного дубления' },
  dis: { category: 'Настольная лампа', title: 'Настольная лампа Dis', price: 32000, image: 'images/bedroom/dis.jpg', desc: 'Основание из серого травертина, плафон из молочного стекла' },
  linum: { category: 'Текстиль', title: 'Комплект белья Linum', price: 24000, image: 'images/bedroom/linum.jpg', desc: '100% органический умягчённый лён, оттенок Овёс' },
  spejl: { category: 'Зеркало', title: 'Зеркало Spejl', price: 42000, image: 'images/bedroom/spejl.jpg', desc: 'Цельный обод из ореха ручной гибки, диаметр 80 см' },
  svaeve: { category: 'Подвесной столик', title: 'Подвесной столик Svæve', price: 19000, image: 'images/bedroom/svaeve.jpg', desc: 'Крепление к стене, массив светлого дуба' },
  torv: { category: 'Барный стул', title: 'Барный стул Torv', price: 29000, image: 'images/kitchen/torv.jpg', desc: 'Массив ясеня, скрытые шиповые соединения, высота 65 см' },
  rund: { category: 'Стол', title: 'Обеденный стол Rund', price: 128000, image: 'images/kitchen/rund.jpg', desc: 'Круглый стол из цельного массива ореха, диаметр 130 см' },
  ask: { category: 'Полукресло', title: 'Полукресло Ask', price: 42000, image: 'images/kitchen/ask.jpg', desc: 'Округлая спинка из гнутого дуба, сиденье из небелёного льна' },
  skaenk: { category: 'Буфет', title: 'Буфет Skænk', price: 156000, image: 'images/kitchen/skaenk.jpg', desc: 'Массив дуба, рифлёные фасады, латунные петли' },
  kupe: { category: 'Светильник', title: 'Подвесной светильник Kupe', price: 38000, image: 'images/kitchen/kupe.jpg', desc: 'Шлифованная матовая латунь, плафон из молочного стекла' },
  sadel: { category: 'Табурет', title: 'Табурет Sadel', price: 22000, image: 'images/kitchen/sadel.jpg', desc: 'Массив ясеня, ручная фрезеровка сиденья' },
  rulle: { category: 'Сервировочный столик', title: 'Сервировочный столик Rulle', price: 46000, image: 'images/kitchen/rulle.jpg', desc: 'Двухуровневый столик на скрытых латунных колёсиках' },
  skrive: { category: 'Письменный стол', title: 'Письменный стол Skrive', price: 96000, image: 'images/collection/item-21.jpg', desc: 'Массив светлого дуба, кожаный лоток для канцелярии' },
  arbejde: { category: 'Рабочее кресло', title: 'Рабочее кресло Arbejde', price: 64000, image: 'images/collection/item-22.jpg', desc: 'Массив ясеня, эргономичная спинка, шерсть' },
  glas: { category: 'Шкаф-витрина', title: 'Шкаф-витрина Glas', price: 178000, image: 'images/collection/item-27.jpg', desc: 'Рамочные дубовые фасады, рифлёное стекло Flutes' },
};

const CART_KEY = 'arketip-cart';
const FREE_DELIVERY_FROM = 100000;
const DELIVERY_PRICE = 5000;

/* ---------- Корзина: хранение в localStorage ---------- */
function loadCart() {
  try {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    return cart.filter((item) => PRODUCTS[item.id] && item.qty > 0);
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCartCount(cart);
}

function getCartQty(cart) {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function formatPrice(value) {
  return `${value.toLocaleString('ru-RU')} ₽`;
}

function pluralize(count, one, few, many) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

/* ---------- Корзина: счётчик в шапке ---------- */
const cartBtn = document.querySelector('.cart-btn');
const cartCount = document.querySelector('.cart-btn__count');

function renderCartCount(cart) {
  if (!cartCount) return;
  const count = getCartQty(cart);
  cartCount.textContent = count;
  cartCount.hidden = count === 0;
  cartBtn.setAttribute('aria-label', `Корзина покупок, товаров: ${count}`);
}

renderCartCount(loadCart());

// Корзина, изменённая в другой вкладке
window.addEventListener('storage', (event) => {
  if (event.key !== CART_KEY) return;
  renderCartCount(loadCart());
  renderCartPage();
});

/* ---------- Корзина: кнопки «В корзину» ---------- */
function addToCart(button) {
  const id = button.closest('[data-product]').dataset.product;
  const cart = loadCart();
  const item = cart.find((entry) => entry.id === id);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart(cart);

  clearTimeout(button.resetTimer);
  if (!button.dataset.label) button.dataset.label = button.innerHTML;
  button.classList.add('catalog-card__cart--added');
  button.textContent = 'Добавлено ✓';
  button.resetTimer = setTimeout(() => {
    button.classList.remove('catalog-card__cart--added');
    button.innerHTML = button.dataset.label;
  }, 1500);
}

document.querySelectorAll('.catalog-card__cart, .product-card__cart').forEach((button) => {
  button.addEventListener('click', () => addToCart(button));
});

/* ---------- Корзина: страница корзины ---------- */
const cartList = document.querySelector('[data-cart-list]');

function createCartItem({ id, qty }) {
  const product = PRODUCTS[id];
  const article = document.createElement('article');
  article.className = 'cart-item';
  article.dataset.id = id;
  article.innerHTML = `
    <div class="cart-item__image">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="cart-item__body">
      <div class="cart-item__top">
        <div>
          <p class="cart-item__category">${product.category}</p>
          <h2 class="cart-item__title"><a href="collection.html">${product.title}</a></h2>
          <p class="cart-item__desc">${product.desc}</p>
          ${product.details ? `<p class="cart-item__details">${product.details}</p>` : ''}
        </div>
        <div class="cart-item__prices">
          <p class="cart-item__price">${formatPrice(product.price * qty)}</p>
          ${qty > 1 ? `<p class="cart-item__unit">${formatPrice(product.price)} / шт</p>` : ''}
        </div>
      </div>
      <div class="cart-item__footer">
        <div class="stepper">
          <button class="stepper__btn" type="button" data-action="decrease" aria-label="Уменьшить количество"${qty <= 1 ? ' disabled' : ''}>−</button>
          <span class="stepper__value" aria-live="polite">${qty}</span>
          <button class="stepper__btn" type="button" data-action="increase" aria-label="Увеличить количество">+</button>
        </div>
        <button class="cart-item__remove" type="button" data-action="remove">Удалить</button>
      </div>
    </div>`;
  return article;
}

function renderCartPage() {
  if (!cartList) return;

  const cart = loadCart();
  const qty = getCartQty(cart);
  const subtotal = cart.reduce((sum, item) => sum + PRODUCTS[item.id].price * item.qty, 0);
  const delivery = subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_PRICE;

  document.querySelector('[data-cart-counter]').textContent =
    `${qty} ${pluralize(qty, 'предмет', 'предмета', 'предметов')}`;
  document.querySelector('[data-cart-filled]').hidden = cart.length === 0;
  document.querySelector('[data-cart-empty]').hidden = cart.length > 0;

  cartList.replaceChildren(...cart.map(createCartItem));
  document.querySelector('[data-cart-subtotal]').textContent = formatPrice(subtotal);
  document.querySelector('[data-cart-delivery]').textContent = formatPrice(delivery);
  document.querySelector('[data-cart-total]').textContent = formatPrice(subtotal + delivery);
}

if (cartList) {
  cartList.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]');
    if (!button) return;

    const id = button.closest('.cart-item').dataset.id;
    let cart = loadCart();
    const item = cart.find((entry) => entry.id === id);
    if (!item) return;

    if (button.dataset.action === 'increase') item.qty += 1;
    if (button.dataset.action === 'decrease') item.qty = Math.max(1, item.qty - 1);
    if (button.dataset.action === 'remove') cart = cart.filter((entry) => entry.id !== id);

    saveCart(cart);
    renderCartPage();

    // Возвращаем фокус на нажатую кнопку после перерисовки
    const focusTarget = cartList.querySelector(`[data-id="${id}"] [data-action="${button.dataset.action}"]`);
    if (focusTarget && !focusTarget.disabled) focusTarget.focus();
  });

  renderCartPage();
}

/* ---------- Оформление заказа ---------- */
const checkoutForm = document.querySelector('[data-checkout-form]');
const CRATE_PRICE = 4500;

function getCheckoutTotals() {
  const cart = loadCart();
  const subtotal = cart.reduce((sum, item) => sum + PRODUCTS[item.id].price * item.qty, 0);
  const isPickup = checkoutForm.elements.delivery.value === 'pickup';
  const delivery = isPickup || subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_PRICE;
  const crate = checkoutForm.elements.crate.checked ? CRATE_PRICE : 0;
  return { cart, subtotal, delivery, crate, isPickup, total: subtotal + delivery + crate };
}

function createOrderItem({ id, qty }) {
  const product = PRODUCTS[id];
  const item = document.createElement('li');
  item.className = 'order-item';
  item.innerHTML = `
    <div class="order-item__image">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="order-item__body">
      <div>
        <div class="order-item__top">
          <h3 class="order-item__title">${product.title}</h3>
          <p class="order-item__price">${formatPrice(product.price * qty)}</p>
        </div>
        <p class="order-item__desc">${product.desc}</p>
        <p class="order-item__qty">Количество: ${qty} шт.${qty > 1 ? ` (${formatPrice(product.price)} / шт.)` : ''}</p>
      </div>
      <p class="order-item__stock">В наличии на складе в СПб</p>
    </div>`;
  return item;
}

function renderCheckout() {
  const { cart, subtotal, delivery, crate, isPickup, total } = getCheckoutTotals();
  const positions = cart.length;

  document.querySelector('[data-checkout-filled]').hidden = positions === 0;
  document.querySelector('[data-checkout-empty]').hidden = positions > 0;
  if (positions === 0) return;

  document.querySelector('[data-order-count]').textContent =
    `${positions} ${pluralize(positions, 'предмет', 'предмета', 'предметов')}`;
  document.querySelector('[data-order-list]').replaceChildren(...cart.map(createOrderItem));
  document.querySelector('[data-order-subtotal]').textContent = formatPrice(subtotal);

  // Доставка: бесплатно при самовывозе или по акции от FREE_DELIVERY_FROM
  const courierPrice = subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_PRICE;
  document.querySelector('[data-delivery-price]').textContent = formatPrice(courierPrice);
  document.querySelector('[data-order-delivery]').textContent = delivery === 0 ? 'Бесплатно' : formatPrice(delivery);
  document.querySelector('[data-order-promo-badge]').hidden = isPickup || delivery > 0;
  document.querySelector('[data-address]').hidden = isPickup;
  checkoutForm.elements.street.required = !isPickup;

  document.querySelector('[data-order-crate-row]').hidden = crate === 0;
  document.querySelector('[data-order-total]').textContent = formatPrice(total);

  const part = Math.ceil(total / 4);
  document.querySelector('[data-split-amount]').textContent = `4 × ${formatPrice(part)}`;
  document.querySelector('[data-split-hint]').textContent = `4 платежа по ${formatPrice(part)} каждые две недели без переплат`;
  document.querySelector('[data-submit-label]').textContent =
    checkoutForm.elements.payment.value === 'card' || checkoutForm.elements.payment.value === 'split'
      ? `Подтвердить и оплатить ${formatPrice(total)}`
      : `Подтвердить заказ на ${formatPrice(total)}`;
}

function showOrderDone(email) {
  document.querySelector('[data-checkout-filled]').hidden = true;
  document.querySelector('[data-checkout-done]').hidden = false;
  document.querySelector('[data-order-number]').textContent = `AR-${Date.now().toString().slice(-6)}`;
  document.querySelector('[data-order-email]').textContent = email;
  document.querySelector('[data-checkout-step]').textContent = 'Шаг 3 из 3: подтверждение';

  const current = document.querySelector('[data-step="checkout"]');
  const done = document.querySelector('[data-step="done"]');
  current.removeAttribute('aria-current');
  done.classList.remove('breadcrumbs__upcoming');
  done.setAttribute('aria-current', 'step');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (checkoutForm) {
  const status = document.querySelector('[data-checkout-status]');

  checkoutForm.addEventListener('change', renderCheckout);

  // Фирменная сборка всегда включена — галочку нельзя снять
  checkoutForm.elements.assembly.addEventListener('click', (event) => event.preventDefault());

  checkoutForm.addEventListener('input', (event) => {
    if (event.target.checkValidity()) {
      event.target.classList.remove('checkout-field__input--invalid');
    }
  });

  checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = [...checkoutForm.querySelectorAll('.checkout-field__input')]
      .filter((field) => !field.closest('[hidden]'));
    let firstInvalid = null;
    fields.forEach((field) => {
      const isValid = field.checkValidity();
      field.classList.toggle('checkout-field__input--invalid', !isValid);
      if (!isValid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      status.textContent = 'Пожалуйста, заполните обязательные поля, отмеченные звёздочкой.';
      firstInvalid.focus();
      return;
    }

    status.textContent = '';
    const email = checkoutForm.elements.email.value;
    saveCart([]);
    showOrderDone(email);
  });

  document.querySelector('[data-promo]').addEventListener('submit', (event) => {
    event.preventDefault();
    const code = event.target.elements.promo.value.trim();
    document.querySelector('[data-promo-status]').textContent = code
      ? `Промокод «${code}» не найден. Проверьте написание или уточните у куратора.`
      : 'Введите промокод или номер сертификата.';
  });

  window.addEventListener('storage', (event) => {
    if (event.key === CART_KEY && document.querySelector('[data-checkout-done]').hidden) renderCheckout();
  });

  renderCheckout();
}

/* ---------- Коллекция: фильтр по категориям ---------- */
const filterButtons = document.querySelectorAll('.filters__btn');
const cards = document.querySelectorAll('.catalog-card');
const catalogGrid = document.querySelector('.catalog__grid');
const rail = document.querySelector('.catalog-rail');
const railTrack = document.querySelector('.catalog-rail__track');

// Во вкладке «Все» в сетке первые 9 товаров, остальные — в горизонтальной ленте
const GRID_LIMIT = 9;

function applyFilter(filter) {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle('filters__btn--active', isActive);
    button.setAttribute('aria-pressed', isActive);
  });

  const showRail = Boolean(rail) && filter === 'all';

  cards.forEach((card, index) => {
    const categories = card.dataset.category.split(' ');
    card.hidden = filter !== 'all' && !categories.includes(filter);

    // Карточки переставляются по порядку: в ленту или обратно в сетку
    if (rail) (showRail && index >= GRID_LIMIT ? railTrack : catalogGrid).append(card);
  });

  if (rail) {
    rail.hidden = !showRail;
    railTrack.scrollLeft = 0;
    updateRailArrows();
  }
}

function updateRailArrows() {
  const maxScroll = railTrack.scrollWidth - railTrack.clientWidth;
  rail.querySelector('[data-rail="prev"]').disabled = railTrack.scrollLeft <= 1;
  rail.querySelector('[data-rail="next"]').disabled = railTrack.scrollLeft >= maxScroll - 1;
}

if (rail) {
  rail.querySelectorAll('[data-rail]').forEach((button) => {
    button.addEventListener('click', () => {
      const card = railTrack.querySelector('.catalog-card');
      const gap = parseFloat(getComputedStyle(railTrack).columnGap) || 0;
      const step = card ? card.offsetWidth + gap : railTrack.clientWidth;
      railTrack.scrollBy({ left: button.dataset.rail === 'next' ? step : -step });
    });
  });

  railTrack.addEventListener('scroll', updateRailArrows, { passive: true });
  window.addEventListener('resize', updateRailArrows);
  updateRailArrows();
}

if (filterButtons.length) {
  // Количество товаров в каждой категории
  filterButtons.forEach((button) => {
    const filter = button.dataset.filter;
    const count = filter === 'all'
      ? cards.length
      : [...cards].filter((card) => card.dataset.category.split(' ').includes(filter)).length;
    button.querySelector('[data-count]').textContent = count;

    button.addEventListener('click', () => {
      applyFilter(filter);
      history.replaceState(null, '', filter === 'all' ? location.pathname : `#${filter}`);
    });
  });

  // Ссылки вида collection.html#living с главной страницы
  const hashFilter = location.hash.slice(1);
  if ([...filterButtons].some((button) => button.dataset.filter === hashFilter)) {
    applyFilter(hashFilter);
  }
}

/* ---------- Контакты: форма заявки ---------- */
const requestForm = document.querySelector('.request-form');

if (requestForm) {
  const status = requestForm.querySelector('.request-form__status');

  requestForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = requestForm.querySelectorAll('.field__input');
    let firstInvalid = null;
    fields.forEach((field) => {
      const isValid = field.checkValidity();
      field.classList.toggle('field__input--invalid', !isValid);
      if (!isValid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      status.textContent = 'Пожалуйста, заполните обязательные поля.';
      firstInvalid.focus();
      return;
    }

    status.textContent = 'Спасибо! Куратор свяжется с вами в течение рабочего дня.';
    requestForm.reset();
  });

  requestForm.addEventListener('input', (event) => {
    if (event.target.checkValidity()) {
      event.target.classList.remove('field__input--invalid');
    }
  });
}

/* ---------- Контакты: масштаб карты ---------- */
const mapCanvas = document.querySelector('.map__canvas');

if (mapCanvas) {
  const zoomButtons = document.querySelectorAll('.map__zoom-btn');
  const MIN_ZOOM = 1;
  const MAX_ZOOM = 1.6;
  let zoom = MIN_ZOOM;

  function updateZoom() {
    mapCanvas.style.transform = `scale(${zoom})`;
    zoomButtons.forEach((button) => {
      button.disabled = button.dataset.zoom === 'in' ? zoom >= MAX_ZOOM : zoom <= MIN_ZOOM;
    });
  }

  zoomButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const step = button.dataset.zoom === 'in' ? 0.2 : -0.2;
      zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, +(zoom + step).toFixed(1)));
      updateZoom();
    });
  });

  updateZoom();
}

/* ---------- Мобильное меню ---------- */
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

if (burger && mobileMenu) {
  const setMenuOpen = (isOpen) => {
    burger.setAttribute('aria-expanded', isOpen);
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    mobileMenu.classList.toggle('mobile-menu--open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  };

  burger.addEventListener('click', () => {
    setMenuOpen(burger.getAttribute('aria-expanded') !== 'true');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });

  // При переходе на десктопную ширину меню закрывается
  window.matchMedia('(min-width: 769px)').addEventListener('change', (event) => {
    if (event.matches) setMenuOpen(false);
  });
}

/* ---------- Главная: счётчик ленты новинок (01 / 03) ---------- */
const productsGrid = document.querySelector('.products__grid');
const productsCurrent = document.querySelector('[data-products-current]');

if (productsGrid && productsCurrent) {
  const productCards = productsGrid.querySelectorAll('.product-card');
  const pad = (number) => String(number).padStart(2, '0');

  document.querySelector('[data-products-total]').textContent = pad(productCards.length);

  const updateProductsCounter = () => {
    const maxScroll = productsGrid.scrollWidth - productsGrid.clientWidth;
    const step = productCards[1]
      ? productCards[1].offsetLeft - productCards[0].offsetLeft
      : productsGrid.clientWidth;
    const index = productsGrid.scrollLeft >= maxScroll - 1
      ? productCards.length - 1
      : Math.round(productsGrid.scrollLeft / step);
    productsCurrent.textContent = pad(index + 1);
  };

  productsGrid.addEventListener('scroll', updateProductsCounter, { passive: true });
}
