
// eslint-disable-next-line no-unused-vars
import React from 'react'

// use unsplash to get one random photo
// eslint-disable-next-line no-unused-vars, react/prop-types
function ProductCard({brand, id, name, price, category}) {
  return (
    <div className=' p-10 bg-zinc-100'>
      <img className="h-72 w-72 object-cover" src='https://tse4.mm.bing.net/th?id=OIP.ooYUQpt6VpOUlVpART8hFQHaE8&pid=Api&P=0&h=180'
      alt=''/>
      <h2>{brand} {name}</h2>
      <h2>{price}</h2>
      <h3>{category}</h3>
    </div>
  )
}

export default ProductCard