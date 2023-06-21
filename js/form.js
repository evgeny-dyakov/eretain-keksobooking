const adForm = document.querySelector('.ad-form');
const avatarUpload = adForm.querySelector('.ad-form-header__input');
const adFormElements = adForm.querySelectorAll('.ad-form__element');

const mapFilters = document.querySelector('.map__filters');
const mapFeatures = mapFilters.querySelector('.map__features');
const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');

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
