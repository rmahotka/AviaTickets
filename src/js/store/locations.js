import api from "../services/servicesConfig";

class Locations {
   constructor(api) {
      this.api = api;
      this.countries = null;
      this.cities = null;
      this.autocompliteCities = null;
   }

   async init() {
      const response = await Promise.all([
         this.api.countries(),
         this.api.cities(),
      ]);

      const [countries, cities] = response;
      this.countries = this.serializeCounty(countries);
      this.cities = this.seralizeCities(cities);
      this.autocompliteCities = this.autocompliteSerialiceByCity(this.cities);

      return response;
   }

   autocompliteSerialiceByCity(cities) {
      return Object.keys(cities).reduce((acc, key) => {
         acc[key] = null;
         return acc;
      }, {});
   }

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

   getCodeByCities(code) {
      return this.cities.filter((city) => city.country_code === code);
   }
}

const locations = new Locations(api);

export default locations;
