fetch('https://teamsite.msc.com/sites/fr037-agl-dsi-catalogue-services/Documents%20partages/CatalogueListeJson/script.json')
    .then((response) => response.json())
    .then(response=> mx = response)
    .then((json) => console.log(mx));