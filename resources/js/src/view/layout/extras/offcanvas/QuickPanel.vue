<template>
  <div class="topbar-item">
    <div class="btn btn-icon btn-clean btn-lg mr-1" id="kt_quick_panel_toggle">
      <span class="svg-icon svg-icon-xl svg-icon-primary">
        <!-- <inline-svg src="media/svg/icons/Layout/Layout-4-blocks.svg" /> -->
        <i class="fa fa-comment-alt" style="color:#3699FF;"></i>
        <!-- <comments @clicked="child"></comments> -->
      </span>
    </div>

    <!-- begin::Quick Panel -->
    <div
      id="kt_quick_panel"
      ref="kt_quick_panel"
      class="offcanvas offcanvas-right pt-5 pb-10"
      style="overflow: hidden;"
    >

      <div
        class="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5"
      >
        <ul
          class="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10"
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
                    <b-form-select v-model="select" style="width:40%!important;">
                        <!-- <option value="">Please Select an Option</option> -->
                        <option value="">All</option>
                        <option value="For you">For you</option>
                        <option value="Open">Open</option>
                        <option value="Resolved">Resolved</option>
                    </b-form-select><br><br>
                <!-- <div class="mb-15"> -->
                  <!-- <h5 class="font-weight-bold mb-5">System Messages</h5> -->
                  <!-- <template v-for="(item, i) in list1">

                    <div
                      class="d-flex align-items-center flex-wrap mb-5"
                      v-bind:key="i"
                    >
                      <div class="symbol symbol-50 symbol-light mr-5">
                        <span class="symbol-label">
                          <inline-svg
                            :src="item.svg"
                            class="h-50 align-self-center"
                          />
                        </span>
                      </div>
                      <div class="d-flex flex-column flex-grow-1 mr-2">
                        <a
                          href="#"
                          class="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                        >
                          {{ item.title }}
                        </a>
                        <span class="text-muted font-weight-bold">
                          {{ item.desc }}
                        </span>
                      </div>
                      <span
                        class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50"
                      >
                        {{ item.alt }}
                      </span>
                    </div>

                  </template> -->
                <!-- </div> -->
                <div class="mb-15"  >

                  <template v-for="(item, i) in c.comment"  >

                      <!-- <div> -->

                     <div v-if="item.reply_id == null"
                      class="d-flex align-items-center rounded p-5 mb-5" style="padding-bottom:90px!important;"
                      v-bind:key="i"
                      v-bind:class="`bg-light-danger`"
                    >
                      <span
                        class="svg-icon mr-5"
                        v-bind:class="`svg-icon-danger`"
                      > <strong>Keyword : {{item.keyword}}</strong>
                    <hr>
                    <div   >


                   <b> Dev Sindhwani</b> <br>
                    <small> <b>{{item.created_at}}</b> </small><br>
                    <p>{{item.comment}}</p>
                    <!-- <div v-for="dev in commet.replies" :key="dev.id"> -->

                    <div v-if="item.reply_id == null" >




                    <b-form-input type="text" hidden :id="'comment_id'+ item.id"  :value="item.id"></b-form-input>
                    <b-form-input type="text" :id="'reply'+ item.id" placeholder="Enter the Reply"></b-form-input>
                    <button class="btn btn-primary" @click="reply(item.id)">Reply</button>
                    </div>


                    <!-- </div> -->
                    </div>
                    <!-- Replies -->

                    <!-- <div v-for="(item2,i) in commet.replies" :key="i"> -->
                              <div v-for="(item2,a) in c.replies" :key="a" >
                        <div v-if="item.id == item2.reply_id">
                         <b> Dev Sindhwani</b> <br>

                    <small> <b>{{item2.created_at}}</b> </small><br>
                    {{item2.comment}} <br>
                    <a href="#"  @click="editInput(item2.id)">Edit</a> &emsp;
                    <a href="#" @click="deleteReply(item2.id)">Delete</a>


                    <div :id="'gg'+item2.id" style="display:none;">
                        <b-form-input :id="'input-1'+item2.id" hidden type="text"  :value="item2.id" ></b-form-input>

                        <b-form-input :id="'input-2'+ item2.id" type="text"  placeholder="Enter Reply" :value="item2.comment"></b-form-input>
                        <b-button class="btn btn-danger" @click="updateReply(item2.id)">Edit</b-button>
                          <b-button class="btn btn-success" @click="removeReplyField(item2.id)">Remove</b-button>

                    </div>
                        <br><br>
                              </div>
                        </div>
                      </span>

                      <div class="d-flex flex-column flex-grow-1 mr-2">
                        <a
                          href="#"
                          class="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                        >

                        </a>
                        <span class="text-muted font-size-sm">

                        </span>
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
              <div class="scroll pr-7 mr-n7" id="kt_quick_panel_notifications">

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
                            <input type="checkbox" checked="checked" name="" />
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
                            <input type="checkbox" checked="checked" name="" />
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
                            <input type="checkbox" checked="checked" name="" />
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
                            <input type="checkbox" checked="checked" name="" />
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
                            <input type="checkbox" checked="checked" name="" />
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
                            <input type="checkbox" checked="checked" name="" />
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
</template>

