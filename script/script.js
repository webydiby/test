const $body = document.body;
const $header = document.getElementById('header');
const $content = document.getElementById('contents');
const $footer = document.getElementById('footer');
const $receipt = document.getElementById('receipt');
const $listIcons = document.querySelectorAll('button.list-icon');
const $gridIcons = document.querySelectorAll('button.grid-icon');
const $likeIcons = document.querySelectorAll('button.like-icon');
const $selectBtns = document.querySelectorAll('button.select-btn');
const $addCartBtn = document.querySelector('button.add-cart-btn');


(function loadHeader() {
  const isIndex = window.location.pathname.endsWith('/index.html');
  // const sss = isIndex
  // ? `<img src="img/signature.svg" alt="시그니쳐 이미지" id="signature">`
  // : '';

  let signature;
  let title = $header.dataset.title;
  let prevPage = $header.dataset.prevPage;

  if (isIndex) signature = `<img src="img/signature.svg" alt="시그니쳐 이미지" id="signature">`;
  if (prevPage) prevPage = `<a href="${prevPage}" class="prev-icon"></a>`
  if (title) title = `<p class="title">${title}</p>`;

  $header.innerHTML = `
  ${signature ?? ''}
  ${prevPage ?? ''}
  ${title ?? ''}
  <div class ="btn-area">
    <button class="notice-icon"></button>
    <button class="cart-icon"></button>
  </div>
  `;
})();

