/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/GitHub-light-32px.png":
/*!******************************************!*\
  !*** ./src/assets/GitHub-light-32px.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "266ca63177bca6f330a7.png";

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
/* eslint-disable no-plusplus */


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

  // PLACEHOLDER
  const dropdownMenu = document.createElement('div');
  dropdownMenu.classList.add('dropdownMenu');
  dropdownMenu.innerText = 'image scroller';
  dropdownMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('selected');
  });
  imageScrollerContainter.appendChild(dropdownMenu);
  // END PLACEHOLDER

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWRlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUN3RDs7QUFFeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQixPQUFPOztBQUU3QjtBQUNBO0FBQ0EseUNBQXlDLFVBQVU7QUFDbkQ7O0FBRUEsNkJBQTZCLFNBQVM7QUFDdEM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQSx5Q0FBeUMsRUFBRTtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0Esa0RBQWtELEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLDBCQUEwQjs7QUFFbkU7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDBEQUFVO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvcGFnZUxvYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IGdpdGh1Ykljb24gZnJvbSAnLi9hc3NldHMvR2l0SHViLWxpZ2h0LTMycHgucG5nJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuLy8gaGVscGVyIGZ1bmN0aW9uc1xuY29uc3QgcHJvY2Vzc01lbnVTZWxlY3Rpb24gPSAoZSkgPT4ge1xuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluTWVudScpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRDb250YWluZXInKTtcblxuICAvLyBkZXNlbGVjdCBhbnkgbWVudSBpdGVtc1xuICBjb25zdCBtZW51Q291bnQgPSBtYWluTWVudS5jaGlsZEVsZW1lbnRDb3VudDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Q291bnQ7IGkrKykge1xuICAgIG1haW5NZW51LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIH1cblxuICAvLyBzZWxlY3QgbmV3IG1lbnUgaXRlbVxuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gIC8vIHRvZ2dsZSBjb250ZW50XG4gIGNvbnN0IGNvbnRlbnRDb3VudCA9IGNvbnRlbnRDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudENvdW50OyBpKyspIHtcbiAgICAvLyBoaWRlIGN1cnJlbnQgY29udGVudFxuICAgIGlmIChjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgPT09IGZhbHNlKSB7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICAvLyBkaXNwbGF5IHNlbGVjdGVkIGNvbnRlbnRcbiAgICBpZiAoY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5pZCA9PT0gZS50YXJnZXQuaWQpIHtcbiAgICAgIGNvbnRlbnRDb250YWluZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9IChpdGVtTmFtZSwgaXRlbUNvbnRhaW5lciwgaXRlbUlkLCBpdGVtQ2xhc3MpID0+IHtcbiAgY29uc3QgbmV3TWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBuZXdNZW51SXRlbS5pZCA9IGAke2l0ZW1JZH1gO1xuXG4gIC8vIGFkZCBjbGFzcyBpZiBvbmUgaXMgZ2l2ZW5cbiAgaWYgKGl0ZW1DbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbmV3TWVudUl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke2l0ZW1DbGFzc31gKTtcbiAgfVxuXG4gIG5ld01lbnVJdGVtLmlubmVyVGV4dCA9IGAke2l0ZW1OYW1lfWA7XG4gIG5ld01lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJyk7XG5cbiAgbmV3TWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcHJvY2Vzc01lbnVTZWxlY3Rpb24oZSkpO1xuXG4gIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3TWVudUl0ZW0pO1xufTtcblxuLy8gcGFnZSBpbml0aWFsaXphdGlvbiBmdW5jdGlvbnNcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkZXJUaXRsZS5pbm5lclRleHQgPSAnRHluYW1pY3MnO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW5NZW51ID0gKCkgPT4ge1xuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluTWVudScpO1xuXG4gIGNyZWF0ZU1lbnVJdGVtKCdEcm9wZG93biBNZW51JywgbWFpbk1lbnUsICdkcm9wZG93bk1lbnUnLCAnc2VsZWN0ZWQnKTtcbiAgY3JlYXRlTWVudUl0ZW0oJ01vYmlsZSBNZW51JywgbWFpbk1lbnUsICdtb2JpbGVNZW51Jyk7XG4gIGNyZWF0ZU1lbnVJdGVtKCdJbWFnZSBTY3JvbGxlcicsIG1haW5NZW51LCAnaW1hZ2VTY3JvbGxlcicpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbk1lbnUpO1xufTtcblxuY29uc3QgY3JlYXRlRHJvcGRvd25NZW51ID0gKGNvbnRhaW5lcikgPT4ge1xuICBjb25zdCBkcm9wZG93bk1lbnVDb250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyb3Bkb3duTWVudUNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICBkcm9wZG93bk1lbnVDb250YWludGVyLmlkID0gJ2Ryb3Bkb3duTWVudSc7XG5cbiAgLy8gY3JlYXRlIGRyb3Bkb3duIGNvbnRhaW5lclxuICBjb25zdCBkcm9wZG93bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bkNvbnRhaW5lcicsICdoaWRkZW4nKTtcblxuICAvLyBjcmVhdGUgZHJvcGRvd24gb3B0aW9uc1xuICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bk9wdGlvbicpO1xuICAgIGRyb3Bkb3duT3B0aW9uLmlubmVyVGV4dCA9IGBvcHRpb24gJHtpfWA7XG4gICAgZHJvcGRvd25Db250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25PcHRpb24pO1xuICB9XG5cbiAgLy8gY3JlYXRlIGRyb3Bkb3duIGJ1dHRvblxuICBjb25zdCBkcm9wZG93bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duTWVudScpO1xuICBkcm9wZG93bk1lbnUuaW5uZXJUZXh0ID0gJ2Ryb3Bkb3duJztcbiAgZHJvcGRvd25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRyb3Bkb3duTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICAgIGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9KTtcblxuICAvLyBBcHBlbmRcbiAgZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKGRyb3Bkb3duQ29udGFpbmVyKTtcbiAgZHJvcGRvd25NZW51Q29udGFpbnRlci5hcHBlbmRDaGlsZChkcm9wZG93bk1lbnUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25NZW51Q29udGFpbnRlcik7XG5cbiAgLy8gY2xvc2UgZHJvcGRvd24gaWYgdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgaXRcbiAgd2luZG93Lm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghZS50YXJnZXQubWF0Y2hlcygnLmRyb3Bkb3duTWVudScpKSB7XG4gICAgICBpZiAoZHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgICBpZiAoZHJvcGRvd25NZW51LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVNb2JpbGVNZW51ID0gKGNvbnRhaW5lcikgPT4ge1xuICAvLyBjcmVhdGUgY29udGVudCBjb250YWluZXJcbiAgY29uc3QgbW9iaWxlTWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9iaWxlTWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9iaWxlTWVudUNvbnRlbnQnLCAnY29udGVudCcsICdoaWRkZW4nKTtcbiAgbW9iaWxlTWVudUNvbnRlbnQuaWQgPSAnbW9iaWxlTWVudSc7XG5cbiAgLy8gY3JlYXRlIG1lbnUgdGl0bGVcbiAgY29uc3QgbW9iaWxlTWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbW9iaWxlTWVudVRpdGxlLmlubmVyVGV4dCA9ICdIb3Jpem9udGFsIHNjcm9sbGluZyBuYXYnO1xuXG4gIC8vIGNyZWF0ZSBtb2JpbGUgbWVudSBjb250YWluZXJcbiAgY29uc3QgbW9iaWxlTWVudVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgY29uc3QgbW9iaWxlTWVudUNvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBtb2JpbGVNZW51Q29udGFpbnRlci5jbGFzc0xpc3QuYWRkKCdtb2JpbGVNZW51Q29udGFpbmVyJyk7XG4gIC8vIG1ha2VzIHNjcm9sbHdoZWVsIGZ1bmN0aW9uYWwgd2l0aCBob3Jpem9udGFsIHNjcm9sbGluZ1xuICBtb2JpbGVNZW51Q29udGFpbnRlci5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG1vYmlsZU1lbnVDb250YWludGVyLnNjcm9sbExlZnQgKz0gZS5kZWx0YVk7XG4gIH0pO1xuXG4gIC8vIGNyZWF0ZSBtb2JpbGUgbWVudSBvcHRpb25zXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDIwOyBpKyspIHtcbiAgICBjb25zdCBtb2JpbGVNZW51T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBtb2JpbGVNZW51T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ21vYmlsZU1lbnVPcHRpb24nKTtcbiAgICBtb2JpbGVNZW51T3B0aW9uLmlubmVyVGV4dCA9IGBtb2JpbGUgb3B0aW9uICR7aX1gO1xuICAgIG1vYmlsZU1lbnVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBkZXNlbGVjdCBhbGwgbWVudSBpdGVtc1xuICAgICAgY29uc3QgbW9iaWxlTWVudUNvdW50ID0gbW9iaWxlTWVudUNvbnRhaW50ZXIuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vYmlsZU1lbnVDb3VudDsgaSsrKSB7XG4gICAgICAgIGlmIChtb2JpbGVNZW51Q29udGFpbnRlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykgPT09IHRydWUpIHtcbiAgICAgICAgICBtb2JpbGVNZW51Q29udGFpbnRlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBtYWtlIG5ldyBzZWxlY3Rpb25cbiAgICAgIG1vYmlsZU1lbnVPcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICB9KTtcbiAgICBtb2JpbGVNZW51Q29udGFpbnRlci5hcHBlbmRDaGlsZChtb2JpbGVNZW51T3B0aW9uKTtcbiAgfVxuXG4gIC8vIEFwcGVuZFxuICBtb2JpbGVNZW51Q29udGVudC5hcHBlbmRDaGlsZChtb2JpbGVNZW51VGl0bGUpO1xuICBtb2JpbGVNZW51VGFibGUuYXBwZW5kQ2hpbGQobW9iaWxlTWVudUNvbnRhaW50ZXIpO1xuICBtb2JpbGVNZW51Q29udGVudC5hcHBlbmRDaGlsZChtb2JpbGVNZW51VGFibGUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9iaWxlTWVudUNvbnRlbnQpO1xufTtcblxuY29uc3QgY3JlYXRlSW1hZ2VTY3JvbGxlciA9IChjb250YWluZXIpID0+IHtcbiAgY29uc3QgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcsICdoaWRkZW4nKTtcbiAgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIuaWQgPSAnaW1hZ2VTY3JvbGxlcic7XG5cbiAgLy8gUExBQ0VIT0xERVJcbiAgY29uc3QgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyb3Bkb3duTWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bk1lbnUnKTtcbiAgZHJvcGRvd25NZW51LmlubmVyVGV4dCA9ICdpbWFnZSBzY3JvbGxlcic7XG4gIGRyb3Bkb3duTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgfSk7XG4gIGltYWdlU2Nyb2xsZXJDb250YWludGVyLmFwcGVuZENoaWxkKGRyb3Bkb3duTWVudSk7XG4gIC8vIEVORCBQTEFDRUhPTERFUlxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZVNjcm9sbGVyQ29udGFpbnRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVDb250ZW50Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q29udGFpbnRlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50Q29udGFpbmVyJyk7XG5cbiAgY3JlYXRlRHJvcGRvd25NZW51KGNvbnRlbnRDb250YWludGVyKTtcbiAgY3JlYXRlTW9iaWxlTWVudShjb250ZW50Q29udGFpbnRlcik7XG4gIGNyZWF0ZUltYWdlU2Nyb2xsZXIoY29udGVudENvbnRhaW50ZXIpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW50ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGpjYW1wYmVsbDU3YDtcblxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3JztcbiAgZ2l0aHViTGluay50YXJnZXQgPSAnX2JsYW5rJztcblxuICBjb25zdCBuZXdHaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIG5ld0dpdGh1Ykljb24uc3JjID0gZ2l0aHViSWNvbjtcbiAgbmV3R2l0aHViSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dpdGh1YicpO1xuXG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQobmV3R2l0aHViSWNvbik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGNyZWF0ZU1haW5NZW51KCk7XG4gIGNyZWF0ZUNvbnRlbnRDb250YWluZXIoKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9