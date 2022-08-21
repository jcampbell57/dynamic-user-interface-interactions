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
  // creat API practice container
  const APIPracticeContainter = document.createElement('div');
  APIPracticeContainter.classList.add('APIPracticeContainter', 'content', 'hidden');
  APIPracticeContainter.id = 'APIPractice'; // create API title

  const APITitle = document.createElement('h3');
  APITitle.innerText = 'API image search'; // creat API image container

  const APIImageContainer = document.createElement('div');
  APIImageContainer.classList.add('APIImageContainer'); // create API img

  const APIPractice = document.createElement('img');
  APIPractice.classList.add('APIPractice'); // fetch img

  fetch('https://api.giphy.com/v1/gifs/translate?api_key=l4VEUj5CAQUULpfjesJcMJa52qVSUVZ5&s=dogs%20playing', {
    mode: 'cors'
  }).then(response => response.json()).then(response => {
    APIPractice.src = response.data.images.original.url;
  }).catch(err => console.log(err)); // search input

  const APISearchInput = document.createElement('input');
  APISearchInput.placeholder = 'dogs playing'; // search button

  const APISearchBtn = document.createElement('div');
  APISearchBtn.classList.add('APISearchBtn');
  APISearchBtn.innerText = 'Search'; // Append

  APIPracticeContainter.appendChild(APITitle);
  APIPracticeContainter.appendChild(APIImageContainer);
  APIImageContainer.appendChild(APIPractice);
  APIImageContainer.appendChild(APISearchInput);
  APIImageContainer.appendChild(APISearchBtn);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: rgb(90, 90, 90);\n    --secondary-color: rgb(45, 45, 45);\n    --light-color: whitesmoke;\n    --hover: rgba(255, 255, 255, 0.2);\n    --active: rgba(255, 255, 255, 0.3);\n    --error : darkred\n}\n\n* {box-sizing: border-box}\n\nhtml {\n    overflow: hidden;\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden;\n}\n\n\n\n\n\n/* Header styling */\n\nheader {\n    padding: 1rem;\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nheader>h1 {\n    font-size: 2em;\n    font-weight: bolder;\n}\n\n\n\n\n\n/* Menu styling */\n\n.mainMenu {\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n    border-bottom: 3px solid var(--light-color);\n\n    display: flex;\n    text-align: center;\n    align-items: center;\n    justify-content: space-evenly;\n\n    padding: 0 15vw;\n}\n\n.menuItem {\n    padding: 0.4rem 1rem;\n    margin: 0.6rem;\n    font-size: 1.1rem;\n    border-radius: 0.3rem;\n}\n\n.menuItem:hover,\n.dropdownMenu:hover,\n.dropdownOption:hover, \n.mobileMenuOption:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.menuItem:active,\n.dropdownMenu:active,\n.dropdownOption:active,\n.mobileMenuOption:active {\n    background-color: var(--active);\n}\n\n.selected {\n    background-color: var(--hover);\n}\n\n\n\n\n\n/* Content styling */\n\n.hidden {\n    display: none;\n}\n\n.contentContainer {\n    background-color: var(--background-color);\n\n    height: 100%;\n    padding: 1rem;\n    overflow: auto;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: calc(center - 30%)\n}\n\n\n\n\n\n/* Dropdown menu styling */\n\n.dropdownMenu {\n    color: var(--light-color);\n    width: 20vw;\n    min-width: fit-content;\n    padding: 0.5rem 1rem;\n    border: 2px solid var(--light-color);\n    text-align: center;\n    font-size: 1.1rem;\n    position: relative;\n}\n\n.dropdownContainer {\n    position: absolute;\n    top: calc(100% + 2px);\n    width: 100%;\n    left: 0;\n\n    border: 1px solid var(--light-color);\n}\n\n.dropdownOption {\n    display: block;\n    text-align: center;\n    padding: 0.5rem 1rem;\n}\n\n\n\n\n\n/* Mobile menu styling */\n\n.mobileMenuContent {\n    color: var(--light-color);\n    text-align: center;\n    width: 100%;\n}\n\n.mobileMenuContent>h3 {\n    font-size: 1.15em;\n    margin-bottom: 1em;\n    font-weight: 500;\n}\n\n.mobileMenuContent>table {\n    display: flex;\n}\n\n.mobileMenuContainer {\n    border: 2px solid var(--light-color);\n    cursor: grab;\n    display: flex;\n\n    /* enable horizontal scroll */\n    overflow-x: scroll;\n}\n\n/* hide scrollbar, retain function */\n.mobileMenuContainer::-webkit-scrollbar {\n    display: none;\n}\n\n.mobileMenuOption {\n    padding: 0.5rem 1rem;\n    font-size: 1.1rem;\n\n    min-width: max-content;\n    text-align: center;\n}\n\n\n\n\n\n/* Image scroller styling */\n\n.scrollerImage {\n    width: 100%;\n}\n\n/* slideshow container */\n.imageScroller {\n    max-width: 1000px;\n    position: relative;\n    margin: auto;\n}\n\n/* hide images default */\n.imageContainer {\n    display: none;\n}\n\n/* next & previous buttons */\n.previousImageBtn, .nextImageBtn {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    width: auto;\n    margin-top: -22px;\n    padding: 16px;\n    color: var(--light-color);\n    font-weight: bold;\n    font-size: 18px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n    /* user-select: none; */\n}\n\n/* position next button on the right */\n.nextImageBtn {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n\n/* add hover effect */\n.previousImageBtn:hover, .nextImageBtn:hover {\n    background-color: var(--hover)\n}\n\n/* caption text */\n.imageCaption {\n    color: var(--light-color);\n    font-size: 15px;\n    padding: 8px 12px;\n    position: absolute;\n    bottom: 8px;\n    width: 100%;\n    text-align: center;\n}\n\n/* image number */\n.imageNumber {\n    color: var(--light-color);\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n\n/* scroller dots */\n.scrollerDotContainer {\n    text-align: center;\n    margin-top: 4px;\n}\n\n.scrollerDot {\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    margin: 0 2px;\n    background-color: #bbb;\n    border-radius: 50%;\n    display: inline-block;\n    transition: background-color 0.6s ease;\n}\n\n.scrollerDot:hover, .selectedImage {\n    background-color: #717171;\n}\n\n/* fading animation */\n.fade {\n    animation-name: fade;\n    animation-duration: 1.5s;\n  }\n\n@keyframes fade {\n    from {opacity: .4}\n    to {opacity: 1}\n}\n\n\n\n\n\n/* Mobile form styling & validation styling */\n\n.validationFormContainter {\n    color: var(--light-color);    \n}\n\n.formHeader {\n    text-align: center;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n}\n\n.formHeader>h3 {\n    font-size: 1.15em;\n    padding: 0.5em;\n    font-weight: 500;\n}\n\n.validationForm {\n    font-size: 1.1em;\n    padding: 0.5em;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n\n    /* width: 80%; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.formRow {\n    margin-bottom: 1rem;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    flex-wrap: wrap; \n}\n\n.formRow input {\n    background-color: var(--light-color);\n    border: 1px solid var(--secondary-color);\n    border-radius: 3px;\n    width: 100%;\n    padding: 7px;\n    font-size: 1.1rem;\n}\n\n.formRow select {\n    width: 100%;\n    padding: 5px;\n    font-size: 1.1rem;          /* This won't work in Chrome or Safari */\n    /* -webkit-appearance: none;   This will make it work */\n}\n\n.formRow label {\n    margin-bottom: 0.5rem;\n}\n\n.formRow input:invalid {\n  border: 1px solid var(--error);\n  color: var(--error);\n  box-shadow: none; /* Remove default red glow in Firefox */\n}\n\n.formRow button {\n    font-size: 1.15rem;\n    font-weight: bold;\n\n    color: #FFFFFF;\n    background-color: var(--hover);\n\n    border: none;\n    border-radius: 3px;\n\n    padding: 10px 40px;\n    cursor: pointer;\n}\n\n.formRow button:hover {\n    background-color: var(--active);\n}\n\n.formRow button:active {\n    background-color: var(--active);\n    cursor: grabbing;\n}\n\n\n\n\n\n/* API styling */\n\n.APIPracticeContainter {\n    color: var(--light-color);\n    text-align: center;\n    /* width: 100%; */\n}\n\n.APIImageContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.APIPracticeContainter>h3 {\n    font-size: 1.15em;\n    margin-bottom: 1em;\n    font-weight: 500;\n}\n\n.APISearchBtn {\n    font-size: 1.15rem;\n    font-weight: bold;\n\n    color: #FFFFFF;\n    background-color: var(--hover);\n\n    border: none;\n    border-radius: 3px;\n\n    padding: 10px 40px;\n    cursor: pointer;\n}\n\n.APISearchBtn:hover {\n    background-color: var(--active);\n}\n\n.APISearchBtn:active {\n    background-color: var(--active);\n    cursor: grabbing;\n}\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    padding: 1rem;\n    margin-top: auto;\n    border-top: 3px solid var(--light-color);\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n\n}\n\n/* centers github icon vertically */\nfooter>a {\n    display: flex;\n}\n\n.github {\n    height: 24px;\n    transition: transform 0.3s ease-in-out;\n}\n\n.github:hover {\n    transform: rotate(-360deg) scale(1.2);\n}\n\n\n\n\n\n/* Desktop form styling  */\n\n@media only screen and (min-width: 700px) {\n    .formHeader,\n    .validationForm {\n      width: 600px;\n    }\n    .formRow {\n      flex-direction: row;\n      align-items: flex-start; /* To avoid stretching */\n      margin-bottom: 20px;\n    }\n    .formRow input,\n    .formRow select {\n      width: 280px;\n      height: initial;\n    }\n    .formRow label {\n      text-align: right;\n      width: 180px;\n      margin-top: 7px;\n      padding-right: 20px;\n    }\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --background-color: rgb(90, 90, 90);\n    --secondary-color: rgb(45, 45, 45);\n    --light-color: whitesmoke;\n    --hover: rgba(255, 255, 255, 0.2);\n    --active: rgba(255, 255, 255, 0.3);\n    --error : darkred\n}\n\n* {box-sizing: border-box}\n\nhtml {\n    overflow: hidden;\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden;\n}\n\n\n\n\n\n/* Header styling */\n\nheader {\n    padding: 1rem;\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nheader>h1 {\n    font-size: 2em;\n    font-weight: bolder;\n}\n\n\n\n\n\n/* Menu styling */\n\n.mainMenu {\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n    border-bottom: 3px solid var(--light-color);\n\n    display: flex;\n    text-align: center;\n    align-items: center;\n    justify-content: space-evenly;\n\n    padding: 0 15vw;\n}\n\n.menuItem {\n    padding: 0.4rem 1rem;\n    margin: 0.6rem;\n    font-size: 1.1rem;\n    border-radius: 0.3rem;\n}\n\n.menuItem:hover,\n.dropdownMenu:hover,\n.dropdownOption:hover, \n.mobileMenuOption:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.menuItem:active,\n.dropdownMenu:active,\n.dropdownOption:active,\n.mobileMenuOption:active {\n    background-color: var(--active);\n}\n\n.selected {\n    background-color: var(--hover);\n}\n\n\n\n\n\n/* Content styling */\n\n.hidden {\n    display: none;\n}\n\n.contentContainer {\n    background-color: var(--background-color);\n\n    height: 100%;\n    padding: 1rem;\n    overflow: auto;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: calc(center - 30%)\n}\n\n\n\n\n\n/* Dropdown menu styling */\n\n.dropdownMenu {\n    color: var(--light-color);\n    width: 20vw;\n    min-width: fit-content;\n    padding: 0.5rem 1rem;\n    border: 2px solid var(--light-color);\n    text-align: center;\n    font-size: 1.1rem;\n    position: relative;\n}\n\n.dropdownContainer {\n    position: absolute;\n    top: calc(100% + 2px);\n    width: 100%;\n    left: 0;\n\n    border: 1px solid var(--light-color);\n}\n\n.dropdownOption {\n    display: block;\n    text-align: center;\n    padding: 0.5rem 1rem;\n}\n\n\n\n\n\n/* Mobile menu styling */\n\n.mobileMenuContent {\n    color: var(--light-color);\n    text-align: center;\n    width: 100%;\n}\n\n.mobileMenuContent>h3 {\n    font-size: 1.15em;\n    margin-bottom: 1em;\n    font-weight: 500;\n}\n\n.mobileMenuContent>table {\n    display: flex;\n}\n\n.mobileMenuContainer {\n    border: 2px solid var(--light-color);\n    cursor: grab;\n    display: flex;\n\n    /* enable horizontal scroll */\n    overflow-x: scroll;\n}\n\n/* hide scrollbar, retain function */\n.mobileMenuContainer::-webkit-scrollbar {\n    display: none;\n}\n\n.mobileMenuOption {\n    padding: 0.5rem 1rem;\n    font-size: 1.1rem;\n\n    min-width: max-content;\n    text-align: center;\n}\n\n\n\n\n\n/* Image scroller styling */\n\n.scrollerImage {\n    width: 100%;\n}\n\n/* slideshow container */\n.imageScroller {\n    max-width: 1000px;\n    position: relative;\n    margin: auto;\n}\n\n/* hide images default */\n.imageContainer {\n    display: none;\n}\n\n/* next & previous buttons */\n.previousImageBtn, .nextImageBtn {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    width: auto;\n    margin-top: -22px;\n    padding: 16px;\n    color: var(--light-color);\n    font-weight: bold;\n    font-size: 18px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n    /* user-select: none; */\n}\n\n/* position next button on the right */\n.nextImageBtn {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n\n/* add hover effect */\n.previousImageBtn:hover, .nextImageBtn:hover {\n    background-color: var(--hover)\n}\n\n/* caption text */\n.imageCaption {\n    color: var(--light-color);\n    font-size: 15px;\n    padding: 8px 12px;\n    position: absolute;\n    bottom: 8px;\n    width: 100%;\n    text-align: center;\n}\n\n/* image number */\n.imageNumber {\n    color: var(--light-color);\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n\n/* scroller dots */\n.scrollerDotContainer {\n    text-align: center;\n    margin-top: 4px;\n}\n\n.scrollerDot {\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    margin: 0 2px;\n    background-color: #bbb;\n    border-radius: 50%;\n    display: inline-block;\n    transition: background-color 0.6s ease;\n}\n\n.scrollerDot:hover, .selectedImage {\n    background-color: #717171;\n}\n\n/* fading animation */\n.fade {\n    animation-name: fade;\n    animation-duration: 1.5s;\n  }\n\n@keyframes fade {\n    from {opacity: .4}\n    to {opacity: 1}\n}\n\n\n\n\n\n/* Mobile form styling & validation styling */\n\n.validationFormContainter {\n    color: var(--light-color);    \n}\n\n.formHeader {\n    text-align: center;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n}\n\n.formHeader>h3 {\n    font-size: 1.15em;\n    padding: 0.5em;\n    font-weight: 500;\n}\n\n.validationForm {\n    font-size: 1.1em;\n    padding: 0.5em;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n\n    /* width: 80%; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.formRow {\n    margin-bottom: 1rem;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    flex-wrap: wrap; \n}\n\n.formRow input {\n    background-color: var(--light-color);\n    border: 1px solid var(--secondary-color);\n    border-radius: 3px;\n    width: 100%;\n    padding: 7px;\n    font-size: 1.1rem;\n}\n\n.formRow select {\n    width: 100%;\n    padding: 5px;\n    font-size: 1.1rem;          /* This won't work in Chrome or Safari */\n    /* -webkit-appearance: none;   This will make it work */\n}\n\n.formRow label {\n    margin-bottom: 0.5rem;\n}\n\n.formRow input:invalid {\n  border: 1px solid var(--error);\n  color: var(--error);\n  box-shadow: none; /* Remove default red glow in Firefox */\n}\n\n.formRow button {\n    font-size: 1.15rem;\n    font-weight: bold;\n\n    color: #FFFFFF;\n    background-color: var(--hover);\n\n    border: none;\n    border-radius: 3px;\n\n    padding: 10px 40px;\n    cursor: pointer;\n}\n\n.formRow button:hover {\n    background-color: var(--active);\n}\n\n.formRow button:active {\n    background-color: var(--active);\n    cursor: grabbing;\n}\n\n\n\n\n\n/* API styling */\n\n.APIPracticeContainter {\n    color: var(--light-color);\n    text-align: center;\n    /* width: 100%; */\n}\n\n.APIImageContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.APIPracticeContainter>h3 {\n    font-size: 1.15em;\n    margin-bottom: 1em;\n    font-weight: 500;\n}\n\n.APISearchBtn {\n    font-size: 1.15rem;\n    font-weight: bold;\n\n    color: #FFFFFF;\n    background-color: var(--hover);\n\n    border: none;\n    border-radius: 3px;\n\n    padding: 10px 40px;\n    cursor: pointer;\n}\n\n.APISearchBtn:hover {\n    background-color: var(--active);\n}\n\n.APISearchBtn:active {\n    background-color: var(--active);\n    cursor: grabbing;\n}\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    padding: 1rem;\n    margin-top: auto;\n    border-top: 3px solid var(--light-color);\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n\n}\n\n/* centers github icon vertically */\nfooter>a {\n    display: flex;\n}\n\n.github {\n    height: 24px;\n    transition: transform 0.3s ease-in-out;\n}\n\n.github:hover {\n    transform: rotate(-360deg) scale(1.2);\n}\n\n\n\n\n\n/* Desktop form styling  */\n\n@media only screen and (min-width: 700px) {\n    .formHeader,\n    .validationForm {\n      width: 600px;\n    }\n    .formRow {\n      flex-direction: row;\n      align-items: flex-start; /* To avoid stretching */\n      margin-bottom: 20px;\n    }\n    .formRow input,\n    .formRow select {\n      width: 280px;\n      height: initial;\n    }\n    .formRow label {\n      text-align: right;\n      width: 180px;\n      margin-top: 7px;\n      padding-right: 20px;\n    }\n  }"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxhQUFhLE1BQU0sVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssZUFBZSxnQkFBZ0IsV0FBVyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsd0JBQXdCLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSx5QkFBeUIsT0FBTyxLQUFL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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBRUFBLHVEQUFVLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9mb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9wYWdlTG9hZGVyLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvcmVzZXQuY3NzP2VkZTAiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvdW50cnkgbmFtZXMgb2JqZWN0IHVzaW5nIDItbGV0dGVyIGNvdW50cnkgY29kZXMgdG8gcmVmZXJlbmNlIGNvdW50cnkgbmFtZVxuLy8gSVNPIDMxNjYgQWxwaGEtMiBGb3JtYXQ6IFsyIGxldHRlciBDb3VudHJ5IENvZGVdOiBbQ291bnRyeSBOYW1lXVxuLy8gU29ydGVkIGFscGhhYmV0aWNhbCBieSBjb3VudHJ5IG5hbWUgKHNwZWNpYWwgY2hhcmFjdGVycyBvbiBib3R0b20pXG5jb25zdCBjb3VudHJ5TGlzdEFscGhhMiA9IHtcbiAgQUY6ICdBZmdoYW5pc3RhbicsXG4gIEFMOiAnQWxiYW5pYScsXG4gIERaOiAnQWxnZXJpYScsXG4gIEFTOiAnQW1lcmljYW4gU2Ftb2EnLFxuICBBRDogJ0FuZG9ycmEnLFxuICBBTzogJ0FuZ29sYScsXG4gIEFJOiAnQW5ndWlsbGEnLFxuICBBUTogJ0FudGFyY3RpY2EnLFxuICBBRzogJ0FudGlndWEgYW5kIEJhcmJ1ZGEnLFxuICBBUjogJ0FyZ2VudGluYScsXG4gIEFNOiAnQXJtZW5pYScsXG4gIEFXOiAnQXJ1YmEnLFxuICBBVTogJ0F1c3RyYWxpYScsXG4gIEFUOiAnQXVzdHJpYScsXG4gIEFaOiAnQXplcmJhaWphbicsXG4gIEJTOiAnQmFoYW1hcyAodGhlKScsXG4gIEJIOiAnQmFocmFpbicsXG4gIEJEOiAnQmFuZ2xhZGVzaCcsXG4gIEJCOiAnQmFyYmFkb3MnLFxuICBCWTogJ0JlbGFydXMnLFxuICBCRTogJ0JlbGdpdW0nLFxuICBCWjogJ0JlbGl6ZScsXG4gIEJKOiAnQmVuaW4nLFxuICBCTTogJ0Jlcm11ZGEnLFxuICBCVDogJ0JodXRhbicsXG4gIEJPOiAnQm9saXZpYSAoUGx1cmluYXRpb25hbCBTdGF0ZSBvZiknLFxuICBCUTogJ0JvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhJyxcbiAgQkE6ICdCb3NuaWEgYW5kIEhlcnplZ292aW5hJyxcbiAgQlc6ICdCb3Rzd2FuYScsXG4gIEJWOiAnQm91dmV0IElzbGFuZCcsXG4gIEJSOiAnQnJhemlsJyxcbiAgSU86ICdCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnkgKHRoZSknLFxuICBCTjogJ0JydW5laSBEYXJ1c3NhbGFtJyxcbiAgQkc6ICdCdWxnYXJpYScsXG4gIEJGOiAnQnVya2luYSBGYXNvJyxcbiAgQkk6ICdCdXJ1bmRpJyxcbiAgQ1Y6ICdDYWJvIFZlcmRlJyxcbiAgS0g6ICdDYW1ib2RpYScsXG4gIENNOiAnQ2FtZXJvb24nLFxuICBDQTogJ0NhbmFkYScsXG4gIEtZOiAnQ2F5bWFuIElzbGFuZHMgKHRoZSknLFxuICBDRjogJ0NlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYyAodGhlKScsXG4gIFREOiAnQ2hhZCcsXG4gIENMOiAnQ2hpbGUnLFxuICBDTjogJ0NoaW5hJyxcbiAgQ1g6ICdDaHJpc3RtYXMgSXNsYW5kJyxcbiAgQ0M6ICdDb2NvcyAoS2VlbGluZykgSXNsYW5kcyAodGhlKScsXG4gIENPOiAnQ29sb21iaWEnLFxuICBLTTogJ0NvbW9yb3MgKHRoZSknLFxuICBDRDogJ0NvbmdvICh0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpJyxcbiAgQ0c6ICdDb25nbyAodGhlKScsXG4gIENLOiAnQ29vayBJc2xhbmRzICh0aGUpJyxcbiAgQ1I6ICdDb3N0YSBSaWNhJyxcbiAgSFI6ICdDcm9hdGlhJyxcbiAgQ1U6ICdDdWJhJyxcbiAgQ1c6ICdDdXJhw6dhbycsXG4gIENZOiAnQ3lwcnVzJyxcbiAgQ1o6ICdDemVjaGlhJyxcbiAgQ0k6IFwiQ8O0dGUgZCdJdm9pcmVcIixcbiAgREs6ICdEZW5tYXJrJyxcbiAgREo6ICdEamlib3V0aScsXG4gIERNOiAnRG9taW5pY2EnLFxuICBETzogJ0RvbWluaWNhbiBSZXB1YmxpYyAodGhlKScsXG4gIEVDOiAnRWN1YWRvcicsXG4gIEVHOiAnRWd5cHQnLFxuICBTVjogJ0VsIFNhbHZhZG9yJyxcbiAgR1E6ICdFcXVhdG9yaWFsIEd1aW5lYScsXG4gIEVSOiAnRXJpdHJlYScsXG4gIEVFOiAnRXN0b25pYScsXG4gIFNaOiAnRXN3YXRpbmknLFxuICBFVDogJ0V0aGlvcGlhJyxcbiAgRks6ICdGYWxrbGFuZCBJc2xhbmRzICh0aGUpIFtNYWx2aW5hc10nLFxuICBGTzogJ0Zhcm9lIElzbGFuZHMgKHRoZSknLFxuICBGSjogJ0ZpamknLFxuICBGSTogJ0ZpbmxhbmQnLFxuICBGUjogJ0ZyYW5jZScsXG4gIEdGOiAnRnJlbmNoIEd1aWFuYScsXG4gIFBGOiAnRnJlbmNoIFBvbHluZXNpYScsXG4gIFRGOiAnRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzICh0aGUpJyxcbiAgR0E6ICdHYWJvbicsXG4gIEdNOiAnR2FtYmlhICh0aGUpJyxcbiAgR0U6ICdHZW9yZ2lhJyxcbiAgREU6ICdHZXJtYW55JyxcbiAgR0g6ICdHaGFuYScsXG4gIEdJOiAnR2licmFsdGFyJyxcbiAgR1I6ICdHcmVlY2UnLFxuICBHTDogJ0dyZWVubGFuZCcsXG4gIEdEOiAnR3JlbmFkYScsXG4gIEdQOiAnR3VhZGVsb3VwZScsXG4gIEdVOiAnR3VhbScsXG4gIEdUOiAnR3VhdGVtYWxhJyxcbiAgR0c6ICdHdWVybnNleScsXG4gIEdOOiAnR3VpbmVhJyxcbiAgR1c6ICdHdWluZWEtQmlzc2F1JyxcbiAgR1k6ICdHdXlhbmEnLFxuICBIVDogJ0hhaXRpJyxcbiAgSE06ICdIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHMnLFxuICBWQTogJ0hvbHkgU2VlICh0aGUpJyxcbiAgSE46ICdIb25kdXJhcycsXG4gIEhLOiAnSG9uZyBLb25nJyxcbiAgSFU6ICdIdW5nYXJ5JyxcbiAgSVM6ICdJY2VsYW5kJyxcbiAgSU46ICdJbmRpYScsXG4gIElEOiAnSW5kb25lc2lhJyxcbiAgSVI6ICdJcmFuIChJc2xhbWljIFJlcHVibGljIG9mKScsXG4gIElROiAnSXJhcScsXG4gIElFOiAnSXJlbGFuZCcsXG4gIElNOiAnSXNsZSBvZiBNYW4nLFxuICBJTDogJ0lzcmFlbCcsXG4gIElUOiAnSXRhbHknLFxuICBKTTogJ0phbWFpY2EnLFxuICBKUDogJ0phcGFuJyxcbiAgSkU6ICdKZXJzZXknLFxuICBKTzogJ0pvcmRhbicsXG4gIEtaOiAnS2F6YWtoc3RhbicsXG4gIEtFOiAnS2VueWEnLFxuICBLSTogJ0tpcmliYXRpJyxcbiAgS1A6IFwiS29yZWEgKHRoZSBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mKVwiLFxuICBLUjogJ0tvcmVhICh0aGUgUmVwdWJsaWMgb2YpJyxcbiAgS1c6ICdLdXdhaXQnLFxuICBLRzogJ0t5cmd5enN0YW4nLFxuICBMQTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpYyAodGhlKVwiLFxuICBMVjogJ0xhdHZpYScsXG4gIExCOiAnTGViYW5vbicsXG4gIExTOiAnTGVzb3RobycsXG4gIExSOiAnTGliZXJpYScsXG4gIExZOiAnTGlieWEnLFxuICBMSTogJ0xpZWNodGVuc3RlaW4nLFxuICBMVDogJ0xpdGh1YW5pYScsXG4gIExVOiAnTHV4ZW1ib3VyZycsXG4gIE1POiAnTWFjYW8nLFxuICBNRzogJ01hZGFnYXNjYXInLFxuICBNVzogJ01hbGF3aScsXG4gIE1ZOiAnTWFsYXlzaWEnLFxuICBNVjogJ01hbGRpdmVzJyxcbiAgTUw6ICdNYWxpJyxcbiAgTVQ6ICdNYWx0YScsXG4gIE1IOiAnTWFyc2hhbGwgSXNsYW5kcyAodGhlKScsXG4gIE1ROiAnTWFydGluaXF1ZScsXG4gIE1SOiAnTWF1cml0YW5pYScsXG4gIE1VOiAnTWF1cml0aXVzJyxcbiAgWVQ6ICdNYXlvdHRlJyxcbiAgTVg6ICdNZXhpY28nLFxuICBGTTogJ01pY3JvbmVzaWEgKEZlZGVyYXRlZCBTdGF0ZXMgb2YpJyxcbiAgTUQ6ICdNb2xkb3ZhICh0aGUgUmVwdWJsaWMgb2YpJyxcbiAgTUM6ICdNb25hY28nLFxuICBNTjogJ01vbmdvbGlhJyxcbiAgTUU6ICdNb250ZW5lZ3JvJyxcbiAgTVM6ICdNb250c2VycmF0JyxcbiAgTUE6ICdNb3JvY2NvJyxcbiAgTVo6ICdNb3phbWJpcXVlJyxcbiAgTU06ICdNeWFubWFyJyxcbiAgTkE6ICdOYW1pYmlhJyxcbiAgTlI6ICdOYXVydScsXG4gIE5QOiAnTmVwYWwnLFxuICBOTDogJ05ldGhlcmxhbmRzICh0aGUpJyxcbiAgTkM6ICdOZXcgQ2FsZWRvbmlhJyxcbiAgTlo6ICdOZXcgWmVhbGFuZCcsXG4gIE5JOiAnTmljYXJhZ3VhJyxcbiAgTkU6ICdOaWdlciAodGhlKScsXG4gIE5HOiAnTmlnZXJpYScsXG4gIE5VOiAnTml1ZScsXG4gIE5GOiAnTm9yZm9sayBJc2xhbmQnLFxuICBNUDogJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcyAodGhlKScsXG4gIE5POiAnTm9yd2F5JyxcbiAgT006ICdPbWFuJyxcbiAgUEs6ICdQYWtpc3RhbicsXG4gIFBXOiAnUGFsYXUnLFxuICBQUzogJ1BhbGVzdGluZSwgU3RhdGUgb2YnLFxuICBQQTogJ1BhbmFtYScsXG4gIFBHOiAnUGFwdWEgTmV3IEd1aW5lYScsXG4gIFBZOiAnUGFyYWd1YXknLFxuICBQRTogJ1BlcnUnLFxuICBQSDogJ1BoaWxpcHBpbmVzICh0aGUpJyxcbiAgUE46ICdQaXRjYWlybicsXG4gIFBMOiAnUG9sYW5kJyxcbiAgUFQ6ICdQb3J0dWdhbCcsXG4gIFBSOiAnUHVlcnRvIFJpY28nLFxuICBRQTogJ1FhdGFyJyxcbiAgTUs6ICdSZXB1YmxpYyBvZiBOb3J0aCBNYWNlZG9uaWEnLFxuICBSTzogJ1JvbWFuaWEnLFxuICBSVTogJ1J1c3NpYW4gRmVkZXJhdGlvbiAodGhlKScsXG4gIFJXOiAnUndhbmRhJyxcbiAgUkU6ICdSw6l1bmlvbicsXG4gIEJMOiAnU2FpbnQgQmFydGjDqWxlbXknLFxuICBTSDogJ1NhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhJyxcbiAgS046ICdTYWludCBLaXR0cyBhbmQgTmV2aXMnLFxuICBMQzogJ1NhaW50IEx1Y2lhJyxcbiAgTUY6ICdTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KScsXG4gIFBNOiAnU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbicsXG4gIFZDOiAnU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXMnLFxuICBXUzogJ1NhbW9hJyxcbiAgU006ICdTYW4gTWFyaW5vJyxcbiAgU1Q6ICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnLFxuICBTQTogJ1NhdWRpIEFyYWJpYScsXG4gIFNOOiAnU2VuZWdhbCcsXG4gIFJTOiAnU2VyYmlhJyxcbiAgU0M6ICdTZXljaGVsbGVzJyxcbiAgU0w6ICdTaWVycmEgTGVvbmUnLFxuICBTRzogJ1NpbmdhcG9yZScsXG4gIFNYOiAnU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KScsXG4gIFNLOiAnU2xvdmFraWEnLFxuICBTSTogJ1Nsb3ZlbmlhJyxcbiAgU0I6ICdTb2xvbW9uIElzbGFuZHMnLFxuICBTTzogJ1NvbWFsaWEnLFxuICBaQTogJ1NvdXRoIEFmcmljYScsXG4gIEdTOiAnU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHMnLFxuICBTUzogJ1NvdXRoIFN1ZGFuJyxcbiAgRVM6ICdTcGFpbicsXG4gIExLOiAnU3JpIExhbmthJyxcbiAgU0Q6ICdTdWRhbiAodGhlKScsXG4gIFNSOiAnU3VyaW5hbWUnLFxuICBTSjogJ1N2YWxiYXJkIGFuZCBKYW4gTWF5ZW4nLFxuICBTRTogJ1N3ZWRlbicsXG4gIENIOiAnU3dpdHplcmxhbmQnLFxuICBTWTogJ1N5cmlhbiBBcmFiIFJlcHVibGljJyxcbiAgVFc6ICdUYWl3YW4nLFxuICBUSjogJ1RhamlraXN0YW4nLFxuICBUWjogJ1RhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2YnLFxuICBUSDogJ1RoYWlsYW5kJyxcbiAgVEw6ICdUaW1vci1MZXN0ZScsXG4gIFRHOiAnVG9nbycsXG4gIFRLOiAnVG9rZWxhdScsXG4gIFRPOiAnVG9uZ2EnLFxuICBUVDogJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLFxuICBUTjogJ1R1bmlzaWEnLFxuICBUUjogJ1R1cmtleScsXG4gIFRNOiAnVHVya21lbmlzdGFuJyxcbiAgVEM6ICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMgKHRoZSknLFxuICBUVjogJ1R1dmFsdScsXG4gIFVHOiAnVWdhbmRhJyxcbiAgVUE6ICdVa3JhaW5lJyxcbiAgQUU6ICdVbml0ZWQgQXJhYiBFbWlyYXRlcyAodGhlKScsXG4gIEdCOiAnVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZCAodGhlKScsXG4gIFVNOiAnVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzICh0aGUpJyxcbiAgVVM6ICdVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EgKHRoZSknLFxuICBVWTogJ1VydWd1YXknLFxuICBVWjogJ1V6YmVraXN0YW4nLFxuICBWVTogJ1ZhbnVhdHUnLFxuICBWRTogJ1ZlbmV6dWVsYSAoQm9saXZhcmlhbiBSZXB1YmxpYyBvZiknLFxuICBWTjogJ1ZpZXQgTmFtJyxcbiAgVkc6ICdWaXJnaW4gSXNsYW5kcyAoQnJpdGlzaCknLFxuICBWSTogJ1ZpcmdpbiBJc2xhbmRzIChVLlMuKScsXG4gIFdGOiAnV2FsbGlzIGFuZCBGdXR1bmEnLFxuICBFSDogJ1dlc3Rlcm4gU2FoYXJhJyxcbiAgWUU6ICdZZW1lbicsXG4gIFpNOiAnWmFtYmlhJyxcbiAgWlc6ICdaaW1iYWJ3ZScsXG4gIEFYOiAnw4VsYW5kIElzbGFuZHMnLFxufTtcblxuY29uc3QgdmFsaWRhdGVFbWFpbCA9ICgpID0+IHtcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuICBpZiAoZW1haWxJbnB1dC52YWxpZGl0eS50eXBlTWlzbWF0Y2ggfHwgZW1haWxJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICBlbWFpbElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdFbnRlciBhIHZhbGlkIGVtYWlsJyk7XG4gICAgZW1haWxJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICB9IGVsc2Uge1xuICAgIGVtYWlsSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVFbWFpbElucHV0ID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBlbWFpbCBjb250YWluZXJcbiAgY29uc3QgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtUm93LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcbiAgLy8gZW1haWwgbGFiZWxcbiAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGVtYWlsTGFiZWwuZm9yID0gJ2VtYWlsJztcbiAgZW1haWxMYWJlbC5pbm5lclRleHQgPSAnRW1haWwnO1xuICAvLyBlbWFpbCBpbnB1dFxuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZW1haWxJbnB1dC5pZCA9ICdlbWFpbCc7XG4gIGVtYWlsSW5wdXQubmFtZSA9ICdlbWFpbCc7XG4gIGVtYWlsSW5wdXQudHlwZSA9ICdlbWFpbCc7XG4gIGVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSAnamFuZUBleGFtcGxlLmNvbSc7XG4gIC8vIHZhbGlkaXR5IGNoZWNrXG4gIGVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB2YWxpZGF0ZUVtYWlsKCkpO1xuICAvLyBhcHBlbmQgZW1haWxcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xufTtcblxuY29uc3QgdmFsaWRhdGVDb3VudHJ5SW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvdW50cnlTZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeScpO1xuICBpZiAoY291bnRyeVNlbGVjdGlvbi52YWx1ZSA9PT0gJycpIHtcbiAgICBjb3VudHJ5U2VsZWN0aW9uLnNldEN1c3RvbVZhbGlkaXR5KCdXaGljaCBjb3VudHJ5IGFyZSB5b3UgaW4/Jyk7XG4gICAgY291bnRyeVNlbGVjdGlvbi5yZXBvcnRWYWxpZGl0eSgpO1xuICB9IGVsc2Uge1xuICAgIGNvdW50cnlTZWxlY3Rpb24uc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVDb3VudHJ5SW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIGNvdW50cnkgY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gIC8vIGNvdW50cnkgbGFiZWxcbiAgY29uc3QgY291bnRyeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY291bnRyeUxhYmVsLmZvciA9ICdjb3VudHJ5JztcbiAgY291bnRyeUxhYmVsLmlubmVyVGV4dCA9ICdDb3VudHJ5JztcbiAgLy8gY291bnRyeSBzZWxlY3Rpb25cbiAgY29uc3QgY291bnRyeVNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjb3VudHJ5U2VsZWN0aW9uLmlkID0gJ2NvdW50cnknO1xuICBjb3VudHJ5U2VsZWN0aW9uLm5hbWUgPSAnY291bnRyeSc7XG4gIC8vIGNvdW50cnkgb3B0aW9uc1xuICBjb25zdCBibGFua09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBibGFua09wdGlvbi52YWx1ZSA9ICcnO1xuICBibGFua09wdGlvbi5pbm5lclRleHQgPSAnJztcbiAgY291bnRyeVNlbGVjdGlvbi5hcHBlbmRDaGlsZChibGFua09wdGlvbik7XG4gIE9iamVjdC5rZXlzKGNvdW50cnlMaXN0QWxwaGEyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhrZXksIGNvdW50cnlMaXN0QWxwaGEyW2tleV0pO1xuICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG5ld09wdGlvbi52YWx1ZSA9IGtleTtcbiAgICBuZXdPcHRpb24uaW5uZXJUZXh0ID0gY291bnRyeUxpc3RBbHBoYTJba2V5XTtcbiAgICBjb3VudHJ5U2VsZWN0aW9uLmFwcGVuZENoaWxkKG5ld09wdGlvbik7XG4gIH0pO1xuICAvLyB2YWxpZGl0eSBjaGVja1xuICBjb3VudHJ5U2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdmFsaWRhdGVDb3VudHJ5SW5wdXQoKSk7XG4gIC8vIGFwcGVuZCBjb3VudHJ5IGlucHV0XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoY291bnRyeUxhYmVsKTtcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChjb3VudHJ5U2VsZWN0aW9uKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xufTtcblxuY29uc3QgdmFsaWRhdGVaaXBDb2RlID0gKCkgPT4ge1xuICBjb25zdCB6aXBDb2RlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnemlwY29kZScpO1xuICBpZiAoL15cXGR7NX0oLVxcZHs0fSk/JC8udGVzdCh6aXBDb2RlSW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xuICAgIHppcENvZGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnRW50ZXIgYSB2YWxpZCB6aXBjb2RlJyk7XG4gICAgemlwQ29kZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gIH0gZWxzZSB7XG4gICAgemlwQ29kZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlWmlwQ29kZUlucHV0ID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyB6aXAgY29kZSBjb250YWluZXJcbiAgY29uc3QgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtUm93LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcbiAgLy8gemlwIGNvZGUgbGFiZWxcbiAgY29uc3QgemlwQ29kZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgemlwQ29kZUxhYmVsLmZvciA9ICd6aXBjb2RlJztcbiAgemlwQ29kZUxhYmVsLmlubmVyVGV4dCA9ICdaaXAgY29kZSc7XG4gIC8vIHppcCBjb2RlIGlucHV0XG4gIGNvbnN0IHppcENvZGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHppcENvZGVJbnB1dC5pZCA9ICd6aXBjb2RlJztcbiAgemlwQ29kZUlucHV0Lm5hbWUgPSAnemlwY29kZSc7XG4gIC8vIHZhbGlkaXR5IGNoZWNrXG4gIHppcENvZGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHZhbGlkYXRlWmlwQ29kZSgpKTtcbiAgLy8gYXBwZW5kIHppcCBjb2RlIGlucHV0XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoemlwQ29kZUxhYmVsKTtcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZCh6aXBDb2RlSW5wdXQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XG59O1xuXG5jb25zdCB2YWxpZGF0ZVBhc3N3b3JkID0gKCkgPT4ge1xuICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XG5cbiAgLy8gVmFsaWRhdGUgbG93ZXJjYXNlIGxldHRlcnNcbiAgaWYgKC9bYS16XS9nLnRlc3QocGFzc3dvcmRJbnB1dC52YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgcGFzc3dvcmRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBjb250YWluIGxvd2VyY2FzZSBsZXR0ZXInKTtcbiAgICBwYXNzd29yZElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgLy8gVmFsaWRhdGUgY2FwaXRhbCBsZXR0ZXJzXG4gIH0gZWxzZSBpZiAoL1tBLVpdL2cudGVzdChwYXNzd29yZElucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICBwYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGNvbnRhaW4gdXBwZXJjYXNlIGxldHRlcicpO1xuICAgIHBhc3N3b3JkSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAvLyBWYWxpZGF0ZSBudW1iZXJzXG4gIH0gZWxzZSBpZiAoL1swLTldL2cudGVzdChwYXNzd29yZElucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICBwYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGNvbnRhaW4gYSBudW1iZXInKTtcbiAgICBwYXNzd29yZElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgLy8gVmFsaWRhdGUgbGVuZ3RoXG4gIH0gZWxzZSBpZiAocGFzc3dvcmRJbnB1dC52YWx1ZS5sZW5ndGggPCA4KSB7XG4gICAgcGFzc3dvcmRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMnKTtcbiAgICBwYXNzd29yZElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gIH0gZWxzZSB7XG4gICAgcGFzc3dvcmRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZVBhc3N3b3JkSW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIHBhc3N3b3JkIGNvbnRhaW5lclxuICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xuICAvLyBwYXNzd29yZCBsYWJlbFxuICBjb25zdCBwYXNzd29yZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcGFzc3dvcmRMYWJlbC5mb3IgPSAncGFzc3dvcmQnO1xuICBwYXNzd29yZExhYmVsLmlubmVyVGV4dCA9ICdQYXNzd29yZCc7XG4gIC8vIHBhc3N3b3JkIGlucHV0XG4gIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwYXNzd29yZElucHV0LmlkID0gJ3Bhc3N3b3JkJztcbiAgcGFzc3dvcmRJbnB1dC5uYW1lID0gJ3Bhc3N3b3JkJztcbiAgcGFzc3dvcmRJbnB1dC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgLy8gdmFsaWRpdHkgY2hlY2tcbiAgcGFzc3dvcmRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHZhbGlkYXRlUGFzc3dvcmQoKSk7XG4gIC8vIGFwcGVuZCBwYXNzd29yZCBpbnB1dFxuICBmb3JtUm93LmFwcGVuZENoaWxkKHBhc3N3b3JkTGFiZWwpO1xuICBmb3JtUm93LmFwcGVuZENoaWxkKHBhc3N3b3JkSW5wdXQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XG59O1xuXG5jb25zdCBjb25maXJtUGFzc3dvcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkQ29uZmlybWF0aW9uJyk7XG4gIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKS52YWx1ZTtcbiAgaWYgKGNvbmZpcm1QYXNzd29yZElucHV0LnZhbHVlICE9PSBwYXNzd29yZElucHV0KSB7XG4gICAgY29uZmlybVBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0RvZXMgbm90IG1hdGNoJyk7XG4gICAgY29uZmlybVBhc3N3b3JkSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maXJtUGFzc3dvcmRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUNvbmZpcm1QYXNzd29yZElucHV0ID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBjb25maXJtIHBhc3N3b3JkIGNvbnRhaW5lclxuICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xuICAvLyBjb25maXJtIHBhc3N3b3JkIGxhYmVsXG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uZmlybVBhc3N3b3JkTGFiZWwuZm9yID0gJ3Bhc3N3b3JkQ29uZmlybWF0aW9uJztcbiAgY29uZmlybVBhc3N3b3JkTGFiZWwuaW5uZXJUZXh0ID0gJ0NvbmZpcm0gcGFzc3dvcmQnO1xuICAvLyBjb25uZmlybSBwYXNzd29yZCBpbnB1dFxuICBjb25zdCBjb25maXJtUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbmZpcm1QYXNzd29yZElucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICBjb25maXJtUGFzc3dvcmRJbnB1dC5pZCA9ICdwYXNzd29yZENvbmZpcm1hdGlvbic7XG4gIGNvbmZpcm1QYXNzd29yZElucHV0Lm5hbWUgPSAncGFzc3dvcmRDb25maXJtYXRpb24nO1xuICAvLyB2YWxpZGl0eSBjaGVja1xuICBjb25maXJtUGFzc3dvcmRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGNvbmZpcm1QYXNzd29yZCgpKTtcbiAgLy8gYXBwZW5kIGNvbmZpcm0gcGFzc3dvcmQgaW5wdXRcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChjb25maXJtUGFzc3dvcmRMYWJlbCk7XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoY29uZmlybVBhc3N3b3JkSW5wdXQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XG59O1xuXG5jb25zdCBzdWJtaXRGb3JtID0gKGUpID0+IHtcbiAgLy8gcHJldmVudCBhY3R1YWwgZm9ybSBzdWJtaXNzaW9uXG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gdmFsaWRhdGUgZm9ybSBmaWVsZHNcbiAgY29uZmlybVBhc3N3b3JkKCk7XG4gIHZhbGlkYXRlUGFzc3dvcmQoKTtcbiAgdmFsaWRhdGVaaXBDb2RlKCk7XG4gIHZhbGlkYXRlQ291bnRyeUlucHV0KCk7XG4gIHZhbGlkYXRlRW1haWwoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVN1Ym1pdEJ1dHRvbiA9IChjb250YWluZXIpID0+IHtcbiAgLy8gc3VibWl0IGJ1dHRvbiBjb250YWluZXJcbiAgY29uc3QgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtUm93LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcbiAgLy8gc3VibWl0IGJ1dHRvblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdEJ0bicpO1xuICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gIC8vIGV2ZW50IGxpc3RlbmVyXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBzdWJtaXRGb3JtKGUpKTtcbiAgLy8gYXBwZW5kIHN1Ym1pdCBidXR0b25cbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUZvcm0gPSAoY29udGFpbmVyKSA9PiB7XG4gIGNyZWF0ZUVtYWlsSW5wdXQoY29udGFpbmVyKTtcbiAgY3JlYXRlQ291bnRyeUlucHV0KGNvbnRhaW5lcik7XG4gIGNyZWF0ZVppcENvZGVJbnB1dChjb250YWluZXIpO1xuICBjcmVhdGVQYXNzd29yZElucHV0KGNvbnRhaW5lcik7XG4gIGNyZWF0ZUNvbmZpcm1QYXNzd29yZElucHV0KGNvbnRhaW5lcik7XG4gIGNyZWF0ZVN1Ym1pdEJ1dHRvbihjb250YWluZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVGb3JtO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCBnaXRodWJJY29uIGZyb20gJy4vYXNzZXRzL0dpdEh1Yi1saWdodC0zMnB4LnBuZyc7XG5pbXBvcnQgcGxhY2Vob2xkZXJJbWcxIGZyb20gJy4vYXNzZXRzL0lNR18xMjAxLmpwZyc7XG5pbXBvcnQgcGxhY2Vob2xkZXJJbWcyIGZyb20gJy4vYXNzZXRzL0lNR18xMjEyLmpwZyc7XG5pbXBvcnQgcGxhY2Vob2xkZXJJbWczIGZyb20gJy4vYXNzZXRzL0lNR184NzE2LmpwZyc7XG5pbXBvcnQgcGxhY2Vob2xkZXJJbWc0IGZyb20gJy4vYXNzZXRzL0lNR184ODU1LmpwZyc7XG5pbXBvcnQgZ2VuZXJhdGVGb3JtIGZyb20gJy4vZm9ybVZhbGlkYXRpb24nO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4vLyBoZWxwZXIgZnVuY3Rpb25zXG5jb25zdCBwcm9jZXNzTWVudVNlbGVjdGlvbiA9IChlKSA9PiB7XG4gIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5NZW51Jyk7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudENvbnRhaW5lcicpO1xuXG4gIC8vIGRlc2VsZWN0IGFueSBtZW51IGl0ZW1zXG4gIGNvbnN0IG1lbnVDb3VudCA9IG1haW5NZW51LmNoaWxkRWxlbWVudENvdW50O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVDb3VudDsgaSsrKSB7XG4gICAgbWFpbk1lbnUuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgfVxuXG4gIC8vIHNlbGVjdCBuZXcgbWVudSBpdGVtXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbiAgLy8gdG9nZ2xlIGNvbnRlbnRcbiAgY29uc3QgY29udGVudENvdW50ID0gY29udGVudENvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50Q291bnQ7IGkrKykge1xuICAgIC8vIGhpZGUgY3VycmVudCBjb250ZW50XG4gICAgaWYgKGNvbnRlbnRDb250YWluZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnRlbnRDb250YWluZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICAgIC8vIGRpc3BsYXkgc2VsZWN0ZWQgY29udGVudFxuICAgIGlmIChjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuW2ldLmlkID09PSBlLnRhcmdldC5pZCkge1xuICAgICAgY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGl0ZW1OYW1lLCBpdGVtQ29udGFpbmVyLCBpdGVtSWQsIGl0ZW1DbGFzcykgPT4ge1xuICBjb25zdCBuZXdNZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIG5ld01lbnVJdGVtLmlkID0gYCR7aXRlbUlkfWA7XG5cbiAgLy8gYWRkIGNsYXNzIGlmIG9uZSBpcyBnaXZlblxuICBpZiAoaXRlbUNsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICBuZXdNZW51SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYCR7aXRlbUNsYXNzfWApO1xuICB9XG5cbiAgbmV3TWVudUl0ZW0uaW5uZXJUZXh0ID0gYCR7aXRlbU5hbWV9YDtcbiAgbmV3TWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcblxuICBuZXdNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBwcm9jZXNzTWVudVNlbGVjdGlvbihlKSk7XG5cbiAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdNZW51SXRlbSk7XG59O1xuXG5jb25zdCBhZGRJbWFnZVRvU2Nyb2xsZXIgPSAoaW1hZ2UsIGksIHNjcm9sbGVyLCBjYXB0aW9uKSA9PiB7XG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlQ29udGFpbmVyJywgJ2ZhZGUnKTtcblxuICAvLyBkaXNwbGF5IGltYWdlIG51bWJlclxuICBjb25zdCBpbWFnZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZU51bWJlci5jbGFzc0xpc3QuYWRkKCdpbWFnZU51bWJlcicpO1xuICBpbWFnZU51bWJlci5pbm5lclRleHQgPSBgJHtpfS80YDtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VOdW1iZXIpO1xuXG4gIC8vIGRpc3BsYXkgaW1hZ2VcbiAgY29uc3QgbmV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZXJJbWFnZScpO1xuICBuZXdJbWFnZS5zcmMgPSBpbWFnZTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuXG4gIC8vIGRpc3BsYXkgY2FwdGlvblxuICBpZiAoY2FwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgaW1hZ2VDYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VDYXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2ltYWdlQ2FwdGlvbicpO1xuICAgIGltYWdlQ2FwdGlvbi5pbm5lclRleHQgPSBgJHtjYXB0aW9ufWA7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VDYXB0aW9uKTtcbiAgfVxuXG4gIHNjcm9sbGVyLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcbn07XG5cbmxldCBzbGlkZUluZGV4ID0gMDtcblxuY29uc3Qgc2VsZWN0SW1hZ2UgPSAobikgPT4ge1xuICBjb25zdCBzY3JvbGxlckltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlQ29udGFpbmVyJyk7XG4gIGNvbnN0IHNjcm9sbGVyRG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbGVyRG90Jyk7XG5cbiAgLy8gbG9vcCB0aHJvdWdoIGltYWdlc1xuICBpZiAobiA+IHNjcm9sbGVySW1hZ2VzLmxlbmd0aCkgeyBzbGlkZUluZGV4ID0gMTsgfVxuICBpZiAobiA8IDEpIHsgc2xpZGVJbmRleCA9IHNjcm9sbGVySW1hZ2VzLmxlbmd0aDsgfVxuXG4gIC8vIHJlc2V0IGltYWdlIHNlbGVjdGlvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbGVySW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2Nyb2xsZXJJbWFnZXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbGVyRG90cy5sZW5ndGg7IGkrKykge1xuICAgIHNjcm9sbGVyRG90c1tpXS5jbGFzc05hbWUgPSBzY3JvbGxlckRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoJyBzZWxlY3RlZEltYWdlJywgJycpO1xuICB9XG5cbiAgLy8gc2VsZWN0IG5ldyBpbWFnZVxuICBzY3JvbGxlckltYWdlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHNjcm9sbGVyRG90c1tzbGlkZUluZGV4IC0gMV0uY2xhc3NOYW1lICs9ICcgc2VsZWN0ZWRJbWFnZSc7XG59O1xuXG5jb25zdCBsb29wSW1hZ2VTY3JvbGxlciA9ICgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsZXJJbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWFnZUNvbnRhaW5lcicpO1xuICBjb25zdCBzY3JvbGxlckRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGxlckRvdCcpO1xuXG4gIC8vIHJlc2V0IGltYWdlIHNlbGVjdGlvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbGVySW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2Nyb2xsZXJJbWFnZXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbGVyRG90cy5sZW5ndGg7IGkrKykge1xuICAgIHNjcm9sbGVyRG90c1tpXS5jbGFzc05hbWUgPSBzY3JvbGxlckRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoJyBzZWxlY3RlZEltYWdlJywgJycpO1xuICB9XG5cbiAgLy8gc2VsZWN0IG5ldyBpbWFnZVxuICBzbGlkZUluZGV4Kys7XG4gIGlmIChzbGlkZUluZGV4ID4gc2Nyb2xsZXJJbWFnZXMubGVuZ3RoKSB7IHNsaWRlSW5kZXggPSAxOyB9XG4gIHNjcm9sbGVySW1hZ2VzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgc2Nyb2xsZXJEb3RzW3NsaWRlSW5kZXggLSAxXS5jbGFzc05hbWUgKz0gJyBzZWxlY3RlZEltYWdlJztcbiAgc2V0VGltZW91dChsb29wSW1hZ2VTY3JvbGxlciwgNTAwMCk7IC8vIENoYW5nZSBpbWFnZSBldmVyeSA1IHNlY29uZHNcbn07XG5cbi8vIHBhZ2UgaW5pdGlhbGl6YXRpb24gZnVuY3Rpb25zXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGVyVGl0bGUuaW5uZXJUZXh0ID0gJ0R5bmFtaWMgVUkgSW50ZXJhY3Rpb25zJztcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVNYWluTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbk1lbnUnKTtcblxuICBjcmVhdGVNZW51SXRlbSgnRHJvcGRvd24gTWVudScsIG1haW5NZW51LCAnZHJvcGRvd25NZW51JywgJ3NlbGVjdGVkJyk7XG4gIGNyZWF0ZU1lbnVJdGVtKCdNb2JpbGUgTWVudScsIG1haW5NZW51LCAnbW9iaWxlTWVudScpO1xuICBjcmVhdGVNZW51SXRlbSgnSW1hZ2UgU2Nyb2xsZXInLCBtYWluTWVudSwgJ2ltYWdlU2Nyb2xsZXInKTtcbiAgY3JlYXRlTWVudUl0ZW0oJ0Zvcm0gVmFsaWRhdGlvbicsIG1haW5NZW51LCAndmFsaWRhdGlvbkZvcm0nKTtcbiAgY3JlYXRlTWVudUl0ZW0oJ0FQSSBQcmFjdGljZScsIG1haW5NZW51LCAnQVBJUHJhY3RpY2UnKTtcblxuICBib2R5LmFwcGVuZENoaWxkKG1haW5NZW51KTtcbn07XG5cbmNvbnN0IGNyZWF0ZURyb3Bkb3duTWVudSA9IChjb250YWluZXIpID0+IHtcbiAgY29uc3QgZHJvcGRvd25NZW51Q29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcm9wZG93bk1lbnVDb250YWludGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgZHJvcGRvd25NZW51Q29udGFpbnRlci5pZCA9ICdkcm9wZG93bk1lbnUnO1xuXG4gIC8vIGNyZWF0ZSBkcm9wZG93biBjb250YWluZXJcbiAgY29uc3QgZHJvcGRvd25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25Db250YWluZXInLCAnaGlkZGVuJyk7XG5cbiAgLy8gY3JlYXRlIGRyb3Bkb3duIG9wdGlvbnNcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25PcHRpb24nKTtcbiAgICBkcm9wZG93bk9wdGlvbi5pbm5lclRleHQgPSBgb3B0aW9uICR7aX1gO1xuICAgIGRyb3Bkb3duQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duT3B0aW9uKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZSBkcm9wZG93biBidXR0b25cbiAgY29uc3QgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyb3Bkb3duTWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bk1lbnUnKTtcbiAgZHJvcGRvd25NZW51LmlubmVyVGV4dCA9ICdkcm9wZG93bic7XG4gIGRyb3Bkb3duTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICBkcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgfSk7XG5cbiAgLy8gQXBwZW5kXG4gIGRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChkcm9wZG93bkNvbnRhaW5lcik7XG4gIGRyb3Bkb3duTWVudUNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25NZW51KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duTWVudUNvbnRhaW50ZXIpO1xuXG4gIC8vIGNsb3NlIGRyb3Bkb3duIGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XG4gIHdpbmRvdy5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wZG93bk1lbnUnKSkge1xuICAgICAgaWYgKGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgPT09IGZhbHNlKSB7XG4gICAgICAgIGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfVxuICAgICAgaWYgKGRyb3Bkb3duTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlTW9iaWxlTWVudSA9IChjb250YWluZXIpID0+IHtcbiAgLy8gY3JlYXRlIGNvbnRlbnQgY29udGFpbmVyXG4gIGNvbnN0IG1vYmlsZU1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vYmlsZU1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vYmlsZU1lbnVDb250ZW50JywgJ2NvbnRlbnQnLCAnaGlkZGVuJyk7XG4gIG1vYmlsZU1lbnVDb250ZW50LmlkID0gJ21vYmlsZU1lbnUnO1xuXG4gIC8vIGNyZWF0ZSBtZW51IHRpdGxlXG4gIGNvbnN0IG1vYmlsZU1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIG1vYmlsZU1lbnVUaXRsZS5pbm5lclRleHQgPSAnSG9yaXpvbnRhbCBzY3JvbGxpbmcgbmF2JztcblxuICAvLyBjcmVhdGUgbW9iaWxlIG1lbnUgY29udGFpbmVyXG4gIGNvbnN0IG1vYmlsZU1lbnVUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIGNvbnN0IG1vYmlsZU1lbnVDb250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgbW9iaWxlTWVudUNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnbW9iaWxlTWVudUNvbnRhaW5lcicpO1xuICAvLyBtYWtlcyBzY3JvbGx3aGVlbCBmdW5jdGlvbmFsIHdpdGggaG9yaXpvbnRhbCBzY3JvbGxpbmdcbiAgbW9iaWxlTWVudUNvbnRhaW50ZXIuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBtb2JpbGVNZW51Q29udGFpbnRlci5zY3JvbGxMZWZ0ICs9IGUuZGVsdGFZO1xuICB9KTtcblxuICAvLyBjcmVhdGUgbW9iaWxlIG1lbnUgb3B0aW9uc1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAyMDsgaSsrKSB7XG4gICAgY29uc3QgbW9iaWxlTWVudU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgbW9iaWxlTWVudU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdtb2JpbGVNZW51T3B0aW9uJyk7XG4gICAgbW9iaWxlTWVudU9wdGlvbi5pbm5lclRleHQgPSBgbW9iaWxlIG9wdGlvbiAke2l9YDtcbiAgICBtb2JpbGVNZW51T3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gZGVzZWxlY3QgYWxsIG1lbnUgaXRlbXNcbiAgICAgIGNvbnN0IG1vYmlsZU1lbnVDb3VudCA9IG1vYmlsZU1lbnVDb250YWludGVyLmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2JpbGVNZW51Q291bnQ7IGkrKykge1xuICAgICAgICBpZiAobW9iaWxlTWVudUNvbnRhaW50ZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgbW9iaWxlTWVudUNvbnRhaW50ZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gbWFrZSBuZXcgc2VsZWN0aW9uXG4gICAgICBtb2JpbGVNZW51T3B0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG4gICAgbW9iaWxlTWVudUNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQobW9iaWxlTWVudU9wdGlvbik7XG4gIH1cblxuICAvLyBBcHBlbmRcbiAgbW9iaWxlTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobW9iaWxlTWVudVRpdGxlKTtcbiAgbW9iaWxlTWVudVRhYmxlLmFwcGVuZENoaWxkKG1vYmlsZU1lbnVDb250YWludGVyKTtcbiAgbW9iaWxlTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobW9iaWxlTWVudVRhYmxlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vYmlsZU1lbnVDb250ZW50KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUltYWdlU2Nyb2xsZXIgPSAoY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGltYWdlU2Nyb2xsZXJDb250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlU2Nyb2xsZXJDb250YWludGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnLCAnaGlkZGVuJyk7XG4gIGltYWdlU2Nyb2xsZXJDb250YWludGVyLmlkID0gJ2ltYWdlU2Nyb2xsZXInO1xuXG4gIGNvbnN0IGltYWdlU2Nyb2xsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VTY3JvbGxlci5jbGFzc0xpc3QuYWRkKCdpbWFnZVNjcm9sbGVyJyk7XG5cbiAgLy8gYWRkIGltYWdlc1xuICBhZGRJbWFnZVRvU2Nyb2xsZXIocGxhY2Vob2xkZXJJbWcxLCAxLCBpbWFnZVNjcm9sbGVyLCAnVmlldyBvZiBEaWFtb25kIEhlYWQgJiBIb25vbHVsdSwgT2FodScpO1xuICBhZGRJbWFnZVRvU2Nyb2xsZXIocGxhY2Vob2xkZXJJbWcyLCAyLCBpbWFnZVNjcm9sbGVyLCAnSnVyYXNzaWMgUGFyayBWYWxsZXksIEt1YWxvYSBSYW5jaCwgT2FodScpO1xuICBhZGRJbWFnZVRvU2Nyb2xsZXIocGxhY2Vob2xkZXJJbWczLCAzLCBpbWFnZVNjcm9sbGVyLCAnUmFpbmJvdyBvbiBPYWh1Jyk7XG4gIGFkZEltYWdlVG9TY3JvbGxlcihwbGFjZWhvbGRlckltZzQsIDQsIGltYWdlU2Nyb2xsZXIsICdUdXJ0bGUgb24gdGhlIGJlYWNoIG5lYXIgSGFsZWl3YSwgT2FodScpO1xuXG4gIC8vIGFkZCBwcmV2aW91cyBidXR0b25cbiAgY29uc3QgcHJldmlvdXNJbWFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgcHJldmlvdXNJbWFnZUJ0bi5jbGFzc0xpc3QuYWRkKCdwcmV2aW91c0ltYWdlQnRuJyk7XG4gIHByZXZpb3VzSW1hZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNlbGVjdEltYWdlKHNsaWRlSW5kZXggKz0gLTEpOyB9KTtcbiAgLy8gZGlzcGxheSBwcmV2aW91cyBhcnJvd1xuICBwcmV2aW91c0ltYWdlQnRuLmlubmVySFRNTCA9ICcmIzEwMDk0Oyc7XG5cbiAgLy8gYWRkIG5leHQgYnV0dG9uXG4gIGNvbnN0IG5leHRJbWFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbmV4dEltYWdlQnRuLmNsYXNzTGlzdC5hZGQoJ25leHRJbWFnZUJ0bicpO1xuICBuZXh0SW1hZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNlbGVjdEltYWdlKHNsaWRlSW5kZXggKz0gMSk7IH0pO1xuICAvLyBkaXNwbGF5IG5leHQgYXJyb3dcbiAgbmV4dEltYWdlQnRuLmlubmVySFRNTCA9ICcmIzEwMDk1Oyc7XG5cbiAgLy8gYWRkIGltYWdlIHNlbGVjdGlvbiBkb3RzXG4gIGNvbnN0IHNjcm9sbGVyRG90Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjcm9sbGVyRG90Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVyRG90Q29udGFpbmVyJyk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgIGNvbnN0IG5ld0RvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBuZXdEb3QuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZXJEb3QnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgbmV3RG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzZWxlY3RJbWFnZShzbGlkZUluZGV4ID0gaSk7IH0pO1xuICAgIHNjcm9sbGVyRG90Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0RvdCk7XG4gIH1cblxuICAvLyBhcHBlbmRcbiAgaW1hZ2VTY3JvbGxlci5hcHBlbmRDaGlsZChwcmV2aW91c0ltYWdlQnRuKTtcbiAgaW1hZ2VTY3JvbGxlci5hcHBlbmRDaGlsZChuZXh0SW1hZ2VCdG4pO1xuICBpbWFnZVNjcm9sbGVyQ29udGFpbnRlci5hcHBlbmRDaGlsZChpbWFnZVNjcm9sbGVyKTtcbiAgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoc2Nyb2xsZXJEb3RDb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlVmFsaWRhdGlvbkZvcm0gPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIGNyZWF0ZSBmb3JtIHZhbGlkYXRpb24gY29udGFpbmVyXG4gIGNvbnN0IHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgndmFsaWRhdGlvbkZvcm1Db250YWludGVyJywgJ2NvbnRlbnQnLCAnaGlkZGVuJyk7XG4gIHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlci5pZCA9ICd2YWxpZGF0aW9uRm9ybSc7XG5cbiAgLy8gY3JlYXRlIGZvcm0gaGVhZGVyXG4gIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUhlYWRlci5jbGFzc0xpc3QuYWRkKCdmb3JtSGVhZGVyJyk7XG5cbiAgLy8gZm9ybSB0aXRsZVxuICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBmb3JtVGl0bGUuaW5uZXJUZXh0ID0gJ0V4YW1wbGUgZm9ybSc7XG5cbiAgLy8gY3JlYXRlIGZvcm1cbiAgY29uc3QgdmFsaWRhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHZhbGlkYXRpb25Gb3JtLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb25Gb3JtJyk7XG4gIHZhbGlkYXRpb25Gb3JtLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuXG4gIGdlbmVyYXRlRm9ybSh2YWxpZGF0aW9uRm9ybSk7XG5cbiAgLy8gYXBwZW5kXG4gIGZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgdmFsaWRhdGlvbkZvcm1Db250YWludGVyLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuICB2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gIHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlci5hcHBlbmRDaGlsZCh2YWxpZGF0aW9uRm9ybSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlQVBJUHJhY3RpY2UgPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIGNyZWF0IEFQSSBwcmFjdGljZSBjb250YWluZXJcbiAgY29uc3QgQVBJUHJhY3RpY2VDb250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIEFQSVByYWN0aWNlQ29udGFpbnRlci5jbGFzc0xpc3QuYWRkKCdBUElQcmFjdGljZUNvbnRhaW50ZXInLCAnY29udGVudCcsICdoaWRkZW4nKTtcbiAgQVBJUHJhY3RpY2VDb250YWludGVyLmlkID0gJ0FQSVByYWN0aWNlJztcblxuICAvLyBjcmVhdGUgQVBJIHRpdGxlXG4gIGNvbnN0IEFQSVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgQVBJVGl0bGUuaW5uZXJUZXh0ID0gJ0FQSSBpbWFnZSBzZWFyY2gnO1xuXG4gIC8vIGNyZWF0IEFQSSBpbWFnZSBjb250YWluZXJcbiAgY29uc3QgQVBJSW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgQVBJSW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnQVBJSW1hZ2VDb250YWluZXInKTtcblxuICAvLyBjcmVhdGUgQVBJIGltZ1xuICBjb25zdCBBUElQcmFjdGljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBBUElQcmFjdGljZS5jbGFzc0xpc3QuYWRkKCdBUElQcmFjdGljZScpO1xuXG4gIC8vIGZldGNoIGltZ1xuICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9bDRWRVVqNUNBUVVVTHBmamVzSmNNSmE1MnFWU1VWWjUmcz1kb2dzJTIwcGxheWluZycsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBBUElQcmFjdGljZS5zcmMgPSByZXNwb25zZS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgLy8gc2VhcmNoIGlucHV0XG4gIGNvbnN0IEFQSVNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgQVBJU2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSAnZG9ncyBwbGF5aW5nJztcblxuICAvLyBzZWFyY2ggYnV0dG9uXG4gIGNvbnN0IEFQSVNlYXJjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBBUElTZWFyY2hCdG4uY2xhc3NMaXN0LmFkZCgnQVBJU2VhcmNoQnRuJyk7XG4gIEFQSVNlYXJjaEJ0bi5pbm5lclRleHQgPSAnU2VhcmNoJztcblxuICAvLyBBcHBlbmRcbiAgQVBJUHJhY3RpY2VDb250YWludGVyLmFwcGVuZENoaWxkKEFQSVRpdGxlKTtcbiAgQVBJUHJhY3RpY2VDb250YWludGVyLmFwcGVuZENoaWxkKEFQSUltYWdlQ29udGFpbmVyKTtcbiAgQVBJSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoQVBJUHJhY3RpY2UpO1xuICBBUElJbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChBUElTZWFyY2hJbnB1dCk7XG4gIEFQSUltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKEFQSVNlYXJjaEJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChBUElQcmFjdGljZUNvbnRhaW50ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGVudENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudENvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudENvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudENvbnRhaW5lcicpO1xuXG4gIGNyZWF0ZURyb3Bkb3duTWVudShjb250ZW50Q29udGFpbnRlcik7XG4gIGNyZWF0ZU1vYmlsZU1lbnUoY29udGVudENvbnRhaW50ZXIpO1xuICBjcmVhdGVJbWFnZVNjcm9sbGVyKGNvbnRlbnRDb250YWludGVyKTtcbiAgY3JlYXRlVmFsaWRhdGlvbkZvcm0oY29udGVudENvbnRhaW50ZXIpO1xuICBjcmVhdGVBUElQcmFjdGljZShjb250ZW50Q29udGFpbnRlcik7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbnRlcik7XG4gIGxvb3BJbWFnZVNjcm9sbGVyKCk7XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gamNhbXBiZWxsNTdgO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcnO1xuICBnaXRodWJMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuXG4gIGNvbnN0IG5ld0dpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbmV3R2l0aHViSWNvbi5zcmMgPSBnaXRodWJJY29uO1xuICBuZXdHaXRodWJJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2l0aHViJyk7XG5cbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChuZXdHaXRodWJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlTWFpbk1lbnUoKTtcbiAgY3JlYXRlQ29udGVudENvbnRhaW5lcigpO1xuICBjcmVhdGVGb290ZXIoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemU7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6IHJnYig0NSwgNDUsIDQ1KTtcXG4gICAgLS1saWdodC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICAtLWFjdGl2ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICAtLWVycm9yIDogZGFya3JlZFxcbn1cXG5cXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxcblxcbmh0bWwge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcblxcbmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXI+aDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogTWVudSBzdHlsaW5nICovXFxuXFxuLm1haW5NZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gICAgcGFkZGluZzogMCAxNXZ3O1xcbn1cXG5cXG4ubWVudUl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gICAgbWFyZ2luOiAwLjZyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5tZW51SXRlbTpob3ZlcixcXG4uZHJvcGRvd25NZW51OmhvdmVyLFxcbi5kcm9wZG93bk9wdGlvbjpob3ZlciwgXFxuLm1vYmlsZU1lbnVPcHRpb246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLm1lbnVJdGVtOmFjdGl2ZSxcXG4uZHJvcGRvd25NZW51OmFjdGl2ZSxcXG4uZHJvcGRvd25PcHRpb246YWN0aXZlLFxcbi5tb2JpbGVNZW51T3B0aW9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZSk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogQ29udGVudCBzdHlsaW5nICovXFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2FsYyhjZW50ZXIgLSAzMCUpXFxufVxcblxcblxcblxcblxcblxcbi8qIERyb3Bkb3duIG1lbnUgc3R5bGluZyAqL1xcblxcbi5kcm9wZG93bk1lbnUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZHJvcGRvd25Db250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYygxMDAlICsgMnB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmRyb3Bkb3duT3B0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcblxcblxcblxcblxcbi8qIE1vYmlsZSBtZW51IHN0eWxpbmcgKi9cXG5cXG4ubW9iaWxlTWVudUNvbnRlbnQge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9iaWxlTWVudUNvbnRlbnQ+aDMge1xcbiAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubW9iaWxlTWVudUNvbnRlbnQ+dGFibGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9iaWxlTWVudUNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAvKiBlbmFibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbn1cXG5cXG4vKiBoaWRlIHNjcm9sbGJhciwgcmV0YWluIGZ1bmN0aW9uICovXFxuLm1vYmlsZU1lbnVDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vYmlsZU1lbnVPcHRpb24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuXFxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogSW1hZ2Ugc2Nyb2xsZXIgc3R5bGluZyAqL1xcblxcbi5zY3JvbGxlckltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIHNsaWRlc2hvdyBjb250YWluZXIgKi9cXG4uaW1hZ2VTY3JvbGxlciB7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLyogaGlkZSBpbWFnZXMgZGVmYXVsdCAqL1xcbi5pbWFnZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIG5leHQgJiBwcmV2aW91cyBidXR0b25zICovXFxuLnByZXZpb3VzSW1hZ2VCdG4sIC5uZXh0SW1hZ2VCdG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gICAgLyogdXNlci1zZWxlY3Q6IG5vbmU7ICovXFxufVxcblxcbi8qIHBvc2l0aW9uIG5leHQgYnV0dG9uIG9uIHRoZSByaWdodCAqL1xcbi5uZXh0SW1hZ2VCdG4ge1xcbiAgICByaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxufVxcblxcbi8qIGFkZCBob3ZlciBlZmZlY3QgKi9cXG4ucHJldmlvdXNJbWFnZUJ0bjpob3ZlciwgLm5leHRJbWFnZUJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKVxcbn1cXG5cXG4vKiBjYXB0aW9uIHRleHQgKi9cXG4uaW1hZ2VDYXB0aW9uIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogaW1hZ2UgbnVtYmVyICovXFxuLmltYWdlTnVtYmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi8qIHNjcm9sbGVyIGRvdHMgKi9cXG4uc2Nyb2xsZXJEb3RDb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG59XFxuXFxuLnNjcm9sbGVyRG90IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XFxufVxcblxcbi5zY3JvbGxlckRvdDpob3ZlciwgLnNlbGVjdGVkSW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTcxO1xcbn1cXG5cXG4vKiBmYWRpbmcgYW5pbWF0aW9uICovXFxuLmZhZGUge1xcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcbiAgfVxcblxcbkBrZXlmcmFtZXMgZmFkZSB7XFxuICAgIGZyb20ge29wYWNpdHk6IC40fVxcbiAgICB0byB7b3BhY2l0eTogMX1cXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogTW9iaWxlIGZvcm0gc3R5bGluZyAmIHZhbGlkYXRpb24gc3R5bGluZyAqL1xcblxcbi52YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpOyAgICBcXG59XFxuXFxuLmZvcm1IZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5mb3JtSGVhZGVyPmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjE1ZW07XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udmFsaWRhdGlvbkZvcm0ge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG5cXG4gICAgLyogd2lkdGg6IDgwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm1Sb3cge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgXFxufVxcblxcbi5mb3JtUm93IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uZm9ybVJvdyBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTsgICAgICAgICAgLyogVGhpcyB3b24ndCB3b3JrIGluIENocm9tZSBvciBTYWZhcmkgKi9cXG4gICAgLyogLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAgIFRoaXMgd2lsbCBtYWtlIGl0IHdvcmsgKi9cXG59XFxuXFxuLmZvcm1Sb3cgbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5mb3JtUm93IGlucHV0OmludmFsaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZXJyb3IpO1xcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IHJlZCBnbG93IGluIEZpcmVmb3ggKi9cXG59XFxuXFxuLmZvcm1Sb3cgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybVJvdyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUpO1xcbn1cXG5cXG4uZm9ybVJvdyBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlKTtcXG4gICAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogQVBJIHN0eWxpbmcgKi9cXG5cXG4uQVBJUHJhY3RpY2VDb250YWludGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuLkFQSUltYWdlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uQVBJUHJhY3RpY2VDb250YWludGVyPmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjE1ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLkFQSVNlYXJjaEJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcblxcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLkFQSVNlYXJjaEJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZSk7XFxufVxcblxcbi5BUElTZWFyY2hCdG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlKTtcXG4gICAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRm9vdGVyIHN0eWxpbmcgKi9cXG5cXG5mb290ZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcblxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG59XFxuXFxuLyogY2VudGVycyBnaXRodWIgaWNvbiB2ZXJ0aWNhbGx5ICovXFxuZm9vdGVyPmEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmdpdGh1Yjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcblxcblxcblxcblxcbi8qIERlc2t0b3AgZm9ybSBzdHlsaW5nICAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICAgLmZvcm1IZWFkZXIsXFxuICAgIC52YWxpZGF0aW9uRm9ybSB7XFxuICAgICAgd2lkdGg6IDYwMHB4O1xcbiAgICB9XFxuICAgIC5mb3JtUm93IHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBUbyBhdm9pZCBzdHJldGNoaW5nICovXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbiAgICAuZm9ybVJvdyBpbnB1dCxcXG4gICAgLmZvcm1Sb3cgc2VsZWN0IHtcXG4gICAgICB3aWR0aDogMjgwcHg7XFxuICAgICAgaGVpZ2h0OiBpbml0aWFsO1xcbiAgICB9XFxuICAgIC5mb3JtUm93IGxhYmVsIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICB3aWR0aDogMTgwcHg7XFxuICAgICAgbWFyZ2luLXRvcDogN3B4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIH1cXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwi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QkFBbUI7SUFDckI7SUFDQTs7TUFFRSxZQUFZO01BQ1osZUFBZTtJQUNqQjtJQUNBO01BQ0UsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixlQUFlO01BQ2YsbUJBQW1CO0lBQ3JCO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6IHJnYig0NSwgNDUsIDQ1KTtcXG4gICAgLS1saWdodC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICAtLWFjdGl2ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICAtLWVycm9yIDogZGFya3JlZFxcbn1cXG5cXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxcblxcbmh0bWwge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcblxcbmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXI+aDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogTWVudSBzdHlsaW5nICovXFxuXFxuLm1haW5NZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gICAgcGFkZGluZzogMCAxNXZ3O1xcbn1cXG5cXG4ubWVudUl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gICAgbWFyZ2luOiAwLjZyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5tZW51SXRlbTpob3ZlcixcXG4uZHJvcGRvd25NZW51OmhvdmVyLFxcbi5kcm9wZG93bk9wdGlvbjpob3ZlciwgXFxuLm1vYmlsZU1lbnVPcHRpb246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuLm1lbnVJdGVtOmFjdGl2ZSxcXG4uZHJvcGRvd25NZW51OmFjdGl2ZSxcXG4uZHJvcGRvd25PcHRpb246YWN0aXZlLFxcbi5tb2JpbGVNZW51T3B0aW9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZSk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogQ29udGVudCBzdHlsaW5nICovXFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2FsYyhjZW50ZXIgLSAzMCUpXFxufVxcblxcblxcblxcblxcblxcbi8qIERyb3Bkb3duIG1lbnUgc3R5bGluZyAqL1xcblxcbi5kcm9wZG93bk1lbnUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZHJvcGRvd25Db250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYygxMDAlICsgMnB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmRyb3Bkb3duT3B0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcblxcblxcblxcblxcbi8qIE1vYmlsZSBtZW51IHN0eWxpbmcgKi9cXG5cXG4ubW9iaWxlTWVudUNvbnRlbnQge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9iaWxlTWVudUNvbnRlbnQ+aDMge1xcbiAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubW9iaWxlTWVudUNvbnRlbnQ+dGFibGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9iaWxlTWVudUNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAvKiBlbmFibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbn1cXG5cXG4vKiBoaWRlIHNjcm9sbGJhciwgcmV0YWluIGZ1bmN0aW9uICovXFxuLm1vYmlsZU1lbnVDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vYmlsZU1lbnVPcHRpb24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuXFxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogSW1hZ2Ugc2Nyb2xsZXIgc3R5bGluZyAqL1xcblxcbi5zY3JvbGxlckltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIHNsaWRlc2hvdyBjb250YWluZXIgKi9cXG4uaW1hZ2VTY3JvbGxlciB7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLyogaGlkZSBpbWFnZXMgZGVmYXVsdCAqL1xcbi5pbWFnZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIG5leHQgJiBwcmV2aW91cyBidXR0b25zICovXFxuLnByZXZpb3VzSW1hZ2VCdG4sIC5uZXh0SW1hZ2VCdG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gICAgLyogdXNlci1zZWxlY3Q6IG5vbmU7ICovXFxufVxcblxcbi8qIHBvc2l0aW9uIG5leHQgYnV0dG9uIG9uIHRoZSByaWdodCAqL1xcbi5uZXh0SW1hZ2VCdG4ge1xcbiAgICByaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxufVxcblxcbi8qIGFkZCBob3ZlciBlZmZlY3QgKi9cXG4ucHJldmlvdXNJbWFnZUJ0bjpob3ZlciwgLm5leHRJbWFnZUJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKVxcbn1cXG5cXG4vKiBjYXB0aW9uIHRleHQgKi9cXG4uaW1hZ2VDYXB0aW9uIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogaW1hZ2UgbnVtYmVyICovXFxuLmltYWdlTnVtYmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi8qIHNjcm9sbGVyIGRvdHMgKi9cXG4uc2Nyb2xsZXJEb3RDb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG59XFxuXFxuLnNjcm9sbGVyRG90IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XFxufVxcblxcbi5zY3JvbGxlckRvdDpob3ZlciwgLnNlbGVjdGVkSW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTcxO1xcbn1cXG5cXG4vKiBmYWRpbmcgYW5pbWF0aW9uICovXFxuLmZhZGUge1xcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcbiAgfVxcblxcbkBrZXlmcmFtZXMgZmFkZSB7XFxuICAgIGZyb20ge29wYWNpdHk6IC40fVxcbiAgICB0byB7b3BhY2l0eTogMX1cXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogTW9iaWxlIGZvcm0gc3R5bGluZyAmIHZhbGlkYXRpb24gc3R5bGluZyAqL1xcblxcbi52YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpOyAgICBcXG59XFxuXFxuLmZvcm1IZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5mb3JtSGVhZGVyPmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjE1ZW07XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udmFsaWRhdGlvbkZvcm0ge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG5cXG4gICAgLyogd2lkdGg6IDgwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm1Sb3cge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgXFxufVxcblxcbi5mb3JtUm93IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uZm9ybVJvdyBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTsgICAgICAgICAgLyogVGhpcyB3b24ndCB3b3JrIGluIENocm9tZSBvciBTYWZhcmkgKi9cXG4gICAgLyogLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAgIFRoaXMgd2lsbCBtYWtlIGl0IHdvcmsgKi9cXG59XFxuXFxuLmZvcm1Sb3cgbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5mb3JtUm93IGlucHV0OmludmFsaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZXJyb3IpO1xcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IHJlZCBnbG93IGluIEZpcmVmb3ggKi9cXG59XFxuXFxuLmZvcm1Sb3cgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybVJvdyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUpO1xcbn1cXG5cXG4uZm9ybVJvdyBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlKTtcXG4gICAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogQVBJIHN0eWxpbmcgKi9cXG5cXG4uQVBJUHJhY3RpY2VDb250YWludGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuLkFQSUltYWdlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uQVBJUHJhY3RpY2VDb250YWludGVyPmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjE1ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLkFQSVNlYXJjaEJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcblxcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLkFQSVNlYXJjaEJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZSk7XFxufVxcblxcbi5BUElTZWFyY2hCdG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlKTtcXG4gICAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRm9vdGVyIHN0eWxpbmcgKi9cXG5cXG5mb290ZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcblxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG59XFxuXFxuLyogY2VudGVycyBnaXRodWIgaWNvbiB2ZXJ0aWNhbGx5ICovXFxuZm9vdGVyPmEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmdpdGh1Yjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcblxcblxcblxcblxcbi8qIERlc2t0b3AgZm9ybSBzdHlsaW5nICAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICAgLmZvcm1IZWFkZXIsXFxuICAgIC52YWxpZGF0aW9uRm9ybSB7XFxuICAgICAgd2lkdGg6IDYwMHB4O1xcbiAgICB9XFxuICAgIC5mb3JtUm93IHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBUbyBhdm9pZCBzdHJldGNoaW5nICovXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbiAgICAuZm9ybVJvdyBpbnB1dCxcXG4gICAgLmZvcm1Sb3cgc2VsZWN0IHtcXG4gICAgICB3aWR0aDogMjgwcHg7XFxuICAgICAgaGVpZ2h0OiBpbml0aWFsO1xcbiAgICB9XFxuICAgIC5mb3JtUm93IGxhYmVsIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICB3aWR0aDogMTgwcHg7XFxuICAgICAgbWFyZ2luLXRvcDogN3B4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9wYWdlTG9hZGVyJztcblxuaW5pdGlhbGl6ZSgpO1xuIl0sIm5hbWVzIjpbImNvdW50cnlMaXN0QWxwaGEyIiwiQUYiLCJBTCIsIkRaIiwiQVMiLCJBRCIsIkFPIiwiQUkiLCJBUSIsIkFHIiwiQVIiLCJBTSIsIkFXIiwiQVUiLCJBVCIsIkFaIiwiQlMiLCJCSCIsIkJEIiwiQkIiLCJCWSIsIkJFIiwiQloiLCJCSiIsIkJNIiwiQlQiLCJCTyIsIkJRIiwiQkEiLCJCVyIsIkJWIiwiQlIiLCJJTyIsIkJOIiwiQkciLCJCRiIsIkJJIiwiQ1YiLCJLSCIsIkNNIiwiQ0EiLCJLWSIsIkNGIiwiVEQiLCJDTCIsIkNOIiwiQ1giLCJDQyIsIkNPIiwiS00iLCJDRCIsIkNHIiwiQ0siLCJDUiIsIkhSIiwiQ1UiLCJDVyIsIkNZIiwiQ1oiLCJDSSIsIkRLIiwiREoiLCJETSIsIkRPIiwiRUMiLCJFRyIsIlNWIiwiR1EiLCJFUiIsIkVFIiwiU1oiLCJFVCIsIkZLIiwiRk8iLCJGSiIsIkZJIiwiRlIiLCJHRiIsIlBGIiwiVEYiLCJHQSIsIkdNIiwiR0UiLCJERSIsIkdIIiwiR0kiLCJHUiIsIkdMIiwiR0QiLCJHUCIsIkdVIiwiR1QiLCJHRyIsIkdOIiwiR1ciLCJHWSIsIkhUIiwiSE0iLCJWQSIsIkhOIiwiSEsiLCJIVSIsIklTIiwiSU4iLCJJRCIsIklSIiwiSVEiLCJJRSIsIklNIiwiSUwiLCJJVCIsIkpNIiwiSlAiLCJKRSIsIkpPIiwiS1oiLCJLRSIsIktJIiwiS1AiLCJLUiIsIktXIiwiS0ciLCJMQSIsIkxWIiwiTEIiLCJMUyIsIkxSIiwiTFkiLCJMSSIsIkxUIiwiTFUiLCJNTyIsIk1HIiwiTVciLCJNWSIsIk1WIiwiTUwiLCJNVCIsIk1IIiwiTVEiLCJNUiIsIk1VIiwiWVQiLCJNWCIsIkZNIiwiTUQiLCJNQyIsIk1OIiwiTUUiLCJNUyIsIk1BIiwiTVoiLCJNTSIsIk5BIiwiTlIiLCJOUCIsIk5MIiwiTkMiLCJOWiIsIk5JIiwiTkUiLCJORyIsIk5VIiwiTkYiLCJNUCIsIk5PIiwiT00iLCJQSyIsIlBXIiwiUFMiLCJQQSIsIlBHIiwiUFkiLCJQRSIsIlBIIiwiUE4iLCJQTCIsIlBUIiwiUFIiLCJRQSIsIk1LIiwiUk8iLCJSVSIsIlJXIiwiUkUiLCJCTCIsIlNIIiwiS04iLCJMQyIsIk1GIiwiUE0iLCJWQyIsIldTIiwiU00iLCJTVCIsIlNBIiwiU04iLCJSUyIsIlNDIiwiU0wiLCJTRyIsIlNYIiwiU0siLCJTSSIsIlNCIiwiU08iLCJaQSIsIkdTIiwiU1MiLCJFUyIsIkxLIiwiU0QiLCJTUiIsIlNKIiwiU0UiLCJDSCIsIlNZIiwiVFciLCJUSiIsIlRaIiwiVEgiLCJUTCIsIlRHIiwiVEsiLCJUTyIsIlRUIiwiVE4iLCJUUiIsIlRNIiwiVEMiLCJUViIsIlVHIiwiVUEiLCJBRSIsIkdCIiwiVU0iLCJVUyIsIlVZIiwiVVoiLCJWVSIsIlZFIiwiVk4iLCJWRyIsIlZJIiwiV0YiLCJFSCIsIllFIiwiWk0iLCJaVyIsIkFYIiwidmFsaWRhdGVFbWFpbCIsImVtYWlsSW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsaWRpdHkiLCJ0eXBlTWlzbWF0Y2giLCJ2YWx1ZSIsInNldEN1c3RvbVZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJjcmVhdGVFbWFpbElucHV0IiwiY29udGFpbmVyIiwiZm9ybVJvdyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJlbWFpbExhYmVsIiwiZm9yIiwiaW5uZXJUZXh0IiwiaWQiLCJuYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwidmFsaWRhdGVDb3VudHJ5SW5wdXQiLCJjb3VudHJ5U2VsZWN0aW9uIiwiY3JlYXRlQ291bnRyeUlucHV0IiwiY291bnRyeUxhYmVsIiwiYmxhbmtPcHRpb24iLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIm5ld09wdGlvbiIsInZhbGlkYXRlWmlwQ29kZSIsInppcENvZGVJbnB1dCIsInRlc3QiLCJjcmVhdGVaaXBDb2RlSW5wdXQiLCJ6aXBDb2RlTGFiZWwiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwicGFzc3dvcmRJbnB1dCIsImxlbmd0aCIsImNyZWF0ZVBhc3N3b3JkSW5wdXQiLCJwYXNzd29yZExhYmVsIiwiY29uZmlybVBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkSW5wdXQiLCJjcmVhdGVDb25maXJtUGFzc3dvcmRJbnB1dCIsImNvbmZpcm1QYXNzd29yZExhYmVsIiwic3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZVN1Ym1pdEJ1dHRvbiIsInN1Ym1pdEJ0biIsImdlbmVyYXRlRm9ybSIsImdpdGh1Ykljb24iLCJwbGFjZWhvbGRlckltZzEiLCJwbGFjZWhvbGRlckltZzIiLCJwbGFjZWhvbGRlckltZzMiLCJwbGFjZWhvbGRlckltZzQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsInByb2Nlc3NNZW51U2VsZWN0aW9uIiwibWFpbk1lbnUiLCJjb250ZW50Q29udGFpbmVyIiwibWVudUNvdW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJpIiwiY2hpbGRyZW4iLCJyZW1vdmUiLCJ0YXJnZXQiLCJjb250ZW50Q291bnQiLCJjb250YWlucyIsImNyZWF0ZU1lbnVJdGVtIiwiaXRlbU5hbWUiLCJpdGVtQ29udGFpbmVyIiwiaXRlbUlkIiwiaXRlbUNsYXNzIiwibmV3TWVudUl0ZW0iLCJ1bmRlZmluZWQiLCJzZXRBdHRyaWJ1dGUiLCJhZGRJbWFnZVRvU2Nyb2xsZXIiLCJpbWFnZSIsInNjcm9sbGVyIiwiY2FwdGlvbiIsImltYWdlQ29udGFpbmVyIiwiaW1hZ2VOdW1iZXIiLCJuZXdJbWFnZSIsInNyYyIsImltYWdlQ2FwdGlvbiIsInNsaWRlSW5kZXgiLCJzZWxlY3RJbWFnZSIsIm4iLCJzY3JvbGxlckltYWdlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzY3JvbGxlckRvdHMiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwibG9vcEltYWdlU2Nyb2xsZXIiLCJzZXRUaW1lb3V0IiwiY3JlYXRlSGVhZGVyIiwiaGVhZGVyIiwiaGVhZGVyVGl0bGUiLCJjcmVhdGVNYWluTWVudSIsImNyZWF0ZURyb3Bkb3duTWVudSIsImRyb3Bkb3duTWVudUNvbnRhaW50ZXIiLCJkcm9wZG93bkNvbnRhaW5lciIsImRyb3Bkb3duT3B0aW9uIiwiZHJvcGRvd25NZW51IiwidG9nZ2xlIiwid2luZG93Iiwib25jbGljayIsIm1hdGNoZXMiLCJjcmVhdGVNb2JpbGVNZW51IiwibW9iaWxlTWVudUNvbnRlbnQiLCJtb2JpbGVNZW51VGl0bGUiLCJtb2JpbGVNZW51VGFibGUiLCJtb2JpbGVNZW51Q29udGFpbnRlciIsInNjcm9sbExlZnQiLCJkZWx0YVkiLCJtb2JpbGVNZW51T3B0aW9uIiwibW9iaWxlTWVudUNvdW50IiwiY3JlYXRlSW1hZ2VTY3JvbGxlciIsImltYWdlU2Nyb2xsZXJDb250YWludGVyIiwiaW1hZ2VTY3JvbGxlciIsInByZXZpb3VzSW1hZ2VCdG4iLCJpbm5lckhUTUwiLCJuZXh0SW1hZ2VCdG4iLCJzY3JvbGxlckRvdENvbnRhaW5lciIsIm5ld0RvdCIsImNyZWF0ZVZhbGlkYXRpb25Gb3JtIiwidmFsaWRhdGlvbkZvcm1Db250YWludGVyIiwiZm9ybUhlYWRlciIsImZvcm1UaXRsZSIsInZhbGlkYXRpb25Gb3JtIiwiYXV0b2NvbXBsZXRlIiwiY3JlYXRlQVBJUHJhY3RpY2UiLCJBUElQcmFjdGljZUNvbnRhaW50ZXIiLCJBUElUaXRsZSIsIkFQSUltYWdlQ29udGFpbmVyIiwiQVBJUHJhY3RpY2UiLCJmZXRjaCIsIm1vZGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImltYWdlcyIsIm9yaWdpbmFsIiwidXJsIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiQVBJU2VhcmNoSW5wdXQiLCJBUElTZWFyY2hCdG4iLCJjcmVhdGVDb250ZW50Q29udGFpbmVyIiwiY29udGVudENvbnRhaW50ZXIiLCJjcmVhdGVGb290ZXIiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJ0ZXh0Q29udGVudCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdpdGh1YkxpbmsiLCJocmVmIiwibmV3R2l0aHViSWNvbiIsImluaXRpYWxpemUiXSwic291cmNlUm9vdCI6IiJ9