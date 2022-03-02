(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/content/CodePreview.vue */ "./resources/js/src/view/content/CodePreview.vue");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/src/core/services/store/breadcrumbs.module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      code1: {
        html: "<b-container class=\"bv-example-row\">\n  <b-row>\n    <b-col>1 of 3</b-col>\n    <b-col>2 of 3</b-col>\n    <b-col>3 of 3</b-col>\n  </b-row>\n</b-container>"
      },
      code2: {
        html: "<b-container class=\"bv-example-row\">\n  <b-row>\n    <b-col>1 of 2</b-col>\n    <b-col>2 of 2</b-col>\n  </b-row>\n\n  <b-row>\n    <b-col>1 of 3</b-col>\n    <b-col>2 of 3</b-col>\n    <b-col>3 of 3</b-col>\n  </b-row>\n</b-container>"
      },
      code3: {
        html: "<b-container class=\"bv-example-row\">\n  <b-row class=\"text-center\">\n    <b-col>1 of 3</b-col>\n    <b-col cols=\"8\">2 of 3 (wider)</b-col>\n    <b-col>3 of 3</b-col>\n  </b-row>\n\n  <b-row class=\"text-center\">\n    <b-col>1 of 3</b-col>\n    <b-col cols=\"5\">2 of 3 (wider)</b-col>\n    <b-col>3 of 3</b-col>\n  </b-row>\n</b-container>"
      },
      code4: {
        html: "<b-container class=\"bv-example-row\">\n  <b-row class=\"justify-content-md-center\">\n    <b-col col lg=\"2\">1 of 3</b-col>\n    <b-col cols=\"12\" md=\"auto\">Variable width content</b-col>\n    <b-col col lg=\"2\">3 of 3</b-col>\n  </b-row>\n\n  <b-row>\n    <b-col>1 of 3</b-col>\n    <b-col cols=\"12\" md=\"auto\">Variable width content</b-col>\n    <b-col col lg=\"2\">3 of 3</b-col>\n  </b-row>\n</b-container>"
      },
      code5: {
        html: "<b-container class=\"bv-example-row\">\n  <b-row>\n    <b-col>col</b-col>\n    <b-col>col</b-col>\n    <b-col>col</b-col>\n    <b-col>col</b-col>\n  </b-row>\n\n  <b-row>\n    <b-col cols=\"8\">col-8</b-col>\n    <b-col cols=\"4\">col-4</b-col>\n  </b-row>\n</b-container>"
      },
      code6: {
        html: "<b-container class=\"bv-example-row\">\n  <b-row>\n    <b-col sm=\"8\">col-sm-8</b-col>\n    <b-col sm=\"4\">col-sm-4</b-col>\n  </b-row>\n\n  <b-row>\n    <b-col sm>col-sm</b-col>\n    <b-col sm>col-sm</b-col>\n    <b-col sm>col-sm</b-col>\n  </b-row>\n</b-container>"
      },
      code7: {
        html: "<b-container class=\"bv-example-row\">\n  <!-- Stack the columns on mobile by making one full-width and the other half-width -->\n  <b-row>\n    <b-col cols=\"12\" md=\"8\">cols=\"12\" md=\"8\"</b-col>\n    <b-col cols=\"6\" md=\"4\">cols=\"6\" md=\"4\"</b-col>\n  </b-row>\n\n  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->\n  <b-row>\n    <b-col cols=\"6\" md=\"4\">cols=\"6\" md=\"4\"</b-col>\n    <b-col cols=\"6\" md=\"4\">cols=\"6\" md=\"4\"</b-col>\n    <b-col cols=\"6\" md=\"4\">cols=\"6\" md=\"4\"</b-col>\n  </b-row>\n\n  <!-- Columns are always 50% wide, on mobile and desktop -->\n  <b-row>\n    <b-col cols=\"6\">cols=\"6\"</b-col>\n    <b-col cols=\"6\">cols=\"6\"</b-col>\n  </b-row>\n</b-container>"
      }
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__["SET_BREADCRUMB"], [{
      title: "Vue Bootstrap",
      route: "alert"
    }, {
      title: "Layout and Grid System"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=style&index=0&id=489e6a83&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=style&index=0&id=489e6a83&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bv-example-row .row > .col[data-v-489e6a83]:not(.header),\n.bv-example-row .row > [class^=col-][data-v-489e6a83] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  background-color: rgba(86, 61, 124, 0.15);\n  border: 1px solid rgba(86, 61, 124, 0.2);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=style&index=0&id=489e6a83&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=style&index=0&id=489e6a83&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutGridSystem.vue?vue&type=style&index=0&id=489e6a83&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=style&index=0&id=489e6a83&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=template&id=489e6a83&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=template&id=489e6a83&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
        "b-alert",
        {
          staticClass:
            "alert alert-custom alert-white alert-shadow fade show gutter-b",
          attrs: { show: "", variant: "light" },
        },
        [
          _c("div", { staticClass: "alert-icon" }, [
            _c(
              "span",
              { staticClass: "svg-icon svg-icon-lg" },
              [
                _c("inline-svg", {
                  attrs: { src: "media/svg/icons/Tools/Compass.svg" },
                }),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "alert-text" }, [
            _c("b", [_vm._v("Layout and Grid System")]),
            _vm._v(
              " Use the powerful mobile-first flexbox grid\n      (via the <b-container>, <b-row>, <b-form-row> and\n      <b-col> components) to build layouts of all shapes and sizes\n      thanks to a twelve column system, five default responsive tiers, CSS\n      Sass variables and mixins, and dozens of predefined classes.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/layout",
                  target: "_blank",
                },
              },
              [_vm._v("\n        See documentation.\n      ")]
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "How it works" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function () {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Bootstrap's grid system uses a series of containers, rows, and\n            columns to layout and align content. It's built with\n            "
                        ),
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",
                              target: "_blank",
                            },
                          },
                          [_vm._v("flexbox")]
                        ),
                        _vm._v(
                          "\n            and is fully responsive. Below is an example and an in-depth look\n            at how the grid comes together.\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-container",
                        { staticClass: "bv-example-row" },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", [_vm._v("1 of 3")]),
                              _vm._v(" "),
                              _c("b-col", [_vm._v("2 of 3")]),
                              _vm._v(" "),
                              _c("b-col", [_vm._v("3 of 3")]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  },
                  proxy: true,
                },
                {
                  key: "html",
                  fn: function () {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code1.html) + "\n        "
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Equal-width columns" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function () {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            For example, here are two grid layouts that apply to every device\n            and viewport, from "
                        ),
                        _c("code", [_vm._v("xs")]),
                        _vm._v(" to "),
                        _c("code", [_vm._v("xl")]),
                        _vm._v(
                          ". Add any\n            number of unit-less classes for each breakpoint you need and every\n            column will be the same width.\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-container",
                        { staticClass: "bv-example-row" },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", [_vm._v("1 of 2")]),
                              _vm._v(" "),
                              _c("b-col", [_vm._v("2 of 2")]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            [
                              _c("b-col", [_vm._v("1 of 3")]),
                              _vm._v(" "),
                              _c("b-col", [_vm._v("2 of 3")]),
                              _vm._v(" "),
                              _c("b-col", [_vm._v("3 of 3")]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  },
                  proxy: true,
                },
                {
                  key: "html",
                  fn: function () {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code2.html) + "\n        "
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Setting one column width" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function () {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Auto-layout for flexbox grid columns also means you can set the\n            width of one column and have the sibling columns automatically\n            resize around it. You may use predefined grid classes (as shown\n            below), grid mixins, or inline widths. Note that the other columns\n            will resize no matter the width of the center column.\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-container",
                        { staticClass: "bv-example-row" },
                        [
                          _c(
                            "b-row",
                            { staticClass: "text-center" },
                            [
                              _c("b-col", [_vm._v("1 of 3")]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { cols: "8" } }, [
                                _vm._v("2 of 3 (wider)"),
                              ]),
                              _vm._v(" "),
                              _c("b-col", [_vm._v("3 of 3")]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "text-center" },
                            [
                              _c("b-col", [_vm._v("1 of 3")]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { cols: "5" } }, [
                                _vm._v("2 of 3 (wider)"),
                              ]),
                              _vm._v(" "),
                              _c("b-col", [_vm._v("3 of 3")]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  },
                  proxy: true,
                },
                {
                  key: "html",
                  fn: function () {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code3.html) + "\n        "
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Variable width content" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function () {
                    return [
                      _c("p", [
                        _vm._v("\n            Use "),
                        _c("code", [_vm._v('{breakpoint}="auto"')]),
                        _vm._v(
                          " props to size columns based\n            on the natural width of their content.\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-container",
                        { staticClass: "bv-example-row" },
                        [
                          _c(
                            "b-row",
                            { staticClass: "justify-content-md-center" },
                            [
                              _c("b-col", { attrs: { col: "", lg: "2" } }, [
                                _vm._v("1 of 3"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                { attrs: { cols: "12", md: "auto" } },
                                [_vm._v("Variable width content")]
                              ),
                              _vm._v(" "),
                              _c("b-col", { attrs: { col: "", lg: "2" } }, [
                                _vm._v("3 of 3"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            [
                              _c("b-col", [_vm._v("1 of 3")]),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                { attrs: { cols: "12", md: "auto" } },
                                [_vm._v("Variable width content")]
                              ),
                              _vm._v(" "),
                              _c("b-col", { attrs: { col: "", lg: "2" } }, [
                                _vm._v("3 of 3"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  },
                  proxy: true,
                },
                {
                  key: "html",
                  fn: function () {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code4.html) + "\n        "
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("KTCodePreview", {
              attrs: { title: "All breakpoints" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function () {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            For grids that are the same from the smallest of devices to the\n            largest, use the "
                        ),
                        _c("code", [_vm._v("col")]),
                        _vm._v(" and "),
                        _c("code", [_vm._v('cols="*"')]),
                        _vm._v(" props.\n            Specify a number of "),
                        _c("code", [_vm._v("cols")]),
                        _vm._v(
                          " when you need a particularly\n            sized column; otherwise, feel free to stick to\n            "
                        ),
                        _c("code", [_vm._v("col")]),
                        _vm._v(
                          " (which is applied automatically if no\n            "
                        ),
                        _c("code", [_vm._v("cols")]),
                        _vm._v(" are specified).\n          "),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-container",
                        { staticClass: "bv-example-row" },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", [_vm._v("col")]),
                              _vm._v(" "),
                              _c("b-col", [_vm._v("col")]),
                              _vm._v(" "),
                              _c("b-col", [_vm._v("col")]),
                              _vm._v(" "),
                              _c("b-col", [_vm._v("col")]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { cols: "8" } }, [
                                _vm._v("col-8"),
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { cols: "4" } }, [
                                _vm._v("col-4"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  },
                  proxy: true,
                },
                {
                  key: "html",
                  fn: function () {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code5.html) + "\n        "
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Stacked to horizontal" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function () {
                    return [
                      _c("p", [
                        _vm._v("\n            Using a single set of "),
                        _c("code", [_vm._v('sm="*"')]),
                        _vm._v(" or\n            "),
                        _c("code", [_vm._v("sm")]),
                        _vm._v(
                          " (boolean for equal width @sm) props, you can\n            create a basic grid system that starts out stacked on extra small\n            devices before becoming horizontal on desktop (medium) devices\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-container",
                        { staticClass: "bv-example-row" },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { sm: "8" } }, [
                                _vm._v("col-sm-8"),
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { sm: "4" } }, [
                                _vm._v("col-sm-4"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { sm: "" } }, [
                                _vm._v("col-sm"),
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { sm: "" } }, [
                                _vm._v("col-sm"),
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { sm: "" } }, [
                                _vm._v("col-sm"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  },
                  proxy: true,
                },
                {
                  key: "html",
                  fn: function () {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code6.html) + "\n        "
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Mix and match" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function () {
                    return [
                      _c("p", [
                        _vm._v(
                          "\n            Don't want your columns to simply stack in some grid tiers? Use a\n            combination of different props for each tier as needed. See the\n            example below for a better idea of how it all works.\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-container",
                        { staticClass: "bv-example-row" },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { cols: "12", md: "8" } }, [
                                _vm._v('cols="12" md="8"'),
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { cols: "6", md: "4" } }, [
                                _vm._v('cols="6" md="4"'),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { cols: "6", md: "4" } }, [
                                _vm._v('cols="6" md="4"'),
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { cols: "6", md: "4" } }, [
                                _vm._v('cols="6" md="4"'),
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { cols: "6", md: "4" } }, [
                                _vm._v('cols="6" md="4"'),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { cols: "6" } }, [
                                _vm._v('cols="6"'),
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { cols: "6" } }, [
                                _vm._v('cols="6"'),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  },
                  proxy: true,
                },
                {
                  key: "html",
                  fn: function () {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code7.html) + "\n        "
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            }),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutGridSystem_vue_vue_type_template_id_489e6a83_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutGridSystem.vue?vue&type=template&id=489e6a83&scoped=true& */ "./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=template&id=489e6a83&scoped=true&");
/* harmony import */ var _LayoutGridSystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutGridSystem.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LayoutGridSystem_vue_vue_type_style_index_0_id_489e6a83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayoutGridSystem.vue?vue&type=style&index=0&id=489e6a83&lang=scss&scoped=true& */ "./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=style&index=0&id=489e6a83&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LayoutGridSystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutGridSystem_vue_vue_type_template_id_489e6a83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutGridSystem_vue_vue_type_template_id_489e6a83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "489e6a83",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridSystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutGridSystem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridSystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=style&index=0&id=489e6a83&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=style&index=0&id=489e6a83&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridSystem_vue_vue_type_style_index_0_id_489e6a83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutGridSystem.vue?vue&type=style&index=0&id=489e6a83&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=style&index=0&id=489e6a83&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridSystem_vue_vue_type_style_index_0_id_489e6a83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridSystem_vue_vue_type_style_index_0_id_489e6a83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridSystem_vue_vue_type_style_index_0_id_489e6a83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridSystem_vue_vue_type_style_index_0_id_489e6a83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=template&id=489e6a83&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=template&id=489e6a83&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridSystem_vue_vue_type_template_id_489e6a83_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutGridSystem.vue?vue&type=template&id=489e6a83&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/LayoutGridSystem.vue?vue&type=template&id=489e6a83&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridSystem_vue_vue_type_template_id_489e6a83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridSystem_vue_vue_type_template_id_489e6a83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);