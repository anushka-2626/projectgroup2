import React, { useState } from 'react';
import './Store.css'; // Import the CSS for styling
import pic1 from "../../img/11.jpg";
import pic2 from "../../img/22.jpg";
import pic3 from "../../img/33.jpg";

const Store = () => {
  const [cart, setCart] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showCart, setShowCart] = useState(false); // State to toggle cart visibility

  // Sample art pieces with images (all marked as sold out)
  const items = [
    { id: 1, name: 'Art Piece 1', price: 100, image: pic1 },
    { id: 2, name: 'Art Piece 2', price: 200, image: pic2 },
    { id: 3, name: 'Art Piece 3', price: 300, image: pic3 },
  ];

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemToRemove.id)); // Remove item from cart
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission logic
    alert(`Order placed successfully! Items: ${cart.map(item => item.name).join(', ')}`);
    setCart([]);
    setShowForm(false);
    setShowCart(false); // Hide cart after order
  };

  return (
    <div>
      

      <h1>My Art Store</h1>

      <div className="store-items">
        {items.map((item) => (
          <div key={item.id} className="store-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            {/* All items are sold out */}
            <button disabled>
              Sold Out
            </button>
          </div>
        ))}
      </div>

      {/* Button to show cart */}
      <button className="show-cart-button" onClick={() => setShowCart(!showCart)}>
        {showCart ? "Hide My Cart" : "Show My Cart"}
      </button>

      {/* Floating cart */}
      {showCart && (
        <div className="floating-cart">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <button onClick={() => setShowForm(true)}>Proceed to Checkout</button>
          )}
        </div>
      )}

      {/* Checkout Form */}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <h3>Payment Information</h3>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Contact Number" required />
          <input type="text" placeholder="Payment ID" required />
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default Store;