<script>
// import KTLayoutQuickPanel from "@/assets/js/layout/extended/quick-panel.js";
import KTLayoutQuickPanel from '../../../../assets/js/layout/extended/quick-panel';
import Button from '../../../pages/vue-bootstrap/Button.vue';
// import Comments from '../../../pages/Comment.vue';
import Axios from 'axios';

import ApiService from "@/core/services/api.service";


export default {
  components: { Button},
  name: "KTQuickPanel",
  computed:{

  },

  data() {
    return {
      tabIndex: 0,
      c: {},
    //   comment:{},
      list1: [
        {
          title: "Top Authors",
          desc: "Most Successful Fellas",
          alt: "+82$",
          svg: "media/svg/misc/006-plurk.svg"
        },
        {
          title: "Popular Authors",
          desc: "Most Successful Fellas",
          alt: "+280$",
          svg: "media/svg/misc/006-plurk.svg"
        },
        {
          title: "New Users",
          desc: "Most Successful Fellas",
          alt: "+4500$",
          svg: "media/svg/misc/015-telegram.svg"
        },
        {
          title: "Active Customers",
          desc: "Most Successful Fellas",
          alt: "+4500$",
          svg: "media/svg/misc/003-puzzle.svg"
        }
      ],
      list2: [
        {
          title: "Another purpose persuade",
        //   desc: "Due in 2 Days",
        //   alt: "+28%",
        //   svg: "media/svg/icons/Home/Library.svg",
          type: "primary"
        },

      ],
      list3: [
        {
          title: "5 new user generated report",
          desc: "Reports based on sales",
          icon: "flaticon-bell text-success"
        },
        {
          title: "2 new items submited",
          desc: "by Grog John",
          icon: "flaticon2-box text-danger"
        },
        {
          title: "79 PSD files generated",
          desc: "Reports based on sales",
          icon: "flaticon-psd text-primary"
        },
        {
          title: "$2900 worth producucts sold",
          desc: "Total 234 items",
          icon: "flaticon2-supermarket text-warning"
        },
        {
          title: "4.5h-avarage response time",
          desc: "Fostest is Barry",
          icon: "flaticon-paper-plane-1 text-success"
        },
        {
          title: "3 Defence alerts",
          desc: "40% less alerts thar last week",
          icon: "flaticon-safe-shield-protection text-danger"
        },
        {
          title: "Avarage 4 blog posts per author",
          desc: "Most posted 12 time",
          icon: "flaticon-notepad text-primary"
        },
        {
          title: "16 authors joined last week",
          desc: "9 photodrapehrs, 7 designer",
          icon: "flaticon-users-1 text-warning"
        },
        {
          title: "2 new items have been submited",
          desc: "by Grog John",
          icon: "flaticon2-box text-info"
        },
        {
          title: "2.8 GB-total downloads size",
          desc: "Mostly PSD end  AL concepts",
          icon: "flaticon2-download text-success"
        },
        {
          title: "$2900 worth producucts sold",
          desc: "Total 234 items",
          icon: "flaticon2-supermarket text-danger"
        },
        {
          title: "7 new user generated report",
          desc: "Reports based on sales",
          icon: "flaticon-bell text-primary"
        },
        {
          title: "4.5h-avarage response time",
          desc: "Fostest is Barry",
          icon: "flaticon-paper-plane-1 text-success"
        }
      ],
        select:''
    };
  },
  mounted() {
    // Init Quick Offcanvas Panel
    KTLayoutQuickPanel.init(this.$refs["kt_quick_panel"]);
    // this.child();
    this.get();
    // console.log(value);

  },

  methods: {

    /**
     * Set current active on click
     * @param event
     */


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
    get(){
        ApiService.get('http://localhost:8000/api/c').then(res => {
            this.c = res.data;
        })
    },
    reply(index){
        var id = $('#comment_id' + index).val()
        var reply = $('#reply'+ index).val()
        console.log(reply);

         const form= new FormData();
            const data ={
                "comment" : reply,
                "reply_id" : id
            };
            form.append("data", JSON.stringify(data));
            console.log(data);

            ApiService.post('/api/c/store', form).then(res =>{
                this.c =  res.data;
                this.get();
                // Comments.methods.get();
            })

    },
    editInput(index){
        if(document.getElementById("gg"+index).style.display = "none"){

            document.getElementById("gg"+index).style.display = "block";
        }
    },
    updateReply(index){
        var id = $('#input-1'+index).val()
        var comment = $('#input-2'+index).val()
        // console.log($('#input-1'+index).val());
        const form = new FormData();
        const edit = {
            "id": id,
            "comment":comment
        };
         form.append("data", JSON.stringify(edit));
             ApiService.post("http://localhost:8000/api/c/update" , form).then(res => {
                 this.c = res.data
                 this.get();
             });

    },
    removeReplyField(index){
        if(document.getElementById("gg"+index).style.display = "block"){

            document.getElementById("gg"+index).style.display = "none";
        }
    },
    deleteReply(index){
        const form = new FormData();
        const deleteReply = {
            "id": index,
        };
        form.append("delete", JSON.stringify(deleteReply));
        ApiService.post("http://localhost:8000/api/c/delete", form).then(res => {
            this.c = res.data;
            this.get();
        })
        // console.log(index);
    }
  }
};
</script>
