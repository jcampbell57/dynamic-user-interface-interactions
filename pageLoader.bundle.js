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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/pageLoader.js ***!
  \***************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxNQUFNO0VBQ3ZCNUQsWUFBWTtFQUNaRyxjQUFjO0VBQ2Q4QyxzQkFBc0I7RUFDdEJFLFlBQVk7QUFDYixDQUxEOztBQU9BLGlFQUFlUyxVQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9mb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvcGFnZUxvYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3VudHJ5IG5hbWVzIG9iamVjdCB1c2luZyAyLWxldHRlciBjb3VudHJ5IGNvZGVzIHRvIHJlZmVyZW5jZSBjb3VudHJ5IG5hbWVcbi8vIElTTyAzMTY2IEFscGhhLTIgRm9ybWF0OiBbMiBsZXR0ZXIgQ291bnRyeSBDb2RlXTogW0NvdW50cnkgTmFtZV1cbi8vIFNvcnRlZCBhbHBoYWJldGljYWwgYnkgY291bnRyeSBuYW1lIChzcGVjaWFsIGNoYXJhY3RlcnMgb24gYm90dG9tKVxuY29uc3QgY291bnRyeUxpc3RBbHBoYTIgPSB7XG4gIEFGOiAnQWZnaGFuaXN0YW4nLFxuICBBTDogJ0FsYmFuaWEnLFxuICBEWjogJ0FsZ2VyaWEnLFxuICBBUzogJ0FtZXJpY2FuIFNhbW9hJyxcbiAgQUQ6ICdBbmRvcnJhJyxcbiAgQU86ICdBbmdvbGEnLFxuICBBSTogJ0FuZ3VpbGxhJyxcbiAgQVE6ICdBbnRhcmN0aWNhJyxcbiAgQUc6ICdBbnRpZ3VhIGFuZCBCYXJidWRhJyxcbiAgQVI6ICdBcmdlbnRpbmEnLFxuICBBTTogJ0FybWVuaWEnLFxuICBBVzogJ0FydWJhJyxcbiAgQVU6ICdBdXN0cmFsaWEnLFxuICBBVDogJ0F1c3RyaWEnLFxuICBBWjogJ0F6ZXJiYWlqYW4nLFxuICBCUzogJ0JhaGFtYXMgKHRoZSknLFxuICBCSDogJ0JhaHJhaW4nLFxuICBCRDogJ0JhbmdsYWRlc2gnLFxuICBCQjogJ0JhcmJhZG9zJyxcbiAgQlk6ICdCZWxhcnVzJyxcbiAgQkU6ICdCZWxnaXVtJyxcbiAgQlo6ICdCZWxpemUnLFxuICBCSjogJ0JlbmluJyxcbiAgQk06ICdCZXJtdWRhJyxcbiAgQlQ6ICdCaHV0YW4nLFxuICBCTzogJ0JvbGl2aWEgKFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YpJyxcbiAgQlE6ICdCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYScsXG4gIEJBOiAnQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYScsXG4gIEJXOiAnQm90c3dhbmEnLFxuICBCVjogJ0JvdXZldCBJc2xhbmQnLFxuICBCUjogJ0JyYXppbCcsXG4gIElPOiAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5ICh0aGUpJyxcbiAgQk46ICdCcnVuZWkgRGFydXNzYWxhbScsXG4gIEJHOiAnQnVsZ2FyaWEnLFxuICBCRjogJ0J1cmtpbmEgRmFzbycsXG4gIEJJOiAnQnVydW5kaScsXG4gIENWOiAnQ2FibyBWZXJkZScsXG4gIEtIOiAnQ2FtYm9kaWEnLFxuICBDTTogJ0NhbWVyb29uJyxcbiAgQ0E6ICdDYW5hZGEnLFxuICBLWTogJ0NheW1hbiBJc2xhbmRzICh0aGUpJyxcbiAgQ0Y6ICdDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMgKHRoZSknLFxuICBURDogJ0NoYWQnLFxuICBDTDogJ0NoaWxlJyxcbiAgQ046ICdDaGluYScsXG4gIENYOiAnQ2hyaXN0bWFzIElzbGFuZCcsXG4gIENDOiAnQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMgKHRoZSknLFxuICBDTzogJ0NvbG9tYmlhJyxcbiAgS006ICdDb21vcm9zICh0aGUpJyxcbiAgQ0Q6ICdDb25nbyAodGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlKScsXG4gIENHOiAnQ29uZ28gKHRoZSknLFxuICBDSzogJ0Nvb2sgSXNsYW5kcyAodGhlKScsXG4gIENSOiAnQ29zdGEgUmljYScsXG4gIEhSOiAnQ3JvYXRpYScsXG4gIENVOiAnQ3ViYScsXG4gIENXOiAnQ3VyYcOnYW8nLFxuICBDWTogJ0N5cHJ1cycsXG4gIENaOiAnQ3plY2hpYScsXG4gIENJOiBcIkPDtHRlIGQnSXZvaXJlXCIsXG4gIERLOiAnRGVubWFyaycsXG4gIERKOiAnRGppYm91dGknLFxuICBETTogJ0RvbWluaWNhJyxcbiAgRE86ICdEb21pbmljYW4gUmVwdWJsaWMgKHRoZSknLFxuICBFQzogJ0VjdWFkb3InLFxuICBFRzogJ0VneXB0JyxcbiAgU1Y6ICdFbCBTYWx2YWRvcicsXG4gIEdROiAnRXF1YXRvcmlhbCBHdWluZWEnLFxuICBFUjogJ0VyaXRyZWEnLFxuICBFRTogJ0VzdG9uaWEnLFxuICBTWjogJ0Vzd2F0aW5pJyxcbiAgRVQ6ICdFdGhpb3BpYScsXG4gIEZLOiAnRmFsa2xhbmQgSXNsYW5kcyAodGhlKSBbTWFsdmluYXNdJyxcbiAgRk86ICdGYXJvZSBJc2xhbmRzICh0aGUpJyxcbiAgRko6ICdGaWppJyxcbiAgRkk6ICdGaW5sYW5kJyxcbiAgRlI6ICdGcmFuY2UnLFxuICBHRjogJ0ZyZW5jaCBHdWlhbmEnLFxuICBQRjogJ0ZyZW5jaCBQb2x5bmVzaWEnLFxuICBURjogJ0ZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllcyAodGhlKScsXG4gIEdBOiAnR2Fib24nLFxuICBHTTogJ0dhbWJpYSAodGhlKScsXG4gIEdFOiAnR2VvcmdpYScsXG4gIERFOiAnR2VybWFueScsXG4gIEdIOiAnR2hhbmEnLFxuICBHSTogJ0dpYnJhbHRhcicsXG4gIEdSOiAnR3JlZWNlJyxcbiAgR0w6ICdHcmVlbmxhbmQnLFxuICBHRDogJ0dyZW5hZGEnLFxuICBHUDogJ0d1YWRlbG91cGUnLFxuICBHVTogJ0d1YW0nLFxuICBHVDogJ0d1YXRlbWFsYScsXG4gIEdHOiAnR3Vlcm5zZXknLFxuICBHTjogJ0d1aW5lYScsXG4gIEdXOiAnR3VpbmVhLUJpc3NhdScsXG4gIEdZOiAnR3V5YW5hJyxcbiAgSFQ6ICdIYWl0aScsXG4gIEhNOiAnSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzJyxcbiAgVkE6ICdIb2x5IFNlZSAodGhlKScsXG4gIEhOOiAnSG9uZHVyYXMnLFxuICBISzogJ0hvbmcgS29uZycsXG4gIEhVOiAnSHVuZ2FyeScsXG4gIElTOiAnSWNlbGFuZCcsXG4gIElOOiAnSW5kaWEnLFxuICBJRDogJ0luZG9uZXNpYScsXG4gIElSOiAnSXJhbiAoSXNsYW1pYyBSZXB1YmxpYyBvZiknLFxuICBJUTogJ0lyYXEnLFxuICBJRTogJ0lyZWxhbmQnLFxuICBJTTogJ0lzbGUgb2YgTWFuJyxcbiAgSUw6ICdJc3JhZWwnLFxuICBJVDogJ0l0YWx5JyxcbiAgSk06ICdKYW1haWNhJyxcbiAgSlA6ICdKYXBhbicsXG4gIEpFOiAnSmVyc2V5JyxcbiAgSk86ICdKb3JkYW4nLFxuICBLWjogJ0themFraHN0YW4nLFxuICBLRTogJ0tlbnlhJyxcbiAgS0k6ICdLaXJpYmF0aScsXG4gIEtQOiBcIktvcmVhICh0aGUgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZilcIixcbiAgS1I6ICdLb3JlYSAodGhlIFJlcHVibGljIG9mKScsXG4gIEtXOiAnS3V3YWl0JyxcbiAgS0c6ICdLeXJneXpzdGFuJyxcbiAgTEE6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWMgKHRoZSlcIixcbiAgTFY6ICdMYXR2aWEnLFxuICBMQjogJ0xlYmFub24nLFxuICBMUzogJ0xlc290aG8nLFxuICBMUjogJ0xpYmVyaWEnLFxuICBMWTogJ0xpYnlhJyxcbiAgTEk6ICdMaWVjaHRlbnN0ZWluJyxcbiAgTFQ6ICdMaXRodWFuaWEnLFxuICBMVTogJ0x1eGVtYm91cmcnLFxuICBNTzogJ01hY2FvJyxcbiAgTUc6ICdNYWRhZ2FzY2FyJyxcbiAgTVc6ICdNYWxhd2knLFxuICBNWTogJ01hbGF5c2lhJyxcbiAgTVY6ICdNYWxkaXZlcycsXG4gIE1MOiAnTWFsaScsXG4gIE1UOiAnTWFsdGEnLFxuICBNSDogJ01hcnNoYWxsIElzbGFuZHMgKHRoZSknLFxuICBNUTogJ01hcnRpbmlxdWUnLFxuICBNUjogJ01hdXJpdGFuaWEnLFxuICBNVTogJ01hdXJpdGl1cycsXG4gIFlUOiAnTWF5b3R0ZScsXG4gIE1YOiAnTWV4aWNvJyxcbiAgRk06ICdNaWNyb25lc2lhIChGZWRlcmF0ZWQgU3RhdGVzIG9mKScsXG4gIE1EOiAnTW9sZG92YSAodGhlIFJlcHVibGljIG9mKScsXG4gIE1DOiAnTW9uYWNvJyxcbiAgTU46ICdNb25nb2xpYScsXG4gIE1FOiAnTW9udGVuZWdybycsXG4gIE1TOiAnTW9udHNlcnJhdCcsXG4gIE1BOiAnTW9yb2NjbycsXG4gIE1aOiAnTW96YW1iaXF1ZScsXG4gIE1NOiAnTXlhbm1hcicsXG4gIE5BOiAnTmFtaWJpYScsXG4gIE5SOiAnTmF1cnUnLFxuICBOUDogJ05lcGFsJyxcbiAgTkw6ICdOZXRoZXJsYW5kcyAodGhlKScsXG4gIE5DOiAnTmV3IENhbGVkb25pYScsXG4gIE5aOiAnTmV3IFplYWxhbmQnLFxuICBOSTogJ05pY2FyYWd1YScsXG4gIE5FOiAnTmlnZXIgKHRoZSknLFxuICBORzogJ05pZ2VyaWEnLFxuICBOVTogJ05pdWUnLFxuICBORjogJ05vcmZvbGsgSXNsYW5kJyxcbiAgTVA6ICdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMgKHRoZSknLFxuICBOTzogJ05vcndheScsXG4gIE9NOiAnT21hbicsXG4gIFBLOiAnUGFraXN0YW4nLFxuICBQVzogJ1BhbGF1JyxcbiAgUFM6ICdQYWxlc3RpbmUsIFN0YXRlIG9mJyxcbiAgUEE6ICdQYW5hbWEnLFxuICBQRzogJ1BhcHVhIE5ldyBHdWluZWEnLFxuICBQWTogJ1BhcmFndWF5JyxcbiAgUEU6ICdQZXJ1JyxcbiAgUEg6ICdQaGlsaXBwaW5lcyAodGhlKScsXG4gIFBOOiAnUGl0Y2Fpcm4nLFxuICBQTDogJ1BvbGFuZCcsXG4gIFBUOiAnUG9ydHVnYWwnLFxuICBQUjogJ1B1ZXJ0byBSaWNvJyxcbiAgUUE6ICdRYXRhcicsXG4gIE1LOiAnUmVwdWJsaWMgb2YgTm9ydGggTWFjZWRvbmlhJyxcbiAgUk86ICdSb21hbmlhJyxcbiAgUlU6ICdSdXNzaWFuIEZlZGVyYXRpb24gKHRoZSknLFxuICBSVzogJ1J3YW5kYScsXG4gIFJFOiAnUsOpdW5pb24nLFxuICBCTDogJ1NhaW50IEJhcnRow6lsZW15JyxcbiAgU0g6ICdTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYScsXG4gIEtOOiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJyxcbiAgTEM6ICdTYWludCBMdWNpYScsXG4gIE1GOiAnU2FpbnQgTWFydGluIChGcmVuY2ggcGFydCknLFxuICBQTTogJ1NhaW50IFBpZXJyZSBhbmQgTWlxdWVsb24nLFxuICBWQzogJ1NhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzJyxcbiAgV1M6ICdTYW1vYScsXG4gIFNNOiAnU2FuIE1hcmlubycsXG4gIFNUOiAnU2FvIFRvbWUgYW5kIFByaW5jaXBlJyxcbiAgU0E6ICdTYXVkaSBBcmFiaWEnLFxuICBTTjogJ1NlbmVnYWwnLFxuICBSUzogJ1NlcmJpYScsXG4gIFNDOiAnU2V5Y2hlbGxlcycsXG4gIFNMOiAnU2llcnJhIExlb25lJyxcbiAgU0c6ICdTaW5nYXBvcmUnLFxuICBTWDogJ1NpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydCknLFxuICBTSzogJ1Nsb3Zha2lhJyxcbiAgU0k6ICdTbG92ZW5pYScsXG4gIFNCOiAnU29sb21vbiBJc2xhbmRzJyxcbiAgU086ICdTb21hbGlhJyxcbiAgWkE6ICdTb3V0aCBBZnJpY2EnLFxuICBHUzogJ1NvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzJyxcbiAgU1M6ICdTb3V0aCBTdWRhbicsXG4gIEVTOiAnU3BhaW4nLFxuICBMSzogJ1NyaSBMYW5rYScsXG4gIFNEOiAnU3VkYW4gKHRoZSknLFxuICBTUjogJ1N1cmluYW1lJyxcbiAgU0o6ICdTdmFsYmFyZCBhbmQgSmFuIE1heWVuJyxcbiAgU0U6ICdTd2VkZW4nLFxuICBDSDogJ1N3aXR6ZXJsYW5kJyxcbiAgU1k6ICdTeXJpYW4gQXJhYiBSZXB1YmxpYycsXG4gIFRXOiAnVGFpd2FuJyxcbiAgVEo6ICdUYWppa2lzdGFuJyxcbiAgVFo6ICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mJyxcbiAgVEg6ICdUaGFpbGFuZCcsXG4gIFRMOiAnVGltb3ItTGVzdGUnLFxuICBURzogJ1RvZ28nLFxuICBUSzogJ1Rva2VsYXUnLFxuICBUTzogJ1RvbmdhJyxcbiAgVFQ6ICdUcmluaWRhZCBhbmQgVG9iYWdvJyxcbiAgVE46ICdUdW5pc2lhJyxcbiAgVFI6ICdUdXJrZXknLFxuICBUTTogJ1R1cmttZW5pc3RhbicsXG4gIFRDOiAnVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzICh0aGUpJyxcbiAgVFY6ICdUdXZhbHUnLFxuICBVRzogJ1VnYW5kYScsXG4gIFVBOiAnVWtyYWluZScsXG4gIEFFOiAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMgKHRoZSknLFxuICBHQjogJ1VuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmQgKHRoZSknLFxuICBVTTogJ1VuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kcyAodGhlKScsXG4gIFVTOiAnVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhICh0aGUpJyxcbiAgVVk6ICdVcnVndWF5JyxcbiAgVVo6ICdVemJla2lzdGFuJyxcbiAgVlU6ICdWYW51YXR1JyxcbiAgVkU6ICdWZW5lenVlbGEgKEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YpJyxcbiAgVk46ICdWaWV0IE5hbScsXG4gIFZHOiAnVmlyZ2luIElzbGFuZHMgKEJyaXRpc2gpJyxcbiAgVkk6ICdWaXJnaW4gSXNsYW5kcyAoVS5TLiknLFxuICBXRjogJ1dhbGxpcyBhbmQgRnV0dW5hJyxcbiAgRUg6ICdXZXN0ZXJuIFNhaGFyYScsXG4gIFlFOiAnWWVtZW4nLFxuICBaTTogJ1phbWJpYScsXG4gIFpXOiAnWmltYmFid2UnLFxuICBBWDogJ8OFbGFuZCBJc2xhbmRzJyxcbn07XG5cbmNvbnN0IHZhbGlkYXRlRW1haWwgPSAoKSA9PiB7XG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcbiAgaWYgKGVtYWlsSW5wdXQudmFsaWRpdHkudHlwZU1pc21hdGNoIHx8IGVtYWlsSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgZW1haWxJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnRW50ZXIgYSB2YWxpZCBlbWFpbCcpO1xuICAgIGVtYWlsSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgfSBlbHNlIHtcbiAgICBlbWFpbElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlRW1haWxJbnB1dCA9IChjb250YWluZXIpID0+IHtcbiAgLy8gZW1haWwgY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gIC8vIGVtYWlsIGxhYmVsXG4gIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBlbWFpbExhYmVsLmZvciA9ICdlbWFpbCc7XG4gIGVtYWlsTGFiZWwuaW5uZXJUZXh0ID0gJ0VtYWlsJztcbiAgLy8gZW1haWwgaW5wdXRcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGVtYWlsSW5wdXQuaWQgPSAnZW1haWwnO1xuICBlbWFpbElucHV0Lm5hbWUgPSAnZW1haWwnO1xuICBlbWFpbElucHV0LnR5cGUgPSAnZW1haWwnO1xuICBlbWFpbElucHV0LnBsYWNlaG9sZGVyID0gJ2phbmVAZXhhbXBsZS5jb20nO1xuICAvLyB2YWxpZGl0eSBjaGVja1xuICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdmFsaWRhdGVFbWFpbCgpKTtcbiAgLy8gYXBwZW5kIGVtYWlsXG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlQ291bnRyeUlucHV0ID0gKCkgPT4ge1xuICBjb25zdCBjb3VudHJ5U2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnknKTtcbiAgaWYgKGNvdW50cnlTZWxlY3Rpb24udmFsdWUgPT09ICcnKSB7XG4gICAgY291bnRyeVNlbGVjdGlvbi5zZXRDdXN0b21WYWxpZGl0eSgnV2hpY2ggY291bnRyeSBhcmUgeW91IGluPycpO1xuICAgIGNvdW50cnlTZWxlY3Rpb24ucmVwb3J0VmFsaWRpdHkoKTtcbiAgfSBlbHNlIHtcbiAgICBjb3VudHJ5U2VsZWN0aW9uLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlQ291bnRyeUlucHV0ID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBjb3VudHJ5IGNvbnRhaW5lclxuICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xuICAvLyBjb3VudHJ5IGxhYmVsXG4gIGNvbnN0IGNvdW50cnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvdW50cnlMYWJlbC5mb3IgPSAnY291bnRyeSc7XG4gIGNvdW50cnlMYWJlbC5pbm5lclRleHQgPSAnQ291bnRyeSc7XG4gIC8vIGNvdW50cnkgc2VsZWN0aW9uXG4gIGNvbnN0IGNvdW50cnlTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY291bnRyeVNlbGVjdGlvbi5pZCA9ICdjb3VudHJ5JztcbiAgY291bnRyeVNlbGVjdGlvbi5uYW1lID0gJ2NvdW50cnknO1xuICAvLyBjb3VudHJ5IG9wdGlvbnNcbiAgY29uc3QgYmxhbmtPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgYmxhbmtPcHRpb24udmFsdWUgPSAnJztcbiAgYmxhbmtPcHRpb24uaW5uZXJUZXh0ID0gJyc7XG4gIGNvdW50cnlTZWxlY3Rpb24uYXBwZW5kQ2hpbGQoYmxhbmtPcHRpb24pO1xuICBPYmplY3Qua2V5cyhjb3VudHJ5TGlzdEFscGhhMikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coa2V5LCBjb3VudHJ5TGlzdEFscGhhMltrZXldKTtcbiAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBuZXdPcHRpb24udmFsdWUgPSBrZXk7XG4gICAgbmV3T3B0aW9uLmlubmVyVGV4dCA9IGNvdW50cnlMaXN0QWxwaGEyW2tleV07XG4gICAgY291bnRyeVNlbGVjdGlvbi5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuICB9KTtcbiAgLy8gdmFsaWRpdHkgY2hlY2tcbiAgY291bnRyeVNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHZhbGlkYXRlQ291bnRyeUlucHV0KCkpO1xuICAvLyBhcHBlbmQgY291bnRyeSBpbnB1dFxuICBmb3JtUm93LmFwcGVuZENoaWxkKGNvdW50cnlMYWJlbCk7XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoY291bnRyeVNlbGVjdGlvbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlWmlwQ29kZSA9ICgpID0+IHtcbiAgY29uc3QgemlwQ29kZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ppcGNvZGUnKTtcbiAgaWYgKC9eXFxkezV9KC1cXGR7NH0pPyQvLnRlc3QoemlwQ29kZUlucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICB6aXBDb2RlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0VudGVyIGEgdmFsaWQgemlwY29kZScpO1xuICAgIHppcENvZGVJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICB9IGVsc2Uge1xuICAgIHppcENvZGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZVppcENvZGVJbnB1dCA9IChjb250YWluZXIpID0+IHtcbiAgLy8gemlwIGNvZGUgY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gIC8vIHppcCBjb2RlIGxhYmVsXG4gIGNvbnN0IHppcENvZGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHppcENvZGVMYWJlbC5mb3IgPSAnemlwY29kZSc7XG4gIHppcENvZGVMYWJlbC5pbm5lclRleHQgPSAnWmlwIGNvZGUnO1xuICAvLyB6aXAgY29kZSBpbnB1dFxuICBjb25zdCB6aXBDb2RlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB6aXBDb2RlSW5wdXQuaWQgPSAnemlwY29kZSc7XG4gIHppcENvZGVJbnB1dC5uYW1lID0gJ3ppcGNvZGUnO1xuICAvLyB2YWxpZGl0eSBjaGVja1xuICB6aXBDb2RlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB2YWxpZGF0ZVppcENvZGUoKSk7XG4gIC8vIGFwcGVuZCB6aXAgY29kZSBpbnB1dFxuICBmb3JtUm93LmFwcGVuZENoaWxkKHppcENvZGVMYWJlbCk7XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoemlwQ29kZUlucHV0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xufTtcblxuY29uc3QgdmFsaWRhdGVQYXNzd29yZCA9ICgpID0+IHtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xuXG4gIC8vIFZhbGlkYXRlIGxvd2VyY2FzZSBsZXR0ZXJzXG4gIGlmICgvW2Etel0vZy50ZXN0KHBhc3N3b3JkSW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xuICAgIHBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgY29udGFpbiBsb3dlcmNhc2UgbGV0dGVyJyk7XG4gICAgcGFzc3dvcmRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIC8vIFZhbGlkYXRlIGNhcGl0YWwgbGV0dGVyc1xuICB9IGVsc2UgaWYgKC9bQS1aXS9nLnRlc3QocGFzc3dvcmRJbnB1dC52YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgcGFzc3dvcmRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBjb250YWluIHVwcGVyY2FzZSBsZXR0ZXInKTtcbiAgICBwYXNzd29yZElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgLy8gVmFsaWRhdGUgbnVtYmVyc1xuICB9IGVsc2UgaWYgKC9bMC05XS9nLnRlc3QocGFzc3dvcmRJbnB1dC52YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgcGFzc3dvcmRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBjb250YWluIGEgbnVtYmVyJyk7XG4gICAgcGFzc3dvcmRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIC8vIFZhbGlkYXRlIGxlbmd0aFxuICB9IGVsc2UgaWYgKHBhc3N3b3JkSW5wdXQudmFsdWUubGVuZ3RoIDwgOCkge1xuICAgIHBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzJyk7XG4gICAgcGFzc3dvcmRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICB9IGVsc2Uge1xuICAgIHBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVQYXNzd29yZElucHV0ID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBwYXNzd29yZCBjb250YWluZXJcbiAgY29uc3QgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtUm93LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcbiAgLy8gcGFzc3dvcmQgbGFiZWxcbiAgY29uc3QgcGFzc3dvcmRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHBhc3N3b3JkTGFiZWwuZm9yID0gJ3Bhc3N3b3JkJztcbiAgcGFzc3dvcmRMYWJlbC5pbm5lclRleHQgPSAnUGFzc3dvcmQnO1xuICAvLyBwYXNzd29yZCBpbnB1dFxuICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcGFzc3dvcmRJbnB1dC5pZCA9ICdwYXNzd29yZCc7XG4gIHBhc3N3b3JkSW5wdXQubmFtZSA9ICdwYXNzd29yZCc7XG4gIHBhc3N3b3JkSW5wdXQudHlwZSA9ICdwYXNzd29yZCc7XG4gIC8vIHZhbGlkaXR5IGNoZWNrXG4gIHBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB2YWxpZGF0ZVBhc3N3b3JkKCkpO1xuICAvLyBhcHBlbmQgcGFzc3dvcmQgaW5wdXRcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChwYXNzd29yZExhYmVsKTtcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChwYXNzd29yZElucHV0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xufTtcblxuY29uc3QgY29uZmlybVBhc3N3b3JkID0gKCkgPT4ge1xuICBjb25zdCBjb25maXJtUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZENvbmZpcm1hdGlvbicpO1xuICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJykudmFsdWU7XG4gIGlmIChjb25maXJtUGFzc3dvcmRJbnB1dC52YWx1ZSAhPT0gcGFzc3dvcmRJbnB1dCkge1xuICAgIGNvbmZpcm1QYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdEb2VzIG5vdCBtYXRjaCcpO1xuICAgIGNvbmZpcm1QYXNzd29yZElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlybVBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVDb25maXJtUGFzc3dvcmRJbnB1dCA9IChjb250YWluZXIpID0+IHtcbiAgLy8gY29uZmlybSBwYXNzd29yZCBjb250YWluZXJcbiAgY29uc3QgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtUm93LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcbiAgLy8gY29uZmlybSBwYXNzd29yZCBsYWJlbFxuICBjb25zdCBjb25maXJtUGFzc3dvcmRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbmZpcm1QYXNzd29yZExhYmVsLmZvciA9ICdwYXNzd29yZENvbmZpcm1hdGlvbic7XG4gIGNvbmZpcm1QYXNzd29yZExhYmVsLmlubmVyVGV4dCA9ICdDb25maXJtIHBhc3N3b3JkJztcbiAgLy8gY29ubmZpcm0gcGFzc3dvcmQgaW5wdXRcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25maXJtUGFzc3dvcmRJbnB1dC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgY29uZmlybVBhc3N3b3JkSW5wdXQuaWQgPSAncGFzc3dvcmRDb25maXJtYXRpb24nO1xuICBjb25maXJtUGFzc3dvcmRJbnB1dC5uYW1lID0gJ3Bhc3N3b3JkQ29uZmlybWF0aW9uJztcbiAgLy8gdmFsaWRpdHkgY2hlY2tcbiAgY29uZmlybVBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBjb25maXJtUGFzc3dvcmQoKSk7XG4gIC8vIGFwcGVuZCBjb25maXJtIHBhc3N3b3JkIGlucHV0XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoY29uZmlybVBhc3N3b3JkTGFiZWwpO1xuICBmb3JtUm93LmFwcGVuZENoaWxkKGNvbmZpcm1QYXNzd29yZElucHV0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xufTtcblxuY29uc3Qgc3VibWl0Rm9ybSA9IChlKSA9PiB7XG4gIC8vIHByZXZlbnQgYWN0dWFsIGZvcm0gc3VibWlzc2lvblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIHZhbGlkYXRlIGZvcm0gZmllbGRzXG4gIGNvbmZpcm1QYXNzd29yZCgpO1xuICB2YWxpZGF0ZVBhc3N3b3JkKCk7XG4gIHZhbGlkYXRlWmlwQ29kZSgpO1xuICB2YWxpZGF0ZUNvdW50cnlJbnB1dCgpO1xuICB2YWxpZGF0ZUVtYWlsKCk7XG59O1xuXG5jb25zdCBjcmVhdGVTdWJtaXRCdXR0b24gPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIHN1Ym1pdCBidXR0b24gY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gIC8vIHN1Ym1pdCBidXR0b25cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdG4nKTtcbiAgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuICAvLyBldmVudCBsaXN0ZW5lclxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gc3VibWl0Rm9ybShlKSk7XG4gIC8vIGFwcGVuZCBzdWJtaXQgYnV0dG9uXG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVGb3JtID0gKGNvbnRhaW5lcikgPT4ge1xuICBjcmVhdGVFbWFpbElucHV0KGNvbnRhaW5lcik7XG4gIGNyZWF0ZUNvdW50cnlJbnB1dChjb250YWluZXIpO1xuICBjcmVhdGVaaXBDb2RlSW5wdXQoY29udGFpbmVyKTtcbiAgY3JlYXRlUGFzc3dvcmRJbnB1dChjb250YWluZXIpO1xuICBjcmVhdGVDb25maXJtUGFzc3dvcmRJbnB1dChjb250YWluZXIpO1xuICBjcmVhdGVTdWJtaXRCdXR0b24oY29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlRm9ybTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgZ2l0aHViSWNvbiBmcm9tICcuL2Fzc2V0cy9HaXRIdWItbGlnaHQtMzJweC5wbmcnO1xuaW1wb3J0IHBsYWNlaG9sZGVySW1nMSBmcm9tICcuL2Fzc2V0cy9JTUdfMTIwMS5qcGcnO1xuaW1wb3J0IHBsYWNlaG9sZGVySW1nMiBmcm9tICcuL2Fzc2V0cy9JTUdfMTIxMi5qcGcnO1xuaW1wb3J0IHBsYWNlaG9sZGVySW1nMyBmcm9tICcuL2Fzc2V0cy9JTUdfODcxNi5qcGcnO1xuaW1wb3J0IHBsYWNlaG9sZGVySW1nNCBmcm9tICcuL2Fzc2V0cy9JTUdfODg1NS5qcGcnO1xuaW1wb3J0IGdlbmVyYXRlRm9ybSBmcm9tICcuL2Zvcm1WYWxpZGF0aW9uJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuLy8gaGVscGVyIGZ1bmN0aW9uc1xuY29uc3QgcHJvY2Vzc01lbnVTZWxlY3Rpb24gPSAoZSkgPT4ge1xuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluTWVudScpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRDb250YWluZXInKTtcblxuICAvLyBkZXNlbGVjdCBhbnkgbWVudSBpdGVtc1xuICBjb25zdCBtZW51Q291bnQgPSBtYWluTWVudS5jaGlsZEVsZW1lbnRDb3VudDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Q291bnQ7IGkrKykge1xuICAgIG1haW5NZW51LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIH1cblxuICAvLyBzZWxlY3QgbmV3IG1lbnUgaXRlbVxuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gIC8vIHRvZ2dsZSBjb250ZW50XG4gIGNvbnN0IGNvbnRlbnRDb3VudCA9IGNvbnRlbnRDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudENvdW50OyBpKyspIHtcbiAgICAvLyBoaWRlIGN1cnJlbnQgY29udGVudFxuICAgIGlmIChjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgPT09IGZhbHNlKSB7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICAvLyBkaXNwbGF5IHNlbGVjdGVkIGNvbnRlbnRcbiAgICBpZiAoY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5pZCA9PT0gZS50YXJnZXQuaWQpIHtcbiAgICAgIGNvbnRlbnRDb250YWluZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9IChpdGVtTmFtZSwgaXRlbUNvbnRhaW5lciwgaXRlbUlkLCBpdGVtQ2xhc3MpID0+IHtcbiAgY29uc3QgbmV3TWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBuZXdNZW51SXRlbS5pZCA9IGAke2l0ZW1JZH1gO1xuXG4gIC8vIGFkZCBjbGFzcyBpZiBvbmUgaXMgZ2l2ZW5cbiAgaWYgKGl0ZW1DbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbmV3TWVudUl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke2l0ZW1DbGFzc31gKTtcbiAgfVxuXG4gIG5ld01lbnVJdGVtLmlubmVyVGV4dCA9IGAke2l0ZW1OYW1lfWA7XG4gIG5ld01lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJyk7XG5cbiAgbmV3TWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcHJvY2Vzc01lbnVTZWxlY3Rpb24oZSkpO1xuXG4gIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3TWVudUl0ZW0pO1xufTtcblxuY29uc3QgYWRkSW1hZ2VUb1Njcm9sbGVyID0gKGltYWdlLCBpLCBzY3JvbGxlciwgY2FwdGlvbikgPT4ge1xuICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWFnZUNvbnRhaW5lcicsICdmYWRlJyk7XG5cbiAgLy8gZGlzcGxheSBpbWFnZSBudW1iZXJcbiAgY29uc3QgaW1hZ2VOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VOdW1iZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2VOdW1iZXInKTtcbiAgaW1hZ2VOdW1iZXIuaW5uZXJUZXh0ID0gYCR7aX0vNGA7XG4gIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlTnVtYmVyKTtcblxuICAvLyBkaXNwbGF5IGltYWdlXG4gIGNvbnN0IG5ld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIG5ld0ltYWdlLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVySW1hZ2UnKTtcbiAgbmV3SW1hZ2Uuc3JjID0gaW1hZ2U7XG4gIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0ltYWdlKTtcblxuICAvLyBkaXNwbGF5IGNhcHRpb25cbiAgaWYgKGNhcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGltYWdlQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlQ2FwdGlvbi5jbGFzc0xpc3QuYWRkKCdpbWFnZUNhcHRpb24nKTtcbiAgICBpbWFnZUNhcHRpb24uaW5uZXJUZXh0ID0gYCR7Y2FwdGlvbn1gO1xuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlQ2FwdGlvbik7XG4gIH1cblxuICBzY3JvbGxlci5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG59O1xuXG5sZXQgc2xpZGVJbmRleCA9IDA7XG5cbmNvbnN0IHNlbGVjdEltYWdlID0gKG4pID0+IHtcbiAgY29uc3Qgc2Nyb2xsZXJJbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWFnZUNvbnRhaW5lcicpO1xuICBjb25zdCBzY3JvbGxlckRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGxlckRvdCcpO1xuXG4gIC8vIGxvb3AgdGhyb3VnaCBpbWFnZXNcbiAgaWYgKG4gPiBzY3JvbGxlckltYWdlcy5sZW5ndGgpIHsgc2xpZGVJbmRleCA9IDE7IH1cbiAgaWYgKG4gPCAxKSB7IHNsaWRlSW5kZXggPSBzY3JvbGxlckltYWdlcy5sZW5ndGg7IH1cblxuICAvLyByZXNldCBpbWFnZSBzZWxlY3Rpb25cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGxlckltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIHNjcm9sbGVySW1hZ2VzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGxlckRvdHMubGVuZ3RoOyBpKyspIHtcbiAgICBzY3JvbGxlckRvdHNbaV0uY2xhc3NOYW1lID0gc2Nyb2xsZXJEb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKCcgc2VsZWN0ZWRJbWFnZScsICcnKTtcbiAgfVxuXG4gIC8vIHNlbGVjdCBuZXcgaW1hZ2VcbiAgc2Nyb2xsZXJJbWFnZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBzY3JvbGxlckRvdHNbc2xpZGVJbmRleCAtIDFdLmNsYXNzTmFtZSArPSAnIHNlbGVjdGVkSW1hZ2UnO1xufTtcblxuY29uc3QgbG9vcEltYWdlU2Nyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNjcm9sbGVySW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1hZ2VDb250YWluZXInKTtcbiAgY29uc3Qgc2Nyb2xsZXJEb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Nyb2xsZXJEb3QnKTtcblxuICAvLyByZXNldCBpbWFnZSBzZWxlY3Rpb25cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGxlckltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIHNjcm9sbGVySW1hZ2VzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGxlckRvdHMubGVuZ3RoOyBpKyspIHtcbiAgICBzY3JvbGxlckRvdHNbaV0uY2xhc3NOYW1lID0gc2Nyb2xsZXJEb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKCcgc2VsZWN0ZWRJbWFnZScsICcnKTtcbiAgfVxuXG4gIC8vIHNlbGVjdCBuZXcgaW1hZ2VcbiAgc2xpZGVJbmRleCsrO1xuICBpZiAoc2xpZGVJbmRleCA+IHNjcm9sbGVySW1hZ2VzLmxlbmd0aCkgeyBzbGlkZUluZGV4ID0gMTsgfVxuICBzY3JvbGxlckltYWdlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHNjcm9sbGVyRG90c1tzbGlkZUluZGV4IC0gMV0uY2xhc3NOYW1lICs9ICcgc2VsZWN0ZWRJbWFnZSc7XG4gIHNldFRpbWVvdXQobG9vcEltYWdlU2Nyb2xsZXIsIDUwMDApOyAvLyBDaGFuZ2UgaW1hZ2UgZXZlcnkgNSBzZWNvbmRzXG59O1xuXG4vLyBwYWdlIGluaXRpYWxpemF0aW9uIGZ1bmN0aW9uc1xuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRlclRpdGxlLmlubmVyVGV4dCA9ICdEeW5hbWljIFVJIEludGVyYWN0aW9ucyc7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufTtcblxuY29uc3QgY3JlYXRlTWFpbk1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5NZW51LmNsYXNzTGlzdC5hZGQoJ21haW5NZW51Jyk7XG5cbiAgY3JlYXRlTWVudUl0ZW0oJ0Ryb3Bkb3duIE1lbnUnLCBtYWluTWVudSwgJ2Ryb3Bkb3duTWVudScsICdzZWxlY3RlZCcpO1xuICBjcmVhdGVNZW51SXRlbSgnTW9iaWxlIE1lbnUnLCBtYWluTWVudSwgJ21vYmlsZU1lbnUnKTtcbiAgY3JlYXRlTWVudUl0ZW0oJ0ltYWdlIFNjcm9sbGVyJywgbWFpbk1lbnUsICdpbWFnZVNjcm9sbGVyJyk7XG4gIGNyZWF0ZU1lbnVJdGVtKCdGb3JtIFZhbGlkYXRpb24nLCBtYWluTWVudSwgJ3ZhbGlkYXRpb25Gb3JtJyk7XG4gIGNyZWF0ZU1lbnVJdGVtKCdBUEkgUHJhY3RpY2UnLCBtYWluTWVudSwgJ0FQSVByYWN0aWNlJyk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChtYWluTWVudSk7XG59O1xuXG5jb25zdCBjcmVhdGVEcm9wZG93bk1lbnUgPSAoY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duTWVudUNvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHJvcGRvd25NZW51Q29udGFpbnRlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gIGRyb3Bkb3duTWVudUNvbnRhaW50ZXIuaWQgPSAnZHJvcGRvd25NZW51JztcblxuICAvLyBjcmVhdGUgZHJvcGRvd24gY29udGFpbmVyXG4gIGNvbnN0IGRyb3Bkb3duQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duQ29udGFpbmVyJywgJ2hpZGRlbicpO1xuXG4gIC8vIGNyZWF0ZSBkcm9wZG93biBvcHRpb25zXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duT3B0aW9uJyk7XG4gICAgZHJvcGRvd25PcHRpb24uaW5uZXJUZXh0ID0gYG9wdGlvbiAke2l9YDtcbiAgICBkcm9wZG93bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkcm9wZG93bk9wdGlvbik7XG4gIH1cblxuICAvLyBjcmVhdGUgZHJvcGRvd24gYnV0dG9uXG4gIGNvbnN0IGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25NZW51Jyk7XG4gIGRyb3Bkb3duTWVudS5pbm5lclRleHQgPSAnZHJvcGRvd24nO1xuICBkcm9wZG93bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgZHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIH0pO1xuXG4gIC8vIEFwcGVuZFxuICBkcm9wZG93bk1lbnUuYXBwZW5kQ2hpbGQoZHJvcGRvd25Db250YWluZXIpO1xuICBkcm9wZG93bk1lbnVDb250YWludGVyLmFwcGVuZENoaWxkKGRyb3Bkb3duTWVudSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcm9wZG93bk1lbnVDb250YWludGVyKTtcblxuICAvLyBjbG9zZSBkcm9wZG93biBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxuICB3aW5kb3cub25jbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKCcuZHJvcGRvd25NZW51JykpIHtcbiAgICAgIGlmIChkcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpID09PSBmYWxzZSkge1xuICAgICAgICBkcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChkcm9wZG93bk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgIGRyb3Bkb3duTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vYmlsZU1lbnUgPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIGNyZWF0ZSBjb250ZW50IGNvbnRhaW5lclxuICBjb25zdCBtb2JpbGVNZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2JpbGVNZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2JpbGVNZW51Q29udGVudCcsICdjb250ZW50JywgJ2hpZGRlbicpO1xuICBtb2JpbGVNZW51Q29udGVudC5pZCA9ICdtb2JpbGVNZW51JztcblxuICAvLyBjcmVhdGUgbWVudSB0aXRsZVxuICBjb25zdCBtb2JpbGVNZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBtb2JpbGVNZW51VGl0bGUuaW5uZXJUZXh0ID0gJ0hvcml6b250YWwgc2Nyb2xsaW5nIG5hdic7XG5cbiAgLy8gY3JlYXRlIG1vYmlsZSBtZW51IGNvbnRhaW5lclxuICBjb25zdCBtb2JpbGVNZW51VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICBjb25zdCBtb2JpbGVNZW51Q29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIG1vYmlsZU1lbnVDb250YWludGVyLmNsYXNzTGlzdC5hZGQoJ21vYmlsZU1lbnVDb250YWluZXInKTtcbiAgLy8gbWFrZXMgc2Nyb2xsd2hlZWwgZnVuY3Rpb25hbCB3aXRoIGhvcml6b250YWwgc2Nyb2xsaW5nXG4gIG1vYmlsZU1lbnVDb250YWludGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbW9iaWxlTWVudUNvbnRhaW50ZXIuc2Nyb2xsTGVmdCArPSBlLmRlbHRhWTtcbiAgfSk7XG5cbiAgLy8gY3JlYXRlIG1vYmlsZSBtZW51IG9wdGlvbnNcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjA7IGkrKykge1xuICAgIGNvbnN0IG1vYmlsZU1lbnVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIG1vYmlsZU1lbnVPcHRpb24uY2xhc3NMaXN0LmFkZCgnbW9iaWxlTWVudU9wdGlvbicpO1xuICAgIG1vYmlsZU1lbnVPcHRpb24uaW5uZXJUZXh0ID0gYG1vYmlsZSBvcHRpb24gJHtpfWA7XG4gICAgbW9iaWxlTWVudU9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIGRlc2VsZWN0IGFsbCBtZW51IGl0ZW1zXG4gICAgICBjb25zdCBtb2JpbGVNZW51Q291bnQgPSBtb2JpbGVNZW51Q29udGFpbnRlci5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9iaWxlTWVudUNvdW50OyBpKyspIHtcbiAgICAgICAgaWYgKG1vYmlsZU1lbnVDb250YWludGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG1vYmlsZU1lbnVDb250YWludGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIG1ha2UgbmV3IHNlbGVjdGlvblxuICAgICAgbW9iaWxlTWVudU9wdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xuICAgIG1vYmlsZU1lbnVDb250YWludGVyLmFwcGVuZENoaWxkKG1vYmlsZU1lbnVPcHRpb24pO1xuICB9XG5cbiAgLy8gQXBwZW5kXG4gIG1vYmlsZU1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1vYmlsZU1lbnVUaXRsZSk7XG4gIG1vYmlsZU1lbnVUYWJsZS5hcHBlbmRDaGlsZChtb2JpbGVNZW51Q29udGFpbnRlcik7XG4gIG1vYmlsZU1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1vYmlsZU1lbnVUYWJsZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2JpbGVNZW51Q29udGVudCk7XG59O1xuXG5jb25zdCBjcmVhdGVJbWFnZVNjcm9sbGVyID0gKGNvbnRhaW5lcikgPT4ge1xuICBjb25zdCBpbWFnZVNjcm9sbGVyQ29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZVNjcm9sbGVyQ29udGFpbnRlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50JywgJ2hpZGRlbicpO1xuICBpbWFnZVNjcm9sbGVyQ29udGFpbnRlci5pZCA9ICdpbWFnZVNjcm9sbGVyJztcblxuICBjb25zdCBpbWFnZVNjcm9sbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlU2Nyb2xsZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2VTY3JvbGxlcicpO1xuXG4gIC8vIGFkZCBpbWFnZXNcbiAgYWRkSW1hZ2VUb1Njcm9sbGVyKHBsYWNlaG9sZGVySW1nMSwgMSwgaW1hZ2VTY3JvbGxlciwgJ1ZpZXcgb2YgRGlhbW9uZCBIZWFkICYgSG9ub2x1bHUsIE9haHUnKTtcbiAgYWRkSW1hZ2VUb1Njcm9sbGVyKHBsYWNlaG9sZGVySW1nMiwgMiwgaW1hZ2VTY3JvbGxlciwgJ0p1cmFzc2ljIFBhcmsgVmFsbGV5LCBLdWFsb2EgUmFuY2gsIE9haHUnKTtcbiAgYWRkSW1hZ2VUb1Njcm9sbGVyKHBsYWNlaG9sZGVySW1nMywgMywgaW1hZ2VTY3JvbGxlciwgJ1JhaW5ib3cgb24gT2FodScpO1xuICBhZGRJbWFnZVRvU2Nyb2xsZXIocGxhY2Vob2xkZXJJbWc0LCA0LCBpbWFnZVNjcm9sbGVyLCAnVHVydGxlIG9uIHRoZSBiZWFjaCBuZWFyIEhhbGVpd2EsIE9haHUnKTtcblxuICAvLyBhZGQgcHJldmlvdXMgYnV0dG9uXG4gIGNvbnN0IHByZXZpb3VzSW1hZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHByZXZpb3VzSW1hZ2VCdG4uY2xhc3NMaXN0LmFkZCgncHJldmlvdXNJbWFnZUJ0bicpO1xuICBwcmV2aW91c0ltYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzZWxlY3RJbWFnZShzbGlkZUluZGV4ICs9IC0xKTsgfSk7XG4gIC8vIGRpc3BsYXkgcHJldmlvdXMgYXJyb3dcbiAgcHJldmlvdXNJbWFnZUJ0bi5pbm5lckhUTUwgPSAnJiMxMDA5NDsnO1xuXG4gIC8vIGFkZCBuZXh0IGJ1dHRvblxuICBjb25zdCBuZXh0SW1hZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIG5leHRJbWFnZUJ0bi5jbGFzc0xpc3QuYWRkKCduZXh0SW1hZ2VCdG4nKTtcbiAgbmV4dEltYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzZWxlY3RJbWFnZShzbGlkZUluZGV4ICs9IDEpOyB9KTtcbiAgLy8gZGlzcGxheSBuZXh0IGFycm93XG4gIG5leHRJbWFnZUJ0bi5pbm5lckhUTUwgPSAnJiMxMDA5NTsnO1xuXG4gIC8vIGFkZCBpbWFnZSBzZWxlY3Rpb24gZG90c1xuICBjb25zdCBzY3JvbGxlckRvdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY3JvbGxlckRvdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlckRvdENvbnRhaW5lcicpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICBjb25zdCBuZXdEb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmV3RG90LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVyRG90Jyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgIG5ld0RvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2VsZWN0SW1hZ2Uoc2xpZGVJbmRleCA9IGkpOyB9KTtcbiAgICBzY3JvbGxlckRvdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEb3QpO1xuICB9XG5cbiAgLy8gYXBwZW5kXG4gIGltYWdlU2Nyb2xsZXIuYXBwZW5kQ2hpbGQocHJldmlvdXNJbWFnZUJ0bik7XG4gIGltYWdlU2Nyb2xsZXIuYXBwZW5kQ2hpbGQobmV4dEltYWdlQnRuKTtcbiAgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoaW1hZ2VTY3JvbGxlcik7XG4gIGltYWdlU2Nyb2xsZXJDb250YWludGVyLmFwcGVuZENoaWxkKHNjcm9sbGVyRG90Q29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlU2Nyb2xsZXJDb250YWludGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVZhbGlkYXRpb25Gb3JtID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBjcmVhdGUgZm9ybSB2YWxpZGF0aW9uIGNvbnRhaW5lclxuICBjb25zdCB2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFsaWRhdGlvbkZvcm1Db250YWludGVyLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb25Gb3JtQ29udGFpbnRlcicsICdjb250ZW50JywgJ2hpZGRlbicpO1xuICB2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIuaWQgPSAndmFsaWRhdGlvbkZvcm0nO1xuXG4gIC8vIGNyZWF0ZSBmb3JtIGhlYWRlclxuICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1IZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUhlYWRlcicpO1xuXG4gIC8vIGZvcm0gdGl0bGVcbiAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgZm9ybVRpdGxlLmlubmVyVGV4dCA9ICdFeGFtcGxlIGZvcm0nO1xuXG4gIC8vIGNyZWF0ZSBmb3JtXG4gIGNvbnN0IHZhbGlkYXRpb25Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICB2YWxpZGF0aW9uRm9ybS5jbGFzc0xpc3QuYWRkKCd2YWxpZGF0aW9uRm9ybScpO1xuICB2YWxpZGF0aW9uRm9ybS5hdXRvY29tcGxldGUgPSAnb2ZmJztcblxuICBnZW5lcmF0ZUZvcm0odmFsaWRhdGlvbkZvcm0pO1xuXG4gIC8vIGFwcGVuZFxuICBmb3JtSGVhZGVyLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG4gIHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlci5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcbiAgdmFsaWRhdGlvbkZvcm1Db250YWludGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICB2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQodmFsaWRhdGlvbkZvcm0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmFsaWRhdGlvbkZvcm1Db250YWludGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFQSVByYWN0aWNlID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBjcmVhdCBBUEkgaW1hZ2UgY29udGFpbmVyXG4gIGNvbnN0IEFQSVByYWN0aWNlQ29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBBUElQcmFjdGljZUNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnQVBJUHJhY3RpY2VDb250YWludGVyJywgJ2NvbnRlbnQnLCAnaGlkZGVuJyk7XG4gIEFQSVByYWN0aWNlQ29udGFpbnRlci5pZCA9ICdBUElQcmFjdGljZSc7XG5cbiAgLy8gY3JlYXRlIEFQSSB0aXRsZVxuICBjb25zdCBBUElUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIEFQSVRpdGxlLmlubmVyVGV4dCA9ICdEb2dzIHBsYXlpbmcnO1xuXG4gIC8vIGNyZWF0ZSBBUEkgaW1nXG4gIGNvbnN0IEFQSVByYWN0aWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIEFQSVByYWN0aWNlLmNsYXNzTGlzdC5hZGQoJ0FQSVByYWN0aWNlJyk7XG5cbiAgLy8gZmV0Y2ggaW1nXG4gIGZldGNoKCdodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT1sNFZFVWo1Q0FRVVVMcGZqZXNKY01KYTUycVZTVVZaNSZzPWRvZ3MlMjBwbGF5aW5nJywgeyBtb2RlOiAnY29ycycgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIEFQSVByYWN0aWNlLnNyYyA9IHJlc3BvbnNlLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICB9KTtcblxuICAvLyBBcHBlbmRcbiAgQVBJUHJhY3RpY2VDb250YWludGVyLmFwcGVuZENoaWxkKEFQSVRpdGxlKTtcbiAgQVBJUHJhY3RpY2VDb250YWludGVyLmFwcGVuZENoaWxkKEFQSVByYWN0aWNlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKEFQSVByYWN0aWNlQ29udGFpbnRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVDb250ZW50Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q29udGFpbnRlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50Q29udGFpbmVyJyk7XG5cbiAgY3JlYXRlRHJvcGRvd25NZW51KGNvbnRlbnRDb250YWludGVyKTtcbiAgY3JlYXRlTW9iaWxlTWVudShjb250ZW50Q29udGFpbnRlcik7XG4gIGNyZWF0ZUltYWdlU2Nyb2xsZXIoY29udGVudENvbnRhaW50ZXIpO1xuICBjcmVhdGVWYWxpZGF0aW9uRm9ybShjb250ZW50Q29udGFpbnRlcik7XG4gIGNyZWF0ZUFQSVByYWN0aWNlKGNvbnRlbnRDb250YWludGVyKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWludGVyKTtcbiAgbG9vcEltYWdlU2Nyb2xsZXIoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBqY2FtcGJlbGw1N2A7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Nyc7XG4gIGdpdGh1YkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG5cbiAgY29uc3QgbmV3R2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBuZXdHaXRodWJJY29uLnNyYyA9IGdpdGh1Ykljb247XG4gIG5ld0dpdGh1Ykljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdnaXRodWInKTtcblxuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKG5ld0dpdGh1Ykljb24pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjcmVhdGVNYWluTWVudSgpO1xuICBjcmVhdGVDb250ZW50Q29udGFpbmVyKCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZTtcbiJdLCJuYW1lcyI6WyJjb3VudHJ5TGlzdEFscGhhMiIsIkFGIiwiQUwiLCJEWiIsIkFTIiwiQUQiLCJBTyIsIkFJIiwiQVEiLCJBRyIsIkFSIiwiQU0iLCJBVyIsIkFVIiwiQVQiLCJBWiIsIkJTIiwiQkgiLCJCRCIsIkJCIiwiQlkiLCJCRSIsIkJaIiwiQkoiLCJCTSIsIkJUIiwiQk8iLCJCUSIsIkJBIiwiQlciLCJCViIsIkJSIiwiSU8iLCJCTiIsIkJHIiwiQkYiLCJCSSIsIkNWIiwiS0giLCJDTSIsIkNBIiwiS1kiLCJDRiIsIlREIiwiQ0wiLCJDTiIsIkNYIiwiQ0MiLCJDTyIsIktNIiwiQ0QiLCJDRyIsIkNLIiwiQ1IiLCJIUiIsIkNVIiwiQ1ciLCJDWSIsIkNaIiwiQ0kiLCJESyIsIkRKIiwiRE0iLCJETyIsIkVDIiwiRUciLCJTViIsIkdRIiwiRVIiLCJFRSIsIlNaIiwiRVQiLCJGSyIsIkZPIiwiRkoiLCJGSSIsIkZSIiwiR0YiLCJQRiIsIlRGIiwiR0EiLCJHTSIsIkdFIiwiREUiLCJHSCIsIkdJIiwiR1IiLCJHTCIsIkdEIiwiR1AiLCJHVSIsIkdUIiwiR0ciLCJHTiIsIkdXIiwiR1kiLCJIVCIsIkhNIiwiVkEiLCJITiIsIkhLIiwiSFUiLCJJUyIsIklOIiwiSUQiLCJJUiIsIklRIiwiSUUiLCJJTSIsIklMIiwiSVQiLCJKTSIsIkpQIiwiSkUiLCJKTyIsIktaIiwiS0UiLCJLSSIsIktQIiwiS1IiLCJLVyIsIktHIiwiTEEiLCJMViIsIkxCIiwiTFMiLCJMUiIsIkxZIiwiTEkiLCJMVCIsIkxVIiwiTU8iLCJNRyIsIk1XIiwiTVkiLCJNViIsIk1MIiwiTVQiLCJNSCIsIk1RIiwiTVIiLCJNVSIsIllUIiwiTVgiLCJGTSIsIk1EIiwiTUMiLCJNTiIsIk1FIiwiTVMiLCJNQSIsIk1aIiwiTU0iLCJOQSIsIk5SIiwiTlAiLCJOTCIsIk5DIiwiTloiLCJOSSIsIk5FIiwiTkciLCJOVSIsIk5GIiwiTVAiLCJOTyIsIk9NIiwiUEsiLCJQVyIsIlBTIiwiUEEiLCJQRyIsIlBZIiwiUEUiLCJQSCIsIlBOIiwiUEwiLCJQVCIsIlBSIiwiUUEiLCJNSyIsIlJPIiwiUlUiLCJSVyIsIlJFIiwiQkwiLCJTSCIsIktOIiwiTEMiLCJNRiIsIlBNIiwiVkMiLCJXUyIsIlNNIiwiU1QiLCJTQSIsIlNOIiwiUlMiLCJTQyIsIlNMIiwiU0ciLCJTWCIsIlNLIiwiU0kiLCJTQiIsIlNPIiwiWkEiLCJHUyIsIlNTIiwiRVMiLCJMSyIsIlNEIiwiU1IiLCJTSiIsIlNFIiwiQ0giLCJTWSIsIlRXIiwiVEoiLCJUWiIsIlRIIiwiVEwiLCJURyIsIlRLIiwiVE8iLCJUVCIsIlROIiwiVFIiLCJUTSIsIlRDIiwiVFYiLCJVRyIsIlVBIiwiQUUiLCJHQiIsIlVNIiwiVVMiLCJVWSIsIlVaIiwiVlUiLCJWRSIsIlZOIiwiVkciLCJWSSIsIldGIiwiRUgiLCJZRSIsIlpNIiwiWlciLCJBWCIsInZhbGlkYXRlRW1haWwiLCJlbWFpbElucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbGlkaXR5IiwidHlwZU1pc21hdGNoIiwidmFsdWUiLCJzZXRDdXN0b21WYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiY3JlYXRlRW1haWxJbnB1dCIsImNvbnRhaW5lciIsImZvcm1Sb3ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZW1haWxMYWJlbCIsImZvciIsImlubmVyVGV4dCIsImlkIiwibmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBlbmRDaGlsZCIsInZhbGlkYXRlQ291bnRyeUlucHV0IiwiY291bnRyeVNlbGVjdGlvbiIsImNyZWF0ZUNvdW50cnlJbnB1dCIsImNvdW50cnlMYWJlbCIsImJsYW5rT3B0aW9uIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJuZXdPcHRpb24iLCJ2YWxpZGF0ZVppcENvZGUiLCJ6aXBDb2RlSW5wdXQiLCJ0ZXN0IiwiY3JlYXRlWmlwQ29kZUlucHV0IiwiemlwQ29kZUxhYmVsIiwidmFsaWRhdGVQYXNzd29yZCIsInBhc3N3b3JkSW5wdXQiLCJsZW5ndGgiLCJjcmVhdGVQYXNzd29yZElucHV0IiwicGFzc3dvcmRMYWJlbCIsImNvbmZpcm1QYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZElucHV0IiwiY3JlYXRlQ29uZmlybVBhc3N3b3JkSW5wdXQiLCJjb25maXJtUGFzc3dvcmRMYWJlbCIsInN1Ym1pdEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVTdWJtaXRCdXR0b24iLCJzdWJtaXRCdG4iLCJnZW5lcmF0ZUZvcm0iLCJnaXRodWJJY29uIiwicGxhY2Vob2xkZXJJbWcxIiwicGxhY2Vob2xkZXJJbWcyIiwicGxhY2Vob2xkZXJJbWczIiwicGxhY2Vob2xkZXJJbWc0IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9jZXNzTWVudVNlbGVjdGlvbiIsIm1haW5NZW51IiwiY29udGVudENvbnRhaW5lciIsIm1lbnVDb3VudCIsImNoaWxkRWxlbWVudENvdW50IiwiaSIsImNoaWxkcmVuIiwicmVtb3ZlIiwidGFyZ2V0IiwiY29udGVudENvdW50IiwiY29udGFpbnMiLCJjcmVhdGVNZW51SXRlbSIsIml0ZW1OYW1lIiwiaXRlbUNvbnRhaW5lciIsIml0ZW1JZCIsIml0ZW1DbGFzcyIsIm5ld01lbnVJdGVtIiwidW5kZWZpbmVkIiwic2V0QXR0cmlidXRlIiwiYWRkSW1hZ2VUb1Njcm9sbGVyIiwiaW1hZ2UiLCJzY3JvbGxlciIsImNhcHRpb24iLCJpbWFnZUNvbnRhaW5lciIsImltYWdlTnVtYmVyIiwibmV3SW1hZ2UiLCJzcmMiLCJpbWFnZUNhcHRpb24iLCJzbGlkZUluZGV4Iiwic2VsZWN0SW1hZ2UiLCJuIiwic2Nyb2xsZXJJbWFnZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2Nyb2xsZXJEb3RzIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwicmVwbGFjZSIsImxvb3BJbWFnZVNjcm9sbGVyIiwic2V0VGltZW91dCIsImNyZWF0ZUhlYWRlciIsImhlYWRlciIsImhlYWRlclRpdGxlIiwiY3JlYXRlTWFpbk1lbnUiLCJjcmVhdGVEcm9wZG93bk1lbnUiLCJkcm9wZG93bk1lbnVDb250YWludGVyIiwiZHJvcGRvd25Db250YWluZXIiLCJkcm9wZG93bk9wdGlvbiIsImRyb3Bkb3duTWVudSIsInRvZ2dsZSIsIndpbmRvdyIsIm9uY2xpY2siLCJtYXRjaGVzIiwiY3JlYXRlTW9iaWxlTWVudSIsIm1vYmlsZU1lbnVDb250ZW50IiwibW9iaWxlTWVudVRpdGxlIiwibW9iaWxlTWVudVRhYmxlIiwibW9iaWxlTWVudUNvbnRhaW50ZXIiLCJzY3JvbGxMZWZ0IiwiZGVsdGFZIiwibW9iaWxlTWVudU9wdGlvbiIsIm1vYmlsZU1lbnVDb3VudCIsImNyZWF0ZUltYWdlU2Nyb2xsZXIiLCJpbWFnZVNjcm9sbGVyQ29udGFpbnRlciIsImltYWdlU2Nyb2xsZXIiLCJwcmV2aW91c0ltYWdlQnRuIiwiaW5uZXJIVE1MIiwibmV4dEltYWdlQnRuIiwic2Nyb2xsZXJEb3RDb250YWluZXIiLCJuZXdEb3QiLCJjcmVhdGVWYWxpZGF0aW9uRm9ybSIsInZhbGlkYXRpb25Gb3JtQ29udGFpbnRlciIsImZvcm1IZWFkZXIiLCJmb3JtVGl0bGUiLCJ2YWxpZGF0aW9uRm9ybSIsImF1dG9jb21wbGV0ZSIsImNyZWF0ZUFQSVByYWN0aWNlIiwiQVBJUHJhY3RpY2VDb250YWludGVyIiwiQVBJVGl0bGUiLCJBUElQcmFjdGljZSIsImZldGNoIiwibW9kZSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiaW1hZ2VzIiwib3JpZ2luYWwiLCJ1cmwiLCJjcmVhdGVDb250ZW50Q29udGFpbmVyIiwiY29udGVudENvbnRhaW50ZXIiLCJjcmVhdGVGb290ZXIiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJ0ZXh0Q29udGVudCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdpdGh1YkxpbmsiLCJocmVmIiwibmV3R2l0aHViSWNvbiIsImluaXRpYWxpemUiXSwic291cmNlUm9vdCI6IiJ9