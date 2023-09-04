import "materialize-css/dist/css/materialize.min.css";
// eslint-disable-next-line import/extensions
import "materialize-css/dist/js/materialize.min.js";

// Init select
const selects = document.querySelectorAll("select");
// eslint-disable-next-line no-undef
M.FormSelect.init(selects);

export function getSelectInstance(elem) {
   // eslint-disable-next-line no-undef
   return M.FormSelect.getInstance(elem);
}

// Init Autocomplete
const allAutocomplete = document.querySelectorAll(".autocomplete");
// eslint-disable-next-line no-undef
M.Autocomplete.init(allAutocomplete);

export function getAutocompleteInstance(elem) {
   // eslint-disable-next-line no-undef
   return M.Autocomplete.getInstance(elem);
}

// Init Datepicker
const datepickers = document.querySelectorAll(".datepicker");
// eslint-disable-next-line no-undef
M.Datepicker.init(datepickers, {
   showClearBtn: true,
   format: "yyyy-mm",
});

// eslint-disable-next-line import/prefer-default-export
export function getDatePickerInstance(elem) {
   // eslint-disable-next-line no-undef
   return M.Datepicker.getInstance(elem);
}
