import api from "../services/servicesConfig";

class Locations {
   // eslint-disable-next-line no-shadow
   constructor(api) {
      this.api = api;
      this.countries = null;
      this.cities = null;
      this.autocompliteCitiesList = null;
   }

   async init() {
      const response = await Promise.all([
         this.api.countries(),
         this.api.cities(),
      ]);

      const [countries, cities] = response;
      this.countries = this.serializeCounty(countries);
      this.cities = this.seralizeCities(cities);
      this.autocompliteCitiesList = this.autocompliteSerialiceByCity(this.cities);

      return response;
   }

   // eslint-disable-next-line class-methods-use-this
   autocompliteSerialiceByCity(cities) {
      return Object.keys(cities).reduce((acc, key) => {
         acc[key] = null;
         return acc;
      }, {});
   }

   // eslint-disable-next-line class-methods-use-this
   serializeCounty(countries) {
      return countries.reduce((acc, country) => {
         acc[country.code] = country;
         return acc;
      }, {});
   }

   seralizeCities(cities) {
      return cities.reduce((acc, city) => {
         const countryName = this.getCountryNameByCode(city.country_code);
         const cityName = city.name || city.name_translations.en;
         const key = `${cityName},${countryName}`;
         acc[key] = city;
         return acc;
      }, {});
   }

   getCountryNameByCode(code) {
      return this.countries[code].name;
   }

   getCityByCode(key) {
      return this.cities[key].code;
   }

   async fetchTickets(params) {
      const respons = await this.api.prices(params);
      console.log(respons);
      return respons;
   }
}

const locations = new Locations(api);

export default locations;
