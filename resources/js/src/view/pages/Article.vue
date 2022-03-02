<template>
  <div id="app">

    <div>
        <h1><b ><u>Articles</u></b>
            <b-button style="margin-left:1000px; background-color:rebeccapurple!important; border:2px solid rebeccapurple;"  class="btn btn-success"  @click="showModal">Add Article</b-button>
            <!-- <b-button variant="success" @click="makeToast('b-toaster-bottom-right', true, 'success')" class="mb-2">Show Comments</b-button> -->

        </h1>

    <b-modal ref="my-modal" id="modal-1" size="lg" title="Article">
        <b-form v-on:submit.prevent="editmode ? update(): add()"  @reset="onReset" id="form" method="POST" enctype="multipart/form-data">

                <b-form-input
                id="input-1"
                v-if="editmode == true"
                v-model="form.id"
                type="text"
                hidden
                placeholder="Enter Comapny ID"
            ></b-form-input>
            <b-form-group
            id="input-group-1"
            label="Company ID:"
            label-for="input-1"
            description="We'll never share your company id with anyone else."
            >
            <b-form-input
                id="input-1"
                v-model="form.company_id"
                type="text"

                placeholder="Enter Comapny ID" required
            ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Client ID:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.client_id"
                required
                placeholder="Enter Client Id"
            ></b-form-input>
            </b-form-group>


        <b-form-group id="input-group-3"  label="Your Priority Keyword:"  label-for="input-3">
            <!-- <div class="form-group">
                <label for="">Priority Keyword</label>
            <select v-model="form.Keyword_id"  class="form-control" >
                <option value="" >Select an Option</option>
                <option value="">{{dev.priority_keyword.priority_keyword}}</option>
            </select>
            </div> -->
            <b-form-select v-model="form.Keyword_id" required>
                <option v-if="this.editmode == false" value="" >Select an option</option>
                <option v-for="dev in filesData" :key="dev.id" :value="dev.id">{{dev.priority_keyword}}</option>
            </b-form-select>



        </b-form-group>


        <b-form-group id="input-group-4" label="Date Published:" label-for="input-4">
        <b-form-datepicker
            id="input-4"
            v-model="form.date"
            required
            placeholder="Enter Date "
        ></b-form-datepicker>
        </b-form-group>

        <b-form-group id="input-group-5" label="Writer:" label-for="input-5">
        <b-form-input
            id="input-5"
            v-model="form.writer"
            required
            placeholder="Enter Writer "
        ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Topic:" label-for="input-6">

        <b-form-textarea
            id="textarea-default"
            v-model="form.topic"
            size="lg"
            placeholder="Enter Topic"
            required
        ></b-form-textarea>

        </b-form-group>

        <b-form-group id="input-group-7" label="Focus Keyword:" label-for="input-7">
            <b-form-textarea
            id="textarea-default"
            v-model="form.focus"
            size="lg"
            placeholder="Enter Focus Keyword"
            required
        ></b-form-textarea>

        </b-form-group>




        <b-form-group id="input-group-9" label="Status:" label-for="input-9">
            <b-form-input
            id="input-10"
            v-model="form.status"
            required
            placeholder="Enter Status "
        ></b-form-input>
            <!-- <b-form-select  v-model="form.status" v-if="this.editmode == true" >
                <option value="" v-if="this.editmode == false">Select an option</option>
                <option   v-for="index in Article" :key="index.id" :value="index.status">{{index.status}}</option>
                <option value="Not Written">Not Written</option>
            </b-form-select>

            <b-form-select  v-model="form.status" v-if="this.editmode == false" >
                <option value="" >Select an option</option>
                <option value="Written">Written</option>
                <option value="Not Written">Not Written</option>
            </b-form-select> -->

        </b-form-group>

        <b-form-group id="input-group-10" label="Approval:" label-for="input-10">
        <b-form-input
            id="input-10"
            v-model="form.approval"
            required
            placeholder="Enter Approval "
        ></b-form-input>
        </b-form-group>


        <b-form-group id="input-group-11" label="Doc Link:" label-for="input-11">
        <b-form-input
            id="input-11"
            v-model="form.doc"
            required
            placeholder="Enter Document Link "
        ></b-form-input>
        </b-form-group>




        <b-form-group id="input-group-13" label="Article Link:" label-for="input-13">
        <b-form-input
            id="input-13"
            v-model="form.article"
            required
            placeholder="Enter Article Link "
        ></b-form-input>
        </b-form-group>

                <b-form-group id="input-group-12" label="Banner Image:" label-for="input-12">
                    <input type="file" @change="base64convert" required>

            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </b-modal>

    <!-- <b-modal ref="comment" title="Add Comment">
        <b-form @submit.prevent="addComment" method="POST">


            <input type="text" hidden  v-model="form.id">
            <b id="bold">
            <input id="dev" type="text" hidden value=""  v-model="content.key"></b>

        <b-form-group id="input-group-1" label="Comment:" label-for="input-1">

            <vue-editor v-model="content.content"  id="editor" :editorToolbar="customToolbar"  placeholder="Comment on Article">
            </vue-editor>

        </b-form-group>

            <b-button type="submit" variant="primary">Add</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>


        </b-form>
    </b-modal> -->

<br>

      <table id="customers">
          <tr>

              <th>Priority Keyword</th>
              <th>Date Published</th>
              <th>Writer</th>
              <th>Topic</th>
              <th>Focus Keyword</th>
              <th>Status</th>
              <th>Approval</th>
              <th>Doc Link</th>
              <th> Images</th>
              <!-- <th>Comments</th> -->
              <th>Article Link</th>
              <th>Action</th>
          </tr>
            <tr v-for="index in paginate.data" :key="index.id">
                <!-- <td>{{index.id}}</td> -->
                <!-- <td>{{index.company_id}}</td> -->
                <!-- <td>{{index.client_id}}</td> -->
                <td><p id="prior" @dblclick="getSelectionText()">{{index.priority_keyword.priority_keyword}}</p></td>
                <td>{{index.date_published}}</td>
                <td>{{index.writer}}</td>
                <td><p id="topic" @dblclick="getSelectionText()">{{index.topic}}</p></td>
                <td><p id="word" @dblclick="getSelectionText()">{{index.focus_keyword}}</p></td>
                <td>{{index.status}}</td>
                <td v-if="index.approval == 0" >Approved</td>
                <td v-if="index.approval == 1" >
                    <b-button class="btn btn-success" style="background-color:orangered; border:2px solid orangered;">
                    Unapproved
                    </b-button>
                </td>
                <td><a :href="index.doc_link">Docs</a></td>
                <td><img :src="'storage/' + (index.banner_images)" style="max-width:90px;" alt=""></td>
                <!-- <td>{{index.comment}}</td> -->
                <td><a :href="index.article_link">Article</a></td>
                <td>
                    <button class="btn btn-danger" @click="editModal(paginate.data.indexOf(index))">Edit</button>
                    <button class="btn btn-info" @click="deleteArticle(paginate.data.indexOf(index))">Delete</button>
                    <button class="btn btn-primary" @click="comment(paginate.data.indexOf(index))">Add Comment</button>

                </td>
            </tr>
      </table>
    </div>
        <center>
      <pagination  :data="paginate"  @pagination-change-page="onChangePage">
              <span slot="prev-nav">&lt; Previous</span>
              <span  slot="next-nav">Next &gt;</span>
      </pagination>
        </center>
      <!-- </div> -->
  </div>
</template>
<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 0.5px solid blanchedalmond;
  padding: 8px;
  background:white;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

</style>
<script>
// import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import axios from 'axios';
import {VueEditor} from 'vue2-quill-editor';
export default {
    components:{
        VueEditor
    },
    data(){
        return{
            // id:'',
            // content: '',

            customToolbar: [
                [{ size: ["small", false, "large", "huge"] }],

             [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["clean"]
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['image', 'code-block'],
          ],

        }
    },
    computed:{
        paginate(){
            return this.$store.state.paginate;

        },
        filesData(){
            return this.$store.state.filesData;
        },
        form(){
            return this.$store.state.form;
        },
        content(){
            return this.$store.state;
        },
        editmode(){
            return this.$store.state.editmode;
        }
    },
    mounted() {
        // this.get();
        this.Select();
        this.onChangePage();
        // this.comment();
    },
  methods: {
        Select(){
            return this.$store.dispatch("priorityTable");
        },
        onChangePage(page=1){
             return this.$store.dispatch("onChangePage", page);
        },
        base64convert(e){
             return this.$store.dispatch("imageConversion", e);
        },
        deleteArticle(index){
            this.$router.push("/dashboard");
            return this.$store.dispatch("deleteArticles", index);
        },
        editModal(index) {
            this.$refs['my-modal'].show();
            return this.$store.dispatch("editModal", index);
        },



        getSelectionText() {
            return this.$store.dispatch("selectedText");

        },
        get(){

           axios.get("/api/article",{
               headers:{
                   'Content-Type': 'application/json',
                   'Authorization': ""
               },
               baseURL:"http://localhost:8000"
           })
           .then(res => {
               this.Article = res.data;
            //    console.log("data" + this.Article);
           })
           .catch(err => {
               console.log(err.response);
           });
        },
        update(){
            this.$router.push("/dashboard");
            return this.$store.dispatch("updateArticles");
        },
        showModal() {
            this.$refs['my-modal'].show()
            return this.$store.dispatch("openModal");
         },
        add(){
            this.$router.push("/dashboard");
            return this.$store.dispatch("createArticle");
        },
        onReset() {
            return this.$store.dispatch("resetForm");
        }
    }
};
</script>
