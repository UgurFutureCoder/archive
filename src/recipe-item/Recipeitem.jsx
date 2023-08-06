import { useSelector } from "react-redux"
import { useActions } from "../hooks/useActions"

function Recipeitem({recipe}) {
    const favorates = useSelector(state => state.favorite)
    const {addToFavorites} = useActions()
      
    const isExsist = favorates.some(r => r.id === recipe.id)
    return (
        <div>
    <h2>{recipe.name}</h2>
    <button onClick={() => {
        addToFavorites(recipe)
    }}>{isExsist ? 'Remove from' : 'Add to'} favorites</button>
        </div>
    )
}

export default Recipeitem