import React, { useEffect, useState } from 'react'
import { Product } from '../../app/models/Product'
import ProductList from './ProductList'

export default function Catalog() {

  const [products, setProducts] = useState<Product[]>([])


  // ส่วนแรกจะทำทันทีเมื่อเข้าหน้านี้ ส่วน 2 จะแสดงตอนออกนี้
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  //

  useEffect(() => {
    fetch("http://localhost:5000/api/Products")
    .then((respone)=>respone.json())
    .then((data)=>setProducts(data))
    .catch((error)=>console.log(error))
  }, [])
  

  return (
    <>
      <ProductList products={products}/>
    </>
  )
}
