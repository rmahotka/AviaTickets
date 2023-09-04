import { getAutocompleteInstance, getDatePickerInstance } from "../plugins/materialize";

class FormUI {
   constructor(autocompleteInstance, datePickerInstance) {
      // eslint-disable-next-line no-underscore-dangle, dot-notation
      this._form = document.forms["formTickets"];
      this.origin = document.getElementById("autocomplete-origin");
      this.destination = document.getElementById("autocomplete-destination");
      this.depart = document.getElementById("datepicker-depart");
      this.return = document.getElementById("datepicker-return");
      this.originAutocomplete = autocompleteInstance(this.origin);
      this.destinationAutocomplete = autocompleteInstance(this.destination);
      this.departDatePicker = datePickerInstance(this.depart);
      this.returntDatePicker = datePickerInstance(this.return);
   }

   get form() {
      // eslint-disable-next-line no-underscore-dangle
      return this._form;
   }

   get originValue() {
      return this.origin.value;
   }

   get destinationValue() {
      return this.destination.value;
   }

   get departDatePickertValue() {
      return this.departDatePicker.toString();
   }

   get returntDatePickerValue() {
      return this.returntDatePicker.toString();
   }

   setAutocompliteDate(data) {
      this.originAutocomplete.updateData(data);
      this.destinationAutocomplete.updateData(data);
   }
}

const formUI = new FormUI(getAutocompleteInstance, getDatePickerInstance);

export default formUI;
