<template>
  <div id="app">
    <!-- <KTQuickPanel></KTQuickPanel> -->
    <div class="topbar-item">
      <div
        class="btn btn-icon btn-clean btn-lg mr-1"
        id="kt_quick_panel_toggle"
      >
        <span class="svg-icon svg-icon-xl svg-icon-primary">
          <!-- <inline-svg src="media/svg/icons/Layout/Layout-4-blocks.svg" /> -->
          <i class="fa fa-comment-alt" style="color: #3699ff"> </i>
          <!-- <button class="btn btn-primary " > Show Comments</button> -->

          <!-- <comments @clicked="child"></comments> -->
        </span>
      </div>

      <!-- begin::Quick Panel -->
      <div
        id="kt_quick_panel"
        ref="kt_quick_panel"
        class="offcanvas offcanvas-right pt-5 pb-10"
        style="overflow: hidden"
      >
        <div
          class="
            offcanvas-header offcanvas-header-navs
            d-flex
            align-items-center
            justify-content-between
            mb-5
          "
        >
          <ul
            class="
              nav
              nav-bold
              nav-tabs
              nav-tabs-line
              nav-tabs-line-3x
              nav-tabs-primary
              flex-grow-1
              px-10
            "
            role="tablist"
          >
            <li class="nav-item">
              <a
                class="nav-link active"
                v-on:click="setActiveTab"
                data-tab="0"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="true"
              >
                Comments
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                v-on:click="setActiveTab"
                data-tab="1"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="false"
              >
                <!-- <i class="fa fa-comment" style="font-size:20px;" title="Add Comment"></i> -->
                Add
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                v-on:click="setActiveTab"
                data-tab="2"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="false"
              >
                Settings
              </a>
            </li>
          </ul>
          <div class="offcanvas-close mt-n1 pr-5">
            <a
              href="#"
              class="btn btn-xs btn-icon btn-light btn-hover-primary"
              id="kt_quick_panel_close"
            >
              <i class="ki ki-close icon-xs text-muted"></i>
            </a>
          </div>
        </div>

        <div class="offcanvas-content px-10">
          <div class="tab-content">
            <b-tabs class="hide-tabs" v-model="tabIndex">
              <b-tab active>
                <div class="scroll pr-7 mr-n7" id="kt_quick_panel_logs">
                  <!-- <comments :comment2="c"></comments> -->
                  <!-- <button @update="child($event)">helo</button> -->
                  <b-form-select v-model="select" style="width: 40% !important">
                    <!-- <option value="">Please Select an Option</option> -->
                    <option value="">All</option>
                    <option value="For you">For you</option>
                    <option value="Open">Open</option>
                    <option value="Resolved">Resolved</option> </b-form-select
                  ><br /><br />

                  <div class="mb-15">
                    <template v-for="(item, i) in comment2.comment">
                      <!-- <div> -->
                      <!-- <p :key="i" v-if="item.id == ''">hee</p> -->

                      <div
                        v-if="item.reply_id == null"
                        class="d-flex align-items-center rounded p-5 mb-5"
                        style="padding-bottom: 5px !important"
                        v-bind:key="i"
                        v-bind:class="`bg-light-danger`"
                      >
                        <span
                          class="svg-icon mr-5"
                          v-bind:class="`svg-icon-danger`"
                        >
                          <strong
                            >Keyword : {{ item.keyword }}
                            <a
                              :id="'anchor' + item.id"
                              :data-index="item.id - 1"
                              class="btn btn-info comments"
                              @click="
                                HighlightKeyword(item.start, item.end, item.id)
                              "
                              >View</a
                            >
                          </strong>
                          <hr />

                          <div>
                            <b> Dev Sindhwani</b> <br />
                            <!-- Name -->
                            <small>
                              <b>{{ item.created_at }}</b> </small
                            ><br />
                            <!-- When Commented -->
                            {{ item.comment }}
                            <br />
                            <!-- COmment -->
                            <a href="#" @click="editComment(item.id)">Edit</a>
                            <a @click="deleteComment(item.id)" href="#"
                              >Delete</a
                            >
                            <div
                              :id="'comment' + item.id"
                              style="display: none"
                            >
                              <b-form-input
                                :id="'comment-1' + item.id"
                                hidden
                                type="text"
                                :value="item.id"
                              ></b-form-input>

                              <b-form-input
                                :id="'comment-2' + item.id"
                                type="text"
                                placeholder="Enter Reply"
                                @keyup.enter="updateComment(item.id)"
                                :value="item.comment"
                              ></b-form-input>
                            </div>
                            <br />

                            <div v-if="item.reply_id == null">
                              <b-form-input
                                type="text"
                                hidden
                                :id="'comment_id' + item.id"
                                :value="item.id"
                              ></b-form-input>
                              <b-form-input
                                type="text"
                                :id="'reply' + item.id"
                                placeholder="Enter the Reply"
                                @keyup.enter="reply(item.id)"
                              ></b-form-input>
                              <!-- <button class="btn btn-primary" @click="reply(item.id)">Reply</button> -->
                            </div>

                            <!-- </div> -->
                          </div>
                          <br />
                          <div
                            style="margin-left: 20px"
                            v-for="(item2, a) in comment2.replies"
                            :key="a"
                          >
                            <div v-if="item.id == item2.reply_id">
                              <b> Dev Sindhwani</b> <br />
                              <!-- Name -->

                              <small>
                                <b>{{ item2.created_at }}</b> </small
                              ><br />
                              <!-- When Replied -->
                              {{ item2.comment }} <br />
                              <a href="#" @click="editInput(item2.id)">Edit</a>
                              &emsp;
                              <a href="#" @click="deleteReply(item2.id)"
                                >Delete</a
                              >

                              <div :id="'gg' + item2.id" style="display: none">
                                <b-form-input
                                  :id="'input-1' + item2.id"
                                  hidden
                                  type="text"
                                  :value="item2.id"
                                ></b-form-input>

                                <b-form-input
                                  :id="'input-2' + item2.id"
                                  type="text"
                                  placeholder="Enter Reply"
                                  @keyup.enter="updateReply(item2.id)"
                                  :value="item2.comment"
                                ></b-form-input>
                              </div>
                              <br /><br />
                            </div>
                          </div>
                        </span>

                        <div class="d-flex flex-column flex-grow-1 mr-2">
                          <a
                            href="#"
                            class="
                              font-weight-normal
                              text-dark-75 text-hover-primary
                              font-size-lg
                              mb-1
                            "
                          >
                          </a>
                          <span class="text-muted font-size-sm"> </span>
                        </div>

                        <span
                          class="font-weight-bolder py-1 font-size-lg"
                          v-bind:class="`text-danger`"
                        >
                        </span>
                      </div>
                    </template>
                    <!-- </div> -->
                  </div>
                </div>
              </b-tab>

              <b-tab>
                <div
                  class="scroll pr-7 mr-n7"
                  id="kt_quick_panel_notifications"
                >
                  <div class="navi navi-icon-circle navi-spacer-x-0">
                    <template v-for="(item, i) in list3">
                      <a href="#" class="navi-item" v-bind:key="i">
                        <div class="navi-link rounded">
                          <div class="symbol symbol-50 mr-3">
                            <div class="symbol-label">
                              <i class="icon-lg" v-bind:class="item.icon" />
                            </div>
                          </div>
                          <div class="navi-text">
                            <div class="font-weight-bold font-size-lg">
                              {{ item.title }}
                            </div>
                            <div class="text-muted">
                              {{ item.desc }}
                            </div>
                          </div>
                        </div>
                      </a>
                    </template>
                  </div>
                </div>
              </b-tab>

              <b-tab>
                <div class="scroll pr-7 mr-n7" id="kt_quick_panel_settings">
                  <form class="form">
                    <div>
                      <h5 class="font-weight-bold mb-3">Customer Care</h5>
                      <div class="form-group mb-0 row">
                        <label class="col-8 col-form-label"
                          >Enable Notifications:</label
                        >
                        <div class="col-4 text-right">
                          <span class="switch switch-success switch-sm">
                            <label>
                              <input
                                type="checkbox"
                                checked="checked"
                                name=""
                              />
                              <span></span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <div class="form-group mb-0 row">
                        <label class="col-8 col-form-label"
                          >Enable Case Tracking:</label
                        >
                        <div class="col-4 text-right">
                          <span class="switch switch-success switch-sm">
                            <label>
                              <input
                                type="checkbox"
                                name="quick_panel_notifications_2"
                              />
                              <span></span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <div class="form-group mb-0 row">
                        <label class="col-8 col-form-label"
                          >Support Portal:</label
                        >
                        <div class="col-4 text-right">
                          <span class="switch switch-success switch-sm">
                            <label>
                              <input
                                type="checkbox"
                                checked="checked"
                                name=""
                              />
                              <span></span>
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="separator separator-dashed my-6"></div>

                    <div class="pt-2">
                      <h5 class="font-weight-bold mb-3">Reports</h5>
                      <div class="form-group mb-0 row">
                        <label class="col-8 col-form-label"
                          >Generate Reports:</label
                        >
                        <div class="col-4 text-right">
                          <span class="switch switch-sm switch-danger">
                            <label>
                              <input
                                type="checkbox"
                                checked="checked"
                                name=""
                              />
                              <span></span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <div class="form-group mb-0 row">
                        <label class="col-8 col-form-label"
                          >Enable Report Export:</label
                        >
                        <div class="col-4 text-right">
                          <span class="switch switch-sm switch-danger">
                            <label>
                              <input type="checkbox" name="" />
                              <span></span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <div class="form-group mb-0 row">
                        <label class="col-8 col-form-label"
                          >Allow Data Collection:</label
                        >
                        <div class="col-4 text-right">
                          <span class="switch switch-sm switch-danger">
                            <label>
                              <input
                                type="checkbox"
                                checked="checked"
                                name=""
                              />
                              <span></span>
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="separator separator-dashed my-6"></div>

                    <div class="pt-2">
                      <h5 class="font-weight-bold mb-3">Memebers</h5>
                      <div class="form-group mb-0 row">
                        <label class="col-8 col-form-label"
                          >Enable Member singup:</label
                        >
                        <div class="col-4 text-right">
                          <span class="switch switch-sm switch-primary">
                            <label>
                              <input
                                type="checkbox"
                                checked="checked"
                                name=""
                              />
                              <span></span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <div class="form-group mb-0 row">
                        <label class="col-8 col-form-label"
                          >Allow User Feedbacks:</label
                        >
                        <div class="col-4 text-right">
                          <span class="switch switch-sm switch-primary">
                            <label>
                              <input type="checkbox" name="" />
                              <span></span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <div class="form-group mb-0 row">
                        <label class="col-8 col-form-label"
                          >Enable Customer Portal:</label
                        >
                        <div class="col-4 text-right">
                          <span class="switch switch-sm switch-primary">
                            <label>
                              <input
                                type="checkbox"
                                checked="checked"
                                name=""
                              />
                              <span></span>
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>

    <div id="modal">
      <b-modal ref="comment" id="c" size="lg" title="Add Comment">
        <b-form @submit.prevent="addComment" method="POST">
          <b id="bold">
            <input id="dev" type="text" hidden value="" v-model="key"
          /></b>
          <input type="text" hidden value="" v-model="start" />
          <input type="text" hidden value="" v-model="end" />

          <b-form-group id="input-group-1" label="Comment:" label-for="input-1">
            <b-form-textarea
              id="textarea-default"
              v-model="content"
              size="lg"
              placeholder="Enter Comment"
              required
            ></b-form-textarea>
          </b-form-group>

          <b-button type="submit" variant="primary">Add</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
          <!-- <vue-editor v-model="content" id="custom"  :editorToolbar="customToolbar"  placeholder= "Compose an epic...">
         </vue-editor> -->
        </b-form>
      </b-modal>
    </div>
    <div style="background-color: white; cursor: pointer">
      <div id="contextMenu" class="context-menu" style="display: none">
        <ul class="menu">
          <li class="share">
            <a href="#" @click="modal"
              ><i class="fa fa-comment-alt" style="color: white"></i> Comment</a
            >
          </li>
        </ul>
      </div>

      <div id="word" @change="Counter()">
        <!-- <vue-editor v-model="content2"  id="quill"  :editorToolbar="customToolbar"  divlaceholder= "Compose an Text...">
            </vue-editor> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
