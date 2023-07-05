const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const avatarUpload = adForm.querySelector('.ad-form-header__input');
const title = adForm.querySelector('#title');
const price = adForm.querySelector('#price');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const submitButton = adForm.querySelector('.ad-form__submit');

const mapFilters = document.querySelector('.map__filters');
const mapFeatures = mapFilters.querySelector('.map__features');
const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');

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
};

function titleErrorText (value) {
  const startText = `от ${adFormOptions.minTitleLength} до ${adFormOptions.maxTitleLength}`;
  if (value.length < adFormOptions.minTitleLength) {
    return `${startText}, еще ${adFormOptions.minTitleLength - value.length}`;
  }
  if (value.length > adFormOptions.maxTitleLength) {
    return `${startText}, больше на ${value.length - adFormOptions.maxTitleLength}`;
  }
}

function roomNumberErrorText () {
  if (+roomNumber.value === 100) {
    return '100 комнат не для гостей';
  }
  return `в ${+roomNumber.value} ${+roomNumber.value === 1 ? 'комнату' : 'комнаты'} не более ${+roomNumber.value} ${+roomNumber.value === 1 ? 'гостя' : 'гостей'}`;
}

function validateTitle (value) {
  return value.length >= adFormOptions.minTitleLength && value.length <= adFormOptions.maxTitleLength;
}

function validatePrice (value) {
  return value <= adFormOptions.maxPricePerNight;
}

function validateRoomNumber () {
  if (+roomNumber.value === 100) {
    return +capacity.value === 0;
  }
  return +roomNumber.value >= +capacity.value && +capacity.value !== 0;
}

capacity.addEventListener('change', () => {
  pristine.validate(roomNumber);
});

pristine.addValidator(title, validateTitle, titleErrorText, true);

pristine.addValidator(price, validatePrice, 'не более 100к', true);

pristine.addValidator(roomNumber, validateRoomNumber, roomNumberErrorText);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    console.log('валидно');
  } else {
    console.log('не валидно');
  }

  // if (pristine.validate()) {
  //   submitButton.setAttribute('disabled', '');
  // } else {
  //   evt.preventDefault();
  // }
});

// при настройке полей проверяй required и тип поля

// ↓ ↓ ↓ код для активного / неактивного состояния форм ↓ ↓ ↓

const disableAdFormElements = () => {
  adFormElements.forEach((adFormElement) => {
    adFormElement.setAttribute('disabled', '');
  });
  avatarUpload.setAttribute('disabled', '');
};

const hideAdForm = () => {
  adForm.classList.add('ad-form--disabled');
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

  enableMapFiltersElements();
  showMapFilters();
};

enableInactiveState();

enableActiveState();

// ↑ ↑ ↑ код для активного / неактивного состояния форм ↑ ↑ ↑
