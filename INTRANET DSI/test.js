fetch('https://teamsite.msc.com/sites/fr037-agl-dsi-catalogue-services/Documents%20partages/CategorieJson/script.json')
.then(response => {
    let data = response.json();
    return data;
    //console.log(`Data ==> ${data}`)
} )
.then((response) => {
    console.log(response);
})