.context-menu {
  position: absolute;
}
.menu {
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  border-radius: 4px;
  border: 1px solid lightgray;
  color: black;
  box-shadow: 0 10px 20px rgb(64 64 64 / 5%);
  padding: 10px 0;

  position: absolute;
  /* display: none; */
  z-index: 1000;
}

.menu > li > a {
  font: inherit;
  border: 0;
  padding: 10px 30px 10px 15px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 6px;
  padding-right: 154px;
  text-decoration: unset;
  color: black;

  font-weight: 500;
  /* transition: 0.5s linear;
  -webkit-transition: 0.5s linear;
  -moz-transition: 0.5s linear;
  -ms-transition: 0.5s linear;
  -o-transition: 0.5s linear; */
}

.menu > li > a:hover {
  background: lightgray;
  color: black;
  padding-right: 154px;
}

.menu > li > a > i {
  padding-right: 10px;
  color: grey !important;
}
.menu > li.trash > a:hover {
  color: red;
}
.quillWrapper {
  border: 2px solid black;
  border-radius: 5px;
  color: black !important;
}
.quillWrapper
  .ql-toolbar.ql-snow
  .ql-formats
  .ql-size.ql-picker
  .ql-picker-label::before {
  color: black !important;
}
body {
  color: black !important;
}
/* .highlight{
        background: yellow!important;
    } */
