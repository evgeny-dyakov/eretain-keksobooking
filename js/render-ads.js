import {genAds} from './gen-ads.js';

const mapCanvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const ads = genAds();

console.log(ads); // !

const hideElement = (element) => element.setAttribute('style', 'display: none');

const renderTitle = (titleElement, title) => {
  if (!title) {
    hideElement(titleElement);
    return;
  }
  titleElement.textContent = title;
};

const renderAddress = (addressElement, address) => {
  if (!address) {
    hideElement(addressElement);
    return;
  }
  addressElement.textContent = address;
};

const renderPrice = (priceElement, price) => {
  if (!price) {
    priceElement.setAttribute('style', 'display: none');
    return;
  }
  priceElement.textContent = `${price} ₽/ночь`;
};

const renderType = (typeElement, type) => {
  let translatedType;

  switch (type) {
    case 'flat':
      translatedType = 'Квартира';
      break;
    case 'bungalow':
      translatedType = 'Бунгало';
      break;
    case 'house':
      translatedType = 'Дом';
      break;
    case 'palace':
      translatedType = 'Дворец';
      break;
    case 'hotel':
      translatedType = 'Отель';
      break;
    default:
      hideElement(typeElement);
      return;
  }

  typeElement.textContent = `${translatedType}`;
};

const renderCapacity = (capacityElement, rooms, guests) => {
  let capacity = `${rooms} комнаты для ${guests} гостей`;

  if (!rooms && !guests) {
    hideElement(capacityElement);
    return;
  }

  if (!rooms) {
    capacity = `Для ${guests} гостей`;
  }

  if (!guests) {
    capacity = `${rooms} комнаты`;
  }

  capacityElement.textContent = capacity;
};

const renderTime = (timeElement, checkin, checkout) => {
  let time = `Заезд после ${checkin}, выезд до ${checkout}`;

  if (!checkin && !checkout) {
    hideElement(timeElement);
    return;
  }

  if (!checkin) {
    time = `Выезд до ${checkout}`;
  }

  if (!checkout) {
    time = `Заезд после ${checkin}`;
  }

  timeElement.textContent = time;
};

const renderFeatures = (featuresList, activeFeatures) => {
  if (!activeFeatures) {
    hideElement(featuresList);
    return;
  }

  featuresList.innerHTML = '';

  activeFeatures.forEach((activeFeature) => {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature');
    feature.classList.add(`popup__feature--${activeFeature}`);

    featuresList.append(feature);
  });
};

const renderDescription = (descriptionElement, description) => {
  if (!description) {
    hideElement(descriptionElement);
    return;
  }

  descriptionElement.textContent = description;
};

const renderPhotos = (photosElement, photos) => {
  if (!photos) {
    hideElement(photosElement);
    return;
  }

  const photoTemplate = photosElement.querySelector('.popup__photo');
  photosElement.innerHTML = '';

  photos.forEach((photo) => {
    const newPhoto = photoTemplate.cloneNode(true);
    newPhoto.src = photo;
    photosElement.append(newPhoto);
  });
};

const renderAvatar = (avatarElement, avatar) => {
  if (!avatar) {
    hideElement(avatarElement);
    return;
  }
  avatarElement.src = avatar;
};

ads.forEach(({author, offer}) => {
  const card = cardTemplate.cloneNode(true);

  const title = card.querySelector('.popup__title');
  const address = card.querySelector('.popup__text--address');
  const price = card.querySelector('.popup__text--price');
  const type = card.querySelector('.popup__type');
  const capacity = card.querySelector('.popup__text--capacity');
  const time = card.querySelector('.popup__text--time');
  const features = card.querySelector('.popup__features');
  const description = card.querySelector('.popup__description');
  const photos = card.querySelector('.popup__photos');
  const avatar = card.querySelector('.popup__avatar');

  renderTitle(title, offer.title);
  renderAddress(address, offer.address);
  renderPrice(price, offer.price);
  renderType(type, offer.type);
  renderCapacity(capacity, offer.rooms, offer.guests);
  renderTime(time, offer.checkin, offer.checkout);
  renderFeatures(features, offer.features);
  renderDescription(description, offer.description);
  renderPhotos(photos, offer.photos);
  renderAvatar(avatar, author.avatar);

  mapCanvas.append(card);
});
