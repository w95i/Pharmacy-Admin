// stores/languageStore.js
import axiosData from "@/Axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userData", {
  state: () => ({
    userData: {},
    allUsers:[],
    success:false,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchLogin(email, password) {
      try {
        this.loading = true;
        this.error = null;

        const response = await axiosData.post("/Users/Login", {
          email: email,
          password: password,
        });
        console.log(response);
        console.log(response.status);
        if(response.status === 200) {
            this.success = true;
            this.userData = response.data;
            localStorage.setItem("AdminToken", response.data.token.result);
        } else {
            this.success = false;
            this.userData = {};
            localStorage.removeItem("AdminToken");
        }

      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async GetAllUsers(){
      try{
        const response = await axiosData.get('/Users/get-all-users')
        this.allUsers = response.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
});
