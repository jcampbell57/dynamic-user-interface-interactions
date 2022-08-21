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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: rgb(90, 90, 90);\n    --secondary-color: rgb(45, 45, 45);\n    --light-color: whitesmoke;\n    --hover: rgba(255, 255, 255, 0.2);\n    --active: rgba(255, 255, 255, 0.3);\n    --error : darkred\n}\n\n* {box-sizing: border-box}\n\nhtml {\n    overflow: hidden;\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden;\n}\n\n\n\n\n\n/* Header styling */\n\nheader {\n    padding: 1rem;\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nheader>h1 {\n    font-size: 2em;\n    font-weight: bolder;\n}\n\n\n\n\n\n/* Menu styling */\n\n.mainMenu {\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n    border-bottom: 3px solid var(--light-color);\n\n    display: flex;\n    text-align: center;\n    align-items: center;\n    justify-content: space-evenly;\n\n    padding: 0 15vw;\n}\n\n.menuItem {\n    padding: 0.4rem 1rem;\n    margin: 0.6rem;\n    font-size: 1.1rem;\n    border-radius: 0.3rem;\n}\n\n.menuItem:hover,\n.dropdownMenu:hover,\n.dropdownOption:hover, \n.mobileMenuOption:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.menuItem:active,\n.dropdownMenu:active,\n.dropdownOption:active,\n.mobileMenuOption:active {\n    background-color: var(--active);\n}\n\n.selected {\n    background-color: var(--hover);\n}\n\n\n\n\n\n/* Content styling */\n\n.hidden {\n    display: none;\n}\n\n.contentContainer {\n    background-color: var(--background-color);\n\n    height: 100%;\n    padding: 1rem;\n    overflow: auto;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: calc(center - 30%)\n}\n\n\n\n\n\n/* Dropdown menu styling */\n\n.dropdownMenu {\n    color: var(--light-color);\n    width: 20vw;\n    min-width: fit-content;\n    padding: 0.5rem 1rem;\n    border: 2px solid var(--light-color);\n    text-align: center;\n    font-size: 1.1rem;\n    position: relative;\n}\n\n.dropdownContainer {\n    position: absolute;\n    top: calc(100% + 2px);\n    width: 100%;\n    left: 0;\n\n    border: 1px solid var(--light-color);\n}\n\n.dropdownOption {\n    display: block;\n    text-align: center;\n    padding: 0.5rem 1rem;\n}\n\n\n\n\n\n/* Mobile menu styling */\n\n.mobileMenuContent {\n    color: var(--light-color);\n    text-align: center;\n    width: 100%;\n}\n\n.mobileMenuContent>h3 {\n    font-size: 1.15em;\n    margin-bottom: 1em;\n    font-weight: 500;\n}\n\n.mobileMenuContent>table {\n    display: flex;\n}\n\n.mobileMenuContainer {\n    border: 2px solid var(--light-color);\n    cursor: grab;\n    display: flex;\n\n    /* enable horizontal scroll */\n    overflow-x: scroll;\n}\n\n/* hide scrollbar, retain function */\n.mobileMenuContainer::-webkit-scrollbar {\n    display: none;\n}\n\n.mobileMenuOption {\n    padding: 0.5rem 1rem;\n    font-size: 1.1rem;\n\n    min-width: max-content;\n    text-align: center;\n}\n\n\n\n\n\n/* Image scroller styling */\n\n.scrollerImage {\n    width: 100%;\n}\n\n/* slideshow container */\n.imageScroller {\n    max-width: 1000px;\n    position: relative;\n    margin: auto;\n}\n\n/* hide images default */\n.imageContainer {\n    display: none;\n}\n\n/* next & previous buttons */\n.previousImageBtn, .nextImageBtn {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    width: auto;\n    margin-top: -22px;\n    padding: 16px;\n    color: var(--light-color);\n    font-weight: bold;\n    font-size: 18px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n    /* user-select: none; */\n}\n\n/* position next button on the right */\n.nextImageBtn {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n\n/* add hover effect */\n.previousImageBtn:hover, .nextImageBtn:hover {\n    background-color: var(--hover)\n}\n\n/* caption text */\n.imageCaption {\n    color: var(--light-color);\n    font-size: 15px;\n    padding: 8px 12px;\n    position: absolute;\n    bottom: 8px;\n    width: 100%;\n    text-align: center;\n}\n\n/* image number */\n.imageNumber {\n    color: var(--light-color);\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n\n/* scroller dots */\n.scrollerDotContainer {\n    text-align: center;\n    margin-top: 4px;\n}\n\n.scrollerDot {\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    margin: 0 2px;\n    background-color: #bbb;\n    border-radius: 50%;\n    display: inline-block;\n    transition: background-color 0.6s ease;\n}\n\n.scrollerDot:hover, .selectedImage {\n    background-color: #717171;\n}\n\n/* fading animation */\n.fade {\n    animation-name: fade;\n    animation-duration: 1.5s;\n  }\n\n@keyframes fade {\n    from {opacity: .4}\n    to {opacity: 1}\n}\n\n\n\n\n\n/* Mobile form styling & validation styling */\n\n.validationFormContainter {\n    color: var(--light-color);    \n}\n\n.formHeader {\n    text-align: center;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n}\n\n.formHeader>h3 {\n    font-size: 1.15em;\n    padding: 0.5em;\n    font-weight: 500;\n}\n\n.validationForm {\n    font-size: 1.1em;\n    padding: 0.5em;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n\n    /* width: 80%; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.formRow {\n    margin-bottom: 1rem;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    flex-wrap: wrap; \n}\n\n.formRow input {\n    background-color: var(--light-color);\n    border: 1px solid var(--secondary-color);\n    border-radius: 3px;\n    width: 100%;\n    padding: 7px;\n    font-size: 1.1rem;\n}\n\n.formRow select {\n    width: 100%;\n    padding: 5px;\n    font-size: 1.1rem;          /* This won't work in Chrome or Safari */\n    /* -webkit-appearance: none;   This will make it work */\n}\n\n.formRow label {\n    margin-bottom: 0.5rem;\n}\n\n.formRow input:invalid {\n  border: 1px solid var(--error);\n  color: var(--error);\n  box-shadow: none; /* Remove default red glow in Firefox */\n}\n\n.formRow button {\n    font-size: 1.15rem;\n    font-weight: bold;\n\n    color: #FFFFFF;\n    background-color: var(--hover);\n\n    border: none;\n    border-radius: 3px;\n\n    padding: 10px 40px;\n    cursor: pointer;\n}\n\n.formRow button:hover {\n    background-color: var(--active);\n}\n\n.formRow button:active {\n    background-color: var(--active);\n    cursor: grabbing;\n}\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    padding: 1rem;\n    margin-top: auto;\n    border-top: 3px solid var(--light-color);\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n\n}\n\n/* centers github icon vertically */\nfooter>a {\n    display: flex;\n}\n\n.github {\n    height: 24px;\n    transition: transform 0.3s ease-in-out;\n}\n\n.github:hover {\n    transform: rotate(-360deg) scale(1.2);\n}\n\n\n\n\n\n/* Desktop form styling  */\n\n@media only screen and (min-width: 700px) {\n    .formHeader,\n    .validationForm {\n      width: 600px;\n    }\n    .formRow {\n      flex-direction: row;\n      align-items: flex-start; /* To avoid stretching */\n      margin-bottom: 20px;\n    }\n    .formRow input,\n    .formRow select {\n      width: 280px;\n      height: initial;\n    }\n    .formRow label {\n      text-align: right;\n      width: 180px;\n      margin-top: 7px;\n      padding-right: 20px;\n    }\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mCAAmC;IACnC,kCAAkC;IAClC,yBAAyB;IACzB,iCAAiC;IACjC,kCAAkC;IAClC;AACJ;;AAEA,GAAG,sBAAsB;;AAEzB;IACI,gBAAgB;AACpB;;AAEA;IACI,wHAAwH;IACxH,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,gBAAgB;AACpB;;;;;;AAMA,mBAAmB;;AAEnB;IACI,aAAa;;IAEb,wCAAwC;IACxC,yBAAyB;;IAEzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;;;;;AAMA,iBAAiB;;AAEjB;IACI,wCAAwC;IACxC,yBAAyB;IACzB,2CAA2C;;IAE3C,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,6BAA6B;;IAE7B,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,cAAc;IACd,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;;;;IAII,eAAe;IACf,8BAA8B;AAClC;;AAEA;;;;IAII,+BAA+B;AACnC;;AAEA;IACI,8BAA8B;AAClC;;;;;;AAMA,oBAAoB;;AAEpB;IACI,aAAa;AACjB;;AAEA;IACI,yCAAyC;;IAEzC,YAAY;IACZ,aAAa;IACb,cAAc;;IAEd,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB;AACJ;;;;;;AAMA,0BAA0B;;AAE1B;IACI,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,oBAAoB;IACpB,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,OAAO;;IAEP,oCAAoC;AACxC;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,oBAAoB;AACxB;;;;;;AAMA,wBAAwB;;AAExB;IACI,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,aAAa;;IAEb,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA,oCAAoC;AACpC;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;;IAEjB,sBAAsB;IACtB,kBAAkB;AACtB;;;;;;AAMA,2BAA2B;;AAE3B;IACI,WAAW;AACf;;AAEA,wBAAwB;AACxB;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA,wBAAwB;AACxB;IACI,aAAa;AACjB;;AAEA,4BAA4B;AAC5B;IACI,eAAe;IACf,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,qBAAqB;IACrB,0BAA0B;IAC1B,uBAAuB;AAC3B;;AAEA,sCAAsC;AACtC;IACI,QAAQ;IACR,0BAA0B;AAC9B;;AAEA,qBAAqB;AACrB;IACI;AACJ;;AAEA,iBAAiB;AACjB;IACI,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,kBAAkB;AACtB;;AAEA,iBAAiB;AACjB;IACI,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,MAAM;AACV;;AAEA,kBAAkB;AAClB;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,qBAAqB;AACrB;IACI,oBAAoB;IACpB,wBAAwB;EAC1B;;AAEF;IACI,MAAM,WAAW;IACjB,IAAI,UAAU;AAClB;;;;;;AAMA,6CAA6C;;AAE7C;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,8BAA8B;IAC9B,oCAAoC;IACpC,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,8BAA8B;IAC9B,oCAAoC;IACpC,qBAAqB;;IAErB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,wCAAwC;IACxC,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB,WAAW,wCAAwC;IACpE,uDAAuD;AAC3D;;AAEA;IACI,qBAAqB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB,EAAE,uCAAuC;AAC3D;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;;IAEjB,cAAc;IACd,8BAA8B;;IAE9B,YAAY;IACZ,kBAAkB;;IAElB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;IAC/B,gBAAgB;AACpB;;;;;;AAMA,mBAAmB;;AAEnB;IACI,aAAa;IACb,gBAAgB;IAChB,wCAAwC;;IAExC,wCAAwC;IACxC,yBAAyB;;IAEzB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;;AAEb;;AAEA,mCAAmC;AACnC;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,qCAAqC;AACzC;;;;;;AAMA,0BAA0B;;AAE1B;IACI;;MAEE,YAAY;IACd;IACA;MACE,mBAAmB;MACnB,uBAAuB,EAAE,wBAAwB;MACjD,mBAAmB;IACrB;IACA;;MAEE,YAAY;MACZ,eAAe;IACjB;IACA;MACE,iBAAiB;MACjB,YAAY;MACZ,eAAe;MACf,mBAAmB;IACrB;EACF","sourcesContent":[":root {\n    --background-color: rgb(90, 90, 90);\n    --secondary-color: rgb(45, 45, 45);\n    --light-color: whitesmoke;\n    --hover: rgba(255, 255, 255, 0.2);\n    --active: rgba(255, 255, 255, 0.3);\n    --error : darkred\n}\n\n* {box-sizing: border-box}\n\nhtml {\n    overflow: hidden;\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden;\n}\n\n\n\n\n\n/* Header styling */\n\nheader {\n    padding: 1rem;\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nheader>h1 {\n    font-size: 2em;\n    font-weight: bolder;\n}\n\n\n\n\n\n/* Menu styling */\n\n.mainMenu {\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n    border-bottom: 3px solid var(--light-color);\n\n    display: flex;\n    text-align: center;\n    align-items: center;\n    justify-content: space-evenly;\n\n    padding: 0 15vw;\n}\n\n.menuItem {\n    padding: 0.4rem 1rem;\n    margin: 0.6rem;\n    font-size: 1.1rem;\n    border-radius: 0.3rem;\n}\n\n.menuItem:hover,\n.dropdownMenu:hover,\n.dropdownOption:hover, \n.mobileMenuOption:hover {\n    cursor: pointer;\n    background-color: var(--hover);\n}\n\n.menuItem:active,\n.dropdownMenu:active,\n.dropdownOption:active,\n.mobileMenuOption:active {\n    background-color: var(--active);\n}\n\n.selected {\n    background-color: var(--hover);\n}\n\n\n\n\n\n/* Content styling */\n\n.hidden {\n    display: none;\n}\n\n.contentContainer {\n    background-color: var(--background-color);\n\n    height: 100%;\n    padding: 1rem;\n    overflow: auto;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: calc(center - 30%)\n}\n\n\n\n\n\n/* Dropdown menu styling */\n\n.dropdownMenu {\n    color: var(--light-color);\n    width: 20vw;\n    min-width: fit-content;\n    padding: 0.5rem 1rem;\n    border: 2px solid var(--light-color);\n    text-align: center;\n    font-size: 1.1rem;\n    position: relative;\n}\n\n.dropdownContainer {\n    position: absolute;\n    top: calc(100% + 2px);\n    width: 100%;\n    left: 0;\n\n    border: 1px solid var(--light-color);\n}\n\n.dropdownOption {\n    display: block;\n    text-align: center;\n    padding: 0.5rem 1rem;\n}\n\n\n\n\n\n/* Mobile menu styling */\n\n.mobileMenuContent {\n    color: var(--light-color);\n    text-align: center;\n    width: 100%;\n}\n\n.mobileMenuContent>h3 {\n    font-size: 1.15em;\n    margin-bottom: 1em;\n    font-weight: 500;\n}\n\n.mobileMenuContent>table {\n    display: flex;\n}\n\n.mobileMenuContainer {\n    border: 2px solid var(--light-color);\n    cursor: grab;\n    display: flex;\n\n    /* enable horizontal scroll */\n    overflow-x: scroll;\n}\n\n/* hide scrollbar, retain function */\n.mobileMenuContainer::-webkit-scrollbar {\n    display: none;\n}\n\n.mobileMenuOption {\n    padding: 0.5rem 1rem;\n    font-size: 1.1rem;\n\n    min-width: max-content;\n    text-align: center;\n}\n\n\n\n\n\n/* Image scroller styling */\n\n.scrollerImage {\n    width: 100%;\n}\n\n/* slideshow container */\n.imageScroller {\n    max-width: 1000px;\n    position: relative;\n    margin: auto;\n}\n\n/* hide images default */\n.imageContainer {\n    display: none;\n}\n\n/* next & previous buttons */\n.previousImageBtn, .nextImageBtn {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    width: auto;\n    margin-top: -22px;\n    padding: 16px;\n    color: var(--light-color);\n    font-weight: bold;\n    font-size: 18px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n    /* user-select: none; */\n}\n\n/* position next button on the right */\n.nextImageBtn {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n\n/* add hover effect */\n.previousImageBtn:hover, .nextImageBtn:hover {\n    background-color: var(--hover)\n}\n\n/* caption text */\n.imageCaption {\n    color: var(--light-color);\n    font-size: 15px;\n    padding: 8px 12px;\n    position: absolute;\n    bottom: 8px;\n    width: 100%;\n    text-align: center;\n}\n\n/* image number */\n.imageNumber {\n    color: var(--light-color);\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n\n/* scroller dots */\n.scrollerDotContainer {\n    text-align: center;\n    margin-top: 4px;\n}\n\n.scrollerDot {\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    margin: 0 2px;\n    background-color: #bbb;\n    border-radius: 50%;\n    display: inline-block;\n    transition: background-color 0.6s ease;\n}\n\n.scrollerDot:hover, .selectedImage {\n    background-color: #717171;\n}\n\n/* fading animation */\n.fade {\n    animation-name: fade;\n    animation-duration: 1.5s;\n  }\n\n@keyframes fade {\n    from {opacity: .4}\n    to {opacity: 1}\n}\n\n\n\n\n\n/* Mobile form styling & validation styling */\n\n.validationFormContainter {\n    color: var(--light-color);    \n}\n\n.formHeader {\n    text-align: center;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n}\n\n.formHeader>h3 {\n    font-size: 1.15em;\n    padding: 0.5em;\n    font-weight: 500;\n}\n\n.validationForm {\n    font-size: 1.1em;\n    padding: 0.5em;\n    background-color: var(--hover);\n    border: 1px solid var(--light-color);\n    border-radius: 0.3rem;\n\n    /* width: 80%; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.formRow {\n    margin-bottom: 1rem;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    flex-wrap: wrap; \n}\n\n.formRow input {\n    background-color: var(--light-color);\n    border: 1px solid var(--secondary-color);\n    border-radius: 3px;\n    width: 100%;\n    padding: 7px;\n    font-size: 1.1rem;\n}\n\n.formRow select {\n    width: 100%;\n    padding: 5px;\n    font-size: 1.1rem;          /* This won't work in Chrome or Safari */\n    /* -webkit-appearance: none;   This will make it work */\n}\n\n.formRow label {\n    margin-bottom: 0.5rem;\n}\n\n.formRow input:invalid {\n  border: 1px solid var(--error);\n  color: var(--error);\n  box-shadow: none; /* Remove default red glow in Firefox */\n}\n\n.formRow button {\n    font-size: 1.15rem;\n    font-weight: bold;\n\n    color: #FFFFFF;\n    background-color: var(--hover);\n\n    border: none;\n    border-radius: 3px;\n\n    padding: 10px 40px;\n    cursor: pointer;\n}\n\n.formRow button:hover {\n    background-color: var(--active);\n}\n\n.formRow button:active {\n    background-color: var(--active);\n    cursor: grabbing;\n}\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    padding: 1rem;\n    margin-top: auto;\n    border-top: 3px solid var(--light-color);\n\n    background-color: var(--secondary-color);\n    color: var(--light-color);\n\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n\n}\n\n/* centers github icon vertically */\nfooter>a {\n    display: flex;\n}\n\n.github {\n    height: 24px;\n    transition: transform 0.3s ease-in-out;\n}\n\n.github:hover {\n    transform: rotate(-360deg) scale(1.2);\n}\n\n\n\n\n\n/* Desktop form styling  */\n\n@media only screen and (min-width: 700px) {\n    .formHeader,\n    .validationForm {\n      width: 600px;\n    }\n    .formRow {\n      flex-direction: row;\n      align-items: flex-start; /* To avoid stretching */\n      margin-bottom: 20px;\n    }\n    .formRow input,\n    .formRow select {\n      width: 280px;\n      height: initial;\n    }\n    .formRow label {\n      text-align: right;\n      width: 180px;\n      margin-top: 7px;\n      padding-right: 20px;\n    }\n  }"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksYUFBYSxXQUFXLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxhQUFhLFdBQVcsYUFBYSxNQUFNLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLGVBQWUsZ0JBQWdCLFdBQVcsYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLHdCQUF3QixhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEseUJBQXlCLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxhQUFhLFdBQVcsYUFBYSxh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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFQUEsdURBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2Zvcm1WYWxpZGF0aW9uLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL3BhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9yZXNldC5jc3M/ZWRlMCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ291bnRyeSBuYW1lcyBvYmplY3QgdXNpbmcgMi1sZXR0ZXIgY291bnRyeSBjb2RlcyB0byByZWZlcmVuY2UgY291bnRyeSBuYW1lXG4vLyBJU08gMzE2NiBBbHBoYS0yIEZvcm1hdDogWzIgbGV0dGVyIENvdW50cnkgQ29kZV06IFtDb3VudHJ5IE5hbWVdXG4vLyBTb3J0ZWQgYWxwaGFiZXRpY2FsIGJ5IGNvdW50cnkgbmFtZSAoc3BlY2lhbCBjaGFyYWN0ZXJzIG9uIGJvdHRvbSlcbmNvbnN0IGNvdW50cnlMaXN0QWxwaGEyID0ge1xuICBBRjogJ0FmZ2hhbmlzdGFuJyxcbiAgQUw6ICdBbGJhbmlhJyxcbiAgRFo6ICdBbGdlcmlhJyxcbiAgQVM6ICdBbWVyaWNhbiBTYW1vYScsXG4gIEFEOiAnQW5kb3JyYScsXG4gIEFPOiAnQW5nb2xhJyxcbiAgQUk6ICdBbmd1aWxsYScsXG4gIEFROiAnQW50YXJjdGljYScsXG4gIEFHOiAnQW50aWd1YSBhbmQgQmFyYnVkYScsXG4gIEFSOiAnQXJnZW50aW5hJyxcbiAgQU06ICdBcm1lbmlhJyxcbiAgQVc6ICdBcnViYScsXG4gIEFVOiAnQXVzdHJhbGlhJyxcbiAgQVQ6ICdBdXN0cmlhJyxcbiAgQVo6ICdBemVyYmFpamFuJyxcbiAgQlM6ICdCYWhhbWFzICh0aGUpJyxcbiAgQkg6ICdCYWhyYWluJyxcbiAgQkQ6ICdCYW5nbGFkZXNoJyxcbiAgQkI6ICdCYXJiYWRvcycsXG4gIEJZOiAnQmVsYXJ1cycsXG4gIEJFOiAnQmVsZ2l1bScsXG4gIEJaOiAnQmVsaXplJyxcbiAgQko6ICdCZW5pbicsXG4gIEJNOiAnQmVybXVkYScsXG4gIEJUOiAnQmh1dGFuJyxcbiAgQk86ICdCb2xpdmlhIChQbHVyaW5hdGlvbmFsIFN0YXRlIG9mKScsXG4gIEJROiAnQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmEnLFxuICBCQTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLFxuICBCVzogJ0JvdHN3YW5hJyxcbiAgQlY6ICdCb3V2ZXQgSXNsYW5kJyxcbiAgQlI6ICdCcmF6aWwnLFxuICBJTzogJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeSAodGhlKScsXG4gIEJOOiAnQnJ1bmVpIERhcnVzc2FsYW0nLFxuICBCRzogJ0J1bGdhcmlhJyxcbiAgQkY6ICdCdXJraW5hIEZhc28nLFxuICBCSTogJ0J1cnVuZGknLFxuICBDVjogJ0NhYm8gVmVyZGUnLFxuICBLSDogJ0NhbWJvZGlhJyxcbiAgQ006ICdDYW1lcm9vbicsXG4gIENBOiAnQ2FuYWRhJyxcbiAgS1k6ICdDYXltYW4gSXNsYW5kcyAodGhlKScsXG4gIENGOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljICh0aGUpJyxcbiAgVEQ6ICdDaGFkJyxcbiAgQ0w6ICdDaGlsZScsXG4gIENOOiAnQ2hpbmEnLFxuICBDWDogJ0NocmlzdG1hcyBJc2xhbmQnLFxuICBDQzogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzICh0aGUpJyxcbiAgQ086ICdDb2xvbWJpYScsXG4gIEtNOiAnQ29tb3JvcyAodGhlKScsXG4gIENEOiAnQ29uZ28gKHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSknLFxuICBDRzogJ0NvbmdvICh0aGUpJyxcbiAgQ0s6ICdDb29rIElzbGFuZHMgKHRoZSknLFxuICBDUjogJ0Nvc3RhIFJpY2EnLFxuICBIUjogJ0Nyb2F0aWEnLFxuICBDVTogJ0N1YmEnLFxuICBDVzogJ0N1cmHDp2FvJyxcbiAgQ1k6ICdDeXBydXMnLFxuICBDWjogJ0N6ZWNoaWEnLFxuICBDSTogXCJDw7R0ZSBkJ0l2b2lyZVwiLFxuICBESzogJ0Rlbm1hcmsnLFxuICBESjogJ0RqaWJvdXRpJyxcbiAgRE06ICdEb21pbmljYScsXG4gIERPOiAnRG9taW5pY2FuIFJlcHVibGljICh0aGUpJyxcbiAgRUM6ICdFY3VhZG9yJyxcbiAgRUc6ICdFZ3lwdCcsXG4gIFNWOiAnRWwgU2FsdmFkb3InLFxuICBHUTogJ0VxdWF0b3JpYWwgR3VpbmVhJyxcbiAgRVI6ICdFcml0cmVhJyxcbiAgRUU6ICdFc3RvbmlhJyxcbiAgU1o6ICdFc3dhdGluaScsXG4gIEVUOiAnRXRoaW9waWEnLFxuICBGSzogJ0ZhbGtsYW5kIElzbGFuZHMgKHRoZSkgW01hbHZpbmFzXScsXG4gIEZPOiAnRmFyb2UgSXNsYW5kcyAodGhlKScsXG4gIEZKOiAnRmlqaScsXG4gIEZJOiAnRmlubGFuZCcsXG4gIEZSOiAnRnJhbmNlJyxcbiAgR0Y6ICdGcmVuY2ggR3VpYW5hJyxcbiAgUEY6ICdGcmVuY2ggUG9seW5lc2lhJyxcbiAgVEY6ICdGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXMgKHRoZSknLFxuICBHQTogJ0dhYm9uJyxcbiAgR006ICdHYW1iaWEgKHRoZSknLFxuICBHRTogJ0dlb3JnaWEnLFxuICBERTogJ0dlcm1hbnknLFxuICBHSDogJ0doYW5hJyxcbiAgR0k6ICdHaWJyYWx0YXInLFxuICBHUjogJ0dyZWVjZScsXG4gIEdMOiAnR3JlZW5sYW5kJyxcbiAgR0Q6ICdHcmVuYWRhJyxcbiAgR1A6ICdHdWFkZWxvdXBlJyxcbiAgR1U6ICdHdWFtJyxcbiAgR1Q6ICdHdWF0ZW1hbGEnLFxuICBHRzogJ0d1ZXJuc2V5JyxcbiAgR046ICdHdWluZWEnLFxuICBHVzogJ0d1aW5lYS1CaXNzYXUnLFxuICBHWTogJ0d1eWFuYScsXG4gIEhUOiAnSGFpdGknLFxuICBITTogJ0hlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kcycsXG4gIFZBOiAnSG9seSBTZWUgKHRoZSknLFxuICBITjogJ0hvbmR1cmFzJyxcbiAgSEs6ICdIb25nIEtvbmcnLFxuICBIVTogJ0h1bmdhcnknLFxuICBJUzogJ0ljZWxhbmQnLFxuICBJTjogJ0luZGlhJyxcbiAgSUQ6ICdJbmRvbmVzaWEnLFxuICBJUjogJ0lyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpJyxcbiAgSVE6ICdJcmFxJyxcbiAgSUU6ICdJcmVsYW5kJyxcbiAgSU06ICdJc2xlIG9mIE1hbicsXG4gIElMOiAnSXNyYWVsJyxcbiAgSVQ6ICdJdGFseScsXG4gIEpNOiAnSmFtYWljYScsXG4gIEpQOiAnSmFwYW4nLFxuICBKRTogJ0plcnNleScsXG4gIEpPOiAnSm9yZGFuJyxcbiAgS1o6ICdLYXpha2hzdGFuJyxcbiAgS0U6ICdLZW55YScsXG4gIEtJOiAnS2lyaWJhdGknLFxuICBLUDogXCJLb3JlYSAodGhlIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpXCIsXG4gIEtSOiAnS29yZWEgKHRoZSBSZXB1YmxpYyBvZiknLFxuICBLVzogJ0t1d2FpdCcsXG4gIEtHOiAnS3lyZ3l6c3RhbicsXG4gIExBOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljICh0aGUpXCIsXG4gIExWOiAnTGF0dmlhJyxcbiAgTEI6ICdMZWJhbm9uJyxcbiAgTFM6ICdMZXNvdGhvJyxcbiAgTFI6ICdMaWJlcmlhJyxcbiAgTFk6ICdMaWJ5YScsXG4gIExJOiAnTGllY2h0ZW5zdGVpbicsXG4gIExUOiAnTGl0aHVhbmlhJyxcbiAgTFU6ICdMdXhlbWJvdXJnJyxcbiAgTU86ICdNYWNhbycsXG4gIE1HOiAnTWFkYWdhc2NhcicsXG4gIE1XOiAnTWFsYXdpJyxcbiAgTVk6ICdNYWxheXNpYScsXG4gIE1WOiAnTWFsZGl2ZXMnLFxuICBNTDogJ01hbGknLFxuICBNVDogJ01hbHRhJyxcbiAgTUg6ICdNYXJzaGFsbCBJc2xhbmRzICh0aGUpJyxcbiAgTVE6ICdNYXJ0aW5pcXVlJyxcbiAgTVI6ICdNYXVyaXRhbmlhJyxcbiAgTVU6ICdNYXVyaXRpdXMnLFxuICBZVDogJ01heW90dGUnLFxuICBNWDogJ01leGljbycsXG4gIEZNOiAnTWljcm9uZXNpYSAoRmVkZXJhdGVkIFN0YXRlcyBvZiknLFxuICBNRDogJ01vbGRvdmEgKHRoZSBSZXB1YmxpYyBvZiknLFxuICBNQzogJ01vbmFjbycsXG4gIE1OOiAnTW9uZ29saWEnLFxuICBNRTogJ01vbnRlbmVncm8nLFxuICBNUzogJ01vbnRzZXJyYXQnLFxuICBNQTogJ01vcm9jY28nLFxuICBNWjogJ01vemFtYmlxdWUnLFxuICBNTTogJ015YW5tYXInLFxuICBOQTogJ05hbWliaWEnLFxuICBOUjogJ05hdXJ1JyxcbiAgTlA6ICdOZXBhbCcsXG4gIE5MOiAnTmV0aGVybGFuZHMgKHRoZSknLFxuICBOQzogJ05ldyBDYWxlZG9uaWEnLFxuICBOWjogJ05ldyBaZWFsYW5kJyxcbiAgTkk6ICdOaWNhcmFndWEnLFxuICBORTogJ05pZ2VyICh0aGUpJyxcbiAgTkc6ICdOaWdlcmlhJyxcbiAgTlU6ICdOaXVlJyxcbiAgTkY6ICdOb3Jmb2xrIElzbGFuZCcsXG4gIE1QOiAnTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzICh0aGUpJyxcbiAgTk86ICdOb3J3YXknLFxuICBPTTogJ09tYW4nLFxuICBQSzogJ1Bha2lzdGFuJyxcbiAgUFc6ICdQYWxhdScsXG4gIFBTOiAnUGFsZXN0aW5lLCBTdGF0ZSBvZicsXG4gIFBBOiAnUGFuYW1hJyxcbiAgUEc6ICdQYXB1YSBOZXcgR3VpbmVhJyxcbiAgUFk6ICdQYXJhZ3VheScsXG4gIFBFOiAnUGVydScsXG4gIFBIOiAnUGhpbGlwcGluZXMgKHRoZSknLFxuICBQTjogJ1BpdGNhaXJuJyxcbiAgUEw6ICdQb2xhbmQnLFxuICBQVDogJ1BvcnR1Z2FsJyxcbiAgUFI6ICdQdWVydG8gUmljbycsXG4gIFFBOiAnUWF0YXInLFxuICBNSzogJ1JlcHVibGljIG9mIE5vcnRoIE1hY2Vkb25pYScsXG4gIFJPOiAnUm9tYW5pYScsXG4gIFJVOiAnUnVzc2lhbiBGZWRlcmF0aW9uICh0aGUpJyxcbiAgUlc6ICdSd2FuZGEnLFxuICBSRTogJ1LDqXVuaW9uJyxcbiAgQkw6ICdTYWludCBCYXJ0aMOpbGVteScsXG4gIFNIOiAnU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGEnLFxuICBLTjogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXG4gIExDOiAnU2FpbnQgTHVjaWEnLFxuICBNRjogJ1NhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpJyxcbiAgUE06ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJyxcbiAgVkM6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXG4gIFdTOiAnU2Ftb2EnLFxuICBTTTogJ1NhbiBNYXJpbm8nLFxuICBTVDogJ1NhbyBUb21lIGFuZCBQcmluY2lwZScsXG4gIFNBOiAnU2F1ZGkgQXJhYmlhJyxcbiAgU046ICdTZW5lZ2FsJyxcbiAgUlM6ICdTZXJiaWEnLFxuICBTQzogJ1NleWNoZWxsZXMnLFxuICBTTDogJ1NpZXJyYSBMZW9uZScsXG4gIFNHOiAnU2luZ2Fwb3JlJyxcbiAgU1g6ICdTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpJyxcbiAgU0s6ICdTbG92YWtpYScsXG4gIFNJOiAnU2xvdmVuaWEnLFxuICBTQjogJ1NvbG9tb24gSXNsYW5kcycsXG4gIFNPOiAnU29tYWxpYScsXG4gIFpBOiAnU291dGggQWZyaWNhJyxcbiAgR1M6ICdTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXG4gIFNTOiAnU291dGggU3VkYW4nLFxuICBFUzogJ1NwYWluJyxcbiAgTEs6ICdTcmkgTGFua2EnLFxuICBTRDogJ1N1ZGFuICh0aGUpJyxcbiAgU1I6ICdTdXJpbmFtZScsXG4gIFNKOiAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbicsXG4gIFNFOiAnU3dlZGVuJyxcbiAgQ0g6ICdTd2l0emVybGFuZCcsXG4gIFNZOiAnU3lyaWFuIEFyYWIgUmVwdWJsaWMnLFxuICBUVzogJ1RhaXdhbicsXG4gIFRKOiAnVGFqaWtpc3RhbicsXG4gIFRaOiAnVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZicsXG4gIFRIOiAnVGhhaWxhbmQnLFxuICBUTDogJ1RpbW9yLUxlc3RlJyxcbiAgVEc6ICdUb2dvJyxcbiAgVEs6ICdUb2tlbGF1JyxcbiAgVE86ICdUb25nYScsXG4gIFRUOiAnVHJpbmlkYWQgYW5kIFRvYmFnbycsXG4gIFROOiAnVHVuaXNpYScsXG4gIFRSOiAnVHVya2V5JyxcbiAgVE06ICdUdXJrbWVuaXN0YW4nLFxuICBUQzogJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcyAodGhlKScsXG4gIFRWOiAnVHV2YWx1JyxcbiAgVUc6ICdVZ2FuZGEnLFxuICBVQTogJ1VrcmFpbmUnLFxuICBBRTogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzICh0aGUpJyxcbiAgR0I6ICdVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kICh0aGUpJyxcbiAgVU06ICdVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMgKHRoZSknLFxuICBVUzogJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYSAodGhlKScsXG4gIFVZOiAnVXJ1Z3VheScsXG4gIFVaOiAnVXpiZWtpc3RhbicsXG4gIFZVOiAnVmFudWF0dScsXG4gIFZFOiAnVmVuZXp1ZWxhIChCb2xpdmFyaWFuIFJlcHVibGljIG9mKScsXG4gIFZOOiAnVmlldCBOYW0nLFxuICBWRzogJ1ZpcmdpbiBJc2xhbmRzIChCcml0aXNoKScsXG4gIFZJOiAnVmlyZ2luIElzbGFuZHMgKFUuUy4pJyxcbiAgV0Y6ICdXYWxsaXMgYW5kIEZ1dHVuYScsXG4gIEVIOiAnV2VzdGVybiBTYWhhcmEnLFxuICBZRTogJ1llbWVuJyxcbiAgWk06ICdaYW1iaWEnLFxuICBaVzogJ1ppbWJhYndlJyxcbiAgQVg6ICfDhWxhbmQgSXNsYW5kcycsXG59O1xuXG5jb25zdCB2YWxpZGF0ZUVtYWlsID0gKCkgPT4ge1xuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG4gIGlmIChlbWFpbElucHV0LnZhbGlkaXR5LnR5cGVNaXNtYXRjaCB8fCBlbWFpbElucHV0LnZhbHVlID09PSAnJykge1xuICAgIGVtYWlsSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0VudGVyIGEgdmFsaWQgZW1haWwnKTtcbiAgICBlbWFpbElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gIH0gZWxzZSB7XG4gICAgZW1haWxJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUVtYWlsSW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIGVtYWlsIGNvbnRhaW5lclxuICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xuICAvLyBlbWFpbCBsYWJlbFxuICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZW1haWxMYWJlbC5mb3IgPSAnZW1haWwnO1xuICBlbWFpbExhYmVsLmlubmVyVGV4dCA9ICdFbWFpbCc7XG4gIC8vIGVtYWlsIGlucHV0XG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBlbWFpbElucHV0LmlkID0gJ2VtYWlsJztcbiAgZW1haWxJbnB1dC5uYW1lID0gJ2VtYWlsJztcbiAgZW1haWxJbnB1dC50eXBlID0gJ2VtYWlsJztcbiAgZW1haWxJbnB1dC5wbGFjZWhvbGRlciA9ICdqYW5lQGV4YW1wbGUuY29tJztcbiAgLy8gdmFsaWRpdHkgY2hlY2tcbiAgZW1haWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHZhbGlkYXRlRW1haWwoKSk7XG4gIC8vIGFwcGVuZCBlbWFpbFxuICBmb3JtUm93LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICBmb3JtUm93LmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XG59O1xuXG5jb25zdCB2YWxpZGF0ZUNvdW50cnlJbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgY291bnRyeVNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5Jyk7XG4gIGlmIChjb3VudHJ5U2VsZWN0aW9uLnZhbHVlID09PSAnJykge1xuICAgIGNvdW50cnlTZWxlY3Rpb24uc2V0Q3VzdG9tVmFsaWRpdHkoJ1doaWNoIGNvdW50cnkgYXJlIHlvdSBpbj8nKTtcbiAgICBjb3VudHJ5U2VsZWN0aW9uLnJlcG9ydFZhbGlkaXR5KCk7XG4gIH0gZWxzZSB7XG4gICAgY291bnRyeVNlbGVjdGlvbi5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUNvdW50cnlJbnB1dCA9IChjb250YWluZXIpID0+IHtcbiAgLy8gY291bnRyeSBjb250YWluZXJcbiAgY29uc3QgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtUm93LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcbiAgLy8gY291bnRyeSBsYWJlbFxuICBjb25zdCBjb3VudHJ5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb3VudHJ5TGFiZWwuZm9yID0gJ2NvdW50cnknO1xuICBjb3VudHJ5TGFiZWwuaW5uZXJUZXh0ID0gJ0NvdW50cnknO1xuICAvLyBjb3VudHJ5IHNlbGVjdGlvblxuICBjb25zdCBjb3VudHJ5U2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvdW50cnlTZWxlY3Rpb24uaWQgPSAnY291bnRyeSc7XG4gIGNvdW50cnlTZWxlY3Rpb24ubmFtZSA9ICdjb3VudHJ5JztcbiAgLy8gY291bnRyeSBvcHRpb25zXG4gIGNvbnN0IGJsYW5rT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGJsYW5rT3B0aW9uLnZhbHVlID0gJyc7XG4gIGJsYW5rT3B0aW9uLmlubmVyVGV4dCA9ICcnO1xuICBjb3VudHJ5U2VsZWN0aW9uLmFwcGVuZENoaWxkKGJsYW5rT3B0aW9uKTtcbiAgT2JqZWN0LmtleXMoY291bnRyeUxpc3RBbHBoYTIpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGtleSwgY291bnRyeUxpc3RBbHBoYTJba2V5XSk7XG4gICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbmV3T3B0aW9uLnZhbHVlID0ga2V5O1xuICAgIG5ld09wdGlvbi5pbm5lclRleHQgPSBjb3VudHJ5TGlzdEFscGhhMltrZXldO1xuICAgIGNvdW50cnlTZWxlY3Rpb24uYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcbiAgfSk7XG4gIC8vIHZhbGlkaXR5IGNoZWNrXG4gIGNvdW50cnlTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB2YWxpZGF0ZUNvdW50cnlJbnB1dCgpKTtcbiAgLy8gYXBwZW5kIGNvdW50cnkgaW5wdXRcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChjb3VudHJ5TGFiZWwpO1xuICBmb3JtUm93LmFwcGVuZENoaWxkKGNvdW50cnlTZWxlY3Rpb24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XG59O1xuXG5jb25zdCB2YWxpZGF0ZVppcENvZGUgPSAoKSA9PiB7XG4gIGNvbnN0IHppcENvZGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6aXBjb2RlJyk7XG4gIGlmICgvXlxcZHs1fSgtXFxkezR9KT8kLy50ZXN0KHppcENvZGVJbnB1dC52YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgemlwQ29kZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdFbnRlciBhIHZhbGlkIHppcGNvZGUnKTtcbiAgICB6aXBDb2RlSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgfSBlbHNlIHtcbiAgICB6aXBDb2RlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVaaXBDb2RlSW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIHppcCBjb2RlIGNvbnRhaW5lclxuICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xuICAvLyB6aXAgY29kZSBsYWJlbFxuICBjb25zdCB6aXBDb2RlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB6aXBDb2RlTGFiZWwuZm9yID0gJ3ppcGNvZGUnO1xuICB6aXBDb2RlTGFiZWwuaW5uZXJUZXh0ID0gJ1ppcCBjb2RlJztcbiAgLy8gemlwIGNvZGUgaW5wdXRcbiAgY29uc3QgemlwQ29kZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgemlwQ29kZUlucHV0LmlkID0gJ3ppcGNvZGUnO1xuICB6aXBDb2RlSW5wdXQubmFtZSA9ICd6aXBjb2RlJztcbiAgLy8gdmFsaWRpdHkgY2hlY2tcbiAgemlwQ29kZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdmFsaWRhdGVaaXBDb2RlKCkpO1xuICAvLyBhcHBlbmQgemlwIGNvZGUgaW5wdXRcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZCh6aXBDb2RlTGFiZWwpO1xuICBmb3JtUm93LmFwcGVuZENoaWxkKHppcENvZGVJbnB1dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlUGFzc3dvcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcblxuICAvLyBWYWxpZGF0ZSBsb3dlcmNhc2UgbGV0dGVyc1xuICBpZiAoL1thLXpdL2cudGVzdChwYXNzd29yZElucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICBwYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGNvbnRhaW4gbG93ZXJjYXNlIGxldHRlcicpO1xuICAgIHBhc3N3b3JkSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAvLyBWYWxpZGF0ZSBjYXBpdGFsIGxldHRlcnNcbiAgfSBlbHNlIGlmICgvW0EtWl0vZy50ZXN0KHBhc3N3b3JkSW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xuICAgIHBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgY29udGFpbiB1cHBlcmNhc2UgbGV0dGVyJyk7XG4gICAgcGFzc3dvcmRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIC8vIFZhbGlkYXRlIG51bWJlcnNcbiAgfSBlbHNlIGlmICgvWzAtOV0vZy50ZXN0KHBhc3N3b3JkSW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xuICAgIHBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgY29udGFpbiBhIG51bWJlcicpO1xuICAgIHBhc3N3b3JkSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAvLyBWYWxpZGF0ZSBsZW5ndGhcbiAgfSBlbHNlIGlmIChwYXNzd29yZElucHV0LnZhbHVlLmxlbmd0aCA8IDgpIHtcbiAgICBwYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycycpO1xuICAgIHBhc3N3b3JkSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgfSBlbHNlIHtcbiAgICBwYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlUGFzc3dvcmRJbnB1dCA9IChjb250YWluZXIpID0+IHtcbiAgLy8gcGFzc3dvcmQgY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gIC8vIHBhc3N3b3JkIGxhYmVsXG4gIGNvbnN0IHBhc3N3b3JkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwYXNzd29yZExhYmVsLmZvciA9ICdwYXNzd29yZCc7XG4gIHBhc3N3b3JkTGFiZWwuaW5uZXJUZXh0ID0gJ1Bhc3N3b3JkJztcbiAgLy8gcGFzc3dvcmQgaW5wdXRcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHBhc3N3b3JkSW5wdXQuaWQgPSAncGFzc3dvcmQnO1xuICBwYXNzd29yZElucHV0Lm5hbWUgPSAncGFzc3dvcmQnO1xuICBwYXNzd29yZElucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICAvLyB2YWxpZGl0eSBjaGVja1xuICBwYXNzd29yZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdmFsaWRhdGVQYXNzd29yZCgpKTtcbiAgLy8gYXBwZW5kIHBhc3N3b3JkIGlucHV0XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQocGFzc3dvcmRMYWJlbCk7XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQocGFzc3dvcmRJbnB1dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IGNvbmZpcm1QYXNzd29yZCA9ICgpID0+IHtcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmRDb25maXJtYXRpb24nKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpLnZhbHVlO1xuICBpZiAoY29uZmlybVBhc3N3b3JkSW5wdXQudmFsdWUgIT09IHBhc3N3b3JkSW5wdXQpIHtcbiAgICBjb25maXJtUGFzc3dvcmRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnRG9lcyBub3QgbWF0Y2gnKTtcbiAgICBjb25maXJtUGFzc3dvcmRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpcm1QYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlQ29uZmlybVBhc3N3b3JkSW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIGNvbmZpcm0gcGFzc3dvcmQgY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gIC8vIGNvbmZpcm0gcGFzc3dvcmQgbGFiZWxcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25maXJtUGFzc3dvcmRMYWJlbC5mb3IgPSAncGFzc3dvcmRDb25maXJtYXRpb24nO1xuICBjb25maXJtUGFzc3dvcmRMYWJlbC5pbm5lclRleHQgPSAnQ29uZmlybSBwYXNzd29yZCc7XG4gIC8vIGNvbm5maXJtIHBhc3N3b3JkIGlucHV0XG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uZmlybVBhc3N3b3JkSW5wdXQudHlwZSA9ICdwYXNzd29yZCc7XG4gIGNvbmZpcm1QYXNzd29yZElucHV0LmlkID0gJ3Bhc3N3b3JkQ29uZmlybWF0aW9uJztcbiAgY29uZmlybVBhc3N3b3JkSW5wdXQubmFtZSA9ICdwYXNzd29yZENvbmZpcm1hdGlvbic7XG4gIC8vIHZhbGlkaXR5IGNoZWNrXG4gIGNvbmZpcm1QYXNzd29yZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gY29uZmlybVBhc3N3b3JkKCkpO1xuICAvLyBhcHBlbmQgY29uZmlybSBwYXNzd29yZCBpbnB1dFxuICBmb3JtUm93LmFwcGVuZENoaWxkKGNvbmZpcm1QYXNzd29yZExhYmVsKTtcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChjb25maXJtUGFzc3dvcmRJbnB1dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IHN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xuICAvLyBwcmV2ZW50IGFjdHVhbCBmb3JtIHN1Ym1pc3Npb25cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyB2YWxpZGF0ZSBmb3JtIGZpZWxkc1xuICBjb25maXJtUGFzc3dvcmQoKTtcbiAgdmFsaWRhdGVQYXNzd29yZCgpO1xuICB2YWxpZGF0ZVppcENvZGUoKTtcbiAgdmFsaWRhdGVDb3VudHJ5SW5wdXQoKTtcbiAgdmFsaWRhdGVFbWFpbCgpO1xufTtcblxuY29uc3QgY3JlYXRlU3VibWl0QnV0dG9uID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBzdWJtaXQgYnV0dG9uIGNvbnRhaW5lclxuICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xuICAvLyBzdWJtaXQgYnV0dG9uXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0QnRuJyk7XG4gIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgLy8gZXZlbnQgbGlzdGVuZXJcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHN1Ym1pdEZvcm0oZSkpO1xuICAvLyBhcHBlbmQgc3VibWl0IGJ1dHRvblxuICBmb3JtUm93LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlRm9ybSA9IChjb250YWluZXIpID0+IHtcbiAgY3JlYXRlRW1haWxJbnB1dChjb250YWluZXIpO1xuICBjcmVhdGVDb3VudHJ5SW5wdXQoY29udGFpbmVyKTtcbiAgY3JlYXRlWmlwQ29kZUlucHV0KGNvbnRhaW5lcik7XG4gIGNyZWF0ZVBhc3N3b3JkSW5wdXQoY29udGFpbmVyKTtcbiAgY3JlYXRlQ29uZmlybVBhc3N3b3JkSW5wdXQoY29udGFpbmVyKTtcbiAgY3JlYXRlU3VibWl0QnV0dG9uKGNvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUZvcm07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IGdpdGh1Ykljb24gZnJvbSAnLi9hc3NldHMvR2l0SHViLWxpZ2h0LTMycHgucG5nJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzEgZnJvbSAnLi9hc3NldHMvSU1HXzEyMDEuanBnJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzIgZnJvbSAnLi9hc3NldHMvSU1HXzEyMTIuanBnJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzMgZnJvbSAnLi9hc3NldHMvSU1HXzg3MTYuanBnJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzQgZnJvbSAnLi9hc3NldHMvSU1HXzg4NTUuanBnJztcbmltcG9ydCBnZW5lcmF0ZUZvcm0gZnJvbSAnLi9mb3JtVmFsaWRhdGlvbic7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbi8vIGhlbHBlciBmdW5jdGlvbnNcbmNvbnN0IHByb2Nlc3NNZW51U2VsZWN0aW9uID0gKGUpID0+IHtcbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbk1lbnUnKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Q29udGFpbmVyJyk7XG5cbiAgLy8gZGVzZWxlY3QgYW55IG1lbnUgaXRlbXNcbiAgY29uc3QgbWVudUNvdW50ID0gbWFpbk1lbnUuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUNvdW50OyBpKyspIHtcbiAgICBtYWluTWVudS5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICB9XG5cbiAgLy8gc2VsZWN0IG5ldyBtZW51IGl0ZW1cbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAvLyB0b2dnbGUgY29udGVudFxuICBjb25zdCBjb250ZW50Q291bnQgPSBjb250ZW50Q29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRDb3VudDsgaSsrKSB7XG4gICAgLy8gaGlkZSBjdXJyZW50IGNvbnRlbnRcbiAgICBpZiAoY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpID09PSBmYWxzZSkge1xuICAgICAgY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgLy8gZGlzcGxheSBzZWxlY3RlZCBjb250ZW50XG4gICAgY29uc29sZS5sb2coY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5pZCk7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpO1xuICAgIGlmIChjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuW2ldLmlkID09PSBlLnRhcmdldC5pZCkge1xuICAgICAgY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGl0ZW1OYW1lLCBpdGVtQ29udGFpbmVyLCBpdGVtSWQsIGl0ZW1DbGFzcykgPT4ge1xuICBjb25zdCBuZXdNZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIG5ld01lbnVJdGVtLmlkID0gYCR7aXRlbUlkfWA7XG5cbiAgLy8gYWRkIGNsYXNzIGlmIG9uZSBpcyBnaXZlblxuICBpZiAoaXRlbUNsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICBuZXdNZW51SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYCR7aXRlbUNsYXNzfWApO1xuICB9XG5cbiAgbmV3TWVudUl0ZW0uaW5uZXJUZXh0ID0gYCR7aXRlbU5hbWV9YDtcbiAgbmV3TWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcblxuICBuZXdNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBwcm9jZXNzTWVudVNlbGVjdGlvbihlKSk7XG5cbiAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdNZW51SXRlbSk7XG59O1xuXG5jb25zdCBhZGRJbWFnZVRvU2Nyb2xsZXIgPSAoaW1hZ2UsIGksIHNjcm9sbGVyLCBjYXB0aW9uKSA9PiB7XG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlQ29udGFpbmVyJywgJ2ZhZGUnKTtcblxuICAvLyBkaXNwbGF5IGltYWdlIG51bWJlclxuICBjb25zdCBpbWFnZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZU51bWJlci5jbGFzc0xpc3QuYWRkKCdpbWFnZU51bWJlcicpO1xuICBpbWFnZU51bWJlci5pbm5lclRleHQgPSBgJHtpfS80YDtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VOdW1iZXIpO1xuXG4gIC8vIGRpc3BsYXkgaW1hZ2VcbiAgY29uc3QgbmV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZXJJbWFnZScpO1xuICBuZXdJbWFnZS5zcmMgPSBpbWFnZTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuXG4gIC8vIGRpc3BsYXkgY2FwdGlvblxuICBpZiAoY2FwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgaW1hZ2VDYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VDYXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2ltYWdlQ2FwdGlvbicpO1xuICAgIGltYWdlQ2FwdGlvbi5pbm5lclRleHQgPSBgJHtjYXB0aW9ufWA7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VDYXB0aW9uKTtcbiAgfVxuXG4gIHNjcm9sbGVyLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcbn07XG5cbmxldCBzbGlkZUluZGV4ID0gMDtcblxuY29uc3Qgc2VsZWN0SW1hZ2UgPSAobikgPT4ge1xuICBjb25zdCBzY3JvbGxlckltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlQ29udGFpbmVyJyk7XG4gIGNvbnN0IHNjcm9sbGVyRG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbGVyRG90Jyk7XG5cbiAgLy8gbG9vcCB0aHJvdWdoIGltYWdlc1xuICBpZiAobiA+IHNjcm9sbGVySW1hZ2VzLmxlbmd0aCkgeyBzbGlkZUluZGV4ID0gMTsgfVxuICBpZiAobiA8IDEpIHsgc2xpZGVJbmRleCA9IHNjcm9sbGVySW1hZ2VzLmxlbmd0aDsgfVxuXG4gIC8vIHJlc2V0IGltYWdlIHNlbGVjdGlvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbGVySW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2Nyb2xsZXJJbWFnZXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbGVyRG90cy5sZW5ndGg7IGkrKykge1xuICAgIHNjcm9sbGVyRG90c1tpXS5jbGFzc05hbWUgPSBzY3JvbGxlckRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoJyBzZWxlY3RlZEltYWdlJywgJycpO1xuICB9XG5cbiAgLy8gc2VsZWN0IG5ldyBpbWFnZVxuICBzY3JvbGxlckltYWdlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHNjcm9sbGVyRG90c1tzbGlkZUluZGV4IC0gMV0uY2xhc3NOYW1lICs9ICcgc2VsZWN0ZWRJbWFnZSc7XG59O1xuXG5jb25zdCBsb29wSW1hZ2VTY3JvbGxlciA9ICgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsZXJJbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWFnZUNvbnRhaW5lcicpO1xuICBjb25zdCBzY3JvbGxlckRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGxlckRvdCcpO1xuXG4gIC8vIHJlc2V0IGltYWdlIHNlbGVjdGlvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbGVySW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2Nyb2xsZXJJbWFnZXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbGVyRG90cy5sZW5ndGg7IGkrKykge1xuICAgIHNjcm9sbGVyRG90c1tpXS5jbGFzc05hbWUgPSBzY3JvbGxlckRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoJyBzZWxlY3RlZEltYWdlJywgJycpO1xuICB9XG5cbiAgLy8gc2VsZWN0IG5ldyBpbWFnZVxuICBzbGlkZUluZGV4Kys7XG4gIGlmIChzbGlkZUluZGV4ID4gc2Nyb2xsZXJJbWFnZXMubGVuZ3RoKSB7IHNsaWRlSW5kZXggPSAxOyB9XG4gIHNjcm9sbGVySW1hZ2VzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgc2Nyb2xsZXJEb3RzW3NsaWRlSW5kZXggLSAxXS5jbGFzc05hbWUgKz0gJyBzZWxlY3RlZEltYWdlJztcbiAgc2V0VGltZW91dChsb29wSW1hZ2VTY3JvbGxlciwgNTAwMCk7IC8vIENoYW5nZSBpbWFnZSBldmVyeSA1IHNlY29uZHNcbn07XG5cbi8vIHBhZ2UgaW5pdGlhbGl6YXRpb24gZnVuY3Rpb25zXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGVyVGl0bGUuaW5uZXJUZXh0ID0gJ0R5bmFtaWMgVUkgSW50ZXJhY3Rpb25zJztcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVNYWluTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbk1lbnUnKTtcblxuICBjcmVhdGVNZW51SXRlbSgnRHJvcGRvd24gTWVudScsIG1haW5NZW51LCAnZHJvcGRvd25NZW51JywgJ3NlbGVjdGVkJyk7XG4gIGNyZWF0ZU1lbnVJdGVtKCdNb2JpbGUgTWVudScsIG1haW5NZW51LCAnbW9iaWxlTWVudScpO1xuICBjcmVhdGVNZW51SXRlbSgnSW1hZ2UgU2Nyb2xsZXInLCBtYWluTWVudSwgJ2ltYWdlU2Nyb2xsZXInKTtcbiAgY3JlYXRlTWVudUl0ZW0oJ0Zvcm0gVmFsaWRhdGlvbicsIG1haW5NZW51LCAndmFsaWRhdGlvbkZvcm0nKTtcbiAgY3JlYXRlTWVudUl0ZW0oJ0FQSSBQcmFjdGljZScsIG1haW5NZW51LCAnQVBJUHJhY3RpY2UnKTtcblxuICBib2R5LmFwcGVuZENoaWxkKG1haW5NZW51KTtcbn07XG5cbmNvbnN0IGNyZWF0ZURyb3Bkb3duTWVudSA9IChjb250YWluZXIpID0+IHtcbiAgY29uc3QgZHJvcGRvd25NZW51Q29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcm9wZG93bk1lbnVDb250YWludGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgZHJvcGRvd25NZW51Q29udGFpbnRlci5pZCA9ICdkcm9wZG93bk1lbnUnO1xuXG4gIC8vIGNyZWF0ZSBkcm9wZG93biBjb250YWluZXJcbiAgY29uc3QgZHJvcGRvd25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25Db250YWluZXInLCAnaGlkZGVuJyk7XG5cbiAgLy8gY3JlYXRlIGRyb3Bkb3duIG9wdGlvbnNcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25PcHRpb24nKTtcbiAgICBkcm9wZG93bk9wdGlvbi5pbm5lclRleHQgPSBgb3B0aW9uICR7aX1gO1xuICAgIGRyb3Bkb3duQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duT3B0aW9uKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZSBkcm9wZG93biBidXR0b25cbiAgY29uc3QgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyb3Bkb3duTWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bk1lbnUnKTtcbiAgZHJvcGRvd25NZW51LmlubmVyVGV4dCA9ICdkcm9wZG93bic7XG4gIGRyb3Bkb3duTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICBkcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgfSk7XG5cbiAgLy8gQXBwZW5kXG4gIGRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChkcm9wZG93bkNvbnRhaW5lcik7XG4gIGRyb3Bkb3duTWVudUNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25NZW51KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duTWVudUNvbnRhaW50ZXIpO1xuXG4gIC8vIGNsb3NlIGRyb3Bkb3duIGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XG4gIHdpbmRvdy5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wZG93bk1lbnUnKSkge1xuICAgICAgaWYgKGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgPT09IGZhbHNlKSB7XG4gICAgICAgIGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfVxuICAgICAgaWYgKGRyb3Bkb3duTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlTW9iaWxlTWVudSA9IChjb250YWluZXIpID0+IHtcbiAgLy8gY3JlYXRlIGNvbnRlbnQgY29udGFpbmVyXG4gIGNvbnN0IG1vYmlsZU1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vYmlsZU1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vYmlsZU1lbnVDb250ZW50JywgJ2NvbnRlbnQnLCAnaGlkZGVuJyk7XG4gIG1vYmlsZU1lbnVDb250ZW50LmlkID0gJ21vYmlsZU1lbnUnO1xuXG4gIC8vIGNyZWF0ZSBtZW51IHRpdGxlXG4gIGNvbnN0IG1vYmlsZU1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIG1vYmlsZU1lbnVUaXRsZS5pbm5lclRleHQgPSAnSG9yaXpvbnRhbCBzY3JvbGxpbmcgbmF2JztcblxuICAvLyBjcmVhdGUgbW9iaWxlIG1lbnUgY29udGFpbmVyXG4gIGNvbnN0IG1vYmlsZU1lbnVUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIGNvbnN0IG1vYmlsZU1lbnVDb250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgbW9iaWxlTWVudUNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnbW9iaWxlTWVudUNvbnRhaW5lcicpO1xuICAvLyBtYWtlcyBzY3JvbGx3aGVlbCBmdW5jdGlvbmFsIHdpdGggaG9yaXpvbnRhbCBzY3JvbGxpbmdcbiAgbW9iaWxlTWVudUNvbnRhaW50ZXIuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBtb2JpbGVNZW51Q29udGFpbnRlci5zY3JvbGxMZWZ0ICs9IGUuZGVsdGFZO1xuICB9KTtcblxuICAvLyBjcmVhdGUgbW9iaWxlIG1lbnUgb3B0aW9uc1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAyMDsgaSsrKSB7XG4gICAgY29uc3QgbW9iaWxlTWVudU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgbW9iaWxlTWVudU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdtb2JpbGVNZW51T3B0aW9uJyk7XG4gICAgbW9iaWxlTWVudU9wdGlvbi5pbm5lclRleHQgPSBgbW9iaWxlIG9wdGlvbiAke2l9YDtcbiAgICBtb2JpbGVNZW51T3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gZGVzZWxlY3QgYWxsIG1lbnUgaXRlbXNcbiAgICAgIGNvbnN0IG1vYmlsZU1lbnVDb3VudCA9IG1vYmlsZU1lbnVDb250YWludGVyLmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2JpbGVNZW51Q291bnQ7IGkrKykge1xuICAgICAgICBpZiAobW9iaWxlTWVudUNvbnRhaW50ZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgbW9iaWxlTWVudUNvbnRhaW50ZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gbWFrZSBuZXcgc2VsZWN0aW9uXG4gICAgICBtb2JpbGVNZW51T3B0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG4gICAgbW9iaWxlTWVudUNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQobW9iaWxlTWVudU9wdGlvbik7XG4gIH1cblxuICAvLyBBcHBlbmRcbiAgbW9iaWxlTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobW9iaWxlTWVudVRpdGxlKTtcbiAgbW9iaWxlTWVudVRhYmxlLmFwcGVuZENoaWxkKG1vYmlsZU1lbnVDb250YWludGVyKTtcbiAgbW9iaWxlTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobW9iaWxlTWVudVRhYmxlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vYmlsZU1lbnVDb250ZW50KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUltYWdlU2Nyb2xsZXIgPSAoY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGltYWdlU2Nyb2xsZXJDb250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlU2Nyb2xsZXJDb250YWludGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnLCAnaGlkZGVuJyk7XG4gIGltYWdlU2Nyb2xsZXJDb250YWludGVyLmlkID0gJ2ltYWdlU2Nyb2xsZXInO1xuXG4gIGNvbnN0IGltYWdlU2Nyb2xsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VTY3JvbGxlci5jbGFzc0xpc3QuYWRkKCdpbWFnZVNjcm9sbGVyJyk7XG5cbiAgLy8gYWRkIGltYWdlc1xuICBhZGRJbWFnZVRvU2Nyb2xsZXIocGxhY2Vob2xkZXJJbWcxLCAxLCBpbWFnZVNjcm9sbGVyLCAnVmlldyBvZiBEaWFtb25kIEhlYWQgJiBIb25vbHVsdSwgT2FodScpO1xuICBhZGRJbWFnZVRvU2Nyb2xsZXIocGxhY2Vob2xkZXJJbWcyLCAyLCBpbWFnZVNjcm9sbGVyLCAnSnVyYXNzaWMgUGFyayBWYWxsZXksIEt1YWxvYSBSYW5jaCwgT2FodScpO1xuICBhZGRJbWFnZVRvU2Nyb2xsZXIocGxhY2Vob2xkZXJJbWczLCAzLCBpbWFnZVNjcm9sbGVyLCAnUmFpbmJvdyBvbiBPYWh1Jyk7XG4gIGFkZEltYWdlVG9TY3JvbGxlcihwbGFjZWhvbGRlckltZzQsIDQsIGltYWdlU2Nyb2xsZXIsICdUdXJ0bGUgb24gdGhlIGJlYWNoIG5lYXIgSGFsZWl3YSwgT2FodScpO1xuXG4gIC8vIGFkZCBwcmV2aW91cyBidXR0b25cbiAgY29uc3QgcHJldmlvdXNJbWFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgcHJldmlvdXNJbWFnZUJ0bi5jbGFzc0xpc3QuYWRkKCdwcmV2aW91c0ltYWdlQnRuJyk7XG4gIHByZXZpb3VzSW1hZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNlbGVjdEltYWdlKHNsaWRlSW5kZXggKz0gLTEpOyB9KTtcbiAgLy8gZGlzcGxheSBwcmV2aW91cyBhcnJvd1xuICBwcmV2aW91c0ltYWdlQnRuLmlubmVySFRNTCA9ICcmIzEwMDk0Oyc7XG5cbiAgLy8gYWRkIG5leHQgYnV0dG9uXG4gIGNvbnN0IG5leHRJbWFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbmV4dEltYWdlQnRuLmNsYXNzTGlzdC5hZGQoJ25leHRJbWFnZUJ0bicpO1xuICBuZXh0SW1hZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNlbGVjdEltYWdlKHNsaWRlSW5kZXggKz0gMSk7IH0pO1xuICAvLyBkaXNwbGF5IG5leHQgYXJyb3dcbiAgbmV4dEltYWdlQnRuLmlubmVySFRNTCA9ICcmIzEwMDk1Oyc7XG5cbiAgLy8gYWRkIGltYWdlIHNlbGVjdGlvbiBkb3RzXG4gIGNvbnN0IHNjcm9sbGVyRG90Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjcm9sbGVyRG90Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVyRG90Q29udGFpbmVyJyk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgIGNvbnN0IG5ld0RvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBuZXdEb3QuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZXJEb3QnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgbmV3RG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzZWxlY3RJbWFnZShzbGlkZUluZGV4ID0gaSk7IH0pO1xuICAgIHNjcm9sbGVyRG90Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0RvdCk7XG4gIH1cblxuICAvLyBhcHBlbmRcbiAgaW1hZ2VTY3JvbGxlci5hcHBlbmRDaGlsZChwcmV2aW91c0ltYWdlQnRuKTtcbiAgaW1hZ2VTY3JvbGxlci5hcHBlbmRDaGlsZChuZXh0SW1hZ2VCdG4pO1xuICBpbWFnZVNjcm9sbGVyQ29udGFpbnRlci5hcHBlbmRDaGlsZChpbWFnZVNjcm9sbGVyKTtcbiAgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoc2Nyb2xsZXJEb3RDb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlVmFsaWRhdGlvbkZvcm0gPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIGNyZWF0ZSBmb3JtIHZhbGlkYXRpb24gY29udGFpbmVyXG4gIGNvbnN0IHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgndmFsaWRhdGlvbkZvcm1Db250YWludGVyJywgJ2NvbnRlbnQnLCAnaGlkZGVuJyk7XG4gIHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlci5pZCA9ICd2YWxpZGF0aW9uRm9ybSc7XG5cbiAgLy8gY3JlYXRlIGZvcm0gaGVhZGVyXG4gIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUhlYWRlci5jbGFzc0xpc3QuYWRkKCdmb3JtSGVhZGVyJyk7XG5cbiAgLy8gZm9ybSB0aXRsZVxuICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBmb3JtVGl0bGUuaW5uZXJUZXh0ID0gJ0V4YW1wbGUgZm9ybSc7XG5cbiAgLy8gY3JlYXRlIGZvcm1cbiAgY29uc3QgdmFsaWRhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHZhbGlkYXRpb25Gb3JtLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb25Gb3JtJyk7XG4gIHZhbGlkYXRpb25Gb3JtLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuXG4gIGdlbmVyYXRlRm9ybSh2YWxpZGF0aW9uRm9ybSk7XG5cbiAgLy8gYXBwZW5kXG4gIGZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgdmFsaWRhdGlvbkZvcm1Db250YWludGVyLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuICB2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gIHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlci5hcHBlbmRDaGlsZCh2YWxpZGF0aW9uRm9ybSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlQVBJUHJhY3RpY2UgPSAoY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IEFQSVByYWN0aWNlQ29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBBUElQcmFjdGljZUNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcsICdoaWRkZW4nKTtcbiAgQVBJUHJhY3RpY2VDb250YWludGVyLmlkID0gJ0FQSVByYWN0aWNlJztcblxuICAvLyBjcmVhdGUgQVBJIGJ1dHRvblxuICBjb25zdCBBUElQcmFjdGljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBBUElQcmFjdGljZS5jbGFzc0xpc3QuYWRkKCdBUElQcmFjdGljZScpO1xuICBBUElQcmFjdGljZS5pbm5lclRleHQgPSAnZHJvcGRvd24nO1xuICBBUElQcmFjdGljZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBBUElQcmFjdGljZS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICB9KTtcblxuICAvLyBBcHBlbmRcbiAgQVBJUHJhY3RpY2VDb250YWludGVyLmFwcGVuZENoaWxkKEFQSVByYWN0aWNlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKEFQSVByYWN0aWNlQ29udGFpbnRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVDb250ZW50Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q29udGFpbnRlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50Q29udGFpbmVyJyk7XG5cbiAgY3JlYXRlRHJvcGRvd25NZW51KGNvbnRlbnRDb250YWludGVyKTtcbiAgY3JlYXRlTW9iaWxlTWVudShjb250ZW50Q29udGFpbnRlcik7XG4gIGNyZWF0ZUltYWdlU2Nyb2xsZXIoY29udGVudENvbnRhaW50ZXIpO1xuICBjcmVhdGVWYWxpZGF0aW9uRm9ybShjb250ZW50Q29udGFpbnRlcik7XG4gIGNyZWF0ZUFQSVByYWN0aWNlKGNvbnRlbnRDb250YWludGVyKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWludGVyKTtcbiAgbG9vcEltYWdlU2Nyb2xsZXIoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBqY2FtcGJlbGw1N2A7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Nyc7XG4gIGdpdGh1YkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG5cbiAgY29uc3QgbmV3R2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBuZXdHaXRodWJJY29uLnNyYyA9IGdpdGh1Ykljb247XG4gIG5ld0dpdGh1Ykljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdnaXRodWInKTtcblxuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKG5ld0dpdGh1Ykljb24pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjcmVhdGVNYWluTWVudSgpO1xuICBjcmVhdGVDb250ZW50Q29udGFpbmVyKCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogcmdiKDQ1LCA0NSwgNDUpO1xcbiAgICAtLWxpZ2h0LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIC0tYWN0aXZlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIC0tZXJyb3IgOiBkYXJrcmVkXFxufVxcblxcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XFxuXFxuaHRtbCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcblxcblxcblxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuXFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmhlYWRlcj5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBNZW51IHN0eWxpbmcgKi9cXG5cXG4ubWFpbk1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgICBwYWRkaW5nOiAwIDE1dnc7XFxufVxcblxcbi5tZW51SXRlbSB7XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgICBtYXJnaW46IDAuNnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLm1lbnVJdGVtOmhvdmVyLFxcbi5kcm9wZG93bk1lbnU6aG92ZXIsXFxuLmRyb3Bkb3duT3B0aW9uOmhvdmVyLCBcXG4ubW9iaWxlTWVudU9wdGlvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG4ubWVudUl0ZW06YWN0aXZlLFxcbi5kcm9wZG93bk1lbnU6YWN0aXZlLFxcbi5kcm9wZG93bk9wdGlvbjphY3RpdmUsXFxuLm1vYmlsZU1lbnVPcHRpb246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlKTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBDb250ZW50IHN0eWxpbmcgKi9cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjYWxjKGNlbnRlciAtIDMwJSlcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRHJvcGRvd24gbWVudSBzdHlsaW5nICovXFxuXFxuLmRyb3Bkb3duTWVudSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kcm9wZG93bkNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKDEwMCUgKyAycHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uZHJvcGRvd25PcHRpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogTW9iaWxlIG1lbnUgc3R5bGluZyAqL1xcblxcbi5tb2JpbGVNZW51Q29udGVudCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb2JpbGVNZW51Q29udGVudD5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tb2JpbGVNZW51Q29udGVudD50YWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2JpbGVNZW51Q29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIC8qIGVuYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcblxcbi8qIGhpZGUgc2Nyb2xsYmFyLCByZXRhaW4gZnVuY3Rpb24gKi9cXG4ubW9iaWxlTWVudUNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9iaWxlTWVudU9wdGlvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG5cXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBJbWFnZSBzY3JvbGxlciBzdHlsaW5nICovXFxuXFxuLnNjcm9sbGVySW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogc2xpZGVzaG93IGNvbnRhaW5lciAqL1xcbi5pbWFnZVNjcm9sbGVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiBoaWRlIGltYWdlcyBkZWZhdWx0ICovXFxuLmltYWdlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cXG4ucHJldmlvdXNJbWFnZUJ0biwgLm5leHRJbWFnZUJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IC0yMnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgICAvKiB1c2VyLXNlbGVjdDogbm9uZTsgKi9cXG59XFxuXFxuLyogcG9zaXRpb24gbmV4dCBidXR0b24gb24gdGhlIHJpZ2h0ICovXFxuLm5leHRJbWFnZUJ0biB7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXG59XFxuXFxuLyogYWRkIGhvdmVyIGVmZmVjdCAqL1xcbi5wcmV2aW91c0ltYWdlQnRuOmhvdmVyLCAubmV4dEltYWdlQnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpXFxufVxcblxcbi8qIGNhcHRpb24gdGV4dCAqL1xcbi5pbWFnZUNhcHRpb24ge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBpbWFnZSBudW1iZXIgKi9cXG4uaW1hZ2VOdW1iZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLyogc2Nyb2xsZXIgZG90cyAqL1xcbi5zY3JvbGxlckRvdENvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG4uc2Nyb2xsZXJEb3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIG1hcmdpbjogMCAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcXG59XFxuXFxuLnNjcm9sbGVyRG90OmhvdmVyLCAuc2VsZWN0ZWRJbWFnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MTcxNzE7XFxufVxcblxcbi8qIGZhZGluZyBhbmltYXRpb24gKi9cXG4uZmFkZSB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxuICB9XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogLjR9XFxuICAgIHRvIHtvcGFjaXR5OiAxfVxcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBNb2JpbGUgZm9ybSBzdHlsaW5nICYgdmFsaWRhdGlvbiBzdHlsaW5nICovXFxuXFxuLnZhbGlkYXRpb25Gb3JtQ29udGFpbnRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7ICAgIFxcbn1cXG5cXG4uZm9ybUhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLmZvcm1IZWFkZXI+aDMge1xcbiAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi52YWxpZGF0aW9uRm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcblxcbiAgICAvKiB3aWR0aDogODAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybVJvdyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwOyBcXG59XFxuXFxuLmZvcm1Sb3cgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5mb3JtUm93IHNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtOyAgICAgICAgICAvKiBUaGlzIHdvbid0IHdvcmsgaW4gQ2hyb21lIG9yIFNhZmFyaSAqL1xcbiAgICAvKiAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7ICAgVGhpcyB3aWxsIG1ha2UgaXQgd29yayAqL1xcbn1cXG5cXG4uZm9ybVJvdyBsYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmZvcm1Sb3cgaW5wdXQ6aW52YWxpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1lcnJvcik7XFxuICBjb2xvcjogdmFyKC0tZXJyb3IpO1xcbiAgYm94LXNoYWRvdzogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgcmVkIGdsb3cgaW4gRmlyZWZveCAqL1xcbn1cXG5cXG4uZm9ybVJvdyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtUm93IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZSk7XFxufVxcblxcbi5mb3JtUm93IGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUpO1xcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBGb290ZXIgc3R5bGluZyAqL1xcblxcbmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbn1cXG5cXG4vKiBjZW50ZXJzIGdpdGh1YiBpY29uIHZlcnRpY2FsbHkgKi9cXG5mb290ZXI+YSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5naXRodWIge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ2l0aHViOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRGVza3RvcCBmb3JtIHN0eWxpbmcgICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgICAuZm9ybUhlYWRlcixcXG4gICAgLnZhbGlkYXRpb25Gb3JtIHtcXG4gICAgICB3aWR0aDogNjAwcHg7XFxuICAgIH1cXG4gICAgLmZvcm1Sb3cge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8qIFRvIGF2b2lkIHN0cmV0Y2hpbmcgKi9cXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB9XFxuICAgIC5mb3JtUm93IGlucHV0LFxcbiAgICAuZm9ybVJvdyBzZWxlY3Qge1xcbiAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgICBoZWlnaHQ6IGluaXRpYWw7XFxuICAgIH1cXG4gICAgLmZvcm1Sb3cgbGFiZWwge1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgICBtYXJnaW4tdG9wOiA3cHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgfVxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDO0FBQ0o7O0FBRUEsR0FBRyxzQkFBc0I7O0FBRXpCO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0hBQXdIO0lBQ3hILGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7Ozs7O0FBTUEsbUJBQW1COztBQUVuQjtJQUNJLGFBQWE7O0lBRWIsd0NBQXdDO0lBQ3hDLHlCQUF5Qjs7SUFFekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFD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QkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7O0FBRWI7O0FBRUEsbUNBQW1DO0FBQ25DO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7Ozs7OztBQU1BLDBCQUEwQjs7QUFFMUI7SUFDSTs7TUFFRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLG1CQUFtQjtNQUNuQix1QkFBdUIsRUFBRSx3QkFBd0I7TUFDakQsbUJBQW1CO0lBQ3JCO0lBQ0E7O01BRUUsWUFBWTtNQUNaLGVBQWU7SUFDakI7SUFDQTtNQUNFLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osZUFBZTtNQUNmLG1CQUFtQjtJQUNyQjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiByZ2IoNDUsIDQ1LCA0NSk7XFxuICAgIC0tbGlnaHQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIC0taG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgLS1hY3RpdmU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgLS1lcnJvciA6IGRhcmtyZWRcXG59XFxuXFxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cXG5cXG5odG1sIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxPeHlnZW4tU2FucyxVYnVudHUsQ2FudGFyZWxsLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogSGVhZGVyIHN0eWxpbmcgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyPmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcblxcblxcblxcblxcbi8qIE1lbnUgc3R5bGluZyAqL1xcblxcbi5tYWluTWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgIHBhZGRpbmc6IDAgMTV2dztcXG59XFxuXFxuLm1lbnVJdGVtIHtcXG4gICAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICAgIG1hcmdpbjogMC42cmVtO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4ubWVudUl0ZW06aG92ZXIsXFxuLmRyb3Bkb3duTWVudTpob3ZlcixcXG4uZHJvcGRvd25PcHRpb246aG92ZXIsIFxcbi5tb2JpbGVNZW51T3B0aW9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcbi5tZW51SXRlbTphY3RpdmUsXFxuLmRyb3Bkb3duTWVudTphY3RpdmUsXFxuLmRyb3Bkb3duT3B0aW9uOmFjdGl2ZSxcXG4ubW9iaWxlTWVudU9wdGlvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUpO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcblxcblxcblxcblxcbi8qIENvbnRlbnQgc3R5bGluZyAqL1xcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGVudENvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNhbGMoY2VudGVyIC0gMzAlKVxcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBEcm9wZG93biBtZW51IHN0eWxpbmcgKi9cXG5cXG4uZHJvcGRvd25NZW51IHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRyb3Bkb3duQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGMoMTAwJSArIDJweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5kcm9wZG93bk9wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBNb2JpbGUgbWVudSBzdHlsaW5nICovXFxuXFxuLm1vYmlsZU1lbnVDb250ZW50IHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vYmlsZU1lbnVDb250ZW50PmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjE1ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm1vYmlsZU1lbnVDb250ZW50PnRhYmxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vYmlsZU1lbnVDb250YWluZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgLyogZW5hYmxlIGhvcml6b250YWwgc2Nyb2xsICovXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuXFxuLyogaGlkZSBzY3JvbGxiYXIsIHJldGFpbiBmdW5jdGlvbiAqL1xcbi5tb2JpbGVNZW51Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2JpbGVNZW51T3B0aW9uIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcblxcbi8qIEltYWdlIHNjcm9sbGVyIHN0eWxpbmcgKi9cXG5cXG4uc2Nyb2xsZXJJbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBzbGlkZXNob3cgY29udGFpbmVyICovXFxuLmltYWdlU2Nyb2xsZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi8qIGhpZGUgaW1hZ2VzIGRlZmF1bHQgKi9cXG4uaW1hZ2VDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBuZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xcbi5wcmV2aW91c0ltYWdlQnRuLCAubmV4dEltYWdlQnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogLTIycHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxuICAgIC8qIHVzZXItc2VsZWN0OiBub25lOyAqL1xcbn1cXG5cXG4vKiBwb3NpdGlvbiBuZXh0IGJ1dHRvbiBvbiB0aGUgcmlnaHQgKi9cXG4ubmV4dEltYWdlQnRuIHtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xcbn1cXG5cXG4vKiBhZGQgaG92ZXIgZWZmZWN0ICovXFxuLnByZXZpb3VzSW1hZ2VCdG46aG92ZXIsIC5uZXh0SW1hZ2VCdG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3ZlcilcXG59XFxuXFxuLyogY2FwdGlvbiB0ZXh0ICovXFxuLmltYWdlQ2FwdGlvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIGltYWdlIG51bWJlciAqL1xcbi5pbWFnZU51bWJlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4vKiBzY3JvbGxlciBkb3RzICovXFxuLnNjcm9sbGVyRG90Q29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcblxcbi5zY3JvbGxlckRvdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC42cyBlYXNlO1xcbn1cXG5cXG4uc2Nyb2xsZXJEb3Q6aG92ZXIsIC5zZWxlY3RlZEltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzE3MTtcXG59XFxuXFxuLyogZmFkaW5nIGFuaW1hdGlvbiAqL1xcbi5mYWRlIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXG4gIH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAuNH1cXG4gICAgdG8ge29wYWNpdHk6IDF9XFxufVxcblxcblxcblxcblxcblxcbi8qIE1vYmlsZSBmb3JtIHN0eWxpbmcgJiB2YWxpZGF0aW9uIHN0eWxpbmcgKi9cXG5cXG4udmFsaWRhdGlvbkZvcm1Db250YWludGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTsgICAgXFxufVxcblxcbi5mb3JtSGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4uZm9ybUhlYWRlcj5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnZhbGlkYXRpb25Gb3JtIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuXFxuICAgIC8qIHdpZHRoOiA4MCU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtUm93IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7IFxcbn1cXG5cXG4uZm9ybVJvdyBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmZvcm1Sb3cgc2VsZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07ICAgICAgICAgIC8qIFRoaXMgd29uJ3Qgd29yayBpbiBDaHJvbWUgb3IgU2FmYXJpICovXFxuICAgIC8qIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgICBUaGlzIHdpbGwgbWFrZSBpdCB3b3JrICovXFxufVxcblxcbi5mb3JtUm93IGxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZm9ybVJvdyBpbnB1dDppbnZhbGlkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWVycm9yKTtcXG4gIGNvbG9yOiB2YXIoLS1lcnJvcik7XFxuICBib3gtc2hhZG93OiBub25lOyAvKiBSZW1vdmUgZGVmYXVsdCByZWQgZ2xvdyBpbiBGaXJlZm94ICovXFxufVxcblxcbi5mb3JtUm93IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcblxcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm1Sb3cgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlKTtcXG59XFxuXFxuLmZvcm1Sb3cgYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZSk7XFxuICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcblxcblxcblxcblxcblxcbi8qIEZvb3RlciBzdHlsaW5nICovXFxuXFxuZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG5cXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcblxcbi8qIGNlbnRlcnMgZ2l0aHViIGljb24gdmVydGljYWxseSAqL1xcbmZvb3Rlcj5hIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdpdGh1YiB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5naXRodWI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBEZXNrdG9wIGZvcm0gc3R5bGluZyAgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAgIC5mb3JtSGVhZGVyLFxcbiAgICAudmFsaWRhdGlvbkZvcm0ge1xcbiAgICAgIHdpZHRoOiA2MDBweDtcXG4gICAgfVxcbiAgICAuZm9ybVJvdyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgLyogVG8gYXZvaWQgc3RyZXRjaGluZyAqL1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIH1cXG4gICAgLmZvcm1Sb3cgaW5wdXQsXFxuICAgIC5mb3JtUm93IHNlbGVjdCB7XFxuICAgICAgd2lkdGg6IDI4MHB4O1xcbiAgICAgIGhlaWdodDogaW5pdGlhbDtcXG4gICAgfVxcbiAgICAuZm9ybVJvdyBsYWJlbCB7XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgICAgd2lkdGg6IDE4MHB4O1xcbiAgICAgIG1hcmdpbi10b3A6IDdweDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICB9XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vcGFnZUxvYWRlcic7XG5cbmluaXRpYWxpemUoKTtcbiJdLCJuYW1lcyI6WyJjb3VudHJ5TGlzdEFscGhhMiIsIkFGIiwiQUwiLCJEWiIsIkFTIiwiQUQiLCJBTyIsIkFJIiwiQVEiLCJBRyIsIkFSIiwiQU0iLCJBVyIsIkFVIiwiQVQiLCJBWiIsIkJTIiwiQkgiLCJCRCIsIkJCIiwiQlkiLCJCRSIsIkJaIiwiQkoiLCJCTSIsIkJUIiwiQk8iLCJCUSIsIkJBIiwiQlciLCJCViIsIkJSIiwiSU8iLCJCTiIsIkJHIiwiQkYiLCJCSSIsIkNWIiwiS0giLCJDTSIsIkNBIiwiS1kiLCJDRiIsIlREIiwiQ0wiLCJDTiIsIkNYIiwiQ0MiLCJDTyIsIktNIiwiQ0QiLCJDRyIsIkNLIiwiQ1IiLCJIUiIsIkNVIiwiQ1ciLCJDWSIsIkNaIiwiQ0kiLCJESyIsIkRKIiwiRE0iLCJETyIsIkVDIiwiRUciLCJTViIsIkdRIiwiRVIiLCJFRSIsIlNaIiwiRVQiLCJGSyIsIkZPIiwiRkoiLCJGSSIsIkZSIiwiR0YiLCJQRiIsIlRGIiwiR0EiLCJHTSIsIkdFIiwiREUiLCJHSCIsIkdJIiwiR1IiLCJHTCIsIkdEIiwiR1AiLCJHVSIsIkdUIiwiR0ciLCJHTiIsIkdXIiwiR1kiLCJIVCIsIkhNIiwiVkEiLCJITiIsIkhLIiwiSFUiLCJJUyIsIklOIiwiSUQiLCJJUiIsIklRIiwiSUUiLCJJTSIsIklMIiwiSVQiLCJKTSIsIkpQIiwiSkUiLCJKTyIsIktaIiwiS0UiLCJLSSIsIktQIiwiS1IiLCJLVyIsIktHIiwiTEEiLCJMViIsIkxCIiwiTFMiLCJMUiIsIkxZIiwiTEkiLCJMVCIsIkxVIiwiTU8iLCJNRyIsIk1XIiwiTVkiLCJNViIsIk1MIiwiTVQiLCJNSCIsIk1RIiwiTVIiLCJNVSIsIllUIiwiTVgiLCJGTSIsIk1EIiwiTUMiLCJNTiIsIk1FIiwiTVMiLCJNQSIsIk1aIiwiTU0iLCJOQSIsIk5SIiwiTlAiLCJOTCIsIk5DIiwiTloiLCJOSSIsIk5FIiwiTkciLCJOVSIsIk5GIiwiTVAiLCJOTyIsIk9NIiwiUEsiLCJQVyIsIlBTIiwiUEEiLCJQRyIsIlBZIiwiUEUiLCJQSCIsIlBOIiwiUEwiLCJQVCIsIlBSIiwiUUEiLCJNSyIsIlJPIiwiUlUiLCJSVyIsIlJFIiwiQkwiLCJTSCIsIktOIiwiTEMiLCJNRiIsIlBNIiwiVkMiLCJXUyIsIlNNIiwiU1QiLCJTQSIsIlNOIiwiUlMiLCJTQyIsIlNMIiwiU0ciLCJTWCIsIlNLIiwiU0kiLCJTQiIsIlNPIiwiWkEiLCJHUyIsIlNTIiwiRVMiLCJMSyIsIlNEIiwiU1IiLCJTSiIsIlNFIiwiQ0giLCJTWSIsIlRXIiwiVEoiLCJUWiIsIlRIIiwiVEwiLCJURyIsIlRLIiwiVE8iLCJUVCIsIlROIiwiVFIiLCJUTSIsIlRDIiwiVFYiLCJVRyIsIlVBIiwiQUUiLCJHQiIsIlVNIiwiVVMiLCJVWSIsIlVaIiwiVlUiLCJWRSIsIlZOIiwiVkciLCJWSSIsIldGIiwiRUgiLCJZRSIsIlpNIiwiWlciLCJBWCIsInZhbGlkYXRlRW1haWwiLCJlbWFpbElucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbGlkaXR5IiwidHlwZU1pc21hdGNoIiwidmFsdWUiLCJzZXRDdXN0b21WYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiY3JlYXRlRW1haWxJbnB1dCIsImNvbnRhaW5lciIsImZvcm1Sb3ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZW1haWxMYWJlbCIsImZvciIsImlubmVyVGV4dCIsImlkIiwibmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBlbmRDaGlsZCIsInZhbGlkYXRlQ291bnRyeUlucHV0IiwiY291bnRyeVNlbGVjdGlvbiIsImNyZWF0ZUNvdW50cnlJbnB1dCIsImNvdW50cnlMYWJlbCIsImJsYW5rT3B0aW9uIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJuZXdPcHRpb24iLCJ2YWxpZGF0ZVppcENvZGUiLCJ6aXBDb2RlSW5wdXQiLCJ0ZXN0IiwiY3JlYXRlWmlwQ29kZUlucHV0IiwiemlwQ29kZUxhYmVsIiwidmFsaWRhdGVQYXNzd29yZCIsInBhc3N3b3JkSW5wdXQiLCJsZW5ndGgiLCJjcmVhdGVQYXNzd29yZElucHV0IiwicGFzc3dvcmRMYWJlbCIsImNvbmZpcm1QYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZElucHV0IiwiY3JlYXRlQ29uZmlybVBhc3N3b3JkSW5wdXQiLCJjb25maXJtUGFzc3dvcmRMYWJlbCIsInN1Ym1pdEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVTdWJtaXRCdXR0b24iLCJzdWJtaXRCdG4iLCJnZW5lcmF0ZUZvcm0iLCJnaXRodWJJY29uIiwicGxhY2Vob2xkZXJJbWcxIiwicGxhY2Vob2xkZXJJbWcyIiwicGxhY2Vob2xkZXJJbWczIiwicGxhY2Vob2xkZXJJbWc0IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9jZXNzTWVudVNlbGVjdGlvbiIsIm1haW5NZW51IiwiY29udGVudENvbnRhaW5lciIsIm1lbnVDb3VudCIsImNoaWxkRWxlbWVudENvdW50IiwiaSIsImNoaWxkcmVuIiwicmVtb3ZlIiwidGFyZ2V0IiwiY29udGVudENvdW50IiwiY29udGFpbnMiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlTWVudUl0ZW0iLCJpdGVtTmFtZSIsIml0ZW1Db250YWluZXIiLCJpdGVtSWQiLCJpdGVtQ2xhc3MiLCJuZXdNZW51SXRlbSIsInVuZGVmaW5lZCIsInNldEF0dHJpYnV0ZSIsImFkZEltYWdlVG9TY3JvbGxlciIsImltYWdlIiwic2Nyb2xsZXIiLCJjYXB0aW9uIiwiaW1hZ2VDb250YWluZXIiLCJpbWFnZU51bWJlciIsIm5ld0ltYWdlIiwic3JjIiwiaW1hZ2VDYXB0aW9uIiwic2xpZGVJbmRleCIsInNlbGVjdEltYWdlIiwibiIsInNjcm9sbGVySW1hZ2VzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNjcm9sbGVyRG90cyIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJsb29wSW1hZ2VTY3JvbGxlciIsInNldFRpbWVvdXQiLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJoZWFkZXJUaXRsZSIsImNyZWF0ZU1haW5NZW51IiwiY3JlYXRlRHJvcGRvd25NZW51IiwiZHJvcGRvd25NZW51Q29udGFpbnRlciIsImRyb3Bkb3duQ29udGFpbmVyIiwiZHJvcGRvd25PcHRpb24iLCJkcm9wZG93bk1lbnUiLCJ0b2dnbGUiLCJ3aW5kb3ciLCJvbmNsaWNrIiwibWF0Y2hlcyIsImNyZWF0ZU1vYmlsZU1lbnUiLCJtb2JpbGVNZW51Q29udGVudCIsIm1vYmlsZU1lbnVUaXRsZSIsIm1vYmlsZU1lbnVUYWJsZSIsIm1vYmlsZU1lbnVDb250YWludGVyIiwic2Nyb2xsTGVmdCIsImRlbHRhWSIsIm1vYmlsZU1lbnVPcHRpb24iLCJtb2JpbGVNZW51Q291bnQiLCJjcmVhdGVJbWFnZVNjcm9sbGVyIiwiaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIiLCJpbWFnZVNjcm9sbGVyIiwicHJldmlvdXNJbWFnZUJ0biIsImlubmVySFRNTCIsIm5leHRJbWFnZUJ0biIsInNjcm9sbGVyRG90Q29udGFpbmVyIiwibmV3RG90IiwiY3JlYXRlVmFsaWRhdGlvbkZvcm0iLCJ2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIiLCJmb3JtSGVhZGVyIiwiZm9ybVRpdGxlIiwidmFsaWRhdGlvbkZvcm0iLCJhdXRvY29tcGxldGUiLCJjcmVhdGVBUElQcmFjdGljZSIsIkFQSVByYWN0aWNlQ29udGFpbnRlciIsIkFQSVByYWN0aWNlIiwiY3JlYXRlQ29udGVudENvbnRhaW5lciIsImNvbnRlbnRDb250YWludGVyIiwiY3JlYXRlRm9vdGVyIiwiZm9vdGVyIiwiY29weXJpZ2h0IiwidGV4dENvbnRlbnQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnaXRodWJMaW5rIiwiaHJlZiIsIm5ld0dpdGh1Ykljb24iLCJpbml0aWFsaXplIl0sInNvdXJjZVJvb3QiOiIifQ==