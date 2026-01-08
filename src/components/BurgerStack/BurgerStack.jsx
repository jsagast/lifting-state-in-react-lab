
const BurgerStack = ({stack}) => {
    return(
    <ul>
        {stack.map ((ingredient,index)=>(
            <li key={index} style={{ backgroundColor: ingredient.color }}>{ingredient.name}</li> 
        ))}
    </ul>
  )
};

export default BurgerStack;
