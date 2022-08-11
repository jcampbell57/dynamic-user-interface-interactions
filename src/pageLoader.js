/* eslint-disable no-plusplus */
import githubIcon from './assets/GitHub-light-32px.png';
import placeholderImg1 from './assets/IMG_1201.jpg';
import placeholderImg2 from './assets/IMG_1212.jpg';
import placeholderImg3 from './assets/IMG_8716.jpg';
import placeholderImg4 from './assets/IMG_8855.jpg';

const body = document.querySelector('body');

// helper functions
const processMenuSelection = (e) => {
  const mainMenu = document.querySelector('.mainMenu');
  const contentContainer = document.querySelector('.contentContainer');

  // deselect any menu items
  const menuCount = mainMenu.childElementCount;
  for (let i = 0; i < menuCount; i++) {
    mainMenu.children[i].classList.remove('selected');
  }

  // select new menu item
  e.target.classList.add('selected');

  // toggle content
  const contentCount = contentContainer.childElementCount;
  for (let i = 0; i < contentCount; i++) {
    // hide current content
    if (contentContainer.children[i].classList.contains('hidden') === false) {
      contentContainer.children[i].classList.add('hidden');
    }
    // display selected content
    if (contentContainer.children[i].id === e.target.id) {
      contentContainer.children[i].classList.remove('hidden');
    }
  }
};

const createMenuItem = (itemName, itemContainer, itemId, itemClass) => {
  const newMenuItem = document.createElement('div');

  newMenuItem.id = `${itemId}`;

  // add class if one is given
  if (itemClass !== undefined) {
    newMenuItem.setAttribute('class', `${itemClass}`);
  }

  newMenuItem.innerText = `${itemName}`;
  newMenuItem.classList.add('menuItem');

  newMenuItem.addEventListener('click', (e) => processMenuSelection(e));

  itemContainer.appendChild(newMenuItem);
};

const addImageToScroller = (image, i, scroller, caption) => {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('imageContainer', 'fade');

  // display image number
  const imageNumber = document.createElement('div');
  imageNumber.classList.add('imageNumber');
  imageNumber.innerText = `${i}/4`;
  imageContainer.appendChild(imageNumber);

  // display image
  const newImage = document.createElement('img');
  newImage.classList.add('scrollerImage');
  newImage.src = image;
  imageContainer.appendChild(newImage);

  // display caption
  if (caption !== undefined) {
    const imageCaption = document.createElement('div');
    imageCaption.classList.add('imageCaption');
    imageCaption.innerText = `${caption}`;
    imageContainer.appendChild(imageCaption);
  }

  scroller.appendChild(imageContainer);
};

let slideIndex = 0;

const selectImage = (n) => {
  const scrollerImages = document.getElementsByClassName('imageContainer');
  const scrollerDots = document.getElementsByClassName('scrollerDot');

  // loop through images
  if (n > scrollerImages.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = scrollerImages.length; }

  // reset image selection
  for (let i = 0; i < scrollerImages.length; i++) {
    scrollerImages[i].style.display = 'none';
  }
  for (let i = 0; i < scrollerDots.length; i++) {
    scrollerDots[i].className = scrollerDots[i].className.replace(' selectedImage', '');
  }

  // select new image
  scrollerImages[slideIndex - 1].style.display = 'block';
  scrollerDots[slideIndex - 1].className += ' selectedImage';
};

const loopImageScroller = () => {
  const scrollerImages = document.getElementsByClassName('imageContainer');
  const scrollerDots = document.getElementsByClassName('scrollerDot');

  // reset image selection
  for (let i = 0; i < scrollerImages.length; i++) {
    scrollerImages[i].style.display = 'none';
  }
  for (let i = 0; i < scrollerDots.length; i++) {
    scrollerDots[i].className = scrollerDots[i].className.replace(' selectedImage', '');
  }

  // select new image
  slideIndex++;
  if (slideIndex > scrollerImages.length) { slideIndex = 1; }
  scrollerImages[slideIndex - 1].style.display = 'block';
  scrollerDots[slideIndex - 1].className += ' selectedImage';
  setTimeout(loopImageScroller, 5000); // Change image every 5 seconds
};

// page initialization functions
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

  body.appendChild(mainMenu);
};

const createDropdownMenu = (container) => {
  const dropdownMenuContainter = document.createElement('div');
  dropdownMenuContainter.classList.add('content');
  dropdownMenuContainter.id = 'dropdownMenu';

  // create dropdown container
  const dropdownContainer = document.createElement('div');
  dropdownContainer.classList.add('dropdownContainer', 'hidden');

  // create dropdown options
  for (let i = 1; i < 10; i++) {
    const dropdownOption = document.createElement('span');
    dropdownOption.classList.add('dropdownOption');
    dropdownOption.innerText = `option ${i}`;
    dropdownContainer.appendChild(dropdownOption);
  }

  // create dropdown button
  const dropdownMenu = document.createElement('div');
  dropdownMenu.classList.add('dropdownMenu');
  dropdownMenu.innerText = 'dropdown';
  dropdownMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('selected');
    dropdownContainer.classList.toggle('hidden');
  });

  // Append
  dropdownMenu.appendChild(dropdownContainer);
  dropdownMenuContainter.appendChild(dropdownMenu);
  container.appendChild(dropdownMenuContainter);

  // close dropdown if the user clicks outside of it
  window.onclick = (e) => {
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

const createMobileMenu = (container) => {
  // create content container
  const mobileMenuContent = document.createElement('div');
  mobileMenuContent.classList.add('mobileMenuContent', 'content', 'hidden');
  mobileMenuContent.id = 'mobileMenu';

  // create menu title
  const mobileMenuTitle = document.createElement('h3');
  mobileMenuTitle.innerText = 'Horizontal scrolling nav';

  // create mobile menu container
  const mobileMenuTable = document.createElement('table');
  const mobileMenuContainter = document.createElement('tr');
  mobileMenuContainter.classList.add('mobileMenuContainer');
  // makes scrollwheel functional with horizontal scrolling
  mobileMenuContainter.addEventListener('wheel', (e) => {
    e.preventDefault();
    mobileMenuContainter.scrollLeft += e.deltaY;
  });

  // create mobile menu options
  for (let i = 1; i <= 20; i++) {
    const mobileMenuOption = document.createElement('td');
    mobileMenuOption.classList.add('mobileMenuOption');
    mobileMenuOption.innerText = `mobile option ${i}`;
    mobileMenuOption.addEventListener('click', () => {
      // deselect all menu items
      const mobileMenuCount = mobileMenuContainter.childElementCount;
      // eslint-disable-next-line no-shadow
      for (let i = 0; i < mobileMenuCount; i++) {
        if (mobileMenuContainter.children[i].classList.contains('selected') === true) {
          mobileMenuContainter.children[i].classList.toggle('selected');
        }
      }
      // make new selection
      mobileMenuOption.classList.toggle('selected');
    });
    mobileMenuContainter.appendChild(mobileMenuOption);
  }

  // Append
  mobileMenuContent.appendChild(mobileMenuTitle);
  mobileMenuTable.appendChild(mobileMenuContainter);
  mobileMenuContent.appendChild(mobileMenuTable);
  container.appendChild(mobileMenuContent);
};

const createImageScroller = (container) => {
  const imageScrollerContainter = document.createElement('div');
  imageScrollerContainter.classList.add('content', 'hidden');
  imageScrollerContainter.id = 'imageScroller';

  const imageScroller = document.createElement('div');
  imageScroller.classList.add('imageScroller');

  // add images
  addImageToScroller(placeholderImg1, 1, imageScroller, 'View of Diamond Head & Honolulu, Oahu');
  addImageToScroller(placeholderImg2, 2, imageScroller, 'Jurassic Park Valley, Kualoa Ranch, Oahu');
  addImageToScroller(placeholderImg3, 3, imageScroller, 'Rainbow on Oahu');
  addImageToScroller(placeholderImg4, 4, imageScroller, 'Turtle on the beach near Haleiwa, Oahu');

  // add previous button
  const previousImageBtn = document.createElement('a');
  previousImageBtn.classList.add('previousImageBtn');
  previousImageBtn.addEventListener('click', () => { selectImage(slideIndex += -1); });
  // display previous arrow
  previousImageBtn.innerHTML = '&#10094;';

  // add next button
  const nextImageBtn = document.createElement('a');
  nextImageBtn.classList.add('nextImageBtn');
  nextImageBtn.addEventListener('click', () => { selectImage(slideIndex += 1); });
  // display next arrow
  nextImageBtn.innerHTML = '&#10095;';

  // add image selection dots
  const scrollerDotContainer = document.createElement('div');
  scrollerDotContainer.classList.add('scrollerDotContainer');
  for (let i = 1; i <= 4; i++) {
    const newDot = document.createElement('span');
    newDot.classList.add('scrollerDot');
    // eslint-disable-next-line no-loop-func
    newDot.addEventListener('click', () => { selectImage(slideIndex = i); });
    scrollerDotContainer.appendChild(newDot);
  }

  // append
  imageScroller.appendChild(previousImageBtn);
  imageScroller.appendChild(nextImageBtn);
  imageScrollerContainter.appendChild(imageScroller);
  imageScrollerContainter.appendChild(scrollerDotContainer);
  container.appendChild(imageScrollerContainter);
};

// Form functions

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
  AX: 'Åland Islands',
};

