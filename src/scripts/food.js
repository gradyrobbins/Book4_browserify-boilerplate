 //this module builds out a single object, representing one food item to be appended to DOM in another module
 
 
 const food = {
     foodBuilder (foodObject) => {
        let foodArticle = document.createElement("article");

        let foodName = document.createElement("h3");
        foodName.textContent = foodObject.name;

        let foodExpiry = document.createElement("p");
        foodExpiry.textContent = foodObject.foodExpiry;

        let foodType = document.createElement("p");
        foodType.textContent = foodObject.foodType;

        foodArticle.appendChild(foodName);
        foodArticle.appendChild(foodExpiry);
        foodArticle.appendChild(foodType);

        return foodArticle
}
 }

export default food;


// ====>

// what the DOM build out will look like
{/* <article>
    <h3>${name}</h3>
    <p>${expiry}</p>
    <p>${type}</p>
</article> */}