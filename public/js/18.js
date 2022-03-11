(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Comment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/Comment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_quill_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-quill-editor */ "./node_modules/vue2-quill-editor/dist/index.js");
/* harmony import */ var vue2_quill_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_quill_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/services/api.service */ "./resources/js/src/core/services/api.service.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_layout_extended_quick_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/js/layout/extended/quick-panel */ "./resources/js/src/assets/js/layout/extended/quick-panel.js");
/* harmony import */ var _pages_vue_bootstrap_Button_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/vue-bootstrap/Button.vue */ "./resources/js/src/view/pages/vue-bootstrap/Button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
  document.getElementById("contextMenu").style.display = "none";
}

function rightClick(e) {
  e.preventDefault();

  if (document.getElementById("contextMenu").style.display == "inline-block") {
    hideMenu();
  } else {
    var menu = document.getElementById("contextMenu");
    menu.style.display = "inline-block"; // console.log(e.pageX);

    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
    e.clientY;
  }
}




 // import KTQuickPanel from '../layout/extras/offcanvas/QuickPanel.vue'



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueEditor: vue2_quill_editor__WEBPACK_IMPORTED_MODULE_1__["VueEditor"],
    Button: _pages_vue_bootstrap_Button_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  name: "comments",
  data: function data() {
    return {
      tabIndex: 0,
      Article: {},
      comment2: {},
      c: {},
      metaData: [],
      key: "",
      content2: "",
      content: "",
      start: "",
      end: "",
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
      select: "",
      quill2: "",
      oldDelta: "",
      customToolbar: [// [{ 'font': fonts }],
      // [{ 'header': 1 }, { 'header': 2 }],
      [{
        header: [1, 2, 3, 4, 5, 6, false]
      }], [{
        size: ["small", false, "large", "huge"]
      }], ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"], [{
        list: "ordered"
      }, {
        list: "bullet"
      }], // [{ 'script': 'sub'}, { 'script': 'super' }],
      // [{ 'indent': '-1'}, { 'indent': '+1' }],
      // [{ 'direction': 'rtl' }],
      [{
        color: []
      }, {
        background: ["black"]
      }], [{
        align: ""
      }, {
        align: "right"
      }, {
        align: "center"
      }, {
        align: "justify"
      }], ["image", "video"], ["clean"], ["fullscreen"]]
    };
  },
  mounted: function mounted() {
    this.test();
    _assets_js_layout_extended_quick_panel__WEBPACK_IMPORTED_MODULE_4__["default"].init(this.$refs["kt_quick_panel"]);
    this.getcomment();
    this.quill();
    Toast.fire({
      icon: "success",
      title: "Data Cleaned Successfully"
    }); //  this.get();
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
    },
    Counter: function Counter() {
      var source = this.quill2.root.innerHTML.replace(/(<([^>]+)>)/gi, "");
      console.log("Number of words: " + source.match(/(\w+)/g).length);
    },
    test: function test() {
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["default"].post("api/turncate").then(function (res) {
        console.log(res.data);
      });
    },
    comment: function comment() {
      var hello = this.content2.replace(/(<([^>]+)>)/gi, "");
    },
    getcomment: function getcomment() {
      var _this = this;

      _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["default"].get("http://localhost:8000/api/c").then(function (res) {
        _this.comment2 = res.data;
      });
    },
    quill: function quill() {
      this.quill2 = new quill__WEBPACK_IMPORTED_MODULE_0___default.a("#word", {
        debug: "warn",
        placeholder: "Compose an epic...",
        formula: true,
        syntax: {
          highlight: function highlight(text) {
            return highlight_js__WEBPACK_IMPORTED_MODULE_3___default.a.highlightAuto(text).value;
          }
        },
        history: {
          // Enable with custom configurations
          delay: 2500,
          userOnly: true
        },
        modules: {
          toolbar: this.customToolbar
        },
        theme: "snow"
      });
      this.quill2.focus();
      this.oldDelta = {
        ops: [{
          attributes: {
            color: "grey"
          },
          insert: "This is sample text."
        }]
      };
      this.quill2.setContents(this.oldDelta);
    },
    modal: function modal() {
      this.$refs["comment"].show();
      var source = this.quill2.root.innerHTML.replace(/(<([^>]+)>)/gi, "");
      console.log(source); // Number of words

      var numofWords = source.match(/(\w+)/g).length;
      console.log("Number of words: " + numofWords); // Number of Sentences

      var re = /[.!?]/;
      var numOfSentences = source.split(re);
      var actualNumOfSentence = numOfSentences.length - 1;
      console.log("Number of sentences: " + actualNumOfSentence); // Number of Syllables

      var source1 = source.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, ''); //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')

      source1 = source1.replace(/^y/, '');
      var numOfSyllables = source1.match(/[aeiouy]{1,2}/g).length;
      console.log("Number of Syllables: " + numOfSyllables); // ASL =  Average Sentence Length

      var asl = numofWords / actualNumOfSentence;
      console.log("Average sentence length: " + asl); // ASW = Average Number of Syllables per Word

      var asw = numOfSyllables / numofWords;
      console.log("Average number of syllables per word: " + asw); // RE = Readability Ease

      var RE = 206.835 - 1.015 * asl - 84.6 * asw;
      console.log("Readability ease: " + RE);
      var text = document.getElementById("word");

      if (window.getSelection) {
        text = window.getSelection().toString(); // console.log("text" + text);
      } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text; // console.log('keyword' + text);
      } // console.log(quill.getS);
      //  var prompt = window.prompt("Please enter Comment", "");


      var range = this.quill2.getSelection(); // console.log(range);
      // console.log(this.quill2.root.innerText);

      this.start = range.index;
      this.end = range.length; //   console.log(range.index);

      this.key = text;
      this.content = "";
    },
    addComment: function addComment() {
      var _this2 = this;

      var hello = this.content.replace(/(<([^>]+)>)/gi, "");
      var source = this.quill2.root.innerHTML.replace(/(<([^>]+)>)/gi, "");
      var form = new FormData();
      var content = {
        content: hello,
        keyword: this.key,
        source: source,
        start: this.start,
        end: this.end
      };
      form.append("json", JSON.stringify(content));
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:8000/api/comment/store", form).then(function (res) {
        _this2.$refs["comment"].hide();

        _this2.comment2.push = res.data;

        _this2.getcomment();
      });
    },
    reply: function reply(index) {
      var _this3 = this;

      var reply = document.getElementById("reply" + index);
      var id = document.getElementById("comment_id" + index);
      var form = new FormData();
      var data = {
        comment: reply.value,
        reply_id: id.value
      };
      form.append("data", JSON.stringify(data));
      console.log(data);
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["default"].post("/api/c/store", form).then(function (res) {
        _this3.c = res.data;

        _this3.getcomment(); // Comments.methods.get();

      });
    },
    editComment: function editComment(index) {
      if (document.getElementById("comment" + index).style.display = "none") {
        document.getElementById("comment" + index).style.display = "block";
      }
    },
    editInput: function editInput(index) {
      if (document.getElementById("gg" + index).style.display = "none") {
        document.getElementById("gg" + index).style.display = "block";
      }
    },
    updateComment: function updateComment(index) {
      var _this4 = this;

      var id = $("#comment-1" + index).val();
      var comment = $("#comment-2" + index).val(); // console.log($('#input-1'+index).val());

      var form = new FormData();
      var edit = {
        id: id,
        comment: comment
      };
      form.append("data", JSON.stringify(edit));
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:8000/api/c/update", form).then(function (res) {
        _this4.c = res.data;

        _this4.getcomment();

        document.getElementById("comment" + index).style.display = "none";
      });
    },
    updateReply: function updateReply(index) {
      var _this5 = this;

      var id = $("#input-1" + index).val();
      var comment = $("#input-2" + index).val(); // console.log($('#input-1'+index).val());

      var form = new FormData();
      var edit = {
        id: id,
        comment: comment
      };
      form.append("data", JSON.stringify(edit));
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:8000/api/c/update", form).then(function (res) {
        _this5.c = res.data;

        _this5.getcomment();

        document.getElementById("gg" + index).style.display = "none";
      });
    },
    deleteReply: function deleteReply(index) {
      var _this6 = this;

      var form = new FormData();
      var deleteReply = {
        id: index
      };
      form.append("delete", JSON.stringify(deleteReply));
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:8000/api/c/delete", form).then(function (res) {
        _this6.c = res.data;

        _this6.getcomment();
      }); // console.log(index);
    },
    deleteComment: function deleteComment(index) {
      var _this7 = this;

      var form = new FormData();
      var deleteComment = {
        id: index
      };
      form.append("delete", JSON.stringify(deleteComment));
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:8000/api/comm/delete", form).then(function (res) {
        _this7.c = res.data;

        _this7.getcomment();
      });
    },
    HighlightKeyword: function HighlightKeyword(index, lengthh, id) {
      console.log("Starting index is" + index);
      console.log("ending index is" + lengthh);
      var element = document.getElementById("kt_quick_panel").classList.remove("offcanvas-on");
      $(".offcanvas-overlay").remove();
      var text = this.quill2.getText(index, lengthh);
      console.log("User has highlighted: ", text);
      this.metaData.push({
        start: index,
        length: lengthh
      }); // console.log(this.metaData);

      this.quill2.formatText(index, lengthh, {
        background: "#fff72b"
      });
      var element = $("#anchor" + id).attr("data-index");
      console.log(element);
      document.getElementById("word").focus();
      console.log(this.metaData[element].start);
      this.quill2.setSelection(this.metaData[element].start, this.metaData[element].length); // document.getElementById("word").scrollBy(0,-250);
      // var dta = this.metaData;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Comment.vue?vue&type=style&index=0&id=c12b6eda&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/Comment.vue?vue&type=style&index=0&id=c12b6eda&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nul[data-v-c12b6eda] {\n  list-style: none;\n}\n.context-menu[data-v-c12b6eda] {\n  position: absolute;\n}\n.menu[data-v-c12b6eda] {\n  display: flex;\n  flex-direction: column;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  border: 1px solid lightgray;\n  color: black;\n  box-shadow: 0 10px 20px rgb(64 64 64 / 5%);\n  padding: 10px 0;\n\n  position: absolute;\n  /* display: none; */\n  z-index: 1000;\n}\n.menu > li > a[data-v-c12b6eda] {\n  font: inherit;\n  border: 0;\n  padding: 10px 30px 10px 15px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-left: 6px;\n  padding-right: 154px;\n  text-decoration: unset;\n  color: black;\n\n  font-weight: 500;\n  /* transition: 0.5s linear;\n  -webkit-transition: 0.5s linear;\n  -moz-transition: 0.5s linear;\n  -ms-transition: 0.5s linear;\n  -o-transition: 0.5s linear; */\n}\n.menu > li > a[data-v-c12b6eda]:hover {\n  background: lightgray;\n  color: black;\n  padding-right: 154px;\n}\n.menu > li > a > i[data-v-c12b6eda] {\n  padding-right: 10px;\n  color: grey !important;\n}\n.menu > li.trash > a[data-v-c12b6eda]:hover {\n  color: red;\n}\n.quillWrapper[data-v-c12b6eda] {\n  border: 2px solid black;\n  border-radius: 5px;\n  color: black !important;\n}\n.quillWrapper\n  .ql-toolbar.ql-snow\n  .ql-formats\n  .ql-size.ql-picker\n  .ql-picker-label[data-v-c12b6eda]::before {\n  color: black !important;\n}\nbody[data-v-c12b6eda] {\n  color: black !important;\n}\n/* .highlight{\n        background: yellow!important;\n    } */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Comment.vue?vue&type=style&index=0&id=c12b6eda&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/Comment.vue?vue&type=style&index=0&id=c12b6eda&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Comment.vue?vue&type=style&index=0&id=c12b6eda&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Comment.vue?vue&type=style&index=0&id=c12b6eda&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Comment.vue?vue&type=template&id=c12b6eda&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/view/pages/Comment.vue?vue&type=template&id=c12b6eda&scoped=true& ***!
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
  return _c("div", { attrs: { id: "app" } }, [
    _c("div", { staticClass: "topbar-item" }, [
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
                "\n          offcanvas-header offcanvas-header-navs\n          d-flex\n          align-items-center\n          justify-content-between\n          mb-5\n        ",
            },
            [
              _c(
                "ul",
                {
                  staticClass:
                    "\n            nav\n            nav-bold\n            nav-tabs\n            nav-tabs-line\n            nav-tabs-line-3x\n            nav-tabs-primary\n            flex-grow-1\n            px-10\n          ",
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
                      [_vm._v("\n              Comments\n            ")]
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
                      [_vm._v("\n              Add\n            ")]
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
                      [_vm._v("\n              Settings\n            ")]
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
                              staticStyle: { width: "40% !important" },
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
                              _vm._l(_vm.comment2.comment, function (item, i) {
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
                                            "padding-bottom": "5px !important",
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
                                                    _vm._s(item.keyword) +
                                                    "\n                          "
                                                ),
                                                _c(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "btn btn-info comments",
                                                    attrs: {
                                                      id: "anchor" + item.id,
                                                      "data-index": item.id - 1,
                                                    },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.HighlightKeyword(
                                                          item.start,
                                                          item.end,
                                                          item.id
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [_vm._v("View")]
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
                                                _vm._v(
                                                  "\n                          " +
                                                    _vm._s(item.comment) +
                                                    "\n                          "
                                                ),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c(
                                                  "a",
                                                  {
                                                    attrs: { href: "#" },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.editComment(
                                                          item.id
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [_vm._v("Edit")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "a",
                                                  {
                                                    attrs: { href: "#" },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.deleteComment(
                                                          item.id
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
                                                      id: "comment" + item.id,
                                                    },
                                                  },
                                                  [
                                                    _c("b-form-input", {
                                                      attrs: {
                                                        id:
                                                          "comment-1" + item.id,
                                                        hidden: "",
                                                        type: "text",
                                                        value: item.id,
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c("b-form-input", {
                                                      attrs: {
                                                        id:
                                                          "comment-2" + item.id,
                                                        type: "text",
                                                        placeholder:
                                                          "Enter Reply",
                                                        value: item.comment,
                                                      },
                                                      on: {
                                                        keyup: function (
                                                          $event
                                                        ) {
                                                          if (
                                                            !$event.type.indexOf(
                                                              "key"
                                                            ) &&
                                                            _vm._k(
                                                              $event.keyCode,
                                                              "enter",
                                                              13,
                                                              $event.key,
                                                              "Enter"
                                                            )
                                                          ) {
                                                            return null
                                                          }
                                                          return _vm.updateComment(
                                                            item.id
                                                          )
                                                        },
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("br"),
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
                                                            id:
                                                              "reply" + item.id,
                                                            placeholder:
                                                              "Enter the Reply",
                                                          },
                                                          on: {
                                                            keyup: function (
                                                              $event
                                                            ) {
                                                              if (
                                                                !$event.type.indexOf(
                                                                  "key"
                                                                ) &&
                                                                _vm._k(
                                                                  $event.keyCode,
                                                                  "enter",
                                                                  13,
                                                                  $event.key,
                                                                  "Enter"
                                                                )
                                                              ) {
                                                                return null
                                                              }
                                                              return _vm.reply(
                                                                item.id
                                                              )
                                                            },
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e(),
                                              ]),
                                              _vm._v(" "),
                                              _c("br"),
                                              _vm._v(" "),
                                              _vm._l(
                                                _vm.comment2.replies,
                                                function (item2, a) {
                                                  return _c(
                                                    "div",
                                                    {
                                                      key: a,
                                                      staticStyle: {
                                                        "margin-left": "20px",
                                                      },
                                                    },
                                                    [
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
                                                            _vm._v(" "),
                                                            _vm._v(
                                                              "\n                            " +
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
                                                                  click:
                                                                    function (
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
                                                              "\n                             \n                            "
                                                            ),
                                                            _c(
                                                              "a",
                                                              {
                                                                attrs: {
                                                                  href: "#",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
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
                                                                  display:
                                                                    "none",
                                                                },
                                                                attrs: {
                                                                  id:
                                                                    "gg" +
                                                                    item2.id,
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "b-form-input",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "input-1" +
                                                                        item2.id,
                                                                      hidden:
                                                                        "",
                                                                      type: "text",
                                                                      value:
                                                                        item2.id,
                                                                    },
                                                                  }
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "b-form-input",
                                                                  {
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
                                                                    on: {
                                                                      keyup:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          if (
                                                                            !$event.type.indexOf(
                                                                              "key"
                                                                            ) &&
                                                                            _vm._k(
                                                                              $event.keyCode,
                                                                              "enter",
                                                                              13,
                                                                              $event.key,
                                                                              "Enter"
                                                                            )
                                                                          ) {
                                                                            return null
                                                                          }
                                                                          return _vm.updateReply(
                                                                            item2.id
                                                                          )
                                                                        },
                                                                    },
                                                                  }
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c("br"),
                                                            _c("br"),
                                                          ])
                                                        : _vm._e(),
                                                    ]
                                                  )
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
                                                  "\n                            font-weight-normal\n                            text-dark-75 text-hover-primary\n                            font-size-lg\n                            mb-1\n                          ",
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
                                                    "\n                            " +
                                                      _vm._s(item.title) +
                                                      "\n                          "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "text-muted" },
                                                [
                                                  _vm._v(
                                                    "\n                            " +
                                                      _vm._s(item.desc) +
                                                      "\n                          "
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
                              _c(
                                "h5",
                                { staticClass: "font-weight-bold mb-3" },
                                [_vm._v("Customer Care")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group mb-0 row" },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "col-8 col-form-label" },
                                    [_vm._v("Enable Notifications:")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-4 text-right" },
                                    [
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
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group mb-0 row" },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "col-8 col-form-label" },
                                    [_vm._v("Enable Case Tracking:")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-4 text-right" },
                                    [
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
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group mb-0 row" },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "col-8 col-form-label" },
                                    [_vm._v("Support Portal:")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-4 text-right" },
                                    [
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
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "separator separator-dashed my-6",
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "pt-2" }, [
                              _c(
                                "h5",
                                { staticClass: "font-weight-bold mb-3" },
                                [_vm._v("Reports")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group mb-0 row" },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "col-8 col-form-label" },
                                    [_vm._v("Generate Reports:")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-4 text-right" },
                                    [
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
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group mb-0 row" },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "col-8 col-form-label" },
                                    [_vm._v("Enable Report Export:")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-4 text-right" },
                                    [
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
                                                name: "",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("span"),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group mb-0 row" },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "col-8 col-form-label" },
                                    [_vm._v("Allow Data Collection:")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-4 text-right" },
                                    [
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
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "separator separator-dashed my-6",
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "pt-2" }, [
                              _c(
                                "h5",
                                { staticClass: "font-weight-bold mb-3" },
                                [_vm._v("Memebers")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group mb-0 row" },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "col-8 col-form-label" },
                                    [_vm._v("Enable Member singup:")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-4 text-right" },
                                    [
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
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group mb-0 row" },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "col-8 col-form-label" },
                                    [_vm._v("Allow User Feedbacks:")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-4 text-right" },
                                    [
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
                                                name: "",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("span"),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group mb-0 row" },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "col-8 col-form-label" },
                                    [_vm._v("Enable Customer Portal:")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-4 text-right" },
                                    [
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
                                    ]
                                  ),
                                ]
                              ),
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
    ]),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { id: "modal" } },
      [
        _c(
          "b-modal",
          {
            ref: "comment",
            attrs: { id: "c", size: "lg", title: "Add Comment" },
          },
          [
            _c(
              "b-form",
              {
                attrs: { method: "POST" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.addComment.apply(null, arguments)
                  },
                },
              },
              [
                _c("b", { attrs: { id: "bold" } }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.key,
                        expression: "key",
                      },
                    ],
                    attrs: { id: "dev", type: "text", hidden: "", value: "" },
                    domProps: { value: _vm.key },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.key = $event.target.value
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.start,
                      expression: "start",
                    },
                  ],
                  attrs: { type: "text", hidden: "", value: "" },
                  domProps: { value: _vm.start },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.start = $event.target.value
                    },
                  },
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.end,
                      expression: "end",
                    },
                  ],
                  attrs: { type: "text", hidden: "", value: "" },
                  domProps: { value: _vm.end },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.end = $event.target.value
                    },
                  },
                }),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-1",
                      label: "Comment:",
                      "label-for": "input-1",
                    },
                  },
                  [
                    _c("b-form-textarea", {
                      attrs: {
                        id: "textarea-default",
                        size: "lg",
                        placeholder: "Enter Comment",
                        required: "",
                      },
                      model: {
                        value: _vm.content,
                        callback: function ($$v) {
                          _vm.content = $$v
                        },
                        expression: "content",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { attrs: { type: "submit", variant: "primary" } },
                  [_vm._v("Add")]
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
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticStyle: { "background-color": "white", cursor: "pointer" } },
      [
        _c(
          "div",
          {
            staticClass: "context-menu",
            staticStyle: { display: "none" },
            attrs: { id: "contextMenu" },
          },
          [
            _c("ul", { staticClass: "menu" }, [
              _c("li", { staticClass: "share" }, [
                _c("a", { attrs: { href: "#" }, on: { click: _vm.modal } }, [
                  _c("i", {
                    staticClass: "fa fa-comment-alt",
                    staticStyle: { color: "white" },
                  }),
                  _vm._v(" Comment"),
                ]),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c("div", {
          attrs: { id: "word" },
          on: {
            change: function ($event) {
              return _vm.Counter()
            },
          },
        }),
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
            staticStyle: { color: "#3699ff" },
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

/***/ "./resources/js/src/view/pages/Comment.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/view/pages/Comment.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comment_vue_vue_type_template_id_c12b6eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.vue?vue&type=template&id=c12b6eda&scoped=true& */ "./resources/js/src/view/pages/Comment.vue?vue&type=template&id=c12b6eda&scoped=true&");
/* harmony import */ var _Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/Comment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Comment_vue_vue_type_style_index_0_id_c12b6eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment.vue?vue&type=style&index=0&id=c12b6eda&scoped=true&lang=css& */ "./resources/js/src/view/pages/Comment.vue?vue&type=style&index=0&id=c12b6eda&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comment_vue_vue_type_template_id_c12b6eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Comment_vue_vue_type_template_id_c12b6eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c12b6eda",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/Comment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/Comment.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/view/pages/Comment.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Comment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Comment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/Comment.vue?vue&type=style&index=0&id=c12b6eda&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/Comment.vue?vue&type=style&index=0&id=c12b6eda&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_c12b6eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Comment.vue?vue&type=style&index=0&id=c12b6eda&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Comment.vue?vue&type=style&index=0&id=c12b6eda&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_c12b6eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_c12b6eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_c12b6eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_c12b6eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/view/pages/Comment.vue?vue&type=template&id=c12b6eda&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/Comment.vue?vue&type=template&id=c12b6eda&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_c12b6eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Comment.vue?vue&type=template&id=c12b6eda&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/view/pages/Comment.vue?vue&type=template&id=c12b6eda&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_c12b6eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_c12b6eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);