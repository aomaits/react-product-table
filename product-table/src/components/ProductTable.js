import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ( {products} ) => {
  const rows = [];
  let lastCategory = null;

  // console.log("products at ProductTable: ", products )

  products.forEach((product) => {
    // console.log(product.category)

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
        category={product.category}
        key={product.category} />
      );
    }

    rows.push(
      <ProductRow
      product={product}
      key={product.name} />
    );

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;