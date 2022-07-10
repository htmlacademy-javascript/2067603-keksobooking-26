import {getRandomInt, getRandomFloat, getRandomArray, getRandomArrayElement} from './util.js';

const ADS_COUNT = 10;

const TITLES = [
  'Castle house',
  'Spacious-house-residence',
  'Nice house made of wood',
  'Elite flat',
  'Wooden home by the pond',
  'Elite townhouse',
  'Brick house',
  'Modern apartment'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const HOUSING_TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const CHECKIN_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'It has two bedrooms',
  'It is on the 5th floor of a new building',
  'There is a garage on the basement',
  'a cosy 60-square-metre flat',
  'This house is perfect for a big family with childrens',
  'beautiful high arched windows',
  'The house itself is surrounded by a gorgeous garden',
  'The house is equipped with a modern kitchen',
  'From the outside this house looks luxurious',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

const createAd = (i) => {
  const lat = getRandomFloat(LAT_MIN, LAT_MAX);
  const lng = getRandomFloat(LNG_MIN, LNG_MAX);
  return {
    author: {
      avatar: `img/avatars/user${String(i).padStart(2, '0')}.png`
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomInt(100, 50000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 10),
      checkin: getRandomArrayElement(CHECKIN_TIMES),
      checkout: getRandomArrayElement(CHECKOUT_TIMES),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },
    location: {
      lat,
      lng,
    }
  };
};

const similarAdsArray = () => {
  const similarAds = [];
  for (let i = 1; i <= ADS_COUNT; i++) {
    similarAds.push(createAd(i));
  }
  return similarAds;
};

similarAdsArray(ADS_COUNT);
export {similarAdsArray, HOUSING_TYPES};
