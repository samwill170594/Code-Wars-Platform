function GetParameterValues(param) {
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
    var urlparam = url[i].split('=');
    if (urlparam[0] == param) {
    return parseInt(urlparam[1]);
    }
    }
    }


var selectedId = GetParameterValues('SelectedID');

var SelectedItem = fetch('https://teamsite.msc.com/sites/fr037-agl-dsi-catalogue-services/Documents%20partages/CatalogueListeJson/script.json')
    .then((response) => response.json())
    .then(response=> SelectedItem = response)
    .then((json) => {

        var filter = SelectedItem.filter((x) => (Number(x.ID) === selectedId));

        for (var i = 0; i < filter.length; i++) {
            document.body.innerHTML = document.body.innerHTML.replace(/NomServiceApplication/g, filter[i].Title);
            document.body.innerHTML = document.body.innerHTML.replace(/CatalogueDescription/g, filter[i].Description);
        }

        
    
    });