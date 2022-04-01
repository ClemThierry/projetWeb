const getRecipesData = async function(foodWanted) {

    // let foodWanted = "pizza";
    // console.log(foodWanted);
    // getRecipesDataById("http://www.edamam.com/ontologies/edamam.owl#recipe_5cfd32ab67396a6249f599b2f53e6b57");

    let request = "https://api.edamam.com/api/recipes/v2?type=public&q=" + foodWanted + "&app_id=a244ee5a&app_key=f8eca7e8bfaf220ba8c0b1785ee5a3ce";
    const response = await fetch(request, {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" }
    })
    if (response.status == 200) {
        return await response.json()

    } else {
        new Error(response.statusText)
    }
}

// const getRecipesDataById = async function(recipeId) {
//     // let recipeId = "http://www.edamam.com/ontologies/edamam.owl#recipe_5cfd32ab67396a6249f599b2f53e6b57";
//     let recipeIdChanged = recipeId.replace(/:/g, "%253A");
//     recipeIdChanged = recipeIdChanged.replace(/\//g, "%252F");
//     recipeIdChanged = recipeIdChanged.replace(/#/g, "%2523");
//     console.log(recipeIdChanged);

//     // let request = "https://api.edamam.com/api/recipes/v2/http%253A%252F%252Fwww.edamam.com%252Fontologies%252Fedamam.owl%2523recipe_5cfd32ab67396a6249f599b2f53e6b57?type=public&app_id=a244ee5a&app_key=f8eca7e8bfaf220ba8c0b1785ee5a3ce";
//     let request = "https://api.edamam.com/api/recipes/v2/" + recipeIdChanged + "?type=public&app_id=a244ee5a&app_key=f8eca7e8bfaf220ba8c0b1785ee5a3ce";
//     const response = await fetch(request, {
//         method: "GET",
//         headers: { "Content-type": "application/json;charset=UTF-8" }
//     })
//     if (response.status == 200) {
//         return await response.json()

//     } else {
//         new Error(response.statusText)
//     }
// }

// console.log(getRecipesData("pizza"));
export default getRecipesData