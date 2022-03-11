(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_services_store_profile_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/profile.module */ "./resources/js/src/core/services/store/profile.module.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AccountInformation",
  data: function data() {
    return {
      time_zones: ["(GMT-11:00) International Date Line West", "(GMT-11:00) Midway Island", "(GMT-11:00) Samoa", "(GMT-10:00) Hawaii", "(GMT-08:00) Alaska", "(GMT-07:00) Pacific Time (US & Canada)", "(GMT-07:00) Tijuana", "(GMT-07:00) Arizona", "(GMT-06:00) Mountain Time (US & Canada)", "(GMT-06:00) Chihuahua", "(GMT-06:00) Mazatlan", "(GMT-06:00) Saskatchewan", "(GMT-06:00) Central America", "(GMT-05:00) Central Time (US & Canada)", "(GMT-05:00) Guadalajara", "(GMT-05:00) Mexico City", "(GMT-05:00) Monterrey", "(GMT-05:00) Bogota", "(GMT-05:00) Lima", "(GMT-05:00) Quito", "(GMT-04:00) Eastern Time (US & Canada)", "(GMT-04:00) Indiana (East)", "(GMT-04:00) Caracas", "(GMT-04:00) La Paz", "(GMT-04:00) Georgetown", "(GMT-03:00) Atlantic Time (Canada)", "(GMT-03:00) Santiago", "(GMT-03:00) Brasilia", "(GMT-03:00) Buenos Aires", "(GMT-02:30) Newfoundland", "(GMT-02:00) Greenland", "(GMT-02:00) Mid-Atlantic", "(GMT-01:00) Cape Verde Is.", "(GMT) Azores", "(GMT) Monrovia", "(GMT) UTC", "(GMT+01:00) Dublin", "(GMT+01:00) Edinburgh", "(GMT+01:00) Lisbon", "(GMT+01:00) London", "(GMT+01:00) Casablanca", "(GMT+01:00) West Central Africa", "(GMT+02:00) Belgrade", "(GMT+02:00) Bratislava", "(GMT+02:00) Budapest", "(GMT+02:00) Ljubljana", "(GMT+02:00) Prague", "(GMT+02:00) Sarajevo", "(GMT+02:00) Skopje", "(GMT+02:00) Warsaw", "(GMT+02:00) Zagreb", "(GMT+02:00) Brussels", "(GMT+02:00) Copenhagen", "(GMT+02:00) Madrid", "(GMT+02:00) Paris", "(GMT+02:00) Amsterdam", "(GMT+02:00) Berlin", "(GMT+02:00) Bern", "(GMT+02:00) Rome", "(GMT+02:00) Stockholm", "(GMT+02:00) Vienna", "(GMT+02:00) Cairo", "(GMT+02:00) Harare", "(GMT+02:00) Pretoria", "(GMT+03:00) Bucharest", "(GMT+03:00) Helsinki", "(GMT+03:00) Kiev", "(GMT+03:00) Kyiv", "(GMT+03:00) Riga", "(GMT+03:00) Sofia", "(GMT+03:00) Tallinn", "(GMT+03:00) Vilnius", "(GMT+03:00) Athens", "(GMT+03:00) Istanbul", "(GMT+03:00) Minsk", "(GMT+03:00) Jerusalem", "(GMT+03:00) Moscow", "(GMT+03:00) St. Petersburg", "(GMT+03:00) Volgograd", "(GMT+03:00) Kuwait", "(GMT+03:00) Riyadh", "(GMT+03:00) Nairobi", "(GMT+03:00) Baghdad", "(GMT+04:00) Abu Dhabi", "(GMT+04:00) Muscat", "(GMT+04:00) Baku", "(GMT+04:00) Tbilisi", "(GMT+04:00) Yerevan", "(GMT+04:30) Tehran", "(GMT+04:30) Kabul", "(GMT+05:00) Ekaterinburg", "(GMT+05:00) Islamabad", "(GMT+05:00) Karachi", "(GMT+05:00) Tashkent", "(GMT+05:30) Chennai", "(GMT+05:30) Kolkata", "(GMT+05:30) Mumbai", "(GMT+05:30) New Delhi", "(GMT+05:30) Sri Jayawardenepura", "(GMT+05:45) Kathmandu", "(GMT+06:00) Astana", "(GMT+06:00) Dhaka", "(GMT+06:00) Almaty", "(GMT+06:00) Urumqi", "(GMT+06:30) Rangoon", "(GMT+07:00) Novosibirsk", "(GMT+07:00) Bangkok", "(GMT+07:00) Hanoi", "(GMT+07:00) Jakarta", "(GMT+07:00) Krasnoyarsk", "(GMT+08:00) Beijing", "(GMT+08:00) Chongqing", "(GMT+08:00) Hong Kong", "(GMT+08:00) Kuala Lumpur", "(GMT+08:00) Singapore", "(GMT+08:00) Taipei", "(GMT+08:00) Perth", "(GMT+08:00) Irkutsk", "(GMT+08:00) Ulaan Bataar", "(GMT+09:00) Seoul", "(GMT+09:00) Osaka", "(GMT+09:00) Sapporo", "(GMT+09:00) Tokyo", "(GMT+09:00) Yakutsk", "(GMT+09:30) Darwin", "(GMT+09:30) Adelaide", "(GMT+10:00) Canberra", "(GMT+10:00) Melbourne", "(GMT+10:00) Sydney", "(GMT+10:00) Brisbane", "(GMT+10:00) Hobart", "(GMT+10:00) Vladivostok", "(GMT+10:00) Guam", "(GMT+10:00) Port Moresby", "(GMT+10:00) Solomon Is.", "(GMT+11:00) Magadan", "(GMT+11:00) New Caledonia", "(GMT+12:00) Fiji", "(GMT+12:00) Kamchatka", "(GMT+12:00) Marshall Is.", "(GMT+12:00) Auckland", "(GMT+12:00) Wellington", "(GMT+13:00) Nuku'alofa"],
      languages: ["Bahasa Indonesia - Indonesian", "Bahasa Melayu - Malay", "Català - Catalan", "Čeština - Czech", "Dansk - Danish", "Deutsch - German", "English", "English UK - British English", "Español - Spanish", "Euskara - Basque (beta)", "Filipino", "Français - French", "Gaeilge - Irish (beta)", "Galego - Galician (beta)", "Hrvatski - Croatian", "Italiano - Italian", "Magyar - Hungarian", "Nederlands - Dutch", "Norsk - Norwegian", "Polski - Polish", "Português - Portuguese", "Română - Romanian", "Slovenčina - Slovak", "Suomi - Finnish", "Svenska - Swedish", "Tiếng Việt - Vietnamese", "Türkçe - Turkish", "Ελληνικά - Greek", "Български език - Bulgarian", "Русский - Russian", "Српски - Serbian", "Українська мова - Ukrainian", "עִבְרִית - Hebrew", "اردو - Urdu (beta)", "العربية - Arabic", "فارسی - Persian", "मराठी - Marathi", "हिन्दी - Hindi", "বাংলা - Bangla", "ગુજરાતી - Gujarati", "தமிழ் - Tamil", "ಕನ್ನಡ - Kannada", "ภาษาไทย - Thai", "한국어 - Korean", "日本語 - Japanese", "简体中文 - Simplified Chinese", "繁體中文 - Traditional Chinese"]
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      var username = this.$refs.username.value;
      var email = this.$refs.email.value;
      var language = this.$refs.language.value;
      var time_zone = this.$refs.time_zone.value;
      var communication = {
        email: this.$refs.email_com.checked,
        sms: this.$refs.sms_com.checked,
        phone: this.$refs.phone_com.checked
      };
      var verification = this.$refs.verification.checked; // set spinner to submit button

      var submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right"); // dummy delay

      setTimeout(function () {
        // send update request
        _this.$store.dispatch(_core_services_store_profile_module__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ACCOUNT_INFO"], {
          username: username,
          email: email,
          language: language,
          time_zone: time_zone,
          communication: communication,
          verification: verification
        });

        submitButton.classList.remove("spinner", "spinner-light", "spinner-right");
      }, 2000);
    },
    cancel: function cancel() {
      this.$refs.username.value = this.currentUserAccountInfo.username;
      this.$refs.email.value = this.currentUserAccountInfo.email;
      this.$refs.language.value = this.currentUserAccountInfo.language;
      this.$refs.time_zone.value = this.currentUserAccountInfo.time_zone;
      this.$refs.email_com.checked = this.currentUserAccountInfo.communication.email;
      this.$refs.sms_com.checked = this.currentUserAccountInfo.communication.sms;
      this.$refs.phone_com.checked = this.currentUserAccountInfo.communication.phone;
      this.$refs.verification.checked = this.currentUserAccountInfo.verification;
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUserAccountInfo"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/auth.module */ "./resources/js/src/core/services/store/auth.module.js");
/* harmony import */ var _assets_js_components_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/js/components/util */ "./resources/js/src/assets/js/components/util.js");
/* harmony import */ var _assets_plugins_formvalidation_dist_es6_core_Core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/plugins/formvalidation/dist/es6/core/Core */ "./resources/js/src/assets/plugins/formvalidation/dist/es6/core/Core.js");
/* harmony import */ var _assets_plugins_formvalidation_dist_es6_plugins_Trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/plugins/formvalidation/dist/es6/plugins/Trigger */ "./resources/js/src/assets/plugins/formvalidation/dist/es6/plugins/Trigger.js");
/* harmony import */ var _assets_plugins_formvalidation_dist_es6_plugins_Bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap */ "./resources/js/src/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap.js");
/* harmony import */ var _assets_plugins_formvalidation_dist_es6_plugins_SubmitButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton */ "./resources/js/src/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
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



 // FormValidation plugins





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ChangePassword",
  data: function data() {
    return {
      password: "",
      status: "",
      valid: true
    };
  },
  mounted: function mounted() {
    var password_change_form = _assets_js_components_util__WEBPACK_IMPORTED_MODULE_2__["default"].getById("kt_password_change_form");
    var curr_password = this.currentUser.password;
    this.fv = Object(_assets_plugins_formvalidation_dist_es6_core_Core__WEBPACK_IMPORTED_MODULE_3__["default"])(password_change_form, {
      fields: {
        current_password: {
          validators: {
            notEmpty: {
              message: "Current password is required"
            },
            identical: {
              compare: function compare() {
                return curr_password;
              },
              message: "Wrong password"
            }
          }
        },
        new_password: {
          validators: {
            notEmpty: {
              message: "New password is required"
            }
          }
        },
        verify_password: {
          validators: {
            notEmpty: {
              message: "Confirm password is required"
            },
            identical: {
              compare: function compare() {
                return password_change_form.querySelector('[name="new_password"]').value;
              },
              message: "The password and its confirm are not the same"
            }
          }
        }
      },
      plugins: {
        trigger: new _assets_plugins_formvalidation_dist_es6_plugins_Trigger__WEBPACK_IMPORTED_MODULE_4__["default"](),
        bootstrap: new _assets_plugins_formvalidation_dist_es6_plugins_Bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"](),
        submitButton: new _assets_plugins_formvalidation_dist_es6_plugins_SubmitButton__WEBPACK_IMPORTED_MODULE_6__["default"]()
      }
    });
  },
  methods: {
    save: function save() {
      var _this = this;

      this.fv.validate();
      this.fv.on("core.form.valid", function () {
        var password = _this.$refs.new_password.value;
        var submitButton = _this.$refs["kt_save_changes"]; // set spinner to submit button

        submitButton.classList.add("spinner", "spinner-light", "spinner-right"); // dummy delay

        setTimeout(function () {
          // send update request
          _this.$store.dispatch(_core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PASSWORD"], {
            password: password
          }) // go to which page after successfully update
          .then(function () {
            return _this.$router.push({
              name: "dashboard"
            });
          });

          submitButton.classList.remove("spinner", "spinner-light", "spinner-right");
        }, 2000);
      });
      this.fv.on("core.form.invalid", function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
          title: "",
          text: "Please, provide correct data!",
          icon: "error",
          confirmButtonClass: "btn btn-secondary"
        });
      });
    },
    cancel: function cancel() {
      this.fv.resetForm();
      this.$refs.current_password.value = "";
      this.$refs.new_password.value = "";
      this.$refs.verify_password.value = "";
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUser"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "EmailSettings"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_services_store_profile_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/profile.module */ "./resources/js/src/core/services/store/profile.module.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PersonalInformation",
  data: function data() {
    return {
      default_photo: "media/users/blank.png",
      current_photo: null
    };
  },
  mounted: function mounted() {
    this.current_photo = this.currentUserPersonalInfo.photo;
  },
  methods: {
    save: function save() {
      var _this = this;

      var name = this.$refs.name.value;
      var surname = this.$refs.surname.value;
      var company_name = this.$refs.company_name.value;
      var phone = this.$refs.phone.value;
      var email = this.$refs.email.value;
      var company_site = this.$refs.company_site.value;
      var photo = this.photo; // set spinner to submit button

      var submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right"); // dummy delay

      setTimeout(function () {
        // send update request
        _this.$store.dispatch(_core_services_store_profile_module__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PERSONAL_INFO"], {
          name: name,
          surname: surname,
          company_name: company_name,
          phone: phone,
          email: email,
          company_site: company_site,
          photo: photo
        });

        submitButton.classList.remove("spinner", "spinner-light", "spinner-right");
      }, 2000);
    },
    cancel: function cancel() {
      this.$refs.name.value = this.currentUserPersonalInfo.name;
      this.$refs.surname.value = this.currentUserPersonalInfo.surname;
      this.$refs.company_name.value = this.currentUserPersonalInfo.company_name;
      this.$refs.phone.value = this.currentUserPersonalInfo.phone;
      this.$refs.email.value = this.currentUserPersonalInfo.email;
      this.$refs.company_site.value = this.currentUserPersonalInfo.company_site;
      this.current_photo = this.currentUserPersonalInfo.photo;
    },
    onFileChange: function onFileChange(e) {
      var _this2 = this;

      var file = e.target.files[0];

      if (typeof FileReader === "function") {
        var reader = new FileReader();

        reader.onload = function (event) {
          _this2.current_photo = event.target.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUserPersonalInfo"])), {}, {
    photo: function photo() {
      return this.current_photo == null ? this.default_photo : this.current_photo;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue?vue&type=template&id=6a47c6a9&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue?vue&type=template&id=6a47c6a9& ***!
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
  return _c("div", { staticClass: "card card-custom" }, [
    _c("div", { staticClass: "card-header py-3" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-toolbar" }, [
        _c(
          "button",
          {
            ref: "kt_save_changes",
            staticClass: "btn btn-success mr-2",
            attrs: { type: "reset" },
            on: {
              click: function ($event) {
                return _vm.save()
              },
            },
          },
          [_vm._v("\n        Save Changes\n      ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-secondary",
            attrs: { type: "reset" },
            on: {
              click: function ($event) {
                return _vm.cancel()
              },
            },
          },
          [_vm._v("\n        Cancel\n      ")]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("form", { staticClass: "form" }, [
      _c("div", { staticClass: "card-body" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
            _vm._v("Username"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
            _c(
              "div",
              {
                staticClass: "spinner spinner-sm spinner-success spinner-right",
              },
              [
                _c("input", {
                  ref: "username",
                  staticClass:
                    "form-control form-control-lg form-control-solid",
                  attrs: { type: "text" },
                  domProps: { value: _vm.currentUserAccountInfo.username },
                }),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
            _vm._v("Email Address"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
            _c(
              "div",
              { staticClass: "input-group input-group-lg input-group-solid" },
              [
                _vm._m(2),
                _vm._v(" "),
                _c("input", {
                  ref: "email",
                  staticClass:
                    "form-control form-control-lg form-control-solid",
                  attrs: { type: "text", placeholder: "Email" },
                  domProps: { value: _vm.currentUserAccountInfo.email },
                }),
              ]
            ),
            _vm._v(" "),
            _vm._m(3),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
            _vm._v("Language"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
            _c(
              "select",
              {
                ref: "language",
                staticClass: "form-control form-control-lg form-control-solid",
              },
              [
                _vm._l(_vm.languages, function (item, i) {
                  return [
                    _c(
                      "option",
                      {
                        key: i,
                        domProps: {
                          value: item,
                          selected:
                            _vm.currentUserAccountInfo.language == item
                              ? true
                              : false,
                        },
                      },
                      [_vm._v(_vm._s(item))]
                    ),
                  ]
                }),
              ],
              2
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
            _vm._v("Time Zone"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
            _c(
              "select",
              {
                ref: "time_zone",
                staticClass: "form-control form-control-lg form-control-solid",
              },
              [
                _vm._l(_vm.time_zones, function (item, i) {
                  return [
                    _c(
                      "option",
                      {
                        key: i,
                        domProps: {
                          value: item,
                          selected:
                            _vm.currentUserAccountInfo.time_zone == item
                              ? true
                              : false,
                        },
                      },
                      [_vm._v(_vm._s(item))]
                    ),
                  ]
                }),
              ],
              2
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row align-items-center" }, [
          _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
            _vm._v("Communication"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
            _c("div", { staticClass: "checkbox-inline" }, [
              _c("label", { staticClass: "checkbox" }, [
                _c("input", {
                  ref: "email_com",
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: _vm.currentUserAccountInfo.communication.email,
                  },
                }),
                _c("span"),
                _vm._v(" Email"),
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "checkbox" }, [
                _c("input", {
                  ref: "sms_com",
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: _vm.currentUserAccountInfo.communication.sms,
                  },
                }),
                _c("span"),
                _vm._v(" SMS"),
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "checkbox" }, [
                _c("input", {
                  ref: "phone_com",
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: _vm.currentUserAccountInfo.communication.phone,
                  },
                }),
                _c("span"),
                _vm._v(" Phone"),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "separator separator-dashed my-5" }),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _vm._m(5),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
            _vm._v("Password reset verification"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
            _c("div", { staticClass: "checkbox-single" }, [
              _c("label", { staticClass: "checkbox m-0" }, [
                _c("input", {
                  ref: "verification",
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: _vm.currentUserAccountInfo.verification,
                  },
                }),
                _c("span"),
                _vm._v(
                  " Require personal information to reset your\n              password."
                ),
              ]),
            ]),
            _vm._v(" "),
            _vm._m(6),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-light-danger font-weight-bold btn-sm",
                attrs: { type: "button" },
              },
              [_vm._v("\n            Deactivate your account ?\n          ")]
            ),
          ]),
        ]),
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
      "div",
      { staticClass: "card-title align-items-start flex-column" },
      [
        _c("h3", { staticClass: "card-label font-weight-bolder text-dark" }, [
          _vm._v("\n        Account Information\n      "),
        ]),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "text-muted font-weight-bold font-size-sm mt-1" },
          [_vm._v("Change your account settings")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("label", { staticClass: "col-xl-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
        _c("h5", { staticClass: "font-weight-bold mb-6" }, [
          _vm._v("Account:"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "la la-at" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "form-text text-muted" }, [
      _vm._v("Email will not be publicly displayed.\n            "),
      _c("a", { staticClass: "kt-link", attrs: { href: "#" } }, [
        _vm._v("Learn more"),
      ]),
      _vm._v("."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("label", { staticClass: "col-xl-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
        _c("h5", { staticClass: "font-weight-bold mb-6" }, [
          _vm._v("Security:"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
        _vm._v("Login verification"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-light-primary font-weight-bold btn-sm",
            attrs: { type: "button" },
          },
          [_vm._v("\n            Setup login verification\n          ")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "form-text text-muted pt-2" }, [
          _vm._v(
            "\n            After you log in, you will be asked for additional information to\n            confirm your identity and protect your account from being\n            compromised. "
          ),
          _c("a", { staticClass: "font-weight-bold", attrs: { href: "#" } }, [
            _vm._v("Learn more"),
          ]),
          _vm._v(".\n          "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "form-text text-muted py-2" }, [
      _vm._v(
        "\n            For extra security, this requires you to confirm your email or\n            phone number when you reset your password.\n            "
      ),
      _c("a", { staticClass: "font-weight-boldk", attrs: { href: "#" } }, [
        _vm._v("Learn more"),
      ]),
      _vm._v(".\n          "),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue?vue&type=template&id=64b96755&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue?vue&type=template&id=64b96755& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card card-custom" }, [
    _c("div", { staticClass: "card-header py-3" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-toolbar" }, [
        _c(
          "button",
          {
            ref: "kt_save_changes",
            staticClass: "btn btn-success mr-2",
            attrs: { type: "submit" },
            on: {
              click: function ($event) {
                return _vm.save()
              },
            },
          },
          [_vm._v("\n        Save Changes\n      ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-secondary",
            attrs: { type: "reset" },
            on: {
              click: function ($event) {
                return _vm.cancel()
              },
            },
          },
          [_vm._v("\n        Cancel\n      ")]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "form",
      { staticClass: "form", attrs: { id: "kt_password_change_form" } },
      [
        _c("div", { staticClass: "card-body" }, [
          _c(
            "div",
            {
              staticClass:
                "alert alert-custom alert-light-danger fade show mb-10",
              attrs: { role: "alert" },
            },
            [
              _c("div", { staticClass: "alert-icon" }, [
                _c(
                  "span",
                  { staticClass: "svg-icon svg-icon-3x svg-icon-danger" },
                  [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          width: "24px",
                          height: "24px",
                          viewBox: "0 0 24 24",
                          version: "1.1",
                        },
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd",
                            },
                          },
                          [
                            _c("rect", {
                              attrs: {
                                x: "0",
                                y: "0",
                                width: "24",
                                height: "24",
                              },
                            }),
                            _vm._v(" "),
                            _c("circle", {
                              attrs: {
                                fill: "#000000",
                                opacity: "0.3",
                                cx: "12",
                                cy: "12",
                                r: "10",
                              },
                            }),
                            _vm._v(" "),
                            _c("rect", {
                              attrs: {
                                fill: "#000000",
                                x: "11",
                                y: "10",
                                width: "2",
                                height: "7",
                                rx: "1",
                              },
                            }),
                            _vm._v(" "),
                            _c("rect", {
                              attrs: {
                                fill: "#000000",
                                x: "11",
                                y: "7",
                                width: "2",
                                height: "2",
                                rx: "1",
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              { staticClass: "col-xl-3 col-lg-3 col-form-label text-alert" },
              [_vm._v("Current Password")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
              _c("input", {
                ref: "current_password",
                staticClass:
                  "form-control form-control-lg form-control-solid mb-2",
                attrs: {
                  type: "password",
                  value: "",
                  placeholder: "Current password",
                  name: "current_password",
                },
              }),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "text-sm font-weight-bold",
                  attrs: { href: "#" },
                },
                [_vm._v("Forgot password ?")]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              { staticClass: "col-xl-3 col-lg-3 col-form-label text-alert" },
              [_vm._v("New Password")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
              _c("input", {
                ref: "new_password",
                staticClass: "form-control form-control-lg form-control-solid",
                attrs: {
                  type: "password",
                  value: "",
                  placeholder: "New password",
                  name: "new_password",
                },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              { staticClass: "col-xl-3 col-lg-3 col-form-label text-alert" },
              [_vm._v("Verify Password")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
              _c("input", {
                ref: "verify_password",
                staticClass: "form-control form-control-lg form-control-solid",
                attrs: {
                  type: "password",
                  value: "",
                  placeholder: "Verify password",
                  name: "verify_password",
                },
              }),
            ]),
          ]),
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
      { staticClass: "card-title align-items-start flex-column" },
      [
        _c("h3", { staticClass: "card-label font-weight-bolder text-dark" }, [
          _vm._v("Change Password"),
        ]),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "text-muted font-weight-bold font-size-sm mt-1" },
          [_vm._v("Change your account password")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert-text font-weight-bold" }, [
      _vm._v(
        "\n          Configure user passwords to expire periodically. Users will need\n          warning that their passwords are going to expire, "
      ),
      _c("br"),
      _vm._v(
        "or they\n          might inadvertently get locked out of the system!\n        "
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert-close" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "alert",
            "aria-label": "Close",
          },
        },
        [
          _c("span", { attrs: { "aria-hidden": "true" } }, [
            _c("i", { staticClass: "ki ki-close" }),
          ]),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue?vue&type=template&id=6453ce36&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue?vue&type=template&id=6453ce36& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card card-custom" }, [
      _c("div", { staticClass: "card-header py-3" }, [
        _c("div", { staticClass: "card-title align-items-start flex-column" }, [
          _c("h3", { staticClass: "card-label font-weight-bolder text-dark" }, [
            _vm._v("Email Settings"),
          ]),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "text-muted font-weight-bold font-size-sm mt-1" },
            [_vm._v("Change your email settings")]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-toolbar" }, [
          _c(
            "button",
            { staticClass: "btn btn-success mr-2", attrs: { type: "reset" } },
            [_vm._v("Save Changes")]
          ),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-secondary", attrs: { type: "reset" } },
            [_vm._v("Cancel")]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("form", { staticClass: "form" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _c("label", { staticClass: "col-xl-3" }),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
              _c("h5", { staticClass: "font-weight-bold mb-6" }, [
                _vm._v("Setup Email Notification:"),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              { staticClass: "col-xl-3 col-lg-3 col-form-label text-right" },
              [_vm._v("Email Notification")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
              _c("span", { staticClass: "switch switch-sm" }, [
                _c("label", [
                  _c("input", {
                    attrs: {
                      type: "checkbox",
                      checked: "checked",
                      name: "email_notification_1",
                    },
                  }),
                  _vm._v(" "),
                  _c("span"),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              { staticClass: "col-xl-3 col-lg-3 col-form-label text-right" },
              [_vm._v("Send Copy To Personal Email")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
              _c("span", { staticClass: "switch switch-sm" }, [
                _c("label", [
                  _c("input", {
                    attrs: { type: "checkbox", name: "email_notification_2" },
                  }),
                  _vm._v(" "),
                  _c("span"),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "separator separator-dashed my-10" }),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("label", { staticClass: "col-xl-3" }),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
              _c("h5", { staticClass: "font-weight-bold mb-6" }, [
                _vm._v("Activity Related Emails:"),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              { staticClass: "col-xl-3 col-lg-3 col-form-label text-right" },
              [_vm._v("When To Email")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
              _c("div", { staticClass: "checkbox-list" }, [
                _c("label", { staticClass: "checkbox" }, [
                  _c("input", { attrs: { type: "checkbox" } }),
                  _vm._v(" "),
                  _c("span"),
                  _vm._v(" You have new notifications.\n            "),
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox" }, [
                  _c("input", { attrs: { type: "checkbox" } }),
                  _vm._v(" "),
                  _c("span"),
                  _vm._v(" You're sent a direct message\n            "),
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox" }, [
                  _c("input", {
                    attrs: { type: "checkbox", checked: "checked" },
                  }),
                  _vm._v(" "),
                  _c("span"),
                  _vm._v(" Someone adds you as a connection\n            "),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              { staticClass: "col-xl-3 col-lg-3 col-form-label text-right" },
              [_vm._v("When To Escalate Emails")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
              _c("div", { staticClass: "checkbox-list" }, [
                _c("label", { staticClass: "checkbox checkbox-primary" }, [
                  _c("input", { attrs: { type: "checkbox" } }),
                  _vm._v(" "),
                  _c("span"),
                  _vm._v(" Upon new order.\n            "),
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox checkbox-primary" }, [
                  _c("input", { attrs: { type: "checkbox" } }),
                  _vm._v(" "),
                  _c("span"),
                  _vm._v(" New membership approval\n            "),
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox checkbox-primary" }, [
                  _c("input", {
                    attrs: { type: "checkbox", checked: "checked" },
                  }),
                  _vm._v(" "),
                  _c("span"),
                  _vm._v(" Member registration\n            "),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "separator separator-dashed my-10" }),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("label", { staticClass: "col-xl-3" }),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
              _c("h5", { staticClass: "font-weight-bold mb-6" }, [
                _vm._v("Updates From Keenthemes:"),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              { staticClass: "col-xl-3 col-lg-3 col-form-label text-right" },
              [_vm._v("Email You With")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
              _c("div", { staticClass: "checkbox-list" }, [
                _c("label", { staticClass: "checkbox" }, [
                  _c("input", { attrs: { type: "checkbox" } }),
                  _vm._v(" "),
                  _c("span"),
                  _vm._v(
                    " News about Keenthemes products and feature updates\n            "
                  ),
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox" }, [
                  _c("input", { attrs: { type: "checkbox" } }),
                  _vm._v(" "),
                  _c("span"),
                  _vm._v(" Tips on getting more out of Keen\n            "),
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox" }, [
                  _c("input", {
                    attrs: { type: "checkbox", checked: "checked" },
                  }),
                  _vm._v(" "),
                  _c("span"),
                  _vm._v(
                    " Things you missed since you last logged into Keen\n            "
                  ),
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox" }, [
                  _c("input", {
                    attrs: { type: "checkbox", checked: "checked" },
                  }),
                  _vm._v(" "),
                  _c("span"),
                  _vm._v(
                    " News about Metronic on partner products and other\n              services\n            "
                  ),
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox" }, [
                  _c("input", {
                    attrs: { type: "checkbox", checked: "checked" },
                  }),
                  _vm._v(" "),
                  _c("span"),
                  _vm._v(" Tips on Metronic business products\n            "),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue?vue&type=template&id=4b90a25c&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue?vue&type=template&id=4b90a25c& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card card-custom" }, [
    _c("div", { staticClass: "card-header py-3" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-toolbar" }, [
        _c(
          "button",
          {
            ref: "kt_save_changes",
            staticClass: "btn btn-success mr-2",
            attrs: { type: "reset" },
            on: {
              click: function ($event) {
                return _vm.save()
              },
            },
          },
          [_vm._v("\n        Save Changes\n      ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-secondary",
            attrs: { type: "reset" },
            on: {
              click: function ($event) {
                return _vm.cancel()
              },
            },
          },
          [_vm._v("\n        Cancel\n      ")]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("form", { staticClass: "form" }, [
      _c("div", { staticClass: "card-body" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-xl-3 col-lg-3 col-form-label text-right" },
            [_vm._v("Avatar")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
            _c(
              "div",
              {
                staticClass: "image-input image-input-outline",
                attrs: { id: "kt_profile_avatar" },
              },
              [
                _c("div", {
                  staticClass: "image-input-wrapper",
                  style: { backgroundImage: "url(" + _vm.photo + ")" },
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass:
                      "btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow",
                    attrs: {
                      "data-action": "change",
                      "data-toggle": "tooltip",
                      title: "",
                      "data-original-title": "Change avatar",
                    },
                  },
                  [
                    _c("i", { staticClass: "fa fa-pen icon-sm text-muted" }),
                    _vm._v(" "),
                    _c("input", {
                      attrs: {
                        type: "file",
                        name: "profile_avatar",
                        accept: ".png, .jpg, .jpeg",
                      },
                      on: {
                        change: function ($event) {
                          return _vm.onFileChange($event)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      attrs: { type: "hidden", name: "profile_avatar_remove" },
                    }),
                  ]
                ),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow",
                    attrs: {
                      "data-action": "remove",
                      "data-toggle": "tooltip",
                      title: "Remove avatar",
                    },
                    on: {
                      click: function ($event) {
                        _vm.current_photo = null
                      },
                    },
                  },
                  [
                    _c("i", {
                      staticClass: "ki ki-bold-close icon-xs text-muted",
                    }),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "form-text text-muted" }, [
              _vm._v("Allowed file types: png, jpg, jpeg."),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-xl-3 col-lg-3 col-form-label text-right" },
            [_vm._v("First Name")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
            _c("input", {
              ref: "name",
              staticClass: "form-control form-control-lg form-control-solid",
              attrs: { type: "text" },
              domProps: { value: _vm.currentUserPersonalInfo.name },
            }),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-xl-3 col-lg-3 col-form-label text-right" },
            [_vm._v("Last Name")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
            _c("input", {
              ref: "surname",
              staticClass: "form-control form-control-lg form-control-solid",
              attrs: { type: "text" },
              domProps: { value: _vm.currentUserPersonalInfo.surname },
            }),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-xl-3 col-lg-3 col-form-label text-right" },
            [_vm._v("Company Name")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
            _c("input", {
              ref: "company_name",
              staticClass: "form-control form-control-lg form-control-solid",
              attrs: { type: "text" },
              domProps: { value: _vm.currentUserPersonalInfo.company_name },
            }),
            _vm._v(" "),
            _c("span", { staticClass: "form-text text-muted" }, [
              _vm._v(
                "If you want your invoices addressed to a company. Leave blank to\n            use your full name."
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-xl-3 col-lg-3 col-form-label text-right" },
            [_vm._v("Contact Phone")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
            _c(
              "div",
              { staticClass: "input-group input-group-lg input-group-solid" },
              [
                _vm._m(4),
                _vm._v(" "),
                _c("input", {
                  ref: "phone",
                  staticClass:
                    "form-control form-control-lg form-control-solid",
                  attrs: { type: "text", placeholder: "Phone" },
                  domProps: { value: _vm.currentUserPersonalInfo.phone },
                }),
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "form-text text-muted" }, [
              _vm._v("We'll never share your email with anyone else."),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-xl-3 col-lg-3 col-form-label text-right" },
            [_vm._v("Email Address")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
            _c(
              "div",
              { staticClass: "input-group input-group-lg input-group-solid" },
              [
                _vm._m(5),
                _vm._v(" "),
                _c("input", {
                  ref: "email",
                  staticClass:
                    "form-control form-control-lg form-control-solid",
                  attrs: { type: "text", placeholder: "Email" },
                  domProps: { value: _vm.currentUserPersonalInfo.email },
                }),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-xl-3 col-lg-3 col-form-label text-right" },
            [_vm._v("Company Site")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
            _c(
              "div",
              { staticClass: "input-group input-group-lg input-group-solid" },
              [
                _c("input", {
                  ref: "company_site",
                  staticClass:
                    "form-control form-control-lg form-control-solid",
                  attrs: { type: "text", placeholder: "Username" },
                  domProps: { value: _vm.currentUserPersonalInfo.company_site },
                }),
                _vm._v(" "),
                _vm._m(6),
              ]
            ),
          ]),
        ]),
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
      "div",
      { staticClass: "card-title align-items-start flex-column" },
      [
        _c("h3", { staticClass: "card-label font-weight-bolder text-dark" }, [
          _vm._v("\n        Personal Information\n      "),
        ]),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "text-muted font-weight-bold font-size-sm mt-1" },
          [_vm._v("Update your personal informaiton")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("label", { staticClass: "col-xl-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
        _c("h5", { staticClass: "font-weight-bold mb-6" }, [
          _vm._v("Customer Info"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass:
          "btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow",
        attrs: {
          "data-action": "cancel",
          "data-toggle": "tooltip",
          title: "Cancel avatar",
        },
      },
      [_c("i", { staticClass: "ki ki-bold-close icon-xs text-muted" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("label", { staticClass: "col-xl-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9 col-xl-6" }, [
        _c("h5", { staticClass: "font-weight-bold mt-10 mb-6" }, [
          _vm._v("Contact Info"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "la la-phone" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "la la-at" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v(".com")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountInformation_vue_vue_type_template_id_6a47c6a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountInformation.vue?vue&type=template&id=6a47c6a9& */ "./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue?vue&type=template&id=6a47c6a9&");
/* harmony import */ var _AccountInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountInformation.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountInformation_vue_vue_type_template_id_6a47c6a9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountInformation_vue_vue_type_template_id_6a47c6a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue?vue&type=template&id=6a47c6a9&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue?vue&type=template&id=6a47c6a9& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountInformation_vue_vue_type_template_id_6a47c6a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountInformation.vue?vue&type=template&id=6a47c6a9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/AccountInformation.vue?vue&type=template&id=6a47c6a9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountInformation_vue_vue_type_template_id_6a47c6a9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountInformation_vue_vue_type_template_id_6a47c6a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword_vue_vue_type_template_id_64b96755___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=template&id=64b96755& */ "./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue?vue&type=template&id=64b96755&");
/* harmony import */ var _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangePassword_vue_vue_type_template_id_64b96755___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangePassword_vue_vue_type_template_id_64b96755___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue?vue&type=template&id=64b96755&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue?vue&type=template&id=64b96755& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_64b96755___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=template&id=64b96755& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/ChangePassword.vue?vue&type=template&id=64b96755&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_64b96755___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_64b96755___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailSettings_vue_vue_type_template_id_6453ce36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailSettings.vue?vue&type=template&id=6453ce36& */ "./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue?vue&type=template&id=6453ce36&");
/* harmony import */ var _EmailSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailSettings.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailSettings_vue_vue_type_template_id_6453ce36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailSettings_vue_vue_type_template_id_6453ce36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue?vue&type=template&id=6453ce36&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue?vue&type=template&id=6453ce36& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSettings_vue_vue_type_template_id_6453ce36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailSettings.vue?vue&type=template&id=6453ce36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/EmailSettings.vue?vue&type=template&id=6453ce36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSettings_vue_vue_type_template_id_6453ce36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSettings_vue_vue_type_template_id_6453ce36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PersonalInformation_vue_vue_type_template_id_4b90a25c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonalInformation.vue?vue&type=template&id=4b90a25c& */ "./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue?vue&type=template&id=4b90a25c&");
/* harmony import */ var _PersonalInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonalInformation.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PersonalInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonalInformation_vue_vue_type_template_id_4b90a25c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PersonalInformation_vue_vue_type_template_id_4b90a25c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue?vue&type=template&id=4b90a25c&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue?vue&type=template&id=4b90a25c& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalInformation_vue_vue_type_template_id_4b90a25c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalInformation.vue?vue&type=template&id=4b90a25c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/profile/profile-comp/PersonalInformation.vue?vue&type=template&id=4b90a25c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalInformation_vue_vue_type_template_id_4b90a25c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalInformation_vue_vue_type_template_id_4b90a25c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);