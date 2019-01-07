// 1. get all foods
// 2. loop over array []
// 3. use FoodBuilder for each item in teh array
// 4. append to DOM

import foodCollection from "./foodCollection"
import food from "./food"


const foodList = {
fridgify(){
    foodCollection.getAllFoods()
    .then(allFoods => {
        let foodDocFragment
        allFoods.forEach(foodItem => {
           let foodHTML = food.foodBuilder(foodItem)
           console.log(foodHTML);
        })
    })
}

}

export default foodList