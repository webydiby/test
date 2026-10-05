const $components = document.querySelectorAll('[class*="-component"]');
const $storeComponents = document.querySelectorAll('.store-component');
const $menuComponents = document.querySelectorAll('.menu-component');
const $orderComponents = document.querySelectorAll('.order-component');
const $cartComponents = document.querySelectorAll('.cart-component');
const componentStyle = document.createElement('style');

(function createStoreComp() {
  $storeComponents.forEach((element) => {
    const href = element.dataset.href;
    const attr = href ? `href="${href}"` : '';
    const tag = href ? 'a' : 'button';
  
    element.innerHTML = `
    <div class="component-contents col">
      <div class="row">
        <p>
          <span class="store-name fw-bold"></span>
          <sub class="distance fw-bold"></sub>
        </p>
      </div>
      <div>
        <p class="address c-charcoal fz-small"></p>
        <p class="minute c-charcoal fz-small"></p>
      </div>
      <div class="row">
        <div class="symbol"></div>
        <${tag} ${attr} class="primary-btn select-btn">선택하기</${tag}>
      </div>
    </div>
    `;
  
    renderStoreComp(element);
  });
})();

function renderStoreComp(element) {
  const storeId = element.dataset.storeId === 'current'
    ? cartInfo.store
    : element.dataset.storeId;
  const info = storeInfo[storeId];
  const minute = parseInt(info.minute);

  const $storeName = element.querySelector('.store-name');
  const $distance = element.querySelector('.distance');
  const $address = element.querySelector('.address');
  const $minute = element.querySelector('.minute');

  $storeName.textContent = info.name;
  $distance.textContent = info.distance;
  $address.textContent = info.address;
  $minute.textContent = `예상 소요시간: ${minute} ~ ${minute + 15}분`;
}

(function createMenuComp() {
  $menuComponents.forEach((element) => {
    const menuId = element.dataset.menuId;
    const info = menuInfo[menuId];
    const href = element.dataset.href;
    const attr = href ? `href="${href}"` : '';
    const tag = href ? 'a' : 'button';
  
    element.innerHTML = `
    <div class="component-contents row">
      <img src="img/dish/${menuId}.png" alt="${info.kr} 이미지" class="thumb">
      <div class="col">
        <div class="row">
          <p class="menu-kr fw-bold">${info.kr}</p>
        </div>
        <div class="row">
          <p class="menu-en c-charcoal fz-small">${info.en}</p>
        </div>
        <div class="row">
          <p class="price">${parseInt(info.price).toLocaleString()}원</p>
          <${tag} ${attr} class="primary-btn select-btn">선택하기</${tag}>
        </div>
      </div>
    </div>
    `;
  });
})();

(function createOrderComp() {
  $orderComponents.forEach((element) => {
    element.innerHTML = `
    <div class="component-contents col">
      <div class="row">
        <div class="symbol"></div>
        <div>
          <p class="date c-charcoal fz-small">
            <span class="month"></span>월
            <span class="day"></span>일
            (<span class="week"></span>)
          </p>
          <p class="store-name fw-bold"></p>
          <p class="address c-charcoal fz-small"></p>
        </div>
      </div>
      <div class="details"></div>
      <div class="horizontal-line"></div>
      <p class="price"></p>
    </div>
    `;
    
    renderOrderComp(element);
  });
})();

function renderOrderComp(element) {
  const orderId = element.dataset.orderId;
  const info = orderId === 'current'
    ? orderInfo
    : historyInfo[orderId];
  const date = info.date;
  const storeName = storeInfo[info.store].name;
  const address = storeInfo[info.store].address;
  const details = info.items
    .map((id) => `<p>${menuInfo[id].kr} <b>1개</b></p>`)
    .join('');
  const price = info.items.reduce((sum, id) => {
    return sum + parseInt(menuInfo[id].price);
  }, 0).toLocaleString();
  
  const $date = element.querySelector('.date');
  const $storeName = element.querySelector('.store-name');
  const $address = element.querySelector('.address');
  const $details = element.querySelector('.details');
  const $price = element.querySelector('.price');

  if (date) $date.textContent = date;
  $storeName.textContent = storeName;
  $address.textContent = address;
  $details.innerHTML = details;
  $price.textContent = `총합 ${price}원`;
}

