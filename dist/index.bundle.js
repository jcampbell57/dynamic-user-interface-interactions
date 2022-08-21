/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/formValidation.js":
/*!*******************************!*\
  !*** ./src/formValidation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

const generateForm = container => {
  createEmailInput(container);
  createCountryInput(container);
  createZipCodeInput(container);
  createPasswordInput(container);
  createConfirmPasswordInput(container);
  createSubmitButton(container);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateForm);

/***/ }),

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
/* harmony import */ var _formValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formValidation */ "./src/formValidation.js");
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
  (0,_formValidation__WEBPACK_IMPORTED_MODULE_5__["default"])(validationForm); // append

  formHeader.appendChild(formTitle);
  validationFormContainter.appendChild(formHeader);
  validationFormContainter.appendChild(document.createElement('br'));
  validationFormContainter.appendChild(validationForm);
  container.appendChild(validationFormContainter);
};

const createAPIPractice = container => {
  // creat API image container
  const APIPracticeContainter = document.createElement('div');
  APIPracticeContainter.classList.add('APIPracticeContainter', 'content', 'hidden');
  APIPracticeContainter.id = 'APIPractice'; // create API title

  const APITitle = document.createElement('h3');
  APITitle.innerText = 'Dogs playing'; // create API img

  const APIPractice = document.createElement('img');
  APIPractice.classList.add('APIPractice'); // fetch img

  fetch('https://api.giphy.com/v1/gifs/translate?api_key=l4VEUj5CAQUULpfjesJcMJa52qVSUVZ5&s=dogs%20playing', {
    mode: 'cors'
  }).then(response => response.json()).then(response => {
    APIPractice.src = response.data.images.original.url;
  }); // Append

  APIPracticeContainter.appendChild(APITitle);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: rgb(90, 90, 90);\n    --secondary-color: rgb(45, 45, 45);\n    --light-color: whitesmoke;\n    --hover: rgba(255, 255, 255, 0.2);\n    --active: rgba(255, 255, 255, 0.3);\n    --error : darkred\n}\n\n* {box-sizing: border-box}\n\nhtml {\n    overflow: hidden;\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden;\n}\n\n\n\n\n\n/* Header styling */\n\nheader {\n    padding: 1rem;\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nheader>h1 {\n    font-size: 2em;\n    font-weight: bolder;\n}\n\n\n\n\n\n/* Menu styling */\n\n.mainMenu {\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n    border-bottom: 3px solid var(--light-color);\n\n    display: flex;\n    text-align: center;\n    align-items: center;\n    justify-content: space-evenly;\n\n    padding: 0 15vw;\n}\n\n.menuItem {\n    padding: 0.4rem 1rem;\n    margin: 0.6rem;\n    font-size: 1.1rem;\n    border-radius: 0.3rem;\n}\n\n.menuItem:hover,\n.dropdownMenu:hover,\n.dropdownOption:hover, \n.mobileMenuOption:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.menuItem:active,\n.dropdownMenu:active,\n.dropdownOption:active,\n.mobileMenuOption:active {\n    background-color: var(--active);\n}\n\n.selected {\n    background-color: var(--hover);\n}\n\n\n\n\n\n/* Content styling */\n\n.hidden {\n    display: none;\n}\n\n.contentContainer {\n    background-color: var(--background-color);\n\n    height: 100%;\n    padding: 1rem;\n    overflow: auto;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: calc(center - 30%)\n}\n\n\n\n\n\n/* Dropdown menu styling */\n\n.dropdownMenu {\n    color: var(--light-color);\n    width: 20vw;\n    min-width: fit-content;\n    padding: 0.5rem 1rem;\n    border: 2px solid var(--light-color);\n    text-align: center;\n    font-size: 1.1rem;\n    position: relative;\n}\n\n.dropdownContainer {\n    position: absolute;\n    top: calc(100% + 2px);\n    width: 100%;\n    left: 0;\n\n    border: 1px solid var(--light-color);\n}\n\n.dropdownOption {\n    display: block;\n    text-align: center;\n    padding: 0.5rem 1rem;\n}\n\n\n\n\n\n/* Mobile menu styling */\n\n.mobileMenuContent {\n    color: var(--light-color);\n    text-align: center;\n    width: 100%;\n}\n\n.mobileMenuContent>h3 {\n    font-size: 1.15em;\n    margin-bottom: 1em;\n    font-weight: 500;\n}\n\n.mobileMenuContent>table {\n    display: flex;\n}\n\n.mobileMenuContainer {\n    border: 2px solid var(--light-color);\n    cursor: grab;\n    display: flex;\n\n    /* enable horizontal scroll */\n    overflow-x: scroll;\n}\n\n/* hide scrollbar, retain function */\n.mobileMenuContainer::-webkit-scrollbar {\n    display: none;\n}\n\n.mobileMenuOption {\n    padding: 0.5rem 1rem;\n    font-size: 1.1rem;\n\n    min-width: max-content;\n    text-align: center;\n}\n\n\n\n\n\n/* Image scroller styling */\n\n.scrollerImage {\n    width: 100%;\n}\n\n/* slideshow container */\n.imageScroller {\n    max-width: 1000px;\n    position: relative;\n    margin: auto;\n}\n\n/* hide images default */\n.imageContainer {\n    display: none;\n}\n\n/* next & previous buttons */\n.previousImageBtn, .nextImageBtn {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    width: auto;\n    margin-top: -22px;\n    padding: 16px;\n    color: var(--light-color);\n    font-weight: bold;\n    font-size: 18px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n    /* user-select: none; */\n}\n\n/* position next button on the right */\n.nextImageBtn {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n\n/* add hover effect */\n.previousImageBtn:hover, .nextImageBtn:hover {\n    background-color: var(--hover)\n}\n\n/* caption text */\n.imageCaption {\n    color: var(--light-color);\n    font-size: 15px;\n    padding: 8px 12px;\n    position: absolute;\n    bottom: 8px;\n    width: 100%;\n    text-align: center;\n}\n\n/* image number */\n.imageNumber {\n    color: var(--light-color);\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n\n/* scroller dots */\n.scrollerDotContainer {\n    text-align: center;\n    margin-top: 4px;\n}\n\n.scrollerDot {\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    margin: 0 2px;\n    background-color: #bbb;\n    border-radius: 50%;\n    display: inline-block;\n    transition: background-color 0.6s ease;\n}\n\n.scrollerDot:hover, .selectedImage {\n    background-color: #717171;\n}\n\n/* fading animation */\n.fade {\n    animation-name: fade;\n    animation-duration: 1.5s;\n  }\n\n@keyframes fade {\n    from {opacity: .4}\n    to {opacity: 1}\n}\n\n\n\n\n\n/* Mobile form styling & validation styling */\n\n.validationFormContainter {\n    color: var(--light-color);    \n}\n\n.formHeader {\n    text-align: center;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n}\n\n.formHeader>h3 {\n    font-size: 1.15em;\n    padding: 0.5em;\n    font-weight: 500;\n}\n\n.validationForm {\n    font-size: 1.1em;\n    padding: 0.5em;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n\n    /* width: 80%; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.formRow {\n    margin-bottom: 1rem;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    flex-wrap: wrap; \n}\n\n.formRow input {\n    background-color: var(--light-color);\n    border: 1px solid var(--secondary-color);\n    border-radius: 3px;\n    width: 100%;\n    padding: 7px;\n    font-size: 1.1rem;\n}\n\n.formRow select {\n    width: 100%;\n    padding: 5px;\n    font-size: 1.1rem;          /* This won't work in Chrome or Safari */\n    /* -webkit-appearance: none;   This will make it work */\n}\n\n.formRow label {\n    margin-bottom: 0.5rem;\n}\n\n.formRow input:invalid {\n  border: 1px solid var(--error);\n  color: var(--error);\n  box-shadow: none; /* Remove default red glow in Firefox */\n}\n\n.formRow button {\n    font-size: 1.15rem;\n    font-weight: bold;\n\n    color: #FFFFFF;\n    background-color: var(--hover);\n\n    border: none;\n    border-radius: 3px;\n\n    padding: 10px 40px;\n    cursor: pointer;\n}\n\n.formRow button:hover {\n    background-color: var(--active);\n}\n\n.formRow button:active {\n    background-color: var(--active);\n    cursor: grabbing;\n}\n\n\n\n\n\n/* API styling */\n\n.APIPracticeContainter {\n    color: var(--light-color);\n    text-align: center;\n    /* width: 100%; */\n}\n\n.APIPracticeContainter>h3 {\n    font-size: 1.15em;\n    margin-bottom: 1em;\n    font-weight: 500;\n}\n\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    padding: 1rem;\n    margin-top: auto;\n    border-top: 3px solid var(--light-color);\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n\n}\n\n/* centers github icon vertically */\nfooter>a {\n    display: flex;\n}\n\n.github {\n    height: 24px;\n    transition: transform 0.3s ease-in-out;\n}\n\n.github:hover {\n    transform: rotate(-360deg) scale(1.2);\n}\n\n\n\n\n\n/* Desktop form styling  */\n\n@media only screen and (min-width: 700px) {\n    .formHeader,\n    .validationForm {\n      width: 600px;\n    }\n    .formRow {\n      flex-direction: row;\n      align-items: flex-start; /* To avoid stretching */\n      margin-bottom: 20px;\n    }\n    .formRow input,\n    .formRow select {\n      width: 280px;\n      height: initial;\n    }\n    .formRow label {\n      text-align: right;\n      width: 180px;\n      margin-top: 7px;\n      padding-right: 20px;\n    }\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --background-color: rgb(90, 90, 90);\n    --secondary-color: rgb(45, 45, 45);\n    --light-color: whitesmoke;\n    --hover: rgba(255, 255, 255, 0.2);\n    --active: rgba(255, 255, 255, 0.3);\n    --error : darkred\n}\n\n* {box-sizing: border-box}\n\nhtml {\n    overflow: hidden;\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden;\n}\n\n\n\n\n\n/* Header styling */\n\nheader {\n    padding: 1rem;\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nheader>h1 {\n    font-size: 2em;\n    font-weight: bolder;\n}\n\n\n\n\n\n/* Menu styling */\n\n.mainMenu {\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n    border-bottom: 3px solid var(--light-color);\n\n    display: flex;\n    text-align: center;\n    align-items: center;\n    justify-content: space-evenly;\n\n    padding: 0 15vw;\n}\n\n.menuItem {\n    padding: 0.4rem 1rem;\n    margin: 0.6rem;\n    font-size: 1.1rem;\n    border-radius: 0.3rem;\n}\n\n.menuItem:hover,\n.dropdownMenu:hover,\n.dropdownOption:hover, \n.mobileMenuOption:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.menuItem:active,\n.dropdownMenu:active,\n.dropdownOption:active,\n.mobileMenuOption:active {\n    background-color: var(--active);\n}\n\n.selected {\n    background-color: var(--hover);\n}\n\n\n\n\n\n/* Content styling */\n\n.hidden {\n    display: none;\n}\n\n.contentContainer {\n    background-color: var(--background-color);\n\n    height: 100%;\n    padding: 1rem;\n    overflow: auto;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: calc(center - 30%)\n}\n\n\n\n\n\n/* Dropdown menu styling */\n\n.dropdownMenu {\n    color: var(--light-color);\n    width: 20vw;\n    min-width: fit-content;\n    padding: 0.5rem 1rem;\n    border: 2px solid var(--light-color);\n    text-align: center;\n    font-size: 1.1rem;\n    position: relative;\n}\n\n.dropdownContainer {\n    position: absolute;\n    top: calc(100% + 2px);\n    width: 100%;\n    left: 0;\n\n    border: 1px solid var(--light-color);\n}\n\n.dropdownOption {\n    display: block;\n    text-align: center;\n    padding: 0.5rem 1rem;\n}\n\n\n\n\n\n/* Mobile menu styling */\n\n.mobileMenuContent {\n    color: var(--light-color);\n    text-align: center;\n    width: 100%;\n}\n\n.mobileMenuContent>h3 {\n    font-size: 1.15em;\n    margin-bottom: 1em;\n    font-weight: 500;\n}\n\n.mobileMenuContent>table {\n    display: flex;\n}\n\n.mobileMenuContainer {\n    border: 2px solid var(--light-color);\n    cursor: grab;\n    display: flex;\n\n    /* enable horizontal scroll */\n    overflow-x: scroll;\n}\n\n/* hide scrollbar, retain function */\n.mobileMenuContainer::-webkit-scrollbar {\n    display: none;\n}\n\n.mobileMenuOption {\n    padding: 0.5rem 1rem;\n    font-size: 1.1rem;\n\n    min-width: max-content;\n    text-align: center;\n}\n\n\n\n\n\n/* Image scroller styling */\n\n.scrollerImage {\n    width: 100%;\n}\n\n/* slideshow container */\n.imageScroller {\n    max-width: 1000px;\n    position: relative;\n    margin: auto;\n}\n\n/* hide images default */\n.imageContainer {\n    display: none;\n}\n\n/* next & previous buttons */\n.previousImageBtn, .nextImageBtn {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    width: auto;\n    margin-top: -22px;\n    padding: 16px;\n    color: var(--light-color);\n    font-weight: bold;\n    font-size: 18px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n    /* user-select: none; */\n}\n\n/* position next button on the right */\n.nextImageBtn {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n\n/* add hover effect */\n.previousImageBtn:hover, .nextImageBtn:hover {\n    background-color: var(--hover)\n}\n\n/* caption text */\n.imageCaption {\n    color: var(--light-color);\n    font-size: 15px;\n    padding: 8px 12px;\n    position: absolute;\n    bottom: 8px;\n    width: 100%;\n    text-align: center;\n}\n\n/* image number */\n.imageNumber {\n    color: var(--light-color);\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n\n/* scroller dots */\n.scrollerDotContainer {\n    text-align: center;\n    margin-top: 4px;\n}\n\n.scrollerDot {\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    margin: 0 2px;\n    background-color: #bbb;\n    border-radius: 50%;\n    display: inline-block;\n    transition: background-color 0.6s ease;\n}\n\n.scrollerDot:hover, .selectedImage {\n    background-color: #717171;\n}\n\n/* fading animation */\n.fade {\n    animation-name: fade;\n    animation-duration: 1.5s;\n  }\n\n@keyframes fade {\n    from {opacity: .4}\n    to {opacity: 1}\n}\n\n\n\n\n\n/* Mobile form styling & validation styling */\n\n.validationFormContainter {\n    color: var(--light-color);    \n}\n\n.formHeader {\n    text-align: center;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n}\n\n.formHeader>h3 {\n    font-size: 1.15em;\n    padding: 0.5em;\n    font-weight: 500;\n}\n\n.validationForm {\n    font-size: 1.1em;\n    padding: 0.5em;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n\n    /* width: 80%; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.formRow {\n    margin-bottom: 1rem;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    flex-wrap: wrap; \n}\n\n.formRow input {\n    background-color: var(--light-color);\n    border: 1px solid var(--secondary-color);\n    border-radius: 3px;\n    width: 100%;\n    padding: 7px;\n    font-size: 1.1rem;\n}\n\n.formRow select {\n    width: 100%;\n    padding: 5px;\n    font-size: 1.1rem;          /* This won't work in Chrome or Safari */\n    /* -webkit-appearance: none;   This will make it work */\n}\n\n.formRow label {\n    margin-bottom: 0.5rem;\n}\n\n.formRow input:invalid {\n  border: 1px solid var(--error);\n  color: var(--error);\n  box-shadow: none; /* Remove default red glow in Firefox */\n}\n\n.formRow button {\n    font-size: 1.15rem;\n    font-weight: bold;\n\n    color: #FFFFFF;\n    background-color: var(--hover);\n\n    border: none;\n    border-radius: 3px;\n\n    padding: 10px 40px;\n    cursor: pointer;\n}\n\n.formRow button:hover {\n    background-color: var(--active);\n}\n\n.formRow button:active {\n    background-color: var(--active);\n    cursor: grabbing;\n}\n\n\n\n\n\n/* API styling */\n\n.APIPracticeContainter {\n    color: var(--light-color);\n    text-align: center;\n    /* width: 100%; */\n}\n\n.APIPracticeContainter>h3 {\n    font-size: 1.15em;\n    margin-bottom: 1em;\n    font-weight: 500;\n}\n\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    padding: 1rem;\n    margin-top: auto;\n    border-top: 3px solid var(--light-color);\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n\n}\n\n/* centers github icon vertically */\nfooter>a {\n    display: flex;\n}\n\n.github {\n    height: 24px;\n    transition: transform 0.3s ease-in-out;\n}\n\n.github:hover {\n    transform: rotate(-360deg) scale(1.2);\n}\n\n\n\n\n\n/* Desktop form styling  */\n\n@media only screen and (min-width: 700px) {\n    .formHeader,\n    .validationForm {\n      width: 600px;\n    }\n    .formRow {\n      flex-direction: row;\n      align-items: flex-start; /* To avoid stretching */\n      margin-bottom: 20px;\n    }\n    .formRow input,\n    .formRow select {\n      width: 280px;\n      height: initial;\n    }\n    .formRow label {\n      text-align: right;\n      width: 180px;\n      margin-top: 7px;\n      padding-right: 20px;\n    }\n  }"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxhQUFhLFdBQVcsVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sVUFBVSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxhQUFhLE1BQU0sVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssZUFBZSxnQkFBZ0IsV0FBVyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFB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OztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFQUEsdURBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2Zvcm1WYWxpZGF0aW9uLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL3BhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9yZXNldC5jc3M/ZWRlMCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ291bnRyeSBuYW1lcyBvYmplY3QgdXNpbmcgMi1sZXR0ZXIgY291bnRyeSBjb2RlcyB0byByZWZlcmVuY2UgY291bnRyeSBuYW1lXG4vLyBJU08gMzE2NiBBbHBoYS0yIEZvcm1hdDogWzIgbGV0dGVyIENvdW50cnkgQ29kZV06IFtDb3VudHJ5IE5hbWVdXG4vLyBTb3J0ZWQgYWxwaGFiZXRpY2FsIGJ5IGNvdW50cnkgbmFtZSAoc3BlY2lhbCBjaGFyYWN0ZXJzIG9uIGJvdHRvbSlcbmNvbnN0IGNvdW50cnlMaXN0QWxwaGEyID0ge1xuICBBRjogJ0FmZ2hhbmlzdGFuJyxcbiAgQUw6ICdBbGJhbmlhJyxcbiAgRFo6ICdBbGdlcmlhJyxcbiAgQVM6ICdBbWVyaWNhbiBTYW1vYScsXG4gIEFEOiAnQW5kb3JyYScsXG4gIEFPOiAnQW5nb2xhJyxcbiAgQUk6ICdBbmd1aWxsYScsXG4gIEFROiAnQW50YXJjdGljYScsXG4gIEFHOiAnQW50aWd1YSBhbmQgQmFyYnVkYScsXG4gIEFSOiAnQXJnZW50aW5hJyxcbiAgQU06ICdBcm1lbmlhJyxcbiAgQVc6ICdBcnViYScsXG4gIEFVOiAnQXVzdHJhbGlhJyxcbiAgQVQ6ICdBdXN0cmlhJyxcbiAgQVo6ICdBemVyYmFpamFuJyxcbiAgQlM6ICdCYWhhbWFzICh0aGUpJyxcbiAgQkg6ICdCYWhyYWluJyxcbiAgQkQ6ICdCYW5nbGFkZXNoJyxcbiAgQkI6ICdCYXJiYWRvcycsXG4gIEJZOiAnQmVsYXJ1cycsXG4gIEJFOiAnQmVsZ2l1bScsXG4gIEJaOiAnQmVsaXplJyxcbiAgQko6ICdCZW5pbicsXG4gIEJNOiAnQmVybXVkYScsXG4gIEJUOiAnQmh1dGFuJyxcbiAgQk86ICdCb2xpdmlhIChQbHVyaW5hdGlvbmFsIFN0YXRlIG9mKScsXG4gIEJROiAnQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmEnLFxuICBCQTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLFxuICBCVzogJ0JvdHN3YW5hJyxcbiAgQlY6ICdCb3V2ZXQgSXNsYW5kJyxcbiAgQlI6ICdCcmF6aWwnLFxuICBJTzogJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeSAodGhlKScsXG4gIEJOOiAnQnJ1bmVpIERhcnVzc2FsYW0nLFxuICBCRzogJ0J1bGdhcmlhJyxcbiAgQkY6ICdCdXJraW5hIEZhc28nLFxuICBCSTogJ0J1cnVuZGknLFxuICBDVjogJ0NhYm8gVmVyZGUnLFxuICBLSDogJ0NhbWJvZGlhJyxcbiAgQ006ICdDYW1lcm9vbicsXG4gIENBOiAnQ2FuYWRhJyxcbiAgS1k6ICdDYXltYW4gSXNsYW5kcyAodGhlKScsXG4gIENGOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljICh0aGUpJyxcbiAgVEQ6ICdDaGFkJyxcbiAgQ0w6ICdDaGlsZScsXG4gIENOOiAnQ2hpbmEnLFxuICBDWDogJ0NocmlzdG1hcyBJc2xhbmQnLFxuICBDQzogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzICh0aGUpJyxcbiAgQ086ICdDb2xvbWJpYScsXG4gIEtNOiAnQ29tb3JvcyAodGhlKScsXG4gIENEOiAnQ29uZ28gKHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSknLFxuICBDRzogJ0NvbmdvICh0aGUpJyxcbiAgQ0s6ICdDb29rIElzbGFuZHMgKHRoZSknLFxuICBDUjogJ0Nvc3RhIFJpY2EnLFxuICBIUjogJ0Nyb2F0aWEnLFxuICBDVTogJ0N1YmEnLFxuICBDVzogJ0N1cmHDp2FvJyxcbiAgQ1k6ICdDeXBydXMnLFxuICBDWjogJ0N6ZWNoaWEnLFxuICBDSTogXCJDw7R0ZSBkJ0l2b2lyZVwiLFxuICBESzogJ0Rlbm1hcmsnLFxuICBESjogJ0RqaWJvdXRpJyxcbiAgRE06ICdEb21pbmljYScsXG4gIERPOiAnRG9taW5pY2FuIFJlcHVibGljICh0aGUpJyxcbiAgRUM6ICdFY3VhZG9yJyxcbiAgRUc6ICdFZ3lwdCcsXG4gIFNWOiAnRWwgU2FsdmFkb3InLFxuICBHUTogJ0VxdWF0b3JpYWwgR3VpbmVhJyxcbiAgRVI6ICdFcml0cmVhJyxcbiAgRUU6ICdFc3RvbmlhJyxcbiAgU1o6ICdFc3dhdGluaScsXG4gIEVUOiAnRXRoaW9waWEnLFxuICBGSzogJ0ZhbGtsYW5kIElzbGFuZHMgKHRoZSkgW01hbHZpbmFzXScsXG4gIEZPOiAnRmFyb2UgSXNsYW5kcyAodGhlKScsXG4gIEZKOiAnRmlqaScsXG4gIEZJOiAnRmlubGFuZCcsXG4gIEZSOiAnRnJhbmNlJyxcbiAgR0Y6ICdGcmVuY2ggR3VpYW5hJyxcbiAgUEY6ICdGcmVuY2ggUG9seW5lc2lhJyxcbiAgVEY6ICdGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXMgKHRoZSknLFxuICBHQTogJ0dhYm9uJyxcbiAgR006ICdHYW1iaWEgKHRoZSknLFxuICBHRTogJ0dlb3JnaWEnLFxuICBERTogJ0dlcm1hbnknLFxuICBHSDogJ0doYW5hJyxcbiAgR0k6ICdHaWJyYWx0YXInLFxuICBHUjogJ0dyZWVjZScsXG4gIEdMOiAnR3JlZW5sYW5kJyxcbiAgR0Q6ICdHcmVuYWRhJyxcbiAgR1A6ICdHdWFkZWxvdXBlJyxcbiAgR1U6ICdHdWFtJyxcbiAgR1Q6ICdHdWF0ZW1hbGEnLFxuICBHRzogJ0d1ZXJuc2V5JyxcbiAgR046ICdHdWluZWEnLFxuICBHVzogJ0d1aW5lYS1CaXNzYXUnLFxuICBHWTogJ0d1eWFuYScsXG4gIEhUOiAnSGFpdGknLFxuICBITTogJ0hlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kcycsXG4gIFZBOiAnSG9seSBTZWUgKHRoZSknLFxuICBITjogJ0hvbmR1cmFzJyxcbiAgSEs6ICdIb25nIEtvbmcnLFxuICBIVTogJ0h1bmdhcnknLFxuICBJUzogJ0ljZWxhbmQnLFxuICBJTjogJ0luZGlhJyxcbiAgSUQ6ICdJbmRvbmVzaWEnLFxuICBJUjogJ0lyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpJyxcbiAgSVE6ICdJcmFxJyxcbiAgSUU6ICdJcmVsYW5kJyxcbiAgSU06ICdJc2xlIG9mIE1hbicsXG4gIElMOiAnSXNyYWVsJyxcbiAgSVQ6ICdJdGFseScsXG4gIEpNOiAnSmFtYWljYScsXG4gIEpQOiAnSmFwYW4nLFxuICBKRTogJ0plcnNleScsXG4gIEpPOiAnSm9yZGFuJyxcbiAgS1o6ICdLYXpha2hzdGFuJyxcbiAgS0U6ICdLZW55YScsXG4gIEtJOiAnS2lyaWJhdGknLFxuICBLUDogXCJLb3JlYSAodGhlIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpXCIsXG4gIEtSOiAnS29yZWEgKHRoZSBSZXB1YmxpYyBvZiknLFxuICBLVzogJ0t1d2FpdCcsXG4gIEtHOiAnS3lyZ3l6c3RhbicsXG4gIExBOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljICh0aGUpXCIsXG4gIExWOiAnTGF0dmlhJyxcbiAgTEI6ICdMZWJhbm9uJyxcbiAgTFM6ICdMZXNvdGhvJyxcbiAgTFI6ICdMaWJlcmlhJyxcbiAgTFk6ICdMaWJ5YScsXG4gIExJOiAnTGllY2h0ZW5zdGVpbicsXG4gIExUOiAnTGl0aHVhbmlhJyxcbiAgTFU6ICdMdXhlbWJvdXJnJyxcbiAgTU86ICdNYWNhbycsXG4gIE1HOiAnTWFkYWdhc2NhcicsXG4gIE1XOiAnTWFsYXdpJyxcbiAgTVk6ICdNYWxheXNpYScsXG4gIE1WOiAnTWFsZGl2ZXMnLFxuICBNTDogJ01hbGknLFxuICBNVDogJ01hbHRhJyxcbiAgTUg6ICdNYXJzaGFsbCBJc2xhbmRzICh0aGUpJyxcbiAgTVE6ICdNYXJ0aW5pcXVlJyxcbiAgTVI6ICdNYXVyaXRhbmlhJyxcbiAgTVU6ICdNYXVyaXRpdXMnLFxuICBZVDogJ01heW90dGUnLFxuICBNWDogJ01leGljbycsXG4gIEZNOiAnTWljcm9uZXNpYSAoRmVkZXJhdGVkIFN0YXRlcyBvZiknLFxuICBNRDogJ01vbGRvdmEgKHRoZSBSZXB1YmxpYyBvZiknLFxuICBNQzogJ01vbmFjbycsXG4gIE1OOiAnTW9uZ29saWEnLFxuICBNRTogJ01vbnRlbmVncm8nLFxuICBNUzogJ01vbnRzZXJyYXQnLFxuICBNQTogJ01vcm9jY28nLFxuICBNWjogJ01vemFtYmlxdWUnLFxuICBNTTogJ015YW5tYXInLFxuICBOQTogJ05hbWliaWEnLFxuICBOUjogJ05hdXJ1JyxcbiAgTlA6ICdOZXBhbCcsXG4gIE5MOiAnTmV0aGVybGFuZHMgKHRoZSknLFxuICBOQzogJ05ldyBDYWxlZG9uaWEnLFxuICBOWjogJ05ldyBaZWFsYW5kJyxcbiAgTkk6ICdOaWNhcmFndWEnLFxuICBORTogJ05pZ2VyICh0aGUpJyxcbiAgTkc6ICdOaWdlcmlhJyxcbiAgTlU6ICdOaXVlJyxcbiAgTkY6ICdOb3Jmb2xrIElzbGFuZCcsXG4gIE1QOiAnTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzICh0aGUpJyxcbiAgTk86ICdOb3J3YXknLFxuICBPTTogJ09tYW4nLFxuICBQSzogJ1Bha2lzdGFuJyxcbiAgUFc6ICdQYWxhdScsXG4gIFBTOiAnUGFsZXN0aW5lLCBTdGF0ZSBvZicsXG4gIFBBOiAnUGFuYW1hJyxcbiAgUEc6ICdQYXB1YSBOZXcgR3VpbmVhJyxcbiAgUFk6ICdQYXJhZ3VheScsXG4gIFBFOiAnUGVydScsXG4gIFBIOiAnUGhpbGlwcGluZXMgKHRoZSknLFxuICBQTjogJ1BpdGNhaXJuJyxcbiAgUEw6ICdQb2xhbmQnLFxuICBQVDogJ1BvcnR1Z2FsJyxcbiAgUFI6ICdQdWVydG8gUmljbycsXG4gIFFBOiAnUWF0YXInLFxuICBNSzogJ1JlcHVibGljIG9mIE5vcnRoIE1hY2Vkb25pYScsXG4gIFJPOiAnUm9tYW5pYScsXG4gIFJVOiAnUnVzc2lhbiBGZWRlcmF0aW9uICh0aGUpJyxcbiAgUlc6ICdSd2FuZGEnLFxuICBSRTogJ1LDqXVuaW9uJyxcbiAgQkw6ICdTYWludCBCYXJ0aMOpbGVteScsXG4gIFNIOiAnU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGEnLFxuICBLTjogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXG4gIExDOiAnU2FpbnQgTHVjaWEnLFxuICBNRjogJ1NhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpJyxcbiAgUE06ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJyxcbiAgVkM6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXG4gIFdTOiAnU2Ftb2EnLFxuICBTTTogJ1NhbiBNYXJpbm8nLFxuICBTVDogJ1NhbyBUb21lIGFuZCBQcmluY2lwZScsXG4gIFNBOiAnU2F1ZGkgQXJhYmlhJyxcbiAgU046ICdTZW5lZ2FsJyxcbiAgUlM6ICdTZXJiaWEnLFxuICBTQzogJ1NleWNoZWxsZXMnLFxuICBTTDogJ1NpZXJyYSBMZW9uZScsXG4gIFNHOiAnU2luZ2Fwb3JlJyxcbiAgU1g6ICdTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpJyxcbiAgU0s6ICdTbG92YWtpYScsXG4gIFNJOiAnU2xvdmVuaWEnLFxuICBTQjogJ1NvbG9tb24gSXNsYW5kcycsXG4gIFNPOiAnU29tYWxpYScsXG4gIFpBOiAnU291dGggQWZyaWNhJyxcbiAgR1M6ICdTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXG4gIFNTOiAnU291dGggU3VkYW4nLFxuICBFUzogJ1NwYWluJyxcbiAgTEs6ICdTcmkgTGFua2EnLFxuICBTRDogJ1N1ZGFuICh0aGUpJyxcbiAgU1I6ICdTdXJpbmFtZScsXG4gIFNKOiAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbicsXG4gIFNFOiAnU3dlZGVuJyxcbiAgQ0g6ICdTd2l0emVybGFuZCcsXG4gIFNZOiAnU3lyaWFuIEFyYWIgUmVwdWJsaWMnLFxuICBUVzogJ1RhaXdhbicsXG4gIFRKOiAnVGFqaWtpc3RhbicsXG4gIFRaOiAnVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZicsXG4gIFRIOiAnVGhhaWxhbmQnLFxuICBUTDogJ1RpbW9yLUxlc3RlJyxcbiAgVEc6ICdUb2dvJyxcbiAgVEs6ICdUb2tlbGF1JyxcbiAgVE86ICdUb25nYScsXG4gIFRUOiAnVHJpbmlkYWQgYW5kIFRvYmFnbycsXG4gIFROOiAnVHVuaXNpYScsXG4gIFRSOiAnVHVya2V5JyxcbiAgVE06ICdUdXJrbWVuaXN0YW4nLFxuICBUQzogJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcyAodGhlKScsXG4gIFRWOiAnVHV2YWx1JyxcbiAgVUc6ICdVZ2FuZGEnLFxuICBVQTogJ1VrcmFpbmUnLFxuICBBRTogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzICh0aGUpJyxcbiAgR0I6ICdVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kICh0aGUpJyxcbiAgVU06ICdVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMgKHRoZSknLFxuICBVUzogJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYSAodGhlKScsXG4gIFVZOiAnVXJ1Z3VheScsXG4gIFVaOiAnVXpiZWtpc3RhbicsXG4gIFZVOiAnVmFudWF0dScsXG4gIFZFOiAnVmVuZXp1ZWxhIChCb2xpdmFyaWFuIFJlcHVibGljIG9mKScsXG4gIFZOOiAnVmlldCBOYW0nLFxuICBWRzogJ1ZpcmdpbiBJc2xhbmRzIChCcml0aXNoKScsXG4gIFZJOiAnVmlyZ2luIElzbGFuZHMgKFUuUy4pJyxcbiAgV0Y6ICdXYWxsaXMgYW5kIEZ1dHVuYScsXG4gIEVIOiAnV2VzdGVybiBTYWhhcmEnLFxuICBZRTogJ1llbWVuJyxcbiAgWk06ICdaYW1iaWEnLFxuICBaVzogJ1ppbWJhYndlJyxcbiAgQVg6ICfDhWxhbmQgSXNsYW5kcycsXG59O1xuXG5jb25zdCB2YWxpZGF0ZUVtYWlsID0gKCkgPT4ge1xuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG4gIGlmIChlbWFpbElucHV0LnZhbGlkaXR5LnR5cGVNaXNtYXRjaCB8fCBlbWFpbElucHV0LnZhbHVlID09PSAnJykge1xuICAgIGVtYWlsSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0VudGVyIGEgdmFsaWQgZW1haWwnKTtcbiAgICBlbWFpbElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gIH0gZWxzZSB7XG4gICAgZW1haWxJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUVtYWlsSW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIGVtYWlsIGNvbnRhaW5lclxuICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xuICAvLyBlbWFpbCBsYWJlbFxuICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZW1haWxMYWJlbC5mb3IgPSAnZW1haWwnO1xuICBlbWFpbExhYmVsLmlubmVyVGV4dCA9ICdFbWFpbCc7XG4gIC8vIGVtYWlsIGlucHV0XG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBlbWFpbElucHV0LmlkID0gJ2VtYWlsJztcbiAgZW1haWxJbnB1dC5uYW1lID0gJ2VtYWlsJztcbiAgZW1haWxJbnB1dC50eXBlID0gJ2VtYWlsJztcbiAgZW1haWxJbnB1dC5wbGFjZWhvbGRlciA9ICdqYW5lQGV4YW1wbGUuY29tJztcbiAgLy8gdmFsaWRpdHkgY2hlY2tcbiAgZW1haWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHZhbGlkYXRlRW1haWwoKSk7XG4gIC8vIGFwcGVuZCBlbWFpbFxuICBmb3JtUm93LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICBmb3JtUm93LmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XG59O1xuXG5jb25zdCB2YWxpZGF0ZUNvdW50cnlJbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgY291bnRyeVNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5Jyk7XG4gIGlmIChjb3VudHJ5U2VsZWN0aW9uLnZhbHVlID09PSAnJykge1xuICAgIGNvdW50cnlTZWxlY3Rpb24uc2V0Q3VzdG9tVmFsaWRpdHkoJ1doaWNoIGNvdW50cnkgYXJlIHlvdSBpbj8nKTtcbiAgICBjb3VudHJ5U2VsZWN0aW9uLnJlcG9ydFZhbGlkaXR5KCk7XG4gIH0gZWxzZSB7XG4gICAgY291bnRyeVNlbGVjdGlvbi5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUNvdW50cnlJbnB1dCA9IChjb250YWluZXIpID0+IHtcbiAgLy8gY291bnRyeSBjb250YWluZXJcbiAgY29uc3QgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtUm93LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcbiAgLy8gY291bnRyeSBsYWJlbFxuICBjb25zdCBjb3VudHJ5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb3VudHJ5TGFiZWwuZm9yID0gJ2NvdW50cnknO1xuICBjb3VudHJ5TGFiZWwuaW5uZXJUZXh0ID0gJ0NvdW50cnknO1xuICAvLyBjb3VudHJ5IHNlbGVjdGlvblxuICBjb25zdCBjb3VudHJ5U2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvdW50cnlTZWxlY3Rpb24uaWQgPSAnY291bnRyeSc7XG4gIGNvdW50cnlTZWxlY3Rpb24ubmFtZSA9ICdjb3VudHJ5JztcbiAgLy8gY291bnRyeSBvcHRpb25zXG4gIGNvbnN0IGJsYW5rT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGJsYW5rT3B0aW9uLnZhbHVlID0gJyc7XG4gIGJsYW5rT3B0aW9uLmlubmVyVGV4dCA9ICcnO1xuICBjb3VudHJ5U2VsZWN0aW9uLmFwcGVuZENoaWxkKGJsYW5rT3B0aW9uKTtcbiAgT2JqZWN0LmtleXMoY291bnRyeUxpc3RBbHBoYTIpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGtleSwgY291bnRyeUxpc3RBbHBoYTJba2V5XSk7XG4gICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbmV3T3B0aW9uLnZhbHVlID0ga2V5O1xuICAgIG5ld09wdGlvbi5pbm5lclRleHQgPSBjb3VudHJ5TGlzdEFscGhhMltrZXldO1xuICAgIGNvdW50cnlTZWxlY3Rpb24uYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcbiAgfSk7XG4gIC8vIHZhbGlkaXR5IGNoZWNrXG4gIGNvdW50cnlTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB2YWxpZGF0ZUNvdW50cnlJbnB1dCgpKTtcbiAgLy8gYXBwZW5kIGNvdW50cnkgaW5wdXRcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChjb3VudHJ5TGFiZWwpO1xuICBmb3JtUm93LmFwcGVuZENoaWxkKGNvdW50cnlTZWxlY3Rpb24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XG59O1xuXG5jb25zdCB2YWxpZGF0ZVppcENvZGUgPSAoKSA9PiB7XG4gIGNvbnN0IHppcENvZGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6aXBjb2RlJyk7XG4gIGlmICgvXlxcZHs1fSgtXFxkezR9KT8kLy50ZXN0KHppcENvZGVJbnB1dC52YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgemlwQ29kZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdFbnRlciBhIHZhbGlkIHppcGNvZGUnKTtcbiAgICB6aXBDb2RlSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgfSBlbHNlIHtcbiAgICB6aXBDb2RlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVaaXBDb2RlSW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIHppcCBjb2RlIGNvbnRhaW5lclxuICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xuICAvLyB6aXAgY29kZSBsYWJlbFxuICBjb25zdCB6aXBDb2RlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB6aXBDb2RlTGFiZWwuZm9yID0gJ3ppcGNvZGUnO1xuICB6aXBDb2RlTGFiZWwuaW5uZXJUZXh0ID0gJ1ppcCBjb2RlJztcbiAgLy8gemlwIGNvZGUgaW5wdXRcbiAgY29uc3QgemlwQ29kZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgemlwQ29kZUlucHV0LmlkID0gJ3ppcGNvZGUnO1xuICB6aXBDb2RlSW5wdXQubmFtZSA9ICd6aXBjb2RlJztcbiAgLy8gdmFsaWRpdHkgY2hlY2tcbiAgemlwQ29kZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdmFsaWRhdGVaaXBDb2RlKCkpO1xuICAvLyBhcHBlbmQgemlwIGNvZGUgaW5wdXRcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZCh6aXBDb2RlTGFiZWwpO1xuICBmb3JtUm93LmFwcGVuZENoaWxkKHppcENvZGVJbnB1dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlUGFzc3dvcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcblxuICAvLyBWYWxpZGF0ZSBsb3dlcmNhc2UgbGV0dGVyc1xuICBpZiAoL1thLXpdL2cudGVzdChwYXNzd29yZElucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICBwYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGNvbnRhaW4gbG93ZXJjYXNlIGxldHRlcicpO1xuICAgIHBhc3N3b3JkSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAvLyBWYWxpZGF0ZSBjYXBpdGFsIGxldHRlcnNcbiAgfSBlbHNlIGlmICgvW0EtWl0vZy50ZXN0KHBhc3N3b3JkSW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xuICAgIHBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgY29udGFpbiB1cHBlcmNhc2UgbGV0dGVyJyk7XG4gICAgcGFzc3dvcmRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIC8vIFZhbGlkYXRlIG51bWJlcnNcbiAgfSBlbHNlIGlmICgvWzAtOV0vZy50ZXN0KHBhc3N3b3JkSW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xuICAgIHBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgY29udGFpbiBhIG51bWJlcicpO1xuICAgIHBhc3N3b3JkSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAvLyBWYWxpZGF0ZSBsZW5ndGhcbiAgfSBlbHNlIGlmIChwYXNzd29yZElucHV0LnZhbHVlLmxlbmd0aCA8IDgpIHtcbiAgICBwYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycycpO1xuICAgIHBhc3N3b3JkSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgfSBlbHNlIHtcbiAgICBwYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlUGFzc3dvcmRJbnB1dCA9IChjb250YWluZXIpID0+IHtcbiAgLy8gcGFzc3dvcmQgY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gIC8vIHBhc3N3b3JkIGxhYmVsXG4gIGNvbnN0IHBhc3N3b3JkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwYXNzd29yZExhYmVsLmZvciA9ICdwYXNzd29yZCc7XG4gIHBhc3N3b3JkTGFiZWwuaW5uZXJUZXh0ID0gJ1Bhc3N3b3JkJztcbiAgLy8gcGFzc3dvcmQgaW5wdXRcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHBhc3N3b3JkSW5wdXQuaWQgPSAncGFzc3dvcmQnO1xuICBwYXNzd29yZElucHV0Lm5hbWUgPSAncGFzc3dvcmQnO1xuICBwYXNzd29yZElucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICAvLyB2YWxpZGl0eSBjaGVja1xuICBwYXNzd29yZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdmFsaWRhdGVQYXNzd29yZCgpKTtcbiAgLy8gYXBwZW5kIHBhc3N3b3JkIGlucHV0XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQocGFzc3dvcmRMYWJlbCk7XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQocGFzc3dvcmRJbnB1dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IGNvbmZpcm1QYXNzd29yZCA9ICgpID0+IHtcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmRDb25maXJtYXRpb24nKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpLnZhbHVlO1xuICBpZiAoY29uZmlybVBhc3N3b3JkSW5wdXQudmFsdWUgIT09IHBhc3N3b3JkSW5wdXQpIHtcbiAgICBjb25maXJtUGFzc3dvcmRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnRG9lcyBub3QgbWF0Y2gnKTtcbiAgICBjb25maXJtUGFzc3dvcmRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpcm1QYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlQ29uZmlybVBhc3N3b3JkSW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIGNvbmZpcm0gcGFzc3dvcmQgY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gIC8vIGNvbmZpcm0gcGFzc3dvcmQgbGFiZWxcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25maXJtUGFzc3dvcmRMYWJlbC5mb3IgPSAncGFzc3dvcmRDb25maXJtYXRpb24nO1xuICBjb25maXJtUGFzc3dvcmRMYWJlbC5pbm5lclRleHQgPSAnQ29uZmlybSBwYXNzd29yZCc7XG4gIC8vIGNvbm5maXJtIHBhc3N3b3JkIGlucHV0XG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uZmlybVBhc3N3b3JkSW5wdXQudHlwZSA9ICdwYXNzd29yZCc7XG4gIGNvbmZpcm1QYXNzd29yZElucHV0LmlkID0gJ3Bhc3N3b3JkQ29uZmlybWF0aW9uJztcbiAgY29uZmlybVBhc3N3b3JkSW5wdXQubmFtZSA9ICdwYXNzd29yZENvbmZpcm1hdGlvbic7XG4gIC8vIHZhbGlkaXR5IGNoZWNrXG4gIGNvbmZpcm1QYXNzd29yZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gY29uZmlybVBhc3N3b3JkKCkpO1xuICAvLyBhcHBlbmQgY29uZmlybSBwYXNzd29yZCBpbnB1dFxuICBmb3JtUm93LmFwcGVuZENoaWxkKGNvbmZpcm1QYXNzd29yZExhYmVsKTtcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChjb25maXJtUGFzc3dvcmRJbnB1dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IHN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xuICAvLyBwcmV2ZW50IGFjdHVhbCBmb3JtIHN1Ym1pc3Npb25cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyB2YWxpZGF0ZSBmb3JtIGZpZWxkc1xuICBjb25maXJtUGFzc3dvcmQoKTtcbiAgdmFsaWRhdGVQYXNzd29yZCgpO1xuICB2YWxpZGF0ZVppcENvZGUoKTtcbiAgdmFsaWRhdGVDb3VudHJ5SW5wdXQoKTtcbiAgdmFsaWRhdGVFbWFpbCgpO1xufTtcblxuY29uc3QgY3JlYXRlU3VibWl0QnV0dG9uID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBzdWJtaXQgYnV0dG9uIGNvbnRhaW5lclxuICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xuICAvLyBzdWJtaXQgYnV0dG9uXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0QnRuJyk7XG4gIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgLy8gZXZlbnQgbGlzdGVuZXJcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHN1Ym1pdEZvcm0oZSkpO1xuICAvLyBhcHBlbmQgc3VibWl0IGJ1dHRvblxuICBmb3JtUm93LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlRm9ybSA9IChjb250YWluZXIpID0+IHtcbiAgY3JlYXRlRW1haWxJbnB1dChjb250YWluZXIpO1xuICBjcmVhdGVDb3VudHJ5SW5wdXQoY29udGFpbmVyKTtcbiAgY3JlYXRlWmlwQ29kZUlucHV0KGNvbnRhaW5lcik7XG4gIGNyZWF0ZVBhc3N3b3JkSW5wdXQoY29udGFpbmVyKTtcbiAgY3JlYXRlQ29uZmlybVBhc3N3b3JkSW5wdXQoY29udGFpbmVyKTtcbiAgY3JlYXRlU3VibWl0QnV0dG9uKGNvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUZvcm07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IGdpdGh1Ykljb24gZnJvbSAnLi9hc3NldHMvR2l0SHViLWxpZ2h0LTMycHgucG5nJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzEgZnJvbSAnLi9hc3NldHMvSU1HXzEyMDEuanBnJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzIgZnJvbSAnLi9hc3NldHMvSU1HXzEyMTIuanBnJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzMgZnJvbSAnLi9hc3NldHMvSU1HXzg3MTYuanBnJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzQgZnJvbSAnLi9hc3NldHMvSU1HXzg4NTUuanBnJztcbmltcG9ydCBnZW5lcmF0ZUZvcm0gZnJvbSAnLi9mb3JtVmFsaWRhdGlvbic7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbi8vIGhlbHBlciBmdW5jdGlvbnNcbmNvbnN0IHByb2Nlc3NNZW51U2VsZWN0aW9uID0gKGUpID0+IHtcbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbk1lbnUnKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Q29udGFpbmVyJyk7XG5cbiAgLy8gZGVzZWxlY3QgYW55IG1lbnUgaXRlbXNcbiAgY29uc3QgbWVudUNvdW50ID0gbWFpbk1lbnUuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUNvdW50OyBpKyspIHtcbiAgICBtYWluTWVudS5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICB9XG5cbiAgLy8gc2VsZWN0IG5ldyBtZW51IGl0ZW1cbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAvLyB0b2dnbGUgY29udGVudFxuICBjb25zdCBjb250ZW50Q291bnQgPSBjb250ZW50Q29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRDb3VudDsgaSsrKSB7XG4gICAgLy8gaGlkZSBjdXJyZW50IGNvbnRlbnRcbiAgICBpZiAoY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpID09PSBmYWxzZSkge1xuICAgICAgY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgLy8gZGlzcGxheSBzZWxlY3RlZCBjb250ZW50XG4gICAgaWYgKGNvbnRlbnRDb250YWluZXIuY2hpbGRyZW5baV0uaWQgPT09IGUudGFyZ2V0LmlkKSB7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAoaXRlbU5hbWUsIGl0ZW1Db250YWluZXIsIGl0ZW1JZCwgaXRlbUNsYXNzKSA9PiB7XG4gIGNvbnN0IG5ld01lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbmV3TWVudUl0ZW0uaWQgPSBgJHtpdGVtSWR9YDtcblxuICAvLyBhZGQgY2xhc3MgaWYgb25lIGlzIGdpdmVuXG4gIGlmIChpdGVtQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgIG5ld01lbnVJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHtpdGVtQ2xhc3N9YCk7XG4gIH1cblxuICBuZXdNZW51SXRlbS5pbm5lclRleHQgPSBgJHtpdGVtTmFtZX1gO1xuICBuZXdNZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuXG4gIG5ld01lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHByb2Nlc3NNZW51U2VsZWN0aW9uKGUpKTtcblxuICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld01lbnVJdGVtKTtcbn07XG5cbmNvbnN0IGFkZEltYWdlVG9TY3JvbGxlciA9IChpbWFnZSwgaSwgc2Nyb2xsZXIsIGNhcHRpb24pID0+IHtcbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2VDb250YWluZXInLCAnZmFkZScpO1xuXG4gIC8vIGRpc3BsYXkgaW1hZ2UgbnVtYmVyXG4gIGNvbnN0IGltYWdlTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlTnVtYmVyJyk7XG4gIGltYWdlTnVtYmVyLmlubmVyVGV4dCA9IGAke2l9LzRgO1xuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZU51bWJlcik7XG5cbiAgLy8gZGlzcGxheSBpbWFnZVxuICBjb25zdCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlckltYWdlJyk7XG4gIG5ld0ltYWdlLnNyYyA9IGltYWdlO1xuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG5cbiAgLy8gZGlzcGxheSBjYXB0aW9uXG4gIGlmIChjYXB0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBpbWFnZUNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZUNhcHRpb24uY2xhc3NMaXN0LmFkZCgnaW1hZ2VDYXB0aW9uJyk7XG4gICAgaW1hZ2VDYXB0aW9uLmlubmVyVGV4dCA9IGAke2NhcHRpb259YDtcbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUNhcHRpb24pO1xuICB9XG5cbiAgc2Nyb2xsZXIuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xufTtcblxubGV0IHNsaWRlSW5kZXggPSAwO1xuXG5jb25zdCBzZWxlY3RJbWFnZSA9IChuKSA9PiB7XG4gIGNvbnN0IHNjcm9sbGVySW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1hZ2VDb250YWluZXInKTtcbiAgY29uc3Qgc2Nyb2xsZXJEb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Nyb2xsZXJEb3QnKTtcblxuICAvLyBsb29wIHRocm91Z2ggaW1hZ2VzXG4gIGlmIChuID4gc2Nyb2xsZXJJbWFnZXMubGVuZ3RoKSB7IHNsaWRlSW5kZXggPSAxOyB9XG4gIGlmIChuIDwgMSkgeyBzbGlkZUluZGV4ID0gc2Nyb2xsZXJJbWFnZXMubGVuZ3RoOyB9XG5cbiAgLy8gcmVzZXQgaW1hZ2Ugc2VsZWN0aW9uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsZXJJbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBzY3JvbGxlckltYWdlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsZXJEb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2Nyb2xsZXJEb3RzW2ldLmNsYXNzTmFtZSA9IHNjcm9sbGVyRG90c1tpXS5jbGFzc05hbWUucmVwbGFjZSgnIHNlbGVjdGVkSW1hZ2UnLCAnJyk7XG4gIH1cblxuICAvLyBzZWxlY3QgbmV3IGltYWdlXG4gIHNjcm9sbGVySW1hZ2VzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgc2Nyb2xsZXJEb3RzW3NsaWRlSW5kZXggLSAxXS5jbGFzc05hbWUgKz0gJyBzZWxlY3RlZEltYWdlJztcbn07XG5cbmNvbnN0IGxvb3BJbWFnZVNjcm9sbGVyID0gKCkgPT4ge1xuICBjb25zdCBzY3JvbGxlckltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlQ29udGFpbmVyJyk7XG4gIGNvbnN0IHNjcm9sbGVyRG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbGVyRG90Jyk7XG5cbiAgLy8gcmVzZXQgaW1hZ2Ugc2VsZWN0aW9uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsZXJJbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBzY3JvbGxlckltYWdlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsZXJEb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2Nyb2xsZXJEb3RzW2ldLmNsYXNzTmFtZSA9IHNjcm9sbGVyRG90c1tpXS5jbGFzc05hbWUucmVwbGFjZSgnIHNlbGVjdGVkSW1hZ2UnLCAnJyk7XG4gIH1cblxuICAvLyBzZWxlY3QgbmV3IGltYWdlXG4gIHNsaWRlSW5kZXgrKztcbiAgaWYgKHNsaWRlSW5kZXggPiBzY3JvbGxlckltYWdlcy5sZW5ndGgpIHsgc2xpZGVJbmRleCA9IDE7IH1cbiAgc2Nyb2xsZXJJbWFnZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBzY3JvbGxlckRvdHNbc2xpZGVJbmRleCAtIDFdLmNsYXNzTmFtZSArPSAnIHNlbGVjdGVkSW1hZ2UnO1xuICBzZXRUaW1lb3V0KGxvb3BJbWFnZVNjcm9sbGVyLCA1MDAwKTsgLy8gQ2hhbmdlIGltYWdlIGV2ZXJ5IDUgc2Vjb25kc1xufTtcblxuLy8gcGFnZSBpbml0aWFsaXphdGlvbiBmdW5jdGlvbnNcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkZXJUaXRsZS5pbm5lclRleHQgPSAnRHluYW1pYyBVSSBJbnRlcmFjdGlvbnMnO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW5NZW51ID0gKCkgPT4ge1xuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluTWVudScpO1xuXG4gIGNyZWF0ZU1lbnVJdGVtKCdEcm9wZG93biBNZW51JywgbWFpbk1lbnUsICdkcm9wZG93bk1lbnUnLCAnc2VsZWN0ZWQnKTtcbiAgY3JlYXRlTWVudUl0ZW0oJ01vYmlsZSBNZW51JywgbWFpbk1lbnUsICdtb2JpbGVNZW51Jyk7XG4gIGNyZWF0ZU1lbnVJdGVtKCdJbWFnZSBTY3JvbGxlcicsIG1haW5NZW51LCAnaW1hZ2VTY3JvbGxlcicpO1xuICBjcmVhdGVNZW51SXRlbSgnRm9ybSBWYWxpZGF0aW9uJywgbWFpbk1lbnUsICd2YWxpZGF0aW9uRm9ybScpO1xuICBjcmVhdGVNZW51SXRlbSgnQVBJIFByYWN0aWNlJywgbWFpbk1lbnUsICdBUElQcmFjdGljZScpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbk1lbnUpO1xufTtcblxuY29uc3QgY3JlYXRlRHJvcGRvd25NZW51ID0gKGNvbnRhaW5lcikgPT4ge1xuICBjb25zdCBkcm9wZG93bk1lbnVDb250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyb3Bkb3duTWVudUNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICBkcm9wZG93bk1lbnVDb250YWludGVyLmlkID0gJ2Ryb3Bkb3duTWVudSc7XG5cbiAgLy8gY3JlYXRlIGRyb3Bkb3duIGNvbnRhaW5lclxuICBjb25zdCBkcm9wZG93bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bkNvbnRhaW5lcicsICdoaWRkZW4nKTtcblxuICAvLyBjcmVhdGUgZHJvcGRvd24gb3B0aW9uc1xuICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bk9wdGlvbicpO1xuICAgIGRyb3Bkb3duT3B0aW9uLmlubmVyVGV4dCA9IGBvcHRpb24gJHtpfWA7XG4gICAgZHJvcGRvd25Db250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25PcHRpb24pO1xuICB9XG5cbiAgLy8gY3JlYXRlIGRyb3Bkb3duIGJ1dHRvblxuICBjb25zdCBkcm9wZG93bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duTWVudScpO1xuICBkcm9wZG93bk1lbnUuaW5uZXJUZXh0ID0gJ2Ryb3Bkb3duJztcbiAgZHJvcGRvd25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRyb3Bkb3duTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICAgIGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9KTtcblxuICAvLyBBcHBlbmRcbiAgZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKGRyb3Bkb3duQ29udGFpbmVyKTtcbiAgZHJvcGRvd25NZW51Q29udGFpbnRlci5hcHBlbmRDaGlsZChkcm9wZG93bk1lbnUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25NZW51Q29udGFpbnRlcik7XG5cbiAgLy8gY2xvc2UgZHJvcGRvd24gaWYgdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgaXRcbiAgd2luZG93Lm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghZS50YXJnZXQubWF0Y2hlcygnLmRyb3Bkb3duTWVudScpKSB7XG4gICAgICBpZiAoZHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgICBpZiAoZHJvcGRvd25NZW51LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVNb2JpbGVNZW51ID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBjcmVhdGUgY29udGVudCBjb250YWluZXJcbiAgY29uc3QgbW9iaWxlTWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9iaWxlTWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9iaWxlTWVudUNvbnRlbnQnLCAnY29udGVudCcsICdoaWRkZW4nKTtcbiAgbW9iaWxlTWVudUNvbnRlbnQuaWQgPSAnbW9iaWxlTWVudSc7XG5cbiAgLy8gY3JlYXRlIG1lbnUgdGl0bGVcbiAgY29uc3QgbW9iaWxlTWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbW9iaWxlTWVudVRpdGxlLmlubmVyVGV4dCA9ICdIb3Jpem9udGFsIHNjcm9sbGluZyBuYXYnO1xuXG4gIC8vIGNyZWF0ZSBtb2JpbGUgbWVudSBjb250YWluZXJcbiAgY29uc3QgbW9iaWxlTWVudVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgY29uc3QgbW9iaWxlTWVudUNvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBtb2JpbGVNZW51Q29udGFpbnRlci5jbGFzc0xpc3QuYWRkKCdtb2JpbGVNZW51Q29udGFpbmVyJyk7XG4gIC8vIG1ha2VzIHNjcm9sbHdoZWVsIGZ1bmN0aW9uYWwgd2l0aCBob3Jpem9udGFsIHNjcm9sbGluZ1xuICBtb2JpbGVNZW51Q29udGFpbnRlci5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG1vYmlsZU1lbnVDb250YWludGVyLnNjcm9sbExlZnQgKz0gZS5kZWx0YVk7XG4gIH0pO1xuXG4gIC8vIGNyZWF0ZSBtb2JpbGUgbWVudSBvcHRpb25zXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDIwOyBpKyspIHtcbiAgICBjb25zdCBtb2JpbGVNZW51T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBtb2JpbGVNZW51T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ21vYmlsZU1lbnVPcHRpb24nKTtcbiAgICBtb2JpbGVNZW51T3B0aW9uLmlubmVyVGV4dCA9IGBtb2JpbGUgb3B0aW9uICR7aX1gO1xuICAgIG1vYmlsZU1lbnVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBkZXNlbGVjdCBhbGwgbWVudSBpdGVtc1xuICAgICAgY29uc3QgbW9iaWxlTWVudUNvdW50ID0gbW9iaWxlTWVudUNvbnRhaW50ZXIuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vYmlsZU1lbnVDb3VudDsgaSsrKSB7XG4gICAgICAgIGlmIChtb2JpbGVNZW51Q29udGFpbnRlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykgPT09IHRydWUpIHtcbiAgICAgICAgICBtb2JpbGVNZW51Q29udGFpbnRlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBtYWtlIG5ldyBzZWxlY3Rpb25cbiAgICAgIG1vYmlsZU1lbnVPcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICB9KTtcbiAgICBtb2JpbGVNZW51Q29udGFpbnRlci5hcHBlbmRDaGlsZChtb2JpbGVNZW51T3B0aW9uKTtcbiAgfVxuXG4gIC8vIEFwcGVuZFxuICBtb2JpbGVNZW51Q29udGVudC5hcHBlbmRDaGlsZChtb2JpbGVNZW51VGl0bGUpO1xuICBtb2JpbGVNZW51VGFibGUuYXBwZW5kQ2hpbGQobW9iaWxlTWVudUNvbnRhaW50ZXIpO1xuICBtb2JpbGVNZW51Q29udGVudC5hcHBlbmRDaGlsZChtb2JpbGVNZW51VGFibGUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9iaWxlTWVudUNvbnRlbnQpO1xufTtcblxuY29uc3QgY3JlYXRlSW1hZ2VTY3JvbGxlciA9IChjb250YWluZXIpID0+IHtcbiAgY29uc3QgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcsICdoaWRkZW4nKTtcbiAgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIuaWQgPSAnaW1hZ2VTY3JvbGxlcic7XG5cbiAgY29uc3QgaW1hZ2VTY3JvbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZVNjcm9sbGVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlU2Nyb2xsZXInKTtcblxuICAvLyBhZGQgaW1hZ2VzXG4gIGFkZEltYWdlVG9TY3JvbGxlcihwbGFjZWhvbGRlckltZzEsIDEsIGltYWdlU2Nyb2xsZXIsICdWaWV3IG9mIERpYW1vbmQgSGVhZCAmIEhvbm9sdWx1LCBPYWh1Jyk7XG4gIGFkZEltYWdlVG9TY3JvbGxlcihwbGFjZWhvbGRlckltZzIsIDIsIGltYWdlU2Nyb2xsZXIsICdKdXJhc3NpYyBQYXJrIFZhbGxleSwgS3VhbG9hIFJhbmNoLCBPYWh1Jyk7XG4gIGFkZEltYWdlVG9TY3JvbGxlcihwbGFjZWhvbGRlckltZzMsIDMsIGltYWdlU2Nyb2xsZXIsICdSYWluYm93IG9uIE9haHUnKTtcbiAgYWRkSW1hZ2VUb1Njcm9sbGVyKHBsYWNlaG9sZGVySW1nNCwgNCwgaW1hZ2VTY3JvbGxlciwgJ1R1cnRsZSBvbiB0aGUgYmVhY2ggbmVhciBIYWxlaXdhLCBPYWh1Jyk7XG5cbiAgLy8gYWRkIHByZXZpb3VzIGJ1dHRvblxuICBjb25zdCBwcmV2aW91c0ltYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBwcmV2aW91c0ltYWdlQnRuLmNsYXNzTGlzdC5hZGQoJ3ByZXZpb3VzSW1hZ2VCdG4nKTtcbiAgcHJldmlvdXNJbWFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2VsZWN0SW1hZ2Uoc2xpZGVJbmRleCArPSAtMSk7IH0pO1xuICAvLyBkaXNwbGF5IHByZXZpb3VzIGFycm93XG4gIHByZXZpb3VzSW1hZ2VCdG4uaW5uZXJIVE1MID0gJyYjMTAwOTQ7JztcblxuICAvLyBhZGQgbmV4dCBidXR0b25cbiAgY29uc3QgbmV4dEltYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBuZXh0SW1hZ2VCdG4uY2xhc3NMaXN0LmFkZCgnbmV4dEltYWdlQnRuJyk7XG4gIG5leHRJbWFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2VsZWN0SW1hZ2Uoc2xpZGVJbmRleCArPSAxKTsgfSk7XG4gIC8vIGRpc3BsYXkgbmV4dCBhcnJvd1xuICBuZXh0SW1hZ2VCdG4uaW5uZXJIVE1MID0gJyYjMTAwOTU7JztcblxuICAvLyBhZGQgaW1hZ2Ugc2VsZWN0aW9uIGRvdHNcbiAgY29uc3Qgc2Nyb2xsZXJEb3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2Nyb2xsZXJEb3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZXJEb3RDb250YWluZXInKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgY29uc3QgbmV3RG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5ld0RvdC5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlckRvdCcpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICBuZXdEb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNlbGVjdEltYWdlKHNsaWRlSW5kZXggPSBpKTsgfSk7XG4gICAgc2Nyb2xsZXJEb3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RG90KTtcbiAgfVxuXG4gIC8vIGFwcGVuZFxuICBpbWFnZVNjcm9sbGVyLmFwcGVuZENoaWxkKHByZXZpb3VzSW1hZ2VCdG4pO1xuICBpbWFnZVNjcm9sbGVyLmFwcGVuZENoaWxkKG5leHRJbWFnZUJ0bik7XG4gIGltYWdlU2Nyb2xsZXJDb250YWludGVyLmFwcGVuZENoaWxkKGltYWdlU2Nyb2xsZXIpO1xuICBpbWFnZVNjcm9sbGVyQ29udGFpbnRlci5hcHBlbmRDaGlsZChzY3JvbGxlckRvdENvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZVNjcm9sbGVyQ29udGFpbnRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVWYWxpZGF0aW9uRm9ybSA9IChjb250YWluZXIpID0+IHtcbiAgLy8gY3JlYXRlIGZvcm0gdmFsaWRhdGlvbiBjb250YWluZXJcbiAgY29uc3QgdmFsaWRhdGlvbkZvcm1Db250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlci5jbGFzc0xpc3QuYWRkKCd2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXInLCAnY29udGVudCcsICdoaWRkZW4nKTtcbiAgdmFsaWRhdGlvbkZvcm1Db250YWludGVyLmlkID0gJ3ZhbGlkYXRpb25Gb3JtJztcblxuICAvLyBjcmVhdGUgZm9ybSBoZWFkZXJcbiAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1IZWFkZXInKTtcblxuICAvLyBmb3JtIHRpdGxlXG4gIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGZvcm1UaXRsZS5pbm5lclRleHQgPSAnRXhhbXBsZSBmb3JtJztcblxuICAvLyBjcmVhdGUgZm9ybVxuICBjb25zdCB2YWxpZGF0aW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgdmFsaWRhdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgndmFsaWRhdGlvbkZvcm0nKTtcbiAgdmFsaWRhdGlvbkZvcm0uYXV0b2NvbXBsZXRlID0gJ29mZic7XG5cbiAgZ2VuZXJhdGVGb3JtKHZhbGlkYXRpb25Gb3JtKTtcblxuICAvLyBhcHBlbmRcbiAgZm9ybUhlYWRlci5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuICB2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcik7XG4gIHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgdmFsaWRhdGlvbkZvcm1Db250YWludGVyLmFwcGVuZENoaWxkKHZhbGlkYXRpb25Gb3JtKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVBUElQcmFjdGljZSA9IChjb250YWluZXIpID0+IHtcbiAgLy8gY3JlYXQgQVBJIGltYWdlIGNvbnRhaW5lclxuICBjb25zdCBBUElQcmFjdGljZUNvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgQVBJUHJhY3RpY2VDb250YWludGVyLmNsYXNzTGlzdC5hZGQoJ0FQSVByYWN0aWNlQ29udGFpbnRlcicsICdjb250ZW50JywgJ2hpZGRlbicpO1xuICBBUElQcmFjdGljZUNvbnRhaW50ZXIuaWQgPSAnQVBJUHJhY3RpY2UnO1xuXG4gIC8vIGNyZWF0ZSBBUEkgdGl0bGVcbiAgY29uc3QgQVBJVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBBUElUaXRsZS5pbm5lclRleHQgPSAnRG9ncyBwbGF5aW5nJztcblxuICAvLyBjcmVhdGUgQVBJIGltZ1xuICBjb25zdCBBUElQcmFjdGljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBBUElQcmFjdGljZS5jbGFzc0xpc3QuYWRkKCdBUElQcmFjdGljZScpO1xuXG4gIC8vIGZldGNoIGltZ1xuICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9bDRWRVVqNUNBUVVVTHBmamVzSmNNSmE1MnFWU1VWWjUmcz1kb2dzJTIwcGxheWluZycsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBBUElQcmFjdGljZS5zcmMgPSByZXNwb25zZS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG4gICAgfSk7XG5cbiAgLy8gQXBwZW5kXG4gIEFQSVByYWN0aWNlQ29udGFpbnRlci5hcHBlbmRDaGlsZChBUElUaXRsZSk7XG4gIEFQSVByYWN0aWNlQ29udGFpbnRlci5hcHBlbmRDaGlsZChBUElQcmFjdGljZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChBUElQcmFjdGljZUNvbnRhaW50ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGVudENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudENvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudENvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudENvbnRhaW5lcicpO1xuXG4gIGNyZWF0ZURyb3Bkb3duTWVudShjb250ZW50Q29udGFpbnRlcik7XG4gIGNyZWF0ZU1vYmlsZU1lbnUoY29udGVudENvbnRhaW50ZXIpO1xuICBjcmVhdGVJbWFnZVNjcm9sbGVyKGNvbnRlbnRDb250YWludGVyKTtcbiAgY3JlYXRlVmFsaWRhdGlvbkZvcm0oY29udGVudENvbnRhaW50ZXIpO1xuICBjcmVhdGVBUElQcmFjdGljZShjb250ZW50Q29udGFpbnRlcik7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbnRlcik7XG4gIGxvb3BJbWFnZVNjcm9sbGVyKCk7XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gamNhbXBiZWxsNTdgO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcnO1xuICBnaXRodWJMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuXG4gIGNvbnN0IG5ld0dpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbmV3R2l0aHViSWNvbi5zcmMgPSBnaXRodWJJY29uO1xuICBuZXdHaXRodWJJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2l0aHViJyk7XG5cbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChuZXdHaXRodWJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlTWFpbk1lbnUoKTtcbiAgY3JlYXRlQ29udGVudENvbnRhaW5lcigpO1xuICBjcmVhdGVGb290ZXIoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemU7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6IHJnYig0NSwgNDUsIDQ1KTtcXG4gICAgLS1saWdodC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICAtLWFjdGl2ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICAtLWVycm9yIDogZGFya3JlZFxcbn1cXG5cXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxcblxcbmh0bWwge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcblxcbmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXI+aDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogTWVudSBzdHlsaW5nICovXFxuXFxuLm1haW5NZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gICAgcGFkZGluZzogMCAxNXZ3O1xcbn1cXG5cXG4ubWVudUl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gICAgbWFyZ2luOiAwLjZyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5tZW51SXRlbTpob3ZlcixcXG4uZHJvcGRvd25NZW51OmhvdmVyLFxcbi5kcm9wZG93bk9wdGlvbjpob3ZlciwgXFxuLm1vYmlsZU1lbnVPcHRpb246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLm1lbnVJdGVtOmFjdGl2ZSxcXG4uZHJvcGRvd25NZW51OmFjdGl2ZSxcXG4uZHJvcGRvd25PcHRpb246YWN0aXZlLFxcbi5tb2JpbGVNZW51T3B0aW9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZSk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogQ29udGVudCBzdHlsaW5nICovXFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2FsYyhjZW50ZXIgLSAzMCUpXFxufVxcblxcblxcblxcblxcblxcbi8qIERyb3Bkb3duIG1lbnUgc3R5bGluZyAqL1xcblxcbi5kcm9wZG93bk1lbnUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZHJvcGRvd25Db250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYygxMDAlICsgMnB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmRyb3Bkb3duT3B0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcblxcblxcblxcblxcbi8qIE1vYmlsZSBtZW51IHN0eWxpbmcgKi9cXG5cXG4ubW9iaWxlTWVudUNvbnRlbnQge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9iaWxlTWVudUNvbnRlbnQ+aDMge1xcbiAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubW9iaWxlTWVudUNvbnRlbnQ+dGFibGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9iaWxlTWVudUNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAvKiBlbmFibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbn1cXG5cXG4vKiBoaWRlIHNjcm9sbGJhciwgcmV0YWluIGZ1bmN0aW9uICovXFxuLm1vYmlsZU1lbnVDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vYmlsZU1lbnVPcHRpb24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuXFxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogSW1hZ2Ugc2Nyb2xsZXIgc3R5bGluZyAqL1xcblxcbi5zY3JvbGxlckltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIHNsaWRlc2hvdyBjb250YWluZXIgKi9cXG4uaW1hZ2VTY3JvbGxlciB7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLyogaGlkZSBpbWFnZXMgZGVmYXVsdCAqL1xcbi5pbWFnZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIG5leHQgJiBwcmV2aW91cyBidXR0b25zICovXFxuLnByZXZpb3VzSW1hZ2VCdG4sIC5uZXh0SW1hZ2VCdG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gICAgLyogdXNlci1zZWxlY3Q6IG5vbmU7ICovXFxufVxcblxcbi8qIHBvc2l0aW9uIG5leHQgYnV0dG9uIG9uIHRoZSByaWdodCAqL1xcbi5uZXh0SW1hZ2VCdG4ge1xcbiAgICByaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxufVxcblxcbi8qIGFkZCBob3ZlciBlZmZlY3QgKi9cXG4ucHJldmlvdXNJbWFnZUJ0bjpob3ZlciwgLm5leHRJbWFnZUJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKVxcbn1cXG5cXG4vKiBjYXB0aW9uIHRleHQgKi9cXG4uaW1hZ2VDYXB0aW9uIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogaW1hZ2UgbnVtYmVyICovXFxuLmltYWdlTnVtYmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi8qIHNjcm9sbGVyIGRvdHMgKi9cXG4uc2Nyb2xsZXJEb3RDb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG59XFxuXFxuLnNjcm9sbGVyRG90IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XFxufVxcblxcbi5zY3JvbGxlckRvdDpob3ZlciwgLnNlbGVjdGVkSW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTcxO1xcbn1cXG5cXG4vKiBmYWRpbmcgYW5pbWF0aW9uICovXFxuLmZhZGUge1xcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcbiAgfVxcblxcbkBrZXlmcmFtZXMgZmFkZSB7XFxuICAgIGZyb20ge29wYWNpdHk6IC40fVxcbiAgICB0byB7b3BhY2l0eTogMX1cXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogTW9iaWxlIGZvcm0gc3R5bGluZyAmIHZhbGlkYXRpb24gc3R5bGluZyAqL1xcblxcbi52YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpOyAgICBcXG59XFxuXFxuLmZvcm1IZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5mb3JtSGVhZGVyPmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjE1ZW07XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udmFsaWRhdGlvbkZvcm0ge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG5cXG4gICAgLyogd2lkdGg6IDgwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm1Sb3cge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgXFxufVxcblxcbi5mb3JtUm93IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uZm9ybVJvdyBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTsgICAgICAgICAgLyogVGhpcyB3b24ndCB3b3JrIGluIENocm9tZSBvciBTYWZhcmkgKi9cXG4gICAgLyogLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAgIFRoaXMgd2lsbCBtYWtlIGl0IHdvcmsgKi9cXG59XFxuXFxuLmZvcm1Sb3cgbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5mb3JtUm93IGlucHV0OmludmFsaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZXJyb3IpO1xcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IHJlZCBnbG93IGluIEZpcmVmb3ggKi9cXG59XFxuXFxuLmZvcm1Sb3cgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybVJvdyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUpO1xcbn1cXG5cXG4uZm9ybVJvdyBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlKTtcXG4gICAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogQVBJIHN0eWxpbmcgKi9cXG5cXG4uQVBJUHJhY3RpY2VDb250YWludGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuLkFQSVByYWN0aWNlQ29udGFpbnRlcj5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcblxcblxcblxcblxcblxcbi8qIEZvb3RlciBzdHlsaW5nICovXFxuXFxuZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG5cXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcblxcbi8qIGNlbnRlcnMgZ2l0aHViIGljb24gdmVydGljYWxseSAqL1xcbmZvb3Rlcj5hIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdpdGh1YiB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5naXRodWI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBEZXNrdG9wIGZvcm0gc3R5bGluZyAgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAgIC5mb3JtSGVhZGVyLFxcbiAgICAudmFsaWRhdGlvbkZvcm0ge1xcbiAgICAgIHdpZHRoOiA2MDBweDtcXG4gICAgfVxcbiAgICAuZm9ybVJvdyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgLyogVG8gYXZvaWQgc3RyZXRjaGluZyAqL1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIH1cXG4gICAgLmZvcm1Sb3cgaW5wdXQsXFxuICAgIC5mb3JtUm93IHNlbGVjdCB7XFxuICAgICAgd2lkdGg6IDI4MHB4O1xcbiAgICAgIGhlaWdodDogaW5pdGlhbDtcXG4gICAgfVxcbiAgICAuZm9ybVJvdyBsYWJlbCB7XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgICAgd2lkdGg6IDE4MHB4O1xcbiAgICAgIG1hcmdpbi10b3A6IDdweDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICB9XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEM7QUFDSjs7QUFFQSxHQUFHLHNCQUFzQjs7QUFFekI7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3SEFBd0g7SUFDeEgsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOzs7Ozs7QUFNQSxtQkFBbUI7O0FBRW5CO0lBQ0ksYUFBYTs7SUFFYix3Q0FBd0M7SUFDeEMseUJBQXlCOztJQUV6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7Ozs7OztBQU1BLGlC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QUNiLGdCQUFnQjtJQUNoQix3Q0FBd0M7O0lBRXhDLHdDQUF3QztJQUN4Qyx5QkFBeUI7O0lBRXpCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTOztBQUViOztBQUVBLG1DQUFtQztBQUNuQztJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOzs7Ozs7QUFNQSwwQkFBMEI7O0FBRTFCO0lBQ0k7O01BRUUsWUFBWTtJQUNkO0lBQ0E7TUFDRSxtQkFBbUI7TUFDbkIsdUJBQXVCLEVBQUUsd0JBQXdCO01BQ2pELG1CQUFtQjtJQUNyQjtJQUNBOztNQUVFLFlBQVk7TUFDWixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGVBQWU7TUFDZixtQkFBbUI7SUFDckI7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogcmdiKDQ1LCA0NSwgNDUpO1xcbiAgICAtLWxpZ2h0LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIC0tYWN0aXZlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIC0tZXJyb3IgOiBkYXJrcmVkXFxufVxcblxcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XFxuXFxuaHRtbCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcblxcblxcblxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuXFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmhlYWRlcj5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBNZW51IHN0eWxpbmcgKi9cXG5cXG4ubWFpbk1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgICBwYWRkaW5nOiAwIDE1dnc7XFxufVxcblxcbi5tZW51SXRlbSB7XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgICBtYXJnaW46IDAuNnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLm1lbnVJdGVtOmhvdmVyLFxcbi5kcm9wZG93bk1lbnU6aG92ZXIsXFxuLmRyb3Bkb3duT3B0aW9uOmhvdmVyLCBcXG4ubW9iaWxlTWVudU9wdGlvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4ubWVudUl0ZW06YWN0aXZlLFxcbi5kcm9wZG93bk1lbnU6YWN0aXZlLFxcbi5kcm9wZG93bk9wdGlvbjphY3RpdmUsXFxuLm1vYmlsZU1lbnVPcHRpb246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlKTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBDb250ZW50IHN0eWxpbmcgKi9cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjYWxjKGNlbnRlciAtIDMwJSlcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRHJvcGRvd24gbWVudSBzdHlsaW5nICovXFxuXFxuLmRyb3Bkb3duTWVudSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kcm9wZG93bkNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKDEwMCUgKyAycHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uZHJvcGRvd25PcHRpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogTW9iaWxlIG1lbnUgc3R5bGluZyAqL1xcblxcbi5tb2JpbGVNZW51Q29udGVudCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb2JpbGVNZW51Q29udGVudD5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tb2JpbGVNZW51Q29udGVudD50YWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2JpbGVNZW51Q29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIC8qIGVuYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcblxcbi8qIGhpZGUgc2Nyb2xsYmFyLCByZXRhaW4gZnVuY3Rpb24gKi9cXG4ubW9iaWxlTWVudUNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9iaWxlTWVudU9wdGlvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG5cXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBJbWFnZSBzY3JvbGxlciBzdHlsaW5nICovXFxuXFxuLnNjcm9sbGVySW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogc2xpZGVzaG93IGNvbnRhaW5lciAqL1xcbi5pbWFnZVNjcm9sbGVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiBoaWRlIGltYWdlcyBkZWZhdWx0ICovXFxuLmltYWdlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cXG4ucHJldmlvdXNJbWFnZUJ0biwgLm5leHRJbWFnZUJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IC0yMnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgICAvKiB1c2VyLXNlbGVjdDogbm9uZTsgKi9cXG59XFxuXFxuLyogcG9zaXRpb24gbmV4dCBidXR0b24gb24gdGhlIHJpZ2h0ICovXFxuLm5leHRJbWFnZUJ0biB7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXG59XFxuXFxuLyogYWRkIGhvdmVyIGVmZmVjdCAqL1xcbi5wcmV2aW91c0ltYWdlQnRuOmhvdmVyLCAubmV4dEltYWdlQnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpXFxufVxcblxcbi8qIGNhcHRpb24gdGV4dCAqL1xcbi5pbWFnZUNhcHRpb24ge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBpbWFnZSBudW1iZXIgKi9cXG4uaW1hZ2VOdW1iZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLyogc2Nyb2xsZXIgZG90cyAqL1xcbi5zY3JvbGxlckRvdENvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG4uc2Nyb2xsZXJEb3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIG1hcmdpbjogMCAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcXG59XFxuXFxuLnNjcm9sbGVyRG90OmhvdmVyLCAuc2VsZWN0ZWRJbWFnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MTcxNzE7XFxufVxcblxcbi8qIGZhZGluZyBhbmltYXRpb24gKi9cXG4uZmFkZSB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxuICB9XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogLjR9XFxuICAgIHRvIHtvcGFjaXR5OiAxfVxcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBNb2JpbGUgZm9ybSBzdHlsaW5nICYgdmFsaWRhdGlvbiBzdHlsaW5nICovXFxuXFxuLnZhbGlkYXRpb25Gb3JtQ29udGFpbnRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7ICAgIFxcbn1cXG5cXG4uZm9ybUhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLmZvcm1IZWFkZXI+aDMge1xcbiAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi52YWxpZGF0aW9uRm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcblxcbiAgICAvKiB3aWR0aDogODAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybVJvdyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwOyBcXG59XFxuXFxuLmZvcm1Sb3cgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5mb3JtUm93IHNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtOyAgICAgICAgICAvKiBUaGlzIHdvbid0IHdvcmsgaW4gQ2hyb21lIG9yIFNhZmFyaSAqL1xcbiAgICAvKiAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7ICAgVGhpcyB3aWxsIG1ha2UgaXQgd29yayAqL1xcbn1cXG5cXG4uZm9ybVJvdyBsYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmZvcm1Sb3cgaW5wdXQ6aW52YWxpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1lcnJvcik7XFxuICBjb2xvcjogdmFyKC0tZXJyb3IpO1xcbiAgYm94LXNoYWRvdzogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgcmVkIGdsb3cgaW4gRmlyZWZveCAqL1xcbn1cXG5cXG4uZm9ybVJvdyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtUm93IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZSk7XFxufVxcblxcbi5mb3JtUm93IGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUpO1xcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBBUEkgc3R5bGluZyAqL1xcblxcbi5BUElQcmFjdGljZUNvbnRhaW50ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbn1cXG5cXG4uQVBJUHJhY3RpY2VDb250YWludGVyPmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjE1ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogRm9vdGVyIHN0eWxpbmcgKi9cXG5cXG5mb290ZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcblxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG59XFxuXFxuLyogY2VudGVycyBnaXRodWIgaWNvbiB2ZXJ0aWNhbGx5ICovXFxuZm9vdGVyPmEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmdpdGh1Yjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcblxcblxcblxcblxcbi8qIERlc2t0b3AgZm9ybSBzdHlsaW5nICAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICAgLmZvcm1IZWFkZXIsXFxuICAgIC52YWxpZGF0aW9uRm9ybSB7XFxuICAgICAgd2lkdGg6IDYwMHB4O1xcbiAgICB9XFxuICAgIC5mb3JtUm93IHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBUbyBhdm9pZCBzdHJldGNoaW5nICovXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbiAgICAuZm9ybVJvdyBpbnB1dCxcXG4gICAgLmZvcm1Sb3cgc2VsZWN0IHtcXG4gICAgICB3aWR0aDogMjgwcHg7XFxuICAgICAgaGVpZ2h0OiBpbml0aWFsO1xcbiAgICB9XFxuICAgIC5mb3JtUm93IGxhYmVsIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICB3aWR0aDogMTgwcHg7XFxuICAgICAgbWFyZ2luLXRvcDogN3B4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9wYWdlTG9hZGVyJztcblxuaW5pdGlhbGl6ZSgpO1xuIl0sIm5hbWVzIjpbImNvdW50cnlMaXN0QWxwaGEyIiwiQUYiLCJBTCIsIkRaIiwiQVMiLCJBRCIsIkFPIiwiQUkiLCJBUSIsIkFHIiwiQVIiLCJBTSIsIkFXIiwiQVUiLCJBVCIsIkFaIiwiQlMiLCJCSCIsIkJEIiwiQkIiLCJCWSIsIkJFIiwiQloiLCJCSiIsIkJNIiwiQlQiLCJCTyIsIkJRIiwiQkEiLCJCVyIsIkJWIiwiQlIiLCJJTyIsIkJOIiwiQkciLCJCRiIsIkJJIiwiQ1YiLCJLSCIsIkNNIiwiQ0EiLCJLWSIsIkNGIiwiVEQiLCJDTCIsIkNOIiwiQ1giLCJDQyIsIkNPIiwiS00iLCJDRCIsIkNHIiwiQ0siLCJDUiIsIkhSIiwiQ1UiLCJDVyIsIkNZIiwiQ1oiLCJDSSIsIkRLIiwiREoiLCJETSIsIkRPIiwiRUMiLCJFRyIsIlNWIiwiR1EiLCJFUiIsIkVFIiwiU1oiLCJFVCIsIkZLIiwiRk8iLCJGSiIsIkZJIiwiRlIiLCJHRiIsIlBGIiwiVEYiLCJHQSIsIkdNIiwiR0UiLCJERSIsIkdIIiwiR0kiLCJHUiIsIkdMIiwiR0QiLCJHUCIsIkdVIiwiR1QiLCJHRyIsIkdOIiwiR1ciLCJHWSIsIkhUIiwiSE0iLCJWQSIsIkhOIiwiSEsiLCJIVSIsIklTIiwiSU4iLCJJRCIsIklSIiwiSVEiLCJJRSIsIklNIiwiSUwiLCJJVCIsIkpNIiwiSlAiLCJKRSIsIkpPIiwiS1oiLCJLRSIsIktJIiwiS1AiLCJLUiIsIktXIiwiS0ciLCJMQSIsIkxWIiwiTEIiLCJMUyIsIkxSIiwiTFkiLCJMSSIsIkxUIiwiTFUiLCJNTyIsIk1HIiwiTVciLCJNWSIsIk1WIiwiTUwiLCJNVCIsIk1IIiwiTVEiLCJNUiIsIk1VIiwiWVQiLCJNWCIsIkZNIiwiTUQiLCJNQyIsIk1OIiwiTUUiLCJNUyIsIk1BIiwiTVoiLCJNTSIsIk5BIiwiTlIiLCJOUCIsIk5MIiwiTkMiLCJOWiIsIk5JIiwiTkUiLCJORyIsIk5VIiwiTkYiLCJNUCIsIk5PIiwiT00iLCJQSyIsIlBXIiwiUFMiLCJQQSIsIlBHIiwiUFkiLCJQRSIsIlBIIiwiUE4iLCJQTCIsIlBUIiwiUFIiLCJRQSIsIk1LIiwiUk8iLCJSVSIsIlJXIiwiUkUiLCJCTCIsIlNIIiwiS04iLCJMQyIsIk1GIiwiUE0iLCJWQyIsIldTIiwiU00iLCJTVCIsIlNBIiwiU04iLCJSUyIsIlNDIiwiU0wiLCJTRyIsIlNYIiwiU0siLCJTSSIsIlNCIiwiU08iLCJaQSIsIkdTIiwiU1MiLCJFUyIsIkxLIiwiU0QiLCJTUiIsIlNKIiwiU0UiLCJDSCIsIlNZIiwiVFciLCJUSiIsIlRaIiwiVEgiLCJUTCIsIlRHIiwiVEsiLCJUTyIsIlRUIiwiVE4iLCJUUiIsIlRNIiwiVEMiLCJUViIsIlVHIiwiVUEiLCJBRSIsIkdCIiwiVU0iLCJVUyIsIlVZIiwiVVoiLCJWVSIsIlZFIiwiVk4iLCJWRyIsIlZJIiwiV0YiLCJFSCIsIllFIiwiWk0iLCJaVyIsIkFYIiwidmFsaWRhdGVFbWFpbCIsImVtYWlsSW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsaWRpdHkiLCJ0eXBlTWlzbWF0Y2giLCJ2YWx1ZSIsInNldEN1c3RvbVZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJjcmVhdGVFbWFpbElucHV0IiwiY29udGFpbmVyIiwiZm9ybVJvdyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJlbWFpbExhYmVsIiwiZm9yIiwiaW5uZXJUZXh0IiwiaWQiLCJuYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwidmFsaWRhdGVDb3VudHJ5SW5wdXQiLCJjb3VudHJ5U2VsZWN0aW9uIiwiY3JlYXRlQ291bnRyeUlucHV0IiwiY291bnRyeUxhYmVsIiwiYmxhbmtPcHRpb24iLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIm5ld09wdGlvbiIsInZhbGlkYXRlWmlwQ29kZSIsInppcENvZGVJbnB1dCIsInRlc3QiLCJjcmVhdGVaaXBDb2RlSW5wdXQiLCJ6aXBDb2RlTGFiZWwiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwicGFzc3dvcmRJbnB1dCIsImxlbmd0aCIsImNyZWF0ZVBhc3N3b3JkSW5wdXQiLCJwYXNzd29yZExhYmVsIiwiY29uZmlybVBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkSW5wdXQiLCJjcmVhdGVDb25maXJtUGFzc3dvcmRJbnB1dCIsImNvbmZpcm1QYXNzd29yZExhYmVsIiwic3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZVN1Ym1pdEJ1dHRvbiIsInN1Ym1pdEJ0biIsImdlbmVyYXRlRm9ybSIsImdpdGh1Ykljb24iLCJwbGFjZWhvbGRlckltZzEiLCJwbGFjZWhvbGRlckltZzIiLCJwbGFjZWhvbGRlckltZzMiLCJwbGFjZWhvbGRlckltZzQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsInByb2Nlc3NNZW51U2VsZWN0aW9uIiwibWFpbk1lbnUiLCJjb250ZW50Q29udGFpbmVyIiwibWVudUNvdW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJpIiwiY2hpbGRyZW4iLCJyZW1vdmUiLCJ0YXJnZXQiLCJjb250ZW50Q291bnQiLCJjb250YWlucyIsImNyZWF0ZU1lbnVJdGVtIiwiaXRlbU5hbWUiLCJpdGVtQ29udGFpbmVyIiwiaXRlbUlkIiwiaXRlbUNsYXNzIiwibmV3TWVudUl0ZW0iLCJ1bmRlZmluZWQiLCJzZXRBdHRyaWJ1dGUiLCJhZGRJbWFnZVRvU2Nyb2xsZXIiLCJpbWFnZSIsInNjcm9sbGVyIiwiY2FwdGlvbiIsImltYWdlQ29udGFpbmVyIiwiaW1hZ2VOdW1iZXIiLCJuZXdJbWFnZSIsInNyYyIsImltYWdlQ2FwdGlvbiIsInNsaWRlSW5kZXgiLCJzZWxlY3RJbWFnZSIsIm4iLCJzY3JvbGxlckltYWdlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzY3JvbGxlckRvdHMiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwibG9vcEltYWdlU2Nyb2xsZXIiLCJzZXRUaW1lb3V0IiwiY3JlYXRlSGVhZGVyIiwiaGVhZGVyIiwiaGVhZGVyVGl0bGUiLCJjcmVhdGVNYWluTWVudSIsImNyZWF0ZURyb3Bkb3duTWVudSIsImRyb3Bkb3duTWVudUNvbnRhaW50ZXIiLCJkcm9wZG93bkNvbnRhaW5lciIsImRyb3Bkb3duT3B0aW9uIiwiZHJvcGRvd25NZW51IiwidG9nZ2xlIiwid2luZG93Iiwib25jbGljayIsIm1hdGNoZXMiLCJjcmVhdGVNb2JpbGVNZW51IiwibW9iaWxlTWVudUNvbnRlbnQiLCJtb2JpbGVNZW51VGl0bGUiLCJtb2JpbGVNZW51VGFibGUiLCJtb2JpbGVNZW51Q29udGFpbnRlciIsInNjcm9sbExlZnQiLCJkZWx0YVkiLCJtb2JpbGVNZW51T3B0aW9uIiwibW9iaWxlTWVudUNvdW50IiwiY3JlYXRlSW1hZ2VTY3JvbGxlciIsImltYWdlU2Nyb2xsZXJDb250YWludGVyIiwiaW1hZ2VTY3JvbGxlciIsInByZXZpb3VzSW1hZ2VCdG4iLCJpbm5lckhUTUwiLCJuZXh0SW1hZ2VCdG4iLCJzY3JvbGxlckRvdENvbnRhaW5lciIsIm5ld0RvdCIsImNyZWF0ZVZhbGlkYXRpb25Gb3JtIiwidmFsaWRhdGlvbkZvcm1Db250YWludGVyIiwiZm9ybUhlYWRlciIsImZvcm1UaXRsZSIsInZhbGlkYXRpb25Gb3JtIiwiYXV0b2NvbXBsZXRlIiwiY3JlYXRlQVBJUHJhY3RpY2UiLCJBUElQcmFjdGljZUNvbnRhaW50ZXIiLCJBUElUaXRsZSIsIkFQSVByYWN0aWNlIiwiZmV0Y2giLCJtb2RlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJpbWFnZXMiLCJvcmlnaW5hbCIsInVybCIsImNyZWF0ZUNvbnRlbnRDb250YWluZXIiLCJjb250ZW50Q29udGFpbnRlciIsImNyZWF0ZUZvb3RlciIsImZvb3RlciIsImNvcHlyaWdodCIsInRleHRDb250ZW50IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2l0aHViTGluayIsImhyZWYiLCJuZXdHaXRodWJJY29uIiwiaW5pdGlhbGl6ZSJdLCJzb3VyY2VSb290IjoiIn0=