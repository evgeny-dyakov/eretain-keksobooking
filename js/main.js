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
  const result = [];

  for (let i = 0; i < quantity; i++) {
    const num = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
    result[i] = {
      avatar: `img/avatars/user${num}.png`,
    };
  }

  return result;
};

const getLocations = (quantity) => {
  const result = [];

  for (let i = 0; i < quantity; i++) {
    result[i] = {
      lat: getRandomFloat(35.65, 35.7, 5),
      lng: getRandomFloat(139.7, 139.8, 5),
    };
  }

  return result;
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
  const result = [];

  const minPrice = 2000;
  const maxPrice = 9000;

  const fix = 100;

  for (let i = 0; i < quantity; i++) {
    result[i] = (getRandomInt(minPrice, maxPrice) / fix).toFixed(0) * fix;
  }

  return result;
};

const getTypes = (quantity) => {
  const types = [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ];

  const result = [];

  for (let i = 0; i < quantity; i++) {
    result[i] = types[getRandomInt(0, types.length - 1)];
  }

  return result;
};

const getRooms = (quantity) => {
  const result = [];

  const minRooms = 1;
  const maxRooms = 3;

  for (let i = 0; i < quantity; i++) {
    result[i] = getRandomInt(minRooms, maxRooms);
  }

  return result;
};

const getGuests = (quantity) => {
  const result = [];

  const minGuests = 1;
  const maxGuests = 3;

  for (let i = 0; i < quantity; i++) {
    result[i] = getRandomInt(minGuests, maxGuests);
  }

  return result;
};

const getCheckins = (quantity) => {
  const checkins = [
    '12:00',
    '13:00',
    '14:00',
  ];

  const result = [];

  for (let i = 0; i < quantity; i++) {
    result[i] = checkins[getRandomInt(0, checkins.length - 1)];
  }

  return result;
};

const getCheckouts = (quantity) => {
  const checkouts = [
    '12:00',
    '13:00',
    '14:00',
  ];

  const result = [];

  for (let i = 0; i < quantity; i++) {
    result[i] = checkouts[getRandomInt(0, checkouts.length - 1)];
  }

  return result;
};

const getFeatures = (quantity) => {
  const features = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ];

  const result = [];

  for (let i = 0; i < quantity; i++) {
    result[i] = shuffleArray(features).slice(0, getRandomInt(1, features.length));
  }

  return result;
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

// photos, массив строк — массив случайной длины из значений

const getPhotos = (quantity) => {
  const photos = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];

  const result = [];

  for (let i = 0; i < quantity; i++) {
    const set = [];

    const minSetLength = 1;
    const maxSetLength = 5;

    const setLength = getRandomInt(minSetLength, maxSetLength);

    for (let j = 0; j < setLength; j++) {
      set[j] = photos[getRandomInt(0, photos.length - 1)];
    }

    result[i] = set;
  }

  return result;
};

const getOffers = (quantity) => {
  const result = [];

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
    result[i] = {
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

  return result;
};

const genData = () => {
  const quantity = 10;

  const result = [];

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

    result[i] = ad;
  }

  return result;
};

console.log(genData());
