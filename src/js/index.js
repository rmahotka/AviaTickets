import locations from "./store/locations";
import formUI from "./views/form";
import currencyUI from "./views/currency";

document.addEventListener("DOMContentLoaded", () => {
   const { form } = formUI;

   async function onFormSubmit() {
      const origin = locations.getCityByCode(formUI.originValue);
      const destinat = locations.getCityByCode(formUI.destinationValue);
      const departDate = formUI.departDatePickertValue;
      const retrurnDate = formUI.returntDatePickerValue;
      const currency = currencyUI.currencyValue;

      await locations.fetchTickets({
         origin,
         destinat,
         departDate,
         retrurnDate,
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
