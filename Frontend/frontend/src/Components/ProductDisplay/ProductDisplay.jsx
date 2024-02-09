import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'



const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext);



  return (
    <div className="productDisplay">
        <div className="display-left">
            <div className="imageList">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productDisplay-image">
                <img className='main-img' src={product.image} alt="" />
            </div>
        </div>


        <div className="display-right">
            <h1>{product.name}</h1>
            <div className="right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="prices">
                <div className="oldProduct-price">${product.old_price}</div>
                <div className="newProduct-price">${product.new_price}</div>
            </div>

            <div className="product-description">
                A lightweight, usually knitted, pullover shrit, close-fitted and with a round neckline and short sleeves, worn as an undershrit or outer garment.
            </div>
            <div className="product-size">
                <h1>Select Size</h1>
                <div className="sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button
            onClick={() => {addToCart(product.id)}}
            >Add To Cart</button>
            <p className='category'><span>Category : </span> Women, T-shirt, crop Top</p>
            <p className='category'><span>Tags : </span> Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay