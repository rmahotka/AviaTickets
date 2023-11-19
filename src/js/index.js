// import "../css/style.css";
import "./plugins";
import locations from "./store/locations";
import formUI from "./views/form";
import ticketsUI from "./views/tickets";
import currencyUI from "./views/currency";

document.addEventListener("DOMContentLoaded", (e) => {
   const { form } = formUI;

   // handlers
   async function initApp() {
      await locations.init();
      formUI.setAutocompleteData(locations.shortCities);
   }

   // Events
   initApp();
   form.addEventListener("submit", (event) => {
      event.preventDefault();
      onFormSubmit();
   });

   async function onFormSubmit() {
      const origin = locations.getCityCodeByKey(formUI.originValue);
      const destination = locations.getCityCodeByKey(formUI.destinationValue);
      const depart_date = formUI.departDateValue;
      const return_date = formUI.returnDateValue;
      const currency = currencyUI.currecyValue;

      await locations.fetchTickets({
         origin,
         destination,
         depart_date,
         return_date,
         currency,
      });

      console.log(locations.lastSearch);
      ticketsUI.renderTickets(locations.lastSearch);
   }
});
