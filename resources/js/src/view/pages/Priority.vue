<template>
  <div>

        <div>
  <b-button   class="btn btn-success" @click="showModal">Add Priority</b-button>

  <b-modal ref="my-modal" id="modal-1" title="Priority">
      <b-form v-on:submit.prevent="editmode ? update() : add()" @reset="onReset" method="POST">
           <b-form-input
        id="input-1"
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

        placeholder="Enter Comapny ID"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2"  label="Your Client ID:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.client_id"

        placeholder="Enter Client Id"
      ></b-form-input>
    </b-form-group>

     <b-form-group id="input-group-3" label="Your Priority Keyword:" label-for="input-3">
      <b-form-input
        id="input-3"
        v-model="form.Keyword"

        placeholder="Enter Keyword "
      ></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>



  </b-modal>
<br><br>
      <table id="customers">
          <tr>
              <th>Company Id</th>
              <th>Client id</th>
              <th>Keyword</th>
              <th>Action</th>
          </tr>

          <tr v-for="index in priority" :key="index.id">

              <td><b>{{index.comapny_id}}</b></td>
              <td><b>{{index.client_id}}</b></td>
              <td><b>{{index.priority_keyword}}</b></td>
              <td><b><button class="btn btn-info" @click="editModal(priority.indexOf(index))">Edit</button>
              </b>
              <b><button class="btn btn-danger" @click="deleteUser(priority.indexOf(index))">Delete</button>
              </b></td>
          </tr>
      </table>
    </div>


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
import axios from 'axios';
import {bus} from '@/main';
import router from 'vue-router';
export default {
    created(){
        this.sendData();
    },
    mounted() {

    this.get();

  },

  data() {
    return {

      editmode: false,

      priority: [],
      form: {
        id: '',
        company_id: '',
        client_id: '',
        Keyword: ''
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }

  },
  methods: {
        sendData(){
           bus.$emit('sendData',this.priority);
        },
        deleteUser(index){
            this.priority.splice(index);
            this.form.id = this.priority[index].id;
            const edit = {
                'id' : this.form.id,
            };
            console.log( edit);
            axios.post('/api/delete/priority/' + edit.id , edit, {
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": ""
                },
                baseURL: "http://localhost:8000"
            }).then(res => {
                    this.priority.push(res.data.data)

            }).catch(err => {
                console.log(err.response);
            });
        },
        update(){

            const edit = {
                'id' : this.form.id,
               'company_id' : this.form.company_id,
               'client_id': this.form.client_id,
               'keyword': this.form.Keyword,
            };
            console.log( edit);
            axios.post('/api/update/priority/' + edit.id , edit, {
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": ""
                },
                baseURL: "http://localhost:8000"
            }).then(res => {
                this.$router.push("/dashboard");
                this.priority.push(res.data.data)

            }).catch(err => {
                console.log(err.response);
            });
        },
        get(){

           axios.get("/api/priority",{
               headers:{
                   'Content-Type': 'application/json',
                   'Authorization': ""
               },
               baseURL:"http://localhost:8000"
           })
           .then(res => {
                this.priority = res.data;
           })
           .catch(err => {
                console.log(err.response);
           });
       },
        showModal() {
            this.editmode = false;
            this.$refs['my-modal'].show()
            this.form.company_id = '';
            this.form.client_id = '';
            this.form.Keyword = '';

        },
       editModal(index) {
            this.editmode = true;
            this.$refs['my-modal'].show();
            this.form.id = this.priority[index].id;
            this.form.company_id = this.priority[index].comapny_id;
            this.form.client_id = this.priority[index].client_id;
            this.form.Keyword = this.priority[index].priority_keyword;

        },

    add(){
           const emp = {
               'company_id' : this.form.company_id,
               'client_id': this.form.client_id,
               'keyword': this.form.Keyword,
           };
           axios.post("/api/store/priority",emp,{
               headers:{
                   'Content-Type':"application/json",
                   'Authorization': ""
               },
             baseURL:"http://localhost:8000"

           })
           .then(res => {
               this.$refs['my-modal'].hide();
               this.priority.push(res.data.data);
           })
           .catch(err =>{
               console.log(err.response);
           });
    },
    onReset(evt) {
          evt.preventDefault()
          // Reset our form values
        this.form.company_id = ''
        this.form.client_id = ''
        this.form.Keyword = ''

    }

  }
};
</script>
