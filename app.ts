async function searchItems(query: string) {
  try {
      const accessToken = 'APP_USR-3895335878647153-050215-8e3cbff7fb824fded20a01a5c41f82cb-829591830';
      const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&access_token=${accessToken}`;
      
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.results;
  } catch (error) {
      console.error('Error en searchItems:', error);
      throw error; // Lanza el error para que sea capturado por la promesa
  }
}

searchItems('iphone').then((results) => {
  console.log(results);
}).catch((error) => {
  console.error('Error en búsqueda de artículos:', error);
});
