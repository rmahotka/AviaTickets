import locations from "./js/store/locations";

const res = await locations.init();
console.log(res);
console.log(locations);
console.log(locations.getCodeByCities("NC"));
// locations.init().then((res) => {
//    console.log(res);
//    console.log(locations);
//    console.log(locations.getCodeByCities("NC"));
// });