(function createCartComp() {
  $cartComponents.forEach((element) => {
    element.innerHTML = `
    <div class="component-contents col">
      <div class="row">
        <div class="symbol"></div>
        <div>
          <p class="date c-charcoal fz-small">
            <span class="month"></span>월
            <span class="day"></span>일
            (<span class="week"></span>)
          </p>
          <p class="store-name fw-bold"></p>
          <p class="address c-charcoal fz-small"></p>
        </div>
      </div>
      <div class="item-list col"></div>
    </div>
    `;
    
    renderCartComp(element);
  });
})();

function renderCartComp(element) {
  const info = cartInfo;
  const storeName = storeInfo[cartInfo.store].name;
  const address = storeInfo[cartInfo.store].address;
  const itemList = info.items
    .map((items) => `
    <div class="item row">
      <img src="img/dish/${items[0]}.png">
      <div class="row">
        <div class="details">${
          items
            .map((id) => `<p>${menuInfo[id].kr} 1개</p>`)
            .join('')
          }<p class="price">${
            items.reduce((sum, id) => {
              return sum + parseInt(menuInfo[id].price)
            }, 0).toLocaleString()
          }원</p>
        </div>
        <button class="close-btn"></button>
      </div>
    </div>
    `)
    .join('');
  
  const $storeName = element.querySelector('.store-name');
  const $address = element.querySelector('.address');
  const $itemList = element.querySelector('.item-list');

  $storeName.textContent = storeName;
  $address.textContent = address;
  $itemList.innerHTML = itemList;
}

componentStyle.innerHTML = `
[class*="-component"] {
  --paddingX: 1.25em;
  --paddingY: 0.625em;
  --gap: var(--paddingY);
  position: relative;
  width: 100%;
  padding: var(--paddingY) var(--paddingX);
  border-radius: var(--paddingX);
  background: var(--white);
  color: var(--black);
  box-shadow: var(--shadow-bottom);

  .row, .col {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    gap: var(--gap);

    &.row {
      flex-direction: row;
    }
  }
  
  &.selected {
    opacity: 0.75;

  }

  &.disable {
    pointer-events: none;
  }
  
  b {
    color: var(--orange-red);
    font-weight: var(--semi);
  }
  
  sub {
    font-size: var(--small);
    line-height: 1;
    vertical-align: baseline;
  }

  .details {
    font-size: calc(((var(--regular) + var(--small)) / 2));
    
    p:nth-of-type(n + 2) {
      margin-top: 0.125em;
    }
  }
  
  .price {
    word-break: keep-all;
  }
  
  .primary-btn {
    margin: auto 0 0 auto;
  }

  .symbol {
    height: var(--height, 3.125em);
    margin-top: 0.3125em;
  }

  &.menu-component {
    container: has-thumb / inline-size;
    
    .component-contents {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    .thumb {
      width: 7.5em;
      border-radius: var(--paddingY);
    }

    .price {
      margin: auto 0;
    }
    
    @container has-thumb (max-width: 20em) {
      
      .thumb {
        width: 100%;
      }

      .primary-btn {
        margin-top: 0.5em;
      }
    }
  }

  &.order-component, &.history-component {
  
    .price {
      margin-left: auto;
    }
  }

  &.cart-component {

    .item-list > * {
      padding-top: var(--paddingY);
      border-top: 1px solid var(--gray);
    }
    
    .symbol, img {
      width: 4em;
      align-self: start;
    }

    img + * {
      padding-top: 0.25em;
      padding: 0.25em 0;
    }

    .close-btn {
      position: relative;
      width: 1em;
      height: 1em;
      margin-left: auto;
      margin-right: 0.125em;

      &::after, &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(var(--rotate, 45deg));
        width: 100%;
        height: 0;
        border-top: 1px solid var(--gray);
      }

      &::before {
        --rotate: -45deg
      }
    }
  }
}

.component-group {
  display: grid;
  grid-template-columns: repeat(var(--col, 1), 1fr);
  width: 100%;
  gap: inherit;

  @container screen (min-width: 481px) {
    .show-grid & {
      --col: 2;
    }
  }
}

.btn-area:has(> :is(.list-icon, .grid-icon)) {
  height: 1.25em;

  @container screen (max-width: 480px) {
    & {
      display: none!important;
    }
  }
}
`;

document.head.appendChild(componentStyle);