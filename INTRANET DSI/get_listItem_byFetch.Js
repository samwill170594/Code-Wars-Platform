var SelectedItem = fetch('https://teamsite.msc.com/sites/fr037-agl-dsi-catalogue-services/_api/web/lists(guid"484dd6cc-cfc5-42b2-886c-986ec19e3594")')
    .then((response) => response.json())
    .then(response=> SelectedItem = response)
    .then((json) => {

        var filter = SelectedItem.filter((x) => (Number(x.ID) === selectedId));

        for (var i = 0; i < filter.length; i++) {
            document.body.innerHTML = document.body.innerHTML.replace(/NomServiceApplication/g, filter[i].Title);
            document.body.innerHTML = document.body.innerHTML.replace(/CatalogueDescription/g, filter[i].Description);
        }

        
    
    });