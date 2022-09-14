import { useEffect, useState } from 'react'
import agent from '../../app/api/agent'
import LoadingComponent from '../../app/layout/LoadingComponent'
import { Product } from '../../app/models/Product'
import ProductList from './ProductList'

export default function Catalog() {

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true);
  // ส่วนแรกจะทำทันทีเมื่อเข้าหน้านี้ ส่วน 2 จะแสดงตอนออกนี้
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  //

  useEffect(() => {
    agent.Catalog.list()
    .then((response : any)=>setProducts(response))
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false));
  }, [])
  
  if (loading) return <LoadingComponent message="Loading Products....." />;

  return (
    <>
      <ProductList products={products}/>
    </>
  )
}
