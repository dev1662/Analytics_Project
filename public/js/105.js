(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_plugins_formvalidation_dist_es6_core_Core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/plugins/formvalidation/dist/es6/core/Core */ "./resources/js/src/assets/plugins/formvalidation/dist/es6/core/Core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/services/api.service */ "./resources/js/src/core/services/api.service.js");
/* harmony import */ var _assets_plugins_formvalidation_dist_es6_plugins_Trigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/plugins/formvalidation/dist/es6/plugins/Trigger */ "./resources/js/src/assets/plugins/formvalidation/dist/es6/plugins/Trigger.js");
/* harmony import */ var _assets_plugins_formvalidation_dist_es6_plugins_Bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap */ "./resources/js/src/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap.js");
/* harmony import */ var _assets_plugins_formvalidation_dist_es6_plugins_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton */ "./resources/js/src/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton.js");
/* harmony import */ var _assets_js_components_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/js/components/util */ "./resources/js/src/assets/js/components/util.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/core/services/store/auth.module */ "./resources/js/src/core/services/store/auth.module.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // FormValidation plugins








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "login-1",
  data: function data() {
    return {
      state: "signin",
      // Remove this dummy login info
      form: {
        email: "",
        password: ""
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])({
    errors: function errors(state) {
      return state.auth.errors;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])(["currentUser"])), {}, {
    backgroundImage: function backgroundImage() {
      return process.env.BASE_URL + "media/svg/illustrations/login-visual-1.svg";
    }
  }),
  created: function created() {//   console.log(this.$store.state.auth);
    //   if(this.$store.state.isAuthenticated == true){
    //       this.$router.push({name: 'dashboard'});
    //     // console.log("hhh");
    //   }
  },
  mounted: function mounted() {
    var _this = this;

    var signin_form = _assets_js_components_util__WEBPACK_IMPORTED_MODULE_6__["default"].getById("kt_login_signin_form");
    var signup_form = _assets_js_components_util__WEBPACK_IMPORTED_MODULE_6__["default"].getById("kt_login_signup_form");
    var forgot_form = _assets_js_components_util__WEBPACK_IMPORTED_MODULE_6__["default"].getById("kt_login_forgot_form");
    this.fv = Object(_assets_plugins_formvalidation_dist_es6_core_Core__WEBPACK_IMPORTED_MODULE_1__["default"])(signin_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "Username is required"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "Password is required"
            }
          }
        }
      },
      plugins: {
        trigger: new _assets_plugins_formvalidation_dist_es6_plugins_Trigger__WEBPACK_IMPORTED_MODULE_3__["default"](),
        submitButton: new _assets_plugins_formvalidation_dist_es6_plugins_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"](),
        bootstrap: new _assets_plugins_formvalidation_dist_es6_plugins_Bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"]()
      }
    });
    this.fv1 = Object(_assets_plugins_formvalidation_dist_es6_core_Core__WEBPACK_IMPORTED_MODULE_1__["default"])(signup_form, {
      fields: {
        fullname: {
          validators: {
            notEmpty: {
              message: "Full name is required"
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: "Email is required"
            },
            emailAddress: {
              message: "The value is not a valid email address"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "Password is required"
            }
          }
        },
        cpassword: {
          validators: {
            notEmpty: {
              message: "Confirm password is required"
            },
            identical: {
              compare: function compare() {
                return signup_form.querySelector('[name="password"]').value;
              },
              message: "The password and its confirm are not the same"
            }
          }
        },
        agree: {
          validators: {
            notEmpty: {
              message: "You should agree terms and conditions"
            }
          }
        }
      },
      plugins: {
        trigger: new _assets_plugins_formvalidation_dist_es6_plugins_Trigger__WEBPACK_IMPORTED_MODULE_3__["default"](),
        submitButton: new _assets_plugins_formvalidation_dist_es6_plugins_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"](),
        bootstrap: new _assets_plugins_formvalidation_dist_es6_plugins_Bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"]()
      }
    });
    this.fv2 = Object(_assets_plugins_formvalidation_dist_es6_core_Core__WEBPACK_IMPORTED_MODULE_1__["default"])(forgot_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "Email is required"
            },
            emailAddress: {
              message: "The value is not a valid email address"
            }
          }
        }
      },
      plugins: {
        trigger: new _assets_plugins_formvalidation_dist_es6_plugins_Trigger__WEBPACK_IMPORTED_MODULE_3__["default"](),
        submitButton: new _assets_plugins_formvalidation_dist_es6_plugins_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"](),
        bootstrap: new _assets_plugins_formvalidation_dist_es6_plugins_Bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"]()
      }
    });
    this.fv.on("core.form.valid", function () {
      var email = _this.form.email;
      var password = _this.form.password; // clear existing errors

      _this.$store.dispatch(_core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_8__["LOGOUT"], {
        email: email,
        password: password
      }); // set spinner to submit button


      var submitButton = _this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right"); // dummy delay

      setTimeout(function () {
        // send login request
        _this.$store.dispatch(_core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_8__["LOGIN"], {
          email: email,
          password: password
        }) // go to which page after successfully login
        .then(function () {
          return Toast.fire({
            icon: 'success',
            title: 'Signed in Successfully'
          });
        }, _this.$router.push({
          name: "dashboard"
        }), _this.$store.state.isAuthenticated = true)["catch"](function () {
          Toast.fire({
            icon: 'warning',
            title: 'Invalid email or password'
          });
        });

        submitButton.classList.remove("spinner", "spinner-light", "spinner-right");
      }, 2000);
    });
    this.fv.on("core.form.invalid", function () {
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
        title: "",
        text: "Please, provide correct data!",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    });
    this.fv1.on("core.form.valid", function () {
      var name = _this.$refs.fullname.value;
      var email = _this.$refs.remail.value;
      var password = _this.$refs.rpassword.value; // clear existing errors

      _this.$store.dispatch(_core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_8__["LOGOUT"], {
        email: email,
        password: password
      }); // set spinner to submit button


      var submitButton = _this.$refs["kt_login_signup_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right"); // dummy delay

      setTimeout(function () {
        // send register request
        _this.$store.dispatch(_core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_8__["REGISTER"], {
          name: name,
          email: email,
          password: password
        }).then(function () {
          return _this.$router.push({
            name: "dashboard"
          });
        }, _this.$store.state.isAuthenticated = true, console.log("hello"));

        submitButton.classList.remove("spinner", "spinner-light", "spinner-right");
      }, 2000);
    });
    this.fv1.on("core.form.invalid", function () {
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
        title: "",
        text: "Please, provide correct data!",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    });
  },
  methods: {
    getaccessToken: function getaccessToken(provider) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var google;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$gAuth.signIn();

              case 2:
                google = _context.sent;

                if (google != '') {
                  console.log("response", google);
                  console.log("ID", google.getId());
                  console.log("Basic Profile", google.getBasicProfile());
                  console.log("Auth Response", google.getAuthResponse());
                } //    console.log("user2 ", google);
                // let self = this;
                // this.$auth.authenticate(provider).then(res => {
                //     self.socialLogin(provider,res);
                // })


              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    socialLogin: function socialLogin(provider, res) {
      var obj = {
        "provider": provider,
        "response": res
      };
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:8000/api/auth/google", obj).then(function (res) {
        console.log(res.data);
      });
    },
    showForm: function showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      _assets_js_components_util__WEBPACK_IMPORTED_MODULE_6__["default"].animateClass(_assets_js_components_util__WEBPACK_IMPORTED_MODULE_6__["default"].getById(form_name), "animate__animated animate__backInUp");
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login.login-1 .login-aside .aside-img {\n  min-height: 450px;\n}\n.login.login-1 .login-signin,\n.login.login-1 .login-signup,\n.login.login-1 .login-forgot {\n  display: none;\n}\n.login.login-1.login-signin-on .login-signup {\n  display: none;\n}\n.login.login-1.login-signin-on .login-signin {\n  display: block;\n}\n.login.login-1.login-signin-on .login-forgot {\n  display: none;\n}\n.login.login-1.login-signup-on .login-signup {\n  display: block;\n}\n.login.login-1.login-signup-on .login-signin {\n  display: none;\n}\n.login.login-1.login-signup-on .login-forgot {\n  display: none;\n}\n.login.login-1.login-forgot-on .login-signup {\n  display: none;\n}\n.login.login-1.login-forgot-on .login-signin {\n  display: none;\n}\n.login.login-1.login-forgot-on .login-forgot {\n  display: block;\n}\n@media (min-width: 992px) {\n.login.login-1 .login-aside {\n    width: 100%;\n    max-width: 700px;\n}\n.login.login-1 .login-content {\n    width: 100%;\n    max-width: 500px;\n}\n.login.login-1 .login-content .login-form {\n    width: 100%;\n    max-width: 450px;\n}\n}\n@media (min-width: 992px) and (max-width: 1399.98px) {\n.login.login-1 .login-aside {\n    width: 100%;\n    max-width: 450px;\n}\n}\n@media (max-width: 991.98px) {\n.login.login-1 .login-content .login-form {\n    width: 100%;\n    max-width: 400px;\n}\n}\n@media (max-width: 575.98px) {\n.login.login-1 .aside-img {\n    min-height: 300px !important;\n    background-size: 400px;\n}\n.login.login-1 .login-content .login-form {\n    width: 100%;\n    max-width: 100%;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login-1.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=template&id=46011a81&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=template&id=46011a81& ***!
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
  return _c("div", { staticClass: "d-flex flex-column flex-root" }, [
    _c(
      "div",
      {
        staticClass:
          "login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white",
        class: {
          "login-signin-on": this.state == "signin",
          "login-signup-on": this.state == "signup",
          "login-forgot-on": this.state == "forgot",
        },
        attrs: { id: "kt_login" },
      },
      [
        _c(
          "div",
          {
            staticClass: "login-aside d-flex flex-column flex-row-auto",
            staticStyle: { "background-color": "#F2C98A" },
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", {
              staticClass:
                "aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center",
              style: { backgroundImage: "url(" + _vm.backgroundImage + ")" },
            }),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto",
          },
          [
            _c("div", { staticClass: "d-flex flex-column-fluid flex-center" }, [
              _c("div", { staticClass: "login-form login-signin" }, [
                _c(
                  "form",
                  {
                    staticClass: "form",
                    attrs: {
                      novalidate: "novalidate",
                      id: "kt_login_signin_form",
                    },
                  },
                  [
                    _c("div", { staticClass: "pb-13 pt-lg-0 pt-5" }, [
                      _c(
                        "h3",
                        {
                          staticClass:
                            "font-weight-bolder text-dark font-size-h4 font-size-h1-lg",
                        },
                        [
                          _vm._v(
                            "\n                Welcome to Login\n              "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "text-muted font-weight-bold font-size-h4",
                        },
                        [
                          _vm._v("New Here?\n                "),
                          _c(
                            "a",
                            {
                              staticClass: "text-primary font-weight-bolder",
                              attrs: { id: "kt_login_signup" },
                              on: {
                                click: function ($event) {
                                  return _vm.showForm("signup")
                                },
                              },
                            },
                            [_vm._v("Create an Account")]
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "font-size-h6 font-weight-bolder text-dark",
                        },
                        [_vm._v("Email")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          attrs: {
                            id: "example-input-group-1",
                            label: "",
                            "label-for": "example-input-1",
                          },
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.email,
                                expression: "form.email",
                              },
                            ],
                            ref: "email",
                            staticClass:
                              "form-control form-control-solid h-auto py-7 px-6 rounded-lg",
                            attrs: { type: "text", name: "email" },
                            domProps: { value: _vm.form.email },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "email", $event.target.value)
                              },
                            },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "div",
                        { staticClass: "d-flex justify-content-between mt-n5" },
                        [
                          _c(
                            "label",
                            {
                              staticClass:
                                "font-size-h6 font-weight-bolder text-dark pt-5",
                            },
                            [_vm._v("Password")]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5",
                              attrs: { id: "kt_login_forgot" },
                              on: {
                                click: function ($event) {
                                  return _vm.showForm("forgot")
                                },
                              },
                            },
                            [_vm._v("Forgot Password ?")]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          attrs: {
                            id: "example-input-group-2",
                            label: "",
                            "label-for": "example-input-2",
                          },
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.password,
                                expression: "form.password",
                              },
                            ],
                            ref: "password",
                            staticClass:
                              "form-control form-control-solid h-auto py-7 px-6 rounded-lg",
                            attrs: {
                              type: "password",
                              name: "password",
                              autocomplete: "off",
                            },
                            domProps: { value: _vm.form.password },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "password",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "pb-lg-0 pb-5" }, [
                      _c(
                        "button",
                        {
                          ref: "kt_login_signin_submit",
                          staticClass:
                            "btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3",
                        },
                        [_vm._v("\n                Sign In\n              ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.getaccessToken("google")
                            },
                          },
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "svg-icon svg-icon-md" },
                            [
                              _c("inline-svg", {
                                attrs: {
                                  src: "media/svg/social-icons/google.svg",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v("Sign in with Google\n              "),
                        ]
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "login-form login-signup" }, [
                _c(
                  "form",
                  {
                    staticClass: "form",
                    attrs: {
                      novalidate: "novalidate",
                      id: "kt_login_signup_form",
                    },
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        ref: "fullname",
                        staticClass:
                          "form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6",
                        attrs: {
                          type: "text",
                          placeholder: "Fullname",
                          name: "fullname",
                          autocomplete: "off",
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        ref: "remail",
                        staticClass:
                          "form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6",
                        attrs: {
                          type: "email",
                          placeholder: "Email",
                          name: "email",
                          autocomplete: "off",
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        ref: "rpassword",
                        staticClass:
                          "form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6",
                        attrs: {
                          type: "password",
                          placeholder: "Password",
                          name: "password",
                          autocomplete: "off",
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        ref: "cpassword",
                        staticClass:
                          "form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6",
                        attrs: {
                          type: "password",
                          placeholder: "Confirm password",
                          name: "cpassword",
                          autocomplete: "off",
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group d-flex flex-wrap pb-lg-0 pb-3",
                      },
                      [
                        _c(
                          "button",
                          {
                            ref: "kt_login_signup_submit",
                            staticClass:
                              "btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4",
                            staticStyle: { width: "150px" },
                          },
                          [_vm._v("\n                Submit\n              ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3",
                            attrs: {
                              type: "button",
                              id: "kt_login_signup_cancel",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.showForm("signin")
                              },
                            },
                          },
                          [_vm._v("\n                Cancel\n              ")]
                        ),
                      ]
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "login-form login-forgot" }, [
                _c(
                  "form",
                  {
                    ref: "kt_login_forgot_form",
                    staticClass: "form",
                    attrs: {
                      novalidate: "novalidate",
                      id: "kt_login_forgot_form",
                    },
                  },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group d-flex flex-wrap pb-lg-0" },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4",
                            attrs: {
                              type: "button",
                              id: "kt_login_forgot_submit",
                            },
                          },
                          [_vm._v("\n                Submit\n              ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3",
                            attrs: {
                              type: "button",
                              id: "kt_login_forgot_cancel",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.showForm("signin")
                              },
                            },
                          },
                          [_vm._v("\n                Cancel\n              ")]
                        ),
                      ]
                    ),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _vm._m(5),
          ]
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
      "div",
      { staticClass: "d-flex flex-column-auto flex-column pt-lg-40 pt-15" },
      [
        _c("a", { staticClass: "text-center mb-10", attrs: { href: "#" } }, [
          _c("img", {
            staticClass: "max-h-70px",
            attrs: { src: "media/logos/logo-letter-1.png", alt: "" },
          }),
        ]),
        _vm._v(" "),
        _c(
          "h3",
          {
            staticClass:
              "font-weight-bolder text-center font-size-h4 font-size-h1-lg",
            staticStyle: { color: "#986923" },
          },
          [
            _vm._v("\n          Discover Amazing Metronic "),
            _c("br"),
            _vm._v("with great build tools\n        "),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pb-13 pt-lg-0 pt-5" }, [
      _c(
        "h3",
        {
          staticClass:
            "font-weight-bolder text-dark font-size-h4 font-size-h1-lg",
        },
        [_vm._v("\n                Sign Up\n              ")]
      ),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted font-weight-bold font-size-h4" }, [
        _vm._v(
          "\n                Enter your details to create your account\n              "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { staticClass: "checkbox mb-0" }, [
        _c("input", { attrs: { type: "checkbox", name: "agree" } }),
        _vm._v(" "),
        _c("span", { staticClass: "mr-2" }),
        _vm._v("\n                I Agree the\n                "),
        _c("a", { staticClass: "ml-2", attrs: { href: "#" } }, [
          _vm._v("terms and conditions"),
        ]),
        _vm._v(".\n              "),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pb-13 pt-lg-0 pt-5" }, [
      _c(
        "h3",
        {
          staticClass:
            "font-weight-bolder text-dark font-size-h4 font-size-h1-lg",
        },
        [_vm._v("\n                Forgotten Password ?\n              ")]
      ),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted font-weight-bold font-size-h4" }, [
        _vm._v(
          "\n                Enter your email to reset your password\n              "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("input", {
        staticClass:
          "form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6",
        attrs: {
          type: "email",
          placeholder: "Email",
          name: "email",
          autocomplete: "off",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0",
      },
      [
        _c(
          "a",
          {
            staticClass: "text-primary font-weight-bolder font-size-h5",
            attrs: { href: "#" },
          },
          [_vm._v("Terms")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "text-primary ml-10 font-weight-bolder font-size-h5",
            attrs: { href: "#" },
          },
          [_vm._v("Plans")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "text-primary ml-10 font-weight-bolder font-size-h5",
            attrs: { href: "#" },
          },
          [_vm._v("Contact Us")]
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/auth/login_pages/Login-1.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/view/pages/auth/login_pages/Login-1.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_1_vue_vue_type_template_id_46011a81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login-1.vue?vue&type=template&id=46011a81& */ "./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=template&id=46011a81&");
/* harmony import */ var _Login_1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login-1.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_1_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login-1.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_1_vue_vue_type_template_id_46011a81___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_1_vue_vue_type_template_id_46011a81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/auth/login_pages/Login-1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login-1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_1_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login-1.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_1_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_1_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_1_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_1_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=template&id=46011a81&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=template&id=46011a81& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_1_vue_vue_type_template_id_46011a81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login-1.vue?vue&type=template&id=46011a81& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/auth/login_pages/Login-1.vue?vue&type=template&id=46011a81&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_1_vue_vue_type_template_id_46011a81___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_1_vue_vue_type_template_id_46011a81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);