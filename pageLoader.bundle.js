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
  const mobileMenuContainter = document.createElement('div');
  mobileMenuContainter.classList.add('mobileMenuContainer');
  // makes scrollwheel functional with horizontal scrolling
  mobileMenuContainter.addEventListener('wheel', (e) => {
    e.preventDefault();
    mobileMenuContainter.scrollLeft += e.deltaY;
  });

  // create mobile menu options
  for (let i = 1; i < 10; i++) {
    const mobileMenuOption = document.createElement('div');
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
  mobileMenuContent.appendChild(document.createElement('br'));
  mobileMenuContent.appendChild(mobileMenuContainter);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWRlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUN3RDs7QUFFeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQixPQUFPOztBQUU3QjtBQUNBO0FBQ0EseUNBQXlDLFVBQVU7QUFDbkQ7O0FBRUEsNkJBQTZCLFNBQVM7QUFDdEM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQSx5Q0FBeUMsRUFBRTtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBLGtEQUFrRCxFQUFFO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QywwQkFBMEI7O0FBRW5FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwREFBVTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL3BhZ2VMb2FkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCBnaXRodWJJY29uIGZyb20gJy4vYXNzZXRzL0dpdEh1Yi1saWdodC0zMnB4LnBuZyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbi8vIGhlbHBlciBmdW5jdGlvbnNcbmNvbnN0IHByb2Nlc3NNZW51U2VsZWN0aW9uID0gKGUpID0+IHtcbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbk1lbnUnKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Q29udGFpbmVyJyk7XG5cbiAgLy8gZGVzZWxlY3QgYW55IG1lbnUgaXRlbXNcbiAgY29uc3QgbWVudUNvdW50ID0gbWFpbk1lbnUuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUNvdW50OyBpKyspIHtcbiAgICBtYWluTWVudS5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICB9XG5cbiAgLy8gc2VsZWN0IG5ldyBtZW51IGl0ZW1cbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAvLyB0b2dnbGUgY29udGVudFxuICBjb25zdCBjb250ZW50Q291bnQgPSBjb250ZW50Q29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRDb3VudDsgaSsrKSB7XG4gICAgLy8gaGlkZSBjdXJyZW50IGNvbnRlbnRcbiAgICBpZiAoY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpID09PSBmYWxzZSkge1xuICAgICAgY29udGVudENvbnRhaW5lci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgLy8gZGlzcGxheSBzZWxlY3RlZCBjb250ZW50XG4gICAgaWYgKGNvbnRlbnRDb250YWluZXIuY2hpbGRyZW5baV0uaWQgPT09IGUudGFyZ2V0LmlkKSB7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAoaXRlbU5hbWUsIGl0ZW1Db250YWluZXIsIGl0ZW1JZCwgaXRlbUNsYXNzKSA9PiB7XG4gIGNvbnN0IG5ld01lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbmV3TWVudUl0ZW0uaWQgPSBgJHtpdGVtSWR9YDtcblxuICAvLyBhZGQgY2xhc3MgaWYgb25lIGlzIGdpdmVuXG4gIGlmIChpdGVtQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgIG5ld01lbnVJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHtpdGVtQ2xhc3N9YCk7XG4gIH1cblxuICBuZXdNZW51SXRlbS5pbm5lclRleHQgPSBgJHtpdGVtTmFtZX1gO1xuICBuZXdNZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuXG4gIG5ld01lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHByb2Nlc3NNZW51U2VsZWN0aW9uKGUpKTtcblxuICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld01lbnVJdGVtKTtcbn07XG5cbi8vIHBhZ2UgaW5pdGlhbGl6YXRpb24gZnVuY3Rpb25zXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGVyVGl0bGUuaW5uZXJUZXh0ID0gJ0R5bmFtaWNzJztcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVNYWluTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbk1lbnUnKTtcblxuICBjcmVhdGVNZW51SXRlbSgnRHJvcGRvd24gTWVudScsIG1haW5NZW51LCAnZHJvcGRvd25NZW51JywgJ3NlbGVjdGVkJyk7XG4gIGNyZWF0ZU1lbnVJdGVtKCdNb2JpbGUgTWVudScsIG1haW5NZW51LCAnbW9iaWxlTWVudScpO1xuICBjcmVhdGVNZW51SXRlbSgnSW1hZ2UgU2Nyb2xsZXInLCBtYWluTWVudSwgJ2ltYWdlU2Nyb2xsZXInKTtcblxuICBib2R5LmFwcGVuZENoaWxkKG1haW5NZW51KTtcbn07XG5cbmNvbnN0IGNyZWF0ZURyb3Bkb3duTWVudSA9IChjb250YWluZXIpID0+IHtcbiAgY29uc3QgZHJvcGRvd25NZW51Q29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcm9wZG93bk1lbnVDb250YWludGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgZHJvcGRvd25NZW51Q29udGFpbnRlci5pZCA9ICdkcm9wZG93bk1lbnUnO1xuXG4gIC8vIGNyZWF0ZSBkcm9wZG93biBjb250YWluZXJcbiAgY29uc3QgZHJvcGRvd25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25Db250YWluZXInLCAnaGlkZGVuJyk7XG5cbiAgLy8gY3JlYXRlIGRyb3Bkb3duIG9wdGlvbnNcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25PcHRpb24nKTtcbiAgICBkcm9wZG93bk9wdGlvbi5pbm5lclRleHQgPSBgb3B0aW9uICR7aX1gO1xuICAgIGRyb3Bkb3duQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duT3B0aW9uKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZSBkcm9wZG93biBidXR0b25cbiAgY29uc3QgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyb3Bkb3duTWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bk1lbnUnKTtcbiAgZHJvcGRvd25NZW51LmlubmVyVGV4dCA9ICdkcm9wZG93bic7XG4gIGRyb3Bkb3duTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICBkcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgfSk7XG5cbiAgLy8gQXBwZW5kXG4gIGRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChkcm9wZG93bkNvbnRhaW5lcik7XG4gIGRyb3Bkb3duTWVudUNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25NZW51KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duTWVudUNvbnRhaW50ZXIpO1xuXG4gIC8vIGNsb3NlIGRyb3Bkb3duIGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XG4gIHdpbmRvdy5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wZG93bk1lbnUnKSkge1xuICAgICAgaWYgKGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgPT09IGZhbHNlKSB7XG4gICAgICAgIGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfVxuICAgICAgaWYgKGRyb3Bkb3duTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlTW9iaWxlTWVudSA9IChjb250YWluZXIpID0+IHtcbiAgLy8gY3JlYXRlIGNvbnRlbnQgY29udGFpbmVyXG4gIGNvbnN0IG1vYmlsZU1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vYmlsZU1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vYmlsZU1lbnVDb250ZW50JywgJ2NvbnRlbnQnLCAnaGlkZGVuJyk7XG4gIG1vYmlsZU1lbnVDb250ZW50LmlkID0gJ21vYmlsZU1lbnUnO1xuXG4gIC8vIGNyZWF0ZSBtZW51IHRpdGxlXG4gIGNvbnN0IG1vYmlsZU1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIG1vYmlsZU1lbnVUaXRsZS5pbm5lclRleHQgPSAnSG9yaXpvbnRhbCBzY3JvbGxpbmcgbmF2JztcblxuICAvLyBjcmVhdGUgbW9iaWxlIG1lbnUgY29udGFpbmVyXG4gIGNvbnN0IG1vYmlsZU1lbnVDb250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vYmlsZU1lbnVDb250YWludGVyLmNsYXNzTGlzdC5hZGQoJ21vYmlsZU1lbnVDb250YWluZXInKTtcbiAgLy8gbWFrZXMgc2Nyb2xsd2hlZWwgZnVuY3Rpb25hbCB3aXRoIGhvcml6b250YWwgc2Nyb2xsaW5nXG4gIG1vYmlsZU1lbnVDb250YWludGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbW9iaWxlTWVudUNvbnRhaW50ZXIuc2Nyb2xsTGVmdCArPSBlLmRlbHRhWTtcbiAgfSk7XG5cbiAgLy8gY3JlYXRlIG1vYmlsZSBtZW51IG9wdGlvbnNcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3QgbW9iaWxlTWVudU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vYmlsZU1lbnVPcHRpb24uY2xhc3NMaXN0LmFkZCgnbW9iaWxlTWVudU9wdGlvbicpO1xuICAgIG1vYmlsZU1lbnVPcHRpb24uaW5uZXJUZXh0ID0gYG1vYmlsZSBvcHRpb24gJHtpfWA7XG4gICAgbW9iaWxlTWVudU9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIGRlc2VsZWN0IGFsbCBtZW51IGl0ZW1zXG4gICAgICBjb25zdCBtb2JpbGVNZW51Q291bnQgPSBtb2JpbGVNZW51Q29udGFpbnRlci5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9iaWxlTWVudUNvdW50OyBpKyspIHtcbiAgICAgICAgaWYgKG1vYmlsZU1lbnVDb250YWludGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG1vYmlsZU1lbnVDb250YWludGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIG1ha2UgbmV3IHNlbGVjdGlvblxuICAgICAgbW9iaWxlTWVudU9wdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xuICAgIG1vYmlsZU1lbnVDb250YWludGVyLmFwcGVuZENoaWxkKG1vYmlsZU1lbnVPcHRpb24pO1xuICB9XG5cbiAgLy8gQXBwZW5kXG4gIG1vYmlsZU1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1vYmlsZU1lbnVUaXRsZSk7XG4gIG1vYmlsZU1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICBtb2JpbGVNZW51Q29udGVudC5hcHBlbmRDaGlsZChtb2JpbGVNZW51Q29udGFpbnRlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2JpbGVNZW51Q29udGVudCk7XG59O1xuXG5jb25zdCBjcmVhdGVJbWFnZVNjcm9sbGVyID0gKGNvbnRhaW5lcikgPT4ge1xuICBjb25zdCBpbWFnZVNjcm9sbGVyQ29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZVNjcm9sbGVyQ29udGFpbnRlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50JywgJ2hpZGRlbicpO1xuICBpbWFnZVNjcm9sbGVyQ29udGFpbnRlci5pZCA9ICdpbWFnZVNjcm9sbGVyJztcblxuICAvLyBQTEFDRUhPTERFUlxuICBjb25zdCBkcm9wZG93bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duTWVudScpO1xuICBkcm9wZG93bk1lbnUuaW5uZXJUZXh0ID0gJ2ltYWdlIHNjcm9sbGVyJztcbiAgZHJvcGRvd25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRyb3Bkb3duTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICB9KTtcbiAgaW1hZ2VTY3JvbGxlckNvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25NZW51KTtcbiAgLy8gRU5EIFBMQUNFSE9MREVSXG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlU2Nyb2xsZXJDb250YWludGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbnRlbnRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnRDb250YWludGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRDb250YWluZXInKTtcblxuICBjcmVhdGVEcm9wZG93bk1lbnUoY29udGVudENvbnRhaW50ZXIpO1xuICBjcmVhdGVNb2JpbGVNZW51KGNvbnRlbnRDb250YWludGVyKTtcbiAgY3JlYXRlSW1hZ2VTY3JvbGxlcihjb250ZW50Q29udGFpbnRlcik7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbnRlcik7XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gamNhbXBiZWxsNTdgO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcnO1xuICBnaXRodWJMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuXG4gIGNvbnN0IG5ld0dpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbmV3R2l0aHViSWNvbi5zcmMgPSBnaXRodWJJY29uO1xuICBuZXdHaXRodWJJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2l0aHViJyk7XG5cbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChuZXdHaXRodWJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlTWFpbk1lbnUoKTtcbiAgY3JlYXRlQ29udGVudENvbnRhaW5lcigpO1xuICBjcmVhdGVGb290ZXIoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=