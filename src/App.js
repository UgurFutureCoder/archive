import Recipeitem from "./recipe-item/Recipeitem";

function App() {
  return (
    <div className="App">
      <Recipeitem recipe={{
        name: 'Lazanya',
        id: 1
      }} />
      <Recipeitem recipe={{
        name: 'Margarita',
        id: 2
      }} />
      <Recipeitem recipe={{
        name: 'Pelmeni',
        id: 3
      }} />
    </div>
  );
}

export default App;
