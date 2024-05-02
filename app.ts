async function searchItems(query: string) {
    const accessToken = 'tu_token_de_acceso';
    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&access_token=${accessToken}`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  }

  searchItems('iphone').then((results) => {
    console.log(results);
  });