const menuInfo = {
  
  'dish-01': {
    kr: '닭가슴살 베이컨 샌드위치',
    en: 'Chicken breast & Bacon Sandwich',
    price: '9900',
    description: '부드러운 식빵 사이에 햄과 치즈를 넣은 전통적인 샌드위치로, 간편하게 즐길 수 있는 샌드입니다.'
  },
  
  'dish-02': {
    kr: '햄 & 에그샐러드 샌드위치',
    en: 'Ham & Egg Salad Sandwich',
    price: '9800',
    description: '담백한 햄과 부드러운 에그샐러드를 촉촉한 식빵 사이에 담은 샌드위치로, 고소하고 부드러운 맛이 조화로운 샌드입니다.'
  },
  
  'dish-03': {
    kr: '햄치즈 치아바타 샌드',
    en: 'Ham and Cheese Ciabatta Sandwich',
    price: '9700',
    description: '쫄깃한 치아바타 사이에 담백한 햄과 고소한 치즈를 넣은 샌드로, 재료 본연의 풍미를 담백하게 살린 샌드입니다.'
  },
  
  'dish-04': {
    kr: '바질 & 카프레제 크루아상 샌드',
    en: 'Basil & Caprese Croissant Sandwich',
    price: '9600',
    description: '바삭한 크루아상에 바질과 카프레제를 담아 산뜻하고 고소한 풍미를 살린 샌드입니다.'
  },
  
  'dish-05': {
    kr: '시그니처 호밀 샌드위치',
    en: 'Signature Rye Sandwich',
    price: '9500',
    description: '고소한 호밀빵에 신선한 채소와 다양한 재료를 담아 풍성한 맛을 살린 시그니처 샌드입니다.'
  },
  
  'dish-06': {
    kr: '닭가슴살 & 아보카도 치아바타 샌드',
    en: 'Chicken Breast & Avocado Ciabatta Sandwich',
    price: '9400',
    description: '담백한 닭가슴살과 부드러운 아보카도를 쫄깃한 치아바타에 담아 깔끔한 풍미를 살린 샌드입니다.'
  },
  
  'dish-07': {
    kr: '크랩 와사비 샌드위치',
    en: 'Crab Wasabi Sandwich',
    price: '9300',
    description: '감칠맛 넘치는 게살과 알싸한 와사비 소스를 곁들여 깔끔하고 산뜻한 맛을 살린 샌드입니다.'
  },
  
  'dish-08': {
    kr: '클래식 햄치즈 샌드위치',
    en: 'Classic Ham and Cheese Sandwich',
    price: '9200',
    description: '담백한 햄과 고소한 치즈를 부드러운 식빵에 담아 클래식한 맛을 완성한 샌드입니다.'
  },
  
  'dish-09': {
    kr: '매콤 핫치킨 샌드위치',
    en: 'Spicy Hot Chicken Sandwich',
    price: '9100',
    description: '매콤하게 양념한 치킨과 신선한 채소를 담아 알싸한 풍미를 더한 샌드입니다.'
  },
  
  'dish-10': {
    kr: '감자 사라다 샌드위치',
    en: 'Potato Salad Sandwich',
    price: '9000',
    description: '포슬포슬한 감자와 고소한 마요네즈를 버무려 부드럽고 담백한 맛을 살린 샌드입니다.'
  },
  
  'side-01': {
    kr: '치킨 시저 샐러드',
    en: 'Chicken Caesar Salad',
    price: '3000',
    description: ''
  },
  
  'side-02': {
    kr: '유기농 오렌지 주스',
    en: 'Orange Juice',
    price: '2000',
    description: ''
  },
  
  'side-03': {
    kr: '고소한 행복 농장 우유',
    en: 'Glass of Milk',
    price: '1500',
    description: ''
  }
}

const storeInfo = {

  'store-01': {
    name: '종로1가점',
    distance: '301m',
    address: '서울 종로구 MBC로 01',
    minute: '25'
  },

  'store-02': {
    name: '종로2가점',
    distance: '302m',
    address: '서울 종로구 MBC로 02',
    minute: '25'
  },

  'store-03': {
    name: '종로3가점',
    distance: '303m',
    address: '서울 종로구 MBC로 03',
    minute: '25'
  }
}

const historyInfo = {
  
  'history-01': {
    store: 'store-01',
    date: '9월 27일 (일)',
    items: [
      'dish-02',
      'side-01',
      'side-03'
    ]
  },

  'history-02': {
    store: 'store-02',
    date: '9월 26일 (토)',
    items: [
      'dish-01',
      'side-02'
    ]
  },
  
  'history-03': {
    store: 'store-03',
    date: '9월 25일 (금)',
    items: [
      'dish-01'
    ]
  }
}

let orderInfo = {
  store: 'store-01',
  //페이지마다 store변경
  items: []
}



let cartInfo = {
  store: 'store-01',
  items: [],
  delivery: false
}

const savedCartInfo = localStorage.getItem('cartInfo');
if (savedCartInfo) cartInfo = JSON.parse(savedCartInfo);

function calculateTotalPrice() {
  let totalPrice = cartInfo.items
    .flat()
    .reduce((sum, id) => {
      return sum + parseInt(menuInfo[id].price);
    }, 0);
  
  return totalPrice;
}