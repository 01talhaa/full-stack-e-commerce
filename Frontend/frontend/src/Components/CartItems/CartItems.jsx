import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        const { id, name, new_price, old_price, image } = e;
        const quantity = cartItems[id];

        if (quantity > 0) {
          return (
            <div key={id}>
              <div className="cartItems-format format-main">
                <img src={image} alt={name} className="carticon-product-icon" />

                <p>{name}</p>
                <p>${new_price}</p>
                <button className="quantity">{quantity}</button>
                <p>${new_price * quantity}</p>

                <img

                  className="remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(id);
                  }}
                  alt="Remove"
                />
              </div>

              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="total">
            <h1>Cart Totals</h1>
            <div>
                <div className="total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
              <div className="total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>Proceed To Checkout</button>
        </div>
        <div className="promoCode">
            <p>If you have a promo code, enter here</p>
            <div className="promoBox">
                <input type="text" 
                placeholder="Promo Code"
                />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
