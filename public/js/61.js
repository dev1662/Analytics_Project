(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Pagination.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Pagination.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code1: {
        html: "<div class=\"overflow-auto\">\n    <b-pagination\n      v-model=\"currentPage\"\n      :total-rows=\"rows\"\n      :per-page=\"perPage\"\n      aria-controls=\"my-table\"\n    ></b-pagination>\n\n    <p class=\"mt-3\">Current Page: {{ currentPage }}</p>\n\n    <b-table\n      id=\"my-table\"\n      :items=\"items\"\n      :per-page=\"perPage\"\n      :current-page=\"currentPage\"\n      small\n    ></b-table>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        perPage: 3,\n        currentPage: 1,\n        items: [\n          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },\n          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },\n          { id: 3, first_name: 'Barney', last_name: 'Rubble' },\n          { id: 4, first_name: 'Betty', last_name: 'Rubble' },\n          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },\n          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },\n          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },\n          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },\n          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }\n        ]\n      }\n    },\n    computed: {\n      rows() {\n        return this.items.length\n      }\n    }\n  }",
        perPage: 3,
        currentPage: 1,
        items: [{
          id: 1,
          first_name: "Fred",
          last_name: "Flintstone"
        }, {
          id: 2,
          first_name: "Wilma",
          last_name: "Flintstone"
        }, {
          id: 3,
          first_name: "Barney",
          last_name: "Rubble"
        }, {
          id: 4,
          first_name: "Betty",
          last_name: "Rubble"
        }, {
          id: 5,
          first_name: "Pebbles",
          last_name: "Flintstone"
        }, {
          id: 6,
          first_name: "Bamm Bamm",
          last_name: "Rubble"
        }, {
          id: 7,
          first_name: "The Great",
          last_name: "Gazzoo"
        }, {
          id: 8,
          first_name: "Rockhead",
          last_name: "Slate"
        }, {
          id: 9,
          first_name: "Pearl",
          last_name: "Slaghoople"
        }]
      },
      code2: {
        html: "<div class=\"overflow-auto\">\n    <!-- Use text in props -->\n    <b-pagination\n      v-model=\"currentPage\"\n      :total-rows=\"rows\"\n      :per-page=\"perPage\"\n      first-text=\"First\"\n      prev-text=\"Prev\"\n      next-text=\"Next\"\n      last-text=\"Last\"\n    ></b-pagination>\n\n    <!-- Use emojis in props -->\n    <b-pagination\n      v-model=\"currentPage\"\n      :total-rows=\"rows\"\n      :per-page=\"perPage\"\n      first-text=\"\u23EE\"\n      prev-text=\"\u23EA\"\n      next-text=\"\u23E9\"\n      last-text=\"\u23ED\"\n      class=\"mt-4\"\n    ></b-pagination>\n\n    <!-- Use HTML and sub-components in slots -->\n    <b-pagination\n      v-model=\"currentPage\"\n      :total-rows=\"rows\"\n      :per-page=\"perPage\"\n      class=\"mt-4\"\n    >\n      <template v-slot:first-text><span class=\"text-success\">First</span></template>\n      <template v-slot:prev-text><span class=\"text-danger\">Prev</span></template>\n      <template v-slot:next-text><span class=\"text-warning\">Next</span></template>\n      <template v-slot:last-text><span class=\"text-info\">Last</span></template>\n      <template v-slot:ellipsis-text>\n        <b-spinner small type=\"grow\"></b-spinner>\n        <b-spinner small type=\"grow\"></b-spinner>\n        <b-spinner small type=\"grow\"></b-spinner>\n      </template>\n      <template v-slot:page=\"{ page, active }\">\n        <b v-if=\"active\">{{ page }}</b>\n        <i v-else>{{ page }}</i>\n      </template>\n    </b-pagination>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        rows: 100,\n        perPage: 10,\n        currentPage: 1\n      }\n    }\n  }",
        rows1: 100,
        perPage1: 10,
        currentPage1: 1,
        rows2: 100,
        perPage2: 10,
        currentPage2: 1,
        rows3: 100,
        perPage3: 10,
        currentPage3: 1
      },
      code3: {
        html: "<div class=\"overflow-auto\">\n    <div>\n      <h6>Small</h6>\n      <b-pagination v-model=\"currentPage\" :total-rows=\"rows\" size=\"sm\"></b-pagination>\n    </div>\n\n    <div class=\"mt-3\">\n      <h6>Default</h6>\n      <b-pagination v-model=\"currentPage\" :total-rows=\"rows\"></b-pagination>\n    </div>\n\n    <div class=\"mt-3\">\n      <h6>Large</h6>\n      <b-pagination v-model=\"currentPage\" :total-rows=\"rows\" size=\"lg\"></b-pagination>\n    </div>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        rows: 100,\n        currentPage: 1\n      }\n    }\n  }",
        rows1: 100,
        currentPage1: 1,
        rows2: 100,
        currentPage2: 1,
        rows3: 100,
        currentPage3: 1
      },
      code4: {
        html: "<div class=\"overflow-auto\">\n    <div>\n      <h6>Left alignment (default)</h6>\n      <b-pagination v-model=\"currentPage\" :total-rows=\"rows\"></b-pagination>\n    </div>\n\n    <div class=\"mt-3\">\n      <h6 class=\"text-center\">Center alignment</h6>\n      <b-pagination v-model=\"currentPage\" :total-rows=\"rows\" align=\"center\"></b-pagination>\n    </div>\n\n    <div class=\"mt-3\">\n      <h6 class=\"text-right\">Right (end) alignment</h6>\n      <b-pagination v-model=\"currentPage\" :total-rows=\"rows\" align=\"right\"></b-pagination>\n    </div>\n\n    <div class=\"mt-3\">\n      <h6 class=\"text-center\">Fill alignment</h6>\n      <b-pagination v-model=\"currentPage\" :total-rows=\"rows\" align=\"fill\"></b-pagination>\n    </div>\n  </div>",
        js: "export default {\n    data() {\n      return {\n        rows: 100,\n        currentPage: 3\n      }\n    }\n  }",
        rows1: 100,
        currentPage1: 3,
        rows2: 100,
        currentPage2: 3,
        rows3: 100,
        currentPage3: 3,
        rows4: 100,
        currentPage4: 3
      },
      code5: {
        html: "",
        js: ""
      }
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    rows: function rows() {
      return this.code1.items.length;
    }
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__["SET_BREADCRUMB"], [{
      title: "Vue Bootstrap",
      route: "alert"
    }, {
      title: "Pagination"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Pagination.vue?vue&type=template&id=2a509dbe&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/vue-bootstrap/Pagination.vue?vue&type=template&id=2a509dbe& ***!
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
            _c("b", [_vm._v("Pagination")]),
            _vm._v(
              " The component &lt;b-navbar&gt; is a wrapper\n      that positions branding, navigation, and other elements into a concise\n      header. It's easily extensible and thanks to the\n      &lt;b-collapse&gt; component, it can easily integrate responsive\n      behaviors.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://bootstrap-vue.js.org/docs/components/pagination",
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
          { staticClass: "col-md-12" },
          [
            _c("KTCodePreview", {
              attrs: { title: "Pagination" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function () {
                    return [
                      _c("p", [
                        _c("code", [_vm._v("<b-pagination>")]),
                        _vm._v(
                          " is a custom input component that\n            provides a current page number input control. The value should be\n            bound via "
                        ),
                        _c("code", [_vm._v("v-model")]),
                        _vm._v(
                          " in your app. Page numbers are\n            indexed from 1. The number of pages is computed from the provided\n            prop values for "
                        ),
                        _c("code", [_vm._v("total-rows")]),
                        _vm._v(" and "),
                        _c("code", [_vm._v("per-page")]),
                        _vm._v(".\n          "),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "overflow-auto" },
                        [
                          _c("b-pagination", {
                            attrs: {
                              "total-rows": _vm.rows,
                              "per-page": _vm.code1.perPage,
                              "aria-controls": "my-table",
                            },
                            model: {
                              value: _vm.code1.currentPage,
                              callback: function ($$v) {
                                _vm.$set(_vm.code1, "currentPage", $$v)
                              },
                              expression: "code1.currentPage",
                            },
                          }),
                          _vm._v(" "),
                          _c("p", { staticClass: "mt-3" }, [
                            _vm._v(
                              "Current Page: " + _vm._s(_vm.code1.currentPage)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("b-table", {
                            attrs: {
                              id: "my-table",
                              items: _vm.code1.items,
                              "per-page": _vm.code1.perPage,
                              "current-page": _vm.code1.currentPage,
                              small: "",
                            },
                          }),
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
                {
                  key: "js",
                  fn: function () {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code1.js) + "\n        "
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Button content" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function () {
                    return [
                      _c(
                        "div",
                        { staticClass: "overflow-auto" },
                        [
                          _c("b-pagination", {
                            attrs: {
                              "total-rows": _vm.code2.rows1,
                              "per-page": _vm.code2.perPage1,
                              "first-text": "First",
                              "prev-text": "Prev",
                              "next-text": "Next",
                              "last-text": "Last",
                            },
                            model: {
                              value: _vm.code2.currentPage1,
                              callback: function ($$v) {
                                _vm.$set(_vm.code2, "currentPage1", $$v)
                              },
                              expression: "code2.currentPage1",
                            },
                          }),
                          _vm._v(" "),
                          _c("b-pagination", {
                            staticClass: "mt-4",
                            attrs: {
                              "total-rows": _vm.code2.rows2,
                              "per-page": _vm.code2.perPage2,
                              "first-text": "⏮",
                              "prev-text": "⏪",
                              "next-text": "⏩",
                              "last-text": "⏭",
                            },
                            model: {
                              value: _vm.code2.currentPage2,
                              callback: function ($$v) {
                                _vm.$set(_vm.code2, "currentPage2", $$v)
                              },
                              expression: "code2.currentPage2",
                            },
                          }),
                          _vm._v(" "),
                          _c("b-pagination", {
                            staticClass: "mt-4",
                            attrs: {
                              "total-rows": _vm.code2.rows3,
                              "per-page": _vm.code2.perPage3,
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "first-text",
                                fn: function () {
                                  return [
                                    _c(
                                      "span",
                                      { staticClass: "text-success" },
                                      [_vm._v("First")]
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                              {
                                key: "prev-text",
                                fn: function () {
                                  return [
                                    _c("span", { staticClass: "text-danger" }, [
                                      _vm._v("Prev"),
                                    ]),
                                  ]
                                },
                                proxy: true,
                              },
                              {
                                key: "next-text",
                                fn: function () {
                                  return [
                                    _c(
                                      "span",
                                      { staticClass: "text-warning" },
                                      [_vm._v("Next")]
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                              {
                                key: "last-text",
                                fn: function () {
                                  return [
                                    _c("span", { staticClass: "text-info" }, [
                                      _vm._v("Last"),
                                    ]),
                                  ]
                                },
                                proxy: true,
                              },
                              {
                                key: "ellipsis-text",
                                fn: function () {
                                  return [
                                    _c("b-spinner", {
                                      attrs: { small: "", type: "grow" },
                                    }),
                                    _vm._v(" "),
                                    _c("b-spinner", {
                                      attrs: { small: "", type: "grow" },
                                    }),
                                    _vm._v(" "),
                                    _c("b-spinner", {
                                      attrs: { small: "", type: "grow" },
                                    }),
                                  ]
                                },
                                proxy: true,
                              },
                              {
                                key: "page",
                                fn: function (ref) {
                                  var page = ref.page
                                  var active = ref.active
                                  return [
                                    active
                                      ? _c("b", [_vm._v(_vm._s(page))])
                                      : _c("i", [_vm._v(_vm._s(page))]),
                                  ]
                                },
                              },
                            ]),
                            model: {
                              value: _vm.code2.currentPage3,
                              callback: function ($$v) {
                                _vm.$set(_vm.code2, "currentPage3", $$v)
                              },
                              expression: "code2.currentPage3",
                            },
                          }),
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
                {
                  key: "js",
                  fn: function () {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code2.js) + "\n        "
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Button size" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function () {
                    return [
                      _c("div", { staticClass: "overflow-auto" }, [
                        _c(
                          "div",
                          [
                            _c("h6", [_vm._v("Small")]),
                            _vm._v(" "),
                            _c("b-pagination", {
                              attrs: {
                                "total-rows": _vm.code3.rows1,
                                size: "sm",
                              },
                              model: {
                                value: _vm.code3.currentPage1,
                                callback: function ($$v) {
                                  _vm.$set(_vm.code3, "currentPage1", $$v)
                                },
                                expression: "code3.currentPage1",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-3" },
                          [
                            _c("h6", [_vm._v("Default")]),
                            _vm._v(" "),
                            _c("b-pagination", {
                              attrs: { "total-rows": _vm.code3.rows2 },
                              model: {
                                value: _vm.code3.currentPage2,
                                callback: function ($$v) {
                                  _vm.$set(_vm.code3, "currentPage2", $$v)
                                },
                                expression: "code3.currentPage2",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-3" },
                          [
                            _c("h6", [_vm._v("Large")]),
                            _vm._v(" "),
                            _c("b-pagination", {
                              attrs: {
                                "total-rows": _vm.code3.rows3,
                                size: "lg",
                              },
                              model: {
                                value: _vm.code3.currentPage3,
                                callback: function ($$v) {
                                  _vm.$set(_vm.code3, "currentPage3", $$v)
                                },
                                expression: "code3.currentPage3",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
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
                {
                  key: "js",
                  fn: function () {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code3.js) + "\n        "
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            }),
            _vm._v(" "),
            _c("KTCodePreview", {
              attrs: { title: "Alignment" },
              scopedSlots: _vm._u([
                {
                  key: "preview",
                  fn: function () {
                    return [
                      _c("div", { staticClass: "overflow-auto" }, [
                        _c(
                          "div",
                          [
                            _c("h6", [_vm._v("Left alignment (default)")]),
                            _vm._v(" "),
                            _c("b-pagination", {
                              attrs: { "total-rows": _vm.code4.rows1 },
                              model: {
                                value: _vm.code4.currentPage1,
                                callback: function ($$v) {
                                  _vm.$set(_vm.code4, "currentPage1", $$v)
                                },
                                expression: "code4.currentPage1",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-3" },
                          [
                            _c("h6", { staticClass: "text-center" }, [
                              _vm._v("Center alignment"),
                            ]),
                            _vm._v(" "),
                            _c("b-pagination", {
                              attrs: {
                                "total-rows": _vm.code4.rows2,
                                align: "center",
                              },
                              model: {
                                value: _vm.code4.currentPage2,
                                callback: function ($$v) {
                                  _vm.$set(_vm.code4, "currentPage2", $$v)
                                },
                                expression: "code4.currentPage2",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-3" },
                          [
                            _c("h6", { staticClass: "text-right" }, [
                              _vm._v("Right (end) alignment"),
                            ]),
                            _vm._v(" "),
                            _c("b-pagination", {
                              attrs: {
                                "total-rows": _vm.code4.rows3,
                                align: "right",
                              },
                              model: {
                                value: _vm.code4.currentPage3,
                                callback: function ($$v) {
                                  _vm.$set(_vm.code4, "currentPage3", $$v)
                                },
                                expression: "code4.currentPage3",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-3" },
                          [
                            _c("h6", { staticClass: "text-center" }, [
                              _vm._v("Fill alignment"),
                            ]),
                            _vm._v(" "),
                            _c("b-pagination", {
                              attrs: {
                                "total-rows": _vm.code4.rows4,
                                align: "fill",
                              },
                              model: {
                                value: _vm.code4.currentPage4,
                                callback: function ($$v) {
                                  _vm.$set(_vm.code4, "currentPage4", $$v)
                                },
                                expression: "code4.currentPage4",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
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
                {
                  key: "js",
                  fn: function () {
                    return [
                      _vm._v(
                        "\n          " + _vm._s(_vm.code4.js) + "\n        "
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

/***/ "./resources/js/src/view/pages/vue-bootstrap/Pagination.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Pagination.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_vue_vue_type_template_id_2a509dbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=2a509dbe& */ "./resources/js/src/view/pages/vue-bootstrap/Pagination.vue?vue&type=template&id=2a509dbe&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vue-bootstrap/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_2a509dbe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pagination_vue_vue_type_template_id_2a509dbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vue-bootstrap/Pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Pagination.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Pagination.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vue-bootstrap/Pagination.vue?vue&type=template&id=2a509dbe&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vue-bootstrap/Pagination.vue?vue&type=template&id=2a509dbe& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_2a509dbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=template&id=2a509dbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/vue-bootstrap/Pagination.vue?vue&type=template&id=2a509dbe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_2a509dbe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_2a509dbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);