export async function getRecipesData(foodWanted, diets) {
    var request;
    console.log(foodWanted.length);
    if (foodWanted.length <= 50) {
        request = "https://api.edamam.com/api/recipes/v2?type=public&q=" + foodWanted + "&app_id=a244ee5a&app_key=f8eca7e8bfaf220ba8c0b1785ee5a3ce";
        if (!diets.lenght) {
            diets.forEach(function(item) {
                console.log(item);
                request += "&diet=" + item;
            });
        }
        console.log(request);
    } else {
        request = foodWanted;
    }

    const response = await fetch(request)
    if (response.status == 200) {
        return response.json()
    } else {
        new Error(response.statusText)
    }
}

export async function getRecipesDataById(recipeId) {
    let recipeIdChanged = recipeId.replace(/:/g, "%253A");
    recipeIdChanged = recipeIdChanged.replace(/\//g, "%252F");
    recipeIdChanged = recipeIdChanged.replace(/#/g, "%2523");

    let request = "https://api.edamam.com/api/recipes/v2/" + recipeIdChanged + "?type=public&app_id=a244ee5a&app_key=f8eca7e8bfaf220ba8c0b1785ee5a3ce";

    const response = await fetch(request)
    if (response.status == 200) {
        return response.json()
    } else {
        new Error(response.statusText)
    }
}