</style>

<script>
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
    menu.style.display = "inline-block";
    // console.log(e.pageX);
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";

    e.clientY;
  }
}

import Quill from "quill";
import { VueEditor } from "vue2-quill-editor";
import ApiService from "@/core/services/api.service";
import hljs from "highlight.js";
// import KTQuickPanel from '../layout/extras/offcanvas/QuickPanel.vue'
import KTLayoutQuickPanel from "../../assets/js/layout/extended/quick-panel";
import Button from "../pages/vue-bootstrap/Button.vue";
export default {
  components: {
    VueEditor,
    Button,
  },
  name: "comments",
  data() {
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
      list1: [
        {
          title: "Top Authors",
          desc: "Most Successful Fellas",
          alt: "+82$",
          svg: "media/svg/misc/006-plurk.svg",
        },
        {
          title: "Popular Authors",
          desc: "Most Successful Fellas",
          alt: "+280$",
          svg: "media/svg/misc/006-plurk.svg",
        },
        {
          title: "New Users",
          desc: "Most Successful Fellas",
          alt: "+4500$",
          svg: "media/svg/misc/015-telegram.svg",
        },
        {
          title: "Active Customers",
          desc: "Most Successful Fellas",
          alt: "+4500$",
          svg: "media/svg/misc/003-puzzle.svg",
        },
      ],
      list2: [
        {
          title: "Another purpose persuade",
          //   desc: "Due in 2 Days",
          //   alt: "+28%",
          //   svg: "media/svg/icons/Home/Library.svg",
          type: "primary",
        },
      ],
      list3: [
        {
          title: "5 new user generated report",
          desc: "Reports based on sales",
          icon: "flaticon-bell text-success",
        },
        {
          title: "2 new items submited",
          desc: "by Grog John",
          icon: "flaticon2-box text-danger",
        },
        {
          title: "79 PSD files generated",
          desc: "Reports based on sales",
          icon: "flaticon-psd text-primary",
        },
        {
          title: "$2900 worth producucts sold",
          desc: "Total 234 items",
          icon: "flaticon2-supermarket text-warning",
        },
        {
          title: "4.5h-avarage response time",
          desc: "Fostest is Barry",
          icon: "flaticon-paper-plane-1 text-success",
        },
        {
          title: "3 Defence alerts",
          desc: "40% less alerts thar last week",
          icon: "flaticon-safe-shield-protection text-danger",
        },
        {
          title: "Avarage 4 blog posts per author",
          desc: "Most posted 12 time",
          icon: "flaticon-notepad text-primary",
        },
        {
          title: "16 authors joined last week",
          desc: "9 photodrapehrs, 7 designer",
          icon: "flaticon-users-1 text-warning",
        },
        {
          title: "2 new items have been submited",
          desc: "by Grog John",
          icon: "flaticon2-box text-info",
        },
        {
          title: "2.8 GB-total downloads size",
          desc: "Mostly PSD end  AL concepts",
          icon: "flaticon2-download text-success",
        },
        {
          title: "$2900 worth producucts sold",
          desc: "Total 234 items",
          icon: "flaticon2-supermarket text-danger",
        },
        {
          title: "7 new user generated report",
          desc: "Reports based on sales",
          icon: "flaticon-bell text-primary",
        },
        {
          title: "4.5h-avarage response time",
          desc: "Fostest is Barry",
          icon: "flaticon-paper-plane-1 text-success",
        },
      ],
      select: "",
      quill2: "",
      oldDelta: "",

      customToolbar: [
        // [{ 'font': fonts }],
        // [{ 'header': 1 }, { 'header': 2 }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],

        [{ list: "ordered" }, { list: "bullet" }],
        // [{ 'script': 'sub'}, { 'script': 'super' }],
        // [{ 'indent': '-1'}, { 'indent': '+1' }],
        // [{ 'direction': 'rtl' }],

        [{ color: [] }, { background: ["black"] }],

        [
          { align: "" },
          { align: "right" },
          { align: "center" },
          { align: "justify" },
        ],
        ["image", "video"],
        ["clean"],
        ["fullscreen"],
      ],
    };
  },
  mounted() {
    this.test();
    KTLayoutQuickPanel.init(this.$refs["kt_quick_panel"]);
    this.getcomment();
    this.quill();
    Toast.fire({
      icon: "success",
      title: "Data Cleaned Successfully",
    });

    //  this.get();
  },

  methods: {
    setActiveTab(event) {
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(event.target.getAttribute("data-tab"));

      // set current active tab
      event.target.classList.add("active");
    },

    Counter() {
      const source = this.quill2.root.innerHTML.replace(/(<([^>]+)>)/gi, "");
      console.log("Number of words: " + source.match(/(\w+)/g).length);
    },
    test() {
      ApiService.post("api/turncate").then((res) => {
        console.log(res.data);
      });
    },
    comment() {
      const hello = this.content2.replace(/(<([^>]+)>)/gi, "");
    },
    getcomment() {
      ApiService.get("http://localhost:8000/api/c").then((res) => {
        this.comment2 = res.data;
      });
    },
    quill() {
      this.quill2 = new Quill("#word", {
        debug: "warn",
        placeholder: "Compose an epic...",
        formula: true,
        syntax: {
          highlight: (text) => hljs.highlightAuto(text).value,
        },
        history: {
          // Enable with custom configurations
          delay: 2500,
          userOnly: true,
        },
        modules: {
          toolbar: this.customToolbar,
        },
        theme: "snow",
      });
      this.quill2.focus();
      this.oldDelta = {
        ops: [
          { attributes: { color: "grey" }, insert: "This is sample text." },
        ],
      };
      this.quill2.setContents(this.oldDelta);
    },

    modal() {
      this.$refs["comment"].show();
      const source = this.quill2.root.innerHTML.replace(/(<([^>]+)>)/gi, "");
     console.log(source);
        // Number of words
      const numofWords = source.match(/(\w+)/g).length;
      console.log("Number of words: " + numofWords);


        // Number of Sentences
      const re = /[.!?]/;
      const numOfSentences = source.split(re);
      const actualNumOfSentence = numOfSentences.length - 1;
      console.log("Number of sentences: " + actualNumOfSentence);

      // Number of Syllables


        var source1 = source.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
         source1 = source1.replace(/^y/, '');
        const numOfSyllables = source1.match(/[aeiouy]{1,2}/g).length;
        console.log("Number of Syllables: " + numOfSyllables);
        // ASL =  Average Sentence Length
        const asl = numofWords/actualNumOfSentence;
        console.log("Average sentence length: " + asl);
        // ASW = Average Number of Syllables per Word
        const asw = numOfSyllables/numofWords;
        console.log("Average number of syllables per word: " + asw);
        // RE = Readability Ease
        const RE = 206.835 - (1.015*asl) - (84.6*asw);
        console.log("Readability ease: " + RE);

     var text = document.getElementById("word");
      if (window.getSelection) {
        text = window.getSelection().toString();

        // console.log("text" + text);
      } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
        // console.log('keyword' + text);
      }

      // console.log(quill.getS);

      //  var prompt = window.prompt("Please enter Comment", "");
      var range = this.quill2.getSelection();
      // console.log(range);
      // console.log(this.quill2.root.innerText);
      this.start = range.index;
      this.end = range.length;
    //   console.log(range.index);

      this.key = text;
      this.content = "";
    },
    addComment() {
      const hello = this.content.replace(/(<([^>]+)>)/gi, "");
      const source = this.quill2.root.innerHTML.replace(/(<([^>]+)>)/gi, "");

      const form = new FormData();
      const content = {
        content: hello,
        keyword: this.key,
        source: source,
        start: this.start,
        end: this.end,
      };
      form.append("json", JSON.stringify(content));
      ApiService.post("http://localhost:8000/api/comment/store", form).then(
        (res) => {
          this.$refs["comment"].hide();
          this.comment2.push = res.data;
          this.getcomment();
        }
      );
    },

    reply(index) {
      var reply = document.getElementById("reply" + index);
      var id = document.getElementById("comment_id" + index);

      const form = new FormData();
      const data = {
        comment: reply.value,
        reply_id: id.value,
      };
      form.append("data", JSON.stringify(data));
      console.log(data);

      ApiService.post("/api/c/store", form).then((res) => {
        this.c = res.data;

        this.getcomment();
        // Comments.methods.get();
      });
    },
    editComment(index) {
      if ((document.getElementById("comment" + index).style.display = "none")) {
        document.getElementById("comment" + index).style.display = "block";
      }
    },
    editInput(index) {
      if ((document.getElementById("gg" + index).style.display = "none")) {
        document.getElementById("gg" + index).style.display = "block";
      }
    },
    updateComment(index) {
      var id = $("#comment-1" + index).val();
      var comment = $("#comment-2" + index).val();
      // console.log($('#input-1'+index).val());
      const form = new FormData();
      const edit = {
        id: id,
        comment: comment,
      };
      form.append("data", JSON.stringify(edit));
      ApiService.post("http://localhost:8000/api/c/update", form).then(
        (res) => {
          this.c = res.data;
          this.getcomment();
          document.getElementById("comment" + index).style.display = "none";
        }
      );
    },
    updateReply(index) {
      var id = $("#input-1" + index).val();
      var comment = $("#input-2" + index).val();
      // console.log($('#input-1'+index).val());
      const form = new FormData();
      const edit = {
        id: id,
        comment: comment,
      };
      form.append("data", JSON.stringify(edit));
      ApiService.post("http://localhost:8000/api/c/update", form).then(
        (res) => {
          this.c = res.data;
          this.getcomment();
          document.getElementById("gg" + index).style.display = "none";
        }
      );
    },

    deleteReply(index) {
      const form = new FormData();
      const deleteReply = {
        id: index,
      };
      form.append("delete", JSON.stringify(deleteReply));
      ApiService.post("http://localhost:8000/api/c/delete", form).then(
        (res) => {
          this.c = res.data;
          this.getcomment();
        }
      );
      // console.log(index);
    },
    deleteComment(index) {
      const form = new FormData();
      const deleteComment = {
        id: index,
      };
      form.append("delete", JSON.stringify(deleteComment));
      ApiService.post("http://localhost:8000/api/comm/delete", form).then(
        (res) => {
          this.c = res.data;
          this.getcomment();
        }
      );
    },
    HighlightKeyword(index, lengthh, id) {
      console.log("Starting index is" + index);
      console.log("ending index is" + lengthh);
      var element = document
        .getElementById("kt_quick_panel")
        .classList.remove("offcanvas-on");

      $(".offcanvas-overlay").remove();

      var text = this.quill2.getText(index, lengthh);
      console.log("User has highlighted: ", text);

      this.metaData.push({ start: index, length: lengthh });
      // console.log(this.metaData);
      this.quill2.formatText(index, lengthh, {
        background: "#fff72b",
      });
      var element = $("#anchor" + id).attr("data-index");
      console.log(element);

      document.getElementById("word").focus();
      console.log(this.metaData[element].start);
      this.quill2.setSelection(
        this.metaData[element].start,
        this.metaData[element].length
      );
      // document.getElementById("word").scrollBy(0,-250);
      // var dta = this.metaData;
    },
  },
};
</script>