(function loadFooter() {
  const currentCategory = $footer.dataset.currentCategory;
  $footer.innerHTML = `
    <div class="footer-btn home">
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.6095 9.6096L11.8861 1.88617L9.99996 0L0.39036 9.6096C-0.131748 10.1317 -0.131748 10.9737 0.39036 11.4958C0.912467 12.0179 1.75442 12.0179 2.27653 11.4958L3.33486 10.4374V20H16.6698V10.4374L17.7281 11.4958C18.2502 12.0179 19.0921 12.0179 19.6143 11.4958C20.1364 10.9737 20.1364 10.1317 19.6143 9.6096H19.6095ZM11.999 18.6689H8.0009V15.334C8.0009 14.2286 8.89459 13.3349 9.99996 13.3349C11.1053 13.3349 11.999 14.2286 11.999 15.334V18.6689Z" fill="#CCCCCC"/></svg>
      <a href="index.html">홈</a>
    </div>
    <div class="footer-btn wish">
      <svg viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.822 0.770975L5.35588 1.23709L4.88977 0.770975C3.85928 -0.256992 2.18884 -0.256992 1.15835 0.770975C-0.386117 2.31293 -0.386117 4.8123 1.15835 6.35677L4.42366 9.61451C4.93764 10.1285 5.77412 10.1285 6.28811 9.61451L9.55341 6.35677C11.0979 4.81482 11.0979 2.31544 9.55341 0.770975C8.52293 -0.256992 6.85248 -0.256992 5.822 0.770975Z" fill="#CCCCCC"/></svg>
      <a href="">찜</a>
    </div>
    <div class="footer-btn order">
      <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M26.0186 22.0029C27.1197 22.0029 28.0165 22.8918 28.0166 24V25.9981C28.0165 28.2073 26.223 30 24.0137 30H6.00684C3.7976 29.9999 2.00503 28.2073 2.00488 25.9981V24C2.00495 22.899 2.89394 22.0031 4.00195 22.0029H26.0186Z" fill="white"/><path d="M28.0166 13.9981C29.1197 13.9981 30.0134 14.8921 30.0137 15.9951V18C30.0137 19.1032 29.1198 19.998 28.0166 19.9981H1.99805C0.894777 19.9981 0 19.1033 0 18V15.9951C0.000230221 14.8921 0.894919 13.9981 1.99805 13.9981H28.0166Z" fill="white"/><path d="M22.0098 1.38624e-05C25.3201 0.000227244 28.0097 2.6826 28.0098 6.00001V10.0029C28.0096 11.104 27.1198 12 26.0117 12H4.00195L3.99512 11.9932C2.89401 11.9931 1.99805 11.1033 1.99805 9.99513V5.99318C1.99805 2.68259 4.68724 -0.00704496 8.00488 1.38624e-05H22.0098Z" fill="#CCCCCC"/></svg>
      <a href="order.html">주문하기</a>
    </div>
    <div class="footer-btn history">
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.0019 0H3.99812C1.7921 0 0 1.7921 0 3.99812V20H17.333V4.33208C17.333 4.14864 17.4835 3.99812 17.667 3.99812C17.8504 3.99812 18.0009 4.14864 18.0009 4.33208V7.45061C19.1957 6.75917 20 5.47977 20 3.99812C20 1.78739 18.2079 0 16.0019 0ZM13.9981 17.333H1.99906C1.63217 17.333 1.33114 17.0367 1.33114 16.6651C1.33114 16.2935 1.62747 15.9972 1.99906 15.9972H13.9981C14.365 15.9972 14.666 16.2935 14.666 16.6651C14.666 17.0367 14.3697 17.333 13.9981 17.333ZM13.9981 13.3349H1.99906C1.63217 13.3349 1.33114 13.0386 1.33114 12.667C1.33114 12.2954 1.62747 11.9991 1.99906 11.9991H13.9981C14.365 11.9991 14.666 12.2954 14.666 12.667C14.666 13.0386 14.3697 13.3349 13.9981 13.3349ZM13.9981 9.33208H1.99906C1.63217 9.33208 1.33114 9.03575 1.33114 8.66416C1.33114 8.29257 1.62747 7.99624 1.99906 7.99624H13.9981C14.365 7.99624 14.666 8.29257 14.666 8.66416C14.666 9.03575 14.3697 9.33208 13.9981 9.33208Z" fill="#CCCCCC"/></svg>
      <a href="">주문 내역</a>
    </div>
    <div class="footer-btn account">
      <svg viewBox="0 0 40 41" xmlns="http://www.w3.org/2000/svg"><path d="M25.8984 17.617C34.0638 20.1381 39.9998 27.739 40 36.7322V40.7313H0V36.7322C0.000208988 27.739 5.93615 20.1287 14.1016 17.617C15.7949 18.7365 17.8175 19.3953 20 19.3953C22.1825 19.3953 24.2051 18.7365 25.8984 17.617Z" fill="white"/><path d="M18.1631 0.215645C22.4612 -0.798795 26.7678 1.86289 27.7822 6.16096C28.7967 10.4591 26.135 14.7656 21.8369 15.7801C17.5389 16.7945 13.2323 14.1328 12.2178 9.83479C11.2033 5.53676 13.8651 1.23019 18.1631 0.215645Z" fill="#CCCCCC"/></svg>
      <a href="">마이페이지</a>
    </div>
  `;
  if (currentCategory) $footer.querySelector(`.${currentCategory}`).style.color = 'var(--tomato)';
})();

$listIcons.forEach((e) => {
  e.addEventListener('click', () => {
    $content.classList.remove('show-grid');
  });
});

$gridIcons.forEach((e) => {
  e.addEventListener('click', () => {
    $content.classList.add('show-grid');
  });
});

$likeIcons.forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.toggle('checked');
  });
});

function disableComponent(element) {
  const $btn = element.querySelector('.select-btn');
  const disabled = element.classList.contains('disable');
  if (!$btn) return;
  if (!disabled) {
    element.classList.add('disable');
    $btn.innerText = '선택됨';
  } else {
    element.classList.remove('disable');
    $btn.innerText = '선택하기';
  }
}

$selectBtns.forEach((e) => {
  const $component = e.closest('.component');
  e.addEventListener('click', () => disableComponent($component));
});

$components.forEach((e) => {
  if (e.classList.contains('disable'))
    disableComponent(e);
});

$content.addEventListener('click', (e) => {
  const cls = $content.classList;
  const isContained = cls.contains('modal-on');
  if (!isContained && e.target === $addCartBtn)
    cls.add('modal-on');
  if (isContained && !$receipt.contains(e.target))
    cls.remove('modal-on');
});
