import locations from "./store/locations";
import formUI from "./views/form";
import currencyUI from "./views/currency";

document.addEventListener("DOMContentLoaded", () => {
   const { form } = formUI;

   async function onFormSubmit() {
      const origin = locations.getCityByCode(formUI.originValue);
      const destination = locations.getCityByCode(formUI.destinationValue);
      // eslint-disable-next-line camelcase
      const depart_date = formUI.departDatePickertValue;
      // eslint-disable-next-line camelcase
      const return_date = formUI.returntDatePickerValue;
      const currency = currencyUI.currencyValue;

      await locations.fetchTickets({
         origin,
         destination,
         // eslint-disable-next-line camelcase
         depart_date,
         // eslint-disable-next-line camelcase
         return_date,
         currency,
      });
   }

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      onFormSubmit();
   });

   async function initUI() {
      await locations.init();
      formUI.setAutocompliteDate(locations.autocompliteCitiesList);
   }

   initUI();
});
