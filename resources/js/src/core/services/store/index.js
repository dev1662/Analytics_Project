import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import auth from "./auth.module";
import htmlClass from "./htmlclass.module";
import config from "./config.module";
import breadcrumbs from "./breadcrumbs.module";
import profile from "./profile.module";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    htmlClass,
    config,
    breadcrumbs,
    profile
  },
  state:{
    paginate:{},
    editmode: false,
    filesData:[],
    content:'',
    content2: '',
    key: '',
    comment:{},
    Article: [],
        form: {
              id: '',
            company_id: '',
            client_id: '',

            Keyword_id: null,
            date: '',
            writer: '',
            topic: '',
            focus: '',

            status: null,
            approval: '',
            doc: '',
            article: '',
            banner: '',
        },
        foods: [
             { value: null, text: 'Please select an option' },

               ],

        show: true
},
getters:{
    // onChangePage:state => {

    //     axios.get("/api/article?page=" + state.page,
    //     {
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'Authorization': ""
    //         },
    //         baseURL:"http://localhost:8000"
    //     })
    //     .then(res => {
    //         // console.log("dev"+res.data);
    //         // return res.data;
    //         state.paginate = res.data;
    //     })
    //     .catch(err => {
    //         console.log(err.response);
    //     });
},
actions:{
    onChangePage({commit}, page=1 ) {
        axios.get("/api/article?page=" + page,
        {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': ""
            },
            baseURL:"http://localhost:8000"
        }).then(res => {
            commit('SET_ARTICLES', res.data);
        })
    },
    priorityTable({commit}){
        axios.get("/api/priority",{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': ""
            },
            baseURL:"http://localhost:8000"
        }).then(response => {
            commit('GetPriority', response.data);
        })
    },
    createArticle({commit, state}){
        const formData = new FormData();
        const a ={
            'comapny_id' : state.form.company_id,
            'client_id': state.form.client_id,
            'keyword_id': state.form.Keyword_id,
            'date': state.form.date,
            'writer': state.form.writer,
            'topic': state.form.topic,
            'focus': state.form.focus,
            // 'priority': state.form.keyword,
            'status': state.form.status,
            'approval': state.form.approval,
            'doc': state.form.doc,
            //'banner': json_encode(state.form.banner),
            'article': state.form.article

        };
        formData.append('filesInfo',JSON.stringify(a));
        formData.append('image',state.form.banner);
        axios.post('/api/store/article',formData,{
            headers: {
                "Content-type":"multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
            },
            baseURL: "http://localhost:8000",
            method: "POST"
        }).then(res => {
            // this.$router.push("/dashboard");
            commit("createArticles", res.data.data);
        })
    },
    updateArticles({commit,state}){
        const formData = new FormData();
        const b ={
        'id':          state.form.id,
        'comapny_id' : state.form.company_id,
        'client_id':   state.form.client_id,
        'keyword_id':  state.form.Keyword_id,
        'date':        state.form.date,
        'writer':      state.form.writer,
        'topic':       state.form.topic,
        'focus':       state.form.focus,
        // 'priority': state.form.keyword,
        'status':      state.form.status,
        'approval':    state.form.approval,
        'doc':         state.form.doc,
        //'banner': json_encode(state.form.banner),
        'article':     state.form.article

        };


    formData.append('filesInfo',JSON.stringify(b));

    console.log("ID: " + b.id);
    formData.append('image',state.form.banner);
    axios.post('/api/update/article/' ,formData,{
        headers: {
               "Content-Type": "application/json",
                "Authorization": "",
            "Content-type":"multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
        },

        baseURL: "http://localhost:8000",
        method: "POST"

    }).then( res => {
        commit("updateArticles", res.data.data);
    })
    },
    deleteArticles({commit, state}, index){
        state.editmode = true;
        state.form.id = state.paginate.data[index].id;
        const form  = new FormData();
        const edit = {
            'id' : state.form.id,
        };
        form.append('id', JSON.stringify(edit));


        axios.post('/api/delete/article/' , form, {
            headers:{
                "Content-Type": "application/json",
                "Authorization": "",
                "Content-type":"multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)

            },
            baseURL: "http://localhost:8000",
            methods: "POST"
        }).then(res => {
                // this.$router.push('/dashboard');
                // this.Article.data.push(res.data.data);
                commit("deleteArticles", res.data.data)

        })
    },
    imageConversion({state}, e){
        if (e.target.files[0] !== null) {

            const file = e.target.files[0];

                console.log(file);

              const fileSize = file.size / 1024 / 1024;
              console.log("size:" + fileSize);

              console.log("s:"+ file.size);


           state.form.banner = true;
            const reader = new FileReader();
            reader.readAsDataURL(file);


            state.form.banner = file;
            console.log(state.form.banner);

            reader.onloadend = () => {
                state.form.banner = reader.result;
              console.log("banner: " + state.form.banner  );
            };
            }
    },
    openModal({state}){
        state.editmode =false;
        state.form.company_id = ''
        state.form.client_id = ''
        state.form.Keyword_id = ''
        state.form.date= ''
        state.form.writer = ''
        state.form.topic = ''
        state.form.focus = ''
    //  state.form.keyword = ''
        state.form.status = ''
        state.form.approval = ''
        state.form.doc = ''
        state.form.banner = ''
        state.form.article = ''
    },
    editModal({state}, index){
        state.editmode = true;
        state.form.id = state.paginate.data[index].id;
        state.form.company_id = state.paginate.data[index].company_id;
        state.form.client_id = state.paginate.data[index].client_id;
        state.form.Keyword_id = state.paginate.data[index].priority_keyword_id;
        state.form.date = state.paginate.data[index].date_published;
        state.form.writer = state.paginate.data[index].writer;
        state.form.topic = state.paginate.data[index].topic;
        state.form.focus = state.paginate.data[index].focus_keyword;

        state.form.status = state.paginate.data[index].status;
        state.form.approval = state.paginate.data[index].approval;
        state.form.doc = state.paginate.data[index].doc_link;
        state.form.article = state.paginate.data[index].article_link;
        state.form.banner = state.paginate.data[index].banner_images;
    },
    comment({state}){

        var hello = state.content2.replace(/(<([^>]+)>)/gi, "");
        console.log(hello);


       state.key = hello;

        state.content = "";


        // state.form.id = state.paginate.data[index].id;
    },
    addComment({commit, state}){


    //    $('#bold input').val = key
        const hello = state.content.replace(/(<([^>]+)>)/gi, "");
        const form = new FormData();
        const content = {
            // "id": state.form.id,
            "content" : hello,
            "keyword": state.key
        };
        form.append("json", JSON.stringify(content));
        axios.post("/api/comment/store",form, {
            headers:{
            "Content-Type": "application/json",
            "Authorization": "",
            },
            baseURL:"http://localhost:8000",
            methods:"POST"
        }).then(res => {
            commit("addComment", res.data.data);
        });
    },
    selectedText({state}){
        var text = document.getElementById('word');
         if (window.getSelection) {

            text = window.getSelection().toString();

        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;

        }
        var key = state.key;
        key = text;
        $('#bold input').val = key
        console.log();
        console.log(key);
        console.log(text);
    },
    resetForm({state}){
        state.form.company_id = ''
        state.form.client_id = ''
        state.form.Keyword_id = ''
        state.form.date= ''
        state.form.writer = ''
        state.form.topic = ''
        state.form.focus = ''

        state.form.status = ''
        state.form.approval = ''
        state.form.doc = ''
        state.form.banner = ''
        state.form.article = ''
    },
    allComments(){
        axios.get('/api/c', {
            headers:{
                "Content-type":"application-json",
                "Authorization":""
            },
            baseURL:"http://localhost:8000",
            method:"GET"

        }).then(res => {
            this.commit("get_all_comment", res.data);
        })
    }
},
mutations:{
        SET_ARTICLES(state, paginate){
            state.paginate = paginate

        },
        get_all_comment(state, comment){
            state.comment = comment
        },
        GetPriority(state, filesData)
        {
            state.filesData = filesData;
        },
        createArticles(state, Article)
        {
            state.Article.push = Article;
        },
        updateArticles(state, Article){
            state.Article.push = Article;
        },
        deleteArticles(state, Article){
            state.Article.push =Article;
        },
        addComment(state, Article){
            state.Article.push = Article;
        }
    //     SET_ARTICLES(state, paginate){
    //         state.paginate = paginate
    //     }
    // }
},
plugins: [createPersistedState()]
});
