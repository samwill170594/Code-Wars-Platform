// create a slug from text

function createSlug(text){
    let trimmedText = text.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let words = trimmedText.split(" ");

    return words.join("-");
}


console.log(createSlug("mérci pour tout"));