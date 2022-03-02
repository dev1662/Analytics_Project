import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store=  new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {}

state:{
    paginate:[{name:"dev"}],
    page:1,
},
getters:{
    onChangePage:state => {
        return state.paginate;
        // axios.get("/api/article?page=" + state.page,
        // {
        //     headers:{
        //         'Content-Type': 'application/json',
        //         'Authorization': ""
        //     },
        //     baseURL:"http://localhost:8000"
        // })
        // .then(res => {
        //     // console.log("dev"+res.data);
        //     return res.data;
        //     // state.paginate = res.data;
        // })
        // .catch(err => {
        //     console.log(err.response);
        // });
},
// mutations:{
//     onChangePage: state => {
//         axios.get("/api/article?page=" + state.page,
//         {
//             headers:{
//                 'Content-Type': 'application/json',
//                 'Authorization': ""
//             },
//             baseURL:"http://localhost:8000"
//         })
//         .then(res => {
//             state.paginate = res.data;
//         })
//         .catch(err => {
//             console.log(err.response);
//         });

//     }
}
});
