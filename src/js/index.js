import locations from "./store/locations";

(async () => {
   const res = await locations.init();
   console.log(res);
   console.log(locations);
}
)();
