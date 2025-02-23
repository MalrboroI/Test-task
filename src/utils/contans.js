//   Базовый URL API
export const BASE_HOST = "https://jsonplaceholder.typicode.com";

//  Путь к ассетам в зависимости от режима (development/production).

export const ASSETS_PATH =
  import.meta.env.MODE === "development" ? "./src/assets" : "/assets";
