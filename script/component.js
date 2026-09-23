const $components = document.querySelectorAll('.component');
const componentStyle = document.createElement('style');

function createMenu(element, menuId) {
  const info = menuInfo[menuId];
  const href = element.dataset.href;
  const attr = href ? `href="${href}"` : '';
  const tag = href ? 'a' : 'button';

  element.innerHTML = `
  <img src="img/dish/${menuId}.png" alt="${info.kr} 이미지" class="thumb">
  <div class="col">
    <div class="row">
      <p class="name">${info.kr}</p>
      <button class="like-icon"></button>
    </div>
    <div class="row">
      <p class="en-name c-charcoal fz-small">${info.en}</p>
    </div>
    <div class="row">
      <p class="price">${parseInt(info.price).toLocaleString()}원</p>
      <${tag} ${attr} class="primary-btn select-btn">선택하기</${tag}>
    </div>
  </div>
  `;
}

function createStore(element, storeId) {
  const info = storeInfo[storeId];
  const href = element.dataset.href;
  const attr = href ? `href="${href}"` : '';
  const minute = parseInt(info.minute);

  element.innerHTML = `
  <div class="row">
    <p class="name">
      ${info.name}
      <sub>${info.distance}</sub>
    </p>
    <button class="like-icon"></button>
  </div>
  <div>
    <p class="c-charcoal fz-small">${info.address}</p>
    <p class="c-charcoal fz-small">예상 소요시간: ${minute} ~ ${minute + 15}분</p>
  </div>
  <div class="row">
    <div class="symbol"></div>
    <a ${attr} class="primary-btn">주문하기</a>
  </div>
  `;
}

function createOrder(element, orderId) {
  const info = orderInfo[orderId];

  element.innerHTML = `
  <div class="row">
      <div class="symbol"></div>
      <div>
        <p class="date c-charcoal fz-small">5월 28일 (수)</p>
        <p class="name">종로1가점</p>
        <p class="address c-charcoal fz-small">서울 종로구 MBC로 01</p>
      </div>
    </div>
    <div class="details">
      <p>클래식 햄 치즈 샌드위치 <b>1개</b></p>
      <p>치킨 시저 샐러드 <b>1개</b></p>
    </div>
    <div class="horizontal-line"></div>
    <p class="price">총합 ${parseInt(info.price).toLocaleString()}원</p>
  </div>
  `;
}

$components.forEach((e) => {
  if (e.hasAttribute('data-menu-id'))
    createMenu(e, e.dataset.menuId);
  if (e.hasAttribute('data-store-id'))
    createStore(e, e.dataset.storeId);
  if (e.hasAttribute('data-order-id'))
    createOrder(e, e.dataset.orderId);
});

componentStyle.innerHTML = `
.component {
  --gap-base: 0.625em;
  --padding-base: 0.625em;
  --padding-large: 1.25em;
  --paddingX: var(--padding-large);
  --paddingY: var(--padding-base);
  position: relative;
  padding: var(--paddingY) var(--paddingX);
  border-radius: var(--paddingX);
  background: var(--white);
  color: var(--black);
  box-shadow: var(--shadow-bottom);

  &, & :is(.row, .col) {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    gap: var(--gap-base);

    &.row {
      flex-direction: row;
    }
  }
  
  &.disable {
    opacity: 0.75;
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
  
  .name {
    font-weight: var(--bold);
  }
    
  .price {
    margin: auto 0;
    word-break: keep-all;
  }
  
  .primary-btn {
    margin: auto 0 0 auto;
  }
  
  .sub-btn {
    margin: 0 0 auto auto;
  }

  .like-icon {
    width: 1em;
    margin-left: auto;
    margin: 0.125em 0.125em auto auto;
  }

  .symbol {
    height: var(--height, 3.125em);
    margin-top: 0.3125em;
  }

  &[data-menu-id] {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    container: has-thumb / inline-size;

    .thumb {
      flex-basis: var(--thumb-size, 7.5em);
      border-radius: var(--paddingY);
    }
    
    @container has-thumb (max-width: 20em) {
      
      .thumb {
        --thumb-size: 100%;
      }

      .like-icon {
        position: absolute;
        right: var(--paddingX);
        top: var(--paddingY);
        width: 1.25em;
      }

      .primary-btn {
        margin-top: 0.5em;
      }
    }
  }

  &[data-order-id] {
    --paddingX: var(--padding-large);

    .details {
      font-size: calc(((var(--regular) + var(--small)) / 2))
    }
    .price {
      margin-left: auto;
    }
  }
}

.component-group {
  display: grid;
  grid-template-columns: repeat(var(--col, 1), 1fr);
  width: 100%;
  gap: inherit;

  @media (min-width: 501px) {
    .show-grid & {
      --col: 2;
    }
  }
}
`;

document.head.appendChild(componentStyle);