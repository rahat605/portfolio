export const getImageUrl = (path)=>{
    return new URL ("./assets/"+path, import.meta.url).href;  
    // return new URL (`./assets/${path}`,import.meta.url).href;      //test in windows
};