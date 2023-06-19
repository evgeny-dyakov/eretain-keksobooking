const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomFloat = (min, max, fix) => +(Math.random() * (max - min) + min).toFixed(fix);

const shuffleArray = (array) => {
  const result = [];
  const indexes = [];

  for (let i = 0; i < array.length; i++) {
    let index = getRandomInt(0, array.length - 1);
    while (indexes.includes(index)) {
      index = getRandomInt(0, array.length - 1);
    }
    indexes[i] = index;
    result[i] = array[index];
  }

  return result;
};

const getAuthors = (quantity) => {
  const authors = [];

  for (let i = 0; i < quantity; i++) {
    const num = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
    authors[i] = {
      avatar: `img/avatars/user${num}.png`,
    };
  }

  return authors;
};

const getLocations = (quantity) => {
  const locations = [];

  for (let i = 0; i < quantity; i++) {
    locations[i] = {
      lat: getRandomFloat(35.65, 35.7, 5),
      lng: getRandomFloat(139.7, 139.8, 5),
    };
  }

  return locations;
};

const getTitles = () => {
  const titles = [
    'Уютная 1-комнатная квартира в центре',
    'Просторная 2-комнатная квартира в новом доме',
    'Стильная студия в элитном комплексе',
    'Атмосферная 2-комнатная квартира в историческом центре',
    'Светлая 1-комнатная квартира в спальном районе',
    'Роскошная 3-комнатная квартира в элегантном доме',
    'Уютная студия в новостройке с газовой плитой',
    'Теплая 2-комнатная квартира в зеленом районе',
    'Однокомнатная квартира с кухней-гостиной и спальней',
    'Качественная 3-комнатная квартира в престижном районе',
  ];

  return shuffleArray(titles);
};

const getPrices = (quantity) => {
  const prices = [];

  const minPrice = 2000;
  const maxPrice = 9000;

  const fix = 100;

  for (let i = 0; i < quantity; i++) {
    prices[i] = (getRandomInt(minPrice, maxPrice) / fix).toFixed(0) * fix;
  }

  return prices;
};

const getTypes = (quantity) => {
  const availableTypes = [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ];

  const types = [];

  for (let i = 0; i < quantity; i++) {
    types[i] = availableTypes[getRandomInt(0, availableTypes.length - 1)];
  }

  return types;
};

const getRooms = (quantity) => {
  const rooms = [];

  const minRooms = 2;
  const maxRooms = 4;

  for (let i = 0; i < quantity; i++) {
    rooms[i] = getRandomInt(minRooms, maxRooms);
  }

  return rooms;
};

const getGuests = (quantity) => {
  const guests = [];

  const minGuests = 2;
  const maxGuests = 5;

  for (let i = 0; i < quantity; i++) {
    guests[i] = getRandomInt(minGuests, maxGuests);
  }

  return guests;
};

const getCheckins = (quantity) => {
  const availableCheckins = [
    '12:00',
    '13:00',
    '14:00',
  ];

  const checkins = [];

  for (let i = 0; i < quantity; i++) {
    checkins[i] = availableCheckins[getRandomInt(0, availableCheckins.length - 1)];
  }

  return checkins;
};

const getCheckouts = (quantity) => {
  const availableCheckouts = [
    '12:00',
    '13:00',
    '14:00',
  ];

  const checkouts = [];

  for (let i = 0; i < quantity; i++) {
    checkouts[i] = availableCheckouts[getRandomInt(0, availableCheckouts.length - 1)];
  }

  return checkouts;
};

const getFeatures = (quantity) => {
  const availableFeatures = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ];

  const features = [];

  for (let i = 0; i < quantity; i++) {
    features[i] = shuffleArray(availableFeatures).slice(0, getRandomInt(1, availableFeatures.length));
  }

  return features;
};

const getDescriptions = () => {
  const descriptions = [
    'Сдается уютная однокомнатная квартира в центре города, рядом с метро и парком. Есть все необходимое для комфортного проживания: мебель, техника, интернет.',
    'Просторная двухкомнатная квартира в новом доме с охраной и парковкой. Современный ремонт, большая лоджия, кондиционер, посудомоечная машина. Развитая инфраструктура, тихий район.',
    'Сдается студия в элитном жилом комплексе с бассейном, спортзалом и сауной. Стильный дизайн, панорамные окна, высокоскоростной интернет. Идеально подходит для одинокого человека или пары.',
    'Уютная двухкомнатная квартира в историческом центре города, в пешей доступности от всех достопримечательностей. Атмосфера старины, высокие потолки, деревянные полы, камин. Есть все необходимое для жизни: мебель, техника, посуда.',
    'Сдается однокомнатная квартира в спальном районе города, рядом с остановкой общественного транспорта и супермаркетом. Светлая и чистая, с балконом и видом на зеленый двор. Есть мебель, холодильник, стиральная машина.',
    'Просторная трехкомнатная квартира в элегантном доме с лифтом и консьержем. Роскошный ремонт, мраморные полы, кожаная мебель, домашний кинотеатр. Два санузла, гардеробная, кладовая.',
    'Сдается уютная студия в новостройке с автономным отоплением и газовой плитой. Свежий ремонт, ламинат, обои, светильники. Есть вся необходимая мебель и техника.',
    'Сдается двухкомнатная квартира в зеленом районе города, около леса и озера. Теплая и светлая, с хорошей звукоизоляцией и вентиляцией. Есть мебель, техника, интернет, кабельное ТВ.',
    'Сдается однокомнатная квартира в кирпичном доме с хорошим ремонтом и мебелью. Кухня-гостиная с барной стойкой и встроенной техникой. Спальня с двуспальной кроватью и шкафом-купе.',
    'Сдается трехкомнатная квартира в престижном районе города, рядом с метро и торговым центром. Качественный ремонт, паркет, обои, люстры. Есть вся необходимая мебель и техника.',
  ];

  return shuffleArray(descriptions);
};

const getPhotos = (quantity) => {
  const availablePhotos = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];

  const photos = [];

  for (let i = 0; i < quantity; i++) {
    const set = [];

    const minSetLength = 1;
    const maxSetLength = 5;

    const setLength = getRandomInt(minSetLength, maxSetLength);

    for (let j = 0; j < setLength; j++) {
      set[j] = availablePhotos[getRandomInt(0, availablePhotos.length - 1)];
    }

    photos[i] = set;
  }

  return photos;
};

const getOffers = (quantity) => {
  const offers = [];

  const titles = getTitles();
  const prices = getPrices(quantity);
  const types = getTypes(quantity);
  const rooms = getRooms(quantity);
  const guests = getGuests(quantity);
  const checkins = getCheckins(quantity);
  const checkouts = getCheckouts(quantity);
  const features = getFeatures(quantity);
  const descriptions = getDescriptions();
  const photos = getPhotos(quantity);

  for (let i = 0; i < quantity; i++) {
    offers[i] = {
      title: titles[i],
      price: prices[i],
      type: types[i],
      rooms: rooms[i],
      guests: guests[i],
      checkin: checkins[i],
      checkout: checkouts[i],
      features: features[i],
      description: descriptions[i],
      photos: photos[i],
    };
  }

  return offers;
};

const genAds = () => {
  const quantity = 1;

  const ads = [];

  const authors = getAuthors(quantity);
  const offers = getOffers(quantity);
  const locations = getLocations(quantity);

  for (let i = 0; i < quantity; i++) {
    const ad = {
      author: authors[i],
      offer: offers[i],
      location: locations[i],
    };

    ad.offer.address = `${ad.location.lat}, ${ad.location.lng}`;

    ads[i] = ad;
  }

  return ads;
};

export {genAds};
