(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/Profile-1.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/Profile-1.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/src/core/services/store/breadcrumbs.module.js");
/* harmony import */ var _view_content_dropdown_Dropdown2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/view/content/dropdown/Dropdown2 */ "./resources/js/src/view/content/dropdown/Dropdown2.vue");
/* harmony import */ var _view_pages_profile_profile_comp_1_ProfileOverview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/view/pages/profile/profile-comp-1/ProfileOverview */ "./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue");
/* harmony import */ var _view_pages_profile_profile_comp_PersonalInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/view/pages/profile/profile-comp/PersonalInformation */ "./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue");
/* harmony import */ var _view_pages_profile_profile_comp_AccountInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/view/pages/profile/profile-comp/AccountInformation */ "./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue");
/* harmony import */ var _view_pages_profile_profile_comp_ChangePassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/view/pages/profile/profile-comp/ChangePassword */ "./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue");
/* harmony import */ var _view_pages_profile_profile_comp_EmailSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/view/pages/profile/profile-comp/EmailSettings */ "./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue");
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








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "custom-page",
  components: {
    KTDropdown2: _view_content_dropdown_Dropdown2__WEBPACK_IMPORTED_MODULE_2__["default"],
    KTProfileOverview: _view_pages_profile_profile_comp_1_ProfileOverview__WEBPACK_IMPORTED_MODULE_3__["default"],
    KTPersonalInformation: _view_pages_profile_profile_comp_PersonalInformation__WEBPACK_IMPORTED_MODULE_4__["default"],
    KTAccountInformation: _view_pages_profile_profile_comp_AccountInformation__WEBPACK_IMPORTED_MODULE_5__["default"],
    KTChangePassword: _view_pages_profile_profile_comp_ChangePassword__WEBPACK_IMPORTED_MODULE_6__["default"],
    KTEmailSettings: _view_pages_profile_profile_comp_EmailSettings__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      tabIndex: 0
    };
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__["SET_BREADCRUMB"], [{
      title: "Profile 1"
    }]);
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab: function setActiveTab(event) {
      var target = event.target;

      if (!event.target.classList.contains("navi-link")) {
        target = event.target.closest(".navi-link");
      }

      var tab = target.closest('[role="tablist"]');
      var links = tab.querySelectorAll(".navi-link"); // remove active tab links

      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      } // set clicked tab index to bootstrap tab


      this.tabIndex = parseInt(target.getAttribute("data-tab")); // set current active tab

      target.classList.add("active");
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUserPersonalInfo"])), {}, {
    getFullName: function getFullName() {
      return this.currentUserPersonalInfo.name + " " + this.currentUserPersonalInfo.surname;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_pages_profile_profile_comp_1_Widget2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/pages/profile/profile-comp-1/Widget2 */ "./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue");