const createEmailInput = (container) => {
  // email container
  const formRow = document.createElement('div');
  formRow.classList.add('formRow');
  // email label
  const emailLabel = document.createElement('label');
  emailLabel.for = 'email';
  emailLabel.innerText = 'Email';
  // email input
  const emailInput = document.createElement('input');
  emailInput.id = 'email';
  emailInput.name = 'email';
  emailInput.type = 'email';
  emailInput.placeholder = 'jane@example.com';
  // validity check
  emailInput.addEventListener('input', () => {
    if (emailInput.validity.typeMismatch) {
      emailInput.setCustomValidity('Enter a valid email');
      emailInput.reportValidity();
    } else {
      emailInput.setCustomValidity('');
    }
  });
  // append email
  formRow.appendChild(emailLabel);
  formRow.appendChild(emailInput);
  container.appendChild(formRow);
};

const createCountryInput = (container) => {
  // country container
  const formRow = document.createElement('div');
  formRow.classList.add('formRow');
  // country label
  const countryLabel = document.createElement('label');
  countryLabel.for = 'country';
  countryLabel.innerText = 'Country';
  // country selection
  const countrySelection = document.createElement('select');
  countrySelection.id = 'country';
  countrySelection.name = 'country';
  // country options
  const blankOption = document.createElement('option');
  blankOption.value = '';
  blankOption.innerText = '';
  countrySelection.appendChild(blankOption);
  Object.keys(countryListAlpha2).forEach((key) => {
    // console.log(key, countryListAlpha2[key]);
    const newOption = document.createElement('option');
    newOption.value = key;
    newOption.innerText = countryListAlpha2[key];
    countrySelection.appendChild(newOption);
  });
  // validity check
  countrySelection.addEventListener('select', () => {
    if (countrySelection.value === '') {
      countrySelection.setCustomValidity('Which country are you in?');
      countrySelection.reportValidity();
    } else {
      countrySelection.setCustomValidity('');
    }
  });
  // append country input
  formRow.appendChild(countryLabel);
  formRow.appendChild(countrySelection);
  container.appendChild(formRow);
};

