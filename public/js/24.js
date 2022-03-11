(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cropperjs */ "./node_modules/vue-cropperjs/dist/VueCropper.js");
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_cropperjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css");
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/src/core/services/store/breadcrumbs.module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Cooper-1",
  components: {
    VueCropper: vue_cropperjs__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      imgSrc: "media/stock-600x400/img-9.jpg",
      cropImg: "",
      fileExtension: "png"
    };
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__["SET_BREADCRUMB"], [{
      title: "Cropper"
    }]);
  },
  methods: {
    cropImage: function cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    move: function move(offsetX, offsetY) {
      this.$refs.cropper.move(offsetX, offsetY);
    },
    reset: function reset() {
      this.$refs.cropper.reset();
    },
    rotate: function rotate(deg) {
      this.$refs.cropper.rotate(deg);
    },
    setImage: function setImage(e) {
      var _this = this;

      var file = e.target.files[0];
      this.fileExtension = file.name.split(".").pop();

      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }

      if (typeof FileReader === "function") {
        var reader = new FileReader();

        reader.onload = function (event) {
          _this.imgSrc = event.target.result; // rebuild cropperjs with the updated source

          _this.$refs.cropper.replace(event.target.result);
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    showFileChooser: function showFileChooser() {
      this.$refs.input.click();
    },
    download: function download() {
      if (this.cropImg) {
        var extention = this.fileExtension;
        var href = this.cropImg;
        var link = document.createElement("a");
        link.addEventListener("click", function () {
          link.href = href;
          link.download = "cropper-img." + extention; // console.log(link.download);
        }, false);
        link.click();
      } else {
        alert("Please, crop image before download it");
      }
    },
    zoom: function zoom(percent) {
      this.$refs.cropper.relativeZoom(percent);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[type=\"file\"] {\r\n  display: none;\n}\n.content {\r\n  display: flex;\r\n  justify-content: space-between;\n}\n.actions {\r\n  margin-top: 1rem;\n}\n.preview-area p:last-of-type {\r\n  margin-top: 1rem;\n}\n.preview {\r\n  width: 100%;\r\n  height: calc(372px * (9 / 16));\r\n  overflow: hidden;\n}\n.cropped-image img {\r\n  max-width: 100%;\n}\n.cropper-bg {\r\n  background-repeat: repeat;\n}\n.cropper-min-height {\r\n  min-height: 400px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cropper.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=template&id=1be027d2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=template&id=1be027d2& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
            _c("b", [_vm._v("Cropper")]),
            _vm._v(
              " provides JS cropping script which allows crop images.\n      "
            ),
            _c(
              "a",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  href: "https://github.com/fengyuanchen/cropperjs",
                  target: "_blank",
                },
              },
              [_vm._v("\n        See documentation.\n      ")]
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("input", {
        ref: "input",
        attrs: { type: "file", name: "image", accept: "image/*" },
        on: { change: _vm.setImage },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "card card-custom content" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-8" }, [
              _c("p", [_vm._v("CrooperJS:")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "img-cropper" },
                [
                  _c("vue-cropper", {
                    ref: "cropper",
                    staticClass: "cropper-min-height",
                    attrs: { src: _vm.imgSrc, preview: ".preview" },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "actions" },
                [
                  _c(
                    "b-button-group",
                    { staticClass: "mr-3 mb-3", attrs: { vertical: "" } },
                    [
                      _c(
                        "b-button",
                        {
                          on: {
                            click: function ($event) {
                              return _vm.zoom(0.2)
                            },
                          },
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-search-plus",
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          on: {
                            click: function ($event) {
                              return _vm.zoom(-0.2)
                            },
                          },
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-search-minus",
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-3 mb-3", attrs: { vertical: "" } },
                    [
                      _c(
                        "b-button",
                        {
                          on: {
                            click: function ($event) {
                              return _vm.move(-10, 0)
                            },
                          },
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-caret-left",
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          on: {
                            click: function ($event) {
                              return _vm.move(10, 0)
                            },
                          },
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-caret-right",
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-3 mb-3", attrs: { vertical: "" } },
                    [
                      _c(
                        "b-button",
                        {
                          on: {
                            click: function ($event) {
                              return _vm.move(0, -10)
                            },
                          },
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-caret-up",
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          on: {
                            click: function ($event) {
                              return _vm.move(0, 10)
                            },
                          },
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-caret-down",
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-3 mb-3", attrs: { vertical: "" } },
                    [
                      _c(
                        "b-button",
                        {
                          on: {
                            click: function ($event) {
                              return _vm.rotate(90)
                            },
                          },
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-share",
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          on: {
                            click: function ($event) {
                              return _vm.rotate(-90)
                            },
                          },
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-reply",
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mr-3 mb-3", on: { click: _vm.cropImage } },
                    [
                      _c("i", {
                        staticClass: "fa fa-crop",
                        attrs: { "aria-hidden": "true" },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mr-3 mb-3", on: { click: _vm.reset } },
                    [
                      _c("i", {
                        staticClass: "fa fa-arrows-alt",
                        attrs: { "aria-hidden": "true" },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mr-3 mb-3",
                      on: { click: _vm.showFileChooser },
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-upload",
                        attrs: { "aria-hidden": "true" },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { staticClass: "mr-3 mb-3", on: { click: _vm.download } },
                    [
                      _c("i", {
                        staticClass: "fa fa-download",
                        attrs: { "aria-hidden": "true" },
                      }),
                    ]
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Cropped Image")]),
                _vm._v(" "),
                _c("div", { staticClass: "cropped-image secondary" }, [
                  _vm.cropImg
                    ? _c("img", {
                        attrs: { src: _vm.cropImg, alt: "Cropped Image" },
                      })
                    : _c("div", { staticClass: "crop-placeholder" }),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "min-height": "209px" } }, [
      _c("p", [_vm._v("Preview")]),
      _vm._v(" "),
      _c("div", { staticClass: "w-100 cropped-img mt-2 preview secondary" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/plugins/Cropper.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/view/pages/plugins/Cropper.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cropper_vue_vue_type_template_id_1be027d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cropper.vue?vue&type=template&id=1be027d2& */ "./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=template&id=1be027d2&");
/* harmony import */ var _Cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cropper.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cropper.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cropper_vue_vue_type_template_id_1be027d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cropper_vue_vue_type_template_id_1be027d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/plugins/Cropper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cropper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cropper.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cropper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=template&id=1be027d2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=template&id=1be027d2& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cropper_vue_vue_type_template_id_1be027d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cropper.vue?vue&type=template&id=1be027d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/plugins/Cropper.vue?vue&type=template&id=1be027d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cropper_vue_vue_type_template_id_1be027d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cropper_vue_vue_type_template_id_1be027d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);