/* harmony import */ var _view_pages_profile_profile_comp_1_Widget3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/view/pages/profile/profile-comp-1/Widget3 */ "./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue");
/* harmony import */ var _view_pages_profile_profile_comp_1_Widget14__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/view/pages/profile/profile-comp-1/Widget14 */ "./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue");
//
//
//
//
//
//
//
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
  name: "ProfileOverview",
  components: {
    KTWidget2: _view_pages_profile_profile_comp_1_Widget2__WEBPACK_IMPORTED_MODULE_0__["default"],
    KTWidget3: _view_pages_profile_profile_comp_1_Widget3__WEBPACK_IMPORTED_MODULE_1__["default"],
    KTWidget14: _view_pages_profile_profile_comp_1_Widget14__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_content_dropdown_Dropdown2_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/content/dropdown/Dropdown2.vue */ "./resources/js/src/view/content/dropdown/Dropdown2.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Widget13",
  data: function data() {
    return {
      list: [{
        title: "Daily Standup Meeting",
        desc: "Due in 2 Days",
        status: "Approved",
        "class": "primary"
      }, {
        title: "Group Town Hall Meet-up with showcase",
        desc: "Due in 2 Days",
        status: "In Progress",
        "class": "warning"
      }, {
        title: "Next sprint planning and estimations",
        desc: "Due in 2 Days",
        status: "Success",
        "class": "success"
      }, {
        title: "Sprint delivery and project deployment",
        desc: "Due in 2 Days",
        status: "Rejected",
        "class": "danger"
      }, {
        title: "Data analytics research showcase",
        desc: "Due in 2 Days",
        status: "In Progress",
        "class": "warning"
      }]
    };
  },
  components: {
    Dropdown2: _view_content_dropdown_Dropdown2_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_content_dropdown_Dropdown2_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/content/dropdown/Dropdown2.vue */ "./resources/js/src/view/content/dropdown/Dropdown2.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "widget-2",
  data: function data() {
    return {
      list: [{
        text0: "media/stock-600x400/img-17.jpg",
        text1: "Cup & Green",
        text2: "Local, clean & environmental",
        text3: "CoreAd",
        text4: "24,900"
      }, {
        text0: "media/stock-600x400/img-10.jpg",
        text1: "Yellow Background",
        text2: "Strong abstract concept",
        text3: "KeenThemes",
        text4: "70,380"
      }, {
        text0: "media/stock-600x400/img-17.jpg",
        text1: "Nike & Blue",
        text2: "Footwear overalls",
        text3: "Invision Inc.",
        text4: "7,200"
      }, {
        text0: "media/stock-600x400/img-9.jpg",
        text1: "Desserts platter",
        text2: "Food trends & reviews",
        text3: "Figma Studio",
        text4: "36,450"
      }, {
        text0: "media/stock-600x400/img-12.jpg",
        text1: "Cup & Green",
        text2: "Local, clean & environmental",
        text3: "CoreAd",
        text4: "23,900"
      }]
    };
  },
  components: {
    Dropdown2: _view_content_dropdown_Dropdown2_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    lastElement: function lastElement(i) {
      if (i === this.list.length - 1) {
        return false;
      } else {
        return true;
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["layoutConfig"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "widget-12",
  data: function data() {
    return {
      show: "day",
      month: [{
        title: "Bestseller Theme",
        desc: "Amazing Templates",
        desc2: "ReactJS, Ruby",
        users: "354 Users",
        img: "media/svg/misc/014-kickstarter.svg"
      }, {
        title: "Top Authors",
        desc: "Successful Fellas",
        desc2: "ReactJs, HTML",
        users: "4600 Users",
        img: "media/svg/misc/006-plurk.svg"
      }, {
        title: "New Users",
        desc: "Awesome Users",
        desc2: "Laravel, Metronic",
        users: "890 Users",
        img: "media/svg/misc/003-puzzle.svg"
      }, {
        title: "Popular Authors",
        desc: "Most Successful",
        desc2: "Python, MySQL",
        users: "7200 Users",
        img: "media/svg/misc/015-telegram.svg"
      }, {
        title: "Active Customers",
        desc: "Best Customers",
        desc2: "AngularJS, C#",
        users: "6370 Users",
        img: "media/svg/misc/005-bebo.svg"
      }],
      week: [{
        title: "Popular Authors",
        desc: "Most Successful",
        desc2: "Python, MySQL",
        users: "7200 Users",
        img: "media/svg/misc/015-telegram.svg"
      }, {
        title: "Top Authors",
        desc: "Successful Fellas",
        desc2: "ReactJs, HTML",
        users: "4600 Users",
        img: "media/svg/misc/006-plurk.svg"
      }, {
        title: "New Users",
        desc: "Awesome Users",
        desc2: "Laravel, Metronic",
        users: "890 Users",
        img: "media/svg/misc/003-puzzle.svg"
      }, {
        title: "Active Customers",
        desc: "Best Customers",
        desc2: "AngularJS, C#",
        users: "6370 Users",
        img: "media/svg/misc/005-bebo.svg"
      }, {
        title: "Bestseller Theme",
        desc: "Amazing Templates",
        desc2: "ReactJS, Ruby",
        users: "354 Users",
        img: "media/svg/misc/014-kickstarter.svg"
      }],
      day: [{
        title: "Popular Authors",
        desc: "Most Successful",
        desc2: "Python, MySQL",
        users: "7200 Users",
        img: "media/svg/misc/015-telegram.svg"
      }, {
        title: "Top Authors",
        desc: "Successful Fellas",
        desc2: "ReactJs, HTML",
        users: "4600 Users",
        img: "media/svg/misc/006-plurk.svg"
      }, {
        title: "New Users",
        desc: "Awesome Users",
        desc2: "Laravel, Metronic",
        users: "890 Users",
        img: "media/svg/misc/003-puzzle.svg"
      }, {
        title: "Bestseller Theme",
        desc: "Amazing Templates",
        desc2: "ReactJS, Ruby",
        users: "354 Users",
        img: "media/svg/misc/014-kickstarter.svg"
      }, {
        title: "Active Customers",
        desc: "Best Customers",
        desc2: "AngularJS, C#",
        users: "6370 Users",
        img: "media/svg/misc/005-bebo.svg"
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["layoutConfig"])), {}, {
    dataToShow: function dataToShow() {
      if (this.show === "month") return this.month;
      if (this.show === "week") return this.week;
      if (this.show === "day") return this.day;
      return this.day;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/Profile-1.vue?vue&type=template&id=744cbb5b&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/Profile-1.vue?vue&type=template&id=744cbb5b& ***!
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
  return _c("div", { staticClass: "d-flex flex-row" }, [
    _c(
      "div",
      {
        staticClass: "flex-row-auto offcanvas-mobile w-300px w-xl-350px",
        attrs: { id: "kt_profile_aside" },
      },
      [
        _c("div", { staticClass: "card card-custom card-stretch" }, [
          _c("div", { staticClass: "card-body pt-4" }, [
            _c(
              "div",
              { staticClass: "d-flex justify-content-end" },
              [_c("KTDropdown2")],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex align-items-center" }, [
              _c(
                "div",
                {
                  staticClass:
                    "symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center",
                },
                [
                  _c("div", {
                    staticClass: "symbol-label",
                    style: {
                      backgroundImage:
                        "url(" + _vm.currentUserPersonalInfo.photo + ")",
                    },
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "symbol-badge bg-success" }),
                ]
              ),
              _vm._v(" "),
              _c("div", [
                _c(
                  "a",
                  {
                    staticClass:
                      "font-weight-bolder font-size-h5 text-dark-75 text-hover-primary",
                  },
                  [_vm._v(_vm._s(_vm.getFullName))]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-muted" }, [
                  _vm._v("Application Developer"),
                ]),
                _vm._v(" "),
                _vm._m(0),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "py-9" }, [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex align-items-center justify-content-between mb-2",
                },
                [
                  _c("span", { staticClass: "font-weight-bold mr-2" }, [
                    _vm._v("Email:"),
                  ]),
                  _vm._v(" "),
                  _c("a", { staticClass: "text-muted text-hover-primary" }, [
                    _vm._v(_vm._s(_vm.currentUserPersonalInfo.email)),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex align-items-center justify-content-between mb-2",
                },
                [
                  _c("span", { staticClass: "font-weight-bold mr-2" }, [
                    _vm._v("Phone:"),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v(_vm._s(_vm.currentUserPersonalInfo.phone)),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex align-items-center justify-content-between",
                },
                [
                  _c("span", { staticClass: "font-weight-bold mr-2" }, [
                    _vm._v("Company Name:"),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v(_vm._s(_vm.currentUserPersonalInfo.company_name)),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "navi navi-bold navi-hover navi-active navi-link-rounded",
                attrs: { role: "tablist" },
              },
              [
                _c("div", { staticClass: "navi-item mb-2" }, [
                  _c(
                    "a",
                    {
                      staticClass: "navi-link py-4 active",
                      staticStyle: { cursor: "pointer" },
                      attrs: {
                        "data-tab": "0",
                        "data-toggle": "tab",
                        role: "tab",
                        "aria-selected": "false",
                      },
                      on: { click: _vm.setActiveTab },
                    },
                    [
                      _c("span", { staticClass: "navi-icon mr-2" }, [
                        _c(
                          "span",
                          { staticClass: "svg-icon" },
                          [
                            _c("inline-svg", {
                              attrs: {
                                src: "media/svg/icons/Design/Layers.svg",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "navi-text font-size-lg" }, [
                        _vm._v("Profile Overview"),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "navi-item mb-2" }, [
                  _c(
                    "a",
                    {
                      staticClass: "navi-link py-4",
                      staticStyle: { cursor: "pointer" },
                      attrs: {
                        "data-tab": "1",
                        "data-toggle": "tab",
                        role: "tab",
                        "aria-selected": "false",
                      },
                      on: { click: _vm.setActiveTab },
                    },
                    [
                      _c("span", { staticClass: "navi-icon mr-2" }, [
                        _c(
                          "span",
                          { staticClass: "svg-icon" },
                          [
                            _c("inline-svg", {
                              attrs: {
                                src: "media/svg/icons/General/User.svg",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "navi-text font-size-lg" }, [
                        _vm._v("Personal Information"),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "navi-item mb-2" }, [
                  _c(
                    "a",
                    {
                      staticClass: "navi-link py-4",
                      staticStyle: { cursor: "pointer" },
                      attrs: {
                        "data-tab": "2",
                        "data-toggle": "tab",
                        role: "tab",
                        "aria-selected": "false",
                      },
                      on: { click: _vm.setActiveTab },
                    },
                    [
                      _c("span", { staticClass: "navi-icon mr-2" }, [
                        _c(
                          "span",
                          { staticClass: "svg-icon" },
                          [
                            _c("inline-svg", {
                              attrs: {
                                src: "media/svg/icons/Code/Compiling.svg",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "navi-text font-size-lg" }, [
                        _vm._v("Account Information"),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "navi-item mb-2" }, [
                  _c(
                    "a",
                    {
                      staticClass: "navi-link py-4",
                      staticStyle: { cursor: "pointer" },
                      attrs: {
                        "data-tab": "3",
                        "data-toggle": "tab",
                        role: "tab",
                        "aria-selected": "false",
                      },
                      on: { click: _vm.setActiveTab },
                    },
                    [
                      _c("span", { staticClass: "navi-icon mr-2" }, [
                        _c(
                          "span",
                          { staticClass: "svg-icon" },
                          [
                            _c("inline-svg", {
                              attrs: {
                                src: "media/svg/icons/Communication/Shield-user.svg",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "navi-text font-size-lg" }, [
                        _vm._v("Change Passwort"),
                      ]),
                      _vm._v(" "),
                      _vm._m(1),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "navi-item mb-2" }, [
                  _c(
                    "a",
                    {
                      staticClass: "navi-link py-4",
                      staticStyle: { cursor: "pointer" },
                      attrs: {
                        "data-tab": "4",
                        "data-toggle": "tab",
                        role: "tab",
                        "aria-selected": "false",
                      },
                      on: { click: _vm.setActiveTab },
                    },
                    [
                      _c("span", { staticClass: "navi-icon mr-2" }, [
                        _c(
                          "span",
                          { staticClass: "svg-icon" },
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
                      _vm._v(" "),
                      _c("span", { staticClass: "navi-text font-size-lg" }, [
                        _vm._v("Email settings"),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "navi-item mb-2" }, [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.right",
                          value: "Comming soon...",
                          expression: "'Comming soon...'",
                          modifiers: { hover: true, right: true },
                        },
                      ],
                      staticClass: "navi-link py-4",
                    },
                    [
                      _c("span", { staticClass: "navi-icon mr-2" }, [
                        _c(
                          "span",
                          { staticClass: "svg-icon" },
                          [
                            _c("inline-svg", {
                              attrs: {
                                src: "media/svg/icons/Layout/Layout-top-panel-6.svg",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "navi-text font-size-lg" }, [
                        _vm._v("Saved Credit Cards"),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "navi-item mb-2" }, [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.right",
                          value: "Comming soon...",
                          expression: "'Comming soon...'",
                          modifiers: { hover: true, right: true },
                        },
                      ],
                      staticClass: "navi-link py-4",
                    },
                    [
                      _c("span", { staticClass: "navi-icon mr-2" }, [
                        _c(
                          "span",
                          { staticClass: "svg-icon" },
                          [
                            _c("inline-svg", {
                              attrs: { src: "media/svg/icons/Files/File.svg" },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "navi-text font-size-lg" }, [
                        _vm._v("Tax information"),
                      ]),
                      _vm._v(" "),
                      _vm._m(2),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "navi-item mb-2" }, [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.right",
                          value: "Comming soon...",
                          expression: "'Comming soon...'",
                          modifiers: { hover: true, right: true },
                        },
                      ],
                      staticClass: "navi-link py-4",
                    },
                    [
                      _c("span", { staticClass: "navi-icon mr-2" }, [
                        _c(
                          "span",
                          { staticClass: "svg-icon" },
                          [
                            _c("inline-svg", {
                              attrs: {
                                src: "media/svg/icons/Text/Article.svg",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "navi-text" }, [
                        _vm._v("Statements"),
                      ]),
                    ]
                  ),
                ]),
              ]
            ),
          ]),
        ]),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "flex-row-fluid ml-lg-8" },
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
            _c(
              "b-tab",
              { attrs: { active: "" } },
              [_c("KTProfileOverview")],
              1
            ),
            _vm._v(" "),
            _c("b-tab", [_c("KTPersonalInformation")], 1),
            _vm._v(" "),
            _c("b-tab", [_c("KTAccountInformation")], 1),
            _vm._v(" "),
            _c("b-tab", [_c("KTChangePassword")], 1),
            _vm._v(" "),
            _c("b-tab", [_c("KTEmailSettings")], 1),
          ],
          1
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
    return _c("div", { staticClass: "mt-2" }, [
      _c(
        "a",
        {
          staticClass:
            "btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1",
        },
        [_vm._v("Chat")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "btn btn-sm btn-success font-weight-bold py-2 px-3 px-xxl-5 my-1",
        },
        [_vm._v("Follow")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "navi-label" }, [
      _c(
        "span",
        {
          staticClass:
            "label label-light-danger label-rounded font-weight-bold",
        },
        [_vm._v("5")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "navi-label" }, [
      _c(
        "span",
        {
          staticClass:
            "label label-light-primary label-inline font-weight-bold",
        },
        [_vm._v("new")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue?vue&type=template&id=4e95f6ac&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue?vue&type=template&id=4e95f6ac& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-6" }, [_c("KTWidget2")], 1),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-6" }, [_c("KTWidget14")], 1),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card card-custom gutter-b" },
      [_c("KTWidget3")],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue?vue&type=template&id=b9a7c826&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue?vue&type=template&id=b9a7c826& ***!
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
  return _c("div", { staticClass: "card card-custom card-stretch gutter-b" }, [
    _c("div", { staticClass: "card-header border-0" }, [
      _c("h3", { staticClass: "card-title font-weight-bolder text-dark" }, [
        _vm._v("Notifications"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-toolbar" }, [_c("Dropdown2")], 1),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body pt-0" },
      [
        _vm._l(_vm.list, function (item, i) {
          return [
            _c("div", { key: i, staticClass: "mb-6" }, [
              _c(
                "div",
                { staticClass: "d-flex align-items-center flex-grow-1" },
                [
                  _vm._m(0, true),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex flex-wrap align-items-center justify-content-between w-100",
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex flex-column align-items-cente py-2 w-75",
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1",
                              attrs: { href: "#" },
                            },
                            [_vm._v(_vm._s(item.title))]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "text-muted font-weight-bold" },
                            [_vm._v(_vm._s(item.desc))]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "label label-lg label-inline font-weight-bold py-4",
                          class: "label-light-" + item.class,
                        },
                        [_vm._v(_vm._s(item.status))]
                      ),
                    ]
                  ),
                ]
              ),
            ]),
          ]
        }),
      ],
      2
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass:
          "checkbox checkbox-lg checkbox-lg checkbox-single flex-shrink-0 mr-4",
      },
      [
        _c("input", { attrs: { type: "checkbox", value: "1" } }),
        _vm._v(" "),
        _c("span"),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue?vue&type=template&id=70aabed8&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue?vue&type=template&id=70aabed8& ***!
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
  return _c("div", { staticClass: "card card-custom gutter-b card-stretch" }, [
    _c("div", { staticClass: "card-header border-0" }, [
      _c("h3", { staticClass: "card-title font-weight-bolder text-dark" }, [
        _vm._v("Market Leaders"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-toolbar" }, [
        _c(
          "div",
          { staticClass: "dropdown dropdown-inline" },
          [_c("Dropdown2")],
          1
        ),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body pt-2" },
      [
        _vm._l(_vm.list, function (item, i) {
          return [
            _c(
              "div",
              {
                key: i,
                staticClass: "d-flex flex-wrap align-items-center",
                class: { "mb-9": _vm.lastElement(i) },
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4",
                  },
                  [
                    _c("div", {
                      staticClass: "symbol-label",
                      style: "background-image:url(" + item.text0 + ")",
                    }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3",
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass:
                          "text-dark-75 font-weight-bolder text-hover-primary font-size-lg",
                        attrs: { href: "#" },
                      },
                      [_vm._v(_vm._s(item.text1))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "text-muted font-weight-bold font-size-sm my-1",
                      },
                      [_vm._v(_vm._s(item.text2))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "text-muted font-weight-bold font-size-sm",
                      },
                      [
                        _vm._v("Created by:\n            "),
                        _c(
                          "span",
                          { staticClass: "text-primary font-weight-bold" },
                          [_vm._v(_vm._s(item.text3))]
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex align-items-center py-lg-0 py-2" },
                  [
                    _c(
                      "div",
                      { staticClass: "d-flex flex-column text-right" },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-dark-75 font-weight-bolder font-size-h4",
                          },
                          [_vm._v(_vm._s(item.text4))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-muted font-size-sm font-weight-bolder",
                          },
                          [_vm._v("votes")]
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue?vue&type=template&id=70b8d659&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue?vue&type=template&id=70b8d659& ***!
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
  return _c("div", { staticClass: "card card-custom card-stretch" }, [
    _c("div", { staticClass: "card-header border-0 pt-5" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-toolbar" }, [
        _c("ul", { staticClass: "nav nav-pills nav-pills-sm nav-dark-75" }, [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link py-2 px-4",
                class: { active: this.show === "month" },
                attrs: { "data-toggle": "tab", href: "#kt_tab_pane_2_1" },
                on: {
                  click: function ($event) {
                    _vm.show = "month"
                  },
                },
              },
              [_vm._v("Month")]
            ),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link py-2 px-4",
                class: { active: this.show === "week" },
                attrs: { "data-toggle": "tab", href: "#kt_tab_pane_2_2" },
                on: {
                  click: function ($event) {
                    _vm.show = "week"
                  },
                },
              },
              [_vm._v("Week")]
            ),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link py-2 px-4",
                class: { active: this.show === "day" },
                attrs: { "data-toggle": "tab", href: "#kt_tab_pane_2_3" },
                on: {
                  click: function ($event) {
                    _vm.show = "day"
                  },
                },
              },
              [_vm._v("Day")]
            ),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body pt-2 pb-0" }, [
      _c("div", { staticClass: "table-responsive" }, [
        _c(
          "table",
          { staticClass: "table table-borderless table-vertical-center" },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.dataToShow, function (item, i) {
                  return [
                    _c("tr", { key: i }, [
                      _c("td", { staticClass: "pl-0 py-5" }, [
                        _c(
                          "div",
                          { staticClass: "symbol symbol-50 symbol-light mr-2" },
                          [
                            _c("span", { staticClass: "symbol-label" }, [
                              _c("img", {
                                staticClass: "h-50 align-self-center",
                                attrs: { src: "" + item.img, alt: "" },
                              }),
                            ]),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "pl-0" }, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg",
                            attrs: { href: "#" },
                          },
                          [_vm._v(_vm._s(item.title))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "text-muted font-weight-bold d-block",
                          },
                          [_vm._v(_vm._s(item.desc))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _c(
                          "span",
                          { staticClass: "text-muted font-weight-bold" },
                          [_vm._v(_vm._s(item.desc2))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _c(
                          "span",
                          { staticClass: "text-muted font-weight-bold" },
                          [_vm._v(_vm._s(item.users))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right pr-0" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-icon btn-light btn-sm",
                            attrs: { href: "#" },
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-md svg-icon-success",
                              },
                              [
                                _c("inline-svg", {
                                  attrs: {
                                    src: "media/svg/icons/Navigation/Arrow-right.svg",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]
                }),
              ],
              2
            ),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h3",
      { staticClass: "card-title align-items-start flex-column" },
      [
        _c("span", { staticClass: "card-label font-weight-bolder text-dark" }, [
          _vm._v("New Arrivals"),
        ]),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "text-muted mt-3 font-weight-bold font-size-sm" },
          [_vm._v("More than 400+ new members")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "p-0", staticStyle: { width: "50px" } }),
        _vm._v(" "),
        _c("th", { staticClass: "p-0", staticStyle: { "min-width": "150px" } }),
        _vm._v(" "),
        _c("th", { staticClass: "p-0", staticStyle: { "min-width": "140px" } }),
        _vm._v(" "),
        _c("th", { staticClass: "p-0", staticStyle: { "min-width": "120px" } }),
        _vm._v(" "),
        _c("th", { staticClass: "p-0", staticStyle: { "min-width": "40px" } }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/profile/Profile-1.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/view/pages/profile/Profile-1.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_1_vue_vue_type_template_id_744cbb5b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile-1.vue?vue&type=template&id=744cbb5b& */ "./resources/js/src/view/pages/profile/Profile-1.vue?vue&type=template&id=744cbb5b&");
/* harmony import */ var _Profile_1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile-1.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profile/Profile-1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_1_vue_vue_type_template_id_744cbb5b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_1_vue_vue_type_template_id_744cbb5b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profile/Profile-1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profile/Profile-1.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/Profile-1.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile-1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/Profile-1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profile/Profile-1.vue?vue&type=template&id=744cbb5b&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/Profile-1.vue?vue&type=template&id=744cbb5b& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_1_vue_vue_type_template_id_744cbb5b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile-1.vue?vue&type=template&id=744cbb5b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/Profile-1.vue?vue&type=template&id=744cbb5b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_1_vue_vue_type_template_id_744cbb5b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_1_vue_vue_type_template_id_744cbb5b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileOverview_vue_vue_type_template_id_4e95f6ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileOverview.vue?vue&type=template&id=4e95f6ac& */ "./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue?vue&type=template&id=4e95f6ac&");
/* harmony import */ var _ProfileOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileOverview.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileOverview_vue_vue_type_template_id_4e95f6ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileOverview_vue_vue_type_template_id_4e95f6ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileOverview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue?vue&type=template&id=4e95f6ac&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue?vue&type=template&id=4e95f6ac& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOverview_vue_vue_type_template_id_4e95f6ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileOverview.vue?vue&type=template&id=4e95f6ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/ProfileOverview.vue?vue&type=template&id=4e95f6ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOverview_vue_vue_type_template_id_4e95f6ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOverview_vue_vue_type_template_id_4e95f6ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Widget14_vue_vue_type_template_id_b9a7c826___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget14.vue?vue&type=template&id=b9a7c826& */ "./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue?vue&type=template&id=b9a7c826&");
/* harmony import */ var _Widget14_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget14.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Widget14_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Widget14_vue_vue_type_template_id_b9a7c826___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Widget14_vue_vue_type_template_id_b9a7c826___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget14_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Widget14.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget14_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue?vue&type=template&id=b9a7c826&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue?vue&type=template&id=b9a7c826& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget14_vue_vue_type_template_id_b9a7c826___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Widget14.vue?vue&type=template&id=b9a7c826& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/Widget14.vue?vue&type=template&id=b9a7c826&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget14_vue_vue_type_template_id_b9a7c826___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget14_vue_vue_type_template_id_b9a7c826___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Widget2_vue_vue_type_template_id_70aabed8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget2.vue?vue&type=template&id=70aabed8& */ "./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue?vue&type=template&id=70aabed8&");
/* harmony import */ var _Widget2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget2.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Widget2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Widget2_vue_vue_type_template_id_70aabed8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Widget2_vue_vue_type_template_id_70aabed8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Widget2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue?vue&type=template&id=70aabed8&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue?vue&type=template&id=70aabed8& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget2_vue_vue_type_template_id_70aabed8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Widget2.vue?vue&type=template&id=70aabed8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/Widget2.vue?vue&type=template&id=70aabed8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget2_vue_vue_type_template_id_70aabed8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget2_vue_vue_type_template_id_70aabed8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Widget3_vue_vue_type_template_id_70b8d659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget3.vue?vue&type=template&id=70b8d659& */ "./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue?vue&type=template&id=70b8d659&");
/* harmony import */ var _Widget3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget3.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Widget3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Widget3_vue_vue_type_template_id_70b8d659___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Widget3_vue_vue_type_template_id_70b8d659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Widget3.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue?vue&type=template&id=70b8d659&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue?vue&type=template&id=70b8d659& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget3_vue_vue_type_template_id_70b8d659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Widget3.vue?vue&type=template&id=70b8d659& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-1/Widget3.vue?vue&type=template&id=70b8d659&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget3_vue_vue_type_template_id_70b8d659___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget3_vue_vue_type_template_id_70b8d659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);