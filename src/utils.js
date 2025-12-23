// export const getImageUrl = (path)=>{
//     return new URL ("./assets/"+path, import.meta.url).href;
// };  

const images = import.meta.glob(
  "/src/assets/**/*.{png,jpg,jpeg,svg,webp}",
  { eager: true, import: "default" }
);

export const getImageUrl = (path) =>
  images[`/src/assets/${path}`];
