fetch("https://teamsite.msc.com/sites/fr037-agl-dsi-catalogue-services/SitePages/Mod%C3%A8les/D%C3%A9tails.aspx", {
  method: "POST",
  body: JSON.stringify({
    ID: 1,
    Title: "",
    Description: "",
    Categorie : "",
    Type : "",
    UrlImage : "",
    UrlPage : ""


  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
}).then((response) => response.json())
.then((json) => console.log(json));

// Enregistrer des données dans sessionStorage
sessionStorage.setItem("SPT_DETAIL_CATALOGUE_SERVICE",{
    ID: 1,
    Title: "",
    Description: "",
    Categorie : "",
    Type : "",
    UrlImage : "",
    UrlPage : ""


  });

  console.log(sessionStorage.getItem("SPT_DETAIL_CATALOGUE_SERVICE"))