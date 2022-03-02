(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/Profile-2.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/Profile-2.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/src/core/services/store/breadcrumbs.module.js");
/* harmony import */ var _view_pages_profile_profile_comp_2_Widget1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/view/pages/profile/profile-comp-2/Widget1 */ "./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue");
/* harmony import */ var _view_pages_profile_profile_comp_2_Widget2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/view/pages/profile/profile-comp-2/Widget2 */ "./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue");
/* harmony import */ var _view_pages_profile_profile_comp_2_Widget14__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/view/pages/profile/profile-comp-2/Widget14 */ "./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue");
/* harmony import */ var _view_pages_profile_profile_comp_PersonalInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/view/pages/profile/profile-comp/PersonalInformation */ "./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue");
/* harmony import */ var _view_pages_profile_profile_comp_AccountInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/view/pages/profile/profile-comp/AccountInformation */ "./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue");
/* harmony import */ var _view_pages_profile_profile_comp_ChangePassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/view/pages/profile/profile-comp/ChangePassword */ "./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue");
/* harmony import */ var _view_pages_profile_profile_comp_EmailSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/view/pages/profile/profile-comp/EmailSettings */ "./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue");
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









/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Profile-2",
  data: function data() {
    return {
      tabIndex: 0
    };
  },
  components: {
    Widget1: _view_pages_profile_profile_comp_2_Widget1__WEBPACK_IMPORTED_MODULE_2__["default"],
    Widget2: _view_pages_profile_profile_comp_2_Widget2__WEBPACK_IMPORTED_MODULE_3__["default"],
    Widget14: _view_pages_profile_profile_comp_2_Widget14__WEBPACK_IMPORTED_MODULE_4__["default"],
    KTPersonalInformation: _view_pages_profile_profile_comp_PersonalInformation__WEBPACK_IMPORTED_MODULE_5__["default"],
    KTAccountInformation: _view_pages_profile_profile_comp_AccountInformation__WEBPACK_IMPORTED_MODULE_6__["default"],
    KTChangePassword: _view_pages_profile_profile_comp_ChangePassword__WEBPACK_IMPORTED_MODULE_7__["default"],
    KTEmailSettings: _view_pages_profile_profile_comp_EmailSettings__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__["SET_BREADCRUMB"], [{
      title: "Profile 2"
    }]);
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab: function setActiveTab(event) {
      var target = event.target;
      var tab = target.closest('[role="tablist"]');
      var links = tab.querySelectorAll('[data-toggle="tab"]'); // remove active tab links

      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      } // set clicked tab index to bootstrap tab


      this.tabIndex = parseInt(target.getAttribute("data-tab")); // set current active tab

      target.classList.add("active");
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUserPhoto"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "widget-10",
  components: {
    Dropdown2: _view_content_dropdown_Dropdown2_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      chartOptions: {},
      series: [{
        name: "Net Profit",
        data: [35, 65, 75, 55, 45, 60, 55]
      }, {
        name: "Revenue",
        data: [40, 70, 80, 60, 50, 65, 60]
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["layoutConfig"])),
  mounted: function mounted() {
    // reference; kt_mixed_widget_1_chart
    this.chartOptions = {
      chart: {
        type: "bar",
        height: 200,
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ["30%"],
          endingShape: "rounded"
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: this.layoutConfig("colors.gray.gray-500"),
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          }
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: this.layoutConfig("colors.gray.gray-500"),
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          }
        }
      },
      fill: {
        opacity: 1
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0
          }
        },
        hover: {
          filter: {
            type: "none",
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: this.layoutConfig("font-family")
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: ["#7dbaff", "#ffffff"],
      grid: {
        borderColor: this.layoutConfig("colors.gray.gray-200"),
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: false
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue?vue&type=script&lang=js& ***!
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "widget-2",
  data: function data() {
    return {
      checked: false,
      list: [{
        order_id: "56037-XDER",
        country: "Brasil",
        country_desc: "Code: BR",
        date: "05/28/2020",
        date_desc: "Paid",
        company: "Intertico",
        company_desc: "Web, UI/UX Design",
        "class": "primary",
        status: "Approved"
      }, {
        order_id: "05822-FXSP",
        country: "Belarus",
        country_desc: "Code: BY",
        date: "02/04/2020",
        date_desc: "Rejected",
        company: "Agoda",
        company_desc: "Houses & Hotels",
        "class": "warning",
        status: "In Progress"
      }, {
        order_id: "00347-BCLQ",
        country: "Phillipines",
        country_desc: "Code: PH",
        date: "23/12/2020",
        date_desc: "Paid",
        company: "RoadGee",
        company_desc: "Transportation",
        "class": "success",
        status: "Success"
      }, {
        order_id: "4472-QREX",
        country: "Argentina",
        country_desc: "Code: AR",
        date: "17/09/2021",
        date_desc: "Pending",
        company: "The Hill",
        company_desc: "Insurance",
        "class": "danger",
        status: "Danger"
      }]
    };
  },
  components: {},
  methods: {
    setCheck: function setCheck(check) {
      if (check) {
        this.checked = check;
      } else {
        this.checked = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/Profile-2.vue?vue&type=template&id=745ad2dc&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/Profile-2.vue?vue&type=template&id=745ad2dc& ***!
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
        _c("div", { staticClass: "card card-custom" }, [
          _c("div", { staticClass: "card-body pt-15" }, [
            _c("div", { staticClass: "text-center mb-10" }, [
              _c(
                "div",
                { staticClass: "symbol symbol-60 symbol-circle symbol-xl-90" },
                [
                  _c("div", {
                    staticClass: "symbol-label",
                    style: {
                      backgroundImage: "url(" + _vm.currentUserPhoto + ")",
                    },
                  }),
                  _vm._v(" "),
                  _c("i", {
                    staticClass: "symbol-badge symbol-badge-bottom bg-success",
                  }),
                ]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "font-weight-bold my-2" }, [
                _vm._v("\n            James Jones\n          "),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-muted mb-2" }, [
                _vm._v("\n            Application Developer\n          "),
              ]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "label label-light-warning label-inline font-weight-bold label-lg",
                },
                [_vm._v("Active")]
              ),
            ]),
            _vm._v(" "),
            _vm._m(0),
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
                      staticClass:
                        "btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block active",
                      staticStyle: { cursor: "pointer" },
                      attrs: {
                        "data-tab": "0",
                        "data-toggle": "tab",
                        role: "tab",
                      },
                      on: { click: _vm.setActiveTab },
                    },
                    [_vm._v("\n              Profile Overview\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block",
                      staticStyle: { cursor: "pointer" },
                      attrs: {
                        "data-tab": "1",
                        "data-toggle": "tab",
                        role: "tab",
                      },
                      on: { click: _vm.setActiveTab },
                    },
                    [_vm._v("\n              Personal info\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block",
                      staticStyle: { cursor: "pointer" },
                      attrs: {
                        "data-tab": "2",
                        "data-toggle": "tab",
                        role: "tab",
                      },
                      on: { click: _vm.setActiveTab },
                    },
                    [_vm._v("\n              Account Info\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block",
                      staticStyle: { cursor: "pointer" },
                      attrs: {
                        "data-tab": "3",
                        "data-toggle": "tab",
                        role: "tab",
                      },
                      on: { click: _vm.setActiveTab },
                    },
                    [_vm._v("\n              Change Password\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block",
                      staticStyle: { cursor: "pointer" },
                      attrs: {
                        "data-tab": "4",
                        "data-toggle": "tab",
                        role: "tab",
                      },
                      on: { click: _vm.setActiveTab },
                    },
                    [_vm._v("\n              Email Settings\n            ")]
                  ),
                  _vm._v(" "),
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
                      staticClass:
                        "btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block",
                      attrs: { href: "#" },
                    },
                    [_vm._v("\n              Saved Credit Cards\n            ")]
                  ),
                  _vm._v(" "),
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
                      staticClass:
                        "btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block",
                      attrs: { href: "#" },
                    },
                    [_vm._v("\n              Tax information\n            ")]
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
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-6" }, [_c("Widget14")], 1),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [_c("Widget1")], 1),
                ]),
                _vm._v(" "),
                _c("Widget2"),
              ],
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
    return _c("div", { staticClass: "mb-10 text-center" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-icon btn-circle btn-light-facebook mr-2",
          attrs: { href: "#" },
        },
        [_c("i", { staticClass: "socicon-facebook" })]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-icon btn-circle btn-light-twitter mr-2",
          attrs: { href: "#" },
        },
        [_c("i", { staticClass: "socicon-twitter" })]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-icon btn-circle btn-light-google",
          attrs: { href: "#" },
        },
        [_c("i", { staticClass: "socicon-google" })]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue?vue&type=template&id=5f1fadd8&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue?vue&type=template&id=5f1fadd8& ***!
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
        "card card-custom bg-radial-gradient-primary gutter-b card-stretch",
    },
    [
      _c("div", { staticClass: "card-header border-0 py-5" }, [
        _c("h3", { staticClass: "card-title font-weight-bolder text-white" }, [
          _vm._v("Sales Progress"),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-toolbar" },
          [
            _c("Dropdown2", [
              _c("i", { staticClass: "ki ki-bold-more-hor text-white" }),
            ]),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body d-flex flex-column p-0" },
        [
          _c("apexchart", {
            staticClass: "card-rounded-bottom",
            attrs: {
              options: _vm.chartOptions,
              series: _vm.series,
              type: "bar",
            },
          }),
          _vm._v(" "),
          _vm._m(0),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-spacer bg-white card-rounded flex-grow-1" },
      [
        _c("div", { staticClass: "row m-0" }, [
          _c("div", { staticClass: "col px-8 py-6 mr-8" }, [
            _c(
              "div",
              { staticClass: "font-size-sm text-muted font-weight-bold" },
              [_vm._v("\n            Average Sale\n          ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "font-size-h4 font-weight-bolder" }, [
              _vm._v("$650"),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col px-8 py-6" }, [
            _c(
              "div",
              { staticClass: "font-size-sm text-muted font-weight-bold" },
              [_vm._v("\n            Commission\n          ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "font-size-h4 font-weight-bolder" }, [
              _vm._v("$233,600"),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row m-0" }, [
          _c("div", { staticClass: "col px-8 py-6 mr-8" }, [
            _c(
              "div",
              { staticClass: "font-size-sm text-muted font-weight-bold" },
              [_vm._v("\n            Annual Taxes\n          ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "font-size-h4 font-weight-bolder" }, [
              _vm._v("$29,004"),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col px-8 py-6" }, [
            _c(
              "div",
              { staticClass: "font-size-sm text-muted font-weight-bold" },
              [_vm._v("\n            Annual Income\n          ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "font-size-h4 font-weight-bolder" }, [
              _vm._v("$1,480,00"),
            ]),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue?vue&type=template&id=f5ec34e8&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue?vue&type=template&id=f5ec34e8& ***!
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
      _c(
        "div",
        { staticClass: "card-toolbar" },
        [_c("Dropdown2", [_c("i", { staticClass: "ki ki-bold-more-hor" })])],
        1
      ),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue?vue&type=template&id=5f2dc559&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue?vue&type=template&id=5f2dc559& ***!
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
  return _c("div", { staticClass: "card card-custom gutter-b" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body py-0" }, [
      _c("div", { staticClass: "table-responsive" }, [
        _c(
          "table",
          {
            staticClass: "table table-head-custom table-vertical-center",
            attrs: { id: "kt_advance_table_widget_4" },
          },
          [
            _c("thead", [
              _c("tr", { staticClass: "text-left" }, [
                _c(
                  "th",
                  { staticClass: "pl-0", staticStyle: { width: "30px" } },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "checkbox checkbox-lg checkbox-single mr-2",
                      },
                      [
                        _c("input", {
                          attrs: { type: "checkbox" },
                          on: {
                            input: function ($event) {
                              return _vm.setCheck($event.target.checked)
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("span"),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass: "pl-0",
                    staticStyle: { "min-width": "120px" },
                  },
                  [_vm._v("Order id")]
                ),
                _vm._v(" "),
                _c("th", { staticStyle: { "min-width": "110px" } }, [
                  _vm._v("Country"),
                ]),
                _vm._v(" "),
                _c("th", { staticStyle: { "min-width": "110px" } }, [
                  _c("span", { staticClass: "text-primary" }, [_vm._v("Date")]),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "svg-icon svg-icon-sm svg-icon-primary" },
                    [
                      _c("inline-svg", {
                        attrs: { src: "media/svg/icons/Navigation/Down-2.svg" },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("th", { staticStyle: { "min-width": "120px" } }, [
                  _vm._v("Company"),
                ]),
                _vm._v(" "),
                _c("th", { staticStyle: { "min-width": "120px" } }, [
                  _vm._v("Status"),
                ]),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass: "pr-0 text-right",
                    staticStyle: { "min-width": "160px" },
                  },
                  [_vm._v("Action")]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.list, function (item, i) {
                  return [
                    _c("tr", { key: i }, [
                      _c("td", { staticClass: "pl-0 py-6" }, [
                        _c(
                          "label",
                          {
                            staticClass: "checkbox checkbox-lg checkbox-single",
                          },
                          [
                            _c("input", {
                              attrs: { type: "checkbox" },
                              domProps: { value: i, checked: _vm.checked },
                            }),
                            _vm._v(" "),
                            _c("span"),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "pl-0" }, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "text-dark-75 font-weight-bolder text-hover-primary font-size-lg",
                            attrs: { href: "#" },
                          },
                          [_vm._v(_vm._s(item.order_id))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-dark-75 font-weight-bolder d-block font-size-lg",
                          },
                          [_vm._v(_vm._s(item.country))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "text-muted font-weight-bold" },
                          [_vm._v(_vm._s(item.country_desc))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-primary font-weight-bolder d-block font-size-lg",
                          },
                          [_vm._v(_vm._s(item.date))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "text-muted font-weight-bold" },
                          [_vm._v(_vm._s(item.date_desc))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-dark-75 font-weight-bolder d-block font-size-lg",
                          },
                          [_vm._v(_vm._s(item.company))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "text-muted font-weight-bold" },
                          [_vm._v(_vm._s(item.company_desc))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass: "label label-lg label-inline",
                            class: "label-light-" + item.class,
                          },
                          [_vm._v(_vm._s(item.status))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "pr-0 text-right" }, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "btn btn-icon btn-light btn-hover-primary btn-sm",
                            attrs: { href: "#" },
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-md svg-icon-primary",
                              },
                              [
                                _c("inline-svg", {
                                  attrs: {
                                    src: "media/svg/icons/General/Settings-1.svg",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "btn btn-icon btn-light btn-hover-primary btn-sm mx-3",
                            attrs: { href: "#" },
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-md svg-icon-primary",
                              },
                              [
                                _c("inline-svg", {
                                  attrs: {
                                    src: "media/svg/icons/Communication/Write.svg",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "btn btn-icon btn-light btn-hover-primary btn-sm",
                            attrs: { href: "#" },
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "svg-icon svg-icon-md svg-icon-primary",
                              },
                              [
                                _c("inline-svg", {
                                  attrs: {
                                    src: "media/svg/icons/General/Trash.svg",
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
    return _c("div", { staticClass: "card-header border-0 py-5" }, [
      _c("h3", { staticClass: "card-title align-items-start flex-column" }, [
        _c("span", { staticClass: "card-label font-weight-bolder text-dark" }, [
          _vm._v("New Arrivals"),
        ]),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "text-muted mt-3 font-weight-bold font-size-sm" },
          [_vm._v("More than 400+ new members")]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-toolbar" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-info font-weight-bolder font-size-sm",
            attrs: { href: "#" },
          },
          [_vm._v("New Report")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/profile/Profile-2.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/view/pages/profile/Profile-2.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_2_vue_vue_type_template_id_745ad2dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile-2.vue?vue&type=template&id=745ad2dc& */ "./resources/js/src/view/pages/profile/Profile-2.vue?vue&type=template&id=745ad2dc&");
/* harmony import */ var _Profile_2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile-2.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profile/Profile-2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_2_vue_vue_type_template_id_745ad2dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_2_vue_vue_type_template_id_745ad2dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profile/Profile-2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profile/Profile-2.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/Profile-2.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile-2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/Profile-2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profile/Profile-2.vue?vue&type=template&id=745ad2dc&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/Profile-2.vue?vue&type=template&id=745ad2dc& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_2_vue_vue_type_template_id_745ad2dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile-2.vue?vue&type=template&id=745ad2dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/Profile-2.vue?vue&type=template&id=745ad2dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_2_vue_vue_type_template_id_745ad2dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_2_vue_vue_type_template_id_745ad2dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Widget1_vue_vue_type_template_id_5f1fadd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget1.vue?vue&type=template&id=5f1fadd8& */ "./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue?vue&type=template&id=5f1fadd8&");
/* harmony import */ var _Widget1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget1.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Widget1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Widget1_vue_vue_type_template_id_5f1fadd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Widget1_vue_vue_type_template_id_5f1fadd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Widget1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue?vue&type=template&id=5f1fadd8&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue?vue&type=template&id=5f1fadd8& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget1_vue_vue_type_template_id_5f1fadd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Widget1.vue?vue&type=template&id=5f1fadd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-2/Widget1.vue?vue&type=template&id=5f1fadd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget1_vue_vue_type_template_id_5f1fadd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget1_vue_vue_type_template_id_5f1fadd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Widget14_vue_vue_type_template_id_f5ec34e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget14.vue?vue&type=template&id=f5ec34e8& */ "./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue?vue&type=template&id=f5ec34e8&");
/* harmony import */ var _Widget14_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget14.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Widget14_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Widget14_vue_vue_type_template_id_f5ec34e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Widget14_vue_vue_type_template_id_f5ec34e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget14_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Widget14.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget14_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue?vue&type=template&id=f5ec34e8&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue?vue&type=template&id=f5ec34e8& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget14_vue_vue_type_template_id_f5ec34e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Widget14.vue?vue&type=template&id=f5ec34e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-2/Widget14.vue?vue&type=template&id=f5ec34e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget14_vue_vue_type_template_id_f5ec34e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget14_vue_vue_type_template_id_f5ec34e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Widget2_vue_vue_type_template_id_5f2dc559___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget2.vue?vue&type=template&id=5f2dc559& */ "./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue?vue&type=template&id=5f2dc559&");
/* harmony import */ var _Widget2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget2.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Widget2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Widget2_vue_vue_type_template_id_5f2dc559___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Widget2_vue_vue_type_template_id_5f2dc559___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Widget2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue?vue&type=template&id=5f2dc559&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue?vue&type=template&id=5f2dc559& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget2_vue_vue_type_template_id_5f2dc559___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Widget2.vue?vue&type=template&id=5f2dc559& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp-2/Widget2.vue?vue&type=template&id=5f2dc559&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget2_vue_vue_type_template_id_5f2dc559___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget2_vue_vue_type_template_id_5f2dc559___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);