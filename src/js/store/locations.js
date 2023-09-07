import api from "../services/servicesConfig";

class Locations {
   // eslint-disable-next-line no-shadow
   constructor(api) {
      this.api = api;
      this.countries = null;
      this.cities = null;
      this.autocompliteCitiesList = null;
      this.airlines = null;
   }

   async init() {
      const response = await Promise.all([
         this.api.countries(),
         this.api.cities(),
         this.api.airlines(),
      ]);

      const [countries, cities, airlines] = response;
      this.countries = this.serializeCounty(countries);
      this.cities = this.seralizeCities(cities);
      this.autocompliteCitiesList = this.autocompliteSerialiceByCity(this.cities);
      this.airlines = this.serializeAirlines(airlines);
      console.log(response);
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

   serializeAirlines(airline) {
      return airline.reduce((acc, item) => {
         item.logo = `http://pics.avs.io/200/200/${item.code}.png`;
         item.name = item.name || item.name_translations.en;
         acc[item.code] = airline;
         return acc;
      }, {});
   }

   getCountryNameByCode(code) {
      return this.countries[code].name;
   }

   getCityByCode(key) {
      return this.cities[key].code;
   }

   getAirlinesAviaCompanyName(code) {
      return this.airlines[code] ? this.airlines[code].name : "";
   }

   getAirlinesAviaCompanyLogo(code) {
      return this.airlines[code] ? this.airlines[code].logo : "";
   }

   async fetchTickets(params) {
      const respons = await this.api.prices(params);
      return respons;
   }
}

const locations = new Locations(api);

export default locations;
