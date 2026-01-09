import Ingredient from "../Ingredient/Ingredient";

//BASIC
// const IngredientList = ({ingredients, addToBurger}) => {
//   return(
//     <ul>
//         {ingredients.map ((ingredient,index)=>(
//             <li key={index} style={{ backgroundColor: ingredient.color }}>{ingredient.name} <button onClick={() => addToBurger(ingredient)}>+</button></li> 
//         ))}
//     </ul>
//   )
// };

// LEVEL UP
const IngredientList = ({ingredients, addToBurger}) => {
    return(
        <ul>
            {ingredients.map((ingredient, index)=>(
                <Ingredient key={index} ingredient={ingredient} onClick={addToBurger} symbol='+'/>
            ))}
        </ul>
    )
};



export default IngredientList;
