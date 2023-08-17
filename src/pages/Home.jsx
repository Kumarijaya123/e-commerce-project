// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react"
import { supabase } from "../config/supabase"
import Products from "../components/Products"
function Home() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([])
    // eslint-disable-next-line no-unused-vars
    async function fetchProducts(){
    // eslint-disable-next-line no-unused-vars
    const { data, error } = await supabase.from("products").select()
    setProducts(data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
  return (  //  <></>   == this is react fragment to return the value we use this
    <>
    <Products products = {products}/>
    </>
  )
}

export default Home