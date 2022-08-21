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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWRlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxpQkFBaUIsR0FBRztFQUN4QkMsRUFBRSxFQUFFLGFBRG9CO0VBRXhCQyxFQUFFLEVBQUUsU0FGb0I7RUFHeEJDLEVBQUUsRUFBRSxTQUhvQjtFQUl4QkMsRUFBRSxFQUFFLGdCQUpvQjtFQUt4QkMsRUFBRSxFQUFFLFNBTG9CO0VBTXhCQyxFQUFFLEVBQUUsUUFOb0I7RUFPeEJDLEVBQUUsRUFBRSxVQVBvQjtFQVF4QkMsRUFBRSxFQUFFLFlBUm9CO0VBU3hCQyxFQUFFLEVBQUUscUJBVG9CO0VBVXhCQyxFQUFFLEVBQUUsV0FWb0I7RUFXeEJDLEVBQUUsRUFBRSxTQVhvQjtFQVl4QkMsRUFBRSxFQUFFLE9BWm9CO0VBYXhCQyxFQUFFLEVBQUUsV0Fib0I7RUFjeEJDLEVBQUUsRUFBRSxTQWRvQjtFQWV4QkMsRUFBRSxFQUFFLFlBZm9CO0VBZ0J4QkMsRUFBRSxFQUFFLGVBaEJvQjtFQWlCeEJDLEVBQUUsRUFBRSxTQWpCb0I7RUFrQnhCQyxFQUFFLEVBQUUsWUFsQm9CO0VBbUJ4QkMsRUFBRSxFQUFFLFVBbkJvQjtFQW9CeEJDLEVBQUUsRUFBRSxTQXBCb0I7RUFxQnhCQyxFQUFFLEVBQUUsU0FyQm9CO0VBc0J4QkMsRUFBRSxFQUFFLFFBdEJvQjtFQXVCeEJDLEVBQUUsRUFBRSxPQXZCb0I7RUF3QnhCQyxFQUFFLEVBQUUsU0F4Qm9CO0VBeUJ4QkMsRUFBRSxFQUFFLFFBekJvQjtFQTBCeEJDLEVBQUUsRUFBRSxrQ0ExQm9CO0VBMkJ4QkMsRUFBRSxFQUFFLGtDQTNCb0I7RUE0QnhCQyxFQUFFLEVBQUUsd0JBNUJvQjtFQTZCeEJDLEVBQUUsRUFBRSxVQTdCb0I7RUE4QnhCQyxFQUFFLEVBQUUsZUE5Qm9CO0VBK0J4QkMsRUFBRSxFQUFFLFFBL0JvQjtFQWdDeEJDLEVBQUUsRUFBRSxzQ0FoQ29CO0VBaUN4QkMsRUFBRSxFQUFFLG1CQWpDb0I7RUFrQ3hCQyxFQUFFLEVBQUUsVUFsQ29CO0VBbUN4QkMsRUFBRSxFQUFFLGNBbkNvQjtFQW9DeEJDLEVBQUUsRUFBRSxTQXBDb0I7RUFxQ3hCQyxFQUFFLEVBQUUsWUFyQ29CO0VBc0N4QkMsRUFBRSxFQUFFLFVBdENvQjtFQXVDeEJDLEVBQUUsRUFBRSxVQXZDb0I7RUF3Q3hCQyxFQUFFLEVBQUUsUUF4Q29CO0VBeUN4QkMsRUFBRSxFQUFFLHNCQXpDb0I7RUEwQ3hCQyxFQUFFLEVBQUUsZ0NBMUNvQjtFQTJDeEJDLEVBQUUsRUFBRSxNQTNDb0I7RUE0Q3hCQyxFQUFFLEVBQUUsT0E1Q29CO0VBNkN4QkMsRUFBRSxFQUFFLE9BN0NvQjtFQThDeEJDLEVBQUUsRUFBRSxrQkE5Q29CO0VBK0N4QkMsRUFBRSxFQUFFLCtCQS9Db0I7RUFnRHhCQyxFQUFFLEVBQUUsVUFoRG9CO0VBaUR4QkMsRUFBRSxFQUFFLGVBakRvQjtFQWtEeEJDLEVBQUUsRUFBRSx3Q0FsRG9CO0VBbUR4QkMsRUFBRSxFQUFFLGFBbkRvQjtFQW9EeEJDLEVBQUUsRUFBRSxvQkFwRG9CO0VBcUR4QkMsRUFBRSxFQUFFLFlBckRvQjtFQXNEeEJDLEVBQUUsRUFBRSxTQXREb0I7RUF1RHhCQyxFQUFFLEVBQUUsTUF2RG9CO0VBd0R4QkMsRUFBRSxFQUFFLFNBeERvQjtFQXlEeEJDLEVBQUUsRUFBRSxRQXpEb0I7RUEwRHhCQyxFQUFFLEVBQUUsU0ExRG9CO0VBMkR4QkMsRUFBRSxFQUFFLGVBM0RvQjtFQTREeEJDLEVBQUUsRUFBRSxTQTVEb0I7RUE2RHhCQyxFQUFFLEVBQUUsVUE3RG9CO0VBOER4QkMsRUFBRSxFQUFFLFVBOURvQjtFQStEeEJDLEVBQUUsRUFBRSwwQkEvRG9CO0VBZ0V4QkMsRUFBRSxFQUFFLFNBaEVvQjtFQWlFeEJDLEVBQUUsRUFBRSxPQWpFb0I7RUFrRXhCQyxFQUFFLEVBQUUsYUFsRW9CO0VBbUV4QkMsRUFBRSxFQUFFLG1CQW5Fb0I7RUFvRXhCQyxFQUFFLEVBQUUsU0FwRW9CO0VBcUV4QkMsRUFBRSxFQUFFLFNBckVvQjtFQXNFeEJDLEVBQUUsRUFBRSxVQXRFb0I7RUF1RXhCQyxFQUFFLEVBQUUsVUF2RW9CO0VBd0V4QkMsRUFBRSxFQUFFLG1DQXhFb0I7RUF5RXhCQyxFQUFFLEVBQUUscUJBekVvQjtFQTBFeEJDLEVBQUUsRUFBRSxNQTFFb0I7RUEyRXhCQyxFQUFFLEVBQUUsU0EzRW9CO0VBNEV4QkMsRUFBRSxFQUFFLFFBNUVvQjtFQTZFeEJDLEVBQUUsRUFBRSxlQTdFb0I7RUE4RXhCQyxFQUFFLEVBQUUsa0JBOUVvQjtFQStFeEJDLEVBQUUsRUFBRSxtQ0EvRW9CO0VBZ0Z4QkMsRUFBRSxFQUFFLE9BaEZvQjtFQWlGeEJDLEVBQUUsRUFBRSxjQWpGb0I7RUFrRnhCQyxFQUFFLEVBQUUsU0FsRm9CO0VBbUZ4QkMsRUFBRSxFQUFFLFNBbkZvQjtFQW9GeEJDLEVBQUUsRUFBRSxPQXBGb0I7RUFxRnhCQyxFQUFFLEVBQUUsV0FyRm9CO0VBc0Z4QkMsRUFBRSxFQUFFLFFBdEZvQjtFQXVGeEJDLEVBQUUsRUFBRSxXQXZGb0I7RUF3RnhCQyxFQUFFLEVBQUUsU0F4Rm9CO0VBeUZ4QkMsRUFBRSxFQUFFLFlBekZvQjtFQTBGeEJDLEVBQUUsRUFBRSxNQTFGb0I7RUEyRnhCQyxFQUFFLEVBQUUsV0EzRm9CO0VBNEZ4QkMsRUFBRSxFQUFFLFVBNUZvQjtFQTZGeEJDLEVBQUUsRUFBRSxRQTdGb0I7RUE4RnhCQyxFQUFFLEVBQUUsZUE5Rm9CO0VBK0Z4QkMsRUFBRSxFQUFFLFFBL0ZvQjtFQWdHeEJDLEVBQUUsRUFBRSxPQWhHb0I7RUFpR3hCQyxFQUFFLEVBQUUsbUNBakdvQjtFQWtHeEJDLEVBQUUsRUFBRSxnQkFsR29CO0VBbUd4QkMsRUFBRSxFQUFFLFVBbkdvQjtFQW9HeEJDLEVBQUUsRUFBRSxXQXBHb0I7RUFxR3hCQyxFQUFFLEVBQUUsU0FyR29CO0VBc0d4QkMsRUFBRSxFQUFFLFNBdEdvQjtFQXVHeEJDLEVBQUUsRUFBRSxPQXZHb0I7RUF3R3hCQyxFQUFFLEVBQUUsV0F4R29CO0VBeUd4QkMsRUFBRSxFQUFFLDRCQXpHb0I7RUEwR3hCQyxFQUFFLEVBQUUsTUExR29CO0VBMkd4QkMsRUFBRSxFQUFFLFNBM0dvQjtFQTRHeEJDLEVBQUUsRUFBRSxhQTVHb0I7RUE2R3hCQyxFQUFFLEVBQUUsUUE3R29CO0VBOEd4QkMsRUFBRSxFQUFFLE9BOUdvQjtFQStHeEJDLEVBQUUsRUFBRSxTQS9Hb0I7RUFnSHhCQyxFQUFFLEVBQUUsT0FoSG9CO0VBaUh4QkMsRUFBRSxFQUFFLFFBakhvQjtFQWtIeEJDLEVBQUUsRUFBRSxRQWxIb0I7RUFtSHhCQyxFQUFFLEVBQUUsWUFuSG9CO0VBb0h4QkMsRUFBRSxFQUFFLE9BcEhvQjtFQXFIeEJDLEVBQUUsRUFBRSxVQXJIb0I7RUFzSHhCQyxFQUFFLEVBQUUsNkNBdEhvQjtFQXVIeEJDLEVBQUUsRUFBRSx5QkF2SG9CO0VBd0h4QkMsRUFBRSxFQUFFLFFBeEhvQjtFQXlIeEJDLEVBQUUsRUFBRSxZQXpIb0I7RUEwSHhCQyxFQUFFLEVBQUUsd0NBMUhvQjtFQTJIeEJDLEVBQUUsRUFBRSxRQTNIb0I7RUE0SHhCQyxFQUFFLEVBQUUsU0E1SG9CO0VBNkh4QkMsRUFBRSxFQUFFLFNBN0hvQjtFQThIeEJDLEVBQUUsRUFBRSxTQTlIb0I7RUErSHhCQyxFQUFFLEVBQUUsT0EvSG9CO0VBZ0l4QkMsRUFBRSxFQUFFLGVBaElvQjtFQWlJeEJDLEVBQUUsRUFBRSxXQWpJb0I7RUFrSXhCQyxFQUFFLEVBQUUsWUFsSW9CO0VBbUl4QkMsRUFBRSxFQUFFLE9BbklvQjtFQW9JeEJDLEVBQUUsRUFBRSxZQXBJb0I7RUFxSXhCQyxFQUFFLEVBQUUsUUFySW9CO0VBc0l4QkMsRUFBRSxFQUFFLFVBdElvQjtFQXVJeEJDLEVBQUUsRUFBRSxVQXZJb0I7RUF3SXhCQyxFQUFFLEVBQUUsTUF4SW9CO0VBeUl4QkMsRUFBRSxFQUFFLE9BeklvQjtFQTBJeEJDLEVBQUUsRUFBRSx3QkExSW9CO0VBMkl4QkMsRUFBRSxFQUFFLFlBM0lvQjtFQTRJeEJDLEVBQUUsRUFBRSxZQTVJb0I7RUE2SXhCQyxFQUFFLEVBQUUsV0E3SW9CO0VBOEl4QkMsRUFBRSxFQUFFLFNBOUlvQjtFQStJeEJDLEVBQUUsRUFBRSxRQS9Jb0I7RUFnSnhCQyxFQUFFLEVBQUUsa0NBaEpvQjtFQWlKeEJDLEVBQUUsRUFBRSwyQkFqSm9CO0VBa0p4QkMsRUFBRSxFQUFFLFFBbEpvQjtFQW1KeEJDLEVBQUUsRUFBRSxVQW5Kb0I7RUFvSnhCQyxFQUFFLEVBQUUsWUFwSm9CO0VBcUp4QkMsRUFBRSxFQUFFLFlBckpvQjtFQXNKeEJDLEVBQUUsRUFBRSxTQXRKb0I7RUF1SnhCQyxFQUFFLEVBQUUsWUF2Sm9CO0VBd0p4QkMsRUFBRSxFQUFFLFNBeEpvQjtFQXlKeEJDLEVBQUUsRUFBRSxTQXpKb0I7RUEwSnhCQyxFQUFFLEVBQUUsT0ExSm9CO0VBMkp4QkMsRUFBRSxFQUFFLE9BM0pvQjtFQTRKeEJDLEVBQUUsRUFBRSxtQkE1Sm9CO0VBNkp4QkMsRUFBRSxFQUFFLGVBN0pvQjtFQThKeEJDLEVBQUUsRUFBRSxhQTlKb0I7RUErSnhCQyxFQUFFLEVBQUUsV0EvSm9CO0VBZ0t4QkMsRUFBRSxFQUFFLGFBaEtvQjtFQWlLeEJDLEVBQUUsRUFBRSxTQWpLb0I7RUFrS3hCQyxFQUFFLEVBQUUsTUFsS29CO0VBbUt4QkMsRUFBRSxFQUFFLGdCQW5Lb0I7RUFvS3hCQyxFQUFFLEVBQUUsZ0NBcEtvQjtFQXFLeEJDLEVBQUUsRUFBRSxRQXJLb0I7RUFzS3hCQyxFQUFFLEVBQUUsTUF0S29CO0VBdUt4QkMsRUFBRSxFQUFFLFVBdktvQjtFQXdLeEJDLEVBQUUsRUFBRSxPQXhLb0I7RUF5S3hCQyxFQUFFLEVBQUUscUJBektvQjtFQTBLeEJDLEVBQUUsRUFBRSxRQTFLb0I7RUEyS3hCQyxFQUFFLEVBQUUsa0JBM0tvQjtFQTRLeEJDLEVBQUUsRUFBRSxVQTVLb0I7RUE2S3hCQyxFQUFFLEVBQUUsTUE3S29CO0VBOEt4QkMsRUFBRSxFQUFFLG1CQTlLb0I7RUErS3hCQyxFQUFFLEVBQUUsVUEvS29CO0VBZ0x4QkMsRUFBRSxFQUFFLFFBaExvQjtFQWlMeEJDLEVBQUUsRUFBRSxVQWpMb0I7RUFrTHhCQyxFQUFFLEVBQUUsYUFsTG9CO0VBbUx4QkMsRUFBRSxFQUFFLE9BbkxvQjtFQW9MeEJDLEVBQUUsRUFBRSw2QkFwTG9CO0VBcUx4QkMsRUFBRSxFQUFFLFNBckxvQjtFQXNMeEJDLEVBQUUsRUFBRSwwQkF0TG9CO0VBdUx4QkMsRUFBRSxFQUFFLFFBdkxvQjtFQXdMeEJDLEVBQUUsRUFBRSxTQXhMb0I7RUF5THhCQyxFQUFFLEVBQUUsa0JBekxvQjtFQTBMeEJDLEVBQUUsRUFBRSw4Q0ExTG9CO0VBMkx4QkMsRUFBRSxFQUFFLHVCQTNMb0I7RUE0THhCQyxFQUFFLEVBQUUsYUE1TG9CO0VBNkx4QkMsRUFBRSxFQUFFLDRCQTdMb0I7RUE4THhCQyxFQUFFLEVBQUUsMkJBOUxvQjtFQStMeEJDLEVBQUUsRUFBRSxrQ0EvTG9CO0VBZ014QkMsRUFBRSxFQUFFLE9BaE1vQjtFQWlNeEJDLEVBQUUsRUFBRSxZQWpNb0I7RUFrTXhCQyxFQUFFLEVBQUUsdUJBbE1vQjtFQW1NeEJDLEVBQUUsRUFBRSxjQW5Nb0I7RUFvTXhCQyxFQUFFLEVBQUUsU0FwTW9CO0VBcU14QkMsRUFBRSxFQUFFLFFBck1vQjtFQXNNeEJDLEVBQUUsRUFBRSxZQXRNb0I7RUF1TXhCQyxFQUFFLEVBQUUsY0F2TW9CO0VBd014QkMsRUFBRSxFQUFFLFdBeE1vQjtFQXlNeEJDLEVBQUUsRUFBRSwyQkF6TW9CO0VBME14QkMsRUFBRSxFQUFFLFVBMU1vQjtFQTJNeEJDLEVBQUUsRUFBRSxVQTNNb0I7RUE0TXhCQyxFQUFFLEVBQUUsaUJBNU1vQjtFQTZNeEJDLEVBQUUsRUFBRSxTQTdNb0I7RUE4TXhCQyxFQUFFLEVBQUUsY0E5TW9CO0VBK014QkMsRUFBRSxFQUFFLDhDQS9Nb0I7RUFnTnhCQyxFQUFFLEVBQUUsYUFoTm9CO0VBaU54QkMsRUFBRSxFQUFFLE9Bak5vQjtFQWtOeEJDLEVBQUUsRUFBRSxXQWxOb0I7RUFtTnhCQyxFQUFFLEVBQUUsYUFuTm9CO0VBb054QkMsRUFBRSxFQUFFLFVBcE5vQjtFQXFOeEJDLEVBQUUsRUFBRSx3QkFyTm9CO0VBc054QkMsRUFBRSxFQUFFLFFBdE5vQjtFQXVOeEJDLEVBQUUsRUFBRSxhQXZOb0I7RUF3TnhCQyxFQUFFLEVBQUUsc0JBeE5vQjtFQXlOeEJDLEVBQUUsRUFBRSxRQXpOb0I7RUEwTnhCQyxFQUFFLEVBQUUsWUExTm9CO0VBMk54QkMsRUFBRSxFQUFFLDhCQTNOb0I7RUE0TnhCQyxFQUFFLEVBQUUsVUE1Tm9CO0VBNk54QkMsRUFBRSxFQUFFLGFBN05vQjtFQThOeEJDLEVBQUUsRUFBRSxNQTlOb0I7RUErTnhCQyxFQUFFLEVBQUUsU0EvTm9CO0VBZ094QkMsRUFBRSxFQUFFLE9BaE9vQjtFQWlPeEJDLEVBQUUsRUFBRSxxQkFqT29CO0VBa094QkMsRUFBRSxFQUFFLFNBbE9vQjtFQW1PeEJDLEVBQUUsRUFBRSxRQW5Pb0I7RUFvT3hCQyxFQUFFLEVBQUUsY0FwT29CO0VBcU94QkMsRUFBRSxFQUFFLGdDQXJPb0I7RUFzT3hCQyxFQUFFLEVBQUUsUUF0T29CO0VBdU94QkMsRUFBRSxFQUFFLFFBdk9vQjtFQXdPeEJDLEVBQUUsRUFBRSxTQXhPb0I7RUF5T3hCQyxFQUFFLEVBQUUsNEJBek9vQjtFQTBPeEJDLEVBQUUsRUFBRSw0REExT29CO0VBMk94QkMsRUFBRSxFQUFFLDRDQTNPb0I7RUE0T3hCQyxFQUFFLEVBQUUsZ0NBNU9vQjtFQTZPeEJDLEVBQUUsRUFBRSxTQTdPb0I7RUE4T3hCQyxFQUFFLEVBQUUsWUE5T29CO0VBK094QkMsRUFBRSxFQUFFLFNBL09vQjtFQWdQeEJDLEVBQUUsRUFBRSxvQ0FoUG9CO0VBaVB4QkMsRUFBRSxFQUFFLFVBalBvQjtFQWtQeEJDLEVBQUUsRUFBRSwwQkFsUG9CO0VBbVB4QkMsRUFBRSxFQUFFLHVCQW5Qb0I7RUFvUHhCQyxFQUFFLEVBQUUsbUJBcFBvQjtFQXFQeEJDLEVBQUUsRUFBRSxnQkFyUG9CO0VBc1B4QkMsRUFBRSxFQUFFLE9BdFBvQjtFQXVQeEJDLEVBQUUsRUFBRSxRQXZQb0I7RUF3UHhCQyxFQUFFLEVBQUUsVUF4UG9CO0VBeVB4QkMsRUFBRSxFQUFFO0FBelBvQixDQUExQjs7QUE0UEEsTUFBTUMsYUFBYSxHQUFHLE1BQU07RUFDMUIsTUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBbkI7O0VBQ0EsSUFBSUYsVUFBVSxDQUFDRyxRQUFYLENBQW9CQyxZQUFwQixJQUFvQ0osVUFBVSxDQUFDSyxLQUFYLEtBQXFCLEVBQTdELEVBQWlFO0lBQy9ETCxVQUFVLENBQUNNLGlCQUFYLENBQTZCLHFCQUE3QjtJQUNBTixVQUFVLENBQUNPLGNBQVg7RUFDRCxDQUhELE1BR087SUFDTFAsVUFBVSxDQUFDTSxpQkFBWCxDQUE2QixFQUE3QjtFQUNEO0FBQ0YsQ0FSRDs7QUFVQSxNQUFNRSxnQkFBZ0IsR0FBSUMsU0FBRCxJQUFlO0VBQ3RDO0VBQ0EsTUFBTUMsT0FBTyxHQUFHVCxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7RUFDQUQsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixTQUF0QixFQUhzQyxDQUl0Qzs7RUFDQSxNQUFNQyxVQUFVLEdBQUdiLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixPQUF2QixDQUFuQjtFQUNBRyxVQUFVLENBQUNDLEdBQVgsR0FBaUIsT0FBakI7RUFDQUQsVUFBVSxDQUFDRSxTQUFYLEdBQXVCLE9BQXZCLENBUHNDLENBUXRDOztFQUNBLE1BQU1oQixVQUFVLEdBQUdDLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixPQUF2QixDQUFuQjtFQUNBWCxVQUFVLENBQUNpQixFQUFYLEdBQWdCLE9BQWhCO0VBQ0FqQixVQUFVLENBQUNrQixJQUFYLEdBQWtCLE9BQWxCO0VBQ0FsQixVQUFVLENBQUNtQixJQUFYLEdBQWtCLE9BQWxCO0VBQ0FuQixVQUFVLENBQUNvQixXQUFYLEdBQXlCLGtCQUF6QixDQWJzQyxDQWN0Qzs7RUFDQXBCLFVBQVUsQ0FBQ3FCLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLE1BQU10QixhQUFhLEVBQXhELEVBZnNDLENBZ0J0Qzs7RUFDQVcsT0FBTyxDQUFDWSxXQUFSLENBQW9CUixVQUFwQjtFQUNBSixPQUFPLENBQUNZLFdBQVIsQ0FBb0J0QixVQUFwQjtFQUNBUyxTQUFTLENBQUNhLFdBQVYsQ0FBc0JaLE9BQXRCO0FBQ0QsQ0FwQkQ7O0FBc0JBLE1BQU1hLG9CQUFvQixHQUFHLE1BQU07RUFDakMsTUFBTUMsZ0JBQWdCLEdBQUd2QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBekI7O0VBQ0EsSUFBSXNCLGdCQUFnQixDQUFDbkIsS0FBakIsS0FBMkIsRUFBL0IsRUFBbUM7SUFDakNtQixnQkFBZ0IsQ0FBQ2xCLGlCQUFqQixDQUFtQywyQkFBbkM7SUFDQWtCLGdCQUFnQixDQUFDakIsY0FBakI7RUFDRCxDQUhELE1BR087SUFDTGlCLGdCQUFnQixDQUFDbEIsaUJBQWpCLENBQW1DLEVBQW5DO0VBQ0Q7QUFDRixDQVJEOztBQVVBLE1BQU1tQixrQkFBa0IsR0FBSWhCLFNBQUQsSUFBZTtFQUN4QztFQUNBLE1BQU1DLE9BQU8sR0FBR1QsUUFBUSxDQUFDVSxhQUFULENBQXVCLEtBQXZCLENBQWhCO0VBQ0FELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsU0FBdEIsRUFId0MsQ0FJeEM7O0VBQ0EsTUFBTWEsWUFBWSxHQUFHekIsUUFBUSxDQUFDVSxhQUFULENBQXVCLE9BQXZCLENBQXJCO0VBQ0FlLFlBQVksQ0FBQ1gsR0FBYixHQUFtQixTQUFuQjtFQUNBVyxZQUFZLENBQUNWLFNBQWIsR0FBeUIsU0FBekIsQ0FQd0MsQ0FReEM7O0VBQ0EsTUFBTVEsZ0JBQWdCLEdBQUd2QixRQUFRLENBQUNVLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBekI7RUFDQWEsZ0JBQWdCLENBQUNQLEVBQWpCLEdBQXNCLFNBQXRCO0VBQ0FPLGdCQUFnQixDQUFDTixJQUFqQixHQUF3QixTQUF4QixDQVh3QyxDQVl4Qzs7RUFDQSxNQUFNUyxXQUFXLEdBQUcxQixRQUFRLENBQUNVLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBcEI7RUFDQWdCLFdBQVcsQ0FBQ3RCLEtBQVosR0FBb0IsRUFBcEI7RUFDQXNCLFdBQVcsQ0FBQ1gsU0FBWixHQUF3QixFQUF4QjtFQUNBUSxnQkFBZ0IsQ0FBQ0YsV0FBakIsQ0FBNkJLLFdBQTdCO0VBQ0FDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZeFIsaUJBQVosRUFBK0J5UixPQUEvQixDQUF3Q0MsR0FBRCxJQUFTO0lBQzlDO0lBQ0EsTUFBTUMsU0FBUyxHQUFHL0IsUUFBUSxDQUFDVSxhQUFULENBQXVCLFFBQXZCLENBQWxCO0lBQ0FxQixTQUFTLENBQUMzQixLQUFWLEdBQWtCMEIsR0FBbEI7SUFDQUMsU0FBUyxDQUFDaEIsU0FBVixHQUFzQjNRLGlCQUFpQixDQUFDMFIsR0FBRCxDQUF2QztJQUNBUCxnQkFBZ0IsQ0FBQ0YsV0FBakIsQ0FBNkJVLFNBQTdCO0VBQ0QsQ0FORCxFQWpCd0MsQ0F3QnhDOztFQUNBUixnQkFBZ0IsQ0FBQ0gsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLE1BQU1FLG9CQUFvQixFQUFyRSxFQXpCd0MsQ0EwQnhDOztFQUNBYixPQUFPLENBQUNZLFdBQVIsQ0FBb0JJLFlBQXBCO0VBQ0FoQixPQUFPLENBQUNZLFdBQVIsQ0FBb0JFLGdCQUFwQjtFQUNBZixTQUFTLENBQUNhLFdBQVYsQ0FBc0JaLE9BQXRCO0FBQ0QsQ0E5QkQ7O0FBZ0NBLE1BQU11QixlQUFlLEdBQUcsTUFBTTtFQUM1QixNQUFNQyxZQUFZLEdBQUdqQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBckI7O0VBQ0EsSUFBSSxtQkFBbUJpQyxJQUFuQixDQUF3QkQsWUFBWSxDQUFDN0IsS0FBckMsTUFBZ0QsS0FBcEQsRUFBMkQ7SUFDekQ2QixZQUFZLENBQUM1QixpQkFBYixDQUErQix1QkFBL0I7SUFDQTRCLFlBQVksQ0FBQzNCLGNBQWI7RUFDRCxDQUhELE1BR087SUFDTDJCLFlBQVksQ0FBQzVCLGlCQUFiLENBQStCLEVBQS9CO0VBQ0Q7QUFDRixDQVJEOztBQVVBLE1BQU04QixrQkFBa0IsR0FBSTNCLFNBQUQsSUFBZTtFQUN4QztFQUNBLE1BQU1DLE9BQU8sR0FBR1QsUUFBUSxDQUFDVSxhQUFULENBQXVCLEtBQXZCLENBQWhCO0VBQ0FELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsU0FBdEIsRUFId0MsQ0FJeEM7O0VBQ0EsTUFBTXdCLFlBQVksR0FBR3BDLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixPQUF2QixDQUFyQjtFQUNBMEIsWUFBWSxDQUFDdEIsR0FBYixHQUFtQixTQUFuQjtFQUNBc0IsWUFBWSxDQUFDckIsU0FBYixHQUF5QixVQUF6QixDQVB3QyxDQVF4Qzs7RUFDQSxNQUFNa0IsWUFBWSxHQUFHakMsUUFBUSxDQUFDVSxhQUFULENBQXVCLE9BQXZCLENBQXJCO0VBQ0F1QixZQUFZLENBQUNqQixFQUFiLEdBQWtCLFNBQWxCO0VBQ0FpQixZQUFZLENBQUNoQixJQUFiLEdBQW9CLFNBQXBCLENBWHdDLENBWXhDOztFQUNBZ0IsWUFBWSxDQUFDYixnQkFBYixDQUE4QixPQUE5QixFQUF1QyxNQUFNWSxlQUFlLEVBQTVELEVBYndDLENBY3hDOztFQUNBdkIsT0FBTyxDQUFDWSxXQUFSLENBQW9CZSxZQUFwQjtFQUNBM0IsT0FBTyxDQUFDWSxXQUFSLENBQW9CWSxZQUFwQjtFQUNBekIsU0FBUyxDQUFDYSxXQUFWLENBQXNCWixPQUF0QjtBQUNELENBbEJEOztBQW9CQSxNQUFNNEIsZ0JBQWdCLEdBQUcsTUFBTTtFQUM3QixNQUFNQyxhQUFhLEdBQUd0QyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBdEIsQ0FENkIsQ0FHN0I7O0VBQ0EsSUFBSSxTQUFTaUMsSUFBVCxDQUFjSSxhQUFhLENBQUNsQyxLQUE1QixNQUF1QyxLQUEzQyxFQUFrRDtJQUNoRGtDLGFBQWEsQ0FBQ2pDLGlCQUFkLENBQWdDLCtCQUFoQztJQUNBaUMsYUFBYSxDQUFDaEMsY0FBZCxHQUZnRCxDQUdoRDtFQUNELENBSkQsTUFJTyxJQUFJLFNBQVM0QixJQUFULENBQWNJLGFBQWEsQ0FBQ2xDLEtBQTVCLE1BQXVDLEtBQTNDLEVBQWtEO0lBQ3ZEa0MsYUFBYSxDQUFDakMsaUJBQWQsQ0FBZ0MsK0JBQWhDO0lBQ0FpQyxhQUFhLENBQUNoQyxjQUFkLEdBRnVELENBR3ZEO0VBQ0QsQ0FKTSxNQUlBLElBQUksU0FBUzRCLElBQVQsQ0FBY0ksYUFBYSxDQUFDbEMsS0FBNUIsTUFBdUMsS0FBM0MsRUFBa0Q7SUFDdkRrQyxhQUFhLENBQUNqQyxpQkFBZCxDQUFnQyx1QkFBaEM7SUFDQWlDLGFBQWEsQ0FBQ2hDLGNBQWQsR0FGdUQsQ0FHdkQ7RUFDRCxDQUpNLE1BSUEsSUFBSWdDLGFBQWEsQ0FBQ2xDLEtBQWQsQ0FBb0JtQyxNQUFwQixHQUE2QixDQUFqQyxFQUFvQztJQUN6Q0QsYUFBYSxDQUFDakMsaUJBQWQsQ0FBZ0MsK0JBQWhDO0lBQ0FpQyxhQUFhLENBQUNoQyxjQUFkO0VBQ0QsQ0FITSxNQUdBO0lBQ0xnQyxhQUFhLENBQUNqQyxpQkFBZCxDQUFnQyxFQUFoQztFQUNEO0FBQ0YsQ0F0QkQ7O0FBd0JBLE1BQU1tQyxtQkFBbUIsR0FBSWhDLFNBQUQsSUFBZTtFQUN6QztFQUNBLE1BQU1DLE9BQU8sR0FBR1QsUUFBUSxDQUFDVSxhQUFULENBQXVCLEtBQXZCLENBQWhCO0VBQ0FELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsU0FBdEIsRUFIeUMsQ0FJekM7O0VBQ0EsTUFBTTZCLGFBQWEsR0FBR3pDLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixPQUF2QixDQUF0QjtFQUNBK0IsYUFBYSxDQUFDM0IsR0FBZCxHQUFvQixVQUFwQjtFQUNBMkIsYUFBYSxDQUFDMUIsU0FBZCxHQUEwQixVQUExQixDQVB5QyxDQVF6Qzs7RUFDQSxNQUFNdUIsYUFBYSxHQUFHdEMsUUFBUSxDQUFDVSxhQUFULENBQXVCLE9BQXZCLENBQXRCO0VBQ0E0QixhQUFhLENBQUN0QixFQUFkLEdBQW1CLFVBQW5CO0VBQ0FzQixhQUFhLENBQUNyQixJQUFkLEdBQXFCLFVBQXJCO0VBQ0FxQixhQUFhLENBQUNwQixJQUFkLEdBQXFCLFVBQXJCLENBWnlDLENBYXpDOztFQUNBb0IsYUFBYSxDQUFDbEIsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsTUFBTWlCLGdCQUFnQixFQUE5RCxFQWR5QyxDQWV6Qzs7RUFDQTVCLE9BQU8sQ0FBQ1ksV0FBUixDQUFvQm9CLGFBQXBCO0VBQ0FoQyxPQUFPLENBQUNZLFdBQVIsQ0FBb0JpQixhQUFwQjtFQUNBOUIsU0FBUyxDQUFDYSxXQUFWLENBQXNCWixPQUF0QjtBQUNELENBbkJEOztBQXFCQSxNQUFNaUMsZUFBZSxHQUFHLE1BQU07RUFDNUIsTUFBTUMsb0JBQW9CLEdBQUczQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isc0JBQXhCLENBQTdCO0VBQ0EsTUFBTXFDLGFBQWEsR0FBR3RDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0csS0FBMUQ7O0VBQ0EsSUFBSXVDLG9CQUFvQixDQUFDdkMsS0FBckIsS0FBK0JrQyxhQUFuQyxFQUFrRDtJQUNoREssb0JBQW9CLENBQUN0QyxpQkFBckIsQ0FBdUMsZ0JBQXZDO0lBQ0FzQyxvQkFBb0IsQ0FBQ3JDLGNBQXJCO0VBQ0QsQ0FIRCxNQUdPO0lBQ0xxQyxvQkFBb0IsQ0FBQ3RDLGlCQUFyQixDQUF1QyxFQUF2QztFQUNEO0FBQ0YsQ0FURDs7QUFXQSxNQUFNdUMsMEJBQTBCLEdBQUlwQyxTQUFELElBQWU7RUFDaEQ7RUFDQSxNQUFNQyxPQUFPLEdBQUdULFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtFQUNBRCxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFNBQXRCLEVBSGdELENBSWhEOztFQUNBLE1BQU1pQyxvQkFBb0IsR0FBRzdDLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixPQUF2QixDQUE3QjtFQUNBbUMsb0JBQW9CLENBQUMvQixHQUFyQixHQUEyQixzQkFBM0I7RUFDQStCLG9CQUFvQixDQUFDOUIsU0FBckIsR0FBaUMsa0JBQWpDLENBUGdELENBUWhEOztFQUNBLE1BQU00QixvQkFBb0IsR0FBRzNDLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixPQUF2QixDQUE3QjtFQUNBaUMsb0JBQW9CLENBQUN6QixJQUFyQixHQUE0QixVQUE1QjtFQUNBeUIsb0JBQW9CLENBQUMzQixFQUFyQixHQUEwQixzQkFBMUI7RUFDQTJCLG9CQUFvQixDQUFDMUIsSUFBckIsR0FBNEIsc0JBQTVCLENBWmdELENBYWhEOztFQUNBMEIsb0JBQW9CLENBQUN2QixnQkFBckIsQ0FBc0MsT0FBdEMsRUFBK0MsTUFBTXNCLGVBQWUsRUFBcEUsRUFkZ0QsQ0FlaEQ7O0VBQ0FqQyxPQUFPLENBQUNZLFdBQVIsQ0FBb0J3QixvQkFBcEI7RUFDQXBDLE9BQU8sQ0FBQ1ksV0FBUixDQUFvQnNCLG9CQUFwQjtFQUNBbkMsU0FBUyxDQUFDYSxXQUFWLENBQXNCWixPQUF0QjtBQUNELENBbkJEOztBQXFCQSxNQUFNcUMsVUFBVSxHQUFJQyxDQUFELElBQU87RUFDeEI7RUFDQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRndCLENBR3hCOztFQUNBTixlQUFlO0VBQ2ZMLGdCQUFnQjtFQUNoQkwsZUFBZTtFQUNmVixvQkFBb0I7RUFDcEJ4QixhQUFhO0FBQ2QsQ0FURDs7QUFXQSxNQUFNbUQsa0JBQWtCLEdBQUl6QyxTQUFELElBQWU7RUFDeEM7RUFDQSxNQUFNQyxPQUFPLEdBQUdULFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtFQUNBRCxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFNBQXRCLEVBSHdDLENBSXhDOztFQUNBLE1BQU1zQyxTQUFTLEdBQUdsRCxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbEI7RUFDQXdDLFNBQVMsQ0FBQ3ZDLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFdBQXhCO0VBQ0FzQyxTQUFTLENBQUNuQyxTQUFWLEdBQXNCLFFBQXRCLENBUHdDLENBUXhDOztFQUNBbUMsU0FBUyxDQUFDOUIsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBcUMyQixDQUFELElBQU9ELFVBQVUsQ0FBQ0MsQ0FBRCxDQUFyRCxFQVR3QyxDQVV4Qzs7RUFDQXRDLE9BQU8sQ0FBQ1ksV0FBUixDQUFvQjZCLFNBQXBCO0VBQ0ExQyxTQUFTLENBQUNhLFdBQVYsQ0FBc0JaLE9BQXRCO0FBQ0QsQ0FiRDs7QUFlQSxNQUFNMEMsWUFBWSxHQUFJM0MsU0FBRCxJQUFlO0VBQ2xDRCxnQkFBZ0IsQ0FBQ0MsU0FBRCxDQUFoQjtFQUNBZ0Isa0JBQWtCLENBQUNoQixTQUFELENBQWxCO0VBQ0EyQixrQkFBa0IsQ0FBQzNCLFNBQUQsQ0FBbEI7RUFDQWdDLG1CQUFtQixDQUFDaEMsU0FBRCxDQUFuQjtFQUNBb0MsMEJBQTBCLENBQUNwQyxTQUFELENBQTFCO0VBQ0F5QyxrQkFBa0IsQ0FBQ3pDLFNBQUQsQ0FBbEI7QUFDRCxDQVBEOztBQVNBLGlFQUFlMkMsWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2ZEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNTSxJQUFJLEdBQUd6RCxRQUFRLENBQUMwRCxhQUFULENBQXVCLE1BQXZCLENBQWIsRUFFQTs7QUFDQSxNQUFNQyxvQkFBb0IsR0FBSVosQ0FBRCxJQUFPO0VBQ2xDLE1BQU1hLFFBQVEsR0FBRzVELFFBQVEsQ0FBQzBELGFBQVQsQ0FBdUIsV0FBdkIsQ0FBakI7RUFDQSxNQUFNRyxnQkFBZ0IsR0FBRzdELFFBQVEsQ0FBQzBELGFBQVQsQ0FBdUIsbUJBQXZCLENBQXpCLENBRmtDLENBSWxDOztFQUNBLE1BQU1JLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxpQkFBM0I7O0VBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixTQUFwQixFQUErQkUsQ0FBQyxFQUFoQyxFQUFvQztJQUNsQ0osUUFBUSxDQUFDSyxRQUFULENBQWtCRCxDQUFsQixFQUFxQnJELFNBQXJCLENBQStCdUQsTUFBL0IsQ0FBc0MsVUFBdEM7RUFDRCxDQVJpQyxDQVVsQzs7O0VBQ0FuQixDQUFDLENBQUNvQixNQUFGLENBQVN4RCxTQUFULENBQW1CQyxHQUFuQixDQUF1QixVQUF2QixFQVhrQyxDQWFsQzs7RUFDQSxNQUFNd0QsWUFBWSxHQUFHUCxnQkFBZ0IsQ0FBQ0UsaUJBQXRDOztFQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0ksWUFBcEIsRUFBa0NKLENBQUMsRUFBbkMsRUFBdUM7SUFDckM7SUFDQSxJQUFJSCxnQkFBZ0IsQ0FBQ0ksUUFBakIsQ0FBMEJELENBQTFCLEVBQTZCckQsU0FBN0IsQ0FBdUMwRCxRQUF2QyxDQUFnRCxRQUFoRCxNQUE4RCxLQUFsRSxFQUF5RTtNQUN2RVIsZ0JBQWdCLENBQUNJLFFBQWpCLENBQTBCRCxDQUExQixFQUE2QnJELFNBQTdCLENBQXVDQyxHQUF2QyxDQUEyQyxRQUEzQztJQUNELENBSm9DLENBS3JDOzs7SUFDQTBELE9BQU8sQ0FBQ0MsR0FBUixDQUFZVixnQkFBZ0IsQ0FBQ0ksUUFBakIsQ0FBMEJELENBQTFCLEVBQTZCaEQsRUFBekM7SUFDQXNELE9BQU8sQ0FBQ0MsR0FBUixDQUFZeEIsQ0FBQyxDQUFDb0IsTUFBRixDQUFTbkQsRUFBckI7O0lBQ0EsSUFBSTZDLGdCQUFnQixDQUFDSSxRQUFqQixDQUEwQkQsQ0FBMUIsRUFBNkJoRCxFQUE3QixLQUFvQytCLENBQUMsQ0FBQ29CLE1BQUYsQ0FBU25ELEVBQWpELEVBQXFEO01BQ25ENkMsZ0JBQWdCLENBQUNJLFFBQWpCLENBQTBCRCxDQUExQixFQUE2QnJELFNBQTdCLENBQXVDdUQsTUFBdkMsQ0FBOEMsUUFBOUM7SUFDRDtFQUNGO0FBQ0YsQ0EzQkQ7O0FBNkJBLE1BQU1NLGNBQWMsR0FBRyxDQUFDQyxRQUFELEVBQVdDLGFBQVgsRUFBMEJDLE1BQTFCLEVBQWtDQyxTQUFsQyxLQUFnRDtFQUNyRSxNQUFNQyxXQUFXLEdBQUc3RSxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7RUFFQW1FLFdBQVcsQ0FBQzdELEVBQVosYUFBb0IyRCxNQUFwQixFQUhxRSxDQUtyRTs7RUFDQSxJQUFJQyxTQUFTLEtBQUtFLFNBQWxCLEVBQTZCO0lBQzNCRCxXQUFXLENBQUNFLFlBQVosQ0FBeUIsT0FBekIsWUFBcUNILFNBQXJDO0VBQ0Q7O0VBRURDLFdBQVcsQ0FBQzlELFNBQVosYUFBMkIwRCxRQUEzQjtFQUNBSSxXQUFXLENBQUNsRSxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixVQUExQjtFQUVBaUUsV0FBVyxDQUFDekQsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBdUMyQixDQUFELElBQU9ZLG9CQUFvQixDQUFDWixDQUFELENBQWpFO0VBRUEyQixhQUFhLENBQUNyRCxXQUFkLENBQTBCd0QsV0FBMUI7QUFDRCxDQWhCRDs7QUFrQkEsTUFBTUcsa0JBQWtCLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRakIsQ0FBUixFQUFXa0IsUUFBWCxFQUFxQkMsT0FBckIsS0FBaUM7RUFDMUQsTUFBTUMsY0FBYyxHQUFHcEYsUUFBUSxDQUFDVSxhQUFULENBQXVCLEtBQXZCLENBQXZCO0VBQ0EwRSxjQUFjLENBQUN6RSxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixnQkFBN0IsRUFBK0MsTUFBL0MsRUFGMEQsQ0FJMUQ7O0VBQ0EsTUFBTXlFLFdBQVcsR0FBR3JGLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixLQUF2QixDQUFwQjtFQUNBMkUsV0FBVyxDQUFDMUUsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsYUFBMUI7RUFDQXlFLFdBQVcsQ0FBQ3RFLFNBQVosYUFBMkJpRCxDQUEzQjtFQUNBb0IsY0FBYyxDQUFDL0QsV0FBZixDQUEyQmdFLFdBQTNCLEVBUjBELENBVTFEOztFQUNBLE1BQU1DLFFBQVEsR0FBR3RGLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtFQUNBNEUsUUFBUSxDQUFDM0UsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsZUFBdkI7RUFDQTBFLFFBQVEsQ0FBQ0MsR0FBVCxHQUFlTixLQUFmO0VBQ0FHLGNBQWMsQ0FBQy9ELFdBQWYsQ0FBMkJpRSxRQUEzQixFQWQwRCxDQWdCMUQ7O0VBQ0EsSUFBSUgsT0FBTyxLQUFLTCxTQUFoQixFQUEyQjtJQUN6QixNQUFNVSxZQUFZLEdBQUd4RixRQUFRLENBQUNVLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7SUFDQThFLFlBQVksQ0FBQzdFLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGNBQTNCO0lBQ0E0RSxZQUFZLENBQUN6RSxTQUFiLGFBQTRCb0UsT0FBNUI7SUFDQUMsY0FBYyxDQUFDL0QsV0FBZixDQUEyQm1FLFlBQTNCO0VBQ0Q7O0VBRUROLFFBQVEsQ0FBQzdELFdBQVQsQ0FBcUIrRCxjQUFyQjtBQUNELENBekJEOztBQTJCQSxJQUFJSyxVQUFVLEdBQUcsQ0FBakI7O0FBRUEsTUFBTUMsV0FBVyxHQUFJQyxDQUFELElBQU87RUFDekIsTUFBTUMsY0FBYyxHQUFHNUYsUUFBUSxDQUFDNkYsc0JBQVQsQ0FBZ0MsZ0JBQWhDLENBQXZCO0VBQ0EsTUFBTUMsWUFBWSxHQUFHOUYsUUFBUSxDQUFDNkYsc0JBQVQsQ0FBZ0MsYUFBaEMsQ0FBckIsQ0FGeUIsQ0FJekI7O0VBQ0EsSUFBSUYsQ0FBQyxHQUFHQyxjQUFjLENBQUNyRCxNQUF2QixFQUErQjtJQUFFa0QsVUFBVSxHQUFHLENBQWI7RUFBaUI7O0VBQ2xELElBQUlFLENBQUMsR0FBRyxDQUFSLEVBQVc7SUFBRUYsVUFBVSxHQUFHRyxjQUFjLENBQUNyRCxNQUE1QjtFQUFxQyxDQU56QixDQVF6Qjs7O0VBQ0EsS0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRCLGNBQWMsQ0FBQ3JELE1BQW5DLEVBQTJDeUIsQ0FBQyxFQUE1QyxFQUFnRDtJQUM5QzRCLGNBQWMsQ0FBQzVCLENBQUQsQ0FBZCxDQUFrQitCLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxNQUFsQztFQUNEOztFQUNELEtBQUssSUFBSWhDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4QixZQUFZLENBQUN2RCxNQUFqQyxFQUF5Q3lCLENBQUMsRUFBMUMsRUFBOEM7SUFDNUM4QixZQUFZLENBQUM5QixDQUFELENBQVosQ0FBZ0JpQyxTQUFoQixHQUE0QkgsWUFBWSxDQUFDOUIsQ0FBRCxDQUFaLENBQWdCaUMsU0FBaEIsQ0FBMEJDLE9BQTFCLENBQWtDLGdCQUFsQyxFQUFvRCxFQUFwRCxDQUE1QjtFQUNELENBZHdCLENBZ0J6Qjs7O0VBQ0FOLGNBQWMsQ0FBQ0gsVUFBVSxHQUFHLENBQWQsQ0FBZCxDQUErQk0sS0FBL0IsQ0FBcUNDLE9BQXJDLEdBQStDLE9BQS9DO0VBQ0FGLFlBQVksQ0FBQ0wsVUFBVSxHQUFHLENBQWQsQ0FBWixDQUE2QlEsU0FBN0IsSUFBMEMsZ0JBQTFDO0FBQ0QsQ0FuQkQ7O0FBcUJBLE1BQU1FLGlCQUFpQixHQUFHLE1BQU07RUFDOUIsTUFBTVAsY0FBYyxHQUFHNUYsUUFBUSxDQUFDNkYsc0JBQVQsQ0FBZ0MsZ0JBQWhDLENBQXZCO0VBQ0EsTUFBTUMsWUFBWSxHQUFHOUYsUUFBUSxDQUFDNkYsc0JBQVQsQ0FBZ0MsYUFBaEMsQ0FBckIsQ0FGOEIsQ0FJOUI7O0VBQ0EsS0FBSyxJQUFJN0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRCLGNBQWMsQ0FBQ3JELE1BQW5DLEVBQTJDeUIsQ0FBQyxFQUE1QyxFQUFnRDtJQUM5QzRCLGNBQWMsQ0FBQzVCLENBQUQsQ0FBZCxDQUFrQitCLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxNQUFsQztFQUNEOztFQUNELEtBQUssSUFBSWhDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4QixZQUFZLENBQUN2RCxNQUFqQyxFQUF5Q3lCLENBQUMsRUFBMUMsRUFBOEM7SUFDNUM4QixZQUFZLENBQUM5QixDQUFELENBQVosQ0FBZ0JpQyxTQUFoQixHQUE0QkgsWUFBWSxDQUFDOUIsQ0FBRCxDQUFaLENBQWdCaUMsU0FBaEIsQ0FBMEJDLE9BQTFCLENBQWtDLGdCQUFsQyxFQUFvRCxFQUFwRCxDQUE1QjtFQUNELENBVjZCLENBWTlCOzs7RUFDQVQsVUFBVTs7RUFDVixJQUFJQSxVQUFVLEdBQUdHLGNBQWMsQ0FBQ3JELE1BQWhDLEVBQXdDO0lBQUVrRCxVQUFVLEdBQUcsQ0FBYjtFQUFpQjs7RUFDM0RHLGNBQWMsQ0FBQ0gsVUFBVSxHQUFHLENBQWQsQ0FBZCxDQUErQk0sS0FBL0IsQ0FBcUNDLE9BQXJDLEdBQStDLE9BQS9DO0VBQ0FGLFlBQVksQ0FBQ0wsVUFBVSxHQUFHLENBQWQsQ0FBWixDQUE2QlEsU0FBN0IsSUFBMEMsZ0JBQTFDO0VBQ0FHLFVBQVUsQ0FBQ0QsaUJBQUQsRUFBb0IsSUFBcEIsQ0FBVixDQWpCOEIsQ0FpQk87QUFDdEMsQ0FsQkQsRUFvQkE7OztBQUNBLE1BQU1FLFlBQVksR0FBRyxNQUFNO0VBQ3pCLE1BQU1DLE1BQU0sR0FBR3RHLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixRQUF2QixDQUFmO0VBRUEsTUFBTTZGLFdBQVcsR0FBR3ZHLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixJQUF2QixDQUFwQjtFQUNBNkYsV0FBVyxDQUFDeEYsU0FBWixHQUF3Qix5QkFBeEI7RUFFQXVGLE1BQU0sQ0FBQ2pGLFdBQVAsQ0FBbUJrRixXQUFuQjtFQUNBOUMsSUFBSSxDQUFDcEMsV0FBTCxDQUFpQmlGLE1BQWpCO0FBQ0QsQ0FSRDs7QUFVQSxNQUFNRSxjQUFjLEdBQUcsTUFBTTtFQUMzQixNQUFNNUMsUUFBUSxHQUFHNUQsUUFBUSxDQUFDVSxhQUFULENBQXVCLEtBQXZCLENBQWpCO0VBQ0FrRCxRQUFRLENBQUNqRCxTQUFULENBQW1CQyxHQUFuQixDQUF1QixVQUF2QjtFQUVBNEQsY0FBYyxDQUFDLGVBQUQsRUFBa0JaLFFBQWxCLEVBQTRCLGNBQTVCLEVBQTRDLFVBQTVDLENBQWQ7RUFDQVksY0FBYyxDQUFDLGFBQUQsRUFBZ0JaLFFBQWhCLEVBQTBCLFlBQTFCLENBQWQ7RUFDQVksY0FBYyxDQUFDLGdCQUFELEVBQW1CWixRQUFuQixFQUE2QixlQUE3QixDQUFkO0VBQ0FZLGNBQWMsQ0FBQyxpQkFBRCxFQUFvQlosUUFBcEIsRUFBOEIsZ0JBQTlCLENBQWQ7RUFDQVksY0FBYyxDQUFDLGNBQUQsRUFBaUJaLFFBQWpCLEVBQTJCLGFBQTNCLENBQWQ7RUFFQUgsSUFBSSxDQUFDcEMsV0FBTCxDQUFpQnVDLFFBQWpCO0FBQ0QsQ0FYRDs7QUFhQSxNQUFNNkMsa0JBQWtCLEdBQUlqRyxTQUFELElBQWU7RUFDeEMsTUFBTWtHLHNCQUFzQixHQUFHMUcsUUFBUSxDQUFDVSxhQUFULENBQXVCLEtBQXZCLENBQS9CO0VBQ0FnRyxzQkFBc0IsQ0FBQy9GLFNBQXZCLENBQWlDQyxHQUFqQyxDQUFxQyxTQUFyQztFQUNBOEYsc0JBQXNCLENBQUMxRixFQUF2QixHQUE0QixjQUE1QixDQUh3QyxDQUt4Qzs7RUFDQSxNQUFNMkYsaUJBQWlCLEdBQUczRyxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBMUI7RUFDQWlHLGlCQUFpQixDQUFDaEcsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLG1CQUFoQyxFQUFxRCxRQUFyRCxFQVB3QyxDQVN4Qzs7RUFDQSxLQUFLLElBQUlvRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0lBQzNCLE1BQU00QyxjQUFjLEdBQUc1RyxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBdkI7SUFDQWtHLGNBQWMsQ0FBQ2pHLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLGdCQUE3QjtJQUNBZ0csY0FBYyxDQUFDN0YsU0FBZixvQkFBcUNpRCxDQUFyQztJQUNBMkMsaUJBQWlCLENBQUN0RixXQUFsQixDQUE4QnVGLGNBQTlCO0VBQ0QsQ0FmdUMsQ0FpQnhDOzs7RUFDQSxNQUFNQyxZQUFZLEdBQUc3RyxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7RUFDQW1HLFlBQVksQ0FBQ2xHLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGNBQTNCO0VBQ0FpRyxZQUFZLENBQUM5RixTQUFiLEdBQXlCLFVBQXpCO0VBQ0E4RixZQUFZLENBQUN6RixnQkFBYixDQUE4QixPQUE5QixFQUF1QyxNQUFNO0lBQzNDeUYsWUFBWSxDQUFDbEcsU0FBYixDQUF1Qm1HLE1BQXZCLENBQThCLFVBQTlCO0lBQ0FILGlCQUFpQixDQUFDaEcsU0FBbEIsQ0FBNEJtRyxNQUE1QixDQUFtQyxRQUFuQztFQUNELENBSEQsRUFyQndDLENBMEJ4Qzs7RUFDQUQsWUFBWSxDQUFDeEYsV0FBYixDQUF5QnNGLGlCQUF6QjtFQUNBRCxzQkFBc0IsQ0FBQ3JGLFdBQXZCLENBQW1Dd0YsWUFBbkM7RUFDQXJHLFNBQVMsQ0FBQ2EsV0FBVixDQUFzQnFGLHNCQUF0QixFQTdCd0MsQ0ErQnhDOztFQUNBSyxNQUFNLENBQUNDLE9BQVAsR0FBa0JqRSxDQUFELElBQU87SUFDdEIsSUFBSSxDQUFDQSxDQUFDLENBQUNvQixNQUFGLENBQVM4QyxPQUFULENBQWlCLGVBQWpCLENBQUwsRUFBd0M7TUFDdEMsSUFBSU4saUJBQWlCLENBQUNoRyxTQUFsQixDQUE0QjBELFFBQTVCLENBQXFDLFFBQXJDLE1BQW1ELEtBQXZELEVBQThEO1FBQzVEc0MsaUJBQWlCLENBQUNoRyxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsUUFBaEM7TUFDRDs7TUFDRCxJQUFJaUcsWUFBWSxDQUFDbEcsU0FBYixDQUF1QjBELFFBQXZCLENBQWdDLFVBQWhDLENBQUosRUFBaUQ7UUFDL0N3QyxZQUFZLENBQUNsRyxTQUFiLENBQXVCbUcsTUFBdkIsQ0FBOEIsVUFBOUI7TUFDRDtJQUNGO0VBQ0YsQ0FURDtBQVVELENBMUNEOztBQTRDQSxNQUFNSSxnQkFBZ0IsR0FBSTFHLFNBQUQsSUFBZTtFQUN0QztFQUNBLE1BQU0yRyxpQkFBaUIsR0FBR25ILFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixLQUF2QixDQUExQjtFQUNBeUcsaUJBQWlCLENBQUN4RyxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsbUJBQWhDLEVBQXFELFNBQXJELEVBQWdFLFFBQWhFO0VBQ0F1RyxpQkFBaUIsQ0FBQ25HLEVBQWxCLEdBQXVCLFlBQXZCLENBSnNDLENBTXRDOztFQUNBLE1BQU1vRyxlQUFlLEdBQUdwSCxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBeEI7RUFDQTBHLGVBQWUsQ0FBQ3JHLFNBQWhCLEdBQTRCLDBCQUE1QixDQVJzQyxDQVV0Qzs7RUFDQSxNQUFNc0csZUFBZSxHQUFHckgsUUFBUSxDQUFDVSxhQUFULENBQXVCLE9BQXZCLENBQXhCO0VBQ0EsTUFBTTRHLG9CQUFvQixHQUFHdEgsUUFBUSxDQUFDVSxhQUFULENBQXVCLElBQXZCLENBQTdCO0VBQ0E0RyxvQkFBb0IsQ0FBQzNHLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxxQkFBbkMsRUFic0MsQ0FjdEM7O0VBQ0EwRyxvQkFBb0IsQ0FBQ2xHLGdCQUFyQixDQUFzQyxPQUF0QyxFQUFnRDJCLENBQUQsSUFBTztJQUNwREEsQ0FBQyxDQUFDQyxjQUFGO0lBQ0FzRSxvQkFBb0IsQ0FBQ0MsVUFBckIsSUFBbUN4RSxDQUFDLENBQUN5RSxNQUFyQztFQUNELENBSEQsRUFmc0MsQ0FvQnRDOztFQUNBLEtBQUssSUFBSXhELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksRUFBckIsRUFBeUJBLENBQUMsRUFBMUIsRUFBOEI7SUFDNUIsTUFBTXlELGdCQUFnQixHQUFHekgsUUFBUSxDQUFDVSxhQUFULENBQXVCLElBQXZCLENBQXpCO0lBQ0ErRyxnQkFBZ0IsQ0FBQzlHLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQixrQkFBL0I7SUFDQTZHLGdCQUFnQixDQUFDMUcsU0FBakIsMkJBQThDaUQsQ0FBOUM7SUFDQXlELGdCQUFnQixDQUFDckcsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLE1BQU07TUFDL0M7TUFDQSxNQUFNc0csZUFBZSxHQUFHSixvQkFBb0IsQ0FBQ3ZELGlCQUE3QyxDQUYrQyxDQUcvQzs7TUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcwRCxlQUFwQixFQUFxQzFELENBQUMsRUFBdEMsRUFBMEM7UUFDeEMsSUFBSXNELG9CQUFvQixDQUFDckQsUUFBckIsQ0FBOEJELENBQTlCLEVBQWlDckQsU0FBakMsQ0FBMkMwRCxRQUEzQyxDQUFvRCxVQUFwRCxNQUFvRSxJQUF4RSxFQUE4RTtVQUM1RWlELG9CQUFvQixDQUFDckQsUUFBckIsQ0FBOEJELENBQTlCLEVBQWlDckQsU0FBakMsQ0FBMkNtRyxNQUEzQyxDQUFrRCxVQUFsRDtRQUNEO01BQ0YsQ0FSOEMsQ0FTL0M7OztNQUNBVyxnQkFBZ0IsQ0FBQzlHLFNBQWpCLENBQTJCbUcsTUFBM0IsQ0FBa0MsVUFBbEM7SUFDRCxDQVhEO0lBWUFRLG9CQUFvQixDQUFDakcsV0FBckIsQ0FBaUNvRyxnQkFBakM7RUFDRCxDQXRDcUMsQ0F3Q3RDOzs7RUFDQU4saUJBQWlCLENBQUM5RixXQUFsQixDQUE4QitGLGVBQTlCO0VBQ0FDLGVBQWUsQ0FBQ2hHLFdBQWhCLENBQTRCaUcsb0JBQTVCO0VBQ0FILGlCQUFpQixDQUFDOUYsV0FBbEIsQ0FBOEJnRyxlQUE5QjtFQUNBN0csU0FBUyxDQUFDYSxXQUFWLENBQXNCOEYsaUJBQXRCO0FBQ0QsQ0E3Q0Q7O0FBK0NBLE1BQU1RLG1CQUFtQixHQUFJbkgsU0FBRCxJQUFlO0VBQ3pDLE1BQU1vSCx1QkFBdUIsR0FBRzVILFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixLQUF2QixDQUFoQztFQUNBa0gsdUJBQXVCLENBQUNqSCxTQUF4QixDQUFrQ0MsR0FBbEMsQ0FBc0MsU0FBdEMsRUFBaUQsUUFBakQ7RUFDQWdILHVCQUF1QixDQUFDNUcsRUFBeEIsR0FBNkIsZUFBN0I7RUFFQSxNQUFNNkcsYUFBYSxHQUFHN0gsUUFBUSxDQUFDVSxhQUFULENBQXVCLEtBQXZCLENBQXRCO0VBQ0FtSCxhQUFhLENBQUNsSCxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixlQUE1QixFQU55QyxDQVF6Qzs7RUFDQW9FLGtCQUFrQixDQUFDM0IsaURBQUQsRUFBa0IsQ0FBbEIsRUFBcUJ3RSxhQUFyQixFQUFvQyx1Q0FBcEMsQ0FBbEI7RUFDQTdDLGtCQUFrQixDQUFDMUIsaURBQUQsRUFBa0IsQ0FBbEIsRUFBcUJ1RSxhQUFyQixFQUFvQywwQ0FBcEMsQ0FBbEI7RUFDQTdDLGtCQUFrQixDQUFDekIsaURBQUQsRUFBa0IsQ0FBbEIsRUFBcUJzRSxhQUFyQixFQUFvQyxpQkFBcEMsQ0FBbEI7RUFDQTdDLGtCQUFrQixDQUFDeEIsaURBQUQsRUFBa0IsQ0FBbEIsRUFBcUJxRSxhQUFyQixFQUFvQyx3Q0FBcEMsQ0FBbEIsQ0FaeUMsQ0FjekM7O0VBQ0EsTUFBTUMsZ0JBQWdCLEdBQUc5SCxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBekI7RUFDQW9ILGdCQUFnQixDQUFDbkgsU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLGtCQUEvQjtFQUNBa0gsZ0JBQWdCLENBQUMxRyxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsTUFBTTtJQUFFc0UsV0FBVyxDQUFDRCxVQUFVLElBQUksQ0FBQyxDQUFoQixDQUFYO0VBQWdDLENBQW5GLEVBakJ5QyxDQWtCekM7O0VBQ0FxQyxnQkFBZ0IsQ0FBQ0MsU0FBakIsR0FBNkIsVUFBN0IsQ0FuQnlDLENBcUJ6Qzs7RUFDQSxNQUFNQyxZQUFZLEdBQUdoSSxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBckI7RUFDQXNILFlBQVksQ0FBQ3JILFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGNBQTNCO0VBQ0FvSCxZQUFZLENBQUM1RyxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxNQUFNO0lBQUVzRSxXQUFXLENBQUNELFVBQVUsSUFBSSxDQUFmLENBQVg7RUFBK0IsQ0FBOUUsRUF4QnlDLENBeUJ6Qzs7RUFDQXVDLFlBQVksQ0FBQ0QsU0FBYixHQUF5QixVQUF6QixDQTFCeUMsQ0E0QnpDOztFQUNBLE1BQU1FLG9CQUFvQixHQUFHakksUUFBUSxDQUFDVSxhQUFULENBQXVCLEtBQXZCLENBQTdCO0VBQ0F1SCxvQkFBb0IsQ0FBQ3RILFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxzQkFBbkM7O0VBQ0EsS0FBSyxJQUFJb0QsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsSUFBSSxDQUFyQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtJQUMzQixNQUFNa0UsTUFBTSxHQUFHbEksUUFBUSxDQUFDVSxhQUFULENBQXVCLE1BQXZCLENBQWY7SUFDQXdILE1BQU0sQ0FBQ3ZILFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGFBQXJCLEVBRjJCLENBRzNCOztJQUNBc0gsTUFBTSxDQUFDOUcsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsTUFBTTtNQUFFc0UsV0FBVyxDQUFDRCxVQUFVLEdBQUd6QixDQUFkLENBQVg7SUFBOEIsQ0FBdkU7SUFDQWlFLG9CQUFvQixDQUFDNUcsV0FBckIsQ0FBaUM2RyxNQUFqQztFQUNELENBckN3QyxDQXVDekM7OztFQUNBTCxhQUFhLENBQUN4RyxXQUFkLENBQTBCeUcsZ0JBQTFCO0VBQ0FELGFBQWEsQ0FBQ3hHLFdBQWQsQ0FBMEIyRyxZQUExQjtFQUNBSix1QkFBdUIsQ0FBQ3ZHLFdBQXhCLENBQW9Dd0csYUFBcEM7RUFDQUQsdUJBQXVCLENBQUN2RyxXQUF4QixDQUFvQzRHLG9CQUFwQztFQUNBekgsU0FBUyxDQUFDYSxXQUFWLENBQXNCdUcsdUJBQXRCO0FBQ0QsQ0E3Q0Q7O0FBK0NBLE1BQU1PLG9CQUFvQixHQUFJM0gsU0FBRCxJQUFlO0VBQzFDO0VBQ0EsTUFBTTRILHdCQUF3QixHQUFHcEksUUFBUSxDQUFDVSxhQUFULENBQXVCLEtBQXZCLENBQWpDO0VBQ0EwSCx3QkFBd0IsQ0FBQ3pILFNBQXpCLENBQW1DQyxHQUFuQyxDQUF1QywwQkFBdkMsRUFBbUUsU0FBbkUsRUFBOEUsUUFBOUU7RUFDQXdILHdCQUF3QixDQUFDcEgsRUFBekIsR0FBOEIsZ0JBQTlCLENBSjBDLENBTTFDOztFQUNBLE1BQU1xSCxVQUFVLEdBQUdySSxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7RUFDQTJILFVBQVUsQ0FBQzFILFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFlBQXpCLEVBUjBDLENBVTFDOztFQUNBLE1BQU0wSCxTQUFTLEdBQUd0SSxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBbEI7RUFDQTRILFNBQVMsQ0FBQ3ZILFNBQVYsR0FBc0IsY0FBdEIsQ0FaMEMsQ0FjMUM7O0VBQ0EsTUFBTXdILGNBQWMsR0FBR3ZJLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixNQUF2QixDQUF2QjtFQUNBNkgsY0FBYyxDQUFDNUgsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsZ0JBQTdCO0VBQ0EySCxjQUFjLENBQUNDLFlBQWYsR0FBOEIsS0FBOUI7RUFFQXJGLDJEQUFZLENBQUNvRixjQUFELENBQVosQ0FuQjBDLENBcUIxQzs7RUFDQUYsVUFBVSxDQUFDaEgsV0FBWCxDQUF1QmlILFNBQXZCO0VBQ0FGLHdCQUF3QixDQUFDL0csV0FBekIsQ0FBcUNnSCxVQUFyQztFQUNBRCx3QkFBd0IsQ0FBQy9HLFdBQXpCLENBQXFDckIsUUFBUSxDQUFDVSxhQUFULENBQXVCLElBQXZCLENBQXJDO0VBQ0EwSCx3QkFBd0IsQ0FBQy9HLFdBQXpCLENBQXFDa0gsY0FBckM7RUFDQS9ILFNBQVMsQ0FBQ2EsV0FBVixDQUFzQitHLHdCQUF0QjtBQUNELENBM0JEOztBQTZCQSxNQUFNSyxpQkFBaUIsR0FBSWpJLFNBQUQsSUFBZTtFQUN2QyxNQUFNa0kscUJBQXFCLEdBQUcxSSxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBOUI7RUFDQWdJLHFCQUFxQixDQUFDL0gsU0FBdEIsQ0FBZ0NDLEdBQWhDLENBQW9DLFNBQXBDLEVBQStDLFFBQS9DO0VBQ0E4SCxxQkFBcUIsQ0FBQzFILEVBQXRCLEdBQTJCLGFBQTNCLENBSHVDLENBS3ZDOztFQUNBLE1BQU0ySCxXQUFXLEdBQUczSSxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7RUFDQWlJLFdBQVcsQ0FBQ2hJLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLGFBQTFCO0VBQ0ErSCxXQUFXLENBQUM1SCxTQUFaLEdBQXdCLFVBQXhCO0VBQ0E0SCxXQUFXLENBQUN2SCxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxNQUFNO0lBQzFDdUgsV0FBVyxDQUFDaEksU0FBWixDQUFzQm1HLE1BQXRCLENBQTZCLFVBQTdCO0VBQ0QsQ0FGRCxFQVR1QyxDQWF2Qzs7RUFDQTRCLHFCQUFxQixDQUFDckgsV0FBdEIsQ0FBa0NzSCxXQUFsQztFQUNBbkksU0FBUyxDQUFDYSxXQUFWLENBQXNCcUgscUJBQXRCO0FBQ0QsQ0FoQkQ7O0FBa0JBLE1BQU1FLHNCQUFzQixHQUFHLE1BQU07RUFDbkMsTUFBTUMsaUJBQWlCLEdBQUc3SSxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBMUI7RUFDQW1JLGlCQUFpQixDQUFDbEksU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLGtCQUFoQztFQUVBNkYsa0JBQWtCLENBQUNvQyxpQkFBRCxDQUFsQjtFQUNBM0IsZ0JBQWdCLENBQUMyQixpQkFBRCxDQUFoQjtFQUNBbEIsbUJBQW1CLENBQUNrQixpQkFBRCxDQUFuQjtFQUNBVixvQkFBb0IsQ0FBQ1UsaUJBQUQsQ0FBcEI7RUFDQUosaUJBQWlCLENBQUNJLGlCQUFELENBQWpCO0VBRUFwRixJQUFJLENBQUNwQyxXQUFMLENBQWlCd0gsaUJBQWpCO0VBQ0ExQyxpQkFBaUI7QUFDbEIsQ0FaRDs7QUFjQSxNQUFNMkMsWUFBWSxHQUFHLE1BQU07RUFDekIsTUFBTUMsTUFBTSxHQUFHL0ksUUFBUSxDQUFDVSxhQUFULENBQXVCLFFBQXZCLENBQWY7RUFFQSxNQUFNc0ksU0FBUyxHQUFHaEosUUFBUSxDQUFDVSxhQUFULENBQXVCLEdBQXZCLENBQWxCO0VBQ0FzSSxTQUFTLENBQUNDLFdBQVYsNEJBQXVDLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUF2QztFQUVBLE1BQU1DLFVBQVUsR0FBR3BKLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixHQUF2QixDQUFuQjtFQUNBMEksVUFBVSxDQUFDQyxJQUFYLEdBQWtCLGdDQUFsQjtFQUNBRCxVQUFVLENBQUNqRixNQUFYLEdBQW9CLFFBQXBCO0VBRUEsTUFBTW1GLGFBQWEsR0FBR3RKLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtFQUNBNEksYUFBYSxDQUFDL0QsR0FBZCxHQUFvQm5DLDBEQUFwQjtFQUNBa0csYUFBYSxDQUFDdkUsWUFBZCxDQUEyQixPQUEzQixFQUFvQyxRQUFwQztFQUVBcUUsVUFBVSxDQUFDL0gsV0FBWCxDQUF1QmlJLGFBQXZCO0VBQ0FQLE1BQU0sQ0FBQzFILFdBQVAsQ0FBbUIySCxTQUFuQjtFQUNBRCxNQUFNLENBQUMxSCxXQUFQLENBQW1CK0gsVUFBbkI7RUFFQTNGLElBQUksQ0FBQ3BDLFdBQUwsQ0FBaUIwSCxNQUFqQjtBQUNELENBbkJEOztBQXFCQSxNQUFNUSxVQUFVLEdBQUcsTUFBTTtFQUN2QmxELFlBQVk7RUFDWkcsY0FBYztFQUNkb0Msc0JBQXNCO0VBQ3RCRSxZQUFZO0FBQ2IsQ0FMRDs7QUFPQSxpRUFBZVMsVUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvZm9ybVZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL3BhZ2VMb2FkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ291bnRyeSBuYW1lcyBvYmplY3QgdXNpbmcgMi1sZXR0ZXIgY291bnRyeSBjb2RlcyB0byByZWZlcmVuY2UgY291bnRyeSBuYW1lXG4vLyBJU08gMzE2NiBBbHBoYS0yIEZvcm1hdDogWzIgbGV0dGVyIENvdW50cnkgQ29kZV06IFtDb3VudHJ5IE5hbWVdXG4vLyBTb3J0ZWQgYWxwaGFiZXRpY2FsIGJ5IGNvdW50cnkgbmFtZSAoc3BlY2lhbCBjaGFyYWN0ZXJzIG9uIGJvdHRvbSlcbmNvbnN0IGNvdW50cnlMaXN0QWxwaGEyID0ge1xuICBBRjogJ0FmZ2hhbmlzdGFuJyxcbiAgQUw6ICdBbGJhbmlhJyxcbiAgRFo6ICdBbGdlcmlhJyxcbiAgQVM6ICdBbWVyaWNhbiBTYW1vYScsXG4gIEFEOiAnQW5kb3JyYScsXG4gIEFPOiAnQW5nb2xhJyxcbiAgQUk6ICdBbmd1aWxsYScsXG4gIEFROiAnQW50YXJjdGljYScsXG4gIEFHOiAnQW50aWd1YSBhbmQgQmFyYnVkYScsXG4gIEFSOiAnQXJnZW50aW5hJyxcbiAgQU06ICdBcm1lbmlhJyxcbiAgQVc6ICdBcnViYScsXG4gIEFVOiAnQXVzdHJhbGlhJyxcbiAgQVQ6ICdBdXN0cmlhJyxcbiAgQVo6ICdBemVyYmFpamFuJyxcbiAgQlM6ICdCYWhhbWFzICh0aGUpJyxcbiAgQkg6ICdCYWhyYWluJyxcbiAgQkQ6ICdCYW5nbGFkZXNoJyxcbiAgQkI6ICdCYXJiYWRvcycsXG4gIEJZOiAnQmVsYXJ1cycsXG4gIEJFOiAnQmVsZ2l1bScsXG4gIEJaOiAnQmVsaXplJyxcbiAgQko6ICdCZW5pbicsXG4gIEJNOiAnQmVybXVkYScsXG4gIEJUOiAnQmh1dGFuJyxcbiAgQk86ICdCb2xpdmlhIChQbHVyaW5hdGlvbmFsIFN0YXRlIG9mKScsXG4gIEJROiAnQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmEnLFxuICBCQTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLFxuICBCVzogJ0JvdHN3YW5hJyxcbiAgQlY6ICdCb3V2ZXQgSXNsYW5kJyxcbiAgQlI6ICdCcmF6aWwnLFxuICBJTzogJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeSAodGhlKScsXG4gIEJOOiAnQnJ1bmVpIERhcnVzc2FsYW0nLFxuICBCRzogJ0J1bGdhcmlhJyxcbiAgQkY6ICdCdXJraW5hIEZhc28nLFxuICBCSTogJ0J1cnVuZGknLFxuICBDVjogJ0NhYm8gVmVyZGUnLFxuICBLSDogJ0NhbWJvZGlhJyxcbiAgQ006ICdDYW1lcm9vbicsXG4gIENBOiAnQ2FuYWRhJyxcbiAgS1k6ICdDYXltYW4gSXNsYW5kcyAodGhlKScsXG4gIENGOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljICh0aGUpJyxcbiAgVEQ6ICdDaGFkJyxcbiAgQ0w6ICdDaGlsZScsXG4gIENOOiAnQ2hpbmEnLFxuICBDWDogJ0NocmlzdG1hcyBJc2xhbmQnLFxuICBDQzogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzICh0aGUpJyxcbiAgQ086ICdDb2xvbWJpYScsXG4gIEtNOiAnQ29tb3JvcyAodGhlKScsXG4gIENEOiAnQ29uZ28gKHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSknLFxuICBDRzogJ0NvbmdvICh0aGUpJyxcbiAgQ0s6ICdDb29rIElzbGFuZHMgKHRoZSknLFxuICBDUjogJ0Nvc3RhIFJpY2EnLFxuICBIUjogJ0Nyb2F0aWEnLFxuICBDVTogJ0N1YmEnLFxuICBDVzogJ0N1cmHDp2FvJyxcbiAgQ1k6ICdDeXBydXMnLFxuICBDWjogJ0N6ZWNoaWEnLFxuICBDSTogXCJDw7R0ZSBkJ0l2b2lyZVwiLFxuICBESzogJ0Rlbm1hcmsnLFxuICBESjogJ0RqaWJvdXRpJyxcbiAgRE06ICdEb21pbmljYScsXG4gIERPOiAnRG9taW5pY2FuIFJlcHVibGljICh0aGUpJyxcbiAgRUM6ICdFY3VhZG9yJyxcbiAgRUc6ICdFZ3lwdCcsXG4gIFNWOiAnRWwgU2FsdmFkb3InLFxuICBHUTogJ0VxdWF0b3JpYWwgR3VpbmVhJyxcbiAgRVI6ICdFcml0cmVhJyxcbiAgRUU6ICdFc3RvbmlhJyxcbiAgU1o6ICdFc3dhdGluaScsXG4gIEVUOiAnRXRoaW9waWEnLFxuICBGSzogJ0ZhbGtsYW5kIElzbGFuZHMgKHRoZSkgW01hbHZpbmFzXScsXG4gIEZPOiAnRmFyb2UgSXNsYW5kcyAodGhlKScsXG4gIEZKOiAnRmlqaScsXG4gIEZJOiAnRmlubGFuZCcsXG4gIEZSOiAnRnJhbmNlJyxcbiAgR0Y6ICdGcmVuY2ggR3VpYW5hJyxcbiAgUEY6ICdGcmVuY2ggUG9seW5lc2lhJyxcbiAgVEY6ICdGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXMgKHRoZSknLFxuICBHQTogJ0dhYm9uJyxcbiAgR006ICdHYW1iaWEgKHRoZSknLFxuICBHRTogJ0dlb3JnaWEnLFxuICBERTogJ0dlcm1hbnknLFxuICBHSDogJ0doYW5hJyxcbiAgR0k6ICdHaWJyYWx0YXInLFxuICBHUjogJ0dyZWVjZScsXG4gIEdMOiAnR3JlZW5sYW5kJyxcbiAgR0Q6ICdHcmVuYWRhJyxcbiAgR1A6ICdHdWFkZWxvdXBlJyxcbiAgR1U6ICdHdWFtJyxcbiAgR1Q6ICdHdWF0ZW1hbGEnLFxuICBHRzogJ0d1ZXJuc2V5JyxcbiAgR046ICdHdWluZWEnLFxuICBHVzogJ0d1aW5lYS1CaXNzYXUnLFxuICBHWTogJ0d1eWFuYScsXG4gIEhUOiAnSGFpdGknLFxuICBITTogJ0hlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kcycsXG4gIFZBOiAnSG9seSBTZWUgKHRoZSknLFxuICBITjogJ0hvbmR1cmFzJyxcbiAgSEs6ICdIb25nIEtvbmcnLFxuICBIVTogJ0h1bmdhcnknLFxuICBJUzogJ0ljZWxhbmQnLFxuICBJTjogJ0luZGlhJyxcbiAgSUQ6ICdJbmRvbmVzaWEnLFxuICBJUjogJ0lyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpJyxcbiAgSVE6ICdJcmFxJyxcbiAgSUU6ICdJcmVsYW5kJyxcbiAgSU06ICdJc2xlIG9mIE1hbicsXG4gIElMOiAnSXNyYWVsJyxcbiAgSVQ6ICdJdGFseScsXG4gIEpNOiAnSmFtYWljYScsXG4gIEpQOiAnSmFwYW4nLFxuICBKRTogJ0plcnNleScsXG4gIEpPOiAnSm9yZGFuJyxcbiAgS1o6ICdLYXpha2hzdGFuJyxcbiAgS0U6ICdLZW55YScsXG4gIEtJOiAnS2lyaWJhdGknLFxuICBLUDogXCJLb3JlYSAodGhlIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpXCIsXG4gIEtSOiAnS29yZWEgKHRoZSBSZXB1YmxpYyBvZiknLFxuICBLVzogJ0t1d2FpdCcsXG4gIEtHOiAnS3lyZ3l6c3RhbicsXG4gIExBOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljICh0aGUpXCIsXG4gIExWOiAnTGF0dmlhJyxcbiAgTEI6ICdMZWJhbm9uJyxcbiAgTFM6ICdMZXNvdGhvJyxcbiAgTFI6ICdMaWJlcmlhJyxcbiAgTFk6ICdMaWJ5YScsXG4gIExJOiAnTGllY2h0ZW5zdGVpbicsXG4gIExUOiAnTGl0aHVhbmlhJyxcbiAgTFU6ICdMdXhlbWJvdXJnJyxcbiAgTU86ICdNYWNhbycsXG4gIE1HOiAnTWFkYWdhc2NhcicsXG4gIE1XOiAnTWFsYXdpJyxcbiAgTVk6ICdNYWxheXNpYScsXG4gIE1WOiAnTWFsZGl2ZXMnLFxuICBNTDogJ01hbGknLFxuICBNVDogJ01hbHRhJyxcbiAgTUg6ICdNYXJzaGFsbCBJc2xhbmRzICh0aGUpJyxcbiAgTVE6ICdNYXJ0aW5pcXVlJyxcbiAgTVI6ICdNYXVyaXRhbmlhJyxcbiAgTVU6ICdNYXVyaXRpdXMnLFxuICBZVDogJ01heW90dGUnLFxuICBNWDogJ01leGljbycsXG4gIEZNOiAnTWljcm9uZXNpYSAoRmVkZXJhdGVkIFN0YXRlcyBvZiknLFxuICBNRDogJ01vbGRvdmEgKHRoZSBSZXB1YmxpYyBvZiknLFxuICBNQzogJ01vbmFjbycsXG4gIE1OOiAnTW9uZ29saWEnLFxuICBNRTogJ01vbnRlbmVncm8nLFxuICBNUzogJ01vbnRzZXJyYXQnLFxuICBNQTogJ01vcm9jY28nLFxuICBNWjogJ01vemFtYmlxdWUnLFxuICBNTTogJ015YW5tYXInLFxuICBOQTogJ05hbWliaWEnLFxuICBOUjogJ05hdXJ1JyxcbiAgTlA6ICdOZXBhbCcsXG4gIE5MOiAnTmV0aGVybGFuZHMgKHRoZSknLFxuICBOQzogJ05ldyBDYWxlZG9uaWEnLFxuICBOWjogJ05ldyBaZWFsYW5kJyxcbiAgTkk6ICdOaWNhcmFndWEnLFxuICBORTogJ05pZ2VyICh0aGUpJyxcbiAgTkc6ICdOaWdlcmlhJyxcbiAgTlU6ICdOaXVlJyxcbiAgTkY6ICdOb3Jmb2xrIElzbGFuZCcsXG4gIE1QOiAnTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzICh0aGUpJyxcbiAgTk86ICdOb3J3YXknLFxuICBPTTogJ09tYW4nLFxuICBQSzogJ1Bha2lzdGFuJyxcbiAgUFc6ICdQYWxhdScsXG4gIFBTOiAnUGFsZXN0aW5lLCBTdGF0ZSBvZicsXG4gIFBBOiAnUGFuYW1hJyxcbiAgUEc6ICdQYXB1YSBOZXcgR3VpbmVhJyxcbiAgUFk6ICdQYXJhZ3VheScsXG4gIFBFOiAnUGVydScsXG4gIFBIOiAnUGhpbGlwcGluZXMgKHRoZSknLFxuICBQTjogJ1BpdGNhaXJuJyxcbiAgUEw6ICdQb2xhbmQnLFxuICBQVDogJ1BvcnR1Z2FsJyxcbiAgUFI6ICdQdWVydG8gUmljbycsXG4gIFFBOiAnUWF0YXInLFxuICBNSzogJ1JlcHVibGljIG9mIE5vcnRoIE1hY2Vkb25pYScsXG4gIFJPOiAnUm9tYW5pYScsXG4gIFJVOiAnUnVzc2lhbiBGZWRlcmF0aW9uICh0aGUpJyxcbiAgUlc6ICdSd2FuZGEnLFxuICBSRTogJ1LDqXVuaW9uJyxcbiAgQkw6ICdTYWludCBCYXJ0aMOpbGVteScsXG4gIFNIOiAnU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGEnLFxuICBLTjogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXG4gIExDOiAnU2FpbnQgTHVjaWEnLFxuICBNRjogJ1NhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpJyxcbiAgUE06ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJyxcbiAgVkM6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXG4gIFdTOiAnU2Ftb2EnLFxuICBTTTogJ1NhbiBNYXJpbm8nLFxuICBTVDogJ1NhbyBUb21lIGFuZCBQcmluY2lwZScsXG4gIFNBOiAnU2F1ZGkgQXJhYmlhJyxcbiAgU046ICdTZW5lZ2FsJyxcbiAgUlM6ICdTZXJiaWEnLFxuICBTQzogJ1NleWNoZWxsZXMnLFxuICBTTDogJ1NpZXJyYSBMZW9uZScsXG4gIFNHOiAnU2luZ2Fwb3JlJyxcbiAgU1g6ICdTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpJyxcbiAgU0s6ICdTbG92YWtpYScsXG4gIFNJOiAnU2xvdmVuaWEnLFxuICBTQjogJ1NvbG9tb24gSXNsYW5kcycsXG4gIFNPOiAnU29tYWxpYScsXG4gIFpBOiAnU291dGggQWZyaWNhJyxcbiAgR1M6ICdTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXG4gIFNTOiAnU291dGggU3VkYW4nLFxuICBFUzogJ1NwYWluJyxcbiAgTEs6ICdTcmkgTGFua2EnLFxuICBTRDogJ1N1ZGFuICh0aGUpJyxcbiAgU1I6ICdTdXJpbmFtZScsXG4gIFNKOiAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbicsXG4gIFNFOiAnU3dlZGVuJyxcbiAgQ0g6ICdTd2l0emVybGFuZCcsXG4gIFNZOiAnU3lyaWFuIEFyYWIgUmVwdWJsaWMnLFxuICBUVzogJ1RhaXdhbicsXG4gIFRKOiAnVGFqaWtpc3RhbicsXG4gIFRaOiAnVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZicsXG4gIFRIOiAnVGhhaWxhbmQnLFxuICBUTDogJ1RpbW9yLUxlc3RlJyxcbiAgVEc6ICdUb2dvJyxcbiAgVEs6ICdUb2tlbGF1JyxcbiAgVE86ICdUb25nYScsXG4gIFRUOiAnVHJpbmlkYWQgYW5kIFRvYmFnbycsXG4gIFROOiAnVHVuaXNpYScsXG4gIFRSOiAnVHVya2V5JyxcbiAgVE06ICdUdXJrbWVuaXN0YW4nLFxuICBUQzogJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcyAodGhlKScsXG4gIFRWOiAnVHV2YWx1JyxcbiAgVUc6ICdVZ2FuZGEnLFxuICBVQTogJ1VrcmFpbmUnLFxuICBBRTogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzICh0aGUpJyxcbiAgR0I6ICdVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kICh0aGUpJyxcbiAgVU06ICdVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMgKHRoZSknLFxuICBVUzogJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYSAodGhlKScsXG4gIFVZOiAnVXJ1Z3VheScsXG4gIFVaOiAnVXpiZWtpc3RhbicsXG4gIFZVOiAnVmFudWF0dScsXG4gIFZFOiAnVmVuZXp1ZWxhIChCb2xpdmFyaWFuIFJlcHVibGljIG9mKScsXG4gIFZOOiAnVmlldCBOYW0nLFxuICBWRzogJ1ZpcmdpbiBJc2xhbmRzIChCcml0aXNoKScsXG4gIFZJOiAnVmlyZ2luIElzbGFuZHMgKFUuUy4pJyxcbiAgV0Y6ICdXYWxsaXMgYW5kIEZ1dHVuYScsXG4gIEVIOiAnV2VzdGVybiBTYWhhcmEnLFxuICBZRTogJ1llbWVuJyxcbiAgWk06ICdaYW1iaWEnLFxuICBaVzogJ1ppbWJhYndlJyxcbiAgQVg6ICfDhWxhbmQgSXNsYW5kcycsXG59O1xuXG5jb25zdCB2YWxpZGF0ZUVtYWlsID0gKCkgPT4ge1xuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG4gIGlmIChlbWFpbElucHV0LnZhbGlkaXR5LnR5cGVNaXNtYXRjaCB8fCBlbWFpbElucHV0LnZhbHVlID09PSAnJykge1xuICAgIGVtYWlsSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0VudGVyIGEgdmFsaWQgZW1haWwnKTtcbiAgICBlbWFpbElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gIH0gZWxzZSB7XG4gICAgZW1haWxJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUVtYWlsSW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIGVtYWlsIGNvbnRhaW5lclxuICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xuICAvLyBlbWFpbCBsYWJlbFxuICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZW1haWxMYWJlbC5mb3IgPSAnZW1haWwnO1xuICBlbWFpbExhYmVsLmlubmVyVGV4dCA9ICdFbWFpbCc7XG4gIC8vIGVtYWlsIGlucHV0XG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBlbWFpbElucHV0LmlkID0gJ2VtYWlsJztcbiAgZW1haWxJbnB1dC5uYW1lID0gJ2VtYWlsJztcbiAgZW1haWxJbnB1dC50eXBlID0gJ2VtYWlsJztcbiAgZW1haWxJbnB1dC5wbGFjZWhvbGRlciA9ICdqYW5lQGV4YW1wbGUuY29tJztcbiAgLy8gdmFsaWRpdHkgY2hlY2tcbiAgZW1haWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHZhbGlkYXRlRW1haWwoKSk7XG4gIC8vIGFwcGVuZCBlbWFpbFxuICBmb3JtUm93LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICBmb3JtUm93LmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XG59O1xuXG5jb25zdCB2YWxpZGF0ZUNvdW50cnlJbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgY291bnRyeVNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5Jyk7XG4gIGlmIChjb3VudHJ5U2VsZWN0aW9uLnZhbHVlID09PSAnJykge1xuICAgIGNvdW50cnlTZWxlY3Rpb24uc2V0Q3VzdG9tVmFsaWRpdHkoJ1doaWNoIGNvdW50cnkgYXJlIHlvdSBpbj8nKTtcbiAgICBjb3VudHJ5U2VsZWN0aW9uLnJlcG9ydFZhbGlkaXR5KCk7XG4gIH0gZWxzZSB7XG4gICAgY291bnRyeVNlbGVjdGlvbi5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUNvdW50cnlJbnB1dCA9IChjb250YWluZXIpID0+IHtcbiAgLy8gY291bnRyeSBjb250YWluZXJcbiAgY29uc3QgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtUm93LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcbiAgLy8gY291bnRyeSBsYWJlbFxuICBjb25zdCBjb3VudHJ5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb3VudHJ5TGFiZWwuZm9yID0gJ2NvdW50cnknO1xuICBjb3VudHJ5TGFiZWwuaW5uZXJUZXh0ID0gJ0NvdW50cnknO1xuICAvLyBjb3VudHJ5IHNlbGVjdGlvblxuICBjb25zdCBjb3VudHJ5U2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvdW50cnlTZWxlY3Rpb24uaWQgPSAnY291bnRyeSc7XG4gIGNvdW50cnlTZWxlY3Rpb24ubmFtZSA9ICdjb3VudHJ5JztcbiAgLy8gY291bnRyeSBvcHRpb25zXG4gIGNvbnN0IGJsYW5rT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGJsYW5rT3B0aW9uLnZhbHVlID0gJyc7XG4gIGJsYW5rT3B0aW9uLmlubmVyVGV4dCA9ICcnO1xuICBjb3VudHJ5U2VsZWN0aW9uLmFwcGVuZENoaWxkKGJsYW5rT3B0aW9uKTtcbiAgT2JqZWN0LmtleXMoY291bnRyeUxpc3RBbHBoYTIpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGtleSwgY291bnRyeUxpc3RBbHBoYTJba2V5XSk7XG4gICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbmV3T3B0aW9uLnZhbHVlID0ga2V5O1xuICAgIG5ld09wdGlvbi5pbm5lclRleHQgPSBjb3VudHJ5TGlzdEFscGhhMltrZXldO1xuICAgIGNvdW50cnlTZWxlY3Rpb24uYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcbiAgfSk7XG4gIC8vIHZhbGlkaXR5IGNoZWNrXG4gIGNvdW50cnlTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB2YWxpZGF0ZUNvdW50cnlJbnB1dCgpKTtcbiAgLy8gYXBwZW5kIGNvdW50cnkgaW5wdXRcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChjb3VudHJ5TGFiZWwpO1xuICBmb3JtUm93LmFwcGVuZENoaWxkKGNvdW50cnlTZWxlY3Rpb24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XG59O1xuXG5jb25zdCB2YWxpZGF0ZVppcENvZGUgPSAoKSA9PiB7XG4gIGNvbnN0IHppcENvZGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6aXBjb2RlJyk7XG4gIGlmICgvXlxcZHs1fSgtXFxkezR9KT8kLy50ZXN0KHppcENvZGVJbnB1dC52YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgemlwQ29kZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdFbnRlciBhIHZhbGlkIHppcGNvZGUnKTtcbiAgICB6aXBDb2RlSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgfSBlbHNlIHtcbiAgICB6aXBDb2RlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVaaXBDb2RlSW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIHppcCBjb2RlIGNvbnRhaW5lclxuICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xuICAvLyB6aXAgY29kZSBsYWJlbFxuICBjb25zdCB6aXBDb2RlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB6aXBDb2RlTGFiZWwuZm9yID0gJ3ppcGNvZGUnO1xuICB6aXBDb2RlTGFiZWwuaW5uZXJUZXh0ID0gJ1ppcCBjb2RlJztcbiAgLy8gemlwIGNvZGUgaW5wdXRcbiAgY29uc3QgemlwQ29kZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgemlwQ29kZUlucHV0LmlkID0gJ3ppcGNvZGUnO1xuICB6aXBDb2RlSW5wdXQubmFtZSA9ICd6aXBjb2RlJztcbiAgLy8gdmFsaWRpdHkgY2hlY2tcbiAgemlwQ29kZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdmFsaWRhdGVaaXBDb2RlKCkpO1xuICAvLyBhcHBlbmQgemlwIGNvZGUgaW5wdXRcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZCh6aXBDb2RlTGFiZWwpO1xuICBmb3JtUm93LmFwcGVuZENoaWxkKHppcENvZGVJbnB1dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlUGFzc3dvcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcblxuICAvLyBWYWxpZGF0ZSBsb3dlcmNhc2UgbGV0dGVyc1xuICBpZiAoL1thLXpdL2cudGVzdChwYXNzd29yZElucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICBwYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGNvbnRhaW4gbG93ZXJjYXNlIGxldHRlcicpO1xuICAgIHBhc3N3b3JkSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAvLyBWYWxpZGF0ZSBjYXBpdGFsIGxldHRlcnNcbiAgfSBlbHNlIGlmICgvW0EtWl0vZy50ZXN0KHBhc3N3b3JkSW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xuICAgIHBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgY29udGFpbiB1cHBlcmNhc2UgbGV0dGVyJyk7XG4gICAgcGFzc3dvcmRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIC8vIFZhbGlkYXRlIG51bWJlcnNcbiAgfSBlbHNlIGlmICgvWzAtOV0vZy50ZXN0KHBhc3N3b3JkSW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xuICAgIHBhc3N3b3JkSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgY29udGFpbiBhIG51bWJlcicpO1xuICAgIHBhc3N3b3JkSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAvLyBWYWxpZGF0ZSBsZW5ndGhcbiAgfSBlbHNlIGlmIChwYXNzd29yZElucHV0LnZhbHVlLmxlbmd0aCA8IDgpIHtcbiAgICBwYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycycpO1xuICAgIHBhc3N3b3JkSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgfSBlbHNlIHtcbiAgICBwYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlUGFzc3dvcmRJbnB1dCA9IChjb250YWluZXIpID0+IHtcbiAgLy8gcGFzc3dvcmQgY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gIC8vIHBhc3N3b3JkIGxhYmVsXG4gIGNvbnN0IHBhc3N3b3JkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwYXNzd29yZExhYmVsLmZvciA9ICdwYXNzd29yZCc7XG4gIHBhc3N3b3JkTGFiZWwuaW5uZXJUZXh0ID0gJ1Bhc3N3b3JkJztcbiAgLy8gcGFzc3dvcmQgaW5wdXRcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHBhc3N3b3JkSW5wdXQuaWQgPSAncGFzc3dvcmQnO1xuICBwYXNzd29yZElucHV0Lm5hbWUgPSAncGFzc3dvcmQnO1xuICBwYXNzd29yZElucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICAvLyB2YWxpZGl0eSBjaGVja1xuICBwYXNzd29yZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdmFsaWRhdGVQYXNzd29yZCgpKTtcbiAgLy8gYXBwZW5kIHBhc3N3b3JkIGlucHV0XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQocGFzc3dvcmRMYWJlbCk7XG4gIGZvcm1Sb3cuYXBwZW5kQ2hpbGQocGFzc3dvcmRJbnB1dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IGNvbmZpcm1QYXNzd29yZCA9ICgpID0+IHtcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmRDb25maXJtYXRpb24nKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpLnZhbHVlO1xuICBpZiAoY29uZmlybVBhc3N3b3JkSW5wdXQudmFsdWUgIT09IHBhc3N3b3JkSW5wdXQpIHtcbiAgICBjb25maXJtUGFzc3dvcmRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnRG9lcyBub3QgbWF0Y2gnKTtcbiAgICBjb25maXJtUGFzc3dvcmRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpcm1QYXNzd29yZElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlQ29uZmlybVBhc3N3b3JkSW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIGNvbmZpcm0gcGFzc3dvcmQgY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gIC8vIGNvbmZpcm0gcGFzc3dvcmQgbGFiZWxcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25maXJtUGFzc3dvcmRMYWJlbC5mb3IgPSAncGFzc3dvcmRDb25maXJtYXRpb24nO1xuICBjb25maXJtUGFzc3dvcmRMYWJlbC5pbm5lclRleHQgPSAnQ29uZmlybSBwYXNzd29yZCc7XG4gIC8vIGNvbm5maXJtIHBhc3N3b3JkIGlucHV0XG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uZmlybVBhc3N3b3JkSW5wdXQudHlwZSA9ICdwYXNzd29yZCc7XG4gIGNvbmZpcm1QYXNzd29yZElucHV0LmlkID0gJ3Bhc3N3b3JkQ29uZmlybWF0aW9uJztcbiAgY29uZmlybVBhc3N3b3JkSW5wdXQubmFtZSA9ICdwYXNzd29yZENvbmZpcm1hdGlvbic7XG4gIC8vIHZhbGlkaXR5IGNoZWNrXG4gIGNvbmZpcm1QYXNzd29yZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gY29uZmlybVBhc3N3b3JkKCkpO1xuICAvLyBhcHBlbmQgY29uZmlybSBwYXNzd29yZCBpbnB1dFxuICBmb3JtUm93LmFwcGVuZENoaWxkKGNvbmZpcm1QYXNzd29yZExhYmVsKTtcbiAgZm9ybVJvdy5hcHBlbmRDaGlsZChjb25maXJtUGFzc3dvcmRJbnB1dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IHN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xuICAvLyBwcmV2ZW50IGFjdHVhbCBmb3JtIHN1Ym1pc3Npb25cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyB2YWxpZGF0ZSBmb3JtIGZpZWxkc1xuICBjb25maXJtUGFzc3dvcmQoKTtcbiAgdmFsaWRhdGVQYXNzd29yZCgpO1xuICB2YWxpZGF0ZVppcENvZGUoKTtcbiAgdmFsaWRhdGVDb3VudHJ5SW5wdXQoKTtcbiAgdmFsaWRhdGVFbWFpbCgpO1xufTtcblxuY29uc3QgY3JlYXRlU3VibWl0QnV0dG9uID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBzdWJtaXQgYnV0dG9uIGNvbnRhaW5lclxuICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZCgnZm9ybVJvdycpO1xuICAvLyBzdWJtaXQgYnV0dG9uXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0QnRuJyk7XG4gIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgLy8gZXZlbnQgbGlzdGVuZXJcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHN1Ym1pdEZvcm0oZSkpO1xuICAvLyBhcHBlbmQgc3VibWl0IGJ1dHRvblxuICBmb3JtUm93LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlRm9ybSA9IChjb250YWluZXIpID0+IHtcbiAgY3JlYXRlRW1haWxJbnB1dChjb250YWluZXIpO1xuICBjcmVhdGVDb3VudHJ5SW5wdXQoY29udGFpbmVyKTtcbiAgY3JlYXRlWmlwQ29kZUlucHV0KGNvbnRhaW5lcik7XG4gIGNyZWF0ZVBhc3N3b3JkSW5wdXQoY29udGFpbmVyKTtcbiAgY3JlYXRlQ29uZmlybVBhc3N3b3JkSW5wdXQoY29udGFpbmVyKTtcbiAgY3JlYXRlU3VibWl0QnV0dG9uKGNvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUZvcm07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IGdpdGh1Ykljb24gZnJvbSAnLi9hc3NldHMvR2l0SHViLWxpZ2h0LTMycHgucG5nJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzEgZnJvbSAnLi9hc3NldHMvSU1HXzEyMDEuanBnJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzIgZnJvbSAnLi9hc3NldHMvSU1HXzEyMTIuanBnJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzMgZnJvbSAnLi9hc3NldHMvSU1HXzg3MTYuanBnJztcbmltcG9ydCBwbGFjZWhvbGRlckltZzQgZnJvbSAnLi9hc3NldHMvSU1HXzg4NTUuanBnJztcbmltcG9ydCBnZW5lcmF0ZUZvcm0gZnJvbSAnLi9mb3JtVmFsaWRhdGlvbic7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbi8vIGhlbHBlciBmdW5jdGlvbnNcbmNvbnN0IHByb2Nlc3NNZW51U2VsZWN0aW9uID0gKGUpID0+IHtcbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbk1lbnUnKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Q29udGFpbmVyJyk7XG5cbiAgLy8gZGVzZWxlY3QgYW55IG1lbnUgaXRlbXNcbiAgY29uc3QgbWVudUNvdW50ID0gbWFpbk1lbnUuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUNvdW50OyBpKyspIHtcbiAgICBtYWluTWVudS5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICB9XG5cbiAgLy8gc2VsZWN0IG5ldyBtZW51IGl0ZW1cbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAvLyB0b2dnbGUgY29udGVudFxuICBjb25zdCBjb250ZW50Q291bnQgPSBjb250ZW50Q29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRDb3VudDsgaSsrKSB7XG4gICAgLy8gaGlkZSBjdXJyZW50IGNvbnRlbnRcbiAgICBpZiAoY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpID09PSBmYWxzZSkge1xuICAgICAgY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgLy8gZGlzcGxheSBzZWxlY3RlZCBjb250ZW50XG4gICAgY29uc29sZS5sb2coY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5pZCk7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpO1xuICAgIGlmIChjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuW2ldLmlkID09PSBlLnRhcmdldC5pZCkge1xuICAgICAgY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGl0ZW1OYW1lLCBpdGVtQ29udGFpbmVyLCBpdGVtSWQsIGl0ZW1DbGFzcykgPT4ge1xuICBjb25zdCBuZXdNZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIG5ld01lbnVJdGVtLmlkID0gYCR7aXRlbUlkfWA7XG5cbiAgLy8gYWRkIGNsYXNzIGlmIG9uZSBpcyBnaXZlblxuICBpZiAoaXRlbUNsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICBuZXdNZW51SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYCR7aXRlbUNsYXNzfWApO1xuICB9XG5cbiAgbmV3TWVudUl0ZW0uaW5uZXJUZXh0ID0gYCR7aXRlbU5hbWV9YDtcbiAgbmV3TWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcblxuICBuZXdNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBwcm9jZXNzTWVudVNlbGVjdGlvbihlKSk7XG5cbiAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdNZW51SXRlbSk7XG59O1xuXG5jb25zdCBhZGRJbWFnZVRvU2Nyb2xsZXIgPSAoaW1hZ2UsIGksIHNjcm9sbGVyLCBjYXB0aW9uKSA9PiB7XG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlQ29udGFpbmVyJywgJ2ZhZGUnKTtcblxuICAvLyBkaXNwbGF5IGltYWdlIG51bWJlclxuICBjb25zdCBpbWFnZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZU51bWJlci5jbGFzc0xpc3QuYWRkKCdpbWFnZU51bWJlcicpO1xuICBpbWFnZU51bWJlci5pbm5lclRleHQgPSBgJHtpfS80YDtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VOdW1iZXIpO1xuXG4gIC8vIGRpc3BsYXkgaW1hZ2VcbiAgY29uc3QgbmV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZXJJbWFnZScpO1xuICBuZXdJbWFnZS5zcmMgPSBpbWFnZTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuXG4gIC8vIGRpc3BsYXkgY2FwdGlvblxuICBpZiAoY2FwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgaW1hZ2VDYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VDYXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2ltYWdlQ2FwdGlvbicpO1xuICAgIGltYWdlQ2FwdGlvbi5pbm5lclRleHQgPSBgJHtjYXB0aW9ufWA7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VDYXB0aW9uKTtcbiAgfVxuXG4gIHNjcm9sbGVyLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcbn07XG5cbmxldCBzbGlkZUluZGV4ID0gMDtcblxuY29uc3Qgc2VsZWN0SW1hZ2UgPSAobikgPT4ge1xuICBjb25zdCBzY3JvbGxlckltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlQ29udGFpbmVyJyk7XG4gIGNvbnN0IHNjcm9sbGVyRG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbGVyRG90Jyk7XG5cbiAgLy8gbG9vcCB0aHJvdWdoIGltYWdlc1xuICBpZiAobiA+IHNjcm9sbGVySW1hZ2VzLmxlbmd0aCkgeyBzbGlkZUluZGV4ID0gMTsgfVxuICBpZiAobiA8IDEpIHsgc2xpZGVJbmRleCA9IHNjcm9sbGVySW1hZ2VzLmxlbmd0aDsgfVxuXG4gIC8vIHJlc2V0IGltYWdlIHNlbGVjdGlvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbGVySW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2Nyb2xsZXJJbWFnZXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbGVyRG90cy5sZW5ndGg7IGkrKykge1xuICAgIHNjcm9sbGVyRG90c1tpXS5jbGFzc05hbWUgPSBzY3JvbGxlckRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoJyBzZWxlY3RlZEltYWdlJywgJycpO1xuICB9XG5cbiAgLy8gc2VsZWN0IG5ldyBpbWFnZVxuICBzY3JvbGxlckltYWdlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHNjcm9sbGVyRG90c1tzbGlkZUluZGV4IC0gMV0uY2xhc3NOYW1lICs9ICcgc2VsZWN0ZWRJbWFnZSc7XG59O1xuXG5jb25zdCBsb29wSW1hZ2VTY3JvbGxlciA9ICgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsZXJJbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWFnZUNvbnRhaW5lcicpO1xuICBjb25zdCBzY3JvbGxlckRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGxlckRvdCcpO1xuXG4gIC8vIHJlc2V0IGltYWdlIHNlbGVjdGlvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbGVySW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2Nyb2xsZXJJbWFnZXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbGVyRG90cy5sZW5ndGg7IGkrKykge1xuICAgIHNjcm9sbGVyRG90c1tpXS5jbGFzc05hbWUgPSBzY3JvbGxlckRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoJyBzZWxlY3RlZEltYWdlJywgJycpO1xuICB9XG5cbiAgLy8gc2VsZWN0IG5ldyBpbWFnZVxuICBzbGlkZUluZGV4Kys7XG4gIGlmIChzbGlkZUluZGV4ID4gc2Nyb2xsZXJJbWFnZXMubGVuZ3RoKSB7IHNsaWRlSW5kZXggPSAxOyB9XG4gIHNjcm9sbGVySW1hZ2VzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgc2Nyb2xsZXJEb3RzW3NsaWRlSW5kZXggLSAxXS5jbGFzc05hbWUgKz0gJyBzZWxlY3RlZEltYWdlJztcbiAgc2V0VGltZW91dChsb29wSW1hZ2VTY3JvbGxlciwgNTAwMCk7IC8vIENoYW5nZSBpbWFnZSBldmVyeSA1IHNlY29uZHNcbn07XG5cbi8vIHBhZ2UgaW5pdGlhbGl6YXRpb24gZnVuY3Rpb25zXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGVyVGl0bGUuaW5uZXJUZXh0ID0gJ0R5bmFtaWMgVUkgSW50ZXJhY3Rpb25zJztcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVNYWluTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbk1lbnUnKTtcblxuICBjcmVhdGVNZW51SXRlbSgnRHJvcGRvd24gTWVudScsIG1haW5NZW51LCAnZHJvcGRvd25NZW51JywgJ3NlbGVjdGVkJyk7XG4gIGNyZWF0ZU1lbnVJdGVtKCdNb2JpbGUgTWVudScsIG1haW5NZW51LCAnbW9iaWxlTWVudScpO1xuICBjcmVhdGVNZW51SXRlbSgnSW1hZ2UgU2Nyb2xsZXInLCBtYWluTWVudSwgJ2ltYWdlU2Nyb2xsZXInKTtcbiAgY3JlYXRlTWVudUl0ZW0oJ0Zvcm0gVmFsaWRhdGlvbicsIG1haW5NZW51LCAndmFsaWRhdGlvbkZvcm0nKTtcbiAgY3JlYXRlTWVudUl0ZW0oJ0FQSSBQcmFjdGljZScsIG1haW5NZW51LCAnQVBJUHJhY3RpY2UnKTtcblxuICBib2R5LmFwcGVuZENoaWxkKG1haW5NZW51KTtcbn07XG5cbmNvbnN0IGNyZWF0ZURyb3Bkb3duTWVudSA9IChjb250YWluZXIpID0+IHtcbiAgY29uc3QgZHJvcGRvd25NZW51Q29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcm9wZG93bk1lbnVDb250YWludGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgZHJvcGRvd25NZW51Q29udGFpbnRlci5pZCA9ICdkcm9wZG93bk1lbnUnO1xuXG4gIC8vIGNyZWF0ZSBkcm9wZG93biBjb250YWluZXJcbiAgY29uc3QgZHJvcGRvd25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25Db250YWluZXInLCAnaGlkZGVuJyk7XG5cbiAgLy8gY3JlYXRlIGRyb3Bkb3duIG9wdGlvbnNcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25PcHRpb24nKTtcbiAgICBkcm9wZG93bk9wdGlvbi5pbm5lclRleHQgPSBgb3B0aW9uICR7aX1gO1xuICAgIGRyb3Bkb3duQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duT3B0aW9uKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZSBkcm9wZG93biBidXR0b25cbiAgY29uc3QgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyb3Bkb3duTWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bk1lbnUnKTtcbiAgZHJvcGRvd25NZW51LmlubmVyVGV4dCA9ICdkcm9wZG93bic7XG4gIGRyb3Bkb3duTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICBkcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgfSk7XG5cbiAgLy8gQXBwZW5kXG4gIGRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChkcm9wZG93bkNvbnRhaW5lcik7XG4gIGRyb3Bkb3duTWVudUNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25NZW51KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duTWVudUNvbnRhaW50ZXIpO1xuXG4gIC8vIGNsb3NlIGRyb3Bkb3duIGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XG4gIHdpbmRvdy5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wZG93bk1lbnUnKSkge1xuICAgICAgaWYgKGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgPT09IGZhbHNlKSB7XG4gICAgICAgIGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfVxuICAgICAgaWYgKGRyb3Bkb3duTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlTW9iaWxlTWVudSA9IChjb250YWluZXIpID0+IHtcbiAgLy8gY3JlYXRlIGNvbnRlbnQgY29udGFpbmVyXG4gIGNvbnN0IG1vYmlsZU1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vYmlsZU1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vYmlsZU1lbnVDb250ZW50JywgJ2NvbnRlbnQnLCAnaGlkZGVuJyk7XG4gIG1vYmlsZU1lbnVDb250ZW50LmlkID0gJ21vYmlsZU1lbnUnO1xuXG4gIC8vIGNyZWF0ZSBtZW51IHRpdGxlXG4gIGNvbnN0IG1vYmlsZU1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIG1vYmlsZU1lbnVUaXRsZS5pbm5lclRleHQgPSAnSG9yaXpvbnRhbCBzY3JvbGxpbmcgbmF2JztcblxuICAvLyBjcmVhdGUgbW9iaWxlIG1lbnUgY29udGFpbmVyXG4gIGNvbnN0IG1vYmlsZU1lbnVUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIGNvbnN0IG1vYmlsZU1lbnVDb250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgbW9iaWxlTWVudUNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnbW9iaWxlTWVudUNvbnRhaW5lcicpO1xuICAvLyBtYWtlcyBzY3JvbGx3aGVlbCBmdW5jdGlvbmFsIHdpdGggaG9yaXpvbnRhbCBzY3JvbGxpbmdcbiAgbW9iaWxlTWVudUNvbnRhaW50ZXIuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBtb2JpbGVNZW51Q29udGFpbnRlci5zY3JvbGxMZWZ0ICs9IGUuZGVsdGFZO1xuICB9KTtcblxuICAvLyBjcmVhdGUgbW9iaWxlIG1lbnUgb3B0aW9uc1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAyMDsgaSsrKSB7XG4gICAgY29uc3QgbW9iaWxlTWVudU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgbW9iaWxlTWVudU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdtb2JpbGVNZW51T3B0aW9uJyk7XG4gICAgbW9iaWxlTWVudU9wdGlvbi5pbm5lclRleHQgPSBgbW9iaWxlIG9wdGlvbiAke2l9YDtcbiAgICBtb2JpbGVNZW51T3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gZGVzZWxlY3QgYWxsIG1lbnUgaXRlbXNcbiAgICAgIGNvbnN0IG1vYmlsZU1lbnVDb3VudCA9IG1vYmlsZU1lbnVDb250YWludGVyLmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2JpbGVNZW51Q291bnQ7IGkrKykge1xuICAgICAgICBpZiAobW9iaWxlTWVudUNvbnRhaW50ZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgbW9iaWxlTWVudUNvbnRhaW50ZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gbWFrZSBuZXcgc2VsZWN0aW9uXG4gICAgICBtb2JpbGVNZW51T3B0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG4gICAgbW9iaWxlTWVudUNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQobW9iaWxlTWVudU9wdGlvbik7XG4gIH1cblxuICAvLyBBcHBlbmRcbiAgbW9iaWxlTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobW9iaWxlTWVudVRpdGxlKTtcbiAgbW9iaWxlTWVudVRhYmxlLmFwcGVuZENoaWxkKG1vYmlsZU1lbnVDb250YWludGVyKTtcbiAgbW9iaWxlTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobW9iaWxlTWVudVRhYmxlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vYmlsZU1lbnVDb250ZW50KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUltYWdlU2Nyb2xsZXIgPSAoY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGltYWdlU2Nyb2xsZXJDb250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlU2Nyb2xsZXJDb250YWludGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnLCAnaGlkZGVuJyk7XG4gIGltYWdlU2Nyb2xsZXJDb250YWludGVyLmlkID0gJ2ltYWdlU2Nyb2xsZXInO1xuXG4gIGNvbnN0IGltYWdlU2Nyb2xsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VTY3JvbGxlci5jbGFzc0xpc3QuYWRkKCdpbWFnZVNjcm9sbGVyJyk7XG5cbiAgLy8gYWRkIGltYWdlc1xuICBhZGRJbWFnZVRvU2Nyb2xsZXIocGxhY2Vob2xkZXJJbWcxLCAxLCBpbWFnZVNjcm9sbGVyLCAnVmlldyBvZiBEaWFtb25kIEhlYWQgJiBIb25vbHVsdSwgT2FodScpO1xuICBhZGRJbWFnZVRvU2Nyb2xsZXIocGxhY2Vob2xkZXJJbWcyLCAyLCBpbWFnZVNjcm9sbGVyLCAnSnVyYXNzaWMgUGFyayBWYWxsZXksIEt1YWxvYSBSYW5jaCwgT2FodScpO1xuICBhZGRJbWFnZVRvU2Nyb2xsZXIocGxhY2Vob2xkZXJJbWczLCAzLCBpbWFnZVNjcm9sbGVyLCAnUmFpbmJvdyBvbiBPYWh1Jyk7XG4gIGFkZEltYWdlVG9TY3JvbGxlcihwbGFjZWhvbGRlckltZzQsIDQsIGltYWdlU2Nyb2xsZXIsICdUdXJ0bGUgb24gdGhlIGJlYWNoIG5lYXIgSGFsZWl3YSwgT2FodScpO1xuXG4gIC8vIGFkZCBwcmV2aW91cyBidXR0b25cbiAgY29uc3QgcHJldmlvdXNJbWFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgcHJldmlvdXNJbWFnZUJ0bi5jbGFzc0xpc3QuYWRkKCdwcmV2aW91c0ltYWdlQnRuJyk7XG4gIHByZXZpb3VzSW1hZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNlbGVjdEltYWdlKHNsaWRlSW5kZXggKz0gLTEpOyB9KTtcbiAgLy8gZGlzcGxheSBwcmV2aW91cyBhcnJvd1xuICBwcmV2aW91c0ltYWdlQnRuLmlubmVySFRNTCA9ICcmIzEwMDk0Oyc7XG5cbiAgLy8gYWRkIG5leHQgYnV0dG9uXG4gIGNvbnN0IG5leHRJbWFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbmV4dEltYWdlQnRuLmNsYXNzTGlzdC5hZGQoJ25leHRJbWFnZUJ0bicpO1xuICBuZXh0SW1hZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNlbGVjdEltYWdlKHNsaWRlSW5kZXggKz0gMSk7IH0pO1xuICAvLyBkaXNwbGF5IG5leHQgYXJyb3dcbiAgbmV4dEltYWdlQnRuLmlubmVySFRNTCA9ICcmIzEwMDk1Oyc7XG5cbiAgLy8gYWRkIGltYWdlIHNlbGVjdGlvbiBkb3RzXG4gIGNvbnN0IHNjcm9sbGVyRG90Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjcm9sbGVyRG90Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVyRG90Q29udGFpbmVyJyk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgIGNvbnN0IG5ld0RvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBuZXdEb3QuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZXJEb3QnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgbmV3RG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzZWxlY3RJbWFnZShzbGlkZUluZGV4ID0gaSk7IH0pO1xuICAgIHNjcm9sbGVyRG90Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0RvdCk7XG4gIH1cblxuICAvLyBhcHBlbmRcbiAgaW1hZ2VTY3JvbGxlci5hcHBlbmRDaGlsZChwcmV2aW91c0ltYWdlQnRuKTtcbiAgaW1hZ2VTY3JvbGxlci5hcHBlbmRDaGlsZChuZXh0SW1hZ2VCdG4pO1xuICBpbWFnZVNjcm9sbGVyQ29udGFpbnRlci5hcHBlbmRDaGlsZChpbWFnZVNjcm9sbGVyKTtcbiAgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoc2Nyb2xsZXJEb3RDb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlVmFsaWRhdGlvbkZvcm0gPSAoY29udGFpbmVyKSA9PiB7XG4gIC8vIGNyZWF0ZSBmb3JtIHZhbGlkYXRpb24gY29udGFpbmVyXG4gIGNvbnN0IHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgndmFsaWRhdGlvbkZvcm1Db250YWludGVyJywgJ2NvbnRlbnQnLCAnaGlkZGVuJyk7XG4gIHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlci5pZCA9ICd2YWxpZGF0aW9uRm9ybSc7XG5cbiAgLy8gY3JlYXRlIGZvcm0gaGVhZGVyXG4gIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUhlYWRlci5jbGFzc0xpc3QuYWRkKCdmb3JtSGVhZGVyJyk7XG5cbiAgLy8gZm9ybSB0aXRsZVxuICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBmb3JtVGl0bGUuaW5uZXJUZXh0ID0gJ0V4YW1wbGUgZm9ybSc7XG5cbiAgLy8gY3JlYXRlIGZvcm1cbiAgY29uc3QgdmFsaWRhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHZhbGlkYXRpb25Gb3JtLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb25Gb3JtJyk7XG4gIHZhbGlkYXRpb25Gb3JtLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuXG4gIGdlbmVyYXRlRm9ybSh2YWxpZGF0aW9uRm9ybSk7XG5cbiAgLy8gYXBwZW5kXG4gIGZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgdmFsaWRhdGlvbkZvcm1Db250YWludGVyLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuICB2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gIHZhbGlkYXRpb25Gb3JtQ29udGFpbnRlci5hcHBlbmRDaGlsZCh2YWxpZGF0aW9uRm9ybSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlQVBJUHJhY3RpY2UgPSAoY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IEFQSVByYWN0aWNlQ29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBBUElQcmFjdGljZUNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcsICdoaWRkZW4nKTtcbiAgQVBJUHJhY3RpY2VDb250YWludGVyLmlkID0gJ0FQSVByYWN0aWNlJztcblxuICAvLyBjcmVhdGUgQVBJIGJ1dHRvblxuICBjb25zdCBBUElQcmFjdGljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBBUElQcmFjdGljZS5jbGFzc0xpc3QuYWRkKCdBUElQcmFjdGljZScpO1xuICBBUElQcmFjdGljZS5pbm5lclRleHQgPSAnZHJvcGRvd24nO1xuICBBUElQcmFjdGljZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBBUElQcmFjdGljZS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICB9KTtcblxuICAvLyBBcHBlbmRcbiAgQVBJUHJhY3RpY2VDb250YWludGVyLmFwcGVuZENoaWxkKEFQSVByYWN0aWNlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKEFQSVByYWN0aWNlQ29udGFpbnRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVDb250ZW50Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q29udGFpbnRlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50Q29udGFpbmVyJyk7XG5cbiAgY3JlYXRlRHJvcGRvd25NZW51KGNvbnRlbnRDb250YWludGVyKTtcbiAgY3JlYXRlTW9iaWxlTWVudShjb250ZW50Q29udGFpbnRlcik7XG4gIGNyZWF0ZUltYWdlU2Nyb2xsZXIoY29udGVudENvbnRhaW50ZXIpO1xuICBjcmVhdGVWYWxpZGF0aW9uRm9ybShjb250ZW50Q29udGFpbnRlcik7XG4gIGNyZWF0ZUFQSVByYWN0aWNlKGNvbnRlbnRDb250YWludGVyKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWludGVyKTtcbiAgbG9vcEltYWdlU2Nyb2xsZXIoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBqY2FtcGJlbGw1N2A7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Nyc7XG4gIGdpdGh1YkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG5cbiAgY29uc3QgbmV3R2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBuZXdHaXRodWJJY29uLnNyYyA9IGdpdGh1Ykljb247XG4gIG5ld0dpdGh1Ykljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdnaXRodWInKTtcblxuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKG5ld0dpdGh1Ykljb24pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjcmVhdGVNYWluTWVudSgpO1xuICBjcmVhdGVDb250ZW50Q29udGFpbmVyKCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZTtcbiJdLCJuYW1lcyI6WyJjb3VudHJ5TGlzdEFscGhhMiIsIkFGIiwiQUwiLCJEWiIsIkFTIiwiQUQiLCJBTyIsIkFJIiwiQVEiLCJBRyIsIkFSIiwiQU0iLCJBVyIsIkFVIiwiQVQiLCJBWiIsIkJTIiwiQkgiLCJCRCIsIkJCIiwiQlkiLCJCRSIsIkJaIiwiQkoiLCJCTSIsIkJUIiwiQk8iLCJCUSIsIkJBIiwiQlciLCJCViIsIkJSIiwiSU8iLCJCTiIsIkJHIiwiQkYiLCJCSSIsIkNWIiwiS0giLCJDTSIsIkNBIiwiS1kiLCJDRiIsIlREIiwiQ0wiLCJDTiIsIkNYIiwiQ0MiLCJDTyIsIktNIiwiQ0QiLCJDRyIsIkNLIiwiQ1IiLCJIUiIsIkNVIiwiQ1ciLCJDWSIsIkNaIiwiQ0kiLCJESyIsIkRKIiwiRE0iLCJETyIsIkVDIiwiRUciLCJTViIsIkdRIiwiRVIiLCJFRSIsIlNaIiwiRVQiLCJGSyIsIkZPIiwiRkoiLCJGSSIsIkZSIiwiR0YiLCJQRiIsIlRGIiwiR0EiLCJHTSIsIkdFIiwiREUiLCJHSCIsIkdJIiwiR1IiLCJHTCIsIkdEIiwiR1AiLCJHVSIsIkdUIiwiR0ciLCJHTiIsIkdXIiwiR1kiLCJIVCIsIkhNIiwiVkEiLCJITiIsIkhLIiwiSFUiLCJJUyIsIklOIiwiSUQiLCJJUiIsIklRIiwiSUUiLCJJTSIsIklMIiwiSVQiLCJKTSIsIkpQIiwiSkUiLCJKTyIsIktaIiwiS0UiLCJLSSIsIktQIiwiS1IiLCJLVyIsIktHIiwiTEEiLCJMViIsIkxCIiwiTFMiLCJMUiIsIkxZIiwiTEkiLCJMVCIsIkxVIiwiTU8iLCJNRyIsIk1XIiwiTVkiLCJNViIsIk1MIiwiTVQiLCJNSCIsIk1RIiwiTVIiLCJNVSIsIllUIiwiTVgiLCJGTSIsIk1EIiwiTUMiLCJNTiIsIk1FIiwiTVMiLCJNQSIsIk1aIiwiTU0iLCJOQSIsIk5SIiwiTlAiLCJOTCIsIk5DIiwiTloiLCJOSSIsIk5FIiwiTkciLCJOVSIsIk5GIiwiTVAiLCJOTyIsIk9NIiwiUEsiLCJQVyIsIlBTIiwiUEEiLCJQRyIsIlBZIiwiUEUiLCJQSCIsIlBOIiwiUEwiLCJQVCIsIlBSIiwiUUEiLCJNSyIsIlJPIiwiUlUiLCJSVyIsIlJFIiwiQkwiLCJTSCIsIktOIiwiTEMiLCJNRiIsIlBNIiwiVkMiLCJXUyIsIlNNIiwiU1QiLCJTQSIsIlNOIiwiUlMiLCJTQyIsIlNMIiwiU0ciLCJTWCIsIlNLIiwiU0kiLCJTQiIsIlNPIiwiWkEiLCJHUyIsIlNTIiwiRVMiLCJMSyIsIlNEIiwiU1IiLCJTSiIsIlNFIiwiQ0giLCJTWSIsIlRXIiwiVEoiLCJUWiIsIlRIIiwiVEwiLCJURyIsIlRLIiwiVE8iLCJUVCIsIlROIiwiVFIiLCJUTSIsIlRDIiwiVFYiLCJVRyIsIlVBIiwiQUUiLCJHQiIsIlVNIiwiVVMiLCJVWSIsIlVaIiwiVlUiLCJWRSIsIlZOIiwiVkciLCJWSSIsIldGIiwiRUgiLCJZRSIsIlpNIiwiWlciLCJBWCIsInZhbGlkYXRlRW1haWwiLCJlbWFpbElucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbGlkaXR5IiwidHlwZU1pc21hdGNoIiwidmFsdWUiLCJzZXRDdXN0b21WYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiY3JlYXRlRW1haWxJbnB1dCIsImNvbnRhaW5lciIsImZvcm1Sb3ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZW1haWxMYWJlbCIsImZvciIsImlubmVyVGV4dCIsImlkIiwibmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBlbmRDaGlsZCIsInZhbGlkYXRlQ291bnRyeUlucHV0IiwiY291bnRyeVNlbGVjdGlvbiIsImNyZWF0ZUNvdW50cnlJbnB1dCIsImNvdW50cnlMYWJlbCIsImJsYW5rT3B0aW9uIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJuZXdPcHRpb24iLCJ2YWxpZGF0ZVppcENvZGUiLCJ6aXBDb2RlSW5wdXQiLCJ0ZXN0IiwiY3JlYXRlWmlwQ29kZUlucHV0IiwiemlwQ29kZUxhYmVsIiwidmFsaWRhdGVQYXNzd29yZCIsInBhc3N3b3JkSW5wdXQiLCJsZW5ndGgiLCJjcmVhdGVQYXNzd29yZElucHV0IiwicGFzc3dvcmRMYWJlbCIsImNvbmZpcm1QYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZElucHV0IiwiY3JlYXRlQ29uZmlybVBhc3N3b3JkSW5wdXQiLCJjb25maXJtUGFzc3dvcmRMYWJlbCIsInN1Ym1pdEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVTdWJtaXRCdXR0b24iLCJzdWJtaXRCdG4iLCJnZW5lcmF0ZUZvcm0iLCJnaXRodWJJY29uIiwicGxhY2Vob2xkZXJJbWcxIiwicGxhY2Vob2xkZXJJbWcyIiwicGxhY2Vob2xkZXJJbWczIiwicGxhY2Vob2xkZXJJbWc0IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9jZXNzTWVudVNlbGVjdGlvbiIsIm1haW5NZW51IiwiY29udGVudENvbnRhaW5lciIsIm1lbnVDb3VudCIsImNoaWxkRWxlbWVudENvdW50IiwiaSIsImNoaWxkcmVuIiwicmVtb3ZlIiwidGFyZ2V0IiwiY29udGVudENvdW50IiwiY29udGFpbnMiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlTWVudUl0ZW0iLCJpdGVtTmFtZSIsIml0ZW1Db250YWluZXIiLCJpdGVtSWQiLCJpdGVtQ2xhc3MiLCJuZXdNZW51SXRlbSIsInVuZGVmaW5lZCIsInNldEF0dHJpYnV0ZSIsImFkZEltYWdlVG9TY3JvbGxlciIsImltYWdlIiwic2Nyb2xsZXIiLCJjYXB0aW9uIiwiaW1hZ2VDb250YWluZXIiLCJpbWFnZU51bWJlciIsIm5ld0ltYWdlIiwic3JjIiwiaW1hZ2VDYXB0aW9uIiwic2xpZGVJbmRleCIsInNlbGVjdEltYWdlIiwibiIsInNjcm9sbGVySW1hZ2VzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNjcm9sbGVyRG90cyIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJsb29wSW1hZ2VTY3JvbGxlciIsInNldFRpbWVvdXQiLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJoZWFkZXJUaXRsZSIsImNyZWF0ZU1haW5NZW51IiwiY3JlYXRlRHJvcGRvd25NZW51IiwiZHJvcGRvd25NZW51Q29udGFpbnRlciIsImRyb3Bkb3duQ29udGFpbmVyIiwiZHJvcGRvd25PcHRpb24iLCJkcm9wZG93bk1lbnUiLCJ0b2dnbGUiLCJ3aW5kb3ciLCJvbmNsaWNrIiwibWF0Y2hlcyIsImNyZWF0ZU1vYmlsZU1lbnUiLCJtb2JpbGVNZW51Q29udGVudCIsIm1vYmlsZU1lbnVUaXRsZSIsIm1vYmlsZU1lbnVUYWJsZSIsIm1vYmlsZU1lbnVDb250YWludGVyIiwic2Nyb2xsTGVmdCIsImRlbHRhWSIsIm1vYmlsZU1lbnVPcHRpb24iLCJtb2JpbGVNZW51Q291bnQiLCJjcmVhdGVJbWFnZVNjcm9sbGVyIiwiaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIiLCJpbWFnZVNjcm9sbGVyIiwicHJldmlvdXNJbWFnZUJ0biIsImlubmVySFRNTCIsIm5leHRJbWFnZUJ0biIsInNjcm9sbGVyRG90Q29udGFpbmVyIiwibmV3RG90IiwiY3JlYXRlVmFsaWRhdGlvbkZvcm0iLCJ2YWxpZGF0aW9uRm9ybUNvbnRhaW50ZXIiLCJmb3JtSGVhZGVyIiwiZm9ybVRpdGxlIiwidmFsaWRhdGlvbkZvcm0iLCJhdXRvY29tcGxldGUiLCJjcmVhdGVBUElQcmFjdGljZSIsIkFQSVByYWN0aWNlQ29udGFpbnRlciIsIkFQSVByYWN0aWNlIiwiY3JlYXRlQ29udGVudENvbnRhaW5lciIsImNvbnRlbnRDb250YWludGVyIiwiY3JlYXRlRm9vdGVyIiwiZm9vdGVyIiwiY29weXJpZ2h0IiwidGV4dENvbnRlbnQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnaXRodWJMaW5rIiwiaHJlZiIsIm5ld0dpdGh1Ykljb24iLCJpbml0aWFsaXplIl0sInNvdXJjZVJvb3QiOiIifQ==