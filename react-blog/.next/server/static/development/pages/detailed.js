module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Advert.js":
/*!******************************!*\
  !*** ./components/Advert.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_style_components_advert_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/style/components/advert.css */ "./static/style/components/advert.css");
/* harmony import */ var _static_style_components_advert_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_advert_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\fujian\\blog\\react-blog\\components\\Advert.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Advert = () => {
  return __jsx("div", {
    className: "ad-div comm-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("img", {
    src: "http://blogimages.jspang.com/flutter_ad2.jpg",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    src: "http://blogimages.jspang.com/Vue_koa_ad1.jpg",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    src: "http://blogimages.jspang.com/WechatIMG12.jpeg",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Advert);

/***/ }),

/***/ "./components/Author.js":
/*!******************************!*\
  !*** ./components/Author.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_style_components_author_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/style/components/author.css */ "./static/style/components/author.css");
/* harmony import */ var _static_style_components_author_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_author_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "G:\\fujian\\blog\\react-blog\\components\\Author.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const Author = () => {
  return __jsx("div", {
    className: "author-div comm-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, ' ', __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 100,
    src: "http://blogimages.jspang.com/blogtouxiang1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx("div", {
    className: "author-introduction",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "\u5149\u5934\u7A0B\u5E8F\u5458\uFF0C\u4E13\u6CE8\u4E8EWEB\u548C\u79FB\u52A8\u524D\u7AEF\u5F00\u53D1\u3002\u8981\u5F551000\u96C6\u514D\u8D39\u524D\u7AEF\u89C6\u9891\u7684\u50BBX\u3002\u6B64\u5730\u7EF4\u6743\u65E0\u95E8\uFF0C\u6B64\u65F6\u65E0\u80FD\u4E3A\u529B\uFF0C\u6B64\u5FC3\u968F\u6CE2\u9010\u6D41\u3002", __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "\u793E\u4EA4\u8D26\u53F7"), __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 28,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["GithubOutlined"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }),
    className: "account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 28,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["QqOutlined"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }),
    className: "account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 28,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["WechatOutlined"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }),
    className: "account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Author);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_style_components_footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/style/components/footer.css */ "./static/style/components/footer.css");
/* harmony import */ var _static_style_components_footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_footer_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\fujian\\blog\\react-blog\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => __jsx("div", {
  className: "footer-div",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "\u7CFB\u7EDF\u7531 React+Node+Ant Desgin\u9A71\u52A8 "), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "JSPang.com"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_style_components_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/style/components/header.css */ "./static/style/components/header.css");
/* harmony import */ var _static_style_components_header_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_style_components_header_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "G:\\fujian\\blog\\react-blog\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




const Header = () => {
  return __jsx("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "flex",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 24,
    sm: 24,
    md: 10,
    lg: 15,
    xl: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("span", {
    className: "header-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "\u767D\u9732\u4E3A\u971C"), __jsx("span", {
    className: "header-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "This is my first time writing a blog")), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "memu-div",
    xs: 0,
    sm: 0,
    md: 14,
    lg: 8,
    xl: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    mode: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HomeOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), "\u9996\u9875"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "video",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["YoutubeOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), "\u89C6\u9891"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "life",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["AntCloudOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), "\u751F\u6D3B")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/markdown-navbar/dist/navbar.css":
/*!******************************************************!*\
  !*** ./node_modules/markdown-navbar/dist/navbar.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/detailed.js":
/*!***************************!*\
  !*** ./pages/detailed.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/affix */ "antd/lib/affix");
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/breadcrumb */ "antd/lib/breadcrumb");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Author__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Author */ "./components/Author.js");
/* harmony import */ var _components_Advert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Advert */ "./components/Advert.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_style_pages_detailed_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/style/pages/detailed.css */ "./static/style/pages/detailed.css");
/* harmony import */ var _static_style_pages_detailed_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_style_pages_detailed_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! markdown-navbar */ "markdown-navbar");
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! markdown-navbar/dist/navbar.css */ "./node_modules/markdown-navbar/dist/navbar.css");
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_15__);




var _jsxFileName = "G:\\fujian\\blog\\react-blog\\pages\\detailed.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;













const Detailed = () => {
  let markdown = '# P01:课程介绍和环境搭建\n' + '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' + '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' + '**这是加粗的文字**\n\n' + '*这是倾斜的文字*`\n\n' + '***这是斜体加粗的文字***\n\n' + '~~这是加删除线的文字~~ \n\n' + '`console.log(111)` \n\n' + '# p02:来个Hello World 初始Vue3.0\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n' + '***\n\n\n' + '# p03:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '# p04:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '#5 p05:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '# p06:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '# p07:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '``` var a=11; ```';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "\u535A\u5BA2\u8BE6\u7EC6\u9875")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "comm-main",
    type: "flex",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "comm-left",
    xs: 24,
    sm: 24,
    md: 16,
    lg: 18,
    xl: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("div", {
    className: "bread-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "\u9996\u9875")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "\u89C6\u9891\u5217\u8868"), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "xxxx"))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("div", {
    className: "detailed-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "React\u5B9E\u6218\u89C6\u9891\u6559\u7A0B-\u6280\u672F\u80D6Blog\u5F00\u53D1(\u66F4\u65B008\u96C6)"), __jsx("div", {
    className: "list-icon center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["CalendarOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), " 2019-06-28"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["FolderAddOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), " \u89C6\u9891\u6559\u7A0B"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["FireOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), " 5498\u4EBA")), __jsx("div", {
    className: "detailed-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {
    source: markdown,
    escapeHtml: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "comm-right",
    xs: 0,
    sm: 0,
    md: 7,
    lg: 5,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx(_components_Author__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }), __jsx(_components_Advert__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }), __jsx(antd_lib_affix__WEBPACK_IMPORTED_MODULE_1___default.a, {
    offsetTop: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("div", {
    className: "detailed-nav comm-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("div", {
    className: "nav-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "\u6587\u7AE0\u76EE\u5F55"), __jsx(markdown_navbar__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: "article-menu",
    source: markdown,
    ordered: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }));
};

Detailed.getInitialProps = async context => {
  let id = context.query.id;
  const promise = new Promise(resolve => {
    axios__WEBPACK_IMPORTED_MODULE_6___default()('http://127.0.0.1:7001/default/getArticleById/' + id).then(res => {
      console.log(res.data);
      resolve(res.data);
    });
  });
  return await promise;
};

/* harmony default export */ __webpack_exports__["default"] = (Detailed);

/***/ }),

/***/ "./static/style/components/advert.css":
/*!********************************************!*\
  !*** ./static/style/components/advert.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/style/components/author.css":
/*!********************************************!*\
  !*** ./static/style/components/author.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/style/components/footer.css":
/*!********************************************!*\
  !*** ./static/style/components/footer.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/style/components/header.css":
/*!********************************************!*\
  !*** ./static/style/components/header.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/style/pages/detailed.css":
/*!*****************************************!*\
  !*** ./static/style/pages/detailed.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/detailed.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\fujian\blog\react-blog\pages\detailed.js */"./pages/detailed.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd/lib/affix":
/*!*********************************!*\
  !*** external "antd/lib/affix" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/affix");

/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/breadcrumb":
/*!**************************************!*\
  !*** external "antd/lib/breadcrumb" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "markdown-navbar":
/*!**********************************!*\
  !*** external "markdown-navbar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-navbar");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ })

/******/ });
//# sourceMappingURL=detailed.js.map