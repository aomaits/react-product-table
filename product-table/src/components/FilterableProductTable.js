import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ( {products} ) => {
  console.log("Products at FilterableProductTable: ",products)

  return (
    <div>
      <SearchBar />
      {<ProductTable products={products} />}
    </div>
  )
}

export default FilterableProductTable;