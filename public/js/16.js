(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Article.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/Article.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_quill_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-quill-editor */ "./node_modules/vue2-quill-editor/dist/index.js");
/* harmony import */ var vue2_quill_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_quill_editor__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueEditor: vue2_quill_editor__WEBPACK_IMPORTED_MODULE_1__["VueEditor"]
  },
  data: function data() {
    return {
      // id:'',
      // content: '',
      customToolbar: [[{
        size: ["small", false, "large", "huge"]
      }], [{
        header: [1, 2, 3, 4, 5, 6, false]
      }], [{
        color: []
      }, {
        background: []
      }], [{
        font: []
      }], [{
        align: []
      }], ["clean"][('bold', 'italic', 'underline')], [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }], ['image', 'code-block']]
    };
  },
  computed: {
    paginate: function paginate() {
      return this.$store.state.paginate;
    },
    filesData: function filesData() {
      return this.$store.state.filesData;
    },
    form: function form() {
      return this.$store.state.form;
    },
    content: function content() {
      return this.$store.state;
    },
    editmode: function editmode() {
      return this.$store.state.editmode;
    }
  },
  mounted: function mounted() {
    // this.get();
    this.Select();
    this.onChangePage(); // this.comment();
  },
  methods: {
    Select: function Select() {
      return this.$store.dispatch("priorityTable");
    },
    onChangePage: function onChangePage() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.$store.dispatch("onChangePage", page);
    },
    base64convert: function base64convert(e) {
      return this.$store.dispatch("imageConversion", e);
    },
    deleteArticle: function deleteArticle(index) {
      this.$router.push("/dashboard");
      return this.$store.dispatch("deleteArticles", index);
    },
    editModal: function editModal(index) {
      this.$refs['my-modal'].show();
      return this.$store.dispatch("editModal", index);
    },
    getSelectionText: function getSelectionText() {
      return this.$store.dispatch("selectedText");
    },
    get: function get() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/article", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ""
        },
        baseURL: "http://localhost:8000"
      }).then(function (res) {
        _this.Article = res.data; //    console.log("data" + this.Article);
      })["catch"](function (err) {
        console.log(err.response);
      });
    },
    update: function update() {
      this.$router.push("/dashboard");
      return this.$store.dispatch("updateArticles");
    },
    showModal: function showModal() {
      this.$refs['my-modal'].show();
      return this.$store.dispatch("openModal");
    },
    add: function add() {
      this.$router.push("/dashboard");
      return this.$store.dispatch("createArticle");
    },
    onReset: function onReset() {
      return this.$store.dispatch("resetForm");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Article.vue?vue&type=style&index=0&id=52ce03aa&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/Article.vue?vue&type=style&index=0&id=52ce03aa&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#customers[data-v-52ce03aa] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n#customers td[data-v-52ce03aa], #customers th[data-v-52ce03aa] {\n  border: 0.5px solid blanchedalmond;\n  padding: 8px;\n  background:white;\n}\n#customers tr[data-v-52ce03aa]:nth-child(even){background-color: #f2f2f2;}\n#customers tr[data-v-52ce03aa]:hover {background-color: #ddd;}\n#customers th[data-v-52ce03aa] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #04AA6D;\n  color: white;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Article.vue?vue&type=style&index=0&id=52ce03aa&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/Article.vue?vue&type=style&index=0&id=52ce03aa&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=style&index=0&id=52ce03aa&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Article.vue?vue&type=style&index=0&id=52ce03aa&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Article.vue?vue&type=template&id=52ce03aa&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/Article.vue?vue&type=template&id=52ce03aa&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "app" } },
    [
      _c(
        "div",
        [
          _c(
            "h1",
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn btn-success",
                  staticStyle: {
                    "margin-left": "1000px",
                    "background-color": "rebeccapurple!important",
                    border: "2px solid rebeccapurple",
                  },
                  on: { click: _vm.showModal },
                },
                [_vm._v("Add Article")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "my-modal",
              attrs: { id: "modal-1", size: "lg", title: "Article" },
            },
            [
              _c(
                "b-form",
                {
                  attrs: {
                    id: "form",
                    method: "POST",
                    enctype: "multipart/form-data",
                  },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      _vm.editmode ? _vm.update() : _vm.add()
                    },
                    reset: _vm.onReset,
                  },
                },
                [
                  _vm.editmode == true
                    ? _c("b-form-input", {
                        attrs: {
                          id: "input-1",
                          type: "text",
                          hidden: "",
                          placeholder: "Enter Comapny ID",
                        },
                        model: {
                          value: _vm.form.id,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "id", $$v)
                          },
                          expression: "form.id",
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-1",
                        label: "Company ID:",
                        "label-for": "input-1",
                        description:
                          "We'll never share your company id with anyone else.",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "input-1",
                          type: "text",
                          placeholder: "Enter Comapny ID",
                          required: "",
                        },
                        model: {
                          value: _vm.form.company_id,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "company_id", $$v)
                          },
                          expression: "form.company_id",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-2",
                        label: "Your Client ID:",
                        "label-for": "input-2",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "input-2",
                          required: "",
                          placeholder: "Enter Client Id",
                        },
                        model: {
                          value: _vm.form.client_id,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "client_id", $$v)
                          },
                          expression: "form.client_id",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-3",
                        label: "Your Priority Keyword:",
                        "label-for": "input-3",
                      },
                    },
                    [
                      _c(
                        "b-form-select",
                        {
                          attrs: { required: "" },
                          model: {
                            value: _vm.form.Keyword_id,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "Keyword_id", $$v)
                            },
                            expression: "form.Keyword_id",
                          },
                        },
                        [
                          this.editmode == false
                            ? _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select an option"),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.filesData, function (dev) {
                            return _c(
                              "option",
                              { key: dev.id, domProps: { value: dev.id } },
                              [_vm._v(_vm._s(dev.priority_keyword))]
                            )
                          }),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-4",
                        label: "Date Published:",
                        "label-for": "input-4",
                      },
                    },
                    [
                      _c("b-form-datepicker", {
                        attrs: {
                          id: "input-4",
                          required: "",
                          placeholder: "Enter Date ",
                        },
                        model: {
                          value: _vm.form.date,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "date", $$v)
                          },
                          expression: "form.date",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-5",
                        label: "Writer:",
                        "label-for": "input-5",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "input-5",
                          required: "",
                          placeholder: "Enter Writer ",
                        },
                        model: {
                          value: _vm.form.writer,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "writer", $$v)
                          },
                          expression: "form.writer",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-6",
                        label: "Topic:",
                        "label-for": "input-6",
                      },
                    },
                    [
                      _c("b-form-textarea", {
                        attrs: {
                          id: "textarea-default",
                          size: "lg",
                          placeholder: "Enter Topic",
                          required: "",
                        },
                        model: {
                          value: _vm.form.topic,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "topic", $$v)
                          },
                          expression: "form.topic",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-7",
                        label: "Focus Keyword:",
                        "label-for": "input-7",
                      },
                    },
                    [
                      _c("b-form-textarea", {
                        attrs: {
                          id: "textarea-default",
                          size: "lg",
                          placeholder: "Enter Focus Keyword",
                          required: "",
                        },
                        model: {
                          value: _vm.form.focus,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "focus", $$v)
                          },
                          expression: "form.focus",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-9",
                        label: "Status:",
                        "label-for": "input-9",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "input-10",
                          required: "",
                          placeholder: "Enter Status ",
                        },
                        model: {
                          value: _vm.form.status,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "status", $$v)
                          },
                          expression: "form.status",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-10",
                        label: "Approval:",
                        "label-for": "input-10",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "input-10",
                          required: "",
                          placeholder: "Enter Approval ",
                        },
                        model: {
                          value: _vm.form.approval,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "approval", $$v)
                          },
                          expression: "form.approval",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-11",
                        label: "Doc Link:",
                        "label-for": "input-11",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "input-11",
                          required: "",
                          placeholder: "Enter Document Link ",
                        },
                        model: {
                          value: _vm.form.doc,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "doc", $$v)
                          },
                          expression: "form.doc",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-13",
                        label: "Article Link:",
                        "label-for": "input-13",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "input-13",
                          required: "",
                          placeholder: "Enter Article Link ",
                        },
                        model: {
                          value: _vm.form.article,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "article", $$v)
                          },
                          expression: "form.article",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-12",
                        label: "Banner Image:",
                        "label-for": "input-12",
                      },
                    },
                    [
                      _c("input", {
                        attrs: { type: "file", required: "" },
                        on: { change: _vm.base64convert },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { attrs: { type: "submit", variant: "primary" } },
                    [_vm._v("Submit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { attrs: { type: "reset", variant: "danger" } },
                    [_vm._v("Reset")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "table",
            { attrs: { id: "customers" } },
            [
              _vm._m(1),
              _vm._v(" "),
              _vm._l(_vm.paginate.data, function (index) {
                return _c("tr", { key: index.id }, [
                  _c("td", [
                    _c(
                      "p",
                      {
                        attrs: { id: "prior" },
                        on: {
                          dblclick: function ($event) {
                            return _vm.getSelectionText()
                          },
                        },
                      },
                      [_vm._v(_vm._s(index.priority_keyword.priority_keyword))]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(index.date_published))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(index.writer))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "p",
                      {
                        attrs: { id: "topic" },
                        on: {
                          dblclick: function ($event) {
                            return _vm.getSelectionText()
                          },
                        },
                      },
                      [_vm._v(_vm._s(index.topic))]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "p",
                      {
                        attrs: { id: "word" },
                        on: {
                          dblclick: function ($event) {
                            return _vm.getSelectionText()
                          },
                        },
                      },
                      [_vm._v(_vm._s(index.focus_keyword))]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(index.status))]),
                  _vm._v(" "),
                  index.approval == 0
                    ? _c("td", [_vm._v("Approved")])
                    : _vm._e(),
                  _vm._v(" "),
                  index.approval == 1
                    ? _c(
                        "td",
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "btn btn-success",
                              staticStyle: {
                                "background-color": "orangered",
                                border: "2px solid orangered",
                              },
                            },
                            [
                              _vm._v(
                                "\n                    Unapproved\n                    "
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("td", [
                    _c("a", { attrs: { href: index.doc_link } }, [
                      _vm._v("Docs"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("img", {
                      staticStyle: { "max-width": "90px" },
                      attrs: { src: "storage/" + index.banner_images, alt: "" },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("a", { attrs: { href: index.article_link } }, [
                      _vm._v("Article"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        on: {
                          click: function ($event) {
                            _vm.editModal(_vm.paginate.data.indexOf(index))
                          },
                        },
                      },
                      [_vm._v("Edit")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info",
                        on: {
                          click: function ($event) {
                            _vm.deleteArticle(_vm.paginate.data.indexOf(index))
                          },
                        },
                      },
                      [_vm._v("Delete")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        on: {
                          click: function ($event) {
                            _vm.comment(_vm.paginate.data.indexOf(index))
                          },
                        },
                      },
                      [_vm._v("Add Comment")]
                    ),
                  ]),
                ])
              }),
            ],
            2
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "center",
        [
          _c(
            "pagination",
            {
              attrs: { data: _vm.paginate },
              on: { "pagination-change-page": _vm.onChangePage },
            },
            [
              _c("span", { attrs: { slot: "prev-nav" }, slot: "prev-nav" }, [
                _vm._v("< Previous"),
              ]),
              _vm._v(" "),
              _c("span", { attrs: { slot: "next-nav" }, slot: "next-nav" }, [
                _vm._v("Next >"),
              ]),
            ]
          ),
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
    return _c("b", [_c("u", [_vm._v("Articles")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Priority Keyword")]),
      _vm._v(" "),
      _c("th", [_vm._v("Date Published")]),
      _vm._v(" "),
      _c("th", [_vm._v("Writer")]),
      _vm._v(" "),
      _c("th", [_vm._v("Topic")]),
      _vm._v(" "),
      _c("th", [_vm._v("Focus Keyword")]),
      _vm._v(" "),
      _c("th", [_vm._v("Status")]),
      _vm._v(" "),
      _c("th", [_vm._v("Approval")]),
      _vm._v(" "),
      _c("th", [_vm._v("Doc Link")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Images")]),
      _vm._v(" "),
      _c("th", [_vm._v("Article Link")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/Article.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/view/pages/Article.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article_vue_vue_type_template_id_52ce03aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article.vue?vue&type=template&id=52ce03aa&scoped=true& */ "./resources/js/src/view/pages/Article.vue?vue&type=template&id=52ce03aa&scoped=true&");
/* harmony import */ var _Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/Article.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Article_vue_vue_type_style_index_0_id_52ce03aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Article.vue?vue&type=style&index=0&id=52ce03aa&scoped=true&lang=css& */ "./resources/js/src/view/pages/Article.vue?vue&type=style&index=0&id=52ce03aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Article_vue_vue_type_template_id_52ce03aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Article_vue_vue_type_template_id_52ce03aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "52ce03aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/Article.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/Article.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/view/pages/Article.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Article.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/Article.vue?vue&type=style&index=0&id=52ce03aa&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/Article.vue?vue&type=style&index=0&id=52ce03aa&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_52ce03aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=style&index=0&id=52ce03aa&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Article.vue?vue&type=style&index=0&id=52ce03aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_52ce03aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_52ce03aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_52ce03aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_52ce03aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/view/pages/Article.vue?vue&type=template&id=52ce03aa&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/Article.vue?vue&type=template&id=52ce03aa&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_52ce03aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=template&id=52ce03aa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Article.vue?vue&type=template&id=52ce03aa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_52ce03aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_52ce03aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);