const createZipCodeInput = (container) => {
  // zip code container
  const formRow = document.createElement('div');
  formRow.classList.add('formRow');
  // zip code label
  const zipCodeLabel = document.createElement('label');
  zipCodeLabel.for = 'zipcode';
  zipCodeLabel.innerText = 'Zip code';
  // zip code input
  const zipCodeInput = document.createElement('input');
  zipCodeInput.id = 'zipcode';
  zipCodeInput.name = 'zipcode';
  // validity check
  zipCodeInput.addEventListener('input', () => {});
  // append zip code input
  formRow.appendChild(zipCodeLabel);
  formRow.appendChild(zipCodeInput);
  container.appendChild(formRow);
};

const createPasswordInput = (container) => {
  // password container
  const formRow = document.createElement('div');
  formRow.classList.add('formRow');
  // password label
  const passwordLabel = document.createElement('label');
  passwordLabel.for = 'password';
  passwordLabel.innerText = 'Password';
  // password input
  const passwordInput = document.createElement('input');
  passwordInput.id = 'password';
  passwordInput.name = 'password';
  // validity check
  passwordInput.addEventListener('input', () => {});
  // append password input
  formRow.appendChild(passwordLabel);
  formRow.appendChild(passwordInput);
  container.appendChild(formRow);
};

const createConfirmPasswordInput = (container) => {
  // confirm password container
  const formRow = document.createElement('div');
  formRow.classList.add('formRow');
  // confirm password label
  const confirmPasswordLabel = document.createElement('label');
  confirmPasswordLabel.for = 'passwordConfirmation';
  confirmPasswordLabel.innerText = 'Confirm password';
  // connfirm password input
  const confirmPasswordInput = document.createElement('input');
  confirmPasswordInput.id = 'passwordConfirmation';
  confirmPasswordInput.name = 'passwordConfirmation';
  // validity check
  confirmPasswordInput.addEventListener('input', () => {});
  // append confirm password input
  formRow.appendChild(confirmPasswordLabel);
  formRow.appendChild(confirmPasswordInput);
  container.appendChild(formRow);
};

const createSubmitButton = (container) => {
  // submit button container
  const formRow = document.createElement('div');
  formRow.classList.add('formRow');
  // submit button
  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submitBtn');
  submitBtn.innerText = 'Submit';
  // append submit button
  formRow.appendChild(submitBtn);
  container.appendChild(formRow);
};

const createValidationForm = (container) => {
  // create form validation container
  const validationFormContainter = document.createElement('div');
  validationFormContainter.classList.add('validationFormContainter', 'content', 'hidden');
  validationFormContainter.id = 'validationForm';

  // create form header
  const formHeader = document.createElement('div');
  formHeader.classList.add('formHeader');

  // form title
  const formTitle = document.createElement('h3');
  formTitle.innerText = 'Example form';

  // create form
  const validationForm = document.createElement('form');
  validationForm.classList.add('validationForm');
  validationForm.autocomplete = 'off';

  createEmailInput(validationForm);
  createCountryInput(validationForm);
  createZipCodeInput(validationForm);
  createPasswordInput(validationForm);
  createConfirmPasswordInput(validationForm);
  createSubmitButton(validationForm);

  // append
  formHeader.appendChild(formTitle);
  validationFormContainter.appendChild(formHeader);
  validationFormContainter.appendChild(document.createElement('br'));
  validationFormContainter.appendChild(validationForm);
  container.appendChild(validationFormContainter);
};

const createContentContainer = () => {
  const contentContainter = document.createElement('div');
  contentContainter.classList.add('contentContainer');

  createDropdownMenu(contentContainter);
  createMobileMenu(contentContainter);
  createImageScroller(contentContainter);
  createValidationForm(contentContainter);

  body.appendChild(contentContainter);
  loopImageScroller();
};

const createFooter = () => {
  const footer = document.createElement('footer');

  const copyright = document.createElement('p');
  copyright.textContent = `Copyright © ${new Date().getFullYear()} jcampbell57`;

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/jcampbell57';
  githubLink.target = '_blank';

  const newGithubIcon = document.createElement('img');
  newGithubIcon.src = githubIcon;
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

export default initialize;
