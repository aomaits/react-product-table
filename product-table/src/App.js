import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import foodData from './foodData.json'

function App() {
  console.log("food data: ", foodData)

  return (
    <div className="App">
      <FilterableProductTable products={foodData} />
    </div>
  );
}

export default App;
