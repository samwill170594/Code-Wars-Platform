var selectedItem = JSON.parse(localStorage.getItem("SPT_DETAIL_CATALOGUE_SERVICE"));
document.body.innerHTML = document.body.innerHTML.replace(/NomServiceApplication/g, selectedItem.Title);
document.body.innerHTML = document.body.innerHTML.replace(/CatalogueDescription/g, selectedItem.Description);