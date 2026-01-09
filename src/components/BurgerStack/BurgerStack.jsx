import Ingredient from "../Ingredient/Ingredient";

//BASIC
// const BurgerStack = ({stack, removeFromBurger}) => {
//     return(
//     <ul>
//         {stack.map ((ingredient,index)=>(
//             <li key={index} style={{ backgroundColor: ingredient.color }}>{ingredient.name} <button onClick={() => removeFromBurger(ingredient)}>X</button></li> 
//         ))}
//     </ul>
//   )
// };

// LEVEL UP
const BurgerStack = ({stack, removeFromBurger}) => {
    return(
        <ul>
            {stack.length===0?<p>Let's start building your Burger - Add your Ingredients</p>:
            stack.map((ingredient, index)=>(
                <Ingredient key={index} ingredient={ingredient} onClick={removeFromBurger} symbol="X" />
            ))}
        </ul>
    )
};

export default BurgerStack;
