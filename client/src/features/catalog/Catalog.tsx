import { useEffect, useState } from 'react'
import agent from '../../app/api/agent'
import LoadingComponent from '../../app/layout/LoadingComponent'
import { Product } from '../../app/models/Product'
import { useAppSelector, useAppDispatch } from '../../app/store/configureStore'
import { productSelectors, fetchProductsAsync } from './catalogSlice'
import ProductList from './ProductList'

export default function Catalog() {

  const products = useAppSelector(productSelectors.selectAll)
  const {productsLoaded,status} = useAppSelector(state=>state.catalog)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
  if(!productsLoaded) 
      dispatch(fetchProductsAsync())
  },[productsLoaded,dispatch]);

  if(status.includes('pending')) return <LoadingComponent message="Loading Products..."/>

  return (
    <>
      <ProductList products={products}/>
    </>
  )
}
