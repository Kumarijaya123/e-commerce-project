/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../config/supabase'
import { useAuth } from '../context/authContext'

function Cart() {
  const [loading, setLoading] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const {session} = useAuth()
  console.log("session", session)
  async function getProduct(id) {
    let { data, error } = await supabase
        .from("products")
        .select()
        .eq("id", id)
        .single();
    return data;
}
  useEffect(() => {
    async function getCart() {
      setLoading(true)
      const { user } = session
      let { data, error } = await supabase
        .from('cart')
        .select(`product_id, quantity`)

        .eq('customer_id', user.id)
        

      if (error) {
        console.warn(error)

      } else if (data) {
        console.log(data)
        
        data.forEach((cartItem) => {
          //console.log(cartItem.product_id)
          getProduct(cartItem.product_id).then((data) =>
          console.log(data)
          )
        })
      }

      setLoading(false)
    }
    if(session) getCart()
  }, [session])
  return (
    <div>
      <h1>Cart</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product_id}>
              <p>Product ID: {item.product_id}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

}

export default Cart 