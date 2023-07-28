// challenge link : https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag (str) {
    let tab_str;
    // If the input is an empty string it must return false.
    let result;
    let hashTables = [];
    if(str === "") {
        return false;
    }
    else{
        tab_str = str.split(" ");
        
        for(let i = 0; i < tab_str.length;i++)
        {
            if(tab_str[i] !== "") {
                let tab = tab_str[i].split("");
            
            hashTables[i] = String(tab[0]).toUpperCase() + tab.slice(1,tab.length).join("");
            
            }
            
        }

        result = hashTables.join("");

        // final result
    // If the result is an empty string it must return false.
    if(result === ""){
        return false;
    }
    else if(result.length >= 140){
        return false;
    }
    else{
        return "#"+result;
    }
    }
    



    
}

console.log(generateHashtag("a".repeat(140)))


//console.log("Hello".split(""))

