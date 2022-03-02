import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_PASSWORD = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";

const state = {
  errors: null,
  user: {},
  dev:{},
  _router: null,
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("api/users", credentials)
        .then(({ data }) => {
            // console.log(data.Status);
            if(data.Status == 1){
                // console.log(this.state)
                this.state.auth.dev = data.user
                context.commit(SET_AUTH, data);
                resolve(data);

            }
            else{
                // console.log("e");
               this.$router.push({name:'login'});
               console.log("EEee");
            }

        })
        .catch(({ response }) => {
            // if(response.Status == 0){
                context.commit(SET_ERROR, response);
            // }
        });
    });
  },
  [LOGOUT](context, credentials) {
    ApiService.post("api/logout", credentials).then(({ data }) => {
        if(data.Status == 1){

            console.log("credentials", credentials)
            // state.isAuthenticated = false;
            // this.state.auth.dev = {}
            context.commit(PURGE_AUTH);
            }
    })
  },
  [REGISTER](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("api/signup", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [VERIFY_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("verify")
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_PASSWORD](context, payload) {
    const password = payload;

    return ApiService.put("password", password).then(({ data }) => {
      context.commit(SET_PASSWORD, data);
      return data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    // state.dev = user
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },
  [SET_PASSWORD](state, password) {
    state.user.password = password;
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
