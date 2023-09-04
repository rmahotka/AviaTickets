import axios from "axios";
import config from "../api/apiConfig";

class Api {
   // eslint-disable-next-line no-shadow
   constructor(config) {
      this.url = config.url;
   }

   async countries() {
      try {
         const respons = await axios.get(`${this.url}/countries`);
         return respons.data;
      } catch (err) {
         throw new Error(err);
      }
   }

   async cities() {
      try {
         const respons = await axios.get(`${this.url}/cities`);
         return respons.data;
      } catch (err) {
         throw new Error(err);
      }
   }

   async prices(params) {
      try {
         const response = await axios.get(`${this.url}/prices/cheap`, {
            params,
         });
         return response.data;
      } catch (err) {
         throw new Error(err);
      }
   }
}

const api = new Api(config);

export default api;
