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

const validateEmail = () => {
  const emailInput = document.getElementById('email');
  if (emailInput.validity.typeMismatch || emailInput.value === '') {
    emailInput.setCustomValidity('Enter a valid email');
    emailInput.reportValidity();
  } else {
    emailInput.setCustomValidity('');
  }
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
  emailInput.addEventListener('input', () => validateEmail());
  // append email
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
  countrySelection.addEventListener('input', () => validateCountryInput());
  // append country input
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
  zipCodeInput.addEventListener('input', () => validateZipCode());
  // append zip code input
  formRow.appendChild(zipCodeLabel);
  formRow.appendChild(zipCodeInput);
  container.appendChild(formRow);
};

const validatePassword = () => {
  const passwordInput = document.getElementById('password');

  // Validate lowercase letters
  if (/[a-z]/g.test(passwordInput.value) === false) {
    passwordInput.setCustomValidity('Must contain lowercase letter');
    passwordInput.reportValidity();
    // Validate capital letters
  } else if (/[A-Z]/g.test(passwordInput.value) === false) {
    passwordInput.setCustomValidity('Must contain uppercase letter');
    passwordInput.reportValidity();
    // Validate numbers
  } else if (/[0-9]/g.test(passwordInput.value) === false) {
    passwordInput.setCustomValidity('Must contain a number');
    passwordInput.reportValidity();
    // Validate length
  } else if (passwordInput.value.length < 8) {
    passwordInput.setCustomValidity('Must be at least 8 characters');
    passwordInput.reportValidity();
  } else {
    passwordInput.setCustomValidity('');
  }
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
  passwordInput.type = 'password';
  // validity check
  passwordInput.addEventListener('input', () => validatePassword());
  // append password input
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
  confirmPasswordInput.type = 'password';
  confirmPasswordInput.id = 'passwordConfirmation';
  confirmPasswordInput.name = 'passwordConfirmation';
  // validity check
  confirmPasswordInput.addEventListener('input', () => confirmPassword());
  // append confirm password input
  formRow.appendChild(confirmPasswordLabel);
  formRow.appendChild(confirmPasswordInput);
  container.appendChild(formRow);
};

const submitForm = (e) => {
  // prevent actual form submission
  e.preventDefault();
  // validate form fields
  confirmPassword();
  validatePassword();
  validateZipCode();
  validateCountryInput();
  validateEmail();
};

const createSubmitButton = (container) => {
  // submit button container
  const formRow = document.createElement('div');
  formRow.classList.add('formRow');
  // submit button
  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submitBtn');
  submitBtn.innerText = 'Submit';
  // event listener
  submitBtn.addEventListener('click', (e) => submitForm(e));
  // append submit button
  formRow.appendChild(submitBtn);
  container.appendChild(formRow);
};

const generateForm = (container) => {
  createEmailInput(container);
  createCountryInput(container);
  createZipCodeInput(container);
  createPasswordInput(container);
  createConfirmPasswordInput(container);
  createSubmitButton(container);
};

export default generateForm;
