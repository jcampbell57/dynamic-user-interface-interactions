/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pageLoader.js":
/*!***************************!*\
  !*** ./src/pageLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_GitHub_light_32px_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/GitHub-light-32px.png */ "./src/assets/GitHub-light-32px.png");
/* harmony import */ var _assets_IMG_1201_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/IMG_1201.jpg */ "./src/assets/IMG_1201.jpg");
/* harmony import */ var _assets_IMG_1212_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/IMG_1212.jpg */ "./src/assets/IMG_1212.jpg");
/* harmony import */ var _assets_IMG_8716_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/IMG_8716.jpg */ "./src/assets/IMG_8716.jpg");
/* harmony import */ var _assets_IMG_8855_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/IMG_8855.jpg */ "./src/assets/IMG_8855.jpg");
/* eslint-disable no-plusplus */





const body = document.querySelector('body'); // helper functions

const processMenuSelection = e => {
  const mainMenu = document.querySelector('.mainMenu');
  const contentContainer = document.querySelector('.contentContainer'); // deselect any menu items

  const menuCount = mainMenu.childElementCount;

  for (let i = 0; i < menuCount; i++) {
    mainMenu.children[i].classList.remove('selected');
  } // select new menu item


  e.target.classList.add('selected'); // toggle content

  const contentCount = contentContainer.childElementCount;

  for (let i = 0; i < contentCount; i++) {
    // hide current content
    if (contentContainer.children[i].classList.contains('hidden') === false) {
      contentContainer.children[i].classList.add('hidden');
    } // display selected content


    console.log(contentContainer.children[i].id);
    console.log(e.target.id);

    if (contentContainer.children[i].id === e.target.id) {
      contentContainer.children[i].classList.remove('hidden');
    }
  }
};

const createMenuItem = (itemName, itemContainer, itemId, itemClass) => {
  const newMenuItem = document.createElement('div');
  newMenuItem.id = "".concat(itemId); // add class if one is given

  if (itemClass !== undefined) {
    newMenuItem.setAttribute('class', "".concat(itemClass));
  }

  newMenuItem.innerText = "".concat(itemName);
  newMenuItem.classList.add('menuItem');
  newMenuItem.addEventListener('click', e => processMenuSelection(e));
  itemContainer.appendChild(newMenuItem);
};

const addImageToScroller = (image, i, scroller, caption) => {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('imageContainer', 'fade'); // display image number

  const imageNumber = document.createElement('div');
  imageNumber.classList.add('imageNumber');
  imageNumber.innerText = "".concat(i, "/4");
  imageContainer.appendChild(imageNumber); // display image

  const newImage = document.createElement('img');
  newImage.classList.add('scrollerImage');
  newImage.src = image;
  imageContainer.appendChild(newImage); // display caption

  if (caption !== undefined) {
    const imageCaption = document.createElement('div');
    imageCaption.classList.add('imageCaption');
    imageCaption.innerText = "".concat(caption);
    imageContainer.appendChild(imageCaption);
  }

  scroller.appendChild(imageContainer);
};

let slideIndex = 0;

const selectImage = n => {
  const scrollerImages = document.getElementsByClassName('imageContainer');
  const scrollerDots = document.getElementsByClassName('scrollerDot'); // loop through images

  if (n > scrollerImages.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = scrollerImages.length;
  } // reset image selection


  for (let i = 0; i < scrollerImages.length; i++) {
    scrollerImages[i].style.display = 'none';
  }

  for (let i = 0; i < scrollerDots.length; i++) {
    scrollerDots[i].className = scrollerDots[i].className.replace(' selectedImage', '');
  } // select new image


  scrollerImages[slideIndex - 1].style.display = 'block';
  scrollerDots[slideIndex - 1].className += ' selectedImage';
};

const loopImageScroller = () => {
  const scrollerImages = document.getElementsByClassName('imageContainer');
  const scrollerDots = document.getElementsByClassName('scrollerDot'); // reset image selection

  for (let i = 0; i < scrollerImages.length; i++) {
    scrollerImages[i].style.display = 'none';
  }

  for (let i = 0; i < scrollerDots.length; i++) {
    scrollerDots[i].className = scrollerDots[i].className.replace(' selectedImage', '');
  } // select new image


  slideIndex++;

  if (slideIndex > scrollerImages.length) {
    slideIndex = 1;
  }

  scrollerImages[slideIndex - 1].style.display = 'block';
  scrollerDots[slideIndex - 1].className += ' selectedImage';
  setTimeout(loopImageScroller, 5000); // Change image every 5 seconds
}; // page initialization functions


const createHeader = () => {
  const header = document.createElement('header');
  const headerTitle = document.createElement('h1');
  headerTitle.innerText = 'Dynamic UI Interactions';
  header.appendChild(headerTitle);
  body.appendChild(header);
};

const createMainMenu = () => {
  const mainMenu = document.createElement('div');
  mainMenu.classList.add('mainMenu');
  createMenuItem('Dropdown Menu', mainMenu, 'dropdownMenu', 'selected');
  createMenuItem('Mobile Menu', mainMenu, 'mobileMenu');
  createMenuItem('Image Scroller', mainMenu, 'imageScroller');
  createMenuItem('Form Validation', mainMenu, 'validationForm');
  createMenuItem('API Practice', mainMenu, 'APIPractice');
  body.appendChild(mainMenu);
};

const createDropdownMenu = container => {
  const dropdownMenuContainter = document.createElement('div');
  dropdownMenuContainter.classList.add('content');
  dropdownMenuContainter.id = 'dropdownMenu'; // create dropdown container

  const dropdownContainer = document.createElement('div');
  dropdownContainer.classList.add('dropdownContainer', 'hidden'); // create dropdown options

  for (let i = 1; i < 10; i++) {
    const dropdownOption = document.createElement('span');
    dropdownOption.classList.add('dropdownOption');
    dropdownOption.innerText = "option ".concat(i);
    dropdownContainer.appendChild(dropdownOption);
  } // create dropdown button


  const dropdownMenu = document.createElement('div');
  dropdownMenu.classList.add('dropdownMenu');
  dropdownMenu.innerText = 'dropdown';
  dropdownMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('selected');
    dropdownContainer.classList.toggle('hidden');
  }); // Append

  dropdownMenu.appendChild(dropdownContainer);
  dropdownMenuContainter.appendChild(dropdownMenu);
  container.appendChild(dropdownMenuContainter); // close dropdown if the user clicks outside of it

  window.onclick = e => {
    if (!e.target.matches('.dropdownMenu')) {
      if (dropdownContainer.classList.contains('hidden') === false) {
        dropdownContainer.classList.add('hidden');
      }

      if (dropdownMenu.classList.contains('selected')) {
        dropdownMenu.classList.toggle('selected');
      }
    }
  };
};

const createMobileMenu = container => {
  // create content container
  const mobileMenuContent = document.createElement('div');
  mobileMenuContent.classList.add('mobileMenuContent', 'content', 'hidden');
  mobileMenuContent.id = 'mobileMenu'; // create menu title

  const mobileMenuTitle = document.createElement('h3');
  mobileMenuTitle.innerText = 'Horizontal scrolling nav'; // create mobile menu container

  const mobileMenuTable = document.createElement('table');
  const mobileMenuContainter = document.createElement('tr');
  mobileMenuContainter.classList.add('mobileMenuContainer'); // makes scrollwheel functional with horizontal scrolling

  mobileMenuContainter.addEventListener('wheel', e => {
    e.preventDefault();
    mobileMenuContainter.scrollLeft += e.deltaY;
  }); // create mobile menu options

  for (let i = 1; i <= 20; i++) {
    const mobileMenuOption = document.createElement('td');
    mobileMenuOption.classList.add('mobileMenuOption');
    mobileMenuOption.innerText = "mobile option ".concat(i);
    mobileMenuOption.addEventListener('click', () => {
      // deselect all menu items
      const mobileMenuCount = mobileMenuContainter.childElementCount; // eslint-disable-next-line no-shadow

      for (let i = 0; i < mobileMenuCount; i++) {
        if (mobileMenuContainter.children[i].classList.contains('selected') === true) {
          mobileMenuContainter.children[i].classList.toggle('selected');
        }
      } // make new selection


      mobileMenuOption.classList.toggle('selected');
    });
    mobileMenuContainter.appendChild(mobileMenuOption);
  } // Append


  mobileMenuContent.appendChild(mobileMenuTitle);
  mobileMenuTable.appendChild(mobileMenuContainter);
  mobileMenuContent.appendChild(mobileMenuTable);
  container.appendChild(mobileMenuContent);
};

const createImageScroller = container => {
  const imageScrollerContainter = document.createElement('div');
  imageScrollerContainter.classList.add('content', 'hidden');
  imageScrollerContainter.id = 'imageScroller';
  const imageScroller = document.createElement('div');
  imageScroller.classList.add('imageScroller'); // add images

  addImageToScroller(_assets_IMG_1201_jpg__WEBPACK_IMPORTED_MODULE_1__, 1, imageScroller, 'View of Diamond Head & Honolulu, Oahu');
  addImageToScroller(_assets_IMG_1212_jpg__WEBPACK_IMPORTED_MODULE_2__, 2, imageScroller, 'Jurassic Park Valley, Kualoa Ranch, Oahu');
  addImageToScroller(_assets_IMG_8716_jpg__WEBPACK_IMPORTED_MODULE_3__, 3, imageScroller, 'Rainbow on Oahu');
  addImageToScroller(_assets_IMG_8855_jpg__WEBPACK_IMPORTED_MODULE_4__, 4, imageScroller, 'Turtle on the beach near Haleiwa, Oahu'); // add previous button

  const previousImageBtn = document.createElement('a');
  previousImageBtn.classList.add('previousImageBtn');
  previousImageBtn.addEventListener('click', () => {
    selectImage(slideIndex += -1);
  }); // display previous arrow

  previousImageBtn.innerHTML = '&#10094;'; // add next button

  const nextImageBtn = document.createElement('a');
  nextImageBtn.classList.add('nextImageBtn');
  nextImageBtn.addEventListener('click', () => {
    selectImage(slideIndex += 1);
  }); // display next arrow

  nextImageBtn.innerHTML = '&#10095;'; // add image selection dots

  const scrollerDotContainer = document.createElement('div');
  scrollerDotContainer.classList.add('scrollerDotContainer');

  for (let i = 1; i <= 4; i++) {
    const newDot = document.createElement('span');
    newDot.classList.add('scrollerDot'); // eslint-disable-next-line no-loop-func

    newDot.addEventListener('click', () => {
      selectImage(slideIndex = i);
    });
    scrollerDotContainer.appendChild(newDot);
  } // append


  imageScroller.appendChild(previousImageBtn);
  imageScroller.appendChild(nextImageBtn);
  imageScrollerContainter.appendChild(imageScroller);
  imageScrollerContainter.appendChild(scrollerDotContainer);
  container.appendChild(imageScrollerContainter);
}; // Form functions
// Country names object using 2-letter country codes to reference country name
// ISO 3166 Alpha-2 Format: [2 letter Country Code]: [Country Name]
// Sorted alphabetical by country name (special characters on bottom)


const countryListAlpha2 = {
  AF: 'Afghanistan',
  AL: 'Albania',
  DZ: 'Algeria',
  AS: 'American Samoa',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antarctica',
  AG: 'Antigua and Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AW: 'Aruba',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas (the)',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermuda',
  BT: 'Bhutan',
  BO: 'Bolivia (Plurinational State of)',
  BQ: 'Bonaire, Sint Eustatius and Saba',
  BA: 'Bosnia and Herzegovina',
  BW: 'Botswana',
  BV: 'Bouvet Island',
  BR: 'Brazil',
  IO: 'British Indian Ocean Territory (the)',
  BN: 'Brunei Darussalam',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  CV: 'Cabo Verde',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  KY: 'Cayman Islands (the)',
  CF: 'Central African Republic (the)',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CX: 'Christmas Island',
  CC: 'Cocos (Keeling) Islands (the)',
  CO: 'Colombia',
  KM: 'Comoros (the)',
  CD: 'Congo (the Democratic Republic of the)',
  CG: 'Congo (the)',
  CK: 'Cook Islands (the)',
  CR: 'Costa Rica',
  HR: 'Croatia',
  CU: 'Cuba',
  CW: 'Curaçao',
  CY: 'Cyprus',
  CZ: 'Czechia',
  CI: "Côte d'Ivoire",
  DK: 'Denmark',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic (the)',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  EE: 'Estonia',
  SZ: 'Eswatini',
  ET: 'Ethiopia',
  FK: 'Falkland Islands (the) [Malvinas]',
  FO: 'Faroe Islands (the)',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GF: 'French Guiana',
  PF: 'French Polynesia',
  TF: 'French Southern Territories (the)',
  GA: 'Gabon',
  GM: 'Gambia (the)',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GR: 'Greece',
  GL: 'Greenland',
  GD: 'Grenada',
  GP: 'Guadeloupe',
  GU: 'Guam',
  GT: 'Guatemala',
  GG: 'Guernsey',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HM: 'Heard Island and McDonald Islands',
  VA: 'Holy See (the)',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IR: 'Iran (Islamic Republic of)',
  IQ: 'Iraq',
  IE: 'Ireland',
  IM: 'Isle of Man',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JE: 'Jersey',
  JO: 'Jordan',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  KP: "Korea (the Democratic People's Republic of)",
  KR: 'Korea (the Republic of)',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',
  LA: "Lao People's Democratic Republic (the)",
  LV: 'Latvia',
  LB: 'Lebanon',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MO: 'Macao',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands (the)',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MU: 'Mauritius',
  YT: 'Mayotte',
  MX: 'Mexico',
  FM: 'Micronesia (Federated States of)',
  MD: 'Moldova (the Republic of)',
  MC: 'Monaco',
  MN: 'Mongolia',
  ME: 'Montenegro',
  MS: 'Montserrat',
  MA: 'Morocco',
  MZ: 'Mozambique',
  MM: 'Myanmar',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands (the)',
  NC: 'New Caledonia',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger (the)',
  NG: 'Nigeria',
  NU: 'Niue',
  NF: 'Norfolk Island',
  MP: 'Northern Mariana Islands (the)',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PS: 'Palestine, State of',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines (the)',
  PN: 'Pitcairn',
  PL: 'Poland',
  PT: 'Portugal',
  PR: 'Puerto Rico',
  QA: 'Qatar',
  MK: 'Republic of North Macedonia',
  RO: 'Romania',
  RU: 'Russian Federation (the)',
  RW: 'Rwanda',
  RE: 'Réunion',
  BL: 'Saint Barthélemy',
  SH: 'Saint Helena, Ascension and Tristan da Cunha',
  KN: 'Saint Kitts and Nevis',
  LC: 'Saint Lucia',
  MF: 'Saint Martin (French part)',
  PM: 'Saint Pierre and Miquelon',
  VC: 'Saint Vincent and the Grenadines',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'Sao Tome and Principe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SX: 'Sint Maarten (Dutch part)',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  SO: 'Somalia',
  ZA: 'South Africa',
  GS: 'South Georgia and the South Sandwich Islands',
  SS: 'South Sudan',
  ES: 'Spain',
  LK: 'Sri Lanka',
  SD: 'Sudan (the)',
  SR: 'Suriname',
  SJ: 'Svalbard and Jan Mayen',
  SE: 'Sweden',
  CH: 'Switzerland',
  SY: 'Syrian Arab Republic',
  TW: 'Taiwan',
  TJ: 'Tajikistan',
  TZ: 'Tanzania, United Republic of',
  TH: 'Thailand',
  TL: 'Timor-Leste',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trinidad and Tobago',
  TN: 'Tunisia',
  TR: 'Turkey',
  TM: 'Turkmenistan',
  TC: 'Turks and Caicos Islands (the)',
  TV: 'Tuvalu',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates (the)',
  GB: 'United Kingdom of Great Britain and Northern Ireland (the)',
  UM: 'United States Minor Outlying Islands (the)',
  US: 'United States of America (the)',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VE: 'Venezuela (Bolivarian Republic of)',
  VN: 'Viet Nam',
  VG: 'Virgin Islands (British)',
  VI: 'Virgin Islands (U.S.)',
  WF: 'Wallis and Futuna',
  EH: 'Western Sahara',
  YE: 'Yemen',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
  AX: 'Åland Islands'
};

