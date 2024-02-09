// ShopCategory.js
import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item'
import all_product from '../Components/Assets/all_product';


const ShopCategory = (props) => {
  // const all_product = useContext(ShopContext);

  // Filter products based on the category
  console.log(all_product)
  const filteredProducts = all_product.filter(item => props.category === item.category);

  return (
    <div className="shop-category">
      <img className='shopCategory-banner' src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {filteredProducts.length} products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopCategory-products">
        {filteredProducts.map((item) => (
          <Item 
            key={item.id}  
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopCategory-loadMore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
