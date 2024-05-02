async function searchItems(query: string) {
    const accessToken = 'TG-6633de5266da290001e1e016-829591830';
    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&access_token=${accessToken}`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  }

  searchItems('iphone').then((results) => {
    console.log(results);
  });