const validateEmail = () => {
  const emailInput = document.getElementById('email');

  if (emailInput.validity.typeMismatch || emailInput.value === '') {
    emailInput.setCustomValidity('Enter a valid email');
    emailInput.reportValidity();
  } else {
    emailInput.setCustomValidity('');
  }
};

const createEmailInput = container => {
  // email container
  const formRow = document.createElement('div');
  formRow.classList.add('formRow'); // email label

  const emailLabel = document.createElement('label');
  emailLabel.for = 'email';
  emailLabel.innerText = 'Email'; // email input

  const emailInput = document.createElement('input');
  emailInput.id = 'email';
  emailInput.name = 'email';
  emailInput.type = 'email';
  emailInput.placeholder = 'jane@example.com'; // validity check

  emailInput.addEventListener('input', () => validateEmail()); // append email

  formRow.appendChild(emailLabel);
  formRow.appendChild(emailInput);
  container.appendChild(formRow);
};

const validateCountryInput = () => {
  const countrySelection = document.getElementById('country');

  if (countrySelection.value === '') {
    countrySelection.setCustomValidity('Which country are you in?');
    countrySelection.reportValidity();
  } else {
    countrySelection.setCustomValidity('');
  }
};

const createCountryInput = container => {
  // country container
  const formRow = document.createElement('div');
  formRow.classList.add('formRow'); // country label

  const countryLabel = document.createElement('label');
  countryLabel.for = 'country';
  countryLabel.innerText = 'Country'; // country selection

  const countrySelection = document.createElement('select');
  countrySelection.id = 'country';
  countrySelection.name = 'country'; // country options

  const blankOption = document.createElement('option');
  blankOption.value = '';
  blankOption.innerText = '';
  countrySelection.appendChild(blankOption);
  Object.keys(countryListAlpha2).forEach(key => {
    // console.log(key, countryListAlpha2[key]);
    const newOption = document.createElement('option');
    newOption.value = key;
    newOption.innerText = countryListAlpha2[key];
    countrySelection.appendChild(newOption);
  }); // validity check

  countrySelection.addEventListener('input', () => validateCountryInput()); // append country input

  formRow.appendChild(countryLabel);
  formRow.appendChild(countrySelection);
  container.appendChild(formRow);
};

const validateZipCode = () => {
  const zipCodeInput = document.getElementById('zipcode');

  if (/^\d{5}(-\d{4})?$/.test(zipCodeInput.value) === false) {
    zipCodeInput.setCustomValidity('Enter a valid zipcode');
    zipCodeInput.reportValidity();
  } else {
    zipCodeInput.setCustomValidity('');
  }
};

const createZipCodeInput = container => {
  // zip code container
  const formRow = document.createElement('div');
  formRow.classList.add('formRow'); // zip code label

  const zipCodeLabel = document.createElement('label');
  zipCodeLabel.for = 'zipcode';
  zipCodeLabel.innerText = 'Zip code'; // zip code input

  const zipCodeInput = document.createElement('input');
  zipCodeInput.id = 'zipcode';
  zipCodeInput.name = 'zipcode'; // validity check

  zipCodeInput.addEventListener('input', () => validateZipCode()); // append zip code input

  formRow.appendChild(zipCodeLabel);
  formRow.appendChild(zipCodeInput);
  container.appendChild(formRow);
};

const validatePassword = () => {
  const passwordInput = document.getElementById('password'); // Validate lowercase letters

  if (/[a-z]/g.test(passwordInput.value) === false) {
    passwordInput.setCustomValidity('Must contain lowercase letter');
    passwordInput.reportValidity(); // Validate capital letters
  } else if (/[A-Z]/g.test(passwordInput.value) === false) {
    passwordInput.setCustomValidity('Must contain uppercase letter');
    passwordInput.reportValidity(); // Validate numbers
  } else if (/[0-9]/g.test(passwordInput.value) === false) {
    passwordInput.setCustomValidity('Must contain a number');
    passwordInput.reportValidity(); // Validate length
  } else if (passwordInput.value.length < 8) {
    passwordInput.setCustomValidity('Must be at least 8 characters');
    passwordInput.reportValidity();
  } else {
    passwordInput.setCustomValidity('');
  }
};

const createPasswordInput = container => {
  // password container
  const formRow = document.createElement('div');
  formRow.classList.add('formRow'); // password label

  const passwordLabel = document.createElement('label');
  passwordLabel.for = 'password';
  passwordLabel.innerText = 'Password'; // password input

  const passwordInput = document.createElement('input');
  passwordInput.id = 'password';
  passwordInput.name = 'password';
  passwordInput.type = 'password'; // validity check

  passwordInput.addEventListener('input', () => validatePassword()); // append password input

  formRow.appendChild(passwordLabel);
  formRow.appendChild(passwordInput);
  container.appendChild(formRow);
};

const confirmPassword = () => {
  const confirmPasswordInput = document.getElementById('passwordConfirmation');
  const passwordInput = document.getElementById('password').value;

  if (confirmPasswordInput.value !== passwordInput) {
    confirmPasswordInput.setCustomValidity('Does not match');
    confirmPasswordInput.reportValidity();
  } else {
    confirmPasswordInput.setCustomValidity('');
  }
};

const createConfirmPasswordInput = container => {
  // confirm password container
  const formRow = document.createElement('div');
  formRow.classList.add('formRow'); // confirm password label

  const confirmPasswordLabel = document.createElement('label');
  confirmPasswordLabel.for = 'passwordConfirmation';
  confirmPasswordLabel.innerText = 'Confirm password'; // connfirm password input

  const confirmPasswordInput = document.createElement('input');
  confirmPasswordInput.type = 'password';
  confirmPasswordInput.id = 'passwordConfirmation';
  confirmPasswordInput.name = 'passwordConfirmation'; // validity check

  confirmPasswordInput.addEventListener('input', () => confirmPassword()); // append confirm password input

  formRow.appendChild(confirmPasswordLabel);
  formRow.appendChild(confirmPasswordInput);
  container.appendChild(formRow);
};

const submitForm = e => {
  // prevent actual form submission
  e.preventDefault(); // validate form fields

  confirmPassword();
  validatePassword();
  validateZipCode();
  validateCountryInput();
  validateEmail();
};

const createSubmitButton = container => {
  // submit button container
  const formRow = document.createElement('div');
  formRow.classList.add('formRow'); // submit button

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submitBtn');
  submitBtn.innerText = 'Submit'; // event listener

  submitBtn.addEventListener('click', e => submitForm(e)); // append submit button

  formRow.appendChild(submitBtn);
  container.appendChild(formRow);
};

const createValidationForm = container => {
  // create form validation container
  const validationFormContainter = document.createElement('div');
  validationFormContainter.classList.add('validationFormContainter', 'content', 'hidden');
  validationFormContainter.id = 'validationForm'; // create form header

  const formHeader = document.createElement('div');
  formHeader.classList.add('formHeader'); // form title

  const formTitle = document.createElement('h3');
  formTitle.innerText = 'Example form'; // create form

  const validationForm = document.createElement('form');
  validationForm.classList.add('validationForm');
  validationForm.autocomplete = 'off';
  createEmailInput(validationForm);
  createCountryInput(validationForm);
  createZipCodeInput(validationForm);
  createPasswordInput(validationForm);
  createConfirmPasswordInput(validationForm);
  createSubmitButton(validationForm); // append

  formHeader.appendChild(formTitle);
  validationFormContainter.appendChild(formHeader);
  validationFormContainter.appendChild(document.createElement('br'));
  validationFormContainter.appendChild(validationForm);
  container.appendChild(validationFormContainter);
};

const createAPIPractice = container => {
  const APIPracticeContainter = document.createElement('div');
  APIPracticeContainter.classList.add('content', 'hidden');
  APIPracticeContainter.id = 'APIPractice'; // create API button

  const APIPractice = document.createElement('div');
  APIPractice.classList.add('APIPractice');
  APIPractice.innerText = 'dropdown';
  APIPractice.addEventListener('click', () => {
    APIPractice.classList.toggle('selected');
  }); // Append

  APIPracticeContainter.appendChild(APIPractice);
  container.appendChild(APIPracticeContainter);
};

const createContentContainer = () => {
  const contentContainter = document.createElement('div');
  contentContainter.classList.add('contentContainer');
  createDropdownMenu(contentContainter);
  createMobileMenu(contentContainter);
  createImageScroller(contentContainter);
  createValidationForm(contentContainter);
  createAPIPractice(contentContainter);
  body.appendChild(contentContainter);
  loopImageScroller();
};

const createFooter = () => {
  const footer = document.createElement('footer');
  const copyright = document.createElement('p');
  copyright.textContent = "Copyright \xA9 ".concat(new Date().getFullYear(), " jcampbell57");
  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/jcampbell57';
  githubLink.target = '_blank';
  const newGithubIcon = document.createElement('img');
  newGithubIcon.src = _assets_GitHub_light_32px_png__WEBPACK_IMPORTED_MODULE_0__;
  newGithubIcon.setAttribute('class', 'github');
  githubLink.appendChild(newGithubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);
  body.appendChild(footer);
};

const initialize = () => {
  createHeader();
  createMainMenu();
  createContentContainer();
  createFooter();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: rgb(90, 90, 90);\n    --secondary-color: rgb(45, 45, 45);\n    --light-color: whitesmoke;\n    --hover: rgba(255, 255, 255, 0.2);\n    --active: rgba(255, 255, 255, 0.3);\n    --error : darkred\n}\n\n* {box-sizing: border-box}\n\nhtml {\n    overflow: hidden;\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden;\n}\n\n\n\n\n\n/* Header styling */\n\nheader {\n    padding: 1rem;\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nheader>h1 {\n    font-size: 2em;\n    font-weight: bolder;\n}\n\n\n\n\n\n/* Menu styling */\n\n.mainMenu {\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n    border-bottom: 3px solid var(--light-color);\n\n    display: flex;\n    text-align: center;\n    align-items: center;\n    justify-content: space-evenly;\n\n    padding: 0 15vw;\n}\n\n.menuItem {\n    padding: 0.4rem 1rem;\n    margin: 0.6rem;\n    font-size: 1.1rem;\n    border-radius: 0.3rem;\n}\n\n.menuItem:hover,\n.dropdownMenu:hover,\n.dropdownOption:hover, \n.mobileMenuOption:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.menuItem:active,\n.dropdownMenu:active,\n.dropdownOption:active,\n.mobileMenuOption:active {\n    background-color: var(--active);\n}\n\n.selected {\n    background-color: var(--hover);\n}\n\n\n\n\n\n/* Content styling */\n\n.hidden {\n    display: none;\n}\n\n.contentContainer {\n    background-color: var(--background-color);\n\n    height: 100%;\n    padding: 1rem;\n    overflow: auto;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: calc(center - 30%)\n}\n\n\n\n\n\n/* Dropdown menu styling */\n\n.dropdownMenu {\n    color: var(--light-color);\n    width: 20vw;\n    min-width: fit-content;\n    padding: 0.5rem 1rem;\n    border: 2px solid var(--light-color);\n    text-align: center;\n    font-size: 1.1rem;\n    position: relative;\n}\n\n.dropdownContainer {\n    position: absolute;\n    top: calc(100% + 2px);\n    width: 100%;\n    left: 0;\n\n    border: 1px solid var(--light-color);\n}\n\n.dropdownOption {\n    display: block;\n    text-align: center;\n    padding: 0.5rem 1rem;\n}\n\n\n\n\n\n/* Mobile menu styling */\n\n.mobileMenuContent {\n    color: var(--light-color);\n    text-align: center;\n    width: 100%;\n}\n\n.mobileMenuContent>h3 {\n    font-size: 1.15em;\n    margin-bottom: 1em;\n    font-weight: 500;\n}\n\n.mobileMenuContent>table {\n    display: flex;\n}\n\n.mobileMenuContainer {\n    border: 2px solid var(--light-color);\n    cursor: grab;\n    display: flex;\n\n    /* enable horizontal scroll */\n    overflow-x: scroll;\n}\n\n/* hide scrollbar, retain function */\n.mobileMenuContainer::-webkit-scrollbar {\n    display: none;\n}\n\n.mobileMenuOption {\n    padding: 0.5rem 1rem;\n    font-size: 1.1rem;\n\n    min-width: max-content;\n    text-align: center;\n}\n\n\n\n\n\n/* Image scroller styling */\n\n.scrollerImage {\n    width: 100%;\n}\n\n/* slideshow container */\n.imageScroller {\n    max-width: 1000px;\n    position: relative;\n    margin: auto;\n}\n\n/* hide images default */\n.imageContainer {\n    display: none;\n}\n\n/* next & previous buttons */\n.previousImageBtn, .nextImageBtn {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    width: auto;\n    margin-top: -22px;\n    padding: 16px;\n    color: var(--light-color);\n    font-weight: bold;\n    font-size: 18px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n    /* user-select: none; */\n}\n\n/* position next button on the right */\n.nextImageBtn {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n\n/* add hover effect */\n.previousImageBtn:hover, .nextImageBtn:hover {\n    background-color: var(--hover)\n}\n\n/* caption text */\n.imageCaption {\n    color: var(--light-color);\n    font-size: 15px;\n    padding: 8px 12px;\n    position: absolute;\n    bottom: 8px;\n    width: 100%;\n    text-align: center;\n}\n\n/* image number */\n.imageNumber {\n    color: var(--light-color);\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n\n/* scroller dots */\n.scrollerDotContainer {\n    text-align: center;\n    margin-top: 4px;\n}\n\n.scrollerDot {\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    margin: 0 2px;\n    background-color: #bbb;\n    border-radius: 50%;\n    display: inline-block;\n    transition: background-color 0.6s ease;\n}\n\n.scrollerDot:hover, .selectedImage {\n    background-color: #717171;\n}\n\n/* fading animation */\n.fade {\n    animation-name: fade;\n    animation-duration: 1.5s;\n  }\n\n@keyframes fade {\n    from {opacity: .4}\n    to {opacity: 1}\n}\n\n\n\n\n\n/* Mobile form styling & validation styling */\n\n.validationFormContainter {\n    color: var(--light-color);    \n}\n\n.formHeader {\n    text-align: center;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n}\n\n.formHeader>h3 {\n    font-size: 1.15em;\n    padding: 0.5em;\n    font-weight: 500;\n}\n\n.validationForm {\n    font-size: 1.1em;\n    padding: 0.5em;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n\n    /* width: 80%; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.formRow {\n    margin-bottom: 1rem;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    flex-wrap: wrap; \n}\n\n.formRow input {\n    background-color: var(--light-color);\n    border: 1px solid var(--secondary-color);\n    border-radius: 3px;\n    width: 100%;\n    padding: 7px;\n    font-size: 1.1rem;\n}\n\n.formRow select {\n    width: 100%;\n    padding: 5px;\n    font-size: 1.1rem;          /* This won't work in Chrome or Safari */\n    /* -webkit-appearance: none;   This will make it work */\n}\n\n.formRow label {\n    margin-bottom: 0.5rem;\n}\n\n.formRow input:invalid {\n  border: 1px solid var(--error);\n  color: var(--error);\n  box-shadow: none; /* Remove default red glow in Firefox */\n}\n\n.formRow button {\n    font-size: 1.15rem;\n    font-weight: bold;\n\n    color: #FFFFFF;\n    background-color: var(--hover);\n\n    border: none;\n    border-radius: 3px;\n\n    padding: 10px 40px;\n    cursor: pointer;\n}\n\n.formRow button:hover {\n    background-color: var(--active);\n}\n\n.formRow button:active {\n    background-color: var(--active);\n    cursor: grabbing;\n}\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    padding: 1rem;\n    margin-top: auto;\n    border-top: 3px solid var(--light-color);\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n\n}\n\n/* centers github icon vertically */\nfooter>a {\n    display: flex;\n}\n\n.github {\n    height: 24px;\n    transition: transform 0.3s ease-in-out;\n}\n\n.github:hover {\n    transform: rotate(-360deg) scale(1.2);\n}\n\n\n\n\n\n/* Desktop form styling  */\n\n@media only screen and (min-width: 700px) {\n    .formHeader,\n    .validationForm {\n      width: 600px;\n    }\n    .formRow {\n      flex-direction: row;\n      align-items: flex-start; /* To avoid stretching */\n      margin-bottom: 20px;\n    }\n    .formRow input,\n    .formRow select {\n      width: 280px;\n      height: initial;\n    }\n    .formRow label {\n      text-align: right;\n      width: 180px;\n      margin-top: 7px;\n      padding-right: 20px;\n    }\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --background-color: rgb(90, 90, 90);\n    --secondary-color: rgb(45, 45, 45);\n    --light-color: whitesmoke;\n    --hover: rgba(255, 255, 255, 0.2);\n    --active: rgba(255, 255, 255, 0.3);\n    --error : darkred\n}\n\n* {box-sizing: border-box}\n\nhtml {\n    overflow: hidden;\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden;\n}\n\n\n\n\n\n/* Header styling */\n\nheader {\n    padding: 1rem;\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nheader>h1 {\n    font-size: 2em;\n    font-weight: bolder;\n}\n\n\n\n\n\n/* Menu styling */\n\n.mainMenu {\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n    border-bottom: 3px solid var(--light-color);\n\n    display: flex;\n    text-align: center;\n    align-items: center;\n    justify-content: space-evenly;\n\n    padding: 0 15vw;\n}\n\n.menuItem {\n    padding: 0.4rem 1rem;\n    margin: 0.6rem;\n    font-size: 1.1rem;\n    border-radius: 0.3rem;\n}\n\n.menuItem:hover,\n.dropdownMenu:hover,\n.dropdownOption:hover, \n.mobileMenuOption:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.menuItem:active,\n.dropdownMenu:active,\n.dropdownOption:active,\n.mobileMenuOption:active {\n    background-color: var(--active);\n}\n\n.selected {\n    background-color: var(--hover);\n}\n\n\n\n\n\n/* Content styling */\n\n.hidden {\n    display: none;\n}\n\n.contentContainer {\n    background-color: var(--background-color);\n\n    height: 100%;\n    padding: 1rem;\n    overflow: auto;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: calc(center - 30%)\n}\n\n\n\n\n\n/* Dropdown menu styling */\n\n.dropdownMenu {\n    color: var(--light-color);\n    width: 20vw;\n    min-width: fit-content;\n    padding: 0.5rem 1rem;\n    border: 2px solid var(--light-color);\n    text-align: center;\n    font-size: 1.1rem;\n    position: relative;\n}\n\n.dropdownContainer {\n    position: absolute;\n    top: calc(100% + 2px);\n    width: 100%;\n    left: 0;\n\n    border: 1px solid var(--light-color);\n}\n\n.dropdownOption {\n    display: block;\n    text-align: center;\n    padding: 0.5rem 1rem;\n}\n\n\n\n\n\n/* Mobile menu styling */\n\n.mobileMenuContent {\n    color: var(--light-color);\n    text-align: center;\n    width: 100%;\n}\n\n.mobileMenuContent>h3 {\n    font-size: 1.15em;\n    margin-bottom: 1em;\n    font-weight: 500;\n}\n\n.mobileMenuContent>table {\n    display: flex;\n}\n\n.mobileMenuContainer {\n    border: 2px solid var(--light-color);\n    cursor: grab;\n    display: flex;\n\n    /* enable horizontal scroll */\n    overflow-x: scroll;\n}\n\n/* hide scrollbar, retain function */\n.mobileMenuContainer::-webkit-scrollbar {\n    display: none;\n}\n\n.mobileMenuOption {\n    padding: 0.5rem 1rem;\n    font-size: 1.1rem;\n\n    min-width: max-content;\n    text-align: center;\n}\n\n\n\n\n\n/* Image scroller styling */\n\n.scrollerImage {\n    width: 100%;\n}\n\n/* slideshow container */\n.imageScroller {\n    max-width: 1000px;\n    position: relative;\n    margin: auto;\n}\n\n/* hide images default */\n.imageContainer {\n    display: none;\n}\n\n/* next & previous buttons */\n.previousImageBtn, .nextImageBtn {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    width: auto;\n    margin-top: -22px;\n    padding: 16px;\n    color: var(--light-color);\n    font-weight: bold;\n    font-size: 18px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n    /* user-select: none; */\n}\n\n/* position next button on the right */\n.nextImageBtn {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n\n/* add hover effect */\n.previousImageBtn:hover, .nextImageBtn:hover {\n    background-color: var(--hover)\n}\n\n/* caption text */\n.imageCaption {\n    color: var(--light-color);\n    font-size: 15px;\n    padding: 8px 12px;\n    position: absolute;\n    bottom: 8px;\n    width: 100%;\n    text-align: center;\n}\n\n/* image number */\n.imageNumber {\n    color: var(--light-color);\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n\n/* scroller dots */\n.scrollerDotContainer {\n    text-align: center;\n    margin-top: 4px;\n}\n\n.scrollerDot {\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    margin: 0 2px;\n    background-color: #bbb;\n    border-radius: 50%;\n    display: inline-block;\n    transition: background-color 0.6s ease;\n}\n\n.scrollerDot:hover, .selectedImage {\n    background-color: #717171;\n}\n\n/* fading animation */\n.fade {\n    animation-name: fade;\n    animation-duration: 1.5s;\n  }\n\n@keyframes fade {\n    from {opacity: .4}\n    to {opacity: 1}\n}\n\n\n\n\n\n/* Mobile form styling & validation styling */\n\n.validationFormContainter {\n    color: var(--light-color);    \n}\n\n.formHeader {\n    text-align: center;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n}\n\n.formHeader>h3 {\n    font-size: 1.15em;\n    padding: 0.5em;\n    font-weight: 500;\n}\n\n.validationForm {\n    font-size: 1.1em;\n    padding: 0.5em;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n\n    /* width: 80%; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.formRow {\n    margin-bottom: 1rem;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    flex-wrap: wrap; \n}\n\n.formRow input {\n    background-color: var(--light-color);\n    border: 1px solid var(--secondary-color);\n    border-radius: 3px;\n    width: 100%;\n    padding: 7px;\n    font-size: 1.1rem;\n}\n\n.formRow select {\n    width: 100%;\n    padding: 5px;\n    font-size: 1.1rem;          /* This won't work in Chrome or Safari */\n    /* -webkit-appearance: none;   This will make it work */\n}\n\n.formRow label {\n    margin-bottom: 0.5rem;\n}\n\n.formRow input:invalid {\n  border: 1px solid var(--error);\n  color: var(--error);\n  box-shadow: none; /* Remove default red glow in Firefox */\n}\n\n.formRow button {\n    font-size: 1.15rem;\n    font-weight: bold;\n\n    color: #FFFFFF;\n    background-color: var(--hover);\n\n    border: none;\n    border-radius: 3px;\n\n    padding: 10px 40px;\n    cursor: pointer;\n}\n\n.formRow button:hover {\n    background-color: var(--active);\n}\n\n.formRow button:active {\n    background-color: var(--active);\n    cursor: grabbing;\n}\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    padding: 1rem;\n    margin-top: auto;\n    border-top: 3px solid var(--light-color);\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n\n}\n\n/* centers github icon vertically */\nfooter>a {\n    display: flex;\n}\n\n.github {\n    height: 24px;\n    transition: transform 0.3s ease-in-out;\n}\n\n.github:hover {\n    transform: rotate(-360deg) scale(1.2);\n}\n\n\n\n\n\n/* Desktop form styling  */\n\n@media only screen and (min-width: 700px) {\n    .formHeader,\n    .validationForm {\n      width: 600px;\n    }\n    .formRow {\n      flex-direction: row;\n      align-items: flex-start; /* To avoid stretching */\n      margin-bottom: 20px;\n    }\n    .formRow input,\n    .formRow select {\n      width: 280px;\n      height: initial;\n    }\n    .formRow label {\n      text-align: right;\n      width: 180px;\n      margin-top: 7px;\n      padding-right: 20px;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/GitHub-light-32px.png":
/*!******************************************!*\
  !*** ./src/assets/GitHub-light-32px.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "266ca63177bca6f330a7.png";

/***/ }),

/***/ "./src/assets/IMG_1201.jpg":
/*!*********************************!*\
  !*** ./src/assets/IMG_1201.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5ca329287d8e157073e.jpg";

/***/ }),

/***/ "./src/assets/IMG_1212.jpg":
/*!*********************************!*\
  !*** ./src/assets/IMG_1212.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1056d36c9cac11dd88a2.jpg";

/***/ }),

/***/ "./src/assets/IMG_8716.jpg":
/*!*********************************!*\
  !*** ./src/assets/IMG_8716.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cc0c8afe41804378b28.jpg";

/***/ }),

/***/ "./src/assets/IMG_8855.jpg":
/*!*********************************!*\
  !*** ./src/assets/IMG_8855.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4cda406b36354f70446.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageLoader */ "./src/pageLoader.js");



