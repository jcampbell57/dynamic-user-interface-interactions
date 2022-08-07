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
  for (let i = 0; i < scrollerImages.length; i++) {
    scrollerImages[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > scrollerImages.length) { slideIndex = 1; }
  scrollerImages[slideIndex - 1].style.display = 'block';
  setTimeout(loopImageScroller, 5000); // Change image every 5 seconds
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

  createMenuItem('Dropdown Menu', mainMenu, 'dropdownMenu', 'selected');
  createMenuItem('Mobile Menu', mainMenu, 'mobileMenu');
  createMenuItem('Image Scroller', mainMenu, 'imageScroller');

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

const createContentContainer = () => {
  const contentContainter = document.createElement('div');
  contentContainter.classList.add('contentContainer');

  createDropdownMenu(contentContainter);
  createMobileMenu(contentContainter);
  createImageScroller(contentContainter);

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
  loopImageScroller();
};

export default initialize;
