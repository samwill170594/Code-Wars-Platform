// https://www.codewars.com/kata/563fbac924106b8bf7000046/train/javascript

function generateBC(url, separator) {
    let new_url = url;
    if(new_url.includes("http"))
    {
        new_url = new_url.split("//")[1];
    }
    console.log(new_url);

    let fileExtensions = ["html","php","asp","htm"];
    let parts = new_url.split("/").filter((item) => item !== "");
    //.filter((item) => item !== "")
    let before_last_item = "";
    let path = [];

    if(parts.length === 1){
        return `<span class="active">HOME</span>`;
    }

    else if(parts.length === 2 && parts[1].includes("index")){
        return `<span class="active">HOME</span>`;
    }

    let customized_parts = parts.map((item,index) => {
        if(item !== ""){
            
        }

        if(index === 0){
            if(parts.length !== 1){
                return `<a href="/">HOME</a>`;
            }
            else{
                return `<span class="active"></span>`;
            }
            
        } 
        else if(index === parts.length - 1){
            
            let last_item_parts = item.split(".");
            if(item === last_item_parts[0] && item !== ""){
                return `<span class="active">${shorten(process_text(item.toUpperCase()))}</span>`;
            }
            else if(item.split(".")[0].toLowerCase() === "index"){
                return `<span class="active">INDEX</span>`;

            }
            // fileExtensions.filter((item) => item === item.split(".")[1].toLowerCase()).length > 0
            
            else if(fileExtensions.filter((i) => (item.split(".")[1]).includes(i)).length > 0) {
                return  `<span class="active">${shorten(process_text((item.split(".")[0]).toUpperCase()))}</span>`;
            }
            else return ``;
            
        } 
        
        else { if(index === parts.length - 2) {before_last_item = item}

        if(index !== 0 && item !== "") {path.push(item);}
        //return `<a href="/${item.toLowerCase()}/">${shorten(item.toUpperCase())}</a>`};
        return `<a href="/${path.join("/")}/">${shorten(item.toUpperCase())}</a>`};

    });


    if(customized_parts[customized_parts.length -1] === '<span class="active">INDEX</span>'){
        customized_parts[customized_parts.length - 2] = `<span class="active">${shorten(process_text(before_last_item.toUpperCase()))}</span>`;
        return customized_parts.slice(0,customized_parts.length-1).join(separator)
    }
    else if(customized_parts.length === 1){return `<span class="active">HOME</span>`}
    else return customized_parts.join(separator);

  }


  function process_text(text){
    
    let result = text.split("?")[0];
    result = result.split("#")[0];
    result = result.split("&")[0];
    return result;
  }

  function shorten(text){
    let words_to_ignore = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
    if(text.length <= 30) {
        return text.toUpperCase().split("-").join(" ");
    }

    else {
        let parts = text.split("-");
        let shorten_text = "";
        for(part of parts){
            let is_in_ignored_words = words_to_ignore.filter((item) => item === part.toLowerCase());
            if(is_in_ignored_words.length > 0){
                continue;
            }
            shorten_text += (part[0]).toUpperCase() + "";
        }
        return shorten_text.trim();
    }
  }


  console.log(generateBC("www.agcpartners.co.uk/","*"));

