import { Kiosco, kiosco, Producto, Reporte, reporte } from "./data";

async function searchItems(query: string): Promise<Promise<Producto[]>> {
  try {
      const accessToken = process.env.ACCESS_TOKEN;
      console.log(accessToken);
      const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&access_token=${accessToken}`;
      
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.results;
  } catch (error) {
      console.error('Error en searchItems:', error);
      throw error;
  }
}

searchItems('iphone').then((results) => {
  console.log(results);
}).catch((error) => {
  console.error('Error en búsqueda de artículos:', error);
});


export function getItems (query: string): Kiosco {
//le pego a la api para tener acceso al json que tiene la informacion que necesito
return kiosco;
}

export function compareItemsPerDay (precioDeUno: Producto, precioDelOtro: Producto): Kiosco {
//comparo el precio del día anterior que fue registrado con el precio que me llega de la base de 
return kiosco;
}

export function compareItemsPerWeek (precioDeUno: Producto, precioDelOtro: Producto): Reporte {
//comparo el precio del día anterior que fue registrado con el precio que me llega de la base de datos
return reporte;
}


export function putItemsInDataBase (productos: Kiosco) {
//piso la base de datos con la nueva información de los items del kiosco
}

export function showItems (itemsParaMostrar: Kiosco) {
//aprovecho la info de la base de datos para actualizar el "panel de control"del Kiosquero
}


