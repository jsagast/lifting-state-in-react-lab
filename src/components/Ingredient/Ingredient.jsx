
const Ingredient = ({ ingredient, onClick, symbol }) => {

    return (
        <li style={{backgroundColor: ingredient.color}}>
            {ingredient.name}
            <button onClick={()=>onClick(ingredient)}>{symbol}</button>
        </li>
    );
};

export default Ingredient;

