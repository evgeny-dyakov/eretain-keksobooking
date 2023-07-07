const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const avatarUpload = adForm.querySelector('.ad-form-header__input');
const title = adForm.querySelector('#title');
const price = adForm.querySelector('#price');
const type = adForm.querySelector('#type');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const timein = adForm.querySelector('#timein');
const timeout = adForm.querySelector('#timeout');
const submitButton = adForm.querySelector('.ad-form__submit');
const mapFilters = document.querySelector('.map__filters');
const mapFeatures = mapFilters.querySelector('.map__features');
const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');

// ↓ ↓ ↓ form validation ↓ ↓ ↓

const pirsitneConfig = {
  classTo: 'ad-form__element',
  errorClass: 'field-error',
  successClass: 'field-success',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'field-error-text',
};

const pristine = new Pristine(adForm, pirsitneConfig, true);

const adFormOptions = {
  minTitleLength: 30,
  maxTitleLength: 100,
  maxPricePerNight: 100000,
  minPricePerNight: {
    'bungalow': 0,
    'flat': 1000,
    'hotel': 3000,
    'house': 5000,
    'palace': 10000,
  }
};

// ↓ ↓ ↓ title field validation ↓ ↓ ↓

function titleErrorMessage (value) {
  const startText = `от ${adFormOptions.minTitleLength} до ${adFormOptions.maxTitleLength}`;
  if (value.length < adFormOptions.minTitleLength) {
    return `${startText}, еще ${adFormOptions.minTitleLength - value.length}`;
  }
  if (value.length > adFormOptions.maxTitleLength) {
    return `${startText}, больше на ${value.length - adFormOptions.maxTitleLength}`;
  }
}

function validateTitle (value) {
  return value.length >= adFormOptions.minTitleLength && value.length <= adFormOptions.maxTitleLength;
}

pristine.addValidator(title, validateTitle, titleErrorMessage, true);

// ↓ ↓ ↓ roomNumber and capacity fields validation ↓ ↓ ↓

function onRoomNumberChange () {
  pristine.validate(capacity);
}

roomNumber.addEventListener('change', onRoomNumberChange);

function capacityErrorMessage () {
  if (+roomNumber.value === 100) {
    return '100 комнат не для гостей';
  }
  return `в ${+roomNumber.value} ${+roomNumber.value === 1 ? 'комнату' : 'комнаты'} не более ${+roomNumber.value} ${+roomNumber.value === 1 ? 'гостя' : 'гостей'}`;
}

function validateCapacity () {
  if (+roomNumber.value === 100) {
    return +capacity.value === 0;
  }
  return +roomNumber.value >= +capacity.value && +capacity.value !== 0;
}

pristine.addValidator(capacity, validateCapacity, capacityErrorMessage, true);

// ↓ ↓ ↓ type and price fields validation  ↓ ↓ ↓

let priceValidateStartInTypeHandlerFlag = false;

function onTypeChange () {
  price.placeholder = `${adFormOptions.minPricePerNight[type.value]}`;
  if (priceValidateStartInTypeHandlerFlag) {
    pristine.validate(price);
  }
}

type.addEventListener('change', onTypeChange);

function translateHousingType (enType) {
  const ruType = {
    'bungalow': 'бунгало',
    'flat': 'квариры',
    'hotel': 'отеля',
    'house': 'дома',
    'palace': 'дворца',
  };
  return ruType[enType];
}

function priceErrorMessage () {
  return (price.value > adFormOptions.maxPricePerNight) ? `не более ${adFormOptions.maxPricePerNight}` : `для ${translateHousingType(type.value)} не менее ${adFormOptions.minPricePerNight[type.value]}`;
}

function validatePrice () {
  if (!priceValidateStartInTypeHandlerFlag) {
    priceValidateStartInTypeHandlerFlag = true;
  }
  return +price.value >= adFormOptions.minPricePerNight[type.value] && +price.value <= adFormOptions.maxPricePerNight;
}

pristine.addValidator(price, validatePrice, priceErrorMessage, true);

// ↓ ↓ ↓ check in / check out synchronization  ↓ ↓ ↓

function timeInSynchronization (value) {
  timeout.querySelector('option[selected]').removeAttribute('selected');
  timeout.querySelector(`option[value='${value}']`).setAttribute('selected', '');
  return true;
}

pristine.addValidator(timein, timeInSynchronization, true);

function timeOutSynchronization (value) {
  timein.querySelector('option[selected]').removeAttribute('selected');
  timein.querySelector(`option[value='${value}']`).setAttribute('selected', '');
  return true;
}

pristine.addValidator(timeout, timeOutSynchronization, true);

adForm.addEventListener('submit', (evt) => {
  // evt.preventDefault();
  // if (pristine.validate()) {
  //   console.log('валидно');
  // } else {
  //   console.log('не валидно');
  // }

  if (pristine.validate()) {
    console.log('валидно');
    submitButton.setAttribute('disabled', '');
  } else {
    console.log('не валидно');
    evt.preventDefault();
  }
});

// ↓ ↓ ↓ enable active / inactive forms state ↓ ↓ ↓

const disableAdFormElements = () => {
  adFormElements.forEach((adFormElement) => {
    adFormElement.setAttribute('disabled', '');
  });
  avatarUpload.setAttribute('disabled', '');
};

const hideAdForm = () => {
  adForm.classList.add('ad-form--disabled');
};

const removeAdFormEventListeners = () => {
  roomNumber.removeEventListener('change', onRoomNumberChange);
  type.removeEventListener('change', onTypeChange);
};

const disabledMapFiltersElements = () => {
  mapFiltersElements.forEach((mapFiltersElement) => {
    mapFiltersElement.setAttribute('disabled', '');
  });
  mapFeatures.setAttribute('disabled', '');
};

const hideMapFilters = () => {
  mapFilters.classList.add('map__filters--disabled');
};

const enableInactiveState = () => {
  removeAdFormEventListeners();
  disableAdFormElements();
  hideAdForm();
  disabledMapFiltersElements();
  hideMapFilters();
};

const enableAdFormElements = () => {
  adFormElements.forEach((adFormElement) => {
    adFormElement.removeAttribute('disabled');
  });
  avatarUpload.removeAttribute('disabled');
};

const showAdForm = () => {
  adForm.classList.remove('ad-form--disabled');
};

const addAdFormEventListeners = () => {
  roomNumber.addEventListener('change', onRoomNumberChange);
  type.addEventListener('change', onTypeChange);
};

const enableMapFiltersElements = () => {
  mapFiltersElements.forEach((mapFiltersElement) => {
    mapFiltersElement.removeAttribute('disabled');
  });
  mapFeatures.removeAttribute('disabled');
};

const showMapFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
};

const enableActiveState = () => {
  enableAdFormElements();
  showAdForm();
  addAdFormEventListeners();
  enableMapFiltersElements();
  showMapFilters();
};

enableInactiveState();

enableActiveState();

// при смене активного / не активного состояния проверь не добавляются ли дважды обработчики событий на поля форм (вроде нет)
