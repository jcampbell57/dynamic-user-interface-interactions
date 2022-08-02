import githubIcon from './assets/GitHub-light-32px.png';

const body = document.querySelector('body');

// helper functions
const createMenuItem = (itemName, itemContainer) => {
  const newMenuItem = document.createElement('div');
  newMenuItem.classList.add('menuItem');
  newMenuItem.innerText = `${itemName}`;
  itemContainer.appendChild(newMenuItem);
};

// page initialization functions
const createHeader = () => {
  const header = document.createElement('header');

  const headerTitle = document.createElement('h1');
  headerTitle.innerText = 'Dynamics';

  header.appendChild(headerTitle);
  body.appendChild(header);
};

const createMainMenu = () => {
  const mainMenu = document.createElement('div');
  mainMenu.classList.add('mainMenu');

  createMenuItem('Dropdown Menu', mainMenu);
  createMenuItem('Mobile Menu', mainMenu);
  createMenuItem('Image Scroller', mainMenu);

  body.appendChild(mainMenu);
};

const createContentContainer = () => {
  const contentContainter = document.createElement('div');
  contentContainter.classList.add('contentContainer');

  body.appendChild(contentContainter);
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