(0,_pageLoader__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxhQUFhLE1BQU0sVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssZUFBZSxnQkFBZ0IsV0FBVyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsd0JBQXdCLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSx5QkFBeUIsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLGFBQWEsV0FBVyxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxNQUFNLFVBQVUsWUFBWSxjQUFjLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSx5QkFBeUIsYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sZ0NBQWdDLDBDQUEwQyx5Q0FBeUMsZ0NBQWdDLHdDQUF3Qyx5Q0FBeUMsMEJBQTBCLE9BQU8sdUJBQXVCLFVBQVUsdUJBQXVCLEdBQUcsVUFBVSxtSUFBbUksb0JBQW9CLDZCQUE2QixvQkFBb0IsdUJBQXVCLEdBQUcsNENBQTRDLG9CQUFvQixpREFBaUQsZ0NBQWdDLHNCQUFzQiwwQkFBMEIsOEJBQThCLEdBQUcsZUFBZSxxQkFBcUIsMEJBQTBCLEdBQUcsNkNBQTZDLCtDQUErQyxnQ0FBZ0Msa0RBQWtELHNCQUFzQix5QkFBeUIsMEJBQTBCLG9DQUFvQyx3QkFBd0IsR0FBRyxlQUFlLDJCQUEyQixxQkFBcUIsd0JBQXdCLDRCQUE0QixHQUFHLDhGQUE4RixzQkFBc0IscUNBQXFDLEdBQUcsaUdBQWlHLHNDQUFzQyxHQUFHLGVBQWUscUNBQXFDLEdBQUcsOENBQThDLG9CQUFvQixHQUFHLHVCQUF1QixnREFBZ0QscUJBQXFCLG9CQUFvQixxQkFBcUIsc0JBQXNCLDZCQUE2QiwwQkFBMEIsNENBQTRDLDBEQUEwRCxnQ0FBZ0Msa0JBQWtCLDZCQUE2QiwyQkFBMkIsMkNBQTJDLHlCQUF5Qix3QkFBd0IseUJBQXlCLEdBQUcsd0JBQXdCLHlCQUF5Qiw0QkFBNEIsa0JBQWtCLGNBQWMsNkNBQTZDLEdBQUcscUJBQXFCLHFCQUFxQix5QkFBeUIsMkJBQTJCLEdBQUcsNkRBQTZELGdDQUFnQyx5QkFBeUIsa0JBQWtCLEdBQUcsMkJBQTJCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLEdBQUcsOEJBQThCLG9CQUFvQixHQUFHLDBCQUEwQiwyQ0FBMkMsbUJBQW1CLG9CQUFvQiwrREFBK0QsR0FBRyxvRkFBb0Ysb0JBQW9CLEdBQUcsdUJBQXVCLDJCQUEyQix3QkFBd0IsK0JBQStCLHlCQUF5QixHQUFHLDREQUE0RCxrQkFBa0IsR0FBRywrQ0FBK0Msd0JBQXdCLHlCQUF5QixtQkFBbUIsR0FBRyxnREFBZ0Qsb0JBQW9CLEdBQUcscUVBQXFFLHNCQUFzQix5QkFBeUIsZUFBZSxrQkFBa0Isd0JBQXdCLG9CQUFvQixnQ0FBZ0Msd0JBQXdCLHNCQUFzQiw0QkFBNEIsaUNBQWlDLDRCQUE0QixLQUFLLDREQUE0RCxlQUFlLGlDQUFpQyxHQUFHLDBFQUEwRSx1Q0FBdUMsdUNBQXVDLGdDQUFnQyxzQkFBc0Isd0JBQXdCLHlCQUF5QixrQkFBa0Isa0JBQWtCLHlCQUF5QixHQUFHLHNDQUFzQyxnQ0FBZ0Msc0JBQXNCLHdCQUF3Qix5QkFBeUIsYUFBYSxHQUFHLGdEQUFnRCx5QkFBeUIsc0JBQXNCLEdBQUcsa0JBQWtCLHNCQUFzQixtQkFBbUIsa0JBQWtCLG9CQUFvQiw2QkFBNkIseUJBQXlCLDRCQUE0Qiw2Q0FBNkMsR0FBRyx3Q0FBd0MsZ0NBQWdDLEdBQUcsbUNBQW1DLDJCQUEyQiwrQkFBK0IsS0FBSyxxQkFBcUIsWUFBWSxZQUFZLFVBQVUsV0FBVyxHQUFHLHlGQUF5RixvQ0FBb0MsR0FBRyxpQkFBaUIseUJBQXlCLHFDQUFxQywyQ0FBMkMsNEJBQTRCLEdBQUcsb0JBQW9CLHdCQUF3QixxQkFBcUIsdUJBQXVCLEdBQUcscUJBQXFCLHVCQUF1QixxQkFBcUIscUNBQXFDLDJDQUEyQyw0QkFBNEIsdUJBQXVCLHNCQUFzQiw2QkFBNkIsMEJBQTBCLEdBQUcsY0FBYywwQkFBMEIsb0JBQW9CLGtDQUFrQyw2QkFBNkIsdUJBQXVCLEdBQUcsb0JBQW9CLDJDQUEyQywrQ0FBK0MseUJBQXlCLGtCQUFrQixtQkFBbUIsd0JBQXdCLEdBQUcscUJBQXFCLGtCQUFrQixtQkFBbUIsa0NBQWtDLDhFQUE4RSw0QkFBNEIsb0JBQW9CLDRCQUE0QixHQUFHLDRCQUE0QixtQ0FBbUMsd0JBQXdCLHNCQUFzQiwyQ0FBMkMscUJBQXFCLHlCQUF5Qix3QkFBd0IsdUJBQXVCLHFDQUFxQyxxQkFBcUIseUJBQXlCLDJCQUEyQixzQkFBc0IsR0FBRywyQkFBMkIsc0NBQXNDLEdBQUcsNEJBQTRCLHNDQUFzQyx1QkFBdUIsR0FBRyw0Q0FBNEMsb0JBQW9CLHVCQUF1QiwrQ0FBK0MsaURBQWlELGdDQUFnQywwQkFBMEIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsZ0JBQWdCLEtBQUssb0RBQW9ELG9CQUFvQixHQUFHLGFBQWEsbUJBQW1CLDZDQUE2QyxHQUFHLG1CQUFtQiw0Q0FBNEMsR0FBRyxzRkFBc0YseUNBQXlDLHFCQUFxQixPQUFPLGdCQUFnQiw0QkFBNEIsaUNBQWlDLHFEQUFxRCxPQUFPLDRDQUE0QyxxQkFBcUIsd0JBQXdCLE9BQU8sc0JBQXNCLDBCQUEwQixxQkFBcUIsd0JBQXdCLDRCQUE0QixPQUFPLEtBQUssbUJBQW1CO0FBQ3BzbEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVBQSx1REFBVSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvcGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL3Jlc2V0LmNzcz9lZGUwIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IGdpdGh1Ykljb24gZnJvbSAnLi9hc3NldHMvR2l0SHViLWxpZ2h0LTMycHgucG5nJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzEgZnJvbSAnLi9hc3NldHMvSU1HXzEyMDEuanBnJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzIgZnJvbSAnLi9hc3NldHMvSU1HXzEyMTIuanBnJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzMgZnJvbSAnLi9hc3NldHMvSU1HXzg3MTYuanBnJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzQgZnJvbSAnLi9hc3NldHMvSU1HXzg4NTUuanBnJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuLy8gaGVscGVyIGZ1bmN0aW9uc1xuY29uc3QgcHJvY2Vzc01lbnVTZWxlY3Rpb24gPSAoZSkgPT4ge1xuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluTWVudScpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRDb250YWluZXInKTtcblxuICAvLyBkZXNlbGVjdCBhbnkgbWVudSBpdGVtc1xuICBjb25zdCBtZW51Q291bnQgPSBtYWluTWVudS5jaGlsZEVsZW1lbnRDb3VudDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Q291bnQ7IGkrKykge1xuICAgIG1haW5NZW51LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIH1cblxuICAvLyBzZWxlY3QgbmV3IG1lbnUgaXRlbVxuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gIC8vIHRvZ2dsZSBjb250ZW50XG4gIGNvbnN0IGNvbnRlbnRDb3VudCA9IGNvbnRlbnRDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudENvdW50OyBpKyspIHtcbiAgICAvLyBoaWRlIGN1cnJlbnQgY29udGVudFxuICAgIGlmIChjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgPT09IGZhbHNlKSB7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICAvLyBkaXNwbGF5IHNlbGVjdGVkIGNvbnRlbnRcbiAgICBjb25zb2xlLmxvZyhjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuW2ldLmlkKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCk7XG4gICAgaWYgKGNvbnRlbnRDb250YWluZXIuY2hpbGRyZW5baV0uaWQgPT09IGUudGFyZ2V0LmlkKSB7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAoaXRlbU5hbWUsIGl0ZW1Db250YWluZXIsIGl0ZW1JZCwgaXRlbUNsYXNzKSA9PiB7XG4gIGNvbnN0IG5ld01lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbmV3TWVudUl0ZW0uaWQgPSBgJHtpdGVtSWR9YDtcblxuICAvLyBhZGQgY2xhc3MgaWYgb25lIGlzIGdpdmVuXG4gIGlmIChpdGVtQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgIG5ld01lbnVJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHtpdGVtQ2xhc3N9YCk7XG4gIH1cblxuICBuZXdNZW51SXRlbS5pbm5lclRleHQgPSBgJHtpdGVtTmFtZX1gO1xuICBuZXdNZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuXG4gIG5ld01lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHByb2Nlc3NNZW51U2VsZWN0aW9uKGUpKTtcblxuICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld01lbnVJdGVtKTtcbn07XG5cbmNvbnN0IGFkZEltYWdlVG9TY3JvbGxlciA9IChpbWFnZSwgaSwgc2Nyb2xsZXIsIGNhcHRpb24pID0+IHtcbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2VDb250YWluZXInLCAnZmFkZScpO1xuXG4gIC8vIGRpc3BsYXkgaW1hZ2UgbnVtYmVyXG4gIGNvbnN0IGltYWdlTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlTnVtYmVyJyk7XG4gIGltYWdlTnVtYmVyLmlubmVyVGV4dCA9IGAke2l9LzRgO1xuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZU51bWJlcik7XG5cbiAgLy8gZGlzcGxheSBpbWFnZVxuICBjb25zdCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlckltYWdlJyk7XG4gIG5ld0ltYWdlLnNyYyA9IGltYWdlO1xuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG5cbiAgLy8gZGlzcGxheSBjYXB0aW9uXG4gIGlmIChjYXB0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBpbWFnZUNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZUNhcHRpb24uY2xhc3NMaXN0LmFkZCgnaW1hZ2VDYXB0aW9uJyk7XG4gICAgaW1hZ2VDYXB0aW9uLmlubmVyVGV4dCA9IGAke2NhcHRpb259YDtcbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUNhcHRpb24pO1xuICB9XG5cbiAgc2Nyb2xsZXIuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xufTtcblxubGV0IHNsaWRlSW5kZXggPSAwO1xuXG5jb25zdCBzZWxlY3RJbWFnZSA9IChuKSA9PiB7XG4gIGNvbnN0IHNjcm9sbGVySW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1hZ2VDb250YWluZXInKTtcbiAgY29uc3Qgc2Nyb2xsZXJEb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Nyb2xsZXJEb3QnKTtcblxuICAvLyBsb29wIHRocm91Z2ggaW1hZ2VzXG4gIGlmIChuID4gc2Nyb2xsZXJJbWFnZXMubGVuZ3RoKSB7IHNsaWRlSW5kZXggPSAxOyB9XG4gIGlmIChuIDwgMSkgeyBzbGlkZUluZGV4ID0gc2Nyb2xsZXJJbWFnZXMubGVuZ3RoOyB9XG5cbiAgLy8gcmVzZXQgaW1hZ2Ugc2VsZWN0aW9uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsZXJJbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBzY3JvbGxlckltYWdlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsZXJEb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2Nyb2xsZXJEb3RzW2ldLmNsYXNzTmFtZSA9IHNjcm9sbGVyRG90c1tpXS5jbGFzc05hbWUucmVwbGFjZSgnIHNlbGVjdGVkSW1hZ2UnLCAnJyk7XG4gIH1cblxuICAvLyBzZWxlY3QgbmV3IGltYWdlXG4gIHNjcm9sbGVySW1hZ2VzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgc2Nyb2xsZXJEb3RzW3NsaWRlSW5kZXggLSAxXS5jbGFzc05hbWUgKz0gJyBzZWxlY3RlZEltYWdlJztcbn07XG5cbmNvbnN0IGxvb3BJbWFnZVNjcm9sbGVyID0gKCkgPT4ge1xuICBjb25zdCBzY3JvbGxlckltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlQ29udGFpbmVyJyk7XG4gIGNvbnN0IHNjcm9sbGVyRG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbGVyRG90Jyk7XG5cbiAgLy8gcmVzZXQgaW1hZ2Ugc2VsZWN0aW9uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsZXJJbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBzY3JvbGxlckltYWdlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsZXJEb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2Nyb2xsZXJEb3RzW2ldLmNsYXNzTmFtZSA9IHNjcm9sbGVyRG90c1tpXS5jbGFzc05hbWUucmVwbGFjZSgnIHNlbGVjdGVkSW1hZ2UnLCAnJyk7XG4gIH1cblxuICAvLyBzZWxlY3QgbmV3IGltYWdlXG4gIHNsaWRlSW5kZXgrKztcbiAgaWYgKHNsaWRlSW5kZXggPiBzY3JvbGxlckltYWdlcy5sZW5ndGgpIHsgc2xpZGVJbmRleCA9IDE7IH1cbiAgc2Nyb2xsZXJJbWFnZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBzY3JvbGxlckRvdHNbc2xpZGVJbmRleCAtIDFdLmNsYXNzTmFtZSArPSAnIHNlbGVjdGVkSW1hZ2UnO1xuICBzZXRUaW1lb3V0KGxvb3BJbWFnZVNjcm9sbGVyLCA1MDAwKTsgLy8gQ2hhbmdlIGltYWdlIGV2ZXJ5IDUgc2Vjb25kc1xufTtcblxuLy8gcGFnZSBpbml0aWFsaXphdGlvbiBmdW5jdGlvbnNcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkZXJUaXRsZS5pbm5lclRleHQgPSAnRHluYW1pYyBVSSBJbnRlcmFjdGlvbnMnO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW5NZW51ID0gKCkgPT4ge1xuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluTWVudScpO1xuXG4gIGNyZWF0ZU1lbnVJdGVtKCdEcm9wZG93biBNZW51JywgbWFpbk1lbnUsICdkcm9wZG93bk1lbnUnLCAnc2VsZWN0ZWQnKTtcbiAgY3JlYXRlTWVudUl0ZW0oJ01vYmlsZSBNZW51JywgbWFpbk1lbnUsICdtb2JpbGVNZW51Jyk7XG4gIGNyZWF0ZU1lbnVJdGVtKCdJbWFnZSBTY3JvbGxlcicsIG1haW5NZW51LCAnaW1hZ2VTY3JvbGxlcicpO1xuICBjcmVhdGVNZW51SXRlbSgnRm9ybSBWYWxpZGF0aW9uJywgbWFpbk1lbnUsICd2YWxpZGF0aW9uRm9ybScpO1xuICBjcmVhdGVNZW51SXRlbSgnQVBJIFByYWN0aWNlJywgbWFpbk1lbnUsICdBUElQcmFjdGljZScpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbk1lbnUpO1xufTtcblxuY29uc3QgY3JlYXRlRHJvcGRvd25NZW51ID0gKGNvbnRhaW5lcikgPT4ge1xuICBjb25zdCBkcm9wZG93bk1lbnVDb250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyb3Bkb3duTWVudUNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICBkcm9wZG93bk1lbnVDb250YWludGVyLmlkID0gJ2Ryb3Bkb3duTWVudSc7XG5cbiAgLy8gY3JlYXRlIGRyb3Bkb3duIGNvbnRhaW5lclxuICBjb25zdCBkcm9wZG93bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bkNvbnRhaW5lcicsICdoaWRkZW4nKTtcblxuICAvLyBjcmVhdGUgZHJvcGRvd24gb3B0aW9uc1xuICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bk9wdGlvbicpO1xuICAgIGRyb3Bkb3duT3B0aW9uLmlubmVyVGV4dCA9IGBvcHRpb24gJHtpfWA7XG4gICAgZHJvcGRvd25Db250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25PcHRpb24pO1xuICB9XG5cbiAgLy8gY3JlYXRlIGRyb3Bkb3duIGJ1dHRvblxuICBjb25zdCBkcm9wZG93bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duTWVudScpO1xuICBkcm9wZG93bk1lbnUuaW5uZXJUZXh0ID0gJ2Ryb3Bkb3duJztcbiAgZHJvcGRvd25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRyb3Bkb3duTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICAgIGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9KTtcblxuICAvLyBBcHBlbmRcbiAgZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKGRyb3Bkb3duQ29udGFpbmVyKTtcbiAgZHJvcGRvd25NZW51Q29udGFpbnRlci5hcHBlbmRDaGlsZChkcm9wZG93bk1lbnUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25NZW51Q29udGFpbnRlcik7XG5cbiAgLy8gY2xvc2UgZHJvcGRvd24gaWYgdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgaXRcbiAgd2luZG93Lm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghZS50YXJnZXQubWF0Y2hlcygnLmRyb3Bkb3duTWVudScpKSB7XG4gICAgICBpZiAoZHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgICBpZiAoZHJvcGRvd25NZW51LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVNb2JpbGVNZW51ID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBjcmVhdGUgY29udGVudCBjb250YWluZXJcbiAgY29uc3QgbW9iaWxlTWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9iaWxlTWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9iaWxlTWVudUNvbnRlbnQnLCAnY29udGVudCcsICdoaWRkZW4nKTtcbiAgbW9iaWxlTWVudUNvbnRlbnQuaWQgPSAnbW9iaWxlTWVudSc7XG5cbiAgLy8gY3JlYXRlIG1lbnUgdGl0bGVcbiAgY29uc3QgbW9iaWxlTWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbW9iaWxlTWVudVRpdGxlLmlubmVyVGV4dCA9ICdIb3Jpem9udGFsIHNjcm9sbGluZyBuYXYnO1xuXG4gIC8vIGNyZWF0ZSBtb2JpbGUgbWVudSBjb250YWluZXJcbiAgY29uc3QgbW9iaWxlTWVudVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgY29uc3QgbW9iaWxlTWVudUNvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBtb2JpbGVNZW51Q29udGFpbnRlci5jbGFzc0xpc3QuYWRkKCdtb2JpbGVNZW51Q29udGFpbmVyJyk7XG4gIC8vIG1ha2VzIHNjcm9sbHdoZWVsIGZ1bmN0aW9uYWwgd2l0aCBob3Jpem9udGFsIHNjcm9sbGluZ1xuICBtb2JpbGVNZW51Q29udGFpbnRlci5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG1vYmlsZU1lbnVDb250YWludGVyLnNjcm9sbExlZnQgKz0gZS5kZWx0YVk7XG4gIH0pO1xuXG4gIC8vIGNyZWF0ZSBtb2JpbGUgbWVudSBvcHRpb25zXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDIwOyBpKyspIHtcbiAgICBjb25zdCBtb2JpbGVNZW51T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBtb2JpbGVNZW51T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ21vYmlsZU1lbnVPcHRpb24nKTtcbiAgICBtb2JpbGVNZW51T3B0aW9uLmlubmVyVGV4dCA9IGBtb2JpbGUgb3B0aW9uICR7aX1gO1xuICAgIG1vYmlsZU1lbnVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBkZXNlbGVjdCBhbGwgbWVudSBpdGVtc1xuICAgICAgY29uc3QgbW9iaWxlTWVudUNvdW50ID0gbW9iaWxlTWVudUNvbnRhaW50ZXIuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vYmlsZU1lbnVDb3VudDsgaSsrKSB7XG4gICAgICAgIGlmIChtb2JpbGVNZW51Q29udGFpbnRlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykgPT09IHRydWUpIHtcbiAgICAgICAgICBtb2JpbGVNZW51Q29udGFpbnRlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBtYWtlIG5ldyBzZWxlY3Rpb25cbiAgICAgIG1vYmlsZU1lbnVPcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICB9KTtcbiAgICBtb2JpbGVNZW51Q29udGFpbnRlci5hcHBlbmRDaGlsZChtb2JpbGVNZW51T3B0aW9uKTtcbiAgfVxuXG4gIC8vIEFwcGVuZFxuICBtb2JpbGVNZW51Q29udGVudC5hcHBlbmRDaGlsZChtb2JpbGVNZW51VGl0bGUpO1xuICBtb2JpbGVNZW51VGFibGUuYXBwZW5kQ2hpbGQobW9iaWxlTWVudUNvbnRhaW50ZXIpO1xuICBtb2JpbGVNZW51Q29udGVudC5hcHBlbmRDaGlsZChtb2JpbGVNZW51VGFibGUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9iaWxlTWVudUNvbnRlbnQpO1xufTtcblxuY29uc3QgY3JlYXRlSW1hZ2VTY3JvbGxlciA9IChjb250YWluZXIpID0+IHtcbiAgY29uc3QgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcsICdoaWRkZW4nKTtcbiAgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIuaWQgPSAnaW1hZ2VTY3JvbGxlcic7XG5cbiAgY29uc3QgaW1hZ2VTY3JvbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZVNjcm9sbGVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlU2Nyb2xsZXInKTtcblxuICAvLyBhZGQgaW1hZ2VzXG4gIGFkZEltYWdlVG9TY3JvbGxlcihwbGFjZWhvbGRlckltZzEsIDEsIGltYWdlU2Nyb2xsZXIsICdWaWV3IG9mIERpYW1vbmQgSGVhZCAmIEhvbm9sdWx1LCBPYWh1Jyk7XG4gIGFkZEltYWdlVG9TY3JvbGxlcihwbGFjZWhvbGRlckltZzIsIDIsIGltYWdlU2Nyb2xsZXIsICdKdXJhc3NpYyBQYXJrIFZhbGxleSwgS3VhbG9hIFJhbmNoLCBPYWh1Jyk7XG4gIGFkZEltYWdlVG9TY3JvbGxlcihwbGFjZWhvbGRlckltZzMsIDMsIGltYWdlU2Nyb2xsZXIsICdSYWluYm93IG9uIE9haHUnKTtcbiAgYWRkSW1hZ2VUb1Njcm9sbGVyKHBsYWNlaG9sZGVySW1nNCwgNCwgaW1hZ2VTY3JvbGxlciwgJ1R1cnRsZSBvbiB0aGUgYmVhY2ggbmVhciBIYWxlaXdhLCBPYWh1Jyk7XG5cbiAgLy8gYWRkIHByZXZpb3VzIGJ1dHRvblxuICBjb25zdCBwcmV2aW91c0ltYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBwcmV2aW91c0ltYWdlQnRuLmNsYXNzTGlzdC5hZGQoJ3ByZXZpb3VzSW1hZ2VCdG4nKTtcbiAgcHJldmlvdXNJbWFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2VsZWN0SW1hZ2Uoc2xpZGVJbmRleCArPSAtMSk7IH0pO1xuICAvLyBkaXNwbGF5IHByZXZpb3VzIGFycm93XG4gIHByZXZpb3VzSW1hZ2VCdG4uaW5uZXJIVE1MID0gJyYjMTAwOTQ7JztcblxuICAvLyBhZGQgbmV4dCBidXR0b25cbiAgY29uc3QgbmV4dEltYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBuZXh0SW1hZ2VCdG4uY2xhc3NMaXN0LmFkZCgnbmV4dEltYWdlQnRuJyk7XG4gIG5leHRJbWFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2VsZWN0SW1hZ2Uoc2xpZGVJbmRleCArPSAxKTsgfSk7XG4gIC8vIGRpc3BsYXkgbmV4dCBhcnJvd1xuICBuZXh0SW1hZ2VCdG4uaW5uZXJIVE1MID0gJyYjMTAwOTU7JztcblxuICAvLyBhZGQgaW1hZ2Ugc2VsZWN0aW9uIGRvdHNcbiAgY29uc3Qgc2Nyb2xsZXJEb3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2Nyb2xsZXJEb3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZXJEb3RDb250YWluZXInKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgY29uc3QgbmV3RG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5ld0RvdC5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlckRvdCcpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICBuZXdEb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNlbGVjdEltYWdlKHNsaWRlSW5kZXggPSBpKTsgfSk7XG4gICAgc2Nyb2xsZXJEb3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RG90KTtcbiAgfVxuXG4gIC8vIGFwcGVuZFxuICBpbWFnZVNjcm9sbGVyLmFwcGVuZENoaWxkKHByZXZpb3VzSW1hZ2VCdG4pO1xuICBpbWFnZVNjcm9sbGVyLmFwcGVuZENoaWxkKG5leHRJbWFnZUJ0bik7XG4gIGltYWdlU2Nyb2xsZXJDb250YWludGVyLmFwcGVuZENoaWxkKGltYWdlU2Nyb2xsZXIpO1xuICBpbWFnZVNjcm9sbGVyQ29udGFpbnRlci5hcHBlbmRDaGlsZChzY3JvbGxlckRvdENvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZVNjcm9sbGVyQ29udGFpbnRlcik7XG59O1xuXG4vLyBGb3JtIGZ1bmN0aW9uc1xuXG4vLyBDb3VudHJ5IG5hbWVzIG9iamVjdCB1c2luZyAyLWxldHRlciBjb3VudHJ5IGNvZGVzIHRvIHJlZmVyZW5jZSBjb3VudHJ5IG5hbWVcbi8vIElTTyAzMTY2IEFscGhhLTIgRm9ybWF0OiBbMiBsZXR0ZXIgQ291bnRyeSBDb2RlXTogW0NvdW50cnkgTmFtZV1cbi8vIFNvcnRlZCBhbHBoYWJldGljYWwgYnkgY291bnRyeSBuYW1lIChzcGVjaWFsIGNoYXJhY3RlcnMgb24gYm90dG9tKVxuY29uc3QgY291bnRyeUxpc3RBbHBoYTIgPSB7XG4gIEFGOiAnQWZnaGFuaXN0YW4nLFxuICBBTDogJ0FsYmFuaWEnLFxuICBEWjogJ0FsZ2VyaWEnLFxuICBBUzogJ0FtZXJpY2FuIFNhbW9hJyxcbiAgQUQ6ICdBbmRvcnJhJyxcbiAgQU86ICdBbmdvbGEnLFxuICBBSTogJ0FuZ3VpbGxhJyxcbiAgQVE6ICdBbnRhcmN0aWNhJyxcbiAgQUc6ICdBbnRpZ3VhIGFuZCBCYXJidWRhJyxcbiAgQVI6ICdBcmdlbnRpbmEnLFxuICBBTTogJ0FybWVuaWEnLFxuICBBVzogJ0FydWJhJyxcbiAgQVU6ICdBdXN0cmFsaWEnLFxuICBBVDogJ0F1c3RyaWEnLFxuICBBWjogJ0F6ZXJiYWlqYW4nLFxuICBCUzogJ0JhaGFtYXMgKHRoZSknLFxuICBCSDogJ0JhaHJhaW4nLFxuICBCRDogJ0JhbmdsYWRlc2gnLFxuICBCQjogJ0JhcmJhZG9zJyxcbiAgQlk6ICdCZWxhcnVzJyxcbiAgQkU6ICdCZWxnaXVtJyxcbiAgQlo6ICdCZWxpemUnLFxuICBCSjogJ0JlbmluJyxcbiAgQk06ICdCZXJtdWRhJyxcbiAgQlQ6ICdCaHV0YW4nLFxuICBCTzogJ0JvbGl2aWEgKFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YpJyxcbiAgQlE6ICdCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYScsXG4gIEJBOiAnQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYScsXG4gIEJXOiAnQm90c3dhbmEnLFxuICBCVjogJ0JvdXZldCBJc2xhbmQnLFxuICBCUjogJ0JyYXppbCcsXG4gIElPOiAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5ICh0aGUpJyxcbiAgQk46ICdCcnVuZWkgRGFydXNzYWxhbScsXG4gIEJHOiAnQnVsZ2FyaWEnLFxuICBCRjogJ0J1cmtpbmEgRmFzbycsXG4gIEJJOiAnQnVydW5kaScsXG4gIENWOiAnQ2FibyBWZXJkZScsXG4gIEtIOiAnQ2FtYm9kaWEnLFxuICBDTTogJ0NhbWVyb29uJyxcbiAgQ0E6ICdDYW5hZGEnLFxuICBLWTogJ0NheW1hbiBJc2xhbmRzICh0aGUpJyxcbiAgQ0Y6ICdDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMgKHRoZSknLFxuICBURDogJ0NoYWQnLFxuICBDTDogJ0NoaWxlJyxcbiAgQ046ICdDaGluYScsXG4gIENYOiAnQ2hyaXN0bWFzIElzbGFuZCcsXG4gIENDOiAnQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMgKHRoZSknLFxuICBDTzogJ0NvbG9tYmlhJyxcbiAgS006ICdDb21vcm9zICh0aGUpJyxcbiAgQ0Q6ICdDb25nbyAodGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlKScsXG4gIENHOiAnQ29uZ28gKHRoZSknLFxuICBDSzogJ0Nvb2sgSXNsYW5kcyAodGhlKScsXG4gIENSOiAnQ29zdGEgUmljYScsXG4gIEhSOiAnQ3JvYXRpYScsXG4gIENVOiAnQ3ViYScsXG4gIENXOiAnQ3VyYcOnYW8nLFxuICBDWTogJ0N5cHJ1cycsXG4gIENaOiAnQ3plY2hpYScsXG4gIENJOiBcIkPDtHRlIGQnSXZvaXJlXCIsXG4gIERLOiAnRGVubWFyaycsXG4gIERKOiAnRGppYm91dGknLFxuICBETTogJ0RvbWluaWNhJyxcbiAgRE86ICdEb21pbmljYW4gUmVwdWJsaWMgKHRoZSknLFxuICBFQzogJ0VjdWFkb3InLFxuICBFRzogJ0VneXB0JyxcbiAgU1Y6ICdFbCBTYWx2YWRvcicsXG4gIEdROiAnRXF1YXRvcmlhbCBHdWluZWEnLFxuICBFUjogJ0VyaXRyZWEnLFxuICBFRTogJ0VzdG9uaWEnLFxuICBTWjogJ0Vzd2F0aW5pJyxcbiAgRVQ6ICdFdGhpb3BpYScsXG4gIEZLOiAnRmFsa2xhbmQgSXNsYW5kcyAodGhlKSBbTWFsdmluYXNdJyxcbiAgRk86ICdGYXJvZSBJc2xhbmRzICh0aGUpJyxcbiAgRko6ICdGaWppJyxcbiAgRkk6ICdGaW5sYW5kJyxcbiAgRlI6ICdGcmFuY2UnLFxuICBHRjogJ0ZyZW5jaCBHdWlhbmEnLFxuICBQRjogJ0ZyZW5jaCBQb2x5bmVzaWEnLFxuICBURjogJ0ZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllcyAodGhlKScsXG4gIEdBOiAnR2Fib24nLFxuICBHTTogJ0dhbWJpYSAodGhlKScsXG4gIEdFOiAnR2VvcmdpYScsXG4gIERFOiAnR2VybWFueScsXG4gIEdIOiAnR2hhbmEnLFxuICBHSTogJ0dpYnJhbHRhcicsXG4gIEdSOiAnR3JlZWNlJyxcbiAgR0w6ICdHcmVlbmxhbmQnLFxuICBHRDogJ0dyZW5hZGEnLFxuICBHUDogJ0d1YWRlbG91cGUnLFxuICBHVTogJ0d1YW0nLFxuICBHVDogJ0d1YXRlbWFsYScsXG4gIEdHOiAnR3Vlcm5zZXknLFxuICBHTjogJ0d1aW5lYScsXG4gIEdXOiAnR3VpbmVhLUJpc3NhdScsXG4gIEdZOiAnR3V5YW5hJyxcbiAgSFQ6ICdIYWl0aScsXG4gIEhNOiAnSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzJyxcbiAgVkE6ICdIb2x5IFNlZSAodGhlKScsXG4gIEhOOiAnSG9uZHVyYXMnLFxuICBISzogJ0hvbmcgS29uZycsXG4gIEhVOiAnSHVuZ2FyeScsXG4gIElTOiAnSWNlbGFuZCcsXG4gIElOOiAnSW5kaWEnLFxuICBJRDogJ0luZG9uZXNpYScsXG4gIElSOiAnSXJhbiAoSXNsYW1pYyBSZXB1YmxpYyBvZiknLFxuICBJUTogJ0lyYXEnLFxuICBJRTogJ0lyZWxhbmQnLFxuICBJTTogJ0lzbGUgb2YgTWFuJyxcbiAgSUw6ICdJc3JhZWwnLFxuICBJVDogJ0l0YWx5JyxcbiAgSk06ICdKYW1haWNhJyxcbiAgSlA6ICdKYXBhbicsXG4gIEpFOiAnSmVyc2V5JyxcbiAgSk86ICdKb3JkYW4nLFxuICBLWjogJ0themFraHN0YW4nLFxuICBLRTogJ0tlbnlhJyxcbiAgS0k6ICdLaXJpYmF0aScsXG4gIEtQOiBcIktvcmVhICh0aGUgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZilcIixcbiAgS1I6ICdLb3JlYSAodGhlIFJlcHVibGljIG9mKScsXG4gIEtXOiAnS3V3YWl0JyxcbiAgS0c6ICdLeXJneXpzdGFuJyxcbiAgTEE6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWMgKHRoZSlcIixcbiAgTFY6ICdMYXR2aWEnLFxuICBMQjogJ0xlYmFub24nLFxuICBMUzogJ0xlc290aG8nLFxuICBMUjogJ0xpYmVyaWEnLFxuICBMWTogJ0xpYnlhJyxcbiAgTEk6ICdMaWVjaHRlbnN0ZWluJyxcbiAgTFQ6ICdMaXRodWFuaWEnLFxuICBMVTogJ0x1eGVtYm91cmcnLFxuICBNTzogJ01hY2FvJyxcbiAgTUc6ICdNYWRhZ2FzY2FyJyxcbiAgTVc6ICdNYWxhd2knLFxuICBNWTogJ01hbGF5c2lhJyxcbiAgTVY6ICdNYWxkaXZlcycsXG4gIE1MOiAnTWFsaScsXG4gIE1UOiAnTWFsdGEnLFxuICBNSDogJ01hcnNoYWxsIElzbGFuZHMgKHRoZSknLFxuICBNUTogJ01hcnRpbmlxdWUnLFxuICBNUjogJ01hdXJpdGFuaWEnLFxuICBNVTogJ01hdXJpdGl1cycsXG4gIFlUOiAnTWF5b3R0ZScsXG4gIE1YOiAnTWV4aWNvJyxcbiAgRk06ICdNaWNyb25lc2lhIChGZWRlcmF0ZWQgU3RhdGVzIG9mKScsXG4gIE1EOiAnTW9sZG92YSAodGhlIFJlcHVibGljIG9mKScsXG4gIE1DOiAnTW9uYWNvJyxcbiAgTU46ICdNb25nb2xpYScsXG4gIE1FOiAnTW9udGVuZWdybycsXG4gIE1TOiAnTW9udHNlcnJhdCcsXG4gIE1BOiAnTW9yb2NjbycsXG4gIE1aOiAnTW96YW1iaXF1ZScsXG4gIE1NOiAnTXlhbm1hcicsXG4gIE5BOiAnTmFtaWJpYScsXG4gIE5SOiAnTmF1cnUnLFxuICBOUDogJ05lcGFsJyxcbiAgTkw6ICdOZXRoZXJsYW5kcyAodGhlKScsXG4gIE5DOiAnTmV3IENhbGVkb25pYScsXG4gIE5aOiAnTmV3IFplYWxhbmQnLFxuICBOSTogJ05pY2FyYWd1YScsXG4gIE5FOiAnTmlnZXIgKHRoZSknLFxuICBORzogJ05pZ2VyaWEnLFxuICBOVTogJ05pdWUnLFxuICBORjogJ05vcmZvbGsgSXNsYW5kJyxcbiAgTVA6ICdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMgKHRoZSknLFxuICBOTzogJ05vcndheScsXG4gIE9NOiAnT21hbicsXG4gIFBLOiAnUGFraXN0YW4nLFxuICBQVzogJ1BhbGF1JyxcbiAgUFM6ICdQYWxlc3RpbmUsIFN0YXRlIG9mJyxcbiAgUEE6ICdQYW5hbWEnLFxuICBQRzogJ1BhcHVhIE5ldyBHdWluZWEnLFxuICBQWTogJ1BhcmFndWF5JyxcbiAgUEU6ICdQZXJ1JyxcbiAgUEg6ICdQaGlsaXBwaW5lcyAodGhlKScsXG4gIFBOOiAnUGl0Y2Fpcm4nLFxuICBQTDogJ1BvbGFuZCcsXG4gIFBUOiAnUG9ydHVnYWwnLFxuICBQUjogJ1B1ZXJ0byBSaWNvJyxcbiAgUUE6ICdRYXRhcicsXG4gIE1LOiAnUmVwdWJsaWMgb2YgTm9ydGggTWFjZWRvbmlhJyxcbiAgUk86ICdSb21hbmlhJyxcbiAgUlU6ICdSdXNzaWFuIEZlZGVyYXRpb24gKHRoZSknLFxuICBSVzogJ1J3YW5kYScsXG4gIFJFOiAnUsOpdW5pb24nLFxuICBCTDogJ1NhaW50IEJhcnRow6lsZW15JyxcbiAgU0g6ICdTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYScsXG4gIEtOOiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJyxcbiAgTEM6ICdTYWludCBMdWNpYScsXG4gIE1GOiAnU2FpbnQgTWFydGluIChGcmVuY2ggcGFydCknLFxuICBQTTogJ1NhaW50IFBpZXJyZSBhbmQgTWlxdWVsb24nLFxuICBWQzogJ1NhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzJyxcbiAgV1M6ICdTYW1vYScsXG4gIFNNOiAnU2FuIE1hcmlubycsXG4gIFNUOiAnU2FvIFRvbWUgYW5kIFByaW5jaXBlJyxcbiAgU0E6ICdTYXVkaSBBcmFiaWEnLFxuICBTTjogJ1NlbmVnYWwnLFxuICBSUzogJ1NlcmJpYScsXG4gIFNDOiAnU2V5Y2hlbGxlcycsXG4gIFNMOiAnU2llcnJhIExlb25lJyxcbiAgU0c6ICdTaW5nYXBvcmUnLFxuICBTWDogJ1NpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydCknLFxuICBTSzogJ1Nsb3Zha2lhJyxcbiAgU0k6ICdTbG92ZW5pYScsXG4gIFNCOiAnU29sb21vbiBJc2xhbmRzJyxcbiAgU086ICdTb21hbGlhJyxcbiAgWkE6ICdTb3V0aCBBZnJpY2EnLFxuICBHUzogJ1NvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzJyxcbiAgU1M6ICdTb3V0aCBTdWRhbicsXG4gIEVTOiAnU3BhaW4nLFxuICBMSzogJ1NyaSBMYW5rYScsXG4gIFNEOiAnU3VkYW4gKHRoZSknLFxuICBTUjogJ1N1cmluYW1lJyxcbiAgU0o6ICdTdmFsYmFyZCBhbmQgSmFuIE1heWVuJyxcbiAgU0U6ICdTd2VkZW4nLFxuICBDSDogJ1N3aXR6ZXJsYW5kJyxcbiAgU1k6ICdTeXJpYW4gQXJhYiBSZXB1YmxpYycsXG4gIFRXOiAnVGFpd2FuJyxcbiAgVEo6ICdUYWppa2lzdGFuJyxcbiAgVFo6ICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mJyxcbiAgVEg6ICdUaGFpbGFuZCcsXG4gIFRMOiAnVGltb3ItTGVzdGUnLFxuICBURzogJ1RvZ28nLFxuICBUSzogJ1Rva2VsYXUnLFxuICBUTzogJ1RvbmdhJyxcbiAgVFQ6ICdUcmluaWRhZCBhbmQgVG9iYWdvJyxcbiAgVE46ICdUdW5pc2lhJyxcbiAgVFI6ICdUdXJrZXknLFxuICBUTTogJ1R1cmttZW5pc3RhbicsXG4gIFRDOiAnVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzICh0aGUpJyxcbiAgVFY6ICdUdXZhbHUnLFxuICBVRzogJ1VnYW5kYScsXG4gIFVBOiAnVWtyYWluZScsXG4gIEFFOiAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMgKHRoZSknLFxuICBHQjogJ1VuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmQgKHRoZSknLFxuICBVTTogJ1VuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kcyAodGhlKScsXG4gIFVTOiAnVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhICh0aGUpJyxcbiAgVVk6ICdVcnVndWF5JyxcbiAgVVo6ICdVemJla2lzdGFuJyxcbiAgVlU6ICdWYW51YXR1JyxcbiAgVkU6ICdWZW5lenVlbGEgKEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YpJyxcbiAgVk46ICdWaWV0IE5hbScsXG4gIFZHOiAnVmlyZ2luIElzbGFuZHMgKEJyaXRpc2gpJyxcbiAgVkk6ICdWaXJnaW4gSXNsYW5kcyAoVS5TLiknLFxuICBXRjogJ1dhbGxpcyBhbmQgRnV0dW5hJyxcbiAgRUg6ICdXZXN0ZXJuIFNhaGFyYScsXG4gIFlFOiAnWWVtZW4nLFxuICBaTTogJ1phbWJpYScsXG4gIFpXOiAnWmltYmFid2UnLFxuICBBWDogJ8OFbGFuZCBJc2xhbmRzJyxcbn07XG5cbmNvbnN0IHZhbGlkYXRlRW1haWwgPSAoKSA9PiB7XG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcbiAgaWYgKGVtYWlsSW5wdXQudmFsaWRpdHkudHlwZU1pc21hdGNoIHx8IGVtYWlsSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgZW1haWxJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnRW50ZXIgYSB2YWxpZCBlbWFpbCcpO1xuICAgIGVtYWlsSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgfSBlbHNlIHtcbiAgICBlbWFpbElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlRW1haWxJbnB1dCA9IChjb250YWluZXIpID0+IHtcbiAgLy8gZW1haWwgY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gIC8vIGVtYWlsIGxhYmVsXG4gIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBlbWFpbExhYmVsLmZvciA9ICdlbWFpbCc7XG4gIGVtYWlsTGFiZWwuaW5uZXJUZXh0ID0gJ0VtYWlsJztcbiAgLy8gZW1haWwgaW5wdXRcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGVtYWlsSW5wdXQuaWQgPSAnZW1haWwnO1xuICBlbWFpbElucHV0Lm5hbWUgPSAnZW1haWwnO1xuICBlbWFpbElucHV0LnR5cGUgPSAnZW1haWwnO1xuICBlbWFpbElucHV0LnBsYWNlaG9sZGVyID0gJ2phbmVAZXhhbXBsZS5jb20nO1xuICAvLyB2YWxpZGl0eSBjaGVja1xuICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdmFsaWRhdGVFbWFpbCgpKTtcbiAgLy8gYXBwZW5kIGVtYWlsXG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlQ291bnRyeUlucHV0ID0gKCkgPT4ge1xuICBjb25zdCBjb3VudHJ5U2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnknKTtcbiAgaWYgKGNvdW50cnlTZWxlY3Rpb24udmFsdWUgPT09ICcnKSB7XG4gICAgY291bnRyeVNlbGVjdGlvbi5zZXRDdXN0b21WYWxpZGl0eSgnV2hpY2ggY291bnRyeSBhcmUgeW91IGluPycpO1xuICAgIGNvdW50cnlTZWxlY3Rpb24ucmVwb3J0VmFsaWRpdHkoKTtcbiAgfSBlbHNlIHtcbiAgICBjb3VudHJ5U2VsZWN0aW9uLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlQ291bnRyeUlucHV0ID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBjb3VudHJ5IGNvbnRhaW5lclxuICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xuICAvLyBjb3VudHJ5IGxhYmVsXG4gIGNvbnN0IGNvdW50cnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvdW50cnlMYWJlbC5mb3IgPSAnY291bnRyeSc7XG4gIGNvdW50cnlMYWJlbC5pbm5lclRleHQgPSAnQ291bnRyeSc7XG4gIC8vIGNvdW50cnkgc2VsZWN0aW9uXG4gIGNvbnN0IGNvdW50cnlTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY291bnRyeVNlbGVjdGlvbi5pZCA9ICdjb3VudHJ5JztcbiAgY291bnRyeVNlbGVjdGlvbi5uYW1lID0gJ2NvdW50cnknO1xuICAvLyBjb3VudHJ5IG9wdGlvbnNcbiAgY29uc3QgYmxhbmtPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgYmxhbmtPcHRpb24udmFsdWUgPSAnJztcbiAgYmxhbmtPcHRpb24uaW5uZXJUZXh0ID0gJyc7XG4gIGNvdW50cnlTZWxlY3Rpb24uYXBwZW5kQ2hpbGQoYmxhbmtPcHRpb24pO1xuICBPYmplY3Qua2V5cyhjb3VudHJ5TGlzdEFscGhhMikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coa2V5LCBjb3VudHJ5TGlzdEFscGhhMltrZXldKTtcbiAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBuZXdPcHRpb24udmFsdWUgPSBrZXk7XG4gICAgbmV3T3B0aW9uLmlubmVyVGV4dCA9IGNvdW50cnlMaXN0QWxwaGEyW2tleV07XG4gICAgY291bnRyeVNlbGVjdGlvbi5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuICB9KTtcbiAgLy8gdmFsaWRpdHkgY2hlY2tcbiAgY291bnRyeVNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHZhbGlkYXRlQ291bnRyeUlucHV0KCkpO1xuICAvLyBhcHBlbmQgY291bnRyeSBpbnB1dFxuICBmb3JtUm93LmFwcGVuZENoaWxkKGNvdW50cnlMYWJlbCk7XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoY291bnRyeVNlbGVjdGlvbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlWmlwQ29kZSA9ICgpID0+IHtcbiAgY29uc3QgemlwQ29kZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ppcGNvZGUnKTtcbiAgaWYgKC9eXFxkezV9KC1cXGR7NH0pPyQvLnRlc3QoemlwQ29kZUlucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICB6aXBDb2RlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0VudGVyIGEgdmFsaWQgemlwY29kZScpO1xuICAgIHppcENvZGVJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICB9IGVsc2Uge1xuICAgIHppcENvZGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZVppcENvZGVJbnB1dCA9IChjb250YWluZXIpID0+IHtcbiAgLy8gemlwIGNvZGUgY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gIC8vIHppcCBjb2RlIGxhYmVsXG4gIGNvbnN0IHppcENvZGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHppcENvZGVMYWJlbC5mb3IgPSAnemlwY29kZSc7XG4gIHppcENvZGVMYWJlbC5pbm5lclRleHQgPSAnWmlwIGNvZGUnO1xuICAvLyB6aXAgY29kZSBpbnB1dFxuICBjb25zdCB6aXBDb2RlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB6aXBDb2RlSW5wdXQuaWQgPSAnemlwY29kZSc7XG4gIHppcENvZGVJbnB1dC5uYW1lID0gJ3ppcGNvZGUnO1xuICAvLyB2YWxpZGl0eSBjaGVja1xuICB6aXBDb2RlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB2YWxpZGF0ZVppcENvZGUoKSk7XG4gIC8vIGFwcGVuZCB6aXAgY29kZSBpbnB1dFxuICBmb3JtUm93LmFwcGVuZENoaWxkKHppcENvZGVMYWJlbCk7XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoemlwQ29kZUlucHV0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xufTtcblxuY29uc3QgdmFsaWRhdGVQYXNzd29yZCA9ICgpID0+IHtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xuXG4gIC8vIFZhbGlkYXRlIGxvd2VyY2FzZSBsZXR0ZXJzXG4gIGlmICgvW2Etel0vZy50ZXN0KHBhc3N3b3JkSW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xuICAgIHBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgY29udGFpbiBsb3dlcmNhc2UgbGV0dGVyJyk7XG4gICAgcGFzc3dvcmRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAvLyBWYWxpZGF0ZSBjYXBpdGFsIGxldHRlcnNcbiAgfSBlbHNlIGlmICgvW0EtWl0vZy50ZXN0KHBhc3N3b3JkSW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xuICAgIHBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgY29udGFpbiB1cHBlcmNhc2UgbGV0dGVyJyk7XG4gICAgcGFzc3dvcmRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAvLyBWYWxpZGF0ZSBudW1iZXJzXG4gIH0gZWxzZSBpZiAoL1swLTldL2cudGVzdChwYXNzd29yZElucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICBwYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGNvbnRhaW4gYSBudW1iZXInKTtcbiAgICBwYXNzd29yZElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gIC8vIFZhbGlkYXRlIGxlbmd0aFxuICB9IGVsc2UgaWYgKHBhc3N3b3JkSW5wdXQudmFsdWUubGVuZ3RoIDwgOCkge1xuICAgIHBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzJyk7XG4gICAgcGFzc3dvcmRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICB9IGVsc2Uge1xuICAgIHBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVQYXNzd29yZElucHV0ID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBwYXNzd29yZCBjb250YWluZXJcbiAgY29uc3QgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtUm93LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcbiAgLy8gcGFzc3dvcmQgbGFiZWxcbiAgY29uc3QgcGFzc3dvcmRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHBhc3N3b3JkTGFiZWwuZm9yID0gJ3Bhc3N3b3JkJztcbiAgcGFzc3dvcmRMYWJlbC5pbm5lclRleHQgPSAnUGFzc3dvcmQnO1xuICAvLyBwYXNzd29yZCBpbnB1dFxuICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcGFzc3dvcmRJbnB1dC5pZCA9ICdwYXNzd29yZCc7XG4gIHBhc3N3b3JkSW5wdXQubmFtZSA9ICdwYXNzd29yZCc7XG4gIHBhc3N3b3JkSW5wdXQudHlwZSA9ICdwYXNzd29yZCc7XG4gIC8vIHZhbGlkaXR5IGNoZWNrXG4gIHBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB2YWxpZGF0ZVBhc3N3b3JkKCkpO1xuICAvLyBhcHBlbmQgcGFzc3dvcmQgaW5wdXRcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChwYXNzd29yZExhYmVsKTtcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChwYXNzd29yZElucHV0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xufTtcblxuY29uc3QgY29uZmlybVBhc3N3b3JkID0gKCkgPT4ge1xuICBjb25zdCBjb25maXJtUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZENvbmZpcm1hdGlvbicpO1xuICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJykudmFsdWU7XG4gIGlmIChjb25maXJtUGFzc3dvcmRJbnB1dC52YWx1ZSAhPT0gcGFzc3dvcmRJbnB1dCkge1xuICAgIGNvbmZpcm1QYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdEb2VzIG5vdCBtYXRjaCcpO1xuICAgIGNvbmZpcm1QYXNzd29yZElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlybVBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVDb25maXJtUGFzc3dvcmRJbnB1dCA9IChjb250YWluZXIpID0+IHtcbiAgLy8gY29uZmlybSBwYXNzd29yZCBjb250YWluZXJcbiAgY29uc3QgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtUm93LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcbiAgLy8gY29uZmlybSBwYXNzd29yZCBsYWJlbFxuICBjb25zdCBjb25maXJtUGFzc3dvcmRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbmZpcm1QYXNzd29yZExhYmVsLmZvciA9ICdwYXNzd29yZENvbmZpcm1hdGlvbic7XG4gIGNvbmZpcm1QYXNzd29yZExhYmVsLmlubmVyVGV4dCA9ICdDb25maXJtIHBhc3N3b3JkJztcbiAgLy8gY29ubmZpcm0gcGFzc3dvcmQgaW5wdXRcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25maXJtUGFzc3dvcmRJbnB1dC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgY29uZmlybVBhc3N3b3JkSW5wdXQuaWQgPSAncGFzc3dvcmRDb25maXJtYXRpb24nO1xuICBjb25maXJtUGFzc3dvcmRJbnB1dC5uYW1lID0gJ3Bhc3N3b3JkQ29uZmlybWF0aW9uJztcbiAgLy8gdmFsaWRpdHkgY2hlY2tcbiAgY29uZmlybVBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBjb25maXJtUGFzc3dvcmQoKSk7XG4gIC8vIGFwcGVuZCBjb25maXJtIHBhc3N3b3JkIGlucHV0XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoY29uZmlybVBhc3N3b3JkTGFiZWwpO1xuICBmb3JtUm93LmFwcGVuZENoaWxkKGNvbmZpcm1QYXNzd29yZElucHV0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xufTtcblxuY29uc3Qgc3VibWl0Rm9ybSA9IChlKSA9PiB7XG4gIC8vIHByZXZlbnQgYWN0dWFsIGZvcm0gc3VibWlzc2lvblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIHZhbGlkYXRlIGZvcm0gZmllbGRzXG4gIGNvbmZpcm1QYXNzd29yZCgpO1xuICB2YWxpZGF0ZVBhc3N3b3JkKCk7XG4gIHZhbGlkYXRlWmlwQ29kZSgpO1xuICB2YWxpZGF0ZUNvdW50cnlJbnB1dCgpO1xuICB2YWxpZGF0ZUVtYWlsKCk7XG59O1xuXG5jb25zdCBjcmVhdGVTdWJtaXRCdXR0b24gPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIHN1Ym1pdCBidXR0b24gY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gIC8vIHN1Ym1pdCBidXR0b25cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdG4nKTtcbiAgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuICAvLyBldmVudCBsaXN0ZW5lclxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gc3VibWl0Rm9ybShlKSk7XG4gIC8vIGFwcGVuZCBzdWJtaXQgYnV0dG9uXG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xufTtcblxuY29uc3QgY3JlYXRlVmFsaWRhdGlvbkZvcm0gPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIGNyZWF0ZSBmb3JtIHZhbGlkYXRpb24gY29udGFpbmVyXG4gIGNvbnN0IHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgndmFsaWRhdGlvbkZvcm1Db250YWludGVyJywgJ2NvbnRlbnQnLCAnaGlkZGVuJyk7XG4gIHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlci5pZCA9ICd2YWxpZGF0aW9uRm9ybSc7XG5cbiAgLy8gY3JlYXRlIGZvcm0gaGVhZGVyXG4gIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUhlYWRlci5jbGFzc0xpc3QuYWRkKCdmb3JtSGVhZGVyJyk7XG5cbiAgLy8gZm9ybSB0aXRsZVxuICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBmb3JtVGl0bGUuaW5uZXJUZXh0ID0gJ0V4YW1wbGUgZm9ybSc7XG5cbiAgLy8gY3JlYXRlIGZvcm1cbiAgY29uc3QgdmFsaWRhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHZhbGlkYXRpb25Gb3JtLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb25Gb3JtJyk7XG4gIHZhbGlkYXRpb25Gb3JtLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuXG4gIGNyZWF0ZUVtYWlsSW5wdXQodmFsaWRhdGlvbkZvcm0pO1xuICBjcmVhdGVDb3VudHJ5SW5wdXQodmFsaWRhdGlvbkZvcm0pO1xuICBjcmVhdGVaaXBDb2RlSW5wdXQodmFsaWRhdGlvbkZvcm0pO1xuICBjcmVhdGVQYXNzd29yZElucHV0KHZhbGlkYXRpb25Gb3JtKTtcbiAgY3JlYXRlQ29uZmlybVBhc3N3b3JkSW5wdXQodmFsaWRhdGlvbkZvcm0pO1xuICBjcmVhdGVTdWJtaXRCdXR0b24odmFsaWRhdGlvbkZvcm0pO1xuXG4gIC8vIGFwcGVuZFxuICBmb3JtSGVhZGVyLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG4gIHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlci5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcbiAgdmFsaWRhdGlvbkZvcm1Db250YWludGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICB2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQodmFsaWRhdGlvbkZvcm0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmFsaWRhdGlvbkZvcm1Db250YWludGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFQSVByYWN0aWNlID0gKGNvbnRhaW5lcikgPT4ge1xuICBjb25zdCBBUElQcmFjdGljZUNvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgQVBJUHJhY3RpY2VDb250YWludGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnLCAnaGlkZGVuJyk7XG4gIEFQSVByYWN0aWNlQ29udGFpbnRlci5pZCA9ICdBUElQcmFjdGljZSc7XG5cbiAgLy8gY3JlYXRlIEFQSSBidXR0b25cbiAgY29uc3QgQVBJUHJhY3RpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgQVBJUHJhY3RpY2UuY2xhc3NMaXN0LmFkZCgnQVBJUHJhY3RpY2UnKTtcbiAgQVBJUHJhY3RpY2UuaW5uZXJUZXh0ID0gJ2Ryb3Bkb3duJztcbiAgQVBJUHJhY3RpY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgQVBJUHJhY3RpY2UuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgfSk7XG5cbiAgLy8gQXBwZW5kXG4gIEFQSVByYWN0aWNlQ29udGFpbnRlci5hcHBlbmRDaGlsZChBUElQcmFjdGljZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChBUElQcmFjdGljZUNvbnRhaW50ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGVudENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudENvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudENvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudENvbnRhaW5lcicpO1xuXG4gIGNyZWF0ZURyb3Bkb3duTWVudShjb250ZW50Q29udGFpbnRlcik7XG4gIGNyZWF0ZU1vYmlsZU1lbnUoY29udGVudENvbnRhaW50ZXIpO1xuICBjcmVhdGVJbWFnZVNjcm9sbGVyKGNvbnRlbnRDb250YWludGVyKTtcbiAgY3JlYXRlVmFsaWRhdGlvbkZvcm0oY29udGVudENvbnRhaW50ZXIpO1xuICBjcmVhdGVBUElQcmFjdGljZShjb250ZW50Q29udGFpbnRlcik7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbnRlcik7XG4gIGxvb3BJbWFnZVNjcm9sbGVyKCk7XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gamNhbXBiZWxsNTdgO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcnO1xuICBnaXRodWJMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuXG4gIGNvbnN0IG5ld0dpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbmV3R2l0aHViSWNvbi5zcmMgPSBnaXRodWJJY29uO1xuICBuZXdHaXRodWJJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2l0aHViJyk7XG5cbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChuZXdHaXRodWJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlTWFpbk1lbnUoKTtcbiAgY3JlYXRlQ29udGVudENvbnRhaW5lcigpO1xuICBjcmVhdGVGb290ZXIoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemU7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6IHJnYig0NSwgNDUsIDQ1KTtcXG4gICAgLS1saWdodC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICAtLWFjdGl2ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICAtLWVycm9yIDogZGFya3JlZFxcbn1cXG5cXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxcblxcbmh0bWwge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcblxcbmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXI+aDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogTWVudSBzdHlsaW5nICovXFxuXFxuLm1haW5NZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gICAgcGFkZGluZzogMCAxNXZ3O1xcbn1cXG5cXG4ubWVudUl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gICAgbWFyZ2luOiAwLjZyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5tZW51SXRlbTpob3ZlcixcXG4uZHJvcGRvd25NZW51OmhvdmVyLFxcbi5kcm9wZG93bk9wdGlvbjpob3ZlciwgXFxuLm1vYmlsZU1lbnVPcHRpb246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLm1lbnVJdGVtOmFjdGl2ZSxcXG4uZHJvcGRvd25NZW51OmFjdGl2ZSxcXG4uZHJvcGRvd25PcHRpb246YWN0aXZlLFxcbi5tb2JpbGVNZW51T3B0aW9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZSk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogQ29udGVudCBzdHlsaW5nICovXFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2FsYyhjZW50ZXIgLSAzMCUpXFxufVxcblxcblxcblxcblxcblxcbi8qIERyb3Bkb3duIG1lbnUgc3R5bGluZyAqL1xcblxcbi5kcm9wZG93bk1lbnUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZHJvcGRvd25Db250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYygxMDAlICsgMnB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmRyb3Bkb3duT3B0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcblxcblxcblxcblxcbi8qIE1vYmlsZSBtZW51IHN0eWxpbmcgKi9cXG5cXG4ubW9iaWxlTWVudUNvbnRlbnQge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9iaWxlTWVudUNvbnRlbnQ+aDMge1xcbiAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubW9iaWxlTWVudUNvbnRlbnQ+dGFibGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9iaWxlTWVudUNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAvKiBlbmFibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbn1cXG5cXG4vKiBoaWRlIHNjcm9sbGJhciwgcmV0YWluIGZ1bmN0aW9uICovXFxuLm1vYmlsZU1lbnVDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vYmlsZU1lbnVPcHRpb24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuXFxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogSW1hZ2Ugc2Nyb2xsZXIgc3R5bGluZyAqL1xcblxcbi5zY3JvbGxlckltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIHNsaWRlc2hvdyBjb250YWluZXIgKi9cXG4uaW1hZ2VTY3JvbGxlciB7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLyogaGlkZSBpbWFnZXMgZGVmYXVsdCAqL1xcbi5pbWFnZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIG5leHQgJiBwcmV2aW91cyBidXR0b25zICovXFxuLnByZXZpb3VzSW1hZ2VCdG4sIC5uZXh0SW1hZ2VCdG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gICAgLyogdXNlci1zZWxlY3Q6IG5vbmU7ICovXFxufVxcblxcbi8qIHBvc2l0aW9uIG5leHQgYnV0dG9uIG9uIHRoZSByaWdodCAqL1xcbi5uZXh0SW1hZ2VCdG4ge1xcbiAgICByaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxufVxcblxcbi8qIGFkZCBob3ZlciBlZmZlY3QgKi9cXG4ucHJldmlvdXNJbWFnZUJ0bjpob3ZlciwgLm5leHRJbWFnZUJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKVxcbn1cXG5cXG4vKiBjYXB0aW9uIHRleHQgKi9cXG4uaW1hZ2VDYXB0aW9uIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogaW1hZ2UgbnVtYmVyICovXFxuLmltYWdlTnVtYmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi8qIHNjcm9sbGVyIGRvdHMgKi9cXG4uc2Nyb2xsZXJEb3RDb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG59XFxuXFxuLnNjcm9sbGVyRG90IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XFxufVxcblxcbi5zY3JvbGxlckRvdDpob3ZlciwgLnNlbGVjdGVkSW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTcxO1xcbn1cXG5cXG4vKiBmYWRpbmcgYW5pbWF0aW9uICovXFxuLmZhZGUge1xcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcbiAgfVxcblxcbkBrZXlmcmFtZXMgZmFkZSB7XFxuICAgIGZyb20ge29wYWNpdHk6IC40fVxcbiAgICB0byB7b3BhY2l0eTogMX1cXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogTW9iaWxlIGZvcm0gc3R5bGluZyAmIHZhbGlkYXRpb24gc3R5bGluZyAqL1xcblxcbi52YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpOyAgICBcXG59XFxuXFxuLmZvcm1IZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5mb3JtSGVhZGVyPmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjE1ZW07XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udmFsaWRhdGlvbkZvcm0ge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG5cXG4gICAgLyogd2lkdGg6IDgwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm1Sb3cge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgXFxufVxcblxcbi5mb3JtUm93IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uZm9ybVJvdyBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTsgICAgICAgICAgLyogVGhpcyB3b24ndCB3b3JrIGluIENocm9tZSBvciBTYWZhcmkgKi9cXG4gICAgLyogLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAgIFRoaXMgd2lsbCBtYWtlIGl0IHdvcmsgKi9cXG59XFxuXFxuLmZvcm1Sb3cgbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5mb3JtUm93IGlucHV0OmludmFsaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZXJyb3IpO1xcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IHJlZCBnbG93IGluIEZpcmVmb3ggKi9cXG59XFxuXFxuLmZvcm1Sb3cgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybVJvdyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUpO1xcbn1cXG5cXG4uZm9ybVJvdyBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlKTtcXG4gICAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRm9vdGVyIHN0eWxpbmcgKi9cXG5cXG5mb290ZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcblxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG59XFxuXFxuLyogY2VudGVycyBnaXRodWIgaWNvbiB2ZXJ0aWNhbGx5ICovXFxuZm9vdGVyPmEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmdpdGh1Yjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcblxcblxcblxcblxcbi8qIERlc2t0b3AgZm9ybSBzdHlsaW5nICAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICAgLmZvcm1IZWFkZXIsXFxuICAgIC52YWxpZGF0aW9uRm9ybSB7XFxuICAgICAgd2lkdGg6IDYwMHB4O1xcbiAgICB9XFxuICAgIC5mb3JtUm93IHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBUbyBhdm9pZCBzdHJldGNoaW5nICovXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbiAgICAuZm9ybVJvdyBpbnB1dCxcXG4gICAgLmZvcm1Sb3cgc2VsZWN0IHtcXG4gICAgICB3aWR0aDogMjgwcHg7XFxuICAgICAgaGVpZ2h0OiBpbml0aWFsO1xcbiAgICB9XFxuICAgIC5mb3JtUm93IGxhYmVsIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICB3aWR0aDogMTgwcHg7XFxuICAgICAgbWFyZ2luLXRvcDogN3B4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIH1cXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQztBQUNKOztBQUVBLEdBQUcsc0JBQXNCOztBQUV6QjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdIQUF3SDtJQUN4SCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7Ozs7OztBQU1BLG1CQUFtQjs7QUFFbkI7SUFDSSxhQUFhOztJQUViLHdDQUF3QztJQUN4Qyx5QkFBeUI7O0lBRXpCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7Ozs7O0FBTUEsaUJBQWlCOztBQUVqQjtJQUNJLHdDQUF3QztJQUN4Qyx5QkFBeUI7SUFDekIsMkNBQTJDOztJQUUzQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7O0lBRTdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7Ozs7SUFJSSxlQUFlO0lBQ2YsOEJBQThCO0FB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QVk7TUFDWixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGVBQWU7TUFDZixtQkFBbUI7SUFDckI7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogcmdiKDQ1LCA0NSwgNDUpO1xcbiAgICAtLWxpZ2h0LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIC0tYWN0aXZlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIC0tZXJyb3IgOiBkYXJrcmVkXFxufVxcblxcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XFxuXFxuaHRtbCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcblxcblxcblxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuXFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmhlYWRlcj5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBNZW51IHN0eWxpbmcgKi9cXG5cXG4ubWFpbk1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgICBwYWRkaW5nOiAwIDE1dnc7XFxufVxcblxcbi5tZW51SXRlbSB7XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgICBtYXJnaW46IDAuNnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLm1lbnVJdGVtOmhvdmVyLFxcbi5kcm9wZG93bk1lbnU6aG92ZXIsXFxuLmRyb3Bkb3duT3B0aW9uOmhvdmVyLCBcXG4ubW9iaWxlTWVudU9wdGlvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4ubWVudUl0ZW06YWN0aXZlLFxcbi5kcm9wZG93bk1lbnU6YWN0aXZlLFxcbi5kcm9wZG93bk9wdGlvbjphY3RpdmUsXFxuLm1vYmlsZU1lbnVPcHRpb246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlKTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBDb250ZW50IHN0eWxpbmcgKi9cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjYWxjKGNlbnRlciAtIDMwJSlcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRHJvcGRvd24gbWVudSBzdHlsaW5nICovXFxuXFxuLmRyb3Bkb3duTWVudSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kcm9wZG93bkNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKDEwMCUgKyAycHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uZHJvcGRvd25PcHRpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogTW9iaWxlIG1lbnUgc3R5bGluZyAqL1xcblxcbi5tb2JpbGVNZW51Q29udGVudCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb2JpbGVNZW51Q29udGVudD5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tb2JpbGVNZW51Q29udGVudD50YWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2JpbGVNZW51Q29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIC8qIGVuYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcblxcbi8qIGhpZGUgc2Nyb2xsYmFyLCByZXRhaW4gZnVuY3Rpb24gKi9cXG4ubW9iaWxlTWVudUNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9iaWxlTWVudU9wdGlvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG5cXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBJbWFnZSBzY3JvbGxlciBzdHlsaW5nICovXFxuXFxuLnNjcm9sbGVySW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogc2xpZGVzaG93IGNvbnRhaW5lciAqL1xcbi5pbWFnZVNjcm9sbGVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiBoaWRlIGltYWdlcyBkZWZhdWx0ICovXFxuLmltYWdlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cXG4ucHJldmlvdXNJbWFnZUJ0biwgLm5leHRJbWFnZUJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IC0yMnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgICAvKiB1c2VyLXNlbGVjdDogbm9uZTsgKi9cXG59XFxuXFxuLyogcG9zaXRpb24gbmV4dCBidXR0b24gb24gdGhlIHJpZ2h0ICovXFxuLm5leHRJbWFnZUJ0biB7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXG59XFxuXFxuLyogYWRkIGhvdmVyIGVmZmVjdCAqL1xcbi5wcmV2aW91c0ltYWdlQnRuOmhvdmVyLCAubmV4dEltYWdlQnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpXFxufVxcblxcbi8qIGNhcHRpb24gdGV4dCAqL1xcbi5pbWFnZUNhcHRpb24ge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBpbWFnZSBudW1iZXIgKi9cXG4uaW1hZ2VOdW1iZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLyogc2Nyb2xsZXIgZG90cyAqL1xcbi5zY3JvbGxlckRvdENvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG4uc2Nyb2xsZXJEb3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIG1hcmdpbjogMCAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcXG59XFxuXFxuLnNjcm9sbGVyRG90OmhvdmVyLCAuc2VsZWN0ZWRJbWFnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MTcxNzE7XFxufVxcblxcbi8qIGZhZGluZyBhbmltYXRpb24gKi9cXG4uZmFkZSB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxuICB9XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogLjR9XFxuICAgIHRvIHtvcGFjaXR5OiAxfVxcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBNb2JpbGUgZm9ybSBzdHlsaW5nICYgdmFsaWRhdGlvbiBzdHlsaW5nICovXFxuXFxuLnZhbGlkYXRpb25Gb3JtQ29udGFpbnRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7ICAgIFxcbn1cXG5cXG4uZm9ybUhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLmZvcm1IZWFkZXI+aDMge1xcbiAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi52YWxpZGF0aW9uRm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcblxcbiAgICAvKiB3aWR0aDogODAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybVJvdyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwOyBcXG59XFxuXFxuLmZvcm1Sb3cgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5mb3JtUm93IHNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtOyAgICAgICAgICAvKiBUaGlzIHdvbid0IHdvcmsgaW4gQ2hyb21lIG9yIFNhZmFyaSAqL1xcbiAgICAvKiAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7ICAgVGhpcyB3aWxsIG1ha2UgaXQgd29yayAqL1xcbn1cXG5cXG4uZm9ybVJvdyBsYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmZvcm1Sb3cgaW5wdXQ6aW52YWxpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1lcnJvcik7XFxuICBjb2xvcjogdmFyKC0tZXJyb3IpO1xcbiAgYm94LXNoYWRvdzogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgcmVkIGdsb3cgaW4gRmlyZWZveCAqL1xcbn1cXG5cXG4uZm9ybVJvdyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtUm93IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZSk7XFxufVxcblxcbi5mb3JtUm93IGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUpO1xcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBGb290ZXIgc3R5bGluZyAqL1xcblxcbmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbn1cXG5cXG4vKiBjZW50ZXJzIGdpdGh1YiBpY29uIHZlcnRpY2FsbHkgKi9cXG5mb290ZXI+YSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5naXRodWIge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ2l0aHViOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRGVza3RvcCBmb3JtIHN0eWxpbmcgICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgICAuZm9ybUhlYWRlcixcXG4gICAgLnZhbGlkYXRpb25Gb3JtIHtcXG4gICAgICB3aWR0aDogNjAwcHg7XFxuICAgIH1cXG4gICAgLmZvcm1Sb3cge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8qIFRvIGF2b2lkIHN0cmV0Y2hpbmcgKi9cXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB9XFxuICAgIC5mb3JtUm93IGlucHV0LFxcbiAgICAuZm9ybVJvdyBzZWxlY3Qge1xcbiAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgICBoZWlnaHQ6IGluaXRpYWw7XFxuICAgIH1cXG4gICAgLmZvcm1Sb3cgbGFiZWwge1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgICBtYXJnaW4tdG9wOiA3cHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgfVxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL3BhZ2VMb2FkZXInO1xuXG5pbml0aWFsaXplKCk7XG4iXSwibmFtZXMiOlsiZ2l0aHViSWNvbiIsInBsYWNlaG9sZGVySW1nMSIsInBsYWNlaG9sZGVySW1nMiIsInBsYWNlaG9sZGVySW1nMyIsInBsYWNlaG9sZGVySW1nNCIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9jZXNzTWVudVNlbGVjdGlvbiIsImUiLCJtYWluTWVudSIsImNvbnRlbnRDb250YWluZXIiLCJtZW51Q291bnQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImkiLCJjaGlsZHJlbiIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRhcmdldCIsImFkZCIsImNvbnRlbnRDb3VudCIsImNvbnRhaW5zIiwiY29uc29sZSIsImxvZyIsImlkIiwiY3JlYXRlTWVudUl0ZW0iLCJpdGVtTmFtZSIsIml0ZW1Db250YWluZXIiLCJpdGVtSWQiLCJpdGVtQ2xhc3MiLCJuZXdNZW51SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJ1bmRlZmluZWQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kQ2hpbGQiLCJhZGRJbWFnZVRvU2Nyb2xsZXIiLCJpbWFnZSIsInNjcm9sbGVyIiwiY2FwdGlvbiIsImltYWdlQ29udGFpbmVyIiwiaW1hZ2VOdW1iZXIiLCJuZXdJbWFnZSIsInNyYyIsImltYWdlQ2FwdGlvbiIsInNsaWRlSW5kZXgiLCJzZWxlY3RJbWFnZSIsIm4iLCJzY3JvbGxlckltYWdlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzY3JvbGxlckRvdHMiLCJsZW5ndGgiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwibG9vcEltYWdlU2Nyb2xsZXIiLCJzZXRUaW1lb3V0IiwiY3JlYXRlSGVhZGVyIiwiaGVhZGVyIiwiaGVhZGVyVGl0bGUiLCJjcmVhdGVNYWluTWVudSIsImNyZWF0ZURyb3Bkb3duTWVudSIsImNvbnRhaW5lciIsImRyb3Bkb3duTWVudUNvbnRhaW50ZXIiLCJkcm9wZG93bkNvbnRhaW5lciIsImRyb3Bkb3duT3B0aW9uIiwiZHJvcGRvd25NZW51IiwidG9nZ2xlIiwid2luZG93Iiwib25jbGljayIsIm1hdGNoZXMiLCJjcmVhdGVNb2JpbGVNZW51IiwibW9iaWxlTWVudUNvbnRlbnQiLCJtb2JpbGVNZW51VGl0bGUiLCJtb2JpbGVNZW51VGFibGUiLCJtb2JpbGVNZW51Q29udGFpbnRlciIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsTGVmdCIsImRlbHRhWSIsIm1vYmlsZU1lbnVPcHRpb24iLCJtb2JpbGVNZW51Q291bnQiLCJjcmVhdGVJbWFnZVNjcm9sbGVyIiwiaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIiLCJpbWFnZVNjcm9sbGVyIiwicHJldmlvdXNJbWFnZUJ0biIsImlubmVySFRNTCIsIm5leHRJbWFnZUJ0biIsInNjcm9sbGVyRG90Q29udGFpbmVyIiwibmV3RG90IiwiY291bnRyeUxpc3RBbHBoYTIiLCJBRiIsIkFMIiwiRFoiLCJBUyIsIkFEIiwiQU8iLCJBSSIsIkFRIiwiQUciLCJBUiIsIkFNIiwiQVciLCJBVSIsIkFUIiwiQVoiLCJCUyIsIkJIIiwiQkQiLCJCQiIsIkJZIiwiQkUiLCJCWiIsIkJKIiwiQk0iLCJCVCIsIkJPIiwiQlEiLCJCQSIsIkJXIiwiQlYiLCJCUiIsIklPIiwiQk4iLCJCRyIsIkJGIiwiQkkiLCJDViIsIktIIiwiQ00iLCJDQSIsIktZIiwiQ0YiLCJURCIsIkNMIiwiQ04iLCJDWCIsIkNDIiwiQ08iLCJLTSIsIkNEIiwiQ0ciLCJDSyIsIkNSIiwiSFIiLCJDVSIsIkNXIiwiQ1kiLCJDWiIsIkNJIiwiREsiLCJESiIsIkRNIiwiRE8iLCJFQyIsIkVHIiwiU1YiLCJHUSIsIkVSIiwiRUUiLCJTWiIsIkVUIiwiRksiLCJGTyIsIkZKIiwiRkkiLCJGUiIsIkdGIiwiUEYiLCJURiIsIkdBIiwiR00iLCJHRSIsIkRFIiwiR0giLCJHSSIsIkdSIiwiR0wiLCJHRCIsIkdQIiwiR1UiLCJHVCIsIkdHIiwiR04iLCJHVyIsIkdZIiwiSFQiLCJITSIsIlZBIiwiSE4iLCJISyIsIkhVIiwiSVMiLCJJTiIsIklEIiwiSVIiLCJJUSIsIklFIiwiSU0iLCJJTCIsIklUIiwiSk0iLCJKUCIsIkpFIiwiSk8iLCJLWiIsIktFIiwiS0kiLCJLUCIsIktSIiwiS1ciLCJLRyIsIkxBIiwiTFYiLCJMQiIsIkxTIiwiTFIiLCJMWSIsIkxJIiwiTFQiLCJMVSIsIk1PIiwiTUciLCJNVyIsIk1ZIiwiTVYiLCJNTCIsIk1UIiwiTUgiLCJNUSIsIk1SIiwiTVUiLCJZVCIsIk1YIiwiRk0iLCJNRCIsIk1DIiwiTU4iLCJNRSIsIk1TIiwiTUEiLCJNWiIsIk1NIiwiTkEiLCJOUiIsIk5QIiwiTkwiLCJOQyIsIk5aIiwiTkkiLCJORSIsIk5HIiwiTlUiLCJORiIsIk1QIiwiTk8iLCJPTSIsIlBLIiwiUFciLCJQUyIsIlBBIiwiUEciLCJQWSIsIlBFIiwiUEgiLCJQTiIsIlBMIiwiUFQiLCJQUiIsIlFBIiwiTUsiLCJSTyIsIlJVIiwiUlciLCJSRSIsIkJMIiwiU0giLCJLTiIsIkxDIiwiTUYiLCJQTSIsIlZDIiwiV1MiLCJTTSIsIlNUIiwiU0EiLCJTTiIsIlJTIiwiU0MiLCJTTCIsIlNHIiwiU1giLCJTSyIsIlNJIiwiU0IiLCJTTyIsIlpBIiwiR1MiLCJTUyIsIkVTIiwiTEsiLCJTRCIsIlNSIiwiU0oiLCJTRSIsIkNIIiwiU1kiLCJUVyIsIlRKIiwiVFoiLCJUSCIsIlRMIiwiVEciLCJUSyIsIlRPIiwiVFQiLCJUTiIsIlRSIiwiVE0iLCJUQyIsIlRWIiwiVUciLCJVQSIsIkFFIiwiR0IiLCJVTSIsIlVTIiwiVVkiLCJVWiIsIlZVIiwiVkUiLCJWTiIsIlZHIiwiVkkiLCJXRiIsIkVIIiwiWUUiLCJaTSIsIlpXIiwiQVgiLCJ2YWxpZGF0ZUVtYWlsIiwiZW1haWxJbnB1dCIsImdldEVsZW1lbnRCeUlkIiwidmFsaWRpdHkiLCJ0eXBlTWlzbWF0Y2giLCJ2YWx1ZSIsInNldEN1c3RvbVZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJjcmVhdGVFbWFpbElucHV0IiwiZm9ybVJvdyIsImVtYWlsTGFiZWwiLCJmb3IiLCJuYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsaWRhdGVDb3VudHJ5SW5wdXQiLCJjb3VudHJ5U2VsZWN0aW9uIiwiY3JlYXRlQ291bnRyeUlucHV0IiwiY291bnRyeUxhYmVsIiwiYmxhbmtPcHRpb24iLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIm5ld09wdGlvbiIsInZhbGlkYXRlWmlwQ29kZSIsInppcENvZGVJbnB1dCIsInRlc3QiLCJjcmVhdGVaaXBDb2RlSW5wdXQiLCJ6aXBDb2RlTGFiZWwiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwicGFzc3dvcmRJbnB1dCIsImNyZWF0ZVBhc3N3b3JkSW5wdXQiLCJwYXNzd29yZExhYmVsIiwiY29uZmlybVBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkSW5wdXQiLCJjcmVhdGVDb25maXJtUGFzc3dvcmRJbnB1dCIsImNvbmZpcm1QYXNzd29yZExhYmVsIiwic3VibWl0Rm9ybSIsImNyZWF0ZVN1Ym1pdEJ1dHRvbiIsInN1Ym1pdEJ0biIsImNyZWF0ZVZhbGlkYXRpb25Gb3JtIiwidmFsaWRhdGlvbkZvcm1Db250YWludGVyIiwiZm9ybUhlYWRlciIsImZvcm1UaXRsZSIsInZhbGlkYXRpb25Gb3JtIiwiYXV0b2NvbXBsZXRlIiwiY3JlYXRlQVBJUHJhY3RpY2UiLCJBUElQcmFjdGljZUNvbnRhaW50ZXIiLCJBUElQcmFjdGljZSIsImNyZWF0ZUNvbnRlbnRDb250YWluZXIiLCJjb250ZW50Q29udGFpbnRlciIsImNyZWF0ZUZvb3RlciIsImZvb3RlciIsImNvcHlyaWdodCIsInRleHRDb250ZW50IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2l0aHViTGluayIsImhyZWYiLCJuZXdHaXRodWJJY29uIiwiaW5pdGlhbGl6ZSJdLCJzb3VyY2VSb290IjoiIn0=