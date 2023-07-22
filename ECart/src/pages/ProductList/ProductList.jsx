
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import { BASEURL } from '../../Utils/Utils'
import Aos from 'aos'
import 'aos/dist/aos.css';
const ProductList = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await axios(BASEURL)
    setProducts(response?.data)
  }
  console.log(products, "==products");
  useEffect(() => {
    Aos.init();
    getProducts()
  }, [])

  return (
    // <div className='container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-center gap-4 mx-auto mt-24 mb-5 '>
    <div className='container flex flex-wrap justify-center gap-4 mx-auto mt-24 mb-5'>
      {products.map((product) => (
        <Link className="mx-auto" to={`products/${product.id}`} key={product.id} data-aos="fade-up" data-aos-duration="1000">
          <div className=" mx-auto mt-11  w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg ">
            <img className="h-48 w-full object-contain " src={product.thumbnail} alt="Product Image" loading='lazy' />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium  text-black">{product.title}</h2>
              <p className="mb-2 text-base  text-black">{product.description}</p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-black">${product.price - Math.round(product.price * product.discountPercentage / 100)}</p>
                <p className="text-base  font-medium text-black line-through ">${product.price}</p>
                <p className="ml-auto text-base font-medium text-green-500">{Math.round(product.discountPercentage)}% off</p>
              </div>
            </div>
          </div>

        </Link>

      ))}
    </div>
  )
}

export default ProductList