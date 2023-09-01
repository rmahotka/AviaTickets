import axios from "axios";
import config from "../api/apiConfig";

class Api {
   constructor(config) {
      this.url = config.url;
   }

   async countries() {
      try {
         const response = fetch(`${this.url}/countries`);
         const countries = (await response).json();
         return countries;
      } catch (err) {
         throw new Error(err);
      }
   }

   async cities() {
      try {
         const respons = await axios.get(`${this.url}/cities`);
         return respons.data;
      } catch (err) {
         // Promise.reject(err);
         throw new Error(err);
      }
   }

   async prices(params) { }
}

const api = new Api(config);

export default api;
