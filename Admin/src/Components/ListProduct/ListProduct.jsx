import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'



const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);


  const fetchinfo = async () =>{
    await fetch('http://localhost:4000/allproducts').then((res) => res.json()).then((data) => {setAllProducts(data)});
  }

  useEffect(() => {
    fetchinfo();
  }, [])


  const removeproduct = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers:  {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({id: id})
    })
    await fetchinfo();
  }


  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="allproducts">
        <hr />
        {allproducts.map((product, index) => {

          return <> <div 
          key={index}
          className="format-main format">

            <img 
            className='product-icon'
            src={product.image} alt="" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img 
            className='remove-icon'
            onClick={() => {removeproduct(product.id)}}
            src={cross_icon} alt="" />
          </div>

          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct