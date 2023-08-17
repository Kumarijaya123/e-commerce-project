/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProductCard from './ProductCard'
// eslint-disable-next-line react/prop-types
function Products({products}) {
  return (
    <div className="container mx-auto grid grid-cols-4 justify-between gap-6">
    {products.map((product) => {
    return <ProductCard 
    key={product.id}
     id={product.id} 
     name={products.product_name} 
     brand = {product.brand} 
     price = {product.price}
     category={product.category}
     />
    })}
    </div>
   
  )
}

export default Products