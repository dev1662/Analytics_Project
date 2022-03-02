(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/content/Loader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/content/Loader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Loader",
  props: {
    logo: String,
    spinnerClass: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/Layout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/Layout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _view_layout_aside_Aside_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/view/layout/aside/Aside.vue */ "./resources/js/src/view/layout/aside/Aside.vue");
/* harmony import */ var _view_layout_header_Header_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/view/layout/header/Header.vue */ "./resources/js/src/view/layout/header/Header.vue");
/* harmony import */ var _view_layout_header_HeaderMobile_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/view/layout/header/HeaderMobile.vue */ "./resources/js/src/view/layout/header/HeaderMobile.vue");
/* harmony import */ var _view_layout_footer_Footer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/view/layout/footer/Footer.vue */ "./resources/js/src/view/layout/footer/Footer.vue");
/* harmony import */ var _core_services_htmlclass_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/services/htmlclass.service */ "./resources/js/src/core/services/htmlclass.service.js");
/* harmony import */ var _view_layout_subheader_Subheader_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/view/layout/subheader/Subheader.vue */ "./resources/js/src/view/layout/subheader/Subheader.vue");
/* harmony import */ var _view_layout_extras_StickyToolbar_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/view/layout/extras/StickyToolbar.vue */ "./resources/js/src/view/layout/extras/StickyToolbar.vue");
/* harmony import */ var _view_layout_extras_ScrollTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/view/layout/extras/ScrollTop */ "./resources/js/src/view/layout/extras/ScrollTop.vue");
/* harmony import */ var _view_content_Loader_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/view/content/Loader.vue */ "./resources/js/src/view/content/Loader.vue");
/* harmony import */ var _core_services_store_htmlclass_module_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/core/services/store/htmlclass.module.js */ "./resources/js/src/core/services/store/htmlclass.module.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Layout",
  components: {
    KTAside: _view_layout_aside_Aside_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    KTHeader: _view_layout_header_Header_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    KTHeaderMobile: _view_layout_header_HeaderMobile_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    KTFooter: _view_layout_footer_Footer_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    KTSubheader: _view_layout_subheader_Subheader_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    KTStickyToolbar: _view_layout_extras_StickyToolbar_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    KTScrollTop: _view_layout_extras_ScrollTop__WEBPACK_IMPORTED_MODULE_8__["default"],
    Loader: _view_content_Loader_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  beforeMount: function beforeMount() {
    // show page loading
    this.$store.dispatch(_core_services_store_htmlclass_module_js__WEBPACK_IMPORTED_MODULE_10__["ADD_BODY_CLASSNAME"], "page-loading"); // initialize html element classes

    _core_services_htmlclass_service__WEBPACK_IMPORTED_MODULE_5__["default"].init(this.layoutConfig());
  },
  mounted: function mounted() {
    var _this = this;

    // check if current user is authenticated
    if (!this.isAuthenticated) {
      this.$router.push({
        name: "login"
      });
    } // Simulate the delay page loading


    setTimeout(function () {
      // Remove page loader after some time
      _this.$store.dispatch(_core_services_store_htmlclass_module_js__WEBPACK_IMPORTED_MODULE_10__["REMOVE_BODY_CLASSNAME"], "page-loading");
    }, 2000);
  },
  methods: {},
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["isAuthenticated", "breadcrumbs", "pageTitle", "layoutConfig"])), {}, {
    /**
     * Check if the page loader is enabled
     * @returns {boolean}
     */
    loaderEnabled: function loaderEnabled() {
      return !/false/.test(this.layoutConfig("loader.type"));
    },

    /**
     * Check if container width is fluid
     * @returns {boolean}
     */
    contentFluid: function contentFluid() {
      return this.layoutConfig("content.width") === "fluid";
    },

    /**
     * Page loader logo image using require() function
     * @returns {string}
     */
    loaderLogo: function loaderLogo() {
      return process.env.BASE_URL + this.layoutConfig("loader.logo");
    },

    /**
     * Check if the left aside menu is enabled
     * @returns {boolean}
     */
    asideEnabled: function asideEnabled() {
      return !!this.layoutConfig("aside.self.display");
    },

    /**
     * Set the right toolbar display
     * @returns {boolean}
     */
    toolbarDisplay: function toolbarDisplay() {
      // return !!this.layoutConfig("toolbar.display");
      return true;
    },

    /**
     * Set the subheader display
     * @returns {boolean}
     */
    subheaderDisplay: function subheaderDisplay() {
      return !!this.layoutConfig("subheader.display");
    }
  })
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/aside/Aside.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _view_layout_brand_Brand_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/view/layout/brand/Brand.vue */ "./resources/js/src/view/layout/brand/Brand.vue");
/* harmony import */ var _assets_js_layout_base_aside_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/js/layout/base/aside.js */ "./resources/js/src/assets/js/layout/base/aside.js");
/* harmony import */ var _assets_js_layout_base_aside_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/js/layout/base/aside-menu.js */ "./resources/js/src/assets/js/layout/base/aside-menu.js");
/* harmony import */ var _view_layout_aside_Menu_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/view/layout/aside/Menu.vue */ "./resources/js/src/view/layout/aside/Menu.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTAside",
  data: function data() {
    return {
      insideTm: 0,
      outsideTm: 0
    };
  },
  components: {
    KTBrand: _view_layout_brand_Brand_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    KTMenu: _view_layout_aside_Menu_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      // Init Aside
      _assets_js_layout_base_aside_js__WEBPACK_IMPORTED_MODULE_2__["default"].init(_this.$refs["kt_aside"]); // Init Aside Menu

      _assets_js_layout_base_aside_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"].init(_this.$refs["kt_aside_menu"]);
    });
  },
  methods: {
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     */
    mouseEnter: function mouseEnter() {
      if (this.layoutConfig("aside.self.minimize.hoverable")) {
        // check if the left aside menu is fixed
        if (document.body.classList.contains("aside-fixed")) {
          if (this.outsideTm) {
            clearTimeout(this.outsideTm);
            this.outsideTm = null;
          } // if the left aside menu is minimized


          if (document.body.classList.contains("aside-minimize")) {
            document.body.classList.add("aside-minimize-hover"); // show the left aside menu

            document.body.classList.remove("aside-minimize");
          }
        }
      }
    },

    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     */
    mouseLeave: function mouseLeave() {
      if (this.layoutConfig("aside.self.minimize.hoverable")) {
        if (document.body.classList.contains("aside-fixed")) {
          if (this.insideTm) {
            clearTimeout(this.insideTm);
            this.insideTm = null;
          }

          if (document.querySelector(".aside-menu .scroll")) {
            document.querySelector(".aside-menu .scroll").scrollTop = 0;
          } // if the left aside menu is expand


          if (document.body.classList.contains("aside-minimize-hover")) {
            // hide back the left aside menu
            document.body.classList.remove("aside-minimize-hover");
            document.body.classList.add("aside-minimize");
          }
        }
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["layoutConfig", "getClasses"])), {}, {
    /**
     * Get extra classes for menu based on the options
     */
    asideMenuClass: function asideMenuClass() {
      var classes = this.getClasses("aside_menu");

      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }

      return null;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/aside/Menu.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/aside/Menu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTMenu",
  methods: {
    hasActiveChildren: function hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/brand/Brand.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/brand/Brand.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_layout_base_brand_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/js/layout/base/brand.js */ "./resources/js/src/assets/js/layout/base/brand.js");
/* harmony import */ var _assets_js_layout_base_aside_toggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/js/layout/base/aside-toggle.js */ "./resources/js/src/assets/js/layout/base/aside-toggle.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTBrand",
  mounted: function mounted() {
    // Init Brand Panel For Logo
    _assets_js_layout_base_brand_js__WEBPACK_IMPORTED_MODULE_2__["default"].init(this.$refs["kt_brand"]); // Init Aside Menu Toggle

    _assets_js_layout_base_aside_toggle_js__WEBPACK_IMPORTED_MODULE_3__["default"].init(this.$refs["kt_aside_toggle"]);
  },
  methods: {
    siteLogo: function siteLogo() {
      var menuAsideLeftSkin = this.layoutConfig("brand.self.theme"); // set brand logo

      var logoObject = this.layoutConfig("self.logo");
      var logo;

      if (typeof logoObject === "string") {
        logo = logoObject;
      }

      if (_typeof(logoObject) === "object") {
        logo = object_path__WEBPACK_IMPORTED_MODULE_1___default.a.get(logoObject, menuAsideLeftSkin + "");
      }

      if (typeof logo === "undefined") {
        var logos = this.layoutConfig("self.logo");
        logo = logos[Object.keys(logos)[0]];
      }

      return process.env.BASE_URL + logo;
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["layoutConfig"])), {}, {
    allowMinimize: function allowMinimize() {
      return !!this.layoutConfig("aside.self.minimize.toggle");
    }
  })
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_js_layout_extended_scrolltop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/js/layout/extended/scrolltop.js */ "./resources/js/src/assets/js/layout/extended/scrolltop.js");
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTScrollTop",
  mounted: function mounted() {
    // Init Scrolltop
    _assets_js_layout_extended_scrolltop_js__WEBPACK_IMPORTED_MODULE_0__["default"].init(this.$refs["kt_scrolltop"]);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTStickyToolbar"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_services_i18n_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/i18n.service.js */ "./resources/js/src/core/services/i18n.service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTDropdownLanguage",
  data: function data() {
    return {
      languages: _core_services_i18n_service_js__WEBPACK_IMPORTED_MODULE_0__["default"].languages
    };
  },
  methods: {
    selectedLanguage: function selectedLanguage(e) {
      var el = e.target.closest(".navi-link");
      var lang = el.getAttribute("data-lang");
      _core_services_i18n_service_js__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveLanguage(lang);
      this.$emit("language-changed", this.languages.find(function (val) {
        return val.lang === lang;
      }));
      window.location.reload();
    },
    isActiveLanguage: function isActiveLanguage(current) {
      return this.activeLanguage === current;
    }
  },
  computed: {
    activeLanguage: function activeLanguage() {
      return _core_services_i18n_service_js__WEBPACK_IMPORTED_MODULE_0__["default"].getActiveLanguage();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTDropdownMyCart",
  data: function data() {
    return {
      list: [{
        title: "iBlender",
        desc: "Best kichen badge in 2020",
        price: "$ 350",
        quantity: "5",
        img: process.env.BASE_URL + "media/stock-600x400/img-1.jpg"
      }, {
        title: "SmartCleaner",
        desc: "Smart tool for cooking",
        price: "$ 650",
        quantity: "4",
        img: process.env.BASE_URL + "media/stock-600x400/img-2.jpg"
      }, {
        title: "CameraX",
        desc: "Professional camera for edge cutting shots",
        price: "$ 150",
        quantity: "3",
        img: process.env.BASE_URL + "media/stock-600x400/img-3.jpg"
      }, {
        title: "3DPrinted",
        desc: "Manufactoring unique objects",
        price: "$ 1450",
        quantity: "7",
        img: process.env.BASE_URL + "media/stock-600x400/img-4.jpg"
      }]
    };
  },
  computed: {
    backgroundImage: function backgroundImage() {
      return process.env.BASE_URL + "media/misc/bg-1.jpg";
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTDropdownNotification",
  data: function data() {
    return {
      tabIndex: 0,
      list1: [{
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "primary",
        svg: process.env.BASE_URL + "media/svg/icons/Home/Library.svg"
      }, {
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "warning",
        svg: process.env.BASE_URL + "media/svg/icons/Communication/Write.svg"
      }, {
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "success",
        svg: process.env.BASE_URL + "media/svg/icons/Communication/Group-chat.svg"
      }, {
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "danger",
        svg: process.env.BASE_URL + "media/svg/icons/General/Attachment2.svg"
      }, {
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "info",
        svg: process.env.BASE_URL + "media/svg/icons/Communication/Shield-user.svg"
      }, {
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "info",
        svg: process.env.BASE_URL + "media/svg/icons/Communication/Mail-notification.svg"
      }, {
        title: "Briviba SaaS",
        desc: "PHP, SQLite, Artisan CLIмм",
        color: "info",
        svg: process.env.BASE_URL + "media/svg/icons/Design/Bucket.svg"
      }],
      list2: [{
        title: "New report has been received",
        desc: "23 hrs ago",
        icon: "flaticon2-line-chart text-success"
      }, {
        title: "Finance report has been generated",
        desc: "25 hrs ago",
        icon: "flaticon2-paper-plane text-danger"
      }, {
        title: "New order has been received",
        desc: "2 hrs ago",
        icon: "flaticon2-user flaticon2-line- text-success"
      }, {
        title: "New customer is registered",
        desc: "3 hrs ago",
        icon: "flaticon2-pin text-primary"
      }, {
        title: "Application has been approved",
        desc: "3 hrs ago",
        icon: "flaticon2-sms text-danger"
      }, {
        title: "New file has been uploaded",
        desc: "5 hrs ago",
        icon: "flaticon2-pie-chart-3 text-warning"
      }, {
        title: "New user feedback received",
        desc: "8 hrs ago",
        icon: "flaticon-pie-chart-1 text-info"
      }, {
        title: "System reboot has been successfully completed",
        desc: "12 hrs ago",
        icon: "flaticon2-settings text-success"
      }, {
        title: "New order has been placed",
        desc: "15 hrs ago",
        icon: "flaticon-safe-shield-protection text-primary"
      }, {
        title: "Company meeting canceled",
        desc: "19 hrs ago",
        icon: "flaticon2-notification text-primary"
      }, {
        title: "New report has been received",
        desc: "23 hrs ago",
        icon: "flaticon2-fax text-success"
      }, {
        title: "Finance report has been generated",
        desc: "25 hrs ago",
        icon: "flaticon-download-1 text-danger"
      }]
    };
  },
  methods: {
    setActiveTab: function setActiveTab(event) {
      var tab = event.target.closest('[role="tablist"]');
      var links = tab.querySelectorAll(".nav-link"); // remove active tab links

      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      } // set clicked tab index to bootstrap tab


      this.tabIndex = parseInt(event.target.getAttribute("data-tab")); // set current active tab

      event.target.classList.add("active");
    }
  },
  computed: {
    backgroundImage: function backgroundImage() {
      return process.env.BASE_URL + "media/misc/bg-1.jpg";
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTDropdownQuickAction",
  data: function data() {
    return {
      list: [{
        title: "Accounting",
        desc: "eCommerce",
        svg: process.env.BASE_URL + "media/svg/icons/Shopping/Euro.svg"
      }, {
        title: "Administration",
        desc: "Console",
        svg: process.env.BASE_URL + "media/svg/icons/Communication/Mail-attachment.svg"
      }, {
        title: "Projects",
        desc: "Pending Tasks",
        svg: process.env.BASE_URL + "media/svg/icons/Shopping/Box2.svg"
      }, {
        title: "Customers",
        desc: "Latest Cases",
        svg: process.env.BASE_URL + "media/svg/icons/Communication/Group.svg"
      }]
    };
  },
  computed: {
    backgroundImage: function backgroundImage() {
      return process.env.BASE_URL + "media/misc/bg-1.jpg";
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _view_layout_extras_dropdown_SearchResult_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/layout/extras/dropdown/SearchResult.vue */ "./resources/js/src/view/layout/extras/dropdown/SearchResult.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTSearchDefault",
  components: {
    KTSearchResult: _view_layout_extras_dropdown_SearchResult_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      data: [],
      loading: false,
      // dummy search result data
      result: [{
        text: "Documents",
        type: 0
      }, {
        svg: process.env.BASE_URL + "media/svg/files/doc.svg",
        text: "AirPlus Requirements",
        desc: "by Grog John",
        type: 1
      }, {
        svg: process.env.BASE_URL + "media/svg/files/pdf.svg",
        text: "TechNav Documentation",
        desc: "by Mary Broun",
        type: 1
      }, {
        svg: process.env.BASE_URL + "media/svg/files/zip.svg",
        text: "All Framework Docs",
        desc: "by Nick Stone",
        type: 1
      }, {
        svg: process.env.BASE_URL + "media/svg/files/xml.svg",
        text: "AirPlus Requirements",
        desc: "by Tim Hardy",
        type: 1
      }, {
        text: "Customers",
        type: 0
      }, {
        img: process.env.BASE_URL + "media/users/300_12.jpg",
        text: "Jimmy Curry",
        desc: "Software Developer",
        type: 1
      }, {
        img: process.env.BASE_URL + "media/users/300_13.jpg",
        text: "Milena Gibson",
        desc: "UI Designer",
        type: 1
      }, {
        img: process.env.BASE_URL + "media/users/300_14.jpg",
        text: "Stefan JohnStefan",
        desc: "Marketing Manager",
        type: 1
      }, {
        img: process.env.BASE_URL + "media/users/300_15.jpg",
        text: "Anna Strong",
        desc: "Software Developer",
        type: 1
      }, {
        text: "Files",
        type: 0
      }, {
        icon: "flaticon2-box text-danger",
        text: "2 New items submitted",
        desc: "Marketing Manager",
        type: 1
      }, {
        icon: "flaticon-psd text-brand",
        text: "79 PSD files generated",
        desc: "by Grog John",
        type: 1
      }, {
        icon: "flaticon2-supermarket text-warning",
        text: "$2900 worth products sold",
        desc: "Total 234 items",
        type: 1
      }, {
        icon: "flaticon-safe-shield-protection text-info",
        text: "4 New items submitted",
        desc: "Marketing Manager",
        type: 1
      }]
    };
  },
  methods: {
    onSearch: function onSearch(event) {
      var _this = this;

      if (event.target.value.length > 2) {
        this.loading = true; // simulate getting search result

        setTimeout(function () {
          _this.data = _this.result;
          _this.loading = false;
        }, 2000);
      }
    },

    /**
     * Check if the data has result
     * @returns {boolean}
     */
    hasResult: function hasResult() {
      return this.data.length || false;
    },

    /**
     * Reset search data
     */
    reset: function reset() {
      this.data = [];
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/SearchResult.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/SearchResult.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTSearchResult",
  props: {
    data: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_js_layout_extended_quick_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/js/layout/extended/quick-panel */ "./resources/js/src/assets/js/layout/extended/quick-panel.js");
/* harmony import */ var _pages_vue_bootstrap_Button_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pages/vue-bootstrap/Button.vue */ "./resources/js/src/view/pages/vue-bootstrap/Button.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/services/api.service */ "./resources/js/src/core/services/api.service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import KTLayoutQuickPanel from "@/assets/js/layout/extended/quick-panel.js";

 // import Comments from '../../../pages/Comment.vue';



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Button: _pages_vue_bootstrap_Button_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  name: "KTQuickPanel",
  computed: {},
  data: function data() {
    return {
      tabIndex: 0,
      c: {},
      //   comment:{},
      list1: [{
        title: "Top Authors",
        desc: "Most Successful Fellas",
        alt: "+82$",
        svg: "media/svg/misc/006-plurk.svg"
      }, {
        title: "Popular Authors",
        desc: "Most Successful Fellas",
        alt: "+280$",
        svg: "media/svg/misc/006-plurk.svg"
      }, {
        title: "New Users",
        desc: "Most Successful Fellas",
        alt: "+4500$",
        svg: "media/svg/misc/015-telegram.svg"
      }, {
        title: "Active Customers",
        desc: "Most Successful Fellas",
        alt: "+4500$",
        svg: "media/svg/misc/003-puzzle.svg"
      }],
      list2: [{
        title: "Another purpose persuade",
        //   desc: "Due in 2 Days",
        //   alt: "+28%",
        //   svg: "media/svg/icons/Home/Library.svg",
        type: "primary"
      }],
      list3: [{
        title: "5 new user generated report",
        desc: "Reports based on sales",
        icon: "flaticon-bell text-success"
      }, {
        title: "2 new items submited",
        desc: "by Grog John",
        icon: "flaticon2-box text-danger"
      }, {
        title: "79 PSD files generated",
        desc: "Reports based on sales",
        icon: "flaticon-psd text-primary"
      }, {
        title: "$2900 worth producucts sold",
        desc: "Total 234 items",
        icon: "flaticon2-supermarket text-warning"
      }, {
        title: "4.5h-avarage response time",
        desc: "Fostest is Barry",
        icon: "flaticon-paper-plane-1 text-success"
      }, {
        title: "3 Defence alerts",
        desc: "40% less alerts thar last week",
        icon: "flaticon-safe-shield-protection text-danger"
      }, {
        title: "Avarage 4 blog posts per author",
        desc: "Most posted 12 time",
        icon: "flaticon-notepad text-primary"
      }, {
        title: "16 authors joined last week",
        desc: "9 photodrapehrs, 7 designer",
        icon: "flaticon-users-1 text-warning"
      }, {
        title: "2 new items have been submited",
        desc: "by Grog John",
        icon: "flaticon2-box text-info"
      }, {
        title: "2.8 GB-total downloads size",
        desc: "Mostly PSD end  AL concepts",
        icon: "flaticon2-download text-success"
      }, {
        title: "$2900 worth producucts sold",
        desc: "Total 234 items",
        icon: "flaticon2-supermarket text-danger"
      }, {
        title: "7 new user generated report",
        desc: "Reports based on sales",
        icon: "flaticon-bell text-primary"
      }, {
        title: "4.5h-avarage response time",
        desc: "Fostest is Barry",
        icon: "flaticon-paper-plane-1 text-success"
      }],
      select: ''
    };
  },
  mounted: function mounted() {
    // Init Quick Offcanvas Panel
    _assets_js_layout_extended_quick_panel__WEBPACK_IMPORTED_MODULE_0__["default"].init(this.$refs["kt_quick_panel"]); // this.child();

    this.get(); // console.log(value);
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab: function setActiveTab(event) {
      var tab = event.target.closest('[role="tablist"]');
      var links = tab.querySelectorAll(".nav-link"); // remove active tab links

      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      } // set clicked tab index to bootstrap tab


      this.tabIndex = parseInt(event.target.getAttribute("data-tab")); // set current active tab

      event.target.classList.add("active");
    },
    get: function get() {
      var _this = this;

      _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["default"].get('http://localhost:8000/api/c').then(function (res) {
        _this.c = res.data;
      });
    },
    reply: function reply(index) {
      var _this2 = this;

      var id = $('#comment_id' + index).val();
      var reply = $('#reply' + index).val();
      console.log(reply);
      var form = new FormData();
      var data = {
        "comment": reply,
        "reply_id": id
      };
      form.append("data", JSON.stringify(data));
      console.log(data);
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/c/store', form).then(function (res) {
        _this2.c = res.data;

        _this2.get(); // Comments.methods.get();

      });
    },
    editInput: function editInput(index) {
      if (document.getElementById("gg" + index).style.display = "none") {
        document.getElementById("gg" + index).style.display = "block";
      }
    },
    updateReply: function updateReply(index) {
      var _this3 = this;

      var id = $('#input-1' + index).val();
      var comment = $('#input-2' + index).val(); // console.log($('#input-1'+index).val());

      var form = new FormData();
      var edit = {
        "id": id,
        "comment": comment
      };
      form.append("data", JSON.stringify(edit));
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["default"].post("http://localhost:8000/api/c/update", form).then(function (res) {
        _this3.c = res.data;

        _this3.get();
      });
    },
    removeReplyField: function removeReplyField(index) {
      if (document.getElementById("gg" + index).style.display = "block") {
        document.getElementById("gg" + index).style.display = "none";
      }
    },
    deleteReply: function deleteReply(index) {
      var _this4 = this;

      var form = new FormData();
      var deleteReply = {
        "id": index
      };
      form.append("delete", JSON.stringify(deleteReply));
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["default"].post("http://localhost:8000/api/c/delete", form).then(function (res) {
        _this4.c = res.data;

        _this4.get();
      }); // console.log(index);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/api.service */ "./resources/js/src/core/services/api.service.js");
/* harmony import */ var _core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/services/store/auth.module */ "./resources/js/src/core/services/store/auth.module.js");
/* harmony import */ var _assets_js_layout_extended_quick_user_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/js/layout/extended/quick-user.js */ "./resources/js/src/assets/js/layout/extended/quick-user.js");
/* harmony import */ var _assets_js_components_offcanvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/js/components/offcanvas.js */ "./resources/js/src/assets/js/components/offcanvas.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTQuickUser",
  data: function data() {
    return {
      dev: {},
      list: [{
        title: "Another purpose persuade",
        desc: "Due in 2 Days",
        alt: "+28%",
        svg: "media/svg/icons/Home/Library.svg",
        type: "warning"
      }, {
        title: "Would be to people",
        desc: "Due in 2 Days",
        alt: "+50%",
        svg: "media/svg/icons/Communication/Write.svg",
        type: "success"
      }, {
        title: "Purpose would be to persuade",
        desc: "Due in 2 Days",
        alt: "-27%",
        svg: "media/svg/icons/Communication/Group-chat.svg",
        type: "danger"
      }, {
        title: "The best product",
        desc: "Due in 2 Days",
        alt: "+8%",
        svg: "media/svg/icons/General/Attachment2.svg",
        type: "info"
      }]
    };
  },
  mounted: function mounted() {
    // Init Quick User Panel
    // this.getAuthUser();
    this.getUser();
    _assets_js_layout_extended_quick_user_js__WEBPACK_IMPORTED_MODULE_3__["default"].init(this.$refs["kt_quick_user"]);
  },
  methods: {
    onLogout: function onLogout() {
      // console.log(dev);
      this.$store.dispatch(_core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_2__["LOGOUT"], this.dev.email).then(function () {
        return Toast.fire({
          icon: 'success',
          title: 'Logout Successfully'
        });
      }, this.$router.push({
        name: "login"
      }), this.$store.state.auth.dev = {}, this.$store.state.isAuthenticated = false // console.log(this.$store.state.isAuthenticated)
      );
    },
    closeOffcanvas: function closeOffcanvas() {
      new _assets_js_components_offcanvas_js__WEBPACK_IMPORTED_MODULE_4__["default"](_assets_js_layout_extended_quick_user_js__WEBPACK_IMPORTED_MODULE_3__["default"].getElement()).hide();
    },
    getUser: function getUser() {
      this.dev = this.$store.state.auth.dev;
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUserPersonalInfo"])), {}, {
    getFullName: function getFullName() {
      return (// this.currentUserPersonalInfo.name = res.data.email
        this.currentUserPersonalInfo.name + " " + this.currentUserPersonalInfo.surname
      );
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Header.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/header/Header.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _view_layout_header_Topbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/view/layout/header/Topbar.vue */ "./resources/js/src/view/layout/header/Topbar.vue");
/* harmony import */ var _assets_js_layout_base_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/js/layout/base/header.js */ "./resources/js/src/assets/js/layout/base/header.js");
/* harmony import */ var _assets_js_layout_base_header_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/js/layout/base/header-menu.js */ "./resources/js/src/assets/js/layout/base/header-menu.js");
/* harmony import */ var _view_layout_header_Menu_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/view/layout/header/Menu.vue */ "./resources/js/src/view/layout/header/Menu.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTHeader",
  components: {
    KTTopbar: _view_layout_header_Topbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    KTMenu: _view_layout_header_Menu_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mounted: function mounted() {
    // Init Desktop & Mobile Headers
    _assets_js_layout_base_header_js__WEBPACK_IMPORTED_MODULE_2__["default"].init("kt_header", "kt_header_mobile"); // Init Header Menu

    _assets_js_layout_base_header_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"].init(this.$refs["kt_header_menu"], this.$refs["kt_header_menu_wrapper"]);
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["layoutConfig", "getClasses"])), {}, {
    /**
     * Check if the header menu is enabled
     * @returns {boolean}
     */
    headerMenuEnabled: function headerMenuEnabled() {
      return !!this.layoutConfig("header.menu.self.display");
    },

    /**
     * Get extra classes for header based on the options
     * @returns {null|*}
     */
    headerClasses: function headerClasses() {
      var classes = this.getClasses("header");

      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }

      return null;
    },

    /**
     * Get extra classes for header menu based on the options
     * @returns {null|*}
     */
    headerMenuClasses: function headerMenuClasses() {
      var classes = this.getClasses("header_menu");

      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }

      return null;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _assets_js_layout_base_header_topbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/js/layout/base/header-topbar.js */ "./resources/js/src/assets/js/layout/base/header-topbar.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTHeaderMobile",
  components: {},
  mounted: function mounted() {
    // Init Header Topbar For Mobile Mode
    _assets_js_layout_base_header_topbar_js__WEBPACK_IMPORTED_MODULE_1__["default"].init(this.$refs["kt_header_mobile_topbar_toggle"]);
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["layoutConfig", "getClasses"])), {}, {
    /**
     * Get header logo
     * @returns {string}
     */
    headerLogo: function headerLogo() {
      return process.env.BASE_URL + this.layoutConfig("self.logo.dark");
    },

    /**
     * Get classes for mobile header
     * @returns {null|*}
     */
    headerClasses: function headerClasses() {
      var classes = this.getClasses("header_mobile");

      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }

      return null;
    },

    /**
     * Check if the left aside menu is enabled
     * @returns {boolean}
     */
    asideEnabled: function asideEnabled() {
      return !!this.layoutConfig("aside.self.display");
    }
  })
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Menu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/header/Menu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTMenu",
  methods: {
    hasActiveChildren: function hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Topbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/header/Topbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_layout_extras_dropdown_SearchDefault_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/layout/extras/dropdown/SearchDefault.vue */ "./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue");
/* harmony import */ var _view_layout_extras_dropdown_DropdownNotification_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/view/layout/extras/dropdown/DropdownNotification.vue */ "./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue");
/* harmony import */ var _view_layout_extras_dropdown_DropdownQuickAction_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/view/layout/extras/dropdown/DropdownQuickAction.vue */ "./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue");
/* harmony import */ var _view_layout_extras_dropdown_DropdownMyCart_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/view/layout/extras/dropdown/DropdownMyCart.vue */ "./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue");
/* harmony import */ var _view_layout_extras_dropdown_DropdownLanguage_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/view/layout/extras/dropdown/DropdownLanguage.vue */ "./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue");
/* harmony import */ var _view_layout_extras_offcanvas_QuickUser_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/view/layout/extras/offcanvas/QuickUser.vue */ "./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue");
/* harmony import */ var _view_layout_extras_offcanvas_QuickPanel_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/view/layout/extras/offcanvas/QuickPanel.vue */ "./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue");
/* harmony import */ var _core_services_i18n_service_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/core/services/i18n.service.js */ "./resources/js/src/core/services/i18n.service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KTTopbar",
  data: function data() {
    return {
      languageFlag: "",
      languages: _core_services_i18n_service_js__WEBPACK_IMPORTED_MODULE_7__["default"].languages
    };
  },
  components: {
    KTSearchDefault: _view_layout_extras_dropdown_SearchDefault_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    KTDropdownNotification: _view_layout_extras_dropdown_DropdownNotification_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    KTDropdownQuickAction: _view_layout_extras_dropdown_DropdownQuickAction_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    KTDropdownMyCart: _view_layout_extras_dropdown_DropdownMyCart_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    KTDropdownLanguage: _view_layout_extras_dropdown_DropdownLanguage_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    KTQuickUser: _view_layout_extras_offcanvas_QuickUser_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    KTQuickPanel: _view_layout_extras_offcanvas_QuickPanel_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  methods: {
    onLanguageChanged: function onLanguageChanged() {
      this.languageFlag = this.languages.find(function (val) {
        return val.lang === _core_services_i18n_service_js__WEBPACK_IMPORTED_MODULE_7__["default"].getActiveLanguage();
      }).flag;
    }
  },
  computed: {
    getLanguageFlag: function getLanguageFlag() {
      return this.onLanguageChanged();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/brand/Brand.vue?vue&type=style&index=0&id=5a6fc46b&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/brand/Brand.vue?vue&type=style&index=0&id=5a6fc46b&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aside-toggle[data-v-5a6fc46b] {\n  outline: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* hide default vue-bootstrap tab links */\n.hide-tabs > div:not(.tab-content) {\n  display: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=0d66a8a8&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=0d66a8a8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#kt_quick_user[data-v-0d66a8a8] {\n  overflow: hidden;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Topbar.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/header/Topbar.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".topbar .dropdown-toggle {\n  padding: 0;\n}\n.topbar .dropdown-toggle:hover {\n  text-decoration: none;\n}\n.topbar .dropdown-toggle.dropdown-toggle-no-caret:after {\n  content: none;\n}\n.topbar .dropdown-menu {\n  margin: 0;\n  padding: 0;\n  outline: none;\n}\n.topbar .dropdown-menu .b-dropdown-text {\n  padding: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/brand/Brand.vue?vue&type=style&index=0&id=5a6fc46b&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/brand/Brand.vue?vue&type=style&index=0&id=5a6fc46b&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Brand.vue?vue&type=style&index=0&id=5a6fc46b&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/brand/Brand.vue?vue&type=style&index=0&id=5a6fc46b&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownNotification.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=0d66a8a8&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=0d66a8a8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickUser.vue?vue&type=style&index=0&id=0d66a8a8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=0d66a8a8&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Topbar.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/header/Topbar.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Topbar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Topbar.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/content/Loader.vue?vue&type=template&id=b1c5370c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/content/Loader.vue?vue&type=template&id=b1c5370c& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page-loader page-loader-logo" }, [
    _c("img", { attrs: { alt: "Logo", src: _vm.logo, width: "100" } }),
    _vm._v(" "),
    _c("div", {
      staticClass: "spinner",
      class: _vm.spinnerClass || "spinner-primary",
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/Layout.vue?vue&type=template&id=71227dee&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/Layout.vue?vue&type=template&id=71227dee& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isAuthenticated
    ? _c(
        "div",
        { staticClass: "d-flex flex-column flex-root" },
        [
          _c("KTHeaderMobile"),
          _vm._v(" "),
          _vm.loaderEnabled
            ? _c("Loader", { attrs: { logo: _vm.loaderLogo } })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex flex-row flex-column-fluid page" },
            [
              _vm.asideEnabled ? _c("KTAside") : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "d-flex flex-column flex-row-fluid wrapper",
                  attrs: { id: "kt_wrapper" },
                },
                [
                  _c("KTHeader"),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "content d-flex flex-column flex-column-fluid",
                      attrs: { id: "kt_content" },
                    },
                    [
                      _vm.subheaderDisplay
                        ? _c("KTSubheader", {
                            attrs: {
                              breadcrumbs: _vm.breadcrumbs,
                              title: _vm.pageTitle,
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-flex flex-column-fluid" }, [
                        _c(
                          "div",
                          {
                            class: {
                              "container-fluid": _vm.contentFluid,
                              container: !_vm.contentFluid,
                            },
                          },
                          [
                            _c(
                              "transition",
                              { attrs: { name: "fade-in-up" } },
                              [_c("router-view")],
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _vm.toolbarDisplay ? _c("KTStickyToolbar") : _vm._e(),
          _vm._v(" "),
          _c("KTScrollTop"),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/aside/Aside.vue?vue&type=template&id=084ace0d&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/aside/Aside.vue?vue&type=template&id=084ace0d& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "kt_aside",
      staticClass:
        "aside aside-left aside-fixed d-flex flex-column flex-row-auto",
      attrs: { id: "kt_aside" },
      on: { mouseover: _vm.mouseEnter, mouseleave: _vm.mouseLeave },
    },
    [
      _c("KTBrand"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "aside-menu-wrapper flex-column-fluid",
          attrs: { id: "kt_aside_menu_wrapper" },
        },
        [
          _c(
            "div",
            {
              ref: "kt_aside_menu",
              staticClass: "aside-menu my-4",
              class: _vm.asideMenuClass,
              attrs: {
                id: "kt_aside_menu",
                "data-menu-vertical": "1",
                "data-menu-dropdown-timeout": "500",
              },
            },
            [
              _c(
                "perfect-scrollbar",
                {
                  staticClass: "aside-menu scroll",
                  staticStyle: { "max-height": "90vh", position: "relative" },
                },
                [_c("KTMenu")],
                1
              ),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/aside/Menu.vue?vue&type=template&id=3527929a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/aside/Menu.vue?vue&type=template&id=3527929a& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "menu-nav" },
    [
      _c("router-link", {
        attrs: { to: "/dashboard" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var href = ref.href
              var navigate = ref.navigate
              var isActive = ref.isActive
              var isExactActive = ref.isExactActive
              return [
                _c(
                  "li",
                  {
                    staticClass: "menu-item",
                    class: [
                      isActive && "menu-item-active",
                      isExactActive && "menu-item-active",
                    ],
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: href },
                        on: { click: navigate },
                      },
                      [
                        _c("i", {
                          staticClass:
                            "menu-icon flaticon2-architecture-and-city",
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "menu-text" }, [
                          _vm._v("Dashboard"),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("router-link", {
        attrs: { to: "/builder" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var href = ref.href
              var navigate = ref.navigate
              var isActive = ref.isActive
              var isExactActive = ref.isExactActive
              return [
                _c(
                  "li",
                  {
                    staticClass: "menu-item",
                    class: [
                      isActive && "menu-item-active",
                      isExactActive && "menu-item-active",
                    ],
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: href },
                        on: { click: navigate },
                      },
                      [
                        _c("i", { staticClass: "menu-icon flaticon2-expand" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "menu-text" }, [
                          _vm._v("Layout Builder"),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("router-link", {
        attrs: { to: "/priority" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var href = ref.href
              var navigate = ref.navigate
              var isActive = ref.isActive
              var isExactActive = ref.isExactActive
              return [
                _c(
                  "li",
                  {
                    staticClass: "menu-item",
                    class: [
                      isActive && "menu-item-active",
                      isExactActive && "menu-item-active",
                    ],
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: href },
                        on: { click: navigate },
                      },
                      [
                        _c("i", {
                          staticClass: "menu-icon flaticon2-digital-marketing",
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "menu-text" }, [
                          _vm._v("Priority"),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("router-link", {
        attrs: { to: "/article" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var href = ref.href
              var navigate = ref.navigate
              var isActive = ref.isActive
              var isExactActive = ref.isExactActive
              return [
                _c(
                  "li",
                  {
                    staticClass: "menu-item",
                    class: [
                      isActive && "menu-item-active",
                      isExactActive && "menu-item-active",
                    ],
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: href },
                        on: { click: navigate },
                      },
                      [
                        _c("i", { staticClass: "menu-icon far fa-user" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "menu-text" }, [
                          _vm._v("Article"),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("router-link", {
        attrs: { to: "/comment" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var href = ref.href
              var navigate = ref.navigate
              var isActive = ref.isActive
              var isExactActive = ref.isExactActive
              return [
                _c(
                  "li",
                  {
                    staticClass: "menu-item",
                    class: [
                      isActive && "menu-item-active",
                      isExactActive && "menu-item-active",
                    ],
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: href },
                        on: { click: navigate },
                      },
                      [
                        _c("i", {
                          staticClass: "menu-icon flaticon2-image-file",
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "menu-text" }, [
                          _vm._v("Comment"),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "menu-item menu-item-submenu",
          class: { "menu-item-open": _vm.hasActiveChildren("/vue-bootstrap") },
          attrs: { "aria-haspopup": "true", "data-menu-toggle": "hover" },
        },
        [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "menu-submenu" }, [
            _c("span", { staticClass: "menu-arrow" }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "menu-subnav" },
              [
                _vm._m(2),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/alert" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Alert"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/badge" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Badge"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "menu-item menu-item-submenu",
                    class: {
                      "menu-item-open": _vm.hasActiveChildren(
                        "/vue-bootstrap/button"
                      ),
                    },
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "menu-submenu" }, [
                      _c("span", { staticClass: "menu-arrow" }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "menu-subnav" },
                        [
                          _vm._m(4),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/button" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Button")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/button-group" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Button Group")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/button-toolbar" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Button Toolbar")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/card" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Card"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/carousel" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Carousel"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/collapse" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Collapse"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/dropdown" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Dropdown"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/embed" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Embed"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "menu-item menu-item-submenu",
                    class: {
                      "menu-item-open": _vm.hasActiveChildren(
                        "/vue-bootstrap/form"
                      ),
                    },
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("div", { staticClass: "menu-submenu" }, [
                      _c("span", { staticClass: "menu-arrow" }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "menu-subnav" },
                        [
                          _vm._m(6),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/form" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Form")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/form-checkbox" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Form Checkbox")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/form-file" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Form File")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/form-group" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Form Group")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/form-input" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Form Input")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/form-radio" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Form Radio")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/form-select" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Form Select")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/form-textarea" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Form Textarea")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/image" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Image"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/input-group" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Input Group"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/jumbotron" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Jumbotron"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/layout-grid-system" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Layout and Grid System"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/link" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Link"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/list-group" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("List group"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/media" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Media"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/modal" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Modal"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "menu-item menu-item-submenu",
                    class: {
                      "menu-item-open":
                        _vm.hasActiveChildren("/vue-bootstrap/nav"),
                    },
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _vm._m(7),
                    _vm._v(" "),
                    _c("div", { staticClass: "menu-submenu" }, [
                      _c("span", { staticClass: "menu-arrow" }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "menu-subnav" },
                        [
                          _vm._m(8),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/nav" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Nav")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/navbar" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Navbar")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "menu-item menu-item-submenu",
                    class: {
                      "menu-item-open": _vm.hasActiveChildren(
                        "/vue-bootstrap/pagination"
                      ),
                    },
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _vm._m(9),
                    _vm._v(" "),
                    _c("div", { staticClass: "menu-submenu" }, [
                      _c("span", { staticClass: "menu-arrow" }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "menu-subnav" },
                        [
                          _vm._m(10),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/pagination" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Pagination")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/pagination-nav" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Pagination Nav")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "menu-item menu-item-submenu",
                    class: {
                      "menu-item-open": _vm.hasActiveChildren(
                        "/vue-bootstrap/notify"
                      ),
                    },
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _vm._m(11),
                    _vm._v(" "),
                    _c("div", { staticClass: "menu-submenu" }, [
                      _c("span", { staticClass: "menu-arrow" }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "menu-subnav" },
                        [
                          _vm._m(12),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/notify-popover" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Popover")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/notify-toasts" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Toasts")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/notify-tooltip" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Tooltip")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "menu-item menu-item-submenu",
                    class: {
                      "menu-item-open": _vm.hasActiveChildren(
                        "/vue-bootstrap/progress"
                      ),
                    },
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _vm._m(13),
                    _vm._v(" "),
                    _c("div", { staticClass: "menu-submenu" }, [
                      _c("span", { staticClass: "menu-arrow" }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "menu-subnav" },
                        [
                          _vm._m(14),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/progress" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Progress")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vue-bootstrap/progress-spinner" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Spinner")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/table" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Table"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vue-bootstrap/tabs" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Tabs"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
              ],
              1
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "menu-item menu-item-submenu",
          class: { "menu-item-open": _vm.hasActiveChildren("vuetify") },
          attrs: { "aria-haspopup": "true", "data-menu-toggle": "hover" },
        },
        [
          _vm._m(15),
          _vm._v(" "),
          _c("div", { staticClass: "menu-submenu" }, [
            _c("span", { staticClass: "menu-arrow" }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "menu-subnav" },
              [
                _vm._m(16),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vuetify/alerts" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Alerts"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vuetify/avatars" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Avatars"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vuetify/badges" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Badges"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vuetify/buttons" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Buttons"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vuetify/calendars" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Calendars"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vuetify/cards" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Cards"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vuetify/chips" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Chips"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vuetify/dialog" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Dialog"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "menu-item menu-item-submenu",
                    class: {
                      "menu-item-open": _vm.hasActiveChildren("/vuetify/forms"),
                    },
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _vm._m(17),
                    _vm._v(" "),
                    _c("div", { staticClass: "menu-submenu" }, [
                      _c("span", { staticClass: "menu-arrow" }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "menu-subnav" },
                        [
                          _vm._m(18),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vuetify/forms-autocompletes" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Autocompletes")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vuetify/forms-file-inputs" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("File Inputs")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vuetify/forms" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Forms")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vuetify/forms-selection-controls" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Selection Controls")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vuetify/forms-selects" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Selects")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vuetify/forms-textareas" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Textareas")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vuetify/forms-text-fields" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Text Fields")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "menu-item menu-item-submenu",
                    class: {
                      "menu-item-open":
                        _vm.hasActiveChildren("/vuetify/tables"),
                    },
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _vm._m(19),
                    _vm._v(" "),
                    _c("div", { staticClass: "menu-submenu" }, [
                      _c("span", { staticClass: "menu-arrow" }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "menu-subnav" },
                        [
                          _vm._m(20),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vuetify/tables-simple-tables" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Simple Tables")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("router-link", {
                            attrs: { to: "/vuetify/tables-data-tables" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var href = ref.href
                                  var navigate = ref.navigate
                                  var isActive = ref.isActive
                                  var isExactActive = ref.isExactActive
                                  return [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "menu-item",
                                        class: [
                                          isActive && "menu-item-active",
                                          isExactActive && "menu-item-active",
                                        ],
                                        attrs: {
                                          "aria-haspopup": "true",
                                          "data-menu-toggle": "hover",
                                        },
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "menu-link",
                                            attrs: { href: href },
                                            on: { click: navigate },
                                          },
                                          [
                                            _c(
                                              "i",
                                              {
                                                staticClass:
                                                  "menu-bullet menu-bullet-dot",
                                              },
                                              [_c("span")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "menu-text" },
                                              [_vm._v("Data Tables")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vuetify/tabs" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Tabs"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vuetify/timelines" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Timelines"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vuetify/tooltips" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Tooltips"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/vuetify/treeview" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Treeview"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
              ],
              1
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _vm._m(21),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "menu-item menu-item-submenu",
          class: {
            "menu-item-open": _vm.hasActiveChildren("/custom-error/error"),
          },
          attrs: { "aria-haspopup": "true", "data-menu-toggle": "hover" },
        },
        [
          _vm._m(22),
          _vm._v(" "),
          _c("div", { staticClass: "menu-submenu" }, [
            _c("span", { staticClass: "menu-arrow" }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "menu-subnav" },
              [
                _vm._m(23),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/custom-error/error-1" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Error 1"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/custom-error/error-2" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Error 2"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/custom-error/error-3" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Error 3"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/custom-error/error-4" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Error 4"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/custom-error/error-5" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Error 5"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/custom-error/error-6" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Error 6"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
              ],
              1
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "menu-item menu-item-submenu",
          class: {
            "menu-item-open": _vm.hasActiveChildren("/custom-wizard/wizard"),
          },
          attrs: { "aria-haspopup": "true", "data-menu-toggle": "hover" },
        },
        [
          _vm._m(24),
          _vm._v(" "),
          _c("div", { staticClass: "menu-submenu" }, [
            _c("span", { staticClass: "menu-arrow" }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "menu-subnav" },
              [
                _vm._m(25),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/custom-wizard/wizard-1" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Wizard 1"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/custom-wizard/wizard-2" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Wizard 2"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/custom-wizard/wizard-3" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Wizard 3"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("router-link", {
                  attrs: { to: "/custom-wizard/wizard-4" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var href = ref.href
                        var navigate = ref.navigate
                        var isActive = ref.isActive
                        var isExactActive = ref.isExactActive
                        return [
                          _c(
                            "li",
                            {
                              staticClass: "menu-item",
                              class: [
                                isActive && "menu-item-active",
                                isExactActive && "menu-item-active",
                              ],
                              attrs: {
                                "aria-haspopup": "true",
                                "data-menu-toggle": "hover",
                              },
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-link",
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c(
                                    "i",
                                    {
                                      staticClass:
                                        "menu-bullet menu-bullet-dot",
                                    },
                                    [_c("span")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "menu-text" }, [
                                    _vm._v("Wizard 4"),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ]),
                }),
              ],
              1
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "menu-item menu-item-submenu",
          class: {
            "menu-item-open": _vm.hasActiveChildren("/custom-plugins"),
          },
          attrs: { "aria-haspopup": "true", "data-menu-toggle": "hover" },
        },
        [
          _vm._m(26),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "menu-submenu menu-submenu-classic menu-submenu-right",
            },
            [
              _c(
                "ul",
                { staticClass: "menu-subnav" },
                [
                  _c("router-link", {
                    attrs: { to: "/custom-plugins/cropper" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function (ref) {
                          var href = ref.href
                          var navigate = ref.navigate
                          var isActive = ref.isActive
                          var isExactActive = ref.isExactActive
                          return [
                            _c(
                              "li",
                              {
                                staticClass: "menu-item",
                                class: [
                                  isActive && "menu-item-active",
                                  isExactActive && "menu-item-active",
                                ],
                                attrs: {
                                  "aria-haspopup": "true",
                                  "data-menu-toggle": "hover",
                                },
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "menu-link",
                                    attrs: { href: href },
                                    on: { click: navigate },
                                  },
                                  [
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "menu-bullet menu-bullet-dot",
                                      },
                                      [_c("span")]
                                    ),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "menu-text" }, [
                                      _vm._v(" Cropper "),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        },
                      },
                    ]),
                  }),
                  _vm._v(" "),
                  _c("router-link", {
                    attrs: { to: "/custom-plugins/treeselect" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function (ref) {
                          var href = ref.href
                          var navigate = ref.navigate
                          var isActive = ref.isActive
                          var isExactActive = ref.isExactActive
                          return [
                            _c(
                              "li",
                              {
                                staticClass: "menu-item",
                                class: [
                                  isActive && "menu-item-active",
                                  isExactActive && "menu-item-active",
                                ],
                                attrs: {
                                  "aria-haspopup": "true",
                                  "data-menu-toggle": "hover",
                                },
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "menu-link",
                                    attrs: { href: href },
                                    on: { click: navigate },
                                  },
                                  [
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "menu-bullet menu-bullet-dot",
                                      },
                                      [_c("span")]
                                    ),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "menu-text" }, [
                                      _vm._v(" Treeselect "),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        },
                      },
                    ]),
                  }),
                ],
                1
              ),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "menu-item menu-item-submenu",
          class: {
            "menu-item-open": _vm.hasActiveChildren("/profile"),
          },
          attrs: { "aria-haspopup": "true", "data-menu-toggle": "hover" },
        },
        [
          _vm._m(27),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "menu-submenu menu-submenu-classic menu-submenu-right",
            },
            [
              _c(
                "ul",
                { staticClass: "menu-subnav" },
                [
                  _c("router-link", {
                    attrs: { to: "/profile/profile-1" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function (ref) {
                          var href = ref.href
                          var navigate = ref.navigate
                          var isActive = ref.isActive
                          var isExactActive = ref.isExactActive
                          return [
                            _c(
                              "li",
                              {
                                staticClass: "menu-item",
                                class: [
                                  isActive && "menu-item-active",
                                  isExactActive && "menu-item-active",
                                ],
                                attrs: {
                                  "aria-haspopup": "true",
                                  "data-menu-toggle": "hover",
                                },
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "menu-link",
                                    attrs: { href: href },
                                    on: { click: navigate },
                                  },
                                  [
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "menu-bullet menu-bullet-dot",
                                      },
                                      [_c("span")]
                                    ),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "menu-text" }, [
                                      _vm._v("Profile 1"),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        },
                      },
                    ]),
                  }),
                  _vm._v(" "),
                  _c("router-link", {
                    attrs: { to: "/profile/profile-2" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function (ref) {
                          var href = ref.href
                          var navigate = ref.navigate
                          var isActive = ref.isActive
                          var isExactActive = ref.isExactActive
                          return [
                            _c(
                              "li",
                              {
                                staticClass: "menu-item",
                                class: [
                                  isActive && "menu-item-active",
                                  isExactActive && "menu-item-active",
                                ],
                                attrs: {
                                  "aria-haspopup": "true",
                                  "data-menu-toggle": "hover",
                                },
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "menu-link",
                                    attrs: { href: href },
                                    on: { click: navigate },
                                  },
                                  [
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "menu-bullet menu-bullet-dot",
                                      },
                                      [_c("span")]
                                    ),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "menu-text" }, [
                                      _vm._v("Profile 2"),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        },
                      },
                    ]),
                  }),
                  _vm._v(" "),
                  _c("router-link", {
                    attrs: { to: "/profile/profile-3" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function (ref) {
                          var href = ref.href
                          var navigate = ref.navigate
                          var isActive = ref.isActive
                          var isExactActive = ref.isExactActive
                          return [
                            _c(
                              "li",
                              {
                                staticClass: "menu-item",
                                class: [
                                  isActive && "menu-item-active",
                                  isExactActive && "menu-item-active",
                                ],
                                attrs: {
                                  "aria-haspopup": "true",
                                  "data-menu-toggle": "hover",
                                },
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "menu-link",
                                    attrs: { href: href },
                                    on: { click: navigate },
                                  },
                                  [
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "menu-bullet menu-bullet-dot",
                                      },
                                      [_c("span")]
                                    ),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "menu-text" }, [
                                      _vm._v("Profile 3"),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        },
                      },
                    ]),
                  }),
                  _vm._v(" "),
                  _c("router-link", {
                    attrs: { to: "/profile/profile-4" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function (ref) {
                          var href = ref.href
                          var navigate = ref.navigate
                          var isActive = ref.isActive
                          var isExactActive = ref.isExactActive
                          return [
                            _c(
                              "li",
                              {
                                staticClass: "menu-item",
                                class: [
                                  isActive && "menu-item-active",
                                  isExactActive && "menu-item-active",
                                ],
                                attrs: {
                                  "aria-haspopup": "true",
                                  "data-menu-toggle": "hover",
                                },
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "menu-link",
                                    attrs: { href: href },
                                    on: { click: navigate },
                                  },
                                  [
                                    _c(
                                      "i",
                                      {
                                        staticClass:
                                          "menu-bullet menu-bullet-dot",
                                      },
                                      [_c("span")]
                                    ),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "menu-text" }, [
                                      _vm._v("Profile 4"),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        },
                      },
                    ]),
                  }),
                ],
                1
              ),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "menu-section" }, [
      _c("h4", { staticClass: "menu-text" }, [_vm._v("Components")]),
      _vm._v(" "),
      _c("i", { staticClass: "menu-icon flaticon-more-v2" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-icon flaticon2-digital-marketing" }),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Vue Bootstrap")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "menu-item menu-item-parent",
        attrs: { "aria-haspopup": "true" },
      },
      [
        _c("span", { staticClass: "menu-link" }, [
          _c("span", { staticClass: "menu-text" }, [_vm._v("Vue Bootstrap")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Buttons")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "menu-item menu-item-parent",
        attrs: { "aria-haspopup": "true" },
      },
      [
        _c("span", { staticClass: "menu-link" }, [
          _c("span", { staticClass: "menu-text" }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Form")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "menu-item menu-item-parent",
        attrs: { "aria-haspopup": "true" },
      },
      [
        _c("span", { staticClass: "menu-link" }, [
          _c("span", { staticClass: "menu-text" }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Navigation")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "menu-item menu-item-parent",
        attrs: { "aria-haspopup": "true" },
      },
      [
        _c("span", { staticClass: "menu-link" }, [
          _c("span", { staticClass: "menu-text" }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Pagination")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "menu-item menu-item-parent",
        attrs: { "aria-haspopup": "true" },
      },
      [
        _c("span", { staticClass: "menu-link" }, [
          _c("span", { staticClass: "menu-text" }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Notify")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "menu-item menu-item-parent",
        attrs: { "aria-haspopup": "true" },
      },
      [
        _c("span", { staticClass: "menu-link" }, [
          _c("span", { staticClass: "menu-text" }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Progress")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "menu-item menu-item-parent",
        attrs: { "aria-haspopup": "true" },
      },
      [
        _c("span", { staticClass: "menu-link" }, [
          _c("span", { staticClass: "menu-text" }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-icon flaticon-web" }),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Vuetify")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "menu-item menu-item-parent",
        attrs: { "aria-haspopup": "true" },
      },
      [
        _c("span", { staticClass: "menu-link" }, [
          _c("span", { staticClass: "menu-text" }, [_vm._v("Vuetify")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Forms")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "menu-item menu-item-parent",
        attrs: { "aria-haspopup": "true" },
      },
      [
        _c("span", { staticClass: "menu-link" }, [
          _c("span", { staticClass: "menu-text" }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-bullet menu-bullet-dot" }, [_c("span")]),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Tables")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "menu-item menu-item-parent",
        attrs: { "aria-haspopup": "true" },
      },
      [
        _c("span", { staticClass: "menu-link" }, [
          _c("span", { staticClass: "menu-text" }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "menu-section" }, [
      _c("h4", { staticClass: "menu-text" }, [_vm._v("Custom")]),
      _vm._v(" "),
      _c("i", { staticClass: "menu-icon flaticon-more-v2" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-icon flaticon2-list-2" }),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Error Pages")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "menu-item menu-item-parent",
        attrs: { "aria-haspopup": "true" },
      },
      [
        _c("span", { staticClass: "menu-link" }, [
          _c("span", { staticClass: "menu-text" }, [_vm._v("Error Pages")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-icon flaticon2-mail-1" }),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Wizard")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "menu-item menu-item-parent",
        attrs: { "aria-haspopup": "true" },
      },
      [
        _c("span", { staticClass: "menu-link" }, [
          _c("span", { staticClass: "menu-text" }, [_vm._v("Wizard")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-icon flaticon2-image-file" }),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v(" Plugins ")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link menu-toggle", attrs: { href: "#" } },
      [
        _c("i", { staticClass: "menu-icon far fa-user" }),
        _vm._v(" "),
        _c("span", { staticClass: "menu-text" }, [_vm._v("Profile")]),
        _vm._v(" "),
        _c("i", { staticClass: "menu-arrow" }),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/brand/Brand.vue?vue&type=template&id=5a6fc46b&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/brand/Brand.vue?vue&type=template&id=5a6fc46b&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "kt_brand",
      staticClass: "brand flex-column-auto",
      attrs: { id: "kt_brand" },
    },
    [
      _c(
        "div",
        { staticClass: "brand-logo" },
        [
          _c("router-link", { attrs: { to: "/" } }, [
            _c("img", { attrs: { src: _vm.siteLogo(), alt: "Logo" } }),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _vm.allowMinimize
        ? _c("div", { staticClass: "brand-tools" }, [
            _c(
              "button",
              {
                ref: "kt_aside_toggle",
                staticClass: "brand-toggle btn btn-sm px-0",
                attrs: { id: "kt_aside_toggle" },
              },
              [
                _c(
                  "span",
                  { staticClass: "svg-icon svg-icon svg-icon-xl" },
                  [
                    _c("inline-svg", {
                      staticClass: "svg-icon",
                      attrs: {
                        src: "media/svg/icons/Navigation/Angle-double-left.svg",
                      },
                    }),
                  ],
                  1
                ),
              ]
            ),
          ])
        : _vm._e(),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=template&id=10efd5c0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=template&id=10efd5c0& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "kt_scrolltop",
      staticClass: "scrolltop",
      attrs: { id: "kt_scrolltop" },
    },
    [
      _c(
        "span",
        { staticClass: "svg-icon" },
        [
          _c("inline-svg", {
            attrs: { src: "media/svg/icons/Navigation/Up-2.svg" },
          }),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=template&id=1f43362a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=template&id=1f43362a& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "ul",
      {
        staticClass: "sticky-toolbar nav flex-column pl-2 pr-2 pt-3 pb-3 mt-4",
      },
      [
        _c(
          "li",
          {
            directives: [
              {
                name: "b-tooltip",
                rawName: "v-b-tooltip.hover.left",
                value: "Layout builder",
                expression: "'Layout builder'",
                modifiers: { hover: true, left: true },
              },
            ],
            staticClass: "nav-item mb-2",
          },
          [
            _c(
              "router-link",
              {
                staticClass:
                  "btn btn-sm btn-icon btn-bg-light btn-text-primary btn-hover-primary",
                attrs: { href: "#", to: { name: "builder" } },
              },
              [_c("i", { staticClass: "flaticon2-gear" })]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "b-tooltip",
                rawName: "v-b-tooltip.hover.left",
                value: "Documentation",
                expression: "'Documentation'",
                modifiers: { hover: true, left: true },
              },
            ],
            staticClass: "nav-item",
          },
          [_vm._m(0)]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "btn btn-sm btn-icon btn-bg-light btn-text-warning btn-hover-warning",
        attrs: {
          href: "https://keenthemes.com/metronic/?page=docs",
          target: "_blank",
        },
      },
      [_c("i", { staticClass: "flaticon2-telegram-logo" })]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue?vue&type=template&id=020a4b5f&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue?vue&type=template&id=020a4b5f& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "navi navi-hover py-4" },
    [
      _vm._l(_vm.languages, function (item, i) {
        return [
          _c(
            "li",
            {
              key: i,
              staticClass: "navi-item",
              class: { "navi-item-active": _vm.isActiveLanguage(item.lang) },
            },
            [
              _c(
                "a",
                {
                  staticClass: "navi-link",
                  attrs: { href: "#", "data-lang": item.lang },
                  on: { click: _vm.selectedLanguage },
                },
                [
                  _c("span", { staticClass: "symbol symbol-20 mr-3" }, [
                    _c("img", { attrs: { src: item.flag, alt: "" } }),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "navi-text" }, [
                    _vm._v(_vm._s(item.name)),
                  ]),
                ]
              ),
            ]
          ),
        ]
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue?vue&type=template&id=d7deb69a&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue?vue&type=template&id=d7deb69a& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", [
    _c(
      "div",
      {
        staticClass:
          "d-flex align-items-center py-10 px-8 bgi-size-cover bgi-no-repeat rounded-top",
        style: { backgroundImage: "url(" + _vm.backgroundImage + ")" },
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("h4", { staticClass: "text-white m-0 flex-grow-1 mr-3" }, [
          _vm._v("My Cart"),
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-success btn-sm", attrs: { type: "button" } },
          [_vm._v("2 Items")]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "scroll scroll-push" },
      [
        _c(
          "perfect-scrollbar",
          {
            staticClass: "scroll",
            staticStyle: { "max-height": "30vh", position: "relative" },
          },
          [
            _vm._l(_vm.list, function (item, i) {
              return [
                _c(
                  "div",
                  {
                    key: i,
                    staticClass:
                      "d-flex align-items-center justify-content-between p-8",
                  },
                  [
                    _c("div", { staticClass: "d-flex flex-column mr-2" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "font-weight-bold text-dark-75 font-size-lg text-hover-primary",
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(item.title) +
                              "\n            "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v(
                          "\n              " +
                            _vm._s(item.desc) +
                            "\n            "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center mt-2" },
                        [
                          _c(
                            "span",
                            {
                              staticClass:
                                "font-weight-bold mr-1 text-dark-75 font-size-3",
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(item.price) +
                                  "\n              "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-muted mr-1" }, [
                            _vm._v("for"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "font-weight-bold mr-2 text-dark-75 font-size-3",
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(item.quantity) +
                                  "\n              "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "btn btn-xs btn-light-success btn-icon mr-2",
                            },
                            [_c("i", { staticClass: "ki ki-minus icon-xs" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "btn btn-xs btn-light-success btn-icon",
                            },
                            [_c("i", { staticClass: "ki ki-plus icon-xs" })]
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("a", { staticClass: "symbol symbol-70 flex-shrink-0" }, [
                      _c("img", { attrs: { src: item.img, alt: "" } }),
                    ]),
                  ]
                ),
              ]
            }),
            _vm._v(" "),
            _c("div", { staticClass: "separator separator-solid" }),
          ],
          2
        ),
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(1),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      { staticClass: "btn btn-md btn-icon bg-white-o-15 mr-4" },
      [_c("i", { staticClass: "flaticon2-shopping-cart-1 text-success" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-8" }, [
      _c(
        "div",
        {
          staticClass: "d-flex align-items-center justify-content-between mb-4",
        },
        [
          _c(
            "span",
            { staticClass: "font-weight-bold text-muted font-size-sm mr-2" },
            [_vm._v("Total")]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "font-weight-bolder text-dark-50 text-right" },
            [_vm._v("$1840.00")]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "d-flex align-items-center justify-content-between mb-7",
        },
        [
          _c(
            "span",
            { staticClass: "font-weight-bold text-muted font-size-sm mr-2" },
            [_vm._v("Sub total")]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "font-weight-bolder text-primary text-right" },
            [_vm._v("$5640.00")]
          ),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "text-right" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary text-weight-bold",
            attrs: { type: "button" },
          },
          [_vm._v("\n        Place Order\n      ")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=template&id=af7a201c&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=template&id=af7a201c& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        {
          staticClass:
            "d-flex flex-column pt-12 bgi-size-cover bgi-no-repeat rounded-top",
          style: { backgroundImage: "url(" + _vm.backgroundImage + ")" },
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "ul",
            {
              staticClass:
                "nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-line-transparent-white nav-tabs-line-active-border-success mt-3 px-8",
              attrs: { role: "tablist" },
            },
            [
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link active",
                    attrs: {
                      "data-tab": "0",
                      "data-toggle": "tab",
                      href: "#",
                      role: "tab",
                    },
                    on: { click: _vm.setActiveTab },
                  },
                  [_vm._v("\n          Alerts\n        ")]
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      "data-tab": "1",
                      "data-toggle": "tab",
                      href: "#",
                      role: "tab",
                    },
                    on: { click: _vm.setActiveTab },
                  },
                  [_vm._v("\n          Events\n        ")]
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      "data-tab": "2",
                      "data-toggle": "tab",
                      href: "#",
                      role: "tab",
                    },
                    on: { click: _vm.setActiveTab },
                  },
                  [_vm._v("\n          Logs\n        ")]
                ),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "b-tabs",
        {
          staticClass: "hide-tabs",
          model: {
            value: _vm.tabIndex,
            callback: function ($$v) {
              _vm.tabIndex = $$v
            },
            expression: "tabIndex",
          },
        },
        [
          _c(
            "b-tab",
            { staticClass: "p-8", attrs: { active: "" } },
            [
              _c(
                "perfect-scrollbar",
                {
                  staticClass: "scroll pr-7 mr-n7",
                  staticStyle: { "max-height": "40vh", position: "relative" },
                },
                [
                  _vm._l(_vm.list1, function (item, i) {
                    return [
                      _c(
                        "div",
                        {
                          key: i,
                          staticClass: "d-flex align-items-center mb-6",
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "symbol symbol-40 mr-5",
                              class: "symbol-light-" + item.color,
                            },
                            [
                              _c("span", { staticClass: "symbol-label" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass: "svg-icon svg-icon-lg",
                                    class: "svg-icon-" + item.color,
                                  },
                                  [
                                    _c("inline-svg", {
                                      attrs: { src: item.svg },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex flex-column font-weight-bold",
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "text-dark text-hover-primary mb-1 font-size-lg",
                                  attrs: { href: "#" },
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(item.title) +
                                      "\n              "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(item.desc) +
                                    "\n              "
                                ),
                              ]),
                            ]
                          ),
                        ]
                      ),
                    ]
                  }),
                ],
                2
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-tab",
            [
              _c(
                "perfect-scrollbar",
                {
                  staticClass: "navi navi-hover scroll my-4",
                  staticStyle: { "max-height": "40vh", position: "relative" },
                },
                [
                  _vm._l(_vm.list2, function (item, i) {
                    return [
                      _c(
                        "a",
                        {
                          key: i,
                          staticClass: "navi-item",
                          attrs: { href: "#" },
                        },
                        [
                          _c("div", { staticClass: "navi-link" }, [
                            _c("div", { staticClass: "navi-icon mr-2" }, [
                              _c("i", { class: item.icon }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "navi-text" }, [
                              _c("div", { staticClass: "font-weight-bold" }, [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(item.title) +
                                    "\n                "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "text-muted" }, [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(item.desc) +
                                    "\n                "
                                ),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                    ]
                  }),
                ],
                2
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("b-tab", [
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-center text-center text-muted min-h-200px",
              },
              [
                _vm._v("\n        All caught up!"),
                _c("br"),
                _vm._v("No new notifications.\n      "),
              ]
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "d-flex flex-center rounded-top" }, [
      _c("span", { staticClass: "text-white" }, [_vm._v("User Notifications")]),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass:
            "btn btn-text btn-success btn-sm font-weight-bold btn-font-md ml-2",
        },
        [_vm._v("\n        23 new\n      ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue?vue&type=template&id=ca327068&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue?vue&type=template&id=ca327068& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "d-flex flex-column flex-center py-10 bgi-size-cover bgi-no-repeat rounded-top",
        style: { backgroundImage: "url(" + _vm.backgroundImage + ")" },
      },
      [
        _c("h4", { staticClass: "text-white font-weight-bold" }, [
          _vm._v("\n      Quick Actions\n    "),
        ]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass:
              "btn btn-success btn-sm font-weight-bold font-size-sm mt-2",
          },
          [_vm._v("\n      23 tasks pending\n    ")]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row row-paddingless" },
      [
        _vm._l(_vm.list, function (item, i) {
          return [
            _c(
              "div",
              { key: i, staticClass: "col-6" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "d-block py-10 px-5 text-center bg-hover-light border-right border-bottom",
                    attrs: { to: "builder" },
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "svg-icon svg-icon-3x svg-icon-success" },
                      [_c("inline-svg", { attrs: { src: item.svg } })],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1",
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.title) + "\n          "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "d-block text-dark-50 font-size-lg" },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.desc) + "\n          "
                        ),
                      ]
                    ),
                  ]
                ),
              ],
              1
            ),
          ]
        }),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue?vue&type=template&id=575830da&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue?vue&type=template&id=575830da& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "quick-search quick-search-dropdown quick-search-result-compact",
      class: { "quick-search-has-result": _vm.hasResult() },
      attrs: { id: "kt_quick_search_dropdown" },
    },
    [
      _c(
        "form",
        { staticClass: "quick-search-form", attrs: { method: "get" } },
        [
          _c(
            "div",
            {
              staticClass:
                "input-group spinner-input spinner-sm spinner-brand spinner-right",
              class: { spinner: _vm.loading },
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control quick-search-input",
                attrs: { type: "text", placeholder: "Search..." },
                on: { keyup: _vm.onSearch },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c("span", { staticClass: "input-group-text" }, [
                  _c("i", {
                    staticClass: "quick-search-close",
                    style: { display: _vm.hasResult() ? "flex" : "" },
                    on: { click: _vm.reset },
                  }),
                ]),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c("KTSearchResult", { attrs: { data: _vm.data } }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "flaticon2-search-1" }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/SearchResult.vue?vue&type=template&id=76fc248a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/dropdown/SearchResult.vue?vue&type=template&id=76fc248a& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "perfect-scrollbar",
    {
      staticClass: "quick-search-wrapper scroll",
      staticStyle: { "max-height": "40vh", position: "relative" },
      attrs: { options: { suppressScrollX: true } },
    },
    [
      _c(
        "div",
        { staticClass: "quick-search-result" },
        [
          !_vm.data
            ? _c("div", { staticClass: "text-muted d-none" }, [
                _vm._v("\n      No record found\n    "),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.data, function (item, i) {
            return [
              item.type === 0
                ? _c(
                    "div",
                    {
                      key: i,
                      staticClass:
                        "font-size-sm text-primary font-weight-bolder text-uppercase mb-2",
                    },
                    [_vm._v("\n        " + _vm._s(item.text) + "\n      ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              item.type === 1
                ? _c(
                    "div",
                    {
                      key: i,
                      staticClass: "d-flex align-items-center flex-grow-1 mb-2",
                    },
                    [
                      item.icon
                        ? _c(
                            "div",
                            { staticClass: "symbol symbol-30 flex-shrink-0" },
                            [
                              _c("div", { staticClass: "symbol-label" }, [
                                _c("i", { class: item.icon }),
                              ]),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      item.img
                        ? _c(
                            "div",
                            { staticClass: "symbol symbol-30 flex-shrink-0" },
                            [
                              _c("img", {
                                staticClass: "symbol-label",
                                attrs: { src: item.img, alt: "" },
                              }),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      item.svg
                        ? _c(
                            "div",
                            { staticClass: "symbol symbol-30 flex-shrink-0" },
                            [_c("img", { attrs: { src: item.svg, alt: "" } })]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "d-flex flex-column ml-3 mt-2 mb-2" },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "font-weight-bold text-dark text-hover-primary",
                              attrs: { href: "#" },
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(item.text) +
                                  "\n          "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          item.desc
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "font-size-sm font-weight-bold text-muted",
                                },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(item.desc) +
                                      "\n          "
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          }),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=35752b77&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=35752b77& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "topbar-item" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "kt_quick_panel",
        staticClass: "offcanvas offcanvas-right pt-5 pb-10",
        staticStyle: { overflow: "hidden" },
        attrs: { id: "kt_quick_panel" },
      },
      [
        _c(
          "div",
          {
            staticClass:
              "offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5",
          },
          [
            _c(
              "ul",
              {
                staticClass:
                  "nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10",
                attrs: { role: "tablist" },
              },
              [
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link active",
                      attrs: {
                        "data-tab": "0",
                        "data-toggle": "tab",
                        href: "#",
                        role: "tab",
                        "aria-selected": "true",
                      },
                      on: { click: _vm.setActiveTab },
                    },
                    [_vm._v("\n            Comments\n          ")]
                  ),
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: {
                        "data-tab": "1",
                        "data-toggle": "tab",
                        href: "#",
                        role: "tab",
                        "aria-selected": "false",
                      },
                      on: { click: _vm.setActiveTab },
                    },
                    [_vm._v("\n          Add\n          ")]
                  ),
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: {
                        "data-tab": "2",
                        "data-toggle": "tab",
                        href: "#",
                        role: "tab",
                        "aria-selected": "false",
                      },
                      on: { click: _vm.setActiveTab },
                    },
                    [_vm._v("\n           Settings\n          ")]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _vm._m(1),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "offcanvas-content px-10" }, [
          _c(
            "div",
            { staticClass: "tab-content" },
            [
              _c(
                "b-tabs",
                {
                  staticClass: "hide-tabs",
                  model: {
                    value: _vm.tabIndex,
                    callback: function ($$v) {
                      _vm.tabIndex = $$v
                    },
                    expression: "tabIndex",
                  },
                },
                [
                  _c("b-tab", { attrs: { active: "" } }, [
                    _c(
                      "div",
                      {
                        staticClass: "scroll pr-7 mr-n7",
                        attrs: { id: "kt_quick_panel_logs" },
                      },
                      [
                        _c(
                          "b-form-select",
                          {
                            staticStyle: { width: "40%!important" },
                            model: {
                              value: _vm.select,
                              callback: function ($$v) {
                                _vm.select = $$v
                              },
                              expression: "select",
                            },
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("All"),
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "For you" } }, [
                              _vm._v("For you"),
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Open" } }, [
                              _vm._v("Open"),
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Resolved" } }, [
                              _vm._v("Resolved"),
                            ]),
                          ]
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mb-15" },
                          [
                            _vm._l(_vm.c.comment, function (item, i) {
                              return [
                                item.reply_id == null
                                  ? _c(
                                      "div",
                                      {
                                        key: i,
                                        staticClass:
                                          "d-flex align-items-center rounded p-5 mb-5",
                                        class: "bg-light-danger",
                                        staticStyle: {
                                          "padding-bottom": "90px!important",
                                        },
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "svg-icon mr-5",
                                            class: "svg-icon-danger",
                                          },
                                          [
                                            _c("strong", [
                                              _vm._v(
                                                "Keyword : " +
                                                  _vm._s(item.keyword)
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("hr"),
                                            _vm._v(" "),
                                            _c("div", [
                                              _c("b", [
                                                _vm._v(" Dev Sindhwani"),
                                              ]),
                                              _vm._v(" "),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c("small", [
                                                _c("b", [
                                                  _vm._v(
                                                    _vm._s(item.created_at)
                                                  ),
                                                ]),
                                              ]),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c("p", [
                                                _vm._v(_vm._s(item.comment)),
                                              ]),
                                              _vm._v(" "),
                                              item.reply_id == null
                                                ? _c(
                                                    "div",
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          type: "text",
                                                          hidden: "",
                                                          id:
                                                            "comment_id" +
                                                            item.id,
                                                          value: item.id,
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          type: "text",
                                                          id: "reply" + item.id,
                                                          placeholder:
                                                            "Enter the Reply",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-primary",
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              return _vm.reply(
                                                                item.id
                                                              )
                                                            },
                                                          },
                                                        },
                                                        [_vm._v("Reply")]
                                                      ),
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                            ]),
                                            _vm._v(" "),
                                            _vm._l(
                                              _vm.c.replies,
                                              function (item2, a) {
                                                return _c("div", { key: a }, [
                                                  item.id == item2.reply_id
                                                    ? _c("div", [
                                                        _c("b", [
                                                          _vm._v(
                                                            " Dev Sindhwani"
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("br"),
                                                        _vm._v(" "),
                                                        _c("small", [
                                                          _c("b", [
                                                            _vm._v(
                                                              _vm._s(
                                                                item2.created_at
                                                              )
                                                            ),
                                                          ]),
                                                        ]),
                                                        _c("br"),
                                                        _vm._v(
                                                          "\n                  " +
                                                            _vm._s(
                                                              item2.comment
                                                            ) +
                                                            " "
                                                        ),
                                                        _c("br"),
                                                        _vm._v(" "),
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href: "#",
                                                            },
                                                            on: {
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.editInput(
                                                                  item2.id
                                                                )
                                                              },
                                                            },
                                                          },
                                                          [_vm._v("Edit")]
                                                        ),
                                                        _vm._v(
                                                          "  \n                  "
                                                        ),
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href: "#",
                                                            },
                                                            on: {
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.deleteReply(
                                                                  item2.id
                                                                )
                                                              },
                                                            },
                                                          },
                                                          [_vm._v("Delete")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticStyle: {
                                                              display: "none",
                                                            },
                                                            attrs: {
                                                              id:
                                                                "gg" + item2.id,
                                                            },
                                                          },
                                                          [
                                                            _c("b-form-input", {
                                                              attrs: {
                                                                id:
                                                                  "input-1" +
                                                                  item2.id,
                                                                hidden: "",
                                                                type: "text",
                                                                value: item2.id,
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c("b-form-input", {
                                                              attrs: {
                                                                id:
                                                                  "input-2" +
                                                                  item2.id,
                                                                type: "text",
                                                                placeholder:
                                                                  "Enter Reply",
                                                                value:
                                                                  item2.comment,
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-button",
                                                              {
                                                                staticClass:
                                                                  "btn btn-danger",
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      return _vm.updateReply(
                                                                        item2.id
                                                                      )
                                                                    },
                                                                },
                                                              },
                                                              [_vm._v("Edit")]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-button",
                                                              {
                                                                staticClass:
                                                                  "btn btn-success",
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      return _vm.removeReplyField(
                                                                        item2.id
                                                                      )
                                                                    },
                                                                },
                                                              },
                                                              [_vm._v("Remove")]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c("br"),
                                                        _c("br"),
                                                      ])
                                                    : _vm._e(),
                                                ])
                                              }
                                            ),
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex flex-column flex-grow-1 mr-2",
                                          },
                                          [
                                            _c("a", {
                                              staticClass:
                                                "font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1",
                                              attrs: { href: "#" },
                                            }),
                                            _vm._v(" "),
                                            _c("span", {
                                              staticClass:
                                                "text-muted font-size-sm",
                                            }),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("span", {
                                          staticClass:
                                            "font-weight-bolder py-1 font-size-lg",
                                          class: "text-danger",
                                        }),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            }),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-tab", [
                    _c(
                      "div",
                      {
                        staticClass: "scroll pr-7 mr-n7",
                        attrs: { id: "kt_quick_panel_notifications" },
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "navi navi-icon-circle navi-spacer-x-0",
                          },
                          [
                            _vm._l(_vm.list3, function (item, i) {
                              return [
                                _c(
                                  "a",
                                  {
                                    key: i,
                                    staticClass: "navi-item",
                                    attrs: { href: "#" },
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "navi-link rounded" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "symbol symbol-50 mr-3",
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "symbol-label" },
                                              [
                                                _c("i", {
                                                  staticClass: "icon-lg",
                                                  class: item.icon,
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "navi-text" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-weight-bold font-size-lg",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                          " +
                                                    _vm._s(item.title) +
                                                    "\n                        "
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "text-muted" },
                                              [
                                                _vm._v(
                                                  "\n                          " +
                                                    _vm._s(item.desc) +
                                                    "\n                        "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            }),
                          ],
                          2
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-tab", [
                    _c(
                      "div",
                      {
                        staticClass: "scroll pr-7 mr-n7",
                        attrs: { id: "kt_quick_panel_settings" },
                      },
                      [
                        _c("form", { staticClass: "form" }, [
                          _c("div", [
                            _c("h5", { staticClass: "font-weight-bold mb-3" }, [
                              _vm._v("Customer Care"),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Enable Notifications:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-success switch-sm",
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "checked",
                                          name: "",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("span"),
                                    ]),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Enable Case Tracking:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-success switch-sm",
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          name: "quick_panel_notifications_2",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("span"),
                                    ]),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Support Portal:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-success switch-sm",
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "checked",
                                          name: "",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("span"),
                                    ]),
                                  ]
                                ),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "separator separator-dashed my-6",
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "pt-2" }, [
                            _c("h5", { staticClass: "font-weight-bold mb-3" }, [
                              _vm._v("Reports"),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Generate Reports:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-sm switch-danger",
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "checked",
                                          name: "",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("span"),
                                    ]),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Enable Report Export:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-sm switch-danger",
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: { type: "checkbox", name: "" },
                                      }),
                                      _vm._v(" "),
                                      _c("span"),
                                    ]),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Allow Data Collection:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-sm switch-danger",
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "checked",
                                          name: "",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("span"),
                                    ]),
                                  ]
                                ),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "separator separator-dashed my-6",
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "pt-2" }, [
                            _c("h5", { staticClass: "font-weight-bold mb-3" }, [
                              _vm._v("Memebers"),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Enable Member singup:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-sm switch-primary",
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "checked",
                                          name: "",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("span"),
                                    ]),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Allow User Feedbacks:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-sm switch-primary",
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: { type: "checkbox", name: "" },
                                      }),
                                      _vm._v(" "),
                                      _c("span"),
                                    ]),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group mb-0 row" }, [
                              _c(
                                "label",
                                { staticClass: "col-8 col-form-label" },
                                [_vm._v("Enable Customer Portal:")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4 text-right" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "switch switch-sm switch-primary",
                                  },
                                  [
                                    _c("label", [
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "checked",
                                          name: "",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("span"),
                                    ]),
                                  ]
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "btn btn-icon btn-clean btn-lg mr-1",
        attrs: { id: "kt_quick_panel_toggle" },
      },
      [
        _c("span", { staticClass: "svg-icon svg-icon-xl svg-icon-primary" }, [
          _c("i", {
            staticClass: "fa fa-comment-alt",
            staticStyle: { color: "#3699FF" },
          }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "offcanvas-close mt-n1 pr-5" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-xs btn-icon btn-light btn-hover-primary",
          attrs: { href: "#", id: "kt_quick_panel_close" },
        },
        [_c("i", { staticClass: "ki ki-close icon-xs text-muted" })]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=template&id=0d66a8a8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=template&id=0d66a8a8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "topbar-item" }, [
    _c(
      "div",
      {
        staticClass:
          "btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2",
        attrs: { id: "kt_quick_user_toggle" },
      },
      [
        _c(
          "span",
          {
            staticClass:
              "text-muted font-weight-bold font-size-base d-none d-md-inline mr-1",
          },
          [_vm._v("\n      Hi,\n    ")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass:
              "text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3",
          },
          [_vm._v("\n      " + _vm._s(_vm.dev.name) + "\n    ")]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "symbol symbol-35 symbol-light-success" }, [
          false
            ? undefined
            : _vm._e(),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "symbol-label font-size-h5 font-weight-bold" },
            [
              _vm._v(
                "\n        " +
                  _vm._s(
                    _vm.currentUserPersonalInfo.name.charAt(0).toUpperCase()
                  ) +
                  "\n      "
              ),
            ]
          ),
        ]),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "kt_quick_user",
        staticClass: "offcanvas offcanvas-right p-10",
        attrs: { id: "kt_quick_user" },
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "perfect-scrollbar",
          {
            staticClass: "offcanvas-content pr-5 mr-n5 scroll",
            staticStyle: { "max-height": "90vh", position: "relative" },
          },
          [
            _c("div", { staticClass: "d-flex align-items-center mt-5" }, [
              _c("div", { staticClass: "symbol symbol-100 mr-5" }, [
                _c("img", {
                  staticClass: "symbol-label",
                  attrs: { src: _vm.currentUserPersonalInfo.photo, alt: "" },
                }),
                _vm._v(" "),
                _c("i", { staticClass: "symbol-badge bg-success" }),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex flex-column" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "font-weight-bold font-size-h5 text-dark-75 text-hover-primary",
                      attrs: { to: "/custom-pages/profile" },
                    },
                    [
                      _vm._v(
                        "\n            " + _vm._s(_vm.dev.name) + "\n          "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-muted mt-1" }, [
                    _vm._v("Application Developer"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "navi mt-2" }, [
                    _c(
                      "a",
                      { staticClass: "navi-item", attrs: { href: "#" } },
                      [
                        _c("span", { staticClass: "navi-link p-0 pb-2" }, [
                          _c("span", { staticClass: "navi-icon mr-1" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-lg svg-icon-primary",
                              },
                              [
                                _c("inline-svg", {
                                  attrs: {
                                    src: "media/svg/icons/Communication/Mail-notification.svg",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "navi-text text-muted text-hover-primary",
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.currentUserPersonalInfo.email) +
                                  "\n                "
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-light-primary btn-bold",
                      on: { click: _vm.onLogout },
                    },
                    [_vm._v("\n            Sign out\n          ")]
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "separator separator-dashed mt-8 mb-5" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "navi navi-spacer-x-0 p-0" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "navi-item",
                    attrs: { to: "/builder", href: "#" },
                    nativeOn: {
                      click: function ($event) {
                        return _vm.closeOffcanvas.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "navi-link" }, [
                      _c(
                        "div",
                        { staticClass: "symbol symbol-40 bg-light mr-3" },
                        [
                          _c("div", { staticClass: "symbol-label" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-md svg-icon-success",
                              },
                              [
                                _c("inline-svg", {
                                  attrs: {
                                    src: "media/svg/icons/General/Notification2.svg",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "navi-text" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/custom-pages/profile" } },
                            [
                              _c("div", { staticClass: "font-weight-bold" }, [
                                _vm._v("My Profile"),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-muted" }, [
                            _vm._v(
                              "\n                Account settings and more\n                "
                            ),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "label label-light-danger label-inline font-weight-bold",
                              },
                              [
                                _vm._v(
                                  "\n                  update\n                "
                                ),
                              ]
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "navi-item",
                    attrs: { to: "/builder", href: "#" },
                    nativeOn: {
                      click: function ($event) {
                        return _vm.closeOffcanvas.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "navi-link" }, [
                      _c(
                        "div",
                        { staticClass: "symbol symbol-40 bg-light mr-3" },
                        [
                          _c("div", { staticClass: "symbol-label" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-md svg-icon-warning",
                              },
                              [
                                _c("inline-svg", {
                                  attrs: {
                                    src: "media/svg/icons/Shopping/Chart-bar1.svg",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "navi-text" }, [
                        _c("div", { staticClass: "font-weight-bold" }, [
                          _vm._v("My Messages"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-muted" }, [
                          _vm._v("Inbox and tasks"),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "navi-item",
                    attrs: { to: "/builder", href: "#" },
                    nativeOn: {
                      click: function ($event) {
                        return _vm.closeOffcanvas.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "navi-link" }, [
                      _c(
                        "div",
                        { staticClass: "symbol symbol-40 bg-light mr-3" },
                        [
                          _c("div", { staticClass: "symbol-label" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-md svg-icon-danger",
                              },
                              [
                                _c("inline-svg", {
                                  attrs: {
                                    src: "media/svg/icons/Files/Selected-file.svg",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "navi-text" }, [
                        _c("div", { staticClass: "font-weight-bold" }, [
                          _vm._v("My Activities"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-muted" }, [
                          _vm._v("Logs and notifications"),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "navi-item",
                    attrs: { to: "/builder", href: "#" },
                    nativeOn: {
                      click: function ($event) {
                        return _vm.closeOffcanvas.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "navi-link" }, [
                      _c(
                        "div",
                        { staticClass: "symbol symbol-40 bg-light mr-3" },
                        [
                          _c("div", { staticClass: "symbol-label" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-md svg-icon-primary",
                              },
                              [
                                _c("inline-svg", {
                                  attrs: {
                                    src: "media/svg/icons/Communication/Mail-opened.svg",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "navi-text" }, [
                        _c("div", { staticClass: "font-weight-bold" }, [
                          _vm._v("My Tasks"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-muted" }, [
                          _vm._v("latest tasks and projects"),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "separator separator-dashed my-7" }),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h5", { staticClass: "mb-5" }, [
                  _vm._v("Recent Notifications"),
                ]),
                _vm._v(" "),
                _vm._l(_vm.list, function (item, i) {
                  return [
                    _c(
                      "div",
                      {
                        key: i,
                        staticClass:
                          "d-flex align-items-center rounded p-5 gutter-b",
                        class: "bg-light-" + item.type,
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "svg-icon mr-5",
                            class: "svg-icon-" + item.type,
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "svg-icon svg-icon-lg" },
                              [_c("inline-svg", { attrs: { src: item.svg } })],
                              1
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-column flex-grow-1 mr-2",
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1",
                                attrs: { href: "#" },
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(item.title) +
                                    "\n              "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "text-muted font-size-sm" },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(item.desc) +
                                    "\n              "
                                ),
                              ]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "font-weight-bolder py-1 font-size-lg",
                            class: "text-" + item.type,
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(item.alt) +
                                "\n            "
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                }),
              ],
              2
            ),
          ]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "offcanvas-header d-flex align-items-center justify-content-between pb-5",
      },
      [
        _c("h3", { staticClass: "font-weight-bold m-0" }, [
          _vm._v("\n        User Profile\n        "),
          _c("small", { staticClass: "text-muted font-size-sm ml-2" }, [
            _vm._v("12 messages"),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-xs btn-icon btn-light btn-hover-primary",
            attrs: { href: "#", id: "kt_quick_user_close" },
          },
          [_c("i", { staticClass: "ki ki-close icon-xs text-muted" })]
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Header.vue?vue&type=template&id=539988fb&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/header/Header.vue?vue&type=template&id=539988fb& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "kt_header",
      staticClass: "header",
      class: _vm.headerClasses,
      attrs: { id: "kt_header" },
    },
    [
      _c(
        "div",
        {
          staticClass:
            "container-fluid d-flex align-items-center justify-content-between",
        },
        [
          _c(
            "div",
            {
              ref: "kt_header_menu_wrapper",
              staticClass: "header-menu-wrapper header-menu-wrapper-left",
            },
            [
              _vm.headerMenuEnabled
                ? _c(
                    "div",
                    {
                      ref: "kt_header_menu",
                      staticClass: "header-menu header-menu-mobile",
                      class: _vm.headerMenuClasses,
                      attrs: { id: "kt_header_menu" },
                    },
                    [_c("KTMenu")],
                    1
                  )
                : _vm._e(),
            ]
          ),
          _vm._v(" "),
          _c("KTTopbar"),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=template&id=0ce93e7d&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=template&id=0ce93e7d& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "header-mobile align-items-center",
      class: _vm.headerClasses,
      attrs: { id: "kt_header_mobile" },
    },
    [
      _c("a", { attrs: { href: "/" } }, [
        _c("img", { attrs: { alt: "Logo", src: _vm.headerLogo } }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex align-items-center" }, [
        _vm.asideEnabled
          ? _c(
              "button",
              {
                staticClass: "btn p-0 burger-icon burger-icon-left",
                attrs: { id: "kt_aside_mobile_toggle" },
              },
              [_c("span")]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "button",
          {
            ref: "kt_header_mobile_toggle",
            staticClass: "btn p-0 burger-icon ml-4",
            attrs: { id: "kt_header_mobile_toggle" },
          },
          [_c("span")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            ref: "kt_header_mobile_topbar_toggle",
            staticClass: "btn btn-hover-text-primary p-0 ml-2",
            attrs: { id: "kt_header_mobile_topbar_toggle" },
          },
          [
            _c(
              "span",
              { staticClass: "svg-icon svg-icon-xl" },
              [
                _c("inline-svg", {
                  staticClass: "svg-icon",
                  attrs: { src: "media/svg/icons/General/User.svg" },
                }),
              ],
              1
            ),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Menu.vue?vue&type=template&id=0466a04d&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/header/Menu.vue?vue&type=template&id=0466a04d& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "menu-nav" },
    [
      _c("router-link", {
        attrs: { to: "/dashboard" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var href = ref.href
              var navigate = ref.navigate
              var isActive = ref.isActive
              var isExactActive = ref.isExactActive
              return [
                _c(
                  "li",
                  {
                    staticClass: "menu-item",
                    class: [
                      isActive && "menu-item-active",
                      isExactActive && "menu-item-active",
                    ],
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: href },
                        on: { click: navigate },
                      },
                      [
                        _c("span", { staticClass: "menu-text" }, [
                          _vm._v(" Dashboard "),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("router-link", {
        attrs: { to: "/comment" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var href = ref.href
              var navigate = ref.navigate
              var isActive = ref.isActive
              var isExactActive = ref.isExactActive
              return [
                _c(
                  "li",
                  {
                    staticClass: "menu-item",
                    class: [
                      isActive && "menu-item-active",
                      isExactActive && "menu-item-active",
                    ],
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: href },
                        on: { click: navigate },
                      },
                      [
                        _c("span", { staticClass: "menu-text" }, [
                          _vm._v(" Comment "),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("router-link", {
        attrs: { to: "/article" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var href = ref.href
              var navigate = ref.navigate
              var isActive = ref.isActive
              var isExactActive = ref.isExactActive
              return [
                _c(
                  "li",
                  {
                    staticClass: "menu-item",
                    class: [
                      isActive && "menu-item-active",
                      isExactActive && "menu-item-active",
                    ],
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: href },
                        on: { click: navigate },
                      },
                      [
                        _c("span", { staticClass: "menu-text" }, [
                          _vm._v(" Article "),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("router-link", {
        attrs: { to: "/priority" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var href = ref.href
              var navigate = ref.navigate
              var isActive = ref.isActive
              var isExactActive = ref.isExactActive
              return [
                _c(
                  "li",
                  {
                    staticClass: "menu-item",
                    class: [
                      isActive && "menu-item-active",
                      isExactActive && "menu-item-active",
                    ],
                    attrs: {
                      "aria-haspopup": "true",
                      "data-menu-toggle": "hover",
                    },
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: href },
                        on: { click: navigate },
                      },
                      [
                        _c("span", { staticClass: "menu-text" }, [
                          _vm._v(" Priority "),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Topbar.vue?vue&type=template&id=3748f48c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/header/Topbar.vue?vue&type=template&id=3748f48c& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "topbar" },
    [
      _c(
        "b-dropdown",
        {
          attrs: {
            size: "sm",
            id: "kt_quick_search_toggle",
            variant: "link",
            "toggle-class": "topbar-item text-decoration-none",
            "no-caret": "",
            right: "",
            "no-flip": "",
          },
          scopedSlots: _vm._u([
            {
              key: "button-content",
              fn: function () {
                return [
                  _c(
                    "div",
                    {
                      staticClass:
                        "btn btn-icon btn-clean btn-lg btn-dropdown mr-1",
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "svg-icon svg-icon-xl svg-icon-primary",
                        },
                        [
                          _c("inline-svg", {
                            attrs: {
                              src: "media/svg/icons/General/Search.svg",
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "min-w-md-350px", attrs: { tag: "div" } },
            [_c("KTSearchDefault")],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown",
        {
          attrs: {
            size: "sm",
            variant: "link",
            "toggle-class": "topbar-item text-decoration-none",
            "no-caret": "",
            right: "",
            "no-flip": "",
          },
          scopedSlots: _vm._u([
            {
              key: "button-content",
              fn: function () {
                return [
                  _c(
                    "div",
                    {
                      staticClass:
                        "btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary",
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "svg-icon svg-icon-xl svg-icon-primary",
                        },
                        [
                          _c("inline-svg", {
                            attrs: {
                              src: "media/svg/icons/Code/Compiling.svg",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "pulse-ring" }),
                    ]
                  ),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "min-w-md-350px", attrs: { tag: "div" } },
            [_c("form", [_c("KTDropdownNotification")], 1)]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown",
        {
          attrs: {
            size: "sm",
            variant: "link",
            "toggle-class": "topbar-item text-decoration-none",
            "no-caret": "",
            right: "",
            "no-flip": "",
          },
          scopedSlots: _vm._u([
            {
              key: "button-content",
              fn: function () {
                return [
                  _c(
                    "div",
                    {
                      staticClass:
                        "btn btn-icon btn-clean btn-dropdown btn-lg mr-1",
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "svg-icon svg-icon-xl svg-icon-primary",
                        },
                        [
                          _c("inline-svg", {
                            attrs: {
                              src: "media/svg/icons/Media/Equalizer.svg",
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "min-w-md-350px", attrs: { tag: "div" } },
            [_c("KTDropdownQuickAction")],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown",
        {
          attrs: {
            size: "sm",
            variant: "link",
            "toggle-class": "topbar-item text-decoration-none",
            "no-caret": "",
            right: "",
            "no-flip": "",
          },
          scopedSlots: _vm._u([
            {
              key: "button-content",
              fn: function () {
                return [
                  _c(
                    "div",
                    {
                      staticClass:
                        "btn btn-icon btn-clean btn-dropdown btn-lg mr-1",
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "svg-icon svg-icon-xl svg-icon-primary",
                        },
                        [
                          _c("inline-svg", {
                            attrs: {
                              src: "media/svg/icons/Shopping/Cart3.svg",
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            { staticClass: "min-w-md-350px", attrs: { tag: "div" } },
            [_c("KTDropdownMyCart")],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "topbar-item" },
        [
          _c(
            "b-dropdown",
            {
              attrs: {
                size: "sm",
                variant: "link",
                "toggle-class":
                  "btn btn-icon btn-clean btn-dropdown btn-lg mr-1 text-decoration-none",
                "no-caret": "",
                right: "",
                "no-flip": "",
              },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function () {
                    return [
                      _c("img", {
                        staticClass: "h-20px w-20px rounded-sm",
                        attrs: {
                          src: _vm.languageFlag || _vm.getLanguageFlag,
                          alt: "",
                        },
                      }),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-dropdown-text",
                { staticClass: "min-w-md-175px", attrs: { tag: "div" } },
                [
                  _c("KTDropdownLanguage", {
                    on: { "language-changed": _vm.onLanguageChanged },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("KTQuickUser"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=template&id=6c23ad12&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=template&id=6c23ad12& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/assets/sass/themes/layout/aside lazy recursive ^\\.\\/.*\\.scss$":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/assets/sass/themes/layout/aside lazy ^\.\/.*\.scss$ namespace object ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dark.scss": [
		"./resources/js/src/assets/sass/themes/layout/aside/dark.scss",
		95
	],
	"./light.scss": [
		"./resources/js/src/assets/sass/themes/layout/aside/light.scss",
		96
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/js/src/assets/sass/themes/layout/aside lazy recursive ^\\.\\/.*\\.scss$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/src/assets/sass/themes/layout/brand lazy recursive ^\\.\\/.*\\.scss$":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/assets/sass/themes/layout/brand lazy ^\.\/.*\.scss$ namespace object ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dark.scss": [
		"./resources/js/src/assets/sass/themes/layout/brand/dark.scss",
		97
	],
	"./light.scss": [
		"./resources/js/src/assets/sass/themes/layout/brand/light.scss",
		98
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/js/src/assets/sass/themes/layout/brand lazy recursive ^\\.\\/.*\\.scss$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/src/assets/sass/themes/layout/header/base lazy recursive ^\\.\\/.*\\.scss$":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/assets/sass/themes/layout/header/base lazy ^\.\/.*\.scss$ namespace object ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dark.scss": [
		"./resources/js/src/assets/sass/themes/layout/header/base/dark.scss",
		99
	],
	"./light.scss": [
		"./resources/js/src/assets/sass/themes/layout/header/base/light.scss",
		100
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/js/src/assets/sass/themes/layout/header/base lazy recursive ^\\.\\/.*\\.scss$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/src/assets/sass/themes/layout/header/menu lazy recursive ^\\.\\/.*\\.scss$":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/assets/sass/themes/layout/header/menu lazy ^\.\/.*\.scss$ namespace object ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dark.scss": [
		"./resources/js/src/assets/sass/themes/layout/header/menu/dark.scss",
		101
	],
	"./light.scss": [
		"./resources/js/src/assets/sass/themes/layout/header/menu/light.scss",
		102
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/js/src/assets/sass/themes/layout/header/menu lazy recursive ^\\.\\/.*\\.scss$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/src/core/services/htmlclass.service.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/core/services/htmlclass.service.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/htmlclass.module */ "./resources/js/src/core/services/store/htmlclass.module.js");
/* harmony import */ var _core_services_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/services/store */ "./resources/js/src/core/services/store/index.js");




var HtmlClass = {
  config: null,
  init: function init(config) {
    if (typeof config !== "undefined") {
      this.config = config;
    } // init base layout


    this.initLayout(); // init header and subheader menu

    this.initHeader();
    this.initSubheader(); // init aside and aside menu

    this.initAside(); // init footer

    this.initFooter(); // init themes

    this.initThemes();
  },

  /**
   * Init Layout
   */
  initLayout: function initLayout() {
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.has(this.config, "self.body.class")) {
      var _selfBodyClass = object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "self.body.class").toString();

      if (_selfBodyClass) {
        var bodyClasses = _selfBodyClass.split(" ");

        bodyClasses.forEach(function (cssClass) {
          _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], cssClass);
        });
      }
    }

    var bgImage = object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "self.body.background-image");

    if (typeof bgImage !== "undefined") {
      document.body.style.backgroundImage = "url(".concat(bgImage, ")");
    } // Offcanvas directions


    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "quick-panel-right");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "demo-panel-right");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "offcanvas-right"); // Properly close mobile header menu

    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["REMOVE_BODY_CLASSNAME"], "header-menu-wrapper-on");
  },

  /**
   * Init Header
   */
  initHeader: function initHeader() {
    // Fixed header
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.self.fixed.desktop")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "header-fixed");
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_CLASSNAME"], {
        position: "header",
        className: "header-fixed"
      });
    } else {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "header-static");
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.self.fixed.mobile")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "header-mobile-fixed");
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_CLASSNAME"], {
        position: "header_mobile",
        className: "header-mobile-fixed"
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.menu.self.display")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_CLASSNAME"], {
        position: "header_menu",
        className: "header-menu-layout-".concat(object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.menu.self.layout"))
      }); // Menu

      if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.menu.self.root-arrow")) {
        _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_CLASSNAME"], {
          position: "header_menu",
          className: "header-menu-root-arrow"
        });
      }
    }
  },

  /**
   * Init Subheader
   */
  initSubheader: function initSubheader() {
    // Fixed content head
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "subheader.fixed") && object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.self.fixed.desktop")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "subheader-fixed");
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "subheader.display")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "subheader-enabled");
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.has(this.config, "subheader.style")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "subheader-".concat(object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "subheader.style")));
    }
  },

  /**
   * Init Aside
   */
  initAside: function initAside() {
    // Reset aside class in body
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["REMOVE_BODY_CLASSNAME"], "aside-enabled");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["REMOVE_BODY_CLASSNAME"], "aside-fixed");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["REMOVE_BODY_CLASSNAME"], "aside-static");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["REMOVE_BODY_CLASSNAME"], "aside-minimize");

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "aside.self.display") !== true) {
      return;
    } // Add aside class enabled in body


    _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "aside-enabled"); // Fixed Aside

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "aside.self.fixed")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "aside-fixed");
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_CLASSNAME"], {
        position: "aside",
        className: "aside-fixed"
      });
    } else {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "aside-static");
    } // Default fixed


    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "aside.self.minimize.default")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "aside-minimize");
    } // Dropdown Submenu


    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "aside.menu.dropdown")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_CLASSNAME"], {
        position: "aside_menu",
        className: "aside-menu-dropdown"
      });
    }
  },

  /**
   * Init Footer
   */
  initFooter: function initFooter() {
    // Fixed header
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "footer.fixed")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__["ADD_BODY_CLASSNAME"], "footer-fixed");
    }
  },

  /**
   * Import theme SCSS file based on the selected theme
   */
  initThemes: function initThemes() {
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.self.theme")) {
      var theme = object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.self.theme");
      __webpack_require__("./resources/js/src/assets/sass/themes/layout/header/base lazy recursive ^\\.\\/.*\\.scss$")("./".concat(theme, ".scss"));
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.menu.desktop.submenu.theme")) {
      var _theme = object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "header.menu.desktop.submenu.theme");

      __webpack_require__("./resources/js/src/assets/sass/themes/layout/header/menu lazy recursive ^\\.\\/.*\\.scss$")("./".concat(_theme, ".scss"));
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "brand.self.theme")) {
      var _theme2 = object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "brand.self.theme");

      __webpack_require__("./resources/js/src/assets/sass/themes/layout/brand lazy recursive ^\\.\\/.*\\.scss$")("./".concat(_theme2, ".scss"));
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "aside.self.theme")) {
      var _theme3 = object_path__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.config, "aside.self.theme");

      __webpack_require__("./resources/js/src/assets/sass/themes/layout/aside lazy recursive ^\\.\\/.*\\.scss$")("./".concat(_theme3, ".scss"));
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (HtmlClass);

/***/ }),

/***/ "./resources/js/src/core/services/i18n.service.js":
/*!********************************************************!*\
  !*** ./resources/js/src/core/services/i18n.service.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {var i18nService = {
  defaultLanguage: "en",
  languages: [{
    lang: "en",
    name: "English",
    flag: process.env.BASE_URL + "media/svg/flags/226-united-states.svg"
  }, {
    lang: "ch",
    name: "Mandarin",
    flag: process.env.BASE_URL + "media/svg/flags/034-china.svg"
  }, {
    lang: "es",
    name: "Spanish",
    flag: process.env.BASE_URL + "media/svg/flags/128-spain.svg"
  }, {
    lang: "jp",
    name: "Japanese",
    flag: process.env.BASE_URL + "media/svg/flags/063-japan.svg"
  }, {
    lang: "de",
    name: "German",
    flag: process.env.BASE_URL + "media/svg/flags/162-germany.svg"
  }, {
    lang: "fr",
    name: "French",
    flag: process.env.BASE_URL + "media/svg/flags/195-france.svg"
  }],

  /**
   * Keep the active language in the localStorage
   * @param lang
   */
  setActiveLanguage: function setActiveLanguage(lang) {
    localStorage.setItem("language", lang);
  },

  /**
   * Get the current active language
   * @returns {string | string}
   */
  getActiveLanguage: function getActiveLanguage() {
    return localStorage.getItem("language") || this.defaultLanguage;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (i18nService);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./resources/js/src/view/content/Loader.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/view/content/Loader.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader_vue_vue_type_template_id_b1c5370c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=b1c5370c& */ "./resources/js/src/view/content/Loader.vue?vue&type=template&id=b1c5370c&");
/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js& */ "./resources/js/src/view/content/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loader_vue_vue_type_template_id_b1c5370c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loader_vue_vue_type_template_id_b1c5370c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/content/Loader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/content/Loader.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/view/content/Loader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/content/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/content/Loader.vue?vue&type=template&id=b1c5370c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/view/content/Loader.vue?vue&type=template&id=b1c5370c& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_b1c5370c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=template&id=b1c5370c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/content/Loader.vue?vue&type=template&id=b1c5370c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_b1c5370c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_b1c5370c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/Layout.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/view/layout/Layout.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_71227dee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=71227dee& */ "./resources/js/src/view/layout/Layout.vue?vue&type=template&id=71227dee&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_71227dee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_71227dee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/Layout.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/view/layout/Layout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/Layout.vue?vue&type=template&id=71227dee&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/view/layout/Layout.vue?vue&type=template&id=71227dee& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_71227dee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=71227dee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/Layout.vue?vue&type=template&id=71227dee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_71227dee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_71227dee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/aside/Aside.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Aside.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Aside_vue_vue_type_template_id_084ace0d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Aside.vue?vue&type=template&id=084ace0d& */ "./resources/js/src/view/layout/aside/Aside.vue?vue&type=template&id=084ace0d&");
/* harmony import */ var _Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Aside.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/aside/Aside.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Aside_vue_vue_type_template_id_084ace0d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Aside_vue_vue_type_template_id_084ace0d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/aside/Aside.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/aside/Aside.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Aside.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Aside.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/aside/Aside.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/aside/Aside.vue?vue&type=template&id=084ace0d&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Aside.vue?vue&type=template&id=084ace0d& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_template_id_084ace0d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Aside.vue?vue&type=template&id=084ace0d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/aside/Aside.vue?vue&type=template&id=084ace0d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_template_id_084ace0d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_template_id_084ace0d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/aside/Menu.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Menu.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu_vue_vue_type_template_id_3527929a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=3527929a& */ "./resources/js/src/view/layout/aside/Menu.vue?vue&type=template&id=3527929a&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/aside/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_3527929a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Menu_vue_vue_type_template_id_3527929a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/aside/Menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/aside/Menu.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Menu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/aside/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/aside/Menu.vue?vue&type=template&id=3527929a&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/view/layout/aside/Menu.vue?vue&type=template&id=3527929a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_3527929a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=template&id=3527929a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/aside/Menu.vue?vue&type=template&id=3527929a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_3527929a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_3527929a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/brand/Brand.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/view/layout/brand/Brand.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Brand_vue_vue_type_template_id_5a6fc46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brand.vue?vue&type=template&id=5a6fc46b&scoped=true& */ "./resources/js/src/view/layout/brand/Brand.vue?vue&type=template&id=5a6fc46b&scoped=true&");
/* harmony import */ var _Brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brand.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/brand/Brand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Brand_vue_vue_type_style_index_0_id_5a6fc46b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Brand.vue?vue&type=style&index=0&id=5a6fc46b&lang=scss&scoped=true& */ "./resources/js/src/view/layout/brand/Brand.vue?vue&type=style&index=0&id=5a6fc46b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Brand_vue_vue_type_template_id_5a6fc46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Brand_vue_vue_type_template_id_5a6fc46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5a6fc46b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/brand/Brand.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/brand/Brand.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/view/layout/brand/Brand.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Brand.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/brand/Brand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/brand/Brand.vue?vue&type=style&index=0&id=5a6fc46b&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/brand/Brand.vue?vue&type=style&index=0&id=5a6fc46b&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_style_index_0_id_5a6fc46b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Brand.vue?vue&type=style&index=0&id=5a6fc46b&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/brand/Brand.vue?vue&type=style&index=0&id=5a6fc46b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_style_index_0_id_5a6fc46b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_style_index_0_id_5a6fc46b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_style_index_0_id_5a6fc46b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_style_index_0_id_5a6fc46b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/view/layout/brand/Brand.vue?vue&type=template&id=5a6fc46b&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/brand/Brand.vue?vue&type=template&id=5a6fc46b&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_template_id_5a6fc46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Brand.vue?vue&type=template&id=5a6fc46b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/brand/Brand.vue?vue&type=template&id=5a6fc46b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_template_id_5a6fc46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_template_id_5a6fc46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/extras/ScrollTop.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/view/layout/extras/ScrollTop.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollTop_vue_vue_type_template_id_10efd5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollTop.vue?vue&type=template&id=10efd5c0& */ "./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=template&id=10efd5c0&");
/* harmony import */ var _ScrollTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollTop.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ScrollTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScrollTop_vue_vue_type_template_id_10efd5c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScrollTop_vue_vue_type_template_id_10efd5c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/ScrollTop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScrollTop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=template&id=10efd5c0&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=template&id=10efd5c0& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTop_vue_vue_type_template_id_10efd5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScrollTop.vue?vue&type=template&id=10efd5c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/ScrollTop.vue?vue&type=template&id=10efd5c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTop_vue_vue_type_template_id_10efd5c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTop_vue_vue_type_template_id_10efd5c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/extras/StickyToolbar.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/StickyToolbar.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StickyToolbar_vue_vue_type_template_id_1f43362a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StickyToolbar.vue?vue&type=template&id=1f43362a& */ "./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=template&id=1f43362a&");
/* harmony import */ var _StickyToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StickyToolbar.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StickyToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StickyToolbar_vue_vue_type_template_id_1f43362a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StickyToolbar_vue_vue_type_template_id_1f43362a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/StickyToolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StickyToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=template&id=1f43362a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=template&id=1f43362a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyToolbar_vue_vue_type_template_id_1f43362a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StickyToolbar.vue?vue&type=template&id=1f43362a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/StickyToolbar.vue?vue&type=template&id=1f43362a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyToolbar_vue_vue_type_template_id_1f43362a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StickyToolbar_vue_vue_type_template_id_1f43362a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropdownLanguage_vue_vue_type_template_id_020a4b5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownLanguage.vue?vue&type=template&id=020a4b5f& */ "./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue?vue&type=template&id=020a4b5f&");
/* harmony import */ var _DropdownLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownLanguage.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DropdownLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropdownLanguage_vue_vue_type_template_id_020a4b5f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropdownLanguage_vue_vue_type_template_id_020a4b5f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownLanguage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue?vue&type=template&id=020a4b5f&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue?vue&type=template&id=020a4b5f& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLanguage_vue_vue_type_template_id_020a4b5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownLanguage.vue?vue&type=template&id=020a4b5f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownLanguage.vue?vue&type=template&id=020a4b5f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLanguage_vue_vue_type_template_id_020a4b5f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLanguage_vue_vue_type_template_id_020a4b5f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropdownMyCart_vue_vue_type_template_id_d7deb69a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownMyCart.vue?vue&type=template&id=d7deb69a& */ "./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue?vue&type=template&id=d7deb69a&");
/* harmony import */ var _DropdownMyCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownMyCart.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DropdownMyCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropdownMyCart_vue_vue_type_template_id_d7deb69a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropdownMyCart_vue_vue_type_template_id_d7deb69a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMyCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownMyCart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMyCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue?vue&type=template&id=d7deb69a&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue?vue&type=template&id=d7deb69a& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMyCart_vue_vue_type_template_id_d7deb69a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownMyCart.vue?vue&type=template&id=d7deb69a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownMyCart.vue?vue&type=template&id=d7deb69a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMyCart_vue_vue_type_template_id_d7deb69a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMyCart_vue_vue_type_template_id_d7deb69a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropdownNotification_vue_vue_type_template_id_af7a201c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownNotification.vue?vue&type=template&id=af7a201c& */ "./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=template&id=af7a201c&");
/* harmony import */ var _DropdownNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownNotification.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DropdownNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownNotification.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DropdownNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropdownNotification_vue_vue_type_template_id_af7a201c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropdownNotification_vue_vue_type_template_id_af7a201c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownNotification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownNotification.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=template&id=af7a201c&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=template&id=af7a201c& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_template_id_af7a201c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownNotification.vue?vue&type=template&id=af7a201c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownNotification.vue?vue&type=template&id=af7a201c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_template_id_af7a201c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownNotification_vue_vue_type_template_id_af7a201c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropdownQuickAction_vue_vue_type_template_id_ca327068___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownQuickAction.vue?vue&type=template&id=ca327068& */ "./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue?vue&type=template&id=ca327068&");
/* harmony import */ var _DropdownQuickAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownQuickAction.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DropdownQuickAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropdownQuickAction_vue_vue_type_template_id_ca327068___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropdownQuickAction_vue_vue_type_template_id_ca327068___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownQuickAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownQuickAction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownQuickAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue?vue&type=template&id=ca327068&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue?vue&type=template&id=ca327068& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownQuickAction_vue_vue_type_template_id_ca327068___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownQuickAction.vue?vue&type=template&id=ca327068& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/DropdownQuickAction.vue?vue&type=template&id=ca327068&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownQuickAction_vue_vue_type_template_id_ca327068___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownQuickAction_vue_vue_type_template_id_ca327068___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchDefault_vue_vue_type_template_id_575830da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchDefault.vue?vue&type=template&id=575830da& */ "./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue?vue&type=template&id=575830da&");
/* harmony import */ var _SearchDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchDefault.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchDefault_vue_vue_type_template_id_575830da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchDefault_vue_vue_type_template_id_575830da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/dropdown/SearchDefault.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchDefault.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue?vue&type=template&id=575830da&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue?vue&type=template&id=575830da& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDefault_vue_vue_type_template_id_575830da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchDefault.vue?vue&type=template&id=575830da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/SearchDefault.vue?vue&type=template&id=575830da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDefault_vue_vue_type_template_id_575830da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDefault_vue_vue_type_template_id_575830da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/SearchResult.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/SearchResult.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchResult_vue_vue_type_template_id_76fc248a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResult.vue?vue&type=template&id=76fc248a& */ "./resources/js/src/view/layout/extras/dropdown/SearchResult.vue?vue&type=template&id=76fc248a&");
/* harmony import */ var _SearchResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchResult.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/dropdown/SearchResult.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchResult_vue_vue_type_template_id_76fc248a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchResult_vue_vue_type_template_id_76fc248a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/dropdown/SearchResult.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/SearchResult.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/SearchResult.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchResult.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/SearchResult.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/dropdown/SearchResult.vue?vue&type=template&id=76fc248a&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/dropdown/SearchResult.vue?vue&type=template&id=76fc248a& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_template_id_76fc248a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchResult.vue?vue&type=template&id=76fc248a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/dropdown/SearchResult.vue?vue&type=template&id=76fc248a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_template_id_76fc248a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_template_id_76fc248a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuickPanel_vue_vue_type_template_id_35752b77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickPanel.vue?vue&type=template&id=35752b77& */ "./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=35752b77&");
/* harmony import */ var _QuickPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickPanel.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuickPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuickPanel_vue_vue_type_template_id_35752b77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuickPanel_vue_vue_type_template_id_35752b77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=35752b77&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=35752b77& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_template_id_35752b77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickPanel.vue?vue&type=template&id=35752b77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/offcanvas/QuickPanel.vue?vue&type=template&id=35752b77&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_template_id_35752b77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPanel_vue_vue_type_template_id_35752b77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuickUser_vue_vue_type_template_id_0d66a8a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickUser.vue?vue&type=template&id=0d66a8a8&scoped=true& */ "./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=template&id=0d66a8a8&scoped=true&");
/* harmony import */ var _QuickUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickUser.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuickUser_vue_vue_type_style_index_0_id_0d66a8a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuickUser.vue?vue&type=style&index=0&id=0d66a8a8&lang=scss&scoped=true& */ "./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=0d66a8a8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuickUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuickUser_vue_vue_type_template_id_0d66a8a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuickUser_vue_vue_type_template_id_0d66a8a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d66a8a8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/extras/offcanvas/QuickUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=0d66a8a8&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=0d66a8a8&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_style_index_0_id_0d66a8a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickUser.vue?vue&type=style&index=0&id=0d66a8a8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=style&index=0&id=0d66a8a8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_style_index_0_id_0d66a8a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_style_index_0_id_0d66a8a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_style_index_0_id_0d66a8a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_style_index_0_id_0d66a8a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=template&id=0d66a8a8&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=template&id=0d66a8a8&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_template_id_0d66a8a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickUser.vue?vue&type=template&id=0d66a8a8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/extras/offcanvas/QuickUser.vue?vue&type=template&id=0d66a8a8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_template_id_0d66a8a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_template_id_0d66a8a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/footer/Footer.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/view/layout/footer/Footer.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/src/view/layout/footer/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/header/Header.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/view/layout/header/Header.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_539988fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=539988fb& */ "./resources/js/src/view/layout/header/Header.vue?vue&type=template&id=539988fb&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/header/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_539988fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_539988fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/header/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/header/Header.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/Header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/header/Header.vue?vue&type=template&id=539988fb&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/Header.vue?vue&type=template&id=539988fb& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_539988fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=539988fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Header.vue?vue&type=template&id=539988fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_539988fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_539988fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/header/HeaderMobile.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/view/layout/header/HeaderMobile.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderMobile_vue_vue_type_template_id_0ce93e7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderMobile.vue?vue&type=template&id=0ce93e7d& */ "./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=template&id=0ce93e7d&");
/* harmony import */ var _HeaderMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderMobile.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeaderMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderMobile_vue_vue_type_template_id_0ce93e7d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderMobile_vue_vue_type_template_id_0ce93e7d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/header/HeaderMobile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderMobile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=template&id=0ce93e7d&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=template&id=0ce93e7d& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_template_id_0ce93e7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderMobile.vue?vue&type=template&id=0ce93e7d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/HeaderMobile.vue?vue&type=template&id=0ce93e7d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_template_id_0ce93e7d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_template_id_0ce93e7d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/header/Menu.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/view/layout/header/Menu.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu_vue_vue_type_template_id_0466a04d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=0466a04d& */ "./resources/js/src/view/layout/header/Menu.vue?vue&type=template&id=0466a04d&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/header/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_0466a04d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Menu_vue_vue_type_template_id_0466a04d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/header/Menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/header/Menu.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/Menu.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/header/Menu.vue?vue&type=template&id=0466a04d&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/Menu.vue?vue&type=template&id=0466a04d& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_0466a04d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=template&id=0466a04d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Menu.vue?vue&type=template&id=0466a04d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_0466a04d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_0466a04d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/header/Topbar.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/view/layout/header/Topbar.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Topbar_vue_vue_type_template_id_3748f48c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topbar.vue?vue&type=template&id=3748f48c& */ "./resources/js/src/view/layout/header/Topbar.vue?vue&type=template&id=3748f48c&");
/* harmony import */ var _Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Topbar.vue?vue&type=script&lang=js& */ "./resources/js/src/view/layout/header/Topbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Topbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Topbar.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/view/layout/header/Topbar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Topbar_vue_vue_type_template_id_3748f48c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Topbar_vue_vue_type_template_id_3748f48c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/header/Topbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/header/Topbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/Topbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Topbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Topbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/layout/header/Topbar.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/Topbar.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Topbar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Topbar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/view/layout/header/Topbar.vue?vue&type=template&id=3748f48c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/view/layout/header/Topbar.vue?vue&type=template&id=3748f48c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_template_id_3748f48c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Topbar.vue?vue&type=template&id=3748f48c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/header/Topbar.vue?vue&type=template&id=3748f48c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_template_id_3748f48c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_template_id_3748f48c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/layout/subheader/Subheader.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/view/layout/subheader/Subheader.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Subheader_vue_vue_type_template_id_6c23ad12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subheader.vue?vue&type=template&id=6c23ad12& */ "./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=template&id=6c23ad12&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Subheader_vue_vue_type_template_id_6c23ad12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Subheader_vue_vue_type_template_id_6c23ad12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/layout/subheader/Subheader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=template&id=6c23ad12&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=template&id=6c23ad12& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_template_id_6c23ad12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Subheader.vue?vue&type=template&id=6c23ad12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/layout/subheader/Subheader.vue?vue&type=template&id=6c23ad12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_template_id_6c23ad12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subheader_vue_vue_type_template_id_6c23